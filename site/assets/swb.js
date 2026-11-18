/* She Who Becomes · progressive only (load after site.js). the pages read fully without it.
   1. [data-announce]: the enrolment notice, filled from assets/announcement.json (HTML text is the fallback)
   2. [data-spine] on <main>: one thin line drawn down the page with scroll, through every [data-stop].
      landing: a cursive loop at each crossing, then it winds into Nina's coil at [data-spine-coil].
      journey: data-turns="12" puts twelve evenly spaced turns along the line (the twelve weeks).
      only stroke-dashoffset and a transform change on scroll; reduced motion = fully drawn, still. */
(function(){
  // 1 · announcement
  var an=document.querySelector('[data-announce]');
  if(an&&window.fetch){
    fetch(an.getAttribute('data-src')).then(function(r){return r.json()}).then(function(d){
      var a=d[an.getAttribute('data-announce')];
      var over=a&&a.until&&Date.now()>new Date(a.until+'T23:59:59').getTime();
      if(!a||!a.text||over){an.remove();return}
      an.querySelector('p').textContent=a.text;
    }).catch(function(){}); // offline or file://: keep the HTML text
  }

  // 2 · the spine
  var root=document.querySelector('[data-spine]');
  if(!root)return;
  var mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  var stops=[].slice.call(root.querySelectorAll('[data-stop]'));
  var zone=root.querySelector('[data-spine-coil]');
  var turns=+root.getAttribute('data-turns')||0;
  var coilPath=document.querySelector('#coil path');

  var wrap=document.createElement('div');wrap.className='spine';wrap.setAttribute('aria-hidden','true');
  wrap.innerHTML='<svg xmlns="http://www.w3.org/2000/svg"><path class="spine__line"/><circle class="spine__tip" r="2.6"/></svg>';
  document.body.appendChild(wrap);
  var svg=wrap.firstChild,line=svg.firstChild,tip=svg.lastChild;
  var A=null,lastW=0,lastH=0,lastI=-2,ticking=false;

  // a cursive loop in units of r: [along the line, off the line] (from the 15 Nov page)
  var LOOP=[[-2,0],[-1,0],[0,.15],[.9,.7],[1.1,1.6],[.5,2.2],[-.3,1.9],[-.4,1.1],[.3,.45],[1.2,.1],[2.2,0]];
  function cr(p,n){var o=[],q=[p[0]].concat(p,[p[p.length-1]]);
    for(var i=1;i<q.length-2;i++){var a=q[i-1],b=q[i],c=q[i+1],d=q[i+2];
      for(var k=0;k<n;k++){var t=k/n,t2=t*t,t3=t2*t,o2=[];
        for(var j=0;j<2;j++)o2.push(.5*(2*b[j]+(-a[j]+c[j])*t+(2*a[j]-5*b[j]+4*c[j]-d[j])*t2+(-a[j]+3*b[j]-3*c[j]+d[j])*t3));
        o.push(o2)}}
    return o}
  function bez(x0,y0,x1,y1){var k=Math.max(30,(y1-y0)*.9),o=[];
    for(var i=0;i<=120;i++){var t=i/120,u=1-t,a=u*u*u,b=3*u*u*t,c=3*u*t*t,d=t*t*t;
      o.push([a*x0+b*x0+c*x1+d*x1,a*y0+b*(y0+k)+c*(y1-k)+d*y1])}
    return o}
  // put cursive loops at fractions of a polyline's length
  function loops(c,fr,r){
    var s=[0],i;for(i=1;i<c.length;i++)s.push(s[i-1]+Math.hypot(c[i][0]-c[i-1][0],c[i][1]-c[i-1][1]));
    var S=s[s.length-1],out=[],k=0;
    for(i=0;i<c.length;i++){
      var m=fr[k]*S;
      if(k<fr.length&&s[i]>=m-2*r){
        var j=i;while(j<c.length-2&&s[j]<m)j++;
        var ux=c[j+1][0]-c[Math.max(0,j-1)][0],uy=c[j+1][1]-c[Math.max(0,j-1)][1],l=Math.hypot(ux,uy)||1;ux/=l;uy/=l;
        var cx=c[j][0],cy=c[j][1];
        out=out.concat(cr(LOOP.map(function(p){return [cx+ux*p[0]*r+uy*p[1]*r,cy+uy*p[0]*r-ux*p[1]*r]}),8));
        while(i<c.length-1&&s[i]<m+2.2*r)i++;
        k++;
      }
      out.push(c[i]);
    }
    return out}
  function smooth(a){var o=[a[0]];for(var i=1;i<a.length-1;i++)o.push([(a[i-1][0]+a[i][0]*2+a[i+1][0])/4,(a[i-1][1]+a[i][1]*2+a[i+1][1])/4,a[i][2]]);o.push(a[a.length-1]);return o}

  function build(){
    var W=document.documentElement.clientWidth;
    wrap.style.height='0'; // measure the page without the line's own box
    var H=document.documentElement.scrollHeight;
    wrap.style.height=lastH+'px';
    if(A&&W===lastW&&H===lastH)return;
    lastW=W;lastH=H;
    var sy=window.scrollY||window.pageYOffset,narrow=W<900,pts=[],prev=null;
    var add=function(a){a.forEach(function(p){pts.push([p[0],p[1],p[2]==null?p[1]:p[2]])})};
    var r=narrow?4:turns?11:14;
    stops.forEach(function(el,i){
      var b=el.getBoundingClientRect(),cs=getComputedStyle(el),side=narrow?'l':el.getAttribute('data-side');
      var pl=parseFloat(cs.paddingLeft),pr=parseFloat(cs.paddingRight);
      var x=side==='r'?b.right-pr/2:(pl?b.left+pl/2:b.left*.45);
      var y0=b.top+sy+6,y1=b.bottom+sy-6;
      if(prev){var c=bez(prev[0],prev[1],x,y0);add(turns?c:loops(c,[.42],r))}
      var run=[],amp=narrow?1.2:4,kk=Math.max(1,Math.round((y1-y0)/420));
      for(var y=y0;y<=y1;y+=8)run.push([x+amp*Math.sin(2*Math.PI*kk*(y-y0)/(y1-y0)),y]);
      add(run);prev=[x,y1];
    });
    if(turns){var fr=[];for(var t=0;t<turns;t++)fr.push((t+.5)/turns);pts=loops(pts,fr,r).map(function(p){return [p[0],p[1],p[2]==null?p[1]:p[2]]})}
    if(zone&&coilPath&&prev){
      // Nina's own coil, turned 180° so its tail meets the line from above, then winding inward
      var z=zone.getBoundingClientRect(),L=coilPath.getTotalLength(),s=z.height*.88/49,cx=z.left+z.width/2,top=z.top+sy+z.height*.06,co=[],N=260;
      for(var j=0;j<=N;j++){var p=coilPath.getPointAtLength(L*j/N);co.push([cx-(p.x-21.4)*s,top+(54-p.y)*s,top+(j/N)*z.height*1.05])}
      add(loops(bez(prev[0],prev[1],co[0][0],co[0][1]),[.5],r));
      pts=pts.concat(co);
    }
    var P=smooth(smooth(pts)),CUM=[0],VY=[],T=0,mx=-1e9;
    for(var q=0;q<P.length;q++){if(q)T+=Math.hypot(P[q][0]-P[q-1][0],P[q][1]-P[q-1][1]);CUM.push(T);mx=Math.max(mx,P[q][2]);VY.push(mx)}
    wrap.style.height=H+'px';
    svg.setAttribute('width',W);svg.setAttribute('height',H);svg.setAttribute('viewBox','0 0 '+W+' '+H);
    line.setAttribute('d','M'+P.map(function(p){return p[0].toFixed(1)+' '+p[1].toFixed(1)}).join('L'));
    line.style.strokeDasharray=T+' '+(T+10);
    A={P:P,CUM:CUM,VY:VY,T:T};lastI=-2;
    document.documentElement.classList.add('spine-on');
    draw();
  }
  function draw(){
    ticking=false;if(!A)return;
    var still=mq.matches,t=still?1e12:(window.scrollY||window.pageYOffset)+window.innerHeight*.66;
    var V=A.VY,lo=0,hi=V.length-1,i;
    if(V[0]>t)i=-1;else{while(lo<hi){var m=(lo+hi+1)>>1;if(V[m]<=t)lo=m;else hi=m-1}i=lo}
    if(i===lastI)return;lastI=i;
    line.style.strokeDashoffset=A.T-(i<0?0:A.CUM[i]);
    var live=!still&&i>=0&&i<V.length-1;
    tip.classList.toggle('on',live);
    if(i>=0)tip.style.transform='translate('+A.P[i][0].toFixed(1)+'px,'+A.P[i][1].toFixed(1)+'px)';
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(draw)}}
  var rb=0;function rebuild(){cancelAnimationFrame(rb);rb=requestAnimationFrame(build)}
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',rebuild);window.addEventListener('load',rebuild);
  if(window.ResizeObserver)new ResizeObserver(rebuild).observe(document.body);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(rebuild);
  if(mq.addEventListener)mq.addEventListener('change',function(){lastI=-2;draw()});
  build();
})();
