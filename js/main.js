
/* ================= dati ================= */
var DATA = {
  dishes: [
    {tag:"Stazione del fuoco", note:"Il palcoscenico del nostro wok", items:[["Spaghetti di soia","dal wok"],["Salmone teriyaki glassato","dolce&amp;salato"],["Gamberi al peperoncino","ardenti"],["Riso fritto al profumo","per colore"]]},
    {tag:"Sushi &amp; Sashimi", note:"La seta della cucina giapponese", items:[["Sashimi di salmone","fresco"],["Uramaki californiano","avocado"],["Nigiri dello chef","on the hand"],["Maki della casa","famigliare"]]},
    {tag:"Dal mare di Sardegna", note:"Pesce di giornata e crostacei", items:[["Cozze sfrigolanti","sale"],["Ceviche di gamberi","agrumi"],["Fritto misto dell'isola","croccante"],["Gamberoni alla griglia","carbon"]]},
    {tag:"Tempura &amp; fritti", note:"La fragilità perfetta", items:[["Tempura di gamberi","aria"],["Tofu croccante","orientale"],["Verdure in pastella","fragili"]]},
    {tag:"Terra d'Oriente", note:"Griglia, macinato &amp; agrodolce", items:[["Carne alla griglia","fiamma"],["Pollo al sesamo","croccante"],["Maiale agrodolce","balsamico"],["Manzo al pepe","piccante"]]},
    {tag:"L'isola del dolce", note:"Dulcis in fundo, all'italiana", items:[["Tiramisù","torinese"],["Panna cotta al caramello","seta"],["Gelato della casa","vaniglia"],["Torta al cioccolato","densità"]]}
  ],
  sched:[
    {d:"Lunedì", a:"12:30 – 15:00", b:"20:00 – 22:30", w:false},
    {d:"Martedì", a:"12:30 – 15:00", b:"20:00 – 22:30", w:false},
    {d:"Mercoledì", a:"12:30 – 15:00", b:"20:00 – 22:30", w:false},
    {d:"Giovedì", a:"12:30 – 15:00", b:"20:00 – 22:30", w:false},
    {d:"Venerdì", a:"12:30 – 15:00", b:"20:00 – 22:30", w:false},
    {d:"Sabato", a:"12:30 – 15:00", b:"20:00 – 23:00", w:true},
    {d:"Domenica &amp; festivi", a:"12:30 – 15:00", b:"20:00 – 22:30", w:true}
  ]
};

/* ================= loader ================= */
var labels=["ACCENSIONE","REGIA","SET","FUOCO"];
var li=0, lt=setInterval(function(){
  li=(li+1)%labels.length;
  var el=document.getElementById("lbl");
  if(el) el.textContent=labels[li];
},420);
window.addEventListener("load",function(){
  clearInterval(lt);
  setTimeout(function(){ document.getElementById("loader").classList.add("done"); },900);
});
setTimeout(function(){ clearInterval(lt); document.getElementById("loader").classList.add("done"); },2600);

/* ================= ticker ================= */
(function(){
  var words=['★ Golden Wok International Restaurant','Cucina cinese — giapponese — sushi','Buffet all-you-can-eat con bevande incluse','Pranzo 12:30 – 15:00','Cena 20:00 – 22:30','Sabato fino alle 23:00','Viale Marconi 216 · Cagliari'];
  var trks=document.querySelectorAll(".ticker .trk");
  trks.forEach(function(t){
    var frag=document.createDocumentFragment();
    words.forEach(function(w){
      var s=document.createElement("span");
      s.innerHTML=w.replace('★','<b>★</b>');
      frag.appendChild(s);
    });
    t.appendChild(frag);
  });
})();

/* ================= menu ================= */
var iso=document.getElementById("isole");
DATA.dishes.forEach(function(d,i){
  var art=document.createElement("article");
  art.className="isola reveal";
  var lis=d.items.map(function(it){ return "<li>"+it[0]+"<span>"+it[1]+"</span></li>"; }).join("");
  art.innerHTML=
    '<div class="in"><h3>'+d.tag+'</h3><p class="note">'+d.note+'</p><ul>'+lis+'</ul></div>';
  iso.appendChild(art);
});

