/* Word-style controls for Royal Knowledge Center visual editor.
   Only strong/em/u/span[font-size] are persisted as rich HTML. */
(function(){
'use strict';
const selector='[contenteditable="true"][data-block-field],[contenteditable="true"][data-visual-page-field],[contenteditable="true"][data-home-field],[contenteditable="true"][data-home-section-field]';
const enc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pt=v=>{const n=Number(v);return Number.isFinite(n)&&n>=8&&n<=96?Math.round(n*2)/2:0};
const align=v=>['left','center','right'].includes(v)?v:'';
let active=null,savedRange=null;
function clean(input){
  const tpl=document.createElement('template');
  tpl.innerHTML=String(input||'').slice(0,30000);
  function walk(n){
    if(n.nodeType===3)return enc(n.nodeValue);
    if(n.nodeType!==1)return '';
    const tag=n.tagName.toLowerCase();
    if(['script','style','svg','math','iframe','object','embed','img','form','input','button','link','meta'].includes(tag))return '';
    if(tag==='br')return '<br>';
    let inner=Array.from(n.childNodes).map(walk).join('');
    if(tag==='p'||tag==='div')return inner+'<br>';
    if(tag==='strong'||tag==='b')return '<strong>'+inner+'</strong>';
    if(tag==='em'||tag==='i')return '<em>'+inner+'</em>';
    if(tag==='u')return '<u>'+inner+'</u>';
    if(tag==='span'||tag==='font'){
      const css=n.style;
      const m=String(css.fontSize||'').trim().match(/^(\d+(?:\.\d+)?)pt$/i),size=m?pt(m[1]):0;
      if(size)inner='<span style="font-size:'+size+'pt">'+inner+'</span>';
      if(/^(bold|[6-9]00)$/i.test(css.fontWeight))inner='<strong>'+inner+'</strong>';
      if(css.fontStyle==='italic')inner='<em>'+inner+'</em>';
      if(String(css.textDecorationLine||css.textDecoration||'').includes('underline'))inner='<u>'+inner+'</u>';
    }
    return inner;
  }
  return Array.from(tpl.content.childNodes).map(walk).join('').replace(/(?:<br>)+$/,'').slice(0,30000);
}
function display(holder,field,plain){
 const html=holder?.rich?.[field];
 return typeof html==='string'&&html?clean(html):enc(String(plain??'')).replace(/\n/g,'<br>');
}
function style(holder,field){
 const f=holder?.format?.[field]||{},a=align(f.align),p=pt(f.pt);
 return (a?'text-align:'+a+';':'')+(p?'font-size:'+p+'pt;':'');
}
function capture(holder,field,el){
 if(!holder||!el)return;
 const html=clean(el.innerHTML);
 if(!holder.rich||typeof holder.rich!=='object')holder.rich={};
 if(/<(?:strong|em|u|span)\b/i.test(html))holder.rich[field]=html;
 else delete holder.rich[field];
 if(!holder.format||typeof holder.format!=='object')holder.format={};
 const a=align(el.style.textAlign),p=pt(String(el.style.fontSize||'').replace(/pt$/i,''));
 if(a||p)holder.format[field]={...(a?{align:a}:{}),...(p?{pt:p}:{})};
 else delete holder.format[field];
}
function toolbar(){
 return '<div class="wordbar" role="toolbar" aria-label="จัดรูปแบบข้อความแบบ Word">'+
 '<span class="wordbar-note">เลือกข้อความ</span>'+
 '<label>ขนาด <input type="number" min="8" max="96" step="1" value="16" data-word-pt aria-label="ขนาดตัวอักษรเป็นพอยต์"> pt</label>'+
 '<span class="wordbar-divider"></span>'+
 '<button type="button" data-word-cmd="bold" title="ตัวหนา Ctrl+B" aria-label="ตัวหนา"><b>B</b></button>'+
 '<button type="button" data-word-cmd="italic" title="ตัวเอียง Ctrl+I" aria-label="ตัวเอียง"><i>I</i></button>'+
 '<button type="button" data-word-cmd="underline" title="ขีดเส้นใต้ Ctrl+U" aria-label="ขีดเส้นใต้"><u>U</u></button>'+
 '<span class="wordbar-divider"></span>'+
 '<button type="button" data-word-align="left" title="ชิดซ้าย" aria-label="จัดชิดซ้าย">☰</button>'+
 '<button type="button" data-word-align="center" title="กึ่งกลาง" aria-label="จัดกึ่งกลาง">≡</button>'+
 '<button type="button" data-word-align="right" title="ชิดขวา" aria-label="จัดชิดขวา">☷</button>'+
 '</div>';
}
function remember(){
 const s=window.getSelection();
 if(!s||!s.rangeCount)return;
 const n=s.anchorNode,el=(n?.nodeType===1?n:n?.parentElement)?.closest?.(selector);
 if(!el||!el.contains(s.focusNode))return;
 active=el;savedRange=s.getRangeAt(0).cloneRange();
}
function run(op,arg){
 const el=active;
 if(!el||!el.isConnected||!el.matches(selector)){window.alert('กรุณาคลิกข้อความที่ต้องการจัดรูปแบบก่อน');return}
 const s=window.getSelection();
 el.focus({preventScroll:true});
 if(savedRange&&el.contains(savedRange.commonAncestorContainer)){
  s.removeAllRanges();s.addRange(savedRange.cloneRange());
 }
 if(op==='align')el.style.textAlign=arg;
 else if(op==='pt'){
  const size=pt(arg);
  if(!size){window.alert('ขนาดตัวอักษรต้องอยู่ระหว่าง 8–96 pt');return}
  if(s.rangeCount&&!s.getRangeAt(0).collapsed&&el.contains(s.getRangeAt(0).commonAncestorContainer)){
   const r=s.getRangeAt(0),span=document.createElement('span');
   span.style.fontSize=size+'pt';span.appendChild(r.extractContents());r.insertNode(span);
   const next=document.createRange();next.selectNodeContents(span);
   s.removeAllRanges();s.addRange(next);
  }else el.style.fontSize=size+'pt';
 }else{
  document.execCommand('styleWithCSS',false,false);
  document.execCommand(op,false,null);
 }
 el.dispatchEvent(new Event('input',{bubbles:true}));
 remember();
}
document.addEventListener('selectionchange',remember);
document.addEventListener('focusin',e=>{const el=e.target.closest?.(selector);if(el){active=el;remember()}});
document.addEventListener('mouseup',remember);
document.addEventListener('keyup',remember);
document.addEventListener('mousedown',e=>{
 if(e.target.closest('[data-word-cmd],[data-word-align]')){remember();e.preventDefault()}
});
document.addEventListener('click',e=>{
 const cmd=e.target.closest('[data-word-cmd]'),a=e.target.closest('[data-word-align]');
 if(cmd){e.preventDefault();run(cmd.dataset.wordCmd);return}
 if(a){e.preventDefault();run('align',a.dataset.wordAlign)}
});
document.addEventListener('change',e=>{if(e.target.matches('[data-word-pt]'))run('pt',e.target.value)});
document.addEventListener('paste',e=>{
 if(!e.target.closest?.(selector))return;
 e.preventDefault();
 const raw=e.clipboardData?.getData('text/plain')||'';
 document.execCommand('insertText',false,raw);
},{capture:true});
window.RoyalRichText=Object.freeze({clean,display,style,capture,toolbar});
})();