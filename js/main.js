
/* ================= dati ================= */
var DATA = {
  dishes: [
    {kan:"炒", tag:"Stazione del fuoco", note:"Il palcoscenico del nostro wok", items:[["Spaghetti di soia","dal wok"],["Salmone teriyaki glassato","dolce&amp;salato"],["Gamberi al peperoncino","ardenti"],["Riso fritto al profumo","per colore"]]},
    {kan:"鮨", tag:"Sushi &amp; Sashimi", note:"La seta della cucina giapponese", items:[["Sashimi di salmone","fresco"],["Uramaki californiano","avocado"],["Nigiri dello chef","on the hand"],["Maki della casa","famigliare"]]},
    {kan:"海", tag:"Dal mare di Sardegna", note:"Pesce di giornata e crostacei", items:[["Cozze sfrigolanti","sale"],["Ceviche di gamberi","agrumi"],["Fritto misto dell'isola","croccante"],["Gamberoni alla griglia","carbon"]]},
    {kan:"天", tag:"Tempura &amp; fritti", note:"La fragilità perfetta", items:[["Tempura di gamberi","aria"],["Tofu croccante","orientale"],["Verdure in pastella","fragili"]]},
    {kan:"肉", tag:"Terra d'Oriente", note:"Griglia, macinato &amp; agrodolce", items:[["Carne alla griglia","fiamma"],["Pollo al sesamo","croccante"],["Maiale agrodolce","balsamico"],["Manzo al pepe","piccante"]]},
    {kan:"甜", tag:"L'isola del dolce", note:"Dulcis in fundo, all'italiana", items:[["Tiramisù","torinese"],["Panna cotta al caramello","seta"],["Gelato della casa","vaniglia"],["Torta al cioccolato","densità"]]}
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
setTimeout(function(){ clearInterval(lt); document.getElementById("loader").classList.add("done"); },4200);

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
    '<div class="in"><span class="kan">'+d.kan+'</span><h3>'+d.tag+'</h3><p class="note">'+d.note+'</p><ul>'+lis+'</ul></div>';
  iso.appendChild(art);
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
burger.addEventListener("click",function(){
  var open=mm.classList.toggle("open");
  burger.classList.toggle("active",open);
  burger.setAttribute("aria-expanded",open);
  mm.querySelectorAll("a").forEach(function(a){ a.addEventListener("click",function(){ mm.classList.remove("open"); burger.classList.remove("active"); }); });
});
var links=document.querySelectorAll("nav a");
var spy=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){
      links.forEach(function(l){ l.classList.toggle("active", l.getAttribute("href")==="#"+e.target.id); });
    }
  });
},{rootMargin:"-45% 0px -50% 0px"});
["film","menu","recensioni","orari"].forEach(function(id){
  var el=document.getElementById(id); if(el) spy.observe(el);
});

document.getElementById("yr").textContent=new Date().getFullYear();
