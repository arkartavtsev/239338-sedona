var mapContainer=document.querySelector(".sedona-location");if(mapContainer)function initMap(){mapContainer.classList.add("sedona-location--js"),mapContainer.querySelector(".sedona-location__img").classList.add("sedona-location__img--js");var e={lat:34.869867,lng:-111.760635},t=new google.maps.Map(document.getElementById("map"),{center:e,zoom:7,minZoom:4,disableDoubleClickZoom:!0,disableDefaultUI:!0,backgroundColor:"#fff"});new google.maps.Marker({position:e,map:t,icon:"img/icon-map-marker.svg"})}var menuContainer=document.querySelector(".page-header");if(menuContainer){var menu=menuContainer.querySelector(".main-nav"),menuToggle=menuContainer.querySelector(".menu-toggle");menu.classList.add("page-header__main-nav--close"),menuToggle.classList.add("menu-toggle--open"),menuToggle.classList.add("page-header__menu-toggle--open"),menuToggle.addEventListener("click",function(e){e.preventDefault(),menu.classList.toggle("page-header__main-nav--close"),menuToggle.classList.contains("menu-toggle--open")?(menuToggle.classList.remove("menu-toggle--open"),menuToggle.classList.remove("page-header__menu-toggle--open"),menuToggle.classList.add("menu-toggle--close"),menuToggle.classList.add("page-header__menu-toggle--close")):(menuToggle.classList.remove("menu-toggle--close"),menuToggle.classList.remove("page-header__menu-toggle--close"),menuToggle.classList.add("menu-toggle--open"),menuToggle.classList.add("page-header__menu-toggle--open"))})}!function(e){var t,r,s,n,i,a,c,o=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(r=document.createElement("source"),s=function(e){var t,s,n=e.parentNode;"PICTURE"===n.nodeName.toUpperCase()?(t=r.cloneNode(),n.insertBefore(t,n.firstElementChild),setTimeout(function(){n.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,s=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=s}))},n=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)s(t[e])},i=function(){clearTimeout(t),t=setTimeout(n,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){i(),a&&a.addListener&&a.addListener(i)},r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),i))}(window),function(e,i,l){"use strict";function u(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function x(e,t){return e.res-t.res}function L(e,t){var s,n,r;if(e&&t)for(r=z.parseSet(t),e=z.makeUrl(e),s=0;s<r.length;s++)if(e===z.makeUrl(r[s].url)){n=r[s];break}return n}i.createElement("picture");var r,d,o,n,a,t,s,c,m,p,g,f,h,A,v,w,S,y,T,E,b,C,z={},M=!1,R=function(){},_=i.createElement("img"),D=_.getAttribute,k=_.setAttribute,P=_.removeAttribute,B=i.documentElement,I={},U={algorithm:""},$="data-pfsrc",W=$+"set",Q=navigator.userAgent,q=/rident/.test(Q)||/ecko/.test(Q)&&Q.match(/rv\:(\d+)/)&&35<RegExp.$1,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,F=/(\([^)]+\))?\s*(.+)/,j=e.picturefillCFG,N="font-size:100%!important;",O=!0,V={},K={},J=e.devicePixelRatio,Z={px:1,in:96},X=i.createElement("a"),Y=!1,ee=/^[ \t\n\r\u000c]+/,te=/^[, \t\n\r\u000c]+/,se=/^[^ \t\n\r\u000c]+/,ne=/[,]+$/,re=/^\d+$/,ie=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,ae=function(e,t,s,n){e.addEventListener?e.addEventListener(t,s,n||!1):e.attachEvent&&e.attachEvent("on"+t,s)},ce=function(t){var s={};return function(e){return e in s||(s[e]=t(e)),s[e]}},oe=(n=/^([\d\.]+)(em|vw|px)$/,a=ce(function(e){return"return "+function(){for(var e=arguments,t=0,s=e[0];++t in e;)s=s.replace(e[t],e[++t]);return s}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var s;if(!(e in V))if(V[e]=!1,t&&(s=e.match(n)))V[e]=s[1]*Z[s[2]];else try{V[e]=new Function("e",a(e))(Z)}catch(e){}return V[e]}),le=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ue=function(e){if(M){var t,s,n,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),n=(t=r.elements||z.qsa(r.context||i,r.reevaluate||r.reselect?z.sel:z.selShort)).length){for(z.setupRun(r),Y=!0,s=0;s<n;s++)z.fillImg(t[s],r);z.teardownRun(r)}}};e.console&&console.warn,G in _||(G="src"),I["image/jpeg"]=!0,I["image/gif"]=!0,I["image/png"]=!0,I["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in _,z.supSizes="sizes"in _,z.supPicture=!!e.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&(T=i.createElement("img"),_.srcset="data:,a",T.src="data:,a",z.supSrcset=_.complete===T.complete,z.supPicture=z.supSrcset&&z.supPicture),z.supSrcset&&!z.supSizes?(w="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",S=i.createElement("img"),y=function(){2===S.width&&(z.supSizes=!0),d=z.supSrcset&&!z.supSizes,M=!0,setTimeout(ue)},S.onload=y,S.onerror=y,S.setAttribute("sizes","9px"),S.srcset=w+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",S.src=w):M=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=U,z.DPR=J||1,z.u=Z,z.types=I,z.setSize=R,z.makeUrl=ce(function(e){return X.href=e,X.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||oe(e)},z.calcLength=function(e){var t=oe(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||I[e]},z.parseSize=ce(function(e){var t=(e||"").match(F);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=function(n,d){function e(e){var t,s=e.exec(n.substring(o));return s?(t=s[0],o+=t.length,t):void 0}function t(){var e,t,s,n,r,i,a,c,o,l=!1,u={};for(n=0;n<p.length;n++)i=(r=p[n])[r.length-1],a=r.substring(0,r.length-1),c=parseInt(a,10),o=parseFloat(a),re.test(a)&&"w"===i?((e||t)&&(l=!0),0===c?l=!0:e=c):ie.test(a)&&"x"===i?((e||t||s)&&(l=!0),o<0?l=!0:t=o):re.test(a)&&"h"===i?((s||t)&&(l=!0),0===c?l=!0:s=c):l=!0;l||(u.url=m,e&&(u.w=e),t&&(u.d=t),s&&(u.h=s),s||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,g.push(u))}function s(){for(e(ee),r="",i="in descriptor";;){if(a=n.charAt(o),"in descriptor"===i)if(u(a))r&&(p.push(r),r="",i="after descriptor");else{if(","===a)return o+=1,r&&p.push(r),void t();if("("===a)r+=a,i="in parens";else{if(""===a)return r&&p.push(r),void t();r+=a}}else if("in parens"===i)if(")"===a)r+=a,i="in descriptor";else{if(""===a)return p.push(r),void t();r+=a}else if("after descriptor"===i)if(u(a));else{if(""===a)return void t();i="in descriptor",o-=1}o+=1}}for(var m,p,r,i,a,c=n.length,o=0,g=[];;){if(e(te),c<=o)return g;m=e(se),p=[],","===m.slice(-1)?(m=m.replace(ne,""),t()):s()}}(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!r&&(e=i.body)){var t=i.createElement("div"),s=B.style.cssText,n=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",B.style.cssText=N,e.style.cssText=N,e.appendChild(t),r=t.offsetWidth,e.removeChild(t),r=parseFloat(r,10),B.style.cssText=s,e.style.cssText=n}return r||16},z.calcListLength=function(e){if(!(e in K)||U.uT){var t=z.calcLength(function(e){var t,s,n,r,i,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=(s=function(e){function t(){r&&(i.push(r),r="")}function s(){i[0]&&(a.push(i),i=[])}for(var n,r="",i=[],a=[],c=0,o=0,l=!1;;){if(""===(n=e.charAt(o)))return t(),s(),a;if(l){if("*"===n&&"/"===e[o+1]){l=!1,o+=2,t();continue}o+=1}else{if(u(n)){if(e.charAt(o-1)&&u(e.charAt(o-1))||!r){o+=1;continue}if(0===c){t(),o+=1;continue}n=" "}else if("("===n)c+=1;else if(")"===n)c-=1;else{if(","===n){t(),s(),o+=1;continue}if("/"===n&&"*"===e.charAt(o+1)){l=!0,o+=2;continue}}r+=n,o+=1}}}(e)).length,t=0;t<n;t++)if(i=(r=s[t])[r.length-1],c=i,o.test(c)&&0<=parseFloat(c)||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=i,r.pop(),0===r.length)return a;if(r=r.join(" "),z.matchesMedia(r))return a}return"100vw"}(e));K[e]=t||Z.width}return K[e]},z.setRes=function(e){var t;if(e)for(var s=0,n=(t=z.parseSet(e)).length;s<n;s++)le(t[s],e.sizes);return t},z.setRes.res=le,z.applySetCandidate=function(e,t){if(e.length){var s,n,r,i,a,c,o,l,u,d=t[z.ns],m=z.DPR;if(c=d.curSrc||t[G],(o=d.curCan||(S=t,y=c,!(T=e[0].set)&&y&&(T=(T=S[z.ns].sets)&&T[T.length-1]),(E=L(y,T))&&(y=z.makeUrl(y),S[z.ns].curSrc=y,(S[z.ns].curCan=E).res||le(E,E.set.sizes)),E))&&o.set===e[0].set&&((u=q&&!t.complete&&o.res-.1>m)||(o.cached=!0,o.res>=m&&(a=o))),!a)for(e.sort(x),a=e[(i=e.length)-1],n=0;n<i;n++)if((s=e[n]).res>=m){a=e[r=n-1]&&(u||c!==z.makeUrl(s.url))&&(p=e[r].res,g=s.res,f=m,h=e[r].cached,w=v=A=void 0,"saveData"===U.algorithm?2.7<p?w=f+1:(v=(g-f)*(A=Math.pow(p-.6,1.5)),h&&(v+=.1*A),w=p+v):w=1<f?Math.sqrt(p*g):p,f<w)?e[r]:s;break}a&&(l=z.makeUrl(a.url),d.curSrc=l,d.curCan=a,l!==c&&z.setSrc(t,a),z.setSize(t))}var p,g,f,h,A,v,w,S,y,T,E},z.setSrc=function(e,t){var s;e.src=t.url,"image/svg+xml"===t.set.type&&(s=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=s))},z.getSet=function(e){var t,s,n,r=!1,i=e[z.ns].sets;for(t=0;t<i.length&&!r;t++)if((s=i[t]).srcset&&z.matchesMedia(s.media)&&(n=z.supportsType(s.type))){"pending"===n&&(s=n),r=s;break}return r},z.parseSets=function(e,t,s){var n,r,i,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[z.ns];(o.src===l||s.src)&&(o.src=D.call(e,"src"),o.src?k.call(e,$,o.src):P.call(e,$)),(o.srcset===l||s.srcset||!z.supSrcset||e.srcset)&&(n=D.call(e,"srcset"),o.srcset=n,a=!0),o.sets=[],c&&(o.pic=!0,function(e,t){var s,n,r,i,a=e.getElementsByTagName("source");for(s=0,n=a.length;s<n;s++)(r=a[s])[z.ns]=!0,(i=r.getAttribute("srcset"))&&t.push({srcset:i,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}(t,o.sets)),o.srcset?(r={srcset:o.srcset,sizes:D.call(e,"sizes")},o.sets.push(r),(i=(d||o.src)&&H.test(o.srcset||""))||!o.src||L(o.src,r)||r.has1x||(r.srcset+=", "+o.src,r.cands.push({url:o.src,d:1,set:r}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=l,o.supported=!(c||r&&!z.supSrcset||i&&!z.supSizes),a&&z.supSrcset&&!o.supported&&(n?(k.call(e,W,n),e.srcset=""):P.call(e,W)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==z.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},z.fillImg=function(e,t){var s,n,r,i,a,c=t.reselect||t.reevaluate;e[z.ns]||(e[z.ns]={}),s=e[z.ns],(c||s.evaled!==o)&&((!s.parsed||t.reevaluate)&&z.parseSets(e,e.parentNode,t),s.supported?s.evaled=o:(n=e,i=z.getSet(n),a=!1,"pending"!==i&&(a=o,i&&(r=z.setRes(i),z.applySetCandidate(r,n))),n[z.ns].evaled=a))},z.setupRun=function(){(!Y||O||J!==e.devicePixelRatio)&&(O=!1,J=e.devicePixelRatio,V={},K={},z.DPR=J||1,Z.width=Math.max(e.innerWidth||0,B.clientWidth),Z.height=Math.max(e.innerHeight||0,B.clientHeight),Z.vw=Z.width/100,Z.vh=Z.height/100,o=[Z.height,Z.width,J].join("-"),Z.em=z.getEmValue(),Z.rem=Z.em)},z.supPicture?(ue=R,z.fillImg=R):(f=e.attachEvent?/d$|^c/:/d$|^c|^i/,h=function(){var e=i.readyState||"";A=setTimeout(h,"loading"===e?200:999),i.body&&(z.fillImgs(),(t=t||f.test(e))&&clearTimeout(A))},A=setTimeout(h,i.body?9:99),v=B.clientHeight,ae(e,"resize",(s=function(){O=Math.max(e.innerWidth||0,B.clientWidth)!==Z.width||B.clientHeight!==v,v=B.clientHeight,O&&z.fillImgs()},c=99,g=function(){var e=new Date-p;e<c?m=setTimeout(g,c-e):(m=null,s())},function(){p=new Date,m||(m=setTimeout(g,c))})),ae(i,"readystatechange",h)),z.picturefill=ue,z.fillImgs=ue,z.teardownRun=R,ue._=z,e.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(U[t]=e[0],Y&&z.fillImgs({reselect:!0}))}};for(;j&&j.length;)e.picturefillCFG.push(j.shift());e.picturefill=ue,"object"==typeof module&&"object"==typeof module.exports?module.exports=ue:"function"==typeof define&&define.amd&&define("picturefill",function(){return ue}),z.supPicture||(I["image/webp"]=(E="image/webp",b="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(C=new e.Image).onerror=function(){I[E]=!1,ue()},C.onload=function(){I[E]=1===C.width,ue()},C.src=b,"pending"))}(window,document);