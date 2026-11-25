/* nina moore · home only. veritas-style entrance: [data-lines] text is split into its rendered lines,
   each line rises one line-height and fades in (700ms, no stagger); the hero image wipes up at the same moment.
   the hero plays once on load, statements once on view. after playing, the original markup is put back.
   no JS or reduced motion: nothing is hidden, nothing moves. */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var hero=document.querySelector('.hero');

  // wrap the element's words in spans, group them by rendered line, rebuild as masked lines
  function split(el){
    var html=el.innerHTML,words=[];
    [].slice.call(el.childNodes).forEach(function(n){
      var it=n.nodeType===1&&n.tagName==='EM';
      (n.textContent||'').split(/\s+/).forEach(function(w){if(w)words.push({w:w,it:it})});
    });
    el.innerHTML=words.map(function(o){return '<span class="w">'+(o.it?'<em>'+o.w+'</em>':o.w)+'</span>'}).join(' ');
    var lines=[],top=null;
    [].slice.call(el.querySelectorAll('.w')).forEach(function(s){
      if(s.offsetTop!==top){lines.push([]);top=s.offsetTop}
      lines[lines.length-1].push(s.innerHTML);
    });
    el.setAttribute('aria-label',el.textContent);
    el.innerHTML=lines.map(function(l){return '<span class="ln" aria-hidden="true"><span class="ln__in">'+l.join(' ')+'</span></span>'}).join('');
    el.__orig=html;el.classList.add('split');
  }
  function restore(el){setTimeout(function(){el.innerHTML=el.__orig;el.removeAttribute('aria-label');el.classList.remove('is-in','split')},800)}
  function play(el){el.getBoundingClientRect();requestAnimationFrame(function(){el.classList.add('is-in');restore(el)})}

  function start(){
    if(hero&&!hero.classList.contains('is-on')){
      var t=hero.querySelector('[data-lines]');
      if(t)split(t);
      hero.classList.add('is-on');
      if(t)play(t);
    }
    var st=[].slice.call(document.querySelectorAll('.statement[data-lines]'));
    if(!st.length||!('IntersectionObserver' in window))return;
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){io.unobserve(e.target);play(e.target)}})},{rootMargin:'0px 0px -12% 0px'});
    st.forEach(function(el){
      // already on screen (e.g. reload mid-page): leave it as is
      if(el.getBoundingClientRect().top<innerHeight)return;
      split(el);io.observe(el);
    });
    // lines were measured at this width: on resize, give back the plain text of any not yet played
    var w0=innerWidth;
    addEventListener('resize',function(){if(innerWidth===w0)return;st.forEach(function(el){if(el.__orig&&!el.classList.contains('is-in')&&el.querySelector('.ln')){io.unobserve(el);el.innerHTML=el.__orig;el.removeAttribute('aria-label');el.classList.remove('split')}})});
  }
  // line breaks depend on the webfont: wait for it, but never more than 1.2s
  var done=false;function once(){if(!done){done=true;start()}}
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(once);
  setTimeout(once,1200);
})();

/* hero "open road": split the heading into words for the ink entrance, then start once the photo and fonts are in
   (a failsafe starts it after 2.5s regardless). reduced motion: nothing hidden, nothing moves. */
(function(){
  var ob=document.querySelector('.ob');
  if(!ob||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var t=ob.querySelector('.ob__title'),i=0,out=[];
  t.setAttribute('aria-label',t.textContent);
  t.childNodes.forEach(function(n){
    var it=n.nodeType===1;
    (n.textContent||'').split(/\s+/).forEach(function(w){if(w)out.push('<span class="w" aria-hidden="true" style="--i:'+(i++)+'">'+(it?'<em>'+w+'</em>':w)+'</span>')});
  });
  t.innerHTML=out.join(' ');
  var img=ob.querySelector('img'),done=false;
  function go(){if(done)return;done=true;requestAnimationFrame(function(){ob.classList.add('is-on')})}
  Promise.all([img.complete?0:new Promise(function(r){img.onload=img.onerror=r}),document.fonts?document.fonts.ready:0]).then(go);
  setTimeout(go,2500);
})();

/* homepage motion (see home.css): ink statements, drifting photos, the hero easing away.
   one IntersectionObserver for reveals, one rAF per scroll for the drift; transform/opacity/filter only. */
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -12% 0px'});
  // statements: split into words, ink in on view
  [].slice.call(document.querySelectorAll('[data-ink]')).forEach(function(el){
    var i=0;el.setAttribute('aria-label',el.textContent);
    el.innerHTML=el.textContent.trim().split(/\s+/).map(function(w){return '<span class="w" aria-hidden="true" style="--i:'+(i++)+'">'+w+'</span>'}).join(' ');
    el.classList.add('ink-ready');io.observe(el);
  });
  // photos: develop on view, then drift inside the frame
  var figs=[].slice.call(document.querySelectorAll('main figure.fig'));
  figs.forEach(function(f){f.classList.add('dev');io.observe(f)});
  var ob=document.querySelector('.ob'),obPh=ob&&ob.querySelector('.ob__ph img'),obTx=ob&&ob.querySelector('.ob__txt');
  var queued=false;
  function frame(){
    queued=false;var vh=innerHeight,y=pageYOffset;
    figs.forEach(function(f){
      var r=f.getBoundingClientRect();if(r.bottom<-50||r.top>vh+50)return;
      var k=((r.top+r.height/2)-vh/2)/vh; // -1..1 across the screen
      f.querySelector('img').style.transform='translate3d(0,'+(k*-5).toFixed(2)+'%,0) scale(1.1)';
    });
    if(ob&&y<ob.offsetHeight+ob.offsetTop){
      var p=Math.min(1,y/ob.offsetHeight);
      obPh.style.transform='translate3d(0,'+(y*.3).toFixed(1)+'px,0)';
      obTx.style.transform='translate3d(0,'+(y*-.12).toFixed(1)+'px,0)';
      obTx.style.opacity=(1-p*1.2).toFixed(3);
    }
  }
  addEventListener('scroll',function(){if(!queued){queued=true;requestAnimationFrame(frame)}},{passive:true});
  addEventListener('resize',frame);frame();
})();
