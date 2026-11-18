/* nina moore · progressive enhancement only. the site reads fully without this file.
   .rise   fades in once on view
   .leaf   Portal Poem page turn: swings in from its spine once on view
   [data-draw] on an <svg>: its paths draw themselves with scroll (the She Who Becomes coil)
   prefers-reduced-motion: nothing moves, every path is fully drawn. */
(function(){
  var mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduced=mq.matches;

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
