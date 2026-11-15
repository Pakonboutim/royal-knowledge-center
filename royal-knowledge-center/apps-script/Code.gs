/**
 * ศูนย์การเรียนรู้ตามศาสตร์พระราชา — Google Apps Script backend.
 * Deployment: Web app, execute as owner, access Anyone. All requests require a shared
 * secret matched against Script Properties. NEVER place that secret in HTML/JS.
 */
const DB_ID = '1N1ifPkMyyEhhUuqFGOAMFlHxd5a-vRRTM6SNrTLJric';
const IMAGE_FOLDER_ID = '1syECJqd40isDn9A0nQCCPK7Y9M6xCHiS';
const VIDEO_FOLDER_ID = '1s_c7QQPuLl7JlRrqIRgq2ujSNzp8spY2';
const GROUP_IDS = ['herbs','vegetables','compost','water','home'];
const FIELDS = ['id','group','kicker','title','short','intro','objective','equipment','steps','takeaway','principles','interpretation','image','updatedAt'];

function asJson_(val) {
  return ContentService.createTextOutput(JSON.stringify(val)).setMimeType(ContentService.MimeType.JSON);
}
function fail_(message, auth) { return {ok:false,message:message||'ทำรายการไม่สำเร็จ',authError:!!auth}; }
function secureEqual_(a,b){
  a=String(a||'');b=String(b||'');let x=a.length^b.length;
  for(let i=0;i<Math.max(a.length,b.length);i++) x |= (a.charCodeAt(i)||0)^(b.charCodeAt(i)||0);
  return x===0;
}
function hash_(txt){return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256,txt,Utilities.Charset.UTF_8).map(x=>('0'+(x&255).toString(16)).slice(-2)).join('');}
function db_(name){const t=SpreadsheetApp.openById(DB_ID).getSheetByName(name);if(!t)throw Error('ไม่พบชีต '+name);return t;}
function rows_(name){const sh=db_(name);const n=sh.getLastRow();return n>0?sh.getRange(1,1,n,sh.getLastColumn()).getDisplayValues():[];}
function find_(name,id){const sh=db_(name),rows=rows_(name);const idx=rows.findIndex((r,i)=>i>0&&r[0]===id);return {sh,idx:idx<0?0:idx+1,row:idx<0?null:rows[idx]};}
function put_(name,id,values){const hit=find_(name,id);const r=hit.idx||hit.sh.getLastRow()+1;hit.sh.getRange(r,1,1,values.length).setValues([values]);}
function pinOk_(group,pin){
  if(!GROUP_IDS.includes(group)||typeof pin!=='string'||pin.length<5||pin.length>128)return false;
  const hit=find_('GroupAccess',group);if(!hit.row||String(hit.row[2]).toLowerCase()!=='true')return false;
  const parts=String(hit.row[1]||'').split(':');
  if(parts.length!==2)return false;
  return secureEqual_(parts[1],hash_(parts[0]+'|'+pin));
}
function auth_(group,pin){
  const cache=CacheService.getScriptCache(),key='attempt:'+group;
  const failures=Number(cache.get(key)||0);
  if(failures>=10)throw Error('ลองเข้าสู่ระบบหลายครั้งเกินไป กรุณาลองอีกครั้งใน 20 นาที');
  if(!pinOk_(group,pin)){
    cache.put(key,String(failures+1),20*60);
    throw Error('รหัสไม่ถูกต้อง หรือยังไม่ได้กำหนดรหัสของกลุ่ม');
  }
  cache.remove(key);
}
function publicData_(){
  const sheet=rows_('Activities');const headers=sheet[0]||[];
  const pages=rows_('VisualPages');const pmap={};
  for(let i=1;i<pages.length;i++)if(pages[i][0]){try{pmap[pages[i][0]]=JSON.parse(pages[i][1])}catch(_){}}
  const activities=sheet.slice(1).filter(r=>GROUP_IDS.includes(r[0])&&r[0]!=='home').map(r=>{
    const o={};for(let i=0;i<headers.length;i++)o[headers[i]]=r[i]||'';
    o.principles=String(o.principles||'').split(',').map(Number).filter(Number.isFinite);
    if(pmap[o.id])o.visualPage=pmap[o.id];return o;
  });
  const homeHit=find_('HomePage','home');let homePage=null;
  if(homeHit.row&&homeHit.row[1])try{homePage=JSON.parse(homeHit.row[1])}catch(_){}
  return {ok:true,activities,homePage};
}
function saveGroup_(group,pin,data){
  auth_(group,pin);if(group==='home')throw Error('ใช้ saveHomePage สำหรับหน้าแรก');
  if(!data||typeof data!=='object')throw Error('ข้อมูลไม่ถูกต้อง');
  const prior=find_('Activities',group).row;
  if(!prior)throw Error('ไม่พบฐานความรู้นี้');
  const src=Object.fromEntries(FIELDS.map((k,i)=>[k,prior[i]]));
  const editable=['kicker','title','short','intro','objective','equipment','steps','takeaway','principles','interpretation','image'];
  for(const k of editable)if(Object.prototype.hasOwnProperty.call(data,k)){
    const x=k==='principles'?(Array.isArray(data[k])?data[k].map(Number).filter(n=>n>=1&&n<=27).join(','):''):String(data[k]??'');
    if(x.length>12000)throw Error('ข้อความยาวเกินกำหนด');
    if(k==='image'&&x&&!/^https:\/\//i.test(x))throw Error('ลิงก์ภาพต้องเป็น HTTPS');
    src[k]=x;
  }
  if(!String(src.title).trim())throw Error('ชื่อฐานความรู้ห้ามว่าง');
  src.updatedAt=new Date().toISOString();
  put_('Activities',group,FIELDS.map(k=>src[k]||''));
  log_(group,'saveGroup');return {ok:true,updatedAt:src.updatedAt};
}
function validContent_(value,max){
  if(!value||typeof value!=='object'||JSON.stringify(value).length>max)throw Error('ข้อมูลหน้าเว็บไม่ถูกต้องหรือใหญ่เกิน');
  return JSON.stringify(value);
}
function saveVisual_(group,pin,page){
  auth_(group,pin);if(group==='home')throw Error('กลุ่มไม่ถูกต้อง');
  if(!page||!Array.isArray(page.sections)||page.sections.length>30||!page.sections.length)throw Error('จำนวนส่วนเนื้อหาไม่ถูกต้อง');
  const json=validContent_(page,45000);
  put_('VisualPages',group,[group,json,new Date().toISOString()]);
  const hit=find_('Activities',group);if(hit.row){
    const row=hit.row.slice(0,FIELDS.length);row[3]=String(page.title||'').slice(0,220);row[4]=String(page.short||'').slice(0,1200);row[13]=new Date().toISOString();
    hit.sh.getRange(hit.idx,1,1,row.length).setValues([row]);
  }
  log_(group,'saveVisualPage');return {ok:true};
}
function saveHome_(group,pin,page){
  auth_(group,pin);if(group!=='home')throw Error('ไม่อนุญาตให้แก้หน้าแรก');
  if(!page||!Array.isArray(page.sections)||page.sections.length>30)throw Error('จำนวนเนื้อหาไม่ถูกต้อง');
  const json=validContent_(page,45000);
  put_('HomePage','home',['home',json,new Date().toISOString()]);
  log_('home','saveHomePage');return {ok:true};
}
function upload_(group,pin,b64,mime,kind){
  auth_(group,pin);
  if(typeof b64!=='string'||b64.length>3900000)throw Error('ไฟล์มีขนาดใหญ่เกิน โปรดลดขนาดไฟล์');
  const isImage=kind==='image';
  if(!((isImage&&['image/jpeg','image/png','image/webp'].includes(mime))||(!isImage&&['video/mp4','video/webm'].includes(mime))))throw Error('ประเภทไฟล์ไม่ถูกต้อง');
  const bytes=Utilities.base64Decode(b64);if(bytes.length>2900000)throw Error('รองรับไฟล์ไม่เกิน 2.9 MB ต่อครั้ง');
  const ext=({'image/jpeg':'jpg','image/png':'png','image/webp':'webp','video/mp4':'mp4','video/webm':'webm'})[mime];
  const fn=group+'-'+new Date().getTime()+'-'+Utilities.getUuid().slice(0,8)+'.'+ext;
  const folder=DriveApp.getFolderById(isImage?IMAGE_FOLDER_ID:VIDEO_FOLDER_ID);
  const file=folder.createFile(Utilities.newBlob(bytes,mime,fn));
  // Images/videos must be viewable by visitors; if the domain blocks sharing, fail instead.
  try{file.setSharing(DriveApp.Access.ANYONE_WITH_LINK,DriveApp.Permission.VIEW)}catch(e){file.setTrashed(true);throw Error('บัญชี Google Drive ไม่อนุญาตการเผยแพร่ไฟล์สาธารณะ')}
  log_(group,'upload-'+kind);
  return {ok:true,url:isImage?'https://drive.google.com/thumbnail?id='+file.getId()+'&sz=w1600':'https://drive.google.com/uc?export=download&id='+file.getId()};
}
function log_(group,action){db_('EditHistory').appendRow([new Date(),group,action]);}
function action_(action,args){
  switch(action){
    case 'getPublicData':return publicData_();
    case 'verifyGroup':auth_(args[0],args[1]);return {ok:true};
    case 'saveGroup':return saveGroup_(args[0],args[1],args[2]);
    case 'saveVisualPage':return saveVisual_(args[0],args[1],args[2]);
    case 'saveHomePage':return saveHome_(args[0],args[1],args[2]);
    case 'uploadGroupImage':return upload_(args[0],args[1],args[2],args[3],'image');
    case 'uploadGroupVideo':return upload_(args[0],args[1],args[2],args[3],'video');
    default:return fail_('ไม่ได้รับอนุญาตให้เรียกใช้ฟังก์ชันนี้');
  }
}
/**
 * Public readiness probe.  The endpoint contains no private IDs or secrets.
 * The actual data and editing API is POST-only and protected by BRIDGE_SECRET.
 */
function doGet(e){
  return asJson_({ok:true,service:'royal-knowledge-center',status:'ready',api:'POST'});
}

function doPost(e){
  try{
    const r=JSON.parse((e&&e.postData&&e.postData.contents)||'{}');
    const expected=PropertiesService.getScriptProperties().getProperty('BRIDGE_SECRET');
    if(!expected||expected.length<32||!secureEqual_(r.secret,expected))return asJson_(fail_('ไม่ได้รับอนุญาต',true));
    const lock=LockService.getScriptLock();
    if(r.action!=='getPublicData'){if(!lock.tryLock(12000))return asJson_(fail_('ระบบกำลังใช้งาน กรุณาลองอีกครั้ง'));}
    try{return asJson_(action_(String(r.action||''),Array.isArray(r.args)?r.args:[]))}
    finally{if(r.action!=='getPublicData')lock.releaseLock()}
  }catch(e){return asJson_(fail_(String(e&&e.message||'เกิดข้อผิดพลาด').slice(0,250),true));}
}

/**
 * Run once in Apps Script editor AFTER adding PIN_* values in Script Properties.
 * The PIN_* properties are deleted after successful hashing, so no plain PIN is
 * ever checked into the code repository or stored in the sheet.
 */
function setupGroupPins(){
  const props=PropertiesService.getScriptProperties();
  const propNames={herbs:'PIN_HERBS',vegetables:'PIN_VEGETABLES',compost:'PIN_COMPOST',water:'PIN_WATER',home:'PIN_HOME'};
  const pins={};
  for(const group of GROUP_IDS){
    const pin=props.getProperty(propNames[group]);
    if(!pin||pin.length<5)throw Error('กรุณาตั้งค่า Script property '+propNames[group]+' ยาวอย่างน้อย 5 ตัวอักษรก่อนรัน');
    pins[group]=pin;
  }
  for(const group of GROUP_IDS){
    const salt=Utilities.getUuid();
    put_('GroupAccess',group,[group,salt+':'+hash_(salt+'|'+pins[group]),true]);
  }
  for(const group of GROUP_IDS)props.deleteProperty(propNames[group]);
}

/**
 * Run this from the Apps Script editor before deployment.
 * It checks spreadsheet tabs, Drive folders and the server-side bridge secret.
 * It never prints secret values.
 */
function checkSetup(){
  const expectedSheets=['Activities','GroupAccess','EditHistory','VisualPages','HomePage'];
  const ss=SpreadsheetApp.openById(DB_ID);
  const missing=expectedSheets.filter(name=>!ss.getSheetByName(name));
  if(missing.length)throw Error('ไม่พบแท็บข้อมูล: '+missing.join(', '));
  DriveApp.getFolderById(IMAGE_FOLDER_ID).getName();
  DriveApp.getFolderById(VIDEO_FOLDER_ID).getName();
  const secret=PropertiesService.getScriptProperties().getProperty('BRIDGE_SECRET')||'';
  if(secret.length<32)throw Error('โปรดตั้งค่า BRIDGE_SECRET ใน Script Properties อย่างน้อย 32 ตัวอักษร');
  const access=rows_('GroupAccess').slice(1);
  const unconfigured=GROUP_IDS.filter(id=>!access.some(row=>row[0]===id && String(row[2]).toLowerCase()==='true'));
  if(unconfigured.length)throw Error('ยังไม่ได้ตั้งค่ารหัสกลุ่ม: '+unconfigured.join(', '));
  Logger.log('READY: Sheets, Drive folders, access configuration and bridge secret look valid');
  return {ok:true};
}
