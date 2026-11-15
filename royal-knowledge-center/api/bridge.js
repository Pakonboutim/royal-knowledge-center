/* The bridge key and Apps Script URL live ONLY in Vercel server-side environment variables. */
const ACTIONS = new Set(['getPublicData','verifyGroup','saveGroup','saveVisualPage','saveHomePage','uploadGroupImage','uploadGroupVideo']);
export default async function handler(req, res) {
  res.setHeader('Cache-Control','no-store, private, max-age=0');
  res.setHeader('X-Content-Type-Options','nosniff');
  if(req.method==='OPTIONS') return res.status(405).json({ok:false,message:'Method not allowed'});
  if(req.method!=='POST') return res.status(405).json({ok:false,message:'Method not allowed'});
  const {action,args=[]}=(req.body && typeof req.body==='object') ? req.body:{};
  if(!ACTIONS.has(action)||!Array.isArray(args)||args.length>4) return res.status(400).json({ok:false,message:'คำขอไม่ถูกต้อง'});
  if(!process.env.GAS_WEB_APP_URL || !process.env.GAS_BRIDGE_SECRET) return res.status(503).json({ok:false,message:'ระบบบันทึกข้อมูลยังไม่เปิดใช้งาน กรุณาตั้งค่า Google Apps Script ก่อน'});
  if(['uploadGroupImage','uploadGroupVideo'].includes(action) && Number(req.headers['content-length']||0)>4_400_000) return res.status(413).json({ok:false,message:'ไฟล์มีขนาดใหญ่เกินไป'});
  const abort=new AbortController();const timeout=setTimeout(()=>abort.abort(),25000);
  try {
    const up=await fetch(process.env.GAS_WEB_APP_URL,{
      method:'POST',redirect:'follow',signal:abort.signal,
      headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({secret:process.env.GAS_BRIDGE_SECRET,action,args})
    });
    if(!up.ok) return res.status(502).json({ok:false,message:'Google Apps Script ติดต่อไม่ได้ ('+up.status+')'});
    const raw=await up.text();
    if(raw.length>1_300_000) return res.status(502).json({ok:false,message:'คำตอบจากฐานข้อมูลมีขนาดใหญ่เกินไป'});
    let data; try{data=JSON.parse(raw)}catch(_){return res.status(502).json({ok:false,message:'รูปแบบคำตอบจาก Apps Script ไม่ถูกต้อง'})}
    if(!data || typeof data!=='object') return res.status(502).json({ok:false,message:'ข้อมูลจาก Apps Script ไม่ถูกต้อง'});
    if(data.ok===false) return res.status(data.authError?401:400).json({ok:false,message:String(data.message||'ไม่สามารถดำเนินการได้').slice(0,250)});
    return res.status(200).json(data);
  } catch(e){return res.status(502).json({ok:false,message:e.name==='AbortError'?'การเชื่อมต่อฐานข้อมูลหมดเวลา':'ไม่สามารถเชื่อมต่อฐานข้อมูลได้'})}
  finally{clearTimeout(timeout)}
}
