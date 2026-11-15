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