/* ================= gallery + lightbox ================= */
var PHOTOS=[
{t:"images/thumbs/img2.jpg", s:"images/img2.jpg"},{t:"images/thumbs/img4.jpg", s:"images/img4.jpg"},{t:"images/thumbs/img5.jpg", s:"images/img5.jpg"},{t:"images/thumbs/img6.jpg", s:"images/img6.jpg"},{t:"images/thumbs/img7.jpg", s:"images/img7.jpg"},{t:"images/thumbs/img8.jpg", s:"images/img8.jpg"},{t:"images/thumbs/img9.jpg", s:"images/img9.jpg"},{t:"images/thumbs/img10.jpg", s:"images/img10.jpg"},{t:"images/thumbs/img11.jpg", s:"images/img11.jpg"},{t:"images/thumbs/img12.jpg", s:"images/img12.jpg"},{t:"images/thumbs/img13.jpg", s:"images/img13.jpg"},{t:"images/thumbs/img14.jpg", s:"images/img14.jpg"},{t:"images/thumbs/img15.jpg", s:"images/img15.jpg"},{t:"images/thumbs/img16.jpg", s:"images/img16.jpg"},{t:"images/thumbs/img17.jpg", s:"images/img17.jpg"},{t:"images/thumbs/img18.jpg", s:"images/img18.jpg"},{t:"images/thumbs/img19.jpg", s:"images/img19.jpg"},{t:"images/thumbs/img20.jpg", s:"images/img20.jpg"},{t:"images/thumbs/img21.jpg", s:"images/img21.jpg"},{t:"images/thumbs/img22.jpg", s:"images/img22.jpg"},{t:"images/thumbs/img23.jpg", s:"images/img23.jpg"},{t:"images/thumbs/img24.jpg", s:"images/img24.jpg"},{t:"images/thumbs/img25.jpg", s:"images/img25.jpg"},{t:"images/thumbs/img26.jpg", s:"images/img26.jpg"},{t:"images/thumbs/img27.jpg", s:"images/img27.jpg"},{t:"images/thumbs/img28.jpg", s:"images/img28.jpg"},{t:"images/thumbs/img29.jpg", s:"images/img29.jpg"},{t:"images/thumbs/img30.jpg", s:"images/img30.jpg"},{t:"images/thumbs/img31.jpg", s:"images/img31.jpg"},{t:"images/thumbs/img32.jpg", s:"images/img32.jpg"},{t:"images/thumbs/img33.jpg", s:"images/img33.jpg"},{t:"images/thumbs/img34.jpg", s:"images/img34.jpg"},{t:"images/thumbs/img35.jpg", s:"images/img35.jpg"},{t:"images/thumbs/img36.jpg", s:"images/img36.jpg"},{t:"images/thumbs/img37.jpg", s:"images/img37.jpg"},{t:"images/thumbs/img38.jpg", s:"images/img38.jpg"}
];
var gal=document.getElementById("gal");
var lb=document.getElementById("lightbox"), lbImg=document.getElementById("lbImg"),
    lbCap=document.getElementById("lbCap"), lbIdx=document.getElementById("lbIdx");
