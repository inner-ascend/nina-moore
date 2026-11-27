/* the preview viewer keeps its scroll between pages (and its frame shell may scroll instead of this page): start each page at the top */
(function(){if(location.hash)return;try{history.scrollRestoration='manual'}catch(e){}
var moved=false;['wheel','touchstart','keydown'].forEach(function(e){addEventListener(e,function(){moved=true},{once:true,passive:true})});
function top(){if(moved)return;scrollTo(0,0);try{document.documentElement.scrollIntoView({block:'start'})}catch(e){}
 try{if(parent!==window)parent.scrollTo(0,0)}catch(e){}}
top();[50,250,700].forEach(function(t){setTimeout(top,t)});addEventListener('load',top);addEventListener('pageshow',top);})();
/* nina moore · progressive enhancement only. the site reads fully without this file.
   .rise   fades in once on view
   .leaf   Portal Poem page turn: swings in from its spine once on view
   [data-draw] on an <svg>: its paths draw themselves with scroll (the She Who Becomes coil)
   prefers-reduced-motion: nothing moves, every path is fully drawn. */
(function(){
  var mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduced=mq.matches;

  // fade-in everywhere: tag the main reading blocks of every page (except what already animates on its own)
  if(!reduced){
    var skip='.hero,.swb-hero,.nb-cover,.offer-hero,.field,[data-lines],[data-ink],.rise,.leaf';
    [].slice.call(document.querySelectorAll(
      'main :is(.section-head,h2,h3,.lede,.prose>p,.questions li,.lines p,.say,.big,.statement,.practice,.way,.door,.links,.cta-slot,.announce,dl,figure,.btn)'
    )).forEach(function(el){
      if(el.closest(skip)||el.parentElement.closest('.rise')||el.matches('.frag,[style*="transform"]'))return;
      el.classList.add('rise');
      if(el.tagName==='FIGURE')el.classList.add('rise--img');
      // a short cascade between siblings revealed together
      var i=0,p=el.previousElementSibling;while(p&&i<3){if(p.classList.contains('rise'))i++;p=p.previousElementSibling}
      if(i)el.style.transitionDelay=(i*.09)+'s';
    });
  }

  // reveal (.rise, .leaf)
  var rv=[].slice.call(document.querySelectorAll('.rise,.leaf'));
  if(reduced||!('IntersectionObserver' in window)){rv.forEach(function(e){e.classList.add('in')})}
  else{
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -10% 0px'});
    rv.forEach(function(e){io.observe(e)});
  }

  // the coil: stroke drawn in step with the svg's passage through the viewport
  var draws=[].slice.call(document.querySelectorAll('svg[data-draw]'));
  if(reduced||!draws.length)return;
  var items=[];
  draws.forEach(function(svg){
    [].slice.call(svg.querySelectorAll('path')).forEach(function(p){
      var L=p.getTotalLength();if(!L)return;
      p.style.strokeDasharray=L+' '+(L+2);p.style.strokeDashoffset=L;
      items.push({svg:svg,p:p,L:L});
    });
  });
  var ticking=false;
  function draw(){
    ticking=false;var vh=window.innerHeight;
    items.forEach(function(it){
      var r=it.svg.getBoundingClientRect();
      // 0 when the top enters the lower edge, 1 when the bottom reaches 40% of the viewport
      var f=(vh-r.top)/(vh*.6+r.height);f=Math.max(0,Math.min(1,f));
      it.p.style.strokeDashoffset=it.L*(1-f);
    });
  }
  function on(){if(!ticking){ticking=true;requestAnimationFrame(draw)}}
  window.addEventListener('scroll',on,{passive:true});
  window.addEventListener('resize',on);
  mq.addEventListener&&mq.addEventListener('change',function(e){if(e.matches)items.forEach(function(it){it.p.style.strokeDasharray='none'})});
  draw();
})();

/* header: out of the way while reading down, back as soon as you scroll up or tab into it */
(function(){
  var h=document.querySelector('.site-header');if(!h)return;
  var y0=window.scrollY,t=false;
  function f(){
    t=false;var y=window.scrollY;
    if(y<=h.offsetHeight){h.classList.remove('is-hidden')}
    else if(y>y0+6){h.classList.add('is-hidden')}
    else if(y<y0-6){h.classList.remove('is-hidden')}
    y0=y;
  }
  window.addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(f)}},{passive:true});
  h.addEventListener('focusin',function(){h.classList.remove('is-hidden')});
})();
