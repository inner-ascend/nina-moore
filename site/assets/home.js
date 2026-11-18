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
    el.__orig=html;
  }
  function restore(el){setTimeout(function(){el.innerHTML=el.__orig;el.removeAttribute('aria-label');el.classList.remove('is-in')},800)}
  function play(el){el.getBoundingClientRect();requestAnimationFrame(function(){el.classList.add('is-in');restore(el)})}

  function start(){
    if(hero&&!hero.classList.contains('go')){
      var t=hero.querySelector('[data-lines]');
      if(t)split(t);
      hero.classList.add('go');
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
  }
  // line breaks depend on the webfont: wait for it, but never more than 1.2s
  var done=false;function once(){if(!done){done=true;start()}}
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(once);
  setTimeout(once,1200);
})();
