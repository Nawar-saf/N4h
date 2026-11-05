(() => {
"use strict";
const $ = id => document.getElementById(id);
const by = selector => [...document.querySelectorAll(selector)];
const EMAIL = "nawar.business1@gmail.com";
const form = $("product-form"), contactForm = $("contact-form");
if (!form || !contactForm) return;
const arHtml = {}, arPlaceholders = {};
by("[data-i18n]").forEach(node => { arHtml[node.dataset.i18n] = node.innerHTML; });
by("[data-placeholder]").forEach(node => { arPlaceholders[node.dataset.placeholder] = node.placeholder; });
const en = {
 navWhy:"What we build",navBuilder:"Try the tool",navExamples:"Examples",navHelp:"Build with us",navContact:"Contact us ↗",
 eyebrow:"SAZLER / FROM IDEA TO LAUNCH",
 heroTitle:'You have expertise. <span class="gradient">Turn it into a digital product people can buy.</span>',
 heroDesc:"Coach, expert, or creator? Turn your knowledge into a first product draft, a landing page and a launch plan. Want it actually built, edited and marketed? Work directly with us.",
 heroTool:"Create a product draft ↗",heroDone:"Build it with SAZLER",
 trust1:"✓ Free preview, no signup",trust2:"✓ Tailored execution with our team",
 heroPhoto:"Idea → product → sales page → launch",floatText:"More than a plan.<br>Take the first real step.",
 strip1:"For coaches, experts and creators",strip2:"One clear idea",strip3:"Product draft",strip4:"Sales page & marketing",
 whyEyebrow:"THE DIFFERENCE",
 whyTitle:'We are not selling generic business advice. <span>We help you start creating what you want to sell.</span>',
 whyDesc:"Plenty of platforms sell finished products. We focus on the step before selling: what to create, how to package it and how to test interest.",
 feature1Title:"Product from your expertise",feature1Desc:"Shape your knowledge into a guide, toolkit, programme or focused tool, according to your idea.",
 feature2Title:"A page that explains the offer",feature2Desc:"A clear page for the outcome, contents, price and contact or checkout link.",
 feature3Title:"Launch and content",feature3Desc:"Get launch direction and first-customer messaging. With hands-on execution, we can help with video editing and marketing.",
 examplesEyebrow:"PRODUCT POSSIBILITIES",examplesTitle:"What could you turn into a digital product?",
 examplesDesc:"These are illustrative ideas, not client case studies or verified sales results.",
 example1Type:"Fitness coach",example1Title:"30-day home training programme",example1Desc:"A training guide, daily tracker, product page and launch content.",
 example2Type:"Nutrition expert",example2Title:"Weekly meal-prep guide",example2Desc:"An actionable guide, shopping lists and a product landing page.",
 example3Type:"Business expert",example3Title:"Small-business operating toolkit",example3Desc:"Fillable templates, instructions and a compelling product offer.",
 builderEyebrow:"INTERACTIVE TOOL / FREE PREVIEW",builderTitle:"Build the first version of your idea.",
 builderDesc:"Use your actual knowledge. The tool makes an editable digital-product draft, a standalone HTML offer page, and an introductory marketing plan. It cannot replace expert content or real demand testing.",
 builderLocal:"🔒 Your answers stay in this browser",
 formTitle:"Tell us about your idea",labelExpertise:"What is your area of expertise?",labelAudience:"Who would buy from you?",
 labelProblem:"What problem do they have?",labelResult:"What specific outcome can you help deliver?",
 labelSteps:"Three steps or components from your expertise <small>One per line</small>",labelFormat:"Product format",labelPrice:"Test price in USD",
 labelLink:"A link where your buyers can reach you <small>Optional</small>",
 formatGuide:"Digital guide / programme",formatToolkit:"Templates and worksheets",formatCourse:"Workshop / learning content",formatTool:"Simple web tool",
 generate:"Create my product draft ↗",
 formDisclaimer:"Outputs are starter templates based on your inputs, not a complete automated product or guaranteed sales. Payments are not active on this website.",
 resultTitle:"Here is what you can create",
 emptyTitle:"Turn your idea into something you can show people.",
 emptyDesc:"Complete the form to generate an editable draft, a simple offer page and a launch starter plan.",
 outputLabel:"YOUR STARTER OFFER",outlineTitle:"Inside the product draft",validationTitle:"Your first marketing move",
 downloadProduct:"Download editable product HTML",downloadLanding:"Download offer page HTML",
 downloadLaunch:"Download 7-day launch plan TXT",askBuild:"Ask SAZLER to build this with you ↗",
 resultNote:"Review and edit these materials before you sell. The offer page is a static HTML file; it needs your contact link, and payments are not enabled.",
 assistedEyebrow:"WANT THE REAL THING BUILT?",assistedTitle:'We can help execute your launch. <span>Product, landing page, and content.</span>',
 assistedDesc:"Instead of looking for a developer, video editor and marketer separately, discuss one launch with us. We scope what you actually need: product creation, landing page, launch videos, and a practical plan to attract initial prospects. Quotes are tailored to the work, with no rigid packages or guaranteed revenue.",
 assistedPoint1:"✓ Product design and development",assistedPoint2:"✓ Landing page or application as needed",
 assistedPoint3:"✓ Video editing and marketing content",assistedPoint4:"✓ Launch and customer acquisition planning",
 assistedCta:"Tell us about your project ↗",assistedCaption:"Practical execution, not hype.",
 requestEyebrow:"LET'S TALK ABOUT YOUR PRODUCT",requestTitle:"Tell us what you want to launch.",
 requestDesc:"Describe your idea and where you need support. The button opens a prefilled email draft in your mail app. Your data is not secretly submitted and you still need to press Send.",
 contactName:"Your name or project",contactEmail:"Your contact email",contactType:"Where do you need help?",
 helpLaunch:"Digital product, from concept to launch",helpBuild:"Build the product or tool",
 helpMarketing:"Sales page, content and marketing",contactDetails:"A short description",
 contactSubmit:"Prepare my email ↗",contactNote:"Your email app will open. You need to send the message yourself.",
 footerMsg:"From expertise to a product worth testing. No get-rich-quick promises.",credit:"Illustrative photographs via Unsplash.",
 placeholderExpertise:"e.g. fitness coaching for beginners",placeholderAudience:"e.g. people training at home",
 placeholderProblem:"e.g. no time or training routine",placeholderResult:"e.g. stick to a 30-day training plan",
 placeholderSteps:"Assess their starting level\nCreate a weekly plan\nTrack progress"
};

Object.assign(en,{
 navWhy:"How we work",navBuilder:"Try the tool",navHelp:"Contact",navContact:"Discuss your idea ↗",
 eyebrow:"SAZLER / PRODUCT STUDIO",
 heroTitle:'Have a digital product in mind? <span>Let’s build it.</span>',
 heroDesc:"We turn expertise into a real digital product, its sales page and launch content. Or start yourself with our free tool.",
 heroDone:"Discuss your project ↗",heroTool:"Try the tool ↗",
 heroPhoto:"From idea to a product you can show.",
 whyEyebrow:"APPROACH",
 whyTitle:'Start with the product. <span>Not a list of services.</span>',
 whyDesc:"Every project is different. We build what it needs to reach real customers.",
 feature1Title:"Define the product",feature1Desc:"One clear outcome. One specific buyer.",
 feature2Title:"Build it and its page",feature2Desc:"Software or digital files, with a straightforward offer page.",
 feature3Title:"Prepare the launch",feature3Desc:"Video editing, content and a plan to reach prospects.",
 examplesEyebrow:"FOR EXAMPLE",example1Title:"A coach's programme",example2Title:"An expert's small tool",example3Title:"A downloadable resource",
 builderEyebrow:"FREE TOOL",builderTitle:"See your idea before building it.",
 builderDesc:"Enter your idea and get a product draft, an offer page and a simple launch plan. All editable starter files.",
 formTitle:"Your idea",labelExpertise:"What do you know?",labelAudience:"Who would buy this?",
 labelProblem:"What problem will it solve?",labelResult:"What outcome will the buyer get?",
 labelSteps:"3 steps from your expertise <small>one per line</small>",
 labelFormat:"Product type",labelPrice:"Test price (USD)",labelLink:"Buyer contact link <small>optional</small>",
 formatGuide:"Guide / programme",formatToolkit:"Templates",formatCourse:"Workshop",formatTool:"Web tool",
 generate:"Create draft ↗",formDisclaimer:"Rule-based drafts, not a finished product or guaranteed sales.",
 resultTitle:"Result",emptyTitle:"Your draft will appear here.",emptyDesc:"Fill in the fields to see the initial output.",
 outputLabel:"SUGGESTED PRODUCT",outlineTitle:"Draft contents",validationTitle:"Demand test",
 downloadProduct:"Download product draft",downloadLanding:"Download offer page",downloadLaunch:"Download launch plan",
 askBuild:"Want us to build it with you? ↗",
 resultNote:"Review and edit files before selling. Payments are not integrated.",
 requestEyebrow:"CONTACT",requestTitle:"Want us to build this with you?",
 requestDesc:"Tell us what you're creating. We'll scope the work and price it for your project, with no fixed packages.",
 assistedPoint1:"Development · sales page · video editing · marketing",
 contactName:"Your name or project",contactEmail:"Your email",contactType:"Where do you need help?",
 helpLaunch:"From idea to launch",helpBuild:"Build a product or tool",helpMarketing:"Sales page and content",
 contactDetails:"Your idea, briefly",contactSubmit:"Prepare email ↗",
 contactNote:"Opens your email app. Review and press Send.",
 footerMsg:"From idea to product."
});
let lang = "ar", current = null;
const labels = {
 guide:{ar:"دليل / برنامج رقمي",en:"digital guide / programme"},
 toolkit:{ar:"قوالب وأوراق عمل",en:"templates and worksheets"},
 "mini-course":{ar:"محتوى تدريبي",en:"learning materials"},
 tool:{ar:"أداة ويب",en:"web tool"}
};
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const clean = v => String(v ?? "").trim().replace(/[ \t]+/g," ");
function setLang(value) {
 lang = value === "en" ? "en" : "ar";
 document.documentElement.lang = lang;
 document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
 by("[data-i18n]").forEach(node => {
   const key = node.dataset.i18n;
   node.innerHTML = lang === "en" && en[key] !== undefined ? en[key] : arHtml[key];
 });
 by("[data-placeholder]").forEach(node => {
   const key = node.dataset.placeholder;
   node.placeholder = lang === "en" ? (en[key] || arPlaceholders[key]) : arPlaceholders[key];
 });
 $("language").textContent = lang === "ar" ? "English" : "العربية";
 document.title = lang === "ar" ? "SAZLER Launch OS — من خبرتك إلى منتج قابل للبيع" : "SAZLER Launch OS — Turn expertise into a sellable product";
 try {localStorage.setItem("sazler-ui-language",lang);} catch (_) {}
 if (current) render(current);
}
$("language").addEventListener("click",() => setLang(lang === "ar" ? "en" : "ar"));
$("steps").addEventListener("input",() => $("steps").setCustomValidity(""));
function getValues() {
 const data = new FormData(form);
 const steps = String(data.get("steps") || "").split(/\r?\n/).map(clean).filter(Boolean);
 if (steps.length < 3) {
   $("steps").setCustomValidity(lang === "ar" ? "اكتب 3 خطوات، كل واحدة بسطر." : "Enter three steps, one per line.");
   $("steps").reportValidity();
   return null;
 }
 const link = clean(data.get("customerLink"));
 let safeLink = "";
 if (link) {
   try { const parsed = new URL(link); if (["https:","http:"].includes(parsed.protocol)) safeLink = parsed.href; }
   catch (_) {}
   if (!safeLink) {$("customer-link").setCustomValidity(lang === "ar" ? "استخدم رابط يبدأ بـ https://" : "Use a valid https:// link."); $("customer-link").reportValidity();return null;}
 }
 $("customer-link").setCustomValidity("");
 const value = {expertise:clean(data.get("expertise")),audience:clean(data.get("audience")),
   problem:clean(data.get("problem")),result:clean(data.get("result")),steps:steps.slice(0,12),
   format:clean(data.get("format")),price:Number(data.get("price")),customerLink:safeLink};
 if (![value.expertise,value.audience,value.problem,value.result].every(Boolean)) return null;
 if (!labels[value.format] || !Number.isFinite(value.price) || value.price < 1 || value.price > 9999) return null;
 return value;
}
function productCopy(v) {
 const type=labels[v.format][lang];
 if(lang === "ar") return {
  title:type+" لـ "+v.audience,
  description:"مسودة منتج تساعد "+v.audience+" على "+v.result+"، وتتعامل مع مشكلة: "+v.problem+". السعر المقترح لاختبار الطلب $"+v.price+".",
  pitch:"جرّب تحكي مع 10 أشخاص من "+v.audience+" واسألهم كيف عم يحلّوا "+v.problem+" اليوم، وبعدين اعرض عليهم النتيجة والسعر قبل ما تبني النسخة الكاملة.",
  first:"شو رأيك لو في "+type+" بيساعدك على "+v.result+"؟ شو الشي اللي لازم يكون فيه حتى تفكر تدفع مقابله؟"
 };
 return {
  title:type+" for "+v.audience,
  description:"A starter product draft for "+v.audience+" to "+v.result+". It addresses the problem: "+v.problem+". Suggested test price: $"+v.price+".",
  pitch:"Talk to 10 people among "+v.audience+" and ask how they currently deal with "+v.problem+". Test the proposed result and price before building the full product.",
  first:"Would a "+type+" to help you "+v.result+" be valuable? What would it need for you to consider paying?"
 };
}
function render(v) {
 const copy=productCopy(v);
 $("result-empty").hidden=true;
 $("result-done").hidden=false;
 $("output-name").textContent=copy.title;
 $("output-description").textContent=copy.description;
 const list=$("output-steps");
 list.replaceChildren();
 v.steps.forEach(step=>{const li=document.createElement("li");li.textContent=step;list.appendChild(li);});
 $("output-pitch").textContent=copy.pitch;
 $("result-status").textContent="";
}
function downloadFile(name,contents,type) {
 const blob=new Blob([contents],{type:type+";charset=utf-8"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");
 a.href=url;a.download=name;
 document.body.appendChild(a);a.click();a.remove();
 setTimeout(()=>URL.revokeObjectURL(url),1500);
}
function productHtml(v) {
 const p=productCopy(v),rtl=lang==="ar";
 const instruction=rtl?"اضغط داخل أي مربع لتعديل المحتوى من خبرتك، ثم اطبع أو احفظ PDF. هذا قالب أولي وليس منتجاً مكتمل المحتوى.":"Click any text box to edit with your expertise, then print or save as PDF. This is a starter template, not a finished expert product.";
 const body=v.steps.map((step,i)=>'<section><span class="step">0'+(i+1)+'</span><h2>'+esc(step)+'</h2><div contenteditable="true" class="edit">'+(rtl?"أضف شرحاً عملياً، مثالاً حقيقياً، وتمريناً من خبرتك لهذه الخطوة.":"Add practical instructions, a real example, and an exercise based on your expertise for this step.")+'</div></section>').join("");
 return ['<!doctype html><html lang="',rtl?'ar':'en','" dir="',rtl?'rtl':'ltr','"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>',esc(p.title),'</title>',
 '<style>body{margin:0;background:#e9f0f1;color:#162936;font:17px/1.8 system-ui,sans-serif}main{max-width:780px;background:white;margin:32px auto;padding:48px;border-radius:16px;box-shadow:0 15px 40px #0001}h1{font-size:40px;line-height:1.3;margin:12px 0}h2{font-size:24px}.tag,.step{color:#098b78;font-weight:bold}.edit{min-height:140px;border:2px dashed #b9cbd0;background:#f7fafb;border-radius:12px;padding:20px;outline-offset:4px}section{margin:42px 0}button{background:#0b7d72;color:white;border:0;border-radius:9px;padding:14px 20px;cursor:pointer}small{color:#526d7c}@media(max-width:650px){main{padding:26px;margin:10px}}@media print{body{background:white}main{padding:0;margin:0;box-shadow:none}button{display:none}.edit{border:0}}</style></head><body><main><div class="tag">SAZLER / PRODUCT DRAFT</div><h1>',esc(p.title),'</h1><p>',esc(p.description),'</p><p><small>',esc(instruction),'</small></p><button onclick="window.print()">',rtl?'حفظ PDF / طباعة':'Save PDF / Print','</button>',body,'<section><h2>',rtl?'خطوة التطبيق':'Action step','</h2><div contenteditable="true" class="edit">',rtl?'أضف قائمة تنفيذ مختصرة ومقياساً للنتيجة.':'Add a short implementation checklist and success measure.','</div></section><small>© SAZLER — ',rtl?'مسودة قابلة للتعديل':'Editable draft','</small></main></body></html>'].join("");
}
function landingHtml(v) {
 const p=productCopy(v),rtl=lang==="ar",hasLink=Boolean(v.customerLink);
 const cta=rtl?"أنا مهتم بالمنتج":"I'm interested";
 const link=hasLink ? '<a class="cta" href="'+esc(v.customerLink)+'" target="_blank" rel="noopener noreferrer">'+cta+'</a>' : '<div class="missing">'+(rtl?'أضف رابط التواصل الخاص بك لتفعيل زر طلب المنتج قبل النشر.':'Add your contact link to enable the call-to-action before publishing.')+'</div>';
 const items=v.steps.map(step=>'<li>'+esc(step)+'</li>').join("");
 return ['<!doctype html><html lang="',rtl?'ar':'en','" dir="',rtl?'rtl':'ltr','"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="',esc(p.description),'"><title>',esc(p.title),'</title>',
 '<style>*{box-sizing:border-box}body{margin:0;background:#061625;color:#eaf8ff;font:17px/1.8 system-ui,sans-serif}.hero{max-width:1160px;margin:auto;min-height:100vh;padding:70px 28px;display:grid;grid-template-columns:1fr .85fr;gap:60px;align-items:center}h1{font-size:clamp(35px,5vw,64px);line-height:1.25;margin:14px 0}p{color:#b9cbd9}.tag{color:#91e9d0;font-weight:700}.price{font-size:32px;font-weight:800;color:#9ef1d9;margin:28px 0}.cta{display:inline-block;background:#90efd4;color:#08202c;padding:14px 25px;border-radius:11px;text-decoration:none;font-weight:700}.missing{border:1px solid #9c8d59;padding:14px;border-radius:10px;color:#ffe0a2;font-size:13px}.visual{background:#10283c;border:1px solid #416478;border-radius:22px;overflow:hidden}.visual img{display:block;width:100%;height:300px;object-fit:cover}.visual ul{padding:18px 42px 32px;color:#dce8ef}.visual li{padding:7px 0}.disclaimer{font-size:12px;color:#7991a5;margin-top:20px}@media(max-width:700px){.hero{grid-template-columns:1fr;padding-block:45px;gap:35px}.visual img{height:230px}}</style></head><body><main class="hero"><div><span class="tag">DIGITAL PRODUCT / EARLY ACCESS</span><h1>',esc(p.title),'</h1><p>',esc(p.description),'</p><div class="price">$ ',esc(v.price),'</div>',link,'<p class="disclaimer">',rtl?'هذه صفحة عرض تجريبية. لا يوجد دفع مدمج. يجب مراجعة وصف المنتج قبل النشر.':'This is an initial offer page. No payment integration. Review your product claims before publishing.','</p></div><div class="visual"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=950&q=80" alt="Professional workspace"><ul>',items,'</ul></div></main></body></html>'].join("");
}
function launchText(v) {
 const p=productCopy(v);
 const hooks=lang==="ar"?[
  "إذا أنت من "+v.audience+" وبتعاني من "+v.problem+"، هذا ممكن يفيدك.",
  "أكبر خطأ لما تحاول توصل لـ "+v.result+".",
  "3 خطوات عملية من تجربتي لتحسين النتيجة.",
  "شو بيصير لو بدأت بأول خطوة اليوم؟",
  "عم أختبر منتج جديد وأحتاج رأي 10 أشخاص مناسبين."
 ]:[
  "If you are among "+v.audience+" and struggle with "+v.problem+", this may help.",
  "The biggest mistake people make trying to "+v.result+".",
  "Three steps from my experience to improve this outcome.",
  "What would happen if you started with one step today?",
  "I'm testing a new product and need feedback from 10 people."
 ];
 const days=lang==="ar"?[
  "1: حدّد الوعد والمشتري والسعر التجريبي.",
  "2: حضّر محتوى المنتج الأساسي من خبرتك وصحح أي ادعاءات.",
  "3: افتح صفحة العرض وعدّل رابط التواصل الحقيقي.",
  "4: انشر محتوى يشرح المشكلة، مش مجرد إعلان للبيع.",
  "5: احكِ مع 10 مشترين محتملين واستمع للاعتراضات.",
  "6: عدّل العنوان والمزايا حسب التعليقات الفعلية.",
  "7: قرر إذا رح تكمّل بناء المنتج أو تغيّر اتجاهه."
 ]:[
  "1: Define the promise, target buyer and test price.",
  "2: Fill the product draft with genuine expert content.",
  "3: Publish the offer page after updating the contact link.",
  "4: Post content about the problem, not just a sales pitch.",
  "5: Speak to 10 prospective buyers and record objections.",
  "6: Refine your messaging based on actual feedback.",
  "7: Decide whether to build more, pivot or stop."
 ];
 return [
  "SAZLER LAUNCH OS — "+(lang==="ar"?"خطة إطلاق تجريبية":"STARTER LAUNCH PLAN"),
  "","PRODUCT: "+p.title,"OFFER: "+p.description,"PRICE: $"+v.price,
  "",lang==="ar"?"سؤال لاختبار الطلب:":"VALIDATION QUESTION:",p.first,
  "",lang==="ar"?"خطة 7 أيام:":"7-DAY PLAN",...days,
  "",lang==="ar"?"5 أفكار محتوى:":"FIVE CONTENT HOOKS",...hooks.map((h,i)=>(i+1)+". "+h),
  "",lang==="ar"?"خطة أولية، ليست بحث سوق أو ضمان مبيعات.":"Starter hypotheses, not market research or a sales guarantee."
 ].join("\n");
}
form.addEventListener("submit",event=>{
 event.preventDefault();
 if(!form.reportValidity())return;
 const v=getValues();if(!v)return;
 current=v;render(v);
 $("result-panel").scrollIntoView({behavior:"smooth",block:"start"});
});
$("customer-link").addEventListener("input",()=>$("customer-link").setCustomValidity(""));
$("download-product").addEventListener("click",()=>current&&downloadFile("sazler-product-draft.html",productHtml(current),"text/html"));
$("download-landing").addEventListener("click",()=>current&&downloadFile("sazler-sales-page.html",landingHtml(current),"text/html"));
$("download-launch").addEventListener("click",()=>current&&downloadFile("sazler-launch-plan.txt",launchText(current),"text/plain"));
function mailto(subject,body) {
 const url="mailto:"+EMAIL+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
 window.location.href=url;
}
$("ask-build").addEventListener("click",()=>{
 if(!current)return;
 const v=current;
 const subject="SAZLER — Request to build a digital product";
 const body=["Hi SAZLER, I would like help turning this idea into a complete digital product.","",
 "Expertise: "+v.expertise,"Audience: "+v.audience,"Problem: "+v.problem,
 "Desired result: "+v.result,"Format: "+v.format,"Test price: $"+v.price,
 "Key steps:",...v.steps,"","Please contact me to discuss the scope and a custom quote."].join("\n");
 $("result-status").textContent=lang==="ar"?"سيُفتح تطبيق بريدك. تأكد من إرسال الرسالة.":"Your mail app will open. Please press Send.";
 mailto(subject,body);
});
contactForm.addEventListener("submit",e=>{
 e.preventDefault();
 if(!contactForm.reportValidity())return;
 const f=new FormData(contactForm);
 const subject="SAZLER — Project inquiry from "+clean(f.get("contactName"));
 const body=[
  "Name/project: "+clean(f.get("contactName")),
  "Reply to: "+clean(f.get("contactEmail")),
  "Support needed: "+clean(f.get("contactHelp")),
  "Project details:",
  clean(f.get("contactDetails")),
  "",
  "Please reply by email with next steps."
 ].join("\n");
 mailto(subject,body);
});
try {const saved=localStorage.getItem("sazler-ui-language");setLang(saved==="en"?"en":"ar");}catch(_){setLang("ar");}
})();