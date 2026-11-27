/* nina moore · Portal Poem notebook. progressive only: without this file the leaves are a plain stack.
   each [data-turn] leaf arrives lifted off its spine and lies down onto the pile as its top climbs the
   viewport; the leaf it covers darkens a little. one rAF per scroll, transform + opacity writes only,
   geometry measured on resize (never read during a frame). prefers-reduced-motion: nothing moves. */
(function(){
  var mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  var pages=[].slice.call(document.querySelectorAll('[data-turn]'));
  if(!pages.length||mq.matches)return;
  var nb=pages[0].parentNode;

  var items=pages.map(function(el){
    var s=document.createElement('span');s.className='nb-shade';s.setAttribute('aria-hidden','true');
    (el.querySelector('.nb-sheet')||el).appendChild(s);
    return {el:el,shade:s,top:0,h:0,k:-1,o:-1};
  });

  var vh=0,ticking=false,off=false;
  function measure(){
    vh=window.innerHeight;
    var base=nb.getBoundingClientRect().top+window.pageYOffset; // nb itself is never transformed
    items.forEach(function(it){it.top=base+it.el.offsetTop;it.h=it.el.offsetHeight});
    frame();
  }
  function ease(t){return 1-Math.pow(1-t,3)}
  function lift(it,y){
    // 0 when the leaf's top is at the bottom edge, 1 once it has climbed to 35% from the top
    var e=(y+vh-it.top)/(vh*.65);
    return 1-ease(e<0?0:e>1?1:e);
  }
  function frame(){
    ticking=false;if(off)return;
    var y=window.pageYOffset;
    for(var i=0;i<items.length;i++){
      var it=items[i],k=lift(it,y);
      var next=items[i+1],under=next?(1-lift(next,y))*(next.top-y<vh?1:0):0;
      k=Math.round(k*1000)/1000;
      var o=Math.round(Math.max(k*.2,under*.045)*1000)/1000;
      if(k!==it.k){
        it.el.style.transform=k?'perspective(1800px) rotateY('+(k*24).toFixed(2)+'deg) rotate('+(k*-1.4).toFixed(2)+'deg) translate3d(0,'+(k*28).toFixed(1)+'px,0)':'';
        it.k=k;
      }
      if(o!==it.o){it.shade.style.opacity=o;it.o=o}
    }
  }
  function on(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}

  window.addEventListener('scroll',on,{passive:true});
  window.addEventListener('resize',measure);
  window.addEventListener('load',measure);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measure);
  if('ResizeObserver' in window)new ResizeObserver(measure).observe(nb);
  if(mq.addEventListener)mq.addEventListener('change',function(e){
    if(!e.matches)return;
    off=true;
    items.forEach(function(it){it.el.style.transform='';it.shade.style.opacity=0});
  });
  measure();
})();
