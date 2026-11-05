(() => {
  "use strict";
  const form = document.getElementById("launch-form");
  if (!form) return;
  const $ = id => document.getElementById(id);
  const originals = {};
  document.querySelectorAll("[data-i18n]").forEach(el => originals[el.dataset.i18n] = el.innerHTML);
  const originalPlaceholders = {};
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => originalPlaceholders[el.dataset.i18nPlaceholder] = el.placeholder);
  const ar = {
    navHow:"كيف بتشتغل",navTool:"جرّب الأداة",navProduct:"المنتج",navStart:"ابدأ مجاناً ←",
    heroTag:"من الفكرة لأول عميل · مساحة تنفيذ عملية",
    heroTitle:"منتجك الرقمي الجاي لازم يبدأ بمشتري، مو بكورس.",
    heroDesc:"SAZLER Launch OS يحوّل خبرتك لعرض محدّد، ومسودة صفحة بيع، وخطوات فعلية للوصول لأول مشترين محتملين. اختبر الطلب قبل ما تستثمر ببناء المنتج.",
    heroPrimary:"ابنِ خطة إطلاقك ←",heroSecondary:"اعرف كيف بتشتغل ↓",
    noteOne:"بلا تسجيل للتجربة",noteTwo:"عربي + إنجليزي",noteThree:"تنزيل الملفات",
    visualLabel:"خارطة إطلاق المنتج",visualTitle:"من خبرتك لعرض قابل للاختبار.",
    vStep1:"حدّد المشتري",vStep1s:"مين عنده المشكلة الملحّة؟",
    vStep2:"صغ العرض",vStep2s:"وعد واحد بنتيجة واضحة",
    vStep3:"اختبر الطلب",vStep3s:"احكي مع 10 مشترين محتملين",
    vStep4:"انشر وحسّن",vStep4s:"ابنِ فقط اللي الناس بدها إياه",
    visualBottom:"اختبر قبل ما تبني",
    proof:"مو بروشور وكالة، ولا كورس من 40 ساعة. خطوة عملية لتجربة بيع منتج رقمي.",
    howTag:"المنهج",howTitle:"المنتج ما إله قيمة تجارية إذا ما حدا بده إياه.",
    howDesc:"منبدأ بالطلب، منحدد عرض واحد، ومنعطيك المواد اللازمة لتختبره.",
    how1Title:"اختار مشتري ومشكلة",how1Body:"حوّل مهارتك العامة لحلّ محدّد لفئة واضحة.",
    how2Title:"حضّر عرض مدفوع",how2Body:"قرّر شو رح تسلّم، وليش مهم، وشو سعر التجربة.",
    how3Title:"ابدأ محادثات مع العملاء",how3Body:"رسائل محددة وخطة سبعة أيام بدل انتظار المشاهدات.",
    builderTag:"مختبر الإطلاق التفاعلي · تجربة مجانية",
    builderTitle:"جهّز أول نسخة من عرضك.",
    builderDesc:"ست مدخلات ونتيجة قابلة للتطبيق. إجاباتك بتضل على جهازك وما بتنرسل لخادم.",
    privacy:"● مدخلات محلية فقط",
    formTitle:"فكرة المنتج",formDesc:"كن محدّد، مو ضروري تكون كامل.",
    skillLabel:"شو المهارة أو الخبرة اللي بتعرفها؟",
    audienceLabel:"مين أكثر ناس محتاجينها؟",outcomeLabel:"شو النتيجة اللي رح يحصلوا عليها؟",
    formatLabel:"نوع المنتج",formatTemplate:"قالب / عدة عمل",formatGuide:"دليل / كتاب رقمي",
    formatWorkshop:"ورشة مصغّرة",formatTool:"أداة ويب صغيرة",
    priceLabel:"سعر الاختبار بالدولار",
    channelLabel:"وين فيك توصل للمشترين؟",channelCommunity:"مجتمعات أونلاين",
    channelEmail:"مراسلات بريدية",
    generate:"ولّد خطة الإطلاق ←",
    noAi:"مسودة بقواعد واضحة، مو بحث سوق بالذكاء الاصطناعي ولا ضمان مبيعات.",
    outputKicker:"02 / نتيجتك",outputEmptyTitle:"إطلاقك بيبدأ من هون.",
    outputEmptyBody:"عبّي النموذج لتطلع بصياغة عرض، وخطوات اختبار الطلب، ورسالة تواصل، وصفحة بيع قابلة للتنزيل.",
    resultsKicker:"02 / خطة أولى خاصة بفكرتك",
    validateTitle:"اختبر قبل ما تبني",messageTitle:"رسالة لأول مشترٍ محتمل",
    weekTitle:"أول سبعة أيام",copy:"نسخ الخطة",downloadPlan:"تنزيل الخطة",
    downloadPage:"تنزيل صفحة البيع ←",
    resultsFoot:"كلها فرضيات للاختبار. لازم تتأكد من الطلب مع ناس حقيقيين قبل ما تستثمر بالبناء.",
    productTag:"منتج واحد محدد",productTitle:"تعرّف على SAZLER Launch OS.",
    productDesc:"مساحة عمل رقمية بتساعد أصحاب الخبرات وصانعي المحتوى يختبروا، يجهّزوا ويطلقوا أول منتج. منتج بتستخدمه، مو قائمة خدمات عامة.",
    product1:"أدوات لصياغة العرض وخطة إطلاقه",product2:"رسائل عملية للوصول لأول مهتمين",
    product3:"صفحة بيع قابلة للتنزيل والتعديل",product4:"تواصل بشري اختياري مع فريق SAZLER",
    priceTag:"السعر المستهدف عند الإطلاق",oneTime:"دفعة واحدة",
    priceDesc:"السعر المقترح للمنتج الكامل. الأداة فوق تجربة مجانية، والدفع والوصول المدفوع مو مفعّلين بعد.",
    tryFree:"جرّب الأداة مجاناً ←",checkoutNotice:"ما منجمع أي مدفوعات بهالصفحة.",
    helpTag:"بدك تحكي مع إنسان؟",helpTitle:"فيك تبني لحالك. أو تحكي معنا.",
    helpDesc:"فيك تناقش مع SAZLER منتجك المحدد وإنتاجه ومحتواه وأول إطلاقه. تعاون اختياري، مو باقات أو قائمة خدمات وكالة.",
    talkToUs:"احكي مع SAZLER ←",
    faqTag:"التفاصيل",faqTitle:"قبل ما تبدأ",
    q1:"هل الأداة بتضمن مبيعات؟",a1:"لا. بتعطيك طريقة منظّمة لاختبار الطلب، لكن النتيجة بتعتمد على العرض والسوق والتنفيذ.",
    q2:"هل هي مجرد أداة ذكاء اصطناعي؟",a2:"لا. النسخة التجريبية الحالية بتستخدم قواعد واضحة وقوالب قابلة للتنزيل. عم نطوّر SAZLER Launch OS كمنتج عملي.",
    q3:"فيي أستخدمها بدون حساب؟",a3:"إي، التجربة بتشتغل بمتصفحك وبتقدر تنزّل الناتج بدون حساب.",
    footer:"ابدأ بشكل محدد. اختبر الطلب. ابنِ اللي الناس محتاجته.",
    skillPlaceholder:"مثلاً: ضبط مصاريف المطاعم الصغيرة",
    audiencePlaceholder:"مثلاً: أصحاب المقاهي الجدد",
    outcomePlaceholder:"مثلاً: حساب المصاريف الشهرية خلال 30 دقيقة"
  };
  let lang = (localStorage.getItem("sazler-lang") || (navigator.language.startsWith("ar") ? "ar" : "en"));
  function setLanguage(next) {
    lang = next === "ar" ? "ar" : "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (lang === "ar" && ar[key]) el.textContent = ar[key];
      if (lang === "en" && originals[key] !== undefined) el.innerHTML = originals[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = lang === "ar" ? ar[key] : originalPlaceholders[key];
    });
    $("language").textContent = lang === "ar" ? "English" : "العربية";
    localStorage.setItem("sazler-lang",lang);
    if (current) render(current);
  }
  const formatLabels = {
    template: {ar:"عدة عمل / قالب",en:"template / toolkit"},
    guide: {ar:"دليل رقمي",en:"digital guide"},
    workshop: {ar:"ورشة مصغرة",en:"mini workshop"},
    tool: {ar:"أداة ويب مصغرة",en:"small web tool"}
  };
  const channelLabels = {
    instagram:{ar:"إنستغرام",en:"Instagram"},
    linkedin:{ar:"لينكدإن",en:"LinkedIn"},
    community:{ar:"مجتمعات متخصصة",en:"online communities"},
    email:{ar:"البريد الإلكتروني",en:"email"}
  };
  let current = null;
  const safe = s => String(s == null ? "" : s).trim().replace(/\s+/g," ");
  const html = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function getValues() {
    const fd = new FormData(form);
    const d = {
      skill:safe(fd.get("skill")),audience:safe(fd.get("audience")),
      outcome:safe(fd.get("outcome")),format:safe(fd.get("format")),
      price:Number(fd.get("price")),channel:safe(fd.get("channel"))
    };
    if (!d.skill || !d.audience || !d.outcome || !Number.isFinite(d.price) || d.price < 1 || d.price > 9999) return null;
    if (!formatLabels[d.format] || !channelLabels[d.channel]) return null;
    return d;
  }
  function plan(d) {
    const type = formatLabels[d.format][lang];
    const channel = channelLabels[d.channel][lang];
    if (lang === "ar") {
      return {
        title:"منتج "+d.skill+" لـ "+d.audience,
        offer:"مسودة عرض: "+type+" يساعد "+d.audience+" على "+d.outcome+". سعر الاختبار: $"+d.price+". هذا وعد يحتاج إثباتاً من تجربتك الفعلية.",
        steps:[
          "احكي مع 10 أشخاص من "+d.audience+" واسألهم عن تجربتهم الحالية قبل ما تعرض الحل.",
          "اعرض وصف المنتج وسعر $"+d.price+" واسأل إن كانوا مستعدين يدفعوا، مو بس يعجبهم.",
          "دوّن الاعتراضات والعبارات المتكررة؛ لا تبني النسخة الكاملة إلا لما تشوف إشارات شراء جدية."
        ],
        message:"مرحباً! عم أبحث مشكلة مرتبطة بـ "+d.skill+" عند "+d.audience+". إذا عندك دقيقتين، شو أصعب جزء عندك حالياً؟ عم أختبر فكرة "+type+" يساعد على "+d.outcome+"، وبهمّني أسمع تجربتك بصراحة. ما رح أرسل رابط شراء بدون إذنك.",
        week:"اليوم 1: اكتب الفرضية. اليوم 2: حدد 20 شخصاً مناسباً على "+channel+". اليوم 3–4: احكِ مع 10 منهم. اليوم 5: انشر صفحة العرض واجمع اهتماماً حقيقياً. اليوم 6: راجع الاعتراضات والطلبات. اليوم 7: قرر: عدّل العرض، ابنِ نسخة صغيرة، أو أوقف الفكرة."
      };
    }
    return {
      title:d.skill+" for "+d.audience,
      offer:"Draft offer: a "+type+" that helps "+d.audience+" "+d.outcome+". Test price: $"+d.price+". Verify this promise with your actual experience and buyers.",
      steps:[
        "Talk to 10 people in "+d.audience+" about their current process before pitching your solution.",
        "Show the exact offer and $"+d.price+" price. Ask about willingness to pay, not just interest.",
        "Document repeated objections and real buying signals before investing in a full build."
      ],
      message:"Hi! I'm researching a challenge related to "+d.skill+" for "+d.audience+". Could I ask what the hardest part is for you today? I'm testing a "+type+" to help people "+d.outcome+", and I'd value your candid perspective. I won't send a sales link unless you ask.",
      week:"Day 1: Write your assumption. Day 2: Identify 20 relevant people on "+channel+". Days 3–4: Interview 10. Day 5: Publish your offer page and invite genuine interest. Day 6: Review objections and signals. Day 7: improve, build a small version, or stop."
    };
  }
  function render(d) {
    const p = plan(d);
    $("empty-state").hidden = true;
    $("results").hidden = false;
    $("result-title").textContent = p.title;
    $("result-offer").textContent = p.offer;
    const ol = $("result-steps");
    ol.replaceChildren();
    p.steps.forEach(s => {const li=document.createElement("li");li.textContent=s;ol.appendChild(li);});
    $("result-message").textContent = p.message;
    $("result-week").textContent = p.week;
  }
  function asText(d) {
    const p=plan(d);
    const s=lang==="ar"?"خطة اختبار وإطلاق أول منتج":"FIRST PRODUCT VALIDATION PLAN";
    return [s,"SAZLER Launch OS","",p.title,"",p.offer,"",...p.steps.map((v,i)=>(i+1)+". "+v),"",p.message,"",p.week,"",lang==="ar"?"هذه خطة تجريبية، وليست ضماناً للمبيعات.":"This is a draft test plan, not a sales guarantee."].join("\n");
  }
  function download(filename, body, mime) {
    const blob=new Blob([body],{type:mime+";charset=utf-8"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),2000);
  }
  function makePage(d) {
    const p=plan(d),rtl=lang==="ar",ct=rtl?"أنا مهتم — راسلني":"I'm interested — contact me";
    const note=rtl?"هذه صفحة اختبار اهتمام فقط. استبدل عنوان البريد الوهمي قبل النشر؛ لا يتم جمع بيانات تلقائياً.":"This is an interest-test page only. Replace the placeholder email before publishing; it does not collect data automatically.";
    return '<!doctype html><html lang="'+(rtl?'ar':'en')+'" dir="'+(rtl?'rtl':'ltr')+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+html(p.title)+'</title><style>body{margin:0;background:#07111f;color:#eef5ff;font:18px system-ui,-apple-system,sans-serif}main{max-width:800px;margin:12vh auto;padding:30px}small{color:#6ad8e7}h1{font-size:clamp(2.2rem,7vw,4rem);line-height:1.2}p{line-height:1.9;color:#b8c5d8}a{display:inline-block;padding:15px 25px;background:#7ee9da;color:#03101a;border-radius:12px;text-decoration:none;font-weight:700}footer{font-size:13px;margin-top:60px;color:#9facbe}</style></head><body><main><small>EARLY INTEREST TEST</small><h1>'+html(p.title)+'</h1><p>'+html(p.offer)+'</p><a href="mailto:REPLACE_WITH_YOUR_EMAIL@example.com?subject='+encodeURIComponent("Interested in "+p.title)+'">'+html(ct)+'</a><footer>'+html(note)+'</footer></main></body></html>';
  }
  function makeDraft(d) {
    const p=plan(d),rtl=lang==="ar";
    const heading=rtl?"مسودة منتج رقمي قابلة للتحرير":"EDITABLE DIGITAL PRODUCT DRAFT";
    const intro=rtl?"هذه مجرد مسودة عمل. أكمل المعلومات من خبرتك، اختبرها، ودققها قبل بيعها.":"This is a working draft. Add your expertise, test it, and review before selling.";
    const sections=rtl?[
      ["1 — لمن صُمّم؟","اشرح المشكلة التي يواجهها "+d.audience+"، ومتى تظهر ولماذا تستحق الحل."],
      ["2 — ابدأ من هنا","اكتب هنا الخطوات الفعلية التي تعلمتها من خبرتك في "+d.skill+"."],
      ["3 — ورقة عمل","اكتب ثلاثة قرارات أو أرقام يحتاج المشتري إلى ملئها قبل الوصول إلى "+d.outcome+"."],
      ["4 — قائمة التحقق","أضف قائمة تحقق قابلة للتنفيذ، مع أمثلة صحيحة من عملك."],
      ["5 — الخطوة التالية","اختبر هذا المحتوى مع مستخدم حقيقي وحسّنه قبل بيعه."]
    ]:[
      ["1 — Who this is for","Describe the real challenge faced by "+d.audience+" and why it matters."],
      ["2 — Start here","Add specific, accurate steps from your expertise in "+d.skill+"."],
      ["3 — Worksheet","List three decisions or numbers the buyer must fill in to "+d.outcome+"."],
      ["4 — Checklist","Add a tested action checklist with examples from your experience."],
      ["5 — Next step","Test this with a real user and improve it before selling."]
    ];
    const blocks=sections.map(s=>'<section><h2>'+html(s[0])+'</h2><div contenteditable="true" class="editable">'+html(s[1])+'</div></section>').join("");
    return '<!doctype html><html lang="'+(rtl?'ar':'en')+'" dir="'+(rtl?'rtl':'ltr')+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+html(p.title)+'</title><style>body{font:17px system-ui,sans-serif;color:#182332;background:#f5f7fa;margin:0}main{max-width:820px;margin:30px auto;padding:45px;background:white;box-shadow:0 4px 24px #17203118}h1{font-size:2.3rem}h2{font-size:1.2rem;border-bottom:1px solid #ddd;padding-bottom:12px}.editable{padding:15px;border:1px dashed #95a7b9;min-height:90px;line-height:1.8}section{margin:35px 0}small{color:#64748b}button{padding:12px 18px;border:0;border-radius:8px;background:#0c7186;color:white;cursor:pointer}@media print{body{background:white}main{box-shadow:none;margin:0;padding:0}button{display:none}.editable{border:0}}</style></head><body><main><small>SAZLER / '+html(heading)+'</small><h1>'+html(p.title)+'</h1><p>'+html(intro)+'</p><button onclick="window.print()">'+(rtl?"حفظ كـ PDF / طباعة":"Save as PDF / Print")+'</button>'+blocks+'<small>'+(rtl?"انقر داخل المربعات لتعديلها قبل الطباعة.":"Click the boxes to edit before printing.")+'</small></main></body></html>';
  }
  form.addEventListener("submit",e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    current=getValues();
    if (!current) return;
    try {localStorage.setItem("sazler-draft",JSON.stringify(current));}catch(e){}
    render(current);
    $("output-panel").scrollIntoView({behavior:"smooth",block:"nearest"});
  });
  $("language").addEventListener("click",()=>setLanguage(lang==="ar"?"en":"ar"));
  $("copy-plan").addEventListener("click",async()=>{
    if(!current)return;
    try{await navigator.clipboard.writeText(asText(current));$("copy-plan").textContent=lang==="ar"?"تم النسخ ✓":"Copied ✓";setTimeout(()=>$("copy-plan").textContent=lang==="ar"?ar.copy:"Copy plan",1800);}
    catch(e){$("copy-plan").textContent=lang==="ar"?"التنزيل متاح بدل النسخ":"Use download instead";}
  });
  $("download-plan").addEventListener("click",()=>current&&download("sazler-launch-plan.txt",asText(current),"text/plain"));
  $("download-page").addEventListener("click",()=>current&&download("sazler-interest-page.html",makePage(current),"text/html"));
  const draftBtn=document.createElement("button");
  draftBtn.type="button";draftBtn.className="button button-secondary";draftBtn.id="download-draft";draftBtn.textContent="Download product draft";
  $("download-page").parentNode.appendChild(draftBtn);
  draftBtn.addEventListener("click",()=>current&&download("sazler-product-draft.html",makeDraft(current),"text/html"));
  const originalSet=setLanguage;
  setLanguage=function(next){originalSet(next);draftBtn.textContent=lang==="ar"?"تنزيل مسودة المنتج":"Download product draft";};
  try {
    const saved=JSON.parse(localStorage.getItem("sazler-draft")||"null");
    if(saved&&saved.skill&&saved.audience&&saved.outcome) {
      for(const k of ["skill","audience","outcome","format","price","channel"]) if(form.elements[k]&&saved[k]!==undefined)form.elements[k].value=saved[k];
    }
  }catch(e){}
  setLanguage(lang);
})();