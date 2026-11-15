import assert from 'node:assert/strict';
import handler from './api/bridge.js';
function res(){return {code:null,headers:{},body:null,setHeader(k,v){this.headers[k]=v;return this},status(c){this.code=c;return this},json(v){this.body=v;return this}}}
let r=res();await handler({method:'GET'},r);assert.equal(r.code,405);
r=res();await handler({method:'POST',body:{action:'notAllowed',args:[]}},r);assert.equal(r.code,400);
delete process.env.GAS_WEB_APP_URL;delete process.env.GAS_BRIDGE_SECRET;
r=res();await handler({method:'POST',body:{action:'getPublicData',args:[]}},r);assert.equal(r.code,503);
process.env.GAS_WEB_APP_URL='https://script.google.com/macros/s/test/exec';
process.env.GAS_BRIDGE_SECRET='test-secret-must-not-return-in-response';
const old=globalThis.fetch;
try{
 globalThis.fetch=async(url,opts)=>{
  assert.equal(url,process.env.GAS_WEB_APP_URL);
  assert.equal(JSON.parse(opts.body).secret,process.env.GAS_BRIDGE_SECRET);
  assert.equal(JSON.parse(opts.body).action,'getPublicData');
  return {ok:true,text:async()=>JSON.stringify({ok:true,activities:[],homePage:null})};
 };
 r=res();await handler({method:'POST',headers:{},body:{action:'getPublicData',args:[]}},r);assert.equal(r.code,200);assert.equal(r.body.ok,true);
 assert.equal(JSON.stringify(r.body).includes('test-secret'),false);
}finally{globalThis.fetch=old}
console.log('Bridge smoke tests passed');


/* CMS link and centered-layout checks: preserve legacy Sheets schema and user content. */
import {readFileSync} from 'node:fs';
const site=readFileSync(new URL('./public/site.js',import.meta.url),'utf8');
const style=readFileSync(new URL('./public/site.css',import.meta.url),'utf8');
const match=site.match(/function safeContentUrl\(value\)\{[\s\S]*?\n\}/);
assert.ok(match,'CMS URL sanitizer must exist');
const safe=new Function('URL',match[0]+';return safeContentUrl')(URL);
assert.equal(safe('https://royal-knowledge-center.vercel.app/#/station/herbs'),'https://royal-knowledge-center.vercel.app/#/station/herbs');
assert.equal(safe('https://youtube.com/watch?v=test'),'https://youtube.com/watch?v=test');
assert.equal(safe('#/station/herbs'),'#/station/herbs');
assert.equal(safe('javascript:alert(1)'),'');
assert.equal(safe('data:text/html,foo'),'');
assert.equal(safe('https://u:p@example.com'),'');
assert.equal(safe('https://example.com/'+String.fromCharCode(10)+'hello'),'');
assert.ok(site.includes('data-visual-layout')&&site.includes('data-home-layout'),'Layout selector present on all editors');
assert.ok(site.includes("b.side==='center'")&&site.includes("layout==='center'"),'Center layout rendered on all pages');
assert.ok(site.includes('data-visual-link-url')&&site.includes('data-home-link-url'),'Link input present on both editors');
assert.ok(site.includes("visualDraft.sections")&&site.includes("homeData.sections"),'Existing content model preserved');
assert.ok(site.includes('home-main-image-link')&&site.includes('knowledge-photo-link'),'Public images render as safe links');
assert.ok(style.includes('.knowledge-row.visual-row.centered')&&style.includes('.home-custom-row.centered'),'Centered layouts are styled');
console.log('CMS link and centered-layout checks passed');
