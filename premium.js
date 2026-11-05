(() => {
"use strict";
const $=id=>document.getElementById(id);
const form=$("product-form");
if(!form||!$("try-example"))return;
const trans={
 sampleLabel:"An example of a usable product, not another promise",
 sampleKicker:"DIGITAL WORKBOOK",sampleTitle:"Content planning toolkit for small businesses",
 sampleDesc:"An editable workbook with activities and a progress tracker.",
 samplePage1:"Action steps",samplePage2:"Worksheets",samplePage3:"Offer page",
 tryExample:"Try a complete demo ↗",kitPreviewSmall:"Interactive workbook with progress tracking",
 kitPreviewOne:"01 — Action steps",kitPreviewTwo:"02 — Practice worksheets",kitPreviewThree:"03 — Progress tracker",
 previewProduct:"Preview the interactive workbook ↗",previewLanding:"Preview the offer page ↗"
};
const original={};
document.querySelectorAll("[data-i18n]").forEach(el=>{if(trans[el.dataset.i18n])original[el.dataset.i18n]=el.innerHTML});
const lang=()=>document.documentElement.lang==="en"?"en":"ar";
const t=(ar,en,l=lang())=>l==="ar"?ar:en;
function translate(){document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(trans[k])el.innerHTML=lang()==="en"?trans[k]:original[k]})}
$("language").addEventListener("click",translate);translate();
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let state=null;
function get(){
 const f=new FormData(form),v={expertise:f.get("expertise"),audience:f.get("audience"),problem:f.get("problem"),result:f.get("result"),steps:String(f.get("steps")||"").split(/\r?\n/).map(x=>x.trim()).filter(Boolean),format:f.get("format"),price:Number(f.get("price")),link:f.get("customerLink"),lang:lang()};
 if(!v.expertise||!v.audience||!v.problem||!v.result||v.steps.length<3)return null;
 try{if(v.link){const u=new URL(v.link);v.link=["http:","https:"].includes(u.protocol)?u.href:""}}catch(e){v.link=""}
 return v;
}
const prefixes={guide:["دليل عملي","Practical guide"],toolkit:["عدّة عمل","Action toolkit"],"mini-course":["برنامج تطبيقي","Action programme"],tool:["لوحة متابعة","Progress tracker"]};
function title(v){const prefix=prefixes[v.format]||prefixes.guide;return t(prefix[0],prefix[1],v.lang)+": "+v.result}
function detail(v){return t("مخصص لـ "+v.audience+" لتجاوز مشكلة "+v.problem+". يتضمن خطوات تنفيذ وأوراق عمل ومتابعة تقدّم.","For "+v.audience+" struggling with "+v.problem+". Includes action steps, worksheets and progress tracking.",v.lang)}
const sharedCss="*{box-sizing:border-box}body{margin:0;background:#e9e5db;color:#222824;font:16px/1.8 system-ui,sans-serif}main{max-width:900px;margin:30px auto;background:#faf8f3;box-shadow:0 20px 60px #0002}.cover{min-height:420px;background:linear-gradient(130deg,#171d20,#39342e);color:#f5ecda;padding:50px;display:flex;flex-direction:column;justify-content:space-between}.cover .mini{font:700 11px system-ui;letter-spacing:2px;color:#dbbe8e}.cover h1{font-size:clamp(34px,6vw,61px);line-height:1.23;margin:20px 0}.cover p{color:#cdc9c0}.body{padding:50px}.note{background:#f0e8d9;border:1px solid #d8c7a7;padding:16px 18px;font-size:13px;color:#70624d}.controls{display:flex;gap:10px;flex-wrap:wrap;margin:23px 0}button{border:0;background:#262c29;color:white;padding:12px 17px;cursor:pointer}.controls button+button{background:#e0cfac;color:#222824}.section{border-top:1px solid #d4cec1;padding:38px 0}.section h2{font-size:29px;margin:7px 0 13px}.muted{font-size:14px;color:#6d7670}.label{font:700 11px system-ui;letter-spacing:2px;color:#a28454}.editable{border:1px dashed #bcb4a4;background:white;padding:18px;margin:20px 0;min-height:90px}.worksheet{padding:20px;background:#f2eee5;border:1px solid #ded5c5}.worksheet label{display:block;font-size:13px;margin:11px 0;color:#656e69}.worksheet textarea{display:block;width:100%;min-height:85px;background:white;border:1px solid #d5ccc0;padding:10px;font:14px system-ui}.check{display:flex;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid #ded6c9}.check input{height:20px;width:20px;accent-color:#ad8d59}.bar{height:9px;background:#ddd6c9;margin-top:20px}.bar b{display:block;height:100%;width:0;background:#ad8d59}.stat{color:#857358;font-size:13px}.days{display:grid;grid-template-columns:1fr 1fr;gap:0 15px}.footer{font-size:11px;color:#7a837d;border-top:1px solid #d8d1c5;padding-top:25px}@media(max-width:680px){main{margin:0}.cover,.body{padding:25px}.days{grid-template-columns:1fr}.cover{min-height:350px}.section h2{font-size:25px}}@media print{body{background:white}main{box-shadow:none;margin:0}.cover{break-after:page}.controls,.note{display:none}.body{padding:0 10px}}";
function wrap(v,body,css,script){
 return '<!doctype html><html lang="'+v.lang+'" dir="'+(v.lang==="ar"?"rtl":"ltr")+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title(v))+'</title><style>'+css+'</style></head><body>'+body+(script||"")+'</body></html>';
}
function workbook(v){
 const chapters=v.steps.map((s,i)=>'<section class="section"><div class="label">STEP / 0'+(i+1)+'</div><h2>'+esc(s)+'</h2><p class="muted">'+esc(t("طبّق هالمرحلة واكتب تعليماتك وأمثلتك من خبرتك.","Use your expertise to add instructions and examples.",v.lang))+'</p><div contenteditable="true" class="editable">'+esc(t("اضغط لتكتب شرحاً عملياً عن: ","Click to write real instructions about: ",v.lang)+s)+'</div><div class="worksheet"><h3>'+esc(t("ورقة تطبيق","Practice worksheet",v.lang))+'</h3><label>'+esc(t("شو رح تعمل؟","Your action",v.lang))+'</label><textarea></textarea><label>'+esc(t("كيف رح تقيس النتيجة؟","Success measure",v.lang))+'</label><textarea></textarea></div></section>').join("");
 const checks=v.steps.map((s,i)=>'<label class="check"><input data-task type="checkbox"><span>'+(i+1)+'. '+esc(s)+'</span></label>').join("");
 const week=Array.from({length:7},(_,i)=>'<label class="check"><input data-task type="checkbox"><span>'+esc(t("اليوم ","Day ",v.lang))+(i+1)+'</span></label>').join("");
 const note=t("هذا نموذج عمل أولي. أضف تعليمات موثوقة ومتكاملة من خبرتك وراجعها قبل بيع المنتج.","This is a starter workbook. Add full, accurate expert guidance and review it before selling.",v.lang);
 const body='<main><div class="cover"><div class="mini">SAZLER / PRODUCT KIT — EDITABLE EDITION</div><div><div class="mini">DIGITAL WORKBOOK</div><h1>'+esc(title(v))+'</h1><p>'+esc(detail(v))+'</p></div><div class="mini">YOUR WORK. YOUR PRODUCT.</div></div><div class="body"><div class="note">'+esc(note)+'</div><div class="controls"><button id="print" type="button">'+esc(t("طباعة / حفظ PDF","Print / Save PDF",v.lang))+'</button><button id="save" type="button">'+esc(t("حفظ التعديلات HTML","Save edited HTML",v.lang))+'</button></div><section class="section"><div class="label">OVERVIEW</div><h2>'+esc(t("خطة تنفيذ المنتج","Your action roadmap",v.lang))+'</h2><p class="muted">'+esc(detail(v))+'</p></section>'+chapters+'<section class="section"><div class="label">PROGRESS TRACKER</div><h2>'+esc(t("من الخطة للتنفيذ","From plan to progress",v.lang))+'</h2>'+checks+'<h3>'+esc(t("متابعة 7 أيام","Seven-day tracker",v.lang))+'</h3><div class="days">'+week+'</div><div class="bar"><b id="bar-fill"></b></div><p class="stat">'+esc(t("نسبة الإنجاز: ","Completed: ",v.lang))+'<span id="progress">0%</span></p></section><p class="footer">'+esc(note)+'</p></div></main>';
 const script=['<script>','(function(){',
 "function update(){var b=[...document.querySelectorAll('[data-task]')],p=b.length?Math.round(b.filter(x=>x.checked).length/b.length*100):0;document.getElementById('bar-fill').style.width=p+'%';document.getElementById('progress').textContent=p+'%';}",
 "document.querySelectorAll('[data-task]').forEach(x=>x.addEventListener('change',update));update();",
 "document.getElementById('print').addEventListener('click',function(){window.print()});",
 "document.getElementById('save').addEventListener('click',function(){var c=document.documentElement.cloneNode(true),a=[...document.querySelectorAll('textarea')],b=[...c.querySelectorAll('textarea')];b.forEach((x,i)=>x.textContent=a[i].value);var d=[...document.querySelectorAll('[data-task]')],e=[...c.querySelectorAll('[data-task]')];e.forEach((x,i)=>d[i].checked?x.setAttribute('checked',''):x.removeAttribute('checked'));var blob=new Blob(['<!doctype html>'+c.outerHTML],{type:'text/html;charset=utf-8'}),u=URL.createObjectURL(blob),link=document.createElement('a');link.href=u;link.download='my-product-edited.html';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(u),1500)});",
 '})();','</script>'].join("");
 return wrap(v,body,sharedCss,script);
}
function landing(v){
 const cta=v.link?'<a class="cta" href="'+esc(v.link)+'" target="_blank" rel="noopener noreferrer">'+esc(t("اطلب التفاصيل ↗","Request details ↗",v.lang))+'</a>':'<div class="warning">'+esc(t("أضف رابط التواصل لتفعيل الطلب قبل النشر.","Add your contact link before publishing.",v.lang))+'</div>';
 const parts=v.steps.map((s,i)=>'<article><small>0'+(i+1)+'</small><h3>'+esc(s)+'</h3></article>').join("");
 const css="*{box-sizing:border-box}body{margin:0;background:#101519;color:#f6f0e6;font:16px/1.75 system-ui,sans-serif}.wrap{max-width:1150px;margin:auto;padding:25px}.nav{display:flex;justify-content:space-between;font:700 11px system-ui;letter-spacing:2px;color:#d7bd93;border-bottom:1px solid #3b3b38;padding:20px 0}.hero{display:grid;grid-template-columns:1fr 360px;align-items:center;gap:65px;min-height:580px}.tag{color:#d8bd94;font:700 11px system-ui;letter-spacing:2px}h1{font-size:clamp(37px,5vw,68px);line-height:1.25;margin:22px 0}p{color:#b1bab6}.price{color:#e2caa8;font-size:35px;margin:25px 0;font-weight:700}.cta{display:inline-block;background:#d8bd94;color:#18201d;text-decoration:none;padding:13px 22px;font-weight:700}.warning{border:1px solid #ac8c5e;padding:14px;color:#e6c99f;font-size:13px}.poster{min-height:430px;box-shadow:18px 25px 70px #0009;transform:rotate(2deg);background:#ebe5d8;color:#202624;padding:30px;display:flex;flex-direction:column;justify-content:space-between}.poster small{color:#9c7c52;letter-spacing:2px}.poster h2{font-size:34px;line-height:1.3}.poster p{color:#5d6a63}.line{border-top:1px solid #aa9d83;padding-top:20px}.contents{border-top:1px solid #3a3a38;padding:40px 0}.contents h2{font-size:32px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.grid article{border:1px solid #45433e;padding:21px}.grid small{color:#d7bd93}.grid h3{font-size:18px}.foot{font-size:12px;color:#9ca09c;border-top:1px solid #363835;padding:22px 0}@media(max-width:730px){.hero{grid-template-columns:1fr;gap:35px;padding:35px 0}.poster{max-width:420px}.grid{grid-template-columns:1fr}}";
 const body='<div class="wrap"><div class="nav"><span>DIGITAL PRODUCT / OFFER PREVIEW</span><span>SAZLER</span></div><section class="hero"><div><span class="tag">EARLY OFFER</span><h1>'+esc(title(v))+'</h1><p>'+esc(detail(v))+'</p><div class="price">$'+esc(v.price)+'</div>'+cta+'</div><div class="poster"><small>YOUR PRODUCT</small><div><h2>'+esc(title(v))+'</h2><p>'+esc(v.result)+'</p></div><small class="line">PRODUCT / 01</small></div></section><section class="contents"><span class="tag">INCLUDED</span><h2>'+esc(t("محتويات المنتج","Inside the product",v.lang))+'</h2><div class="grid">'+parts+'</div></section><div class="foot">'+esc(t("صفحة تجريبية للعرض، بدون دفع مدمج أو ضمان مبيعات.","Early offer preview. No payment integration or guaranteed sales.",v.lang))+'</div></div>';
 return wrap(v,body,css,"");
}
function file(name,content){
 const b=new Blob([content],{type:"text/html;charset=utf-8"}),u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);
}
function preview(content){
 const u=URL.createObjectURL(new Blob([content],{type:"text/html;charset=utf-8"})),opened=window.open(u,"_blank");
 if(!opened)$("result-status").textContent=t("المتصفح منع المعاينة. افتح الملف بعد تنزيله.","Pop-up blocked. Download and open the file.");
 setTimeout(()=>URL.revokeObjectURL(u),90000);
}
form.addEventListener("submit",()=>{
 const v=get();if(!v)return;state=v;
 $("output-name").textContent=title(v);
 $("output-description").textContent=detail(v);
 $("kit-preview-title").textContent=title(v);
 $("output-pitch").textContent=t("قبل إكمال المنتج، اسأل 5–10 من "+v.audience+" كيف يعالجون "+v.problem+" واختبر استعدادهم يدفعوا $"+v.price+".","Before finishing this product, ask 5–10 people among "+v.audience+" about "+v.problem+" and test willingness to pay $"+v.price+".",v.lang);
});
$("try-example").addEventListener("click",()=>{
 const v=lang()==="ar"?{expertise:"تنظيم محتوى إنستغرام",audience:"أصحاب المشاريع الصغيرة",problem:"ما عندهم خطة نشر منتظمة",result:"تنظيم محتوى أسبوع كامل",steps:"تحديد هدف المحتوى الأسبوعي\nاختيار ثلاث أفكار عملية\nجدولة المحتوى وقياس النتائج",format:"toolkit",price:"19",customerLink:""}:{expertise:"Instagram content planning",audience:"small business owners",problem:"lack of a clear posting plan",result:"organise a full week of content",steps:"Define a weekly content goal\nChoose three useful post ideas\nSchedule posts and review performance",format:"toolkit",price:"19",customerLink:""};
 Object.entries(v).forEach(([key,value])=>{if(form.elements[key])form.elements[key].value=value});
 $("steps").setCustomValidity("");form.requestSubmit();
});
[["download-product",workbook,"sazler-interactive-workbook.html"],["download-landing",landing,"sazler-sales-page.html"]].forEach(([id,generator,name])=>{
 $(id).addEventListener("click",event=>{
  if(!state)return;
  event.preventDefault();event.stopImmediatePropagation();
  file(name,generator(state));
 },{capture:true});
});
$("preview-product").addEventListener("click",()=>state&&preview(workbook(state)));
$("preview-landing").addEventListener("click",()=>state&&preview(landing(state)));
})();