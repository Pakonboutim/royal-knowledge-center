/* Undo/redo session history for the authenticated visual editor.
   Kept in browser memory only: it never changes the published website until Save. */
(function(){
'use strict';
const MAX=80;
let scope='',provider=null,entries=[],index=-1,applying=false,lastTyping=0,lastKind='';
const editable='[contenteditable="true"][data-block-field],[contenteditable="true"][data-visual-page-field],[contenteditable="true"][data-home-field],[contenteditable="true"][data-home-section-field]';
function clone(state){return JSON.stringify(state)}
function status(){return {scope,undo:!!provider&&index>0,redo:!!provider&&index>=0&&index<entries.length-1,length:entries.length,index}}
function buttons(){
 const s=status();
 for(const b of document.querySelectorAll('[data-cms-undo]')){b.disabled=!s.undo;b.setAttribute('aria-disabled',String(!s.undo))}
 for(const b of document.querySelectorAll('[data-cms-redo]')){b.disabled=!s.redo;b.setAttribute('aria-disabled',String(!s.redo))}
}
function record(kind='action'){
 if(!provider||applying)return false;
 let snapshot;
 try{snapshot=clone(provider.read())}catch(e){return false}
 if(snapshot===undefined||snapshot===entries[index]){buttons();return false}
 const now=Date.now();
 if(index<entries.length-1)entries=entries.slice(0,index+1);
 if(kind==='typing'&&lastKind==='typing'&&now-lastTyping<700&&index>0){
   entries[index]=snapshot;
 }else{
   entries.push(snapshot);
   if(entries.length>MAX)entries.shift();
   index=entries.length-1;
 }
 lastTyping=kind==='typing'?now:0;lastKind=kind;
 buttons();return true;
}
function attach(nextScope,read,restore){
 if(!nextScope||typeof read!=='function'||typeof restore!=='function'){
   if(scope){scope='';provider=null;entries=[];index=-1;lastTyping=0;lastKind='';buttons()}
   return;
 }
 if(scope!==nextScope){
   scope=nextScope;provider={read,restore};entries=[];index=-1;lastTyping=0;lastKind='';
   try{entries=[clone(read())];index=0}catch(e){scope='';provider=null;entries=[];index=-1}
 }else{
   provider={read,restore};
   if(!applying)record('action');
 }
 buttons();
}
function navigate(direction){
 if(!provider)return false;
 // Flush changes still in the editable DOM before moving through history.
 record('action');
 const next=index+direction;
 if(next<0||next>=entries.length)return false;
 index=next;lastTyping=0;lastKind='';applying=true;
 try{
   provider.restore(JSON.parse(entries[index]));
 }finally{applying=false;buttons()}
 return true;
}
function undo(){return navigate(-1)}
function redo(){return navigate(1)}
document.addEventListener('click',e=>{
 const back=e.target.closest?.('[data-cms-undo]'),next=e.target.closest?.('[data-cms-redo]');
 if(!back&&!next)return;
 e.preventDefault();
 if(back)undo();else redo();
});
document.addEventListener('keydown',e=>{
 if(!scope||e.altKey||!(e.ctrlKey||e.metaKey))return;
 const key=String(e.key||'').toLowerCase();
 const isUndo=key==='z'&&!e.shiftKey;
 const isRedo=key==='y'&&!e.shiftKey||key==='z'&&e.shiftKey;
 if(!isUndo&&!isRedo)return;
 const target=e.target;
 // Let ordinary form fields use their own native undo stack.
 if(target?.matches?.('input,textarea,select')&&!target?.matches?.(editable))return;
 e.preventDefault();
 if(isUndo)undo();else redo();
},true);
document.addEventListener('input',e=>{
 if(!scope)return;
 if(e.target?.closest?.(editable)){
   queueMicrotask(()=>record(e.isTrusted?'typing':'action'));return;
 }
 const controls='[data-visual-link-url],[data-visual-link-label],[data-home-link-url],[data-home-link-label],[data-visual-video-url]';
 if(e.target?.matches?.(controls))queueMicrotask(()=>record('typing'));
});
document.addEventListener('change',e=>{
 if(!scope)return;
 const controls='[data-visual-layout],[data-visual-size],[data-visual-link-mode],[data-home-layout],[data-home-link-mode],[data-visual-video-loop]';
 if(e.target?.matches?.(controls))queueMicrotask(()=>record('action'));
});
window.RoyalHistory=Object.freeze({attach,record,undo,redo,status,buttons});
})();