var cur=0, lastFocus=null;
PHOTOS.forEach(function(p,idx){
  var it=document.createElement("button");
  it.type="button"; it.className="g-item reveal";
  it.setAttribute("aria-label","Apri foto "+(idx+1));
  it.innerHTML='<img src="'+p.t+'" alt="Golden Wok — foto '+(idx+1)+'" loading="lazy" decoding="async"><span class="cap"><b>SHOT '+String(idx+1).padStart(2,"0")+'</b><i>GOLDEN WOK</i></span>';
  it.addEventListener("click",function(){ openLB(idx); });
  gal.appendChild(it);
});
function openLB(n){
  cur=(n+PHOTOS.length)%PHOTOS.length;
  lbImg.src=PHOTOS[cur].s;
  lbImg.alt="Golden Wok — foto "+(cur+1);
  lbCap.textContent="SHOT "+String(cur+1).padStart(2,"0")+" / "+String(PHOTOS.length);
  lbIdx.textContent="GOLDEN WOK · CAGLIARI";
  lb.classList.add("open");
  lb.setAttribute("aria-hidden","false");
  lastFocus=document.activeElement;
  document.querySelector(".lb-close").focus();
  document.body.style.overflow="hidden";
}
function closeLB(){
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  if(lastFocus) lastFocus.focus();
}
document.querySelector(".lb-close").addEventListener("click",closeLB);
document.querySelector(".lb-prev").addEventListener("click",function(){ openLB(cur-1); });
document.querySelector(".lb-next").addEventListener("click",function(){ openLB(cur+1); });
lb.addEventListener("click",function(e){ if(e.target===lb) closeLB(); });
document.addEventListener("keydown",function(e){
  if(!lb.classList.contains("open")) return;
  if(e.key==="Escape"){ closeLB(); return; }
  if(e.key==="ArrowLeft"){ openLB(cur-1); return; }
  if(e.key==="ArrowRight"){ openLB(cur+1); return; }
  if(e.key==="Tab"){
    var f=lb.querySelectorAll("button");
    if(!f.length) return;
    var first=f[0], last=f[f.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  }
});

/* ================= orari ================= */
var sched=document.getElementById("sched");
var today=new Date().getDay(); /* 0=dom,6=sab */
var shtml='<div class="r head"><span>GIORNO</span><span>PRANZO</span><span>CENA</span></div>';
DATA.sched.forEach(function(r,i){
  var now=(today===0&&i===6)||(today===i+1);
  shtml+='<div class="r'+(now?" now":"")+'"><b>'+r.d+'</b><span>'+r.a+'</span><span>'+r.b+(r.w?' <i class="chip">weekend</i>':'')+'</span></div>';
});
sched.innerHTML=shtml;

/* ================= reveal ================= */
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
},{threshold:.15,rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll(".reveal,[data-reveal]").forEach(function(el){ io.observe(el); el.classList.add("reveal"); });
setTimeout(function(){
  document.querySelectorAll(".reveal:not(.in)").forEach(function(el){
    var r=el.getBoundingClientRect();
    if(r.top<window.innerHeight&&r.bottom>0) el.classList.add("in");
  });
},1500);

/* ================= header / progress ================= */
var prog=document.getElementById("progress"), hd=document.getElementById("header");
window.addEventListener("scroll",function(){
  var h=document.documentElement;
  var p=h.scrollTop/(h.scrollHeight-h.clientHeight)||0;
  prog.style.width=(p*100).toFixed(2)+"%";
  hd.classList.toggle("on",h.scrollTop>24);
  document.getElementById("toTop").classList.toggle("show",h.scrollTop>600);
},{passive:true});

/* toTop */
document.getElementById("toTop").addEventListener("click",function(){ window.scrollTo({top:0,behavior:"smooth"}); });

/* ================= menu mobile + scroll-spy ================= */
var burger=document.getElementById("burger"), mm=document.getElementById("mmenu");
function closeMM(){
  mm.classList.remove("open");
  burger.classList.remove("active");
  burger.setAttribute("aria-expanded","false");
  document.body.style.overflow="";
}
burger.addEventListener("click",function(){
  var open=mm.classList.toggle("open");
  burger.classList.toggle("active",open);
  burger.setAttribute("aria-expanded",open);
  document.body.style.overflow=open?"hidden":"";
});
mm.querySelectorAll("a").forEach(function(a){ a.addEventListener("click",closeMM); });
var links=document.querySelectorAll("nav a");
var spy=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){
      links.forEach(function(l){ l.classList.toggle("active", l.getAttribute("href")==="#"+e.target.id); });
    }
  });
},{rootMargin:"-45% 0px -50% 0px"});
["film","menu","galeria","recensioni","orari"].forEach(function(id){
  var el=document.getElementById(id); if(el) spy.observe(el);
});

document.getElementById("yr").textContent=new Date().getFullYear();
