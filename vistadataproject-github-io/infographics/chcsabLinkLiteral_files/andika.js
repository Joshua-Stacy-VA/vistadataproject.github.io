/*
 * IMPORTANT: Your use of this software indicates your acceptance of the terms
 * found at http://www.adobe.com/products/eulas/tou_typekit NOTE THAT YOUR
 * RIGHTS TO THIS SOFTWARE ARE LIMITED. USE AT YOUR OWN RISK. For font license
 * information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"f":"//use.edgefonts.net/c/060efa/1w;andika,2,WWQ:W:n4/{format}{/extras*}","fi":[15876],"fn":["andika",["n4"]],"ht":"tk","js":"1.14.7","p":"//p.typekit.net/p.gif?s=4&h={host}&f=15876&app={app}&_={_}","ps":4};
;(function(window,document,undefined){if(!document.querySelector){document.documentElement.className+=" wf-inactive";return;}function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var l=Date.now||function(){return+new Date};function ca(){this.N=this.O=this.I=this.L=this.M=!0};function da(){var a=[{name:"font-family",value:m.c[p+1]}];this.g=[m.c[p]];this.b=a}function ea(a){for(var b=a.g.join(","),c=[],d=0;d<a.b.length;d++){var e=a.b[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"};function fa(a){this.b=a}fa.prototype.toString=function(){return encodeURIComponent(ga(this.b))};function ha(a,b){this.g=a;this.b=b}ha.prototype.toString=function(){for(var a=[],b=0;b<this.b.length;b++)for(var c=this.b[b],d=c.G(),c=c.G(this.g),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function ia(a,b){this.b=a;this.g=b}ia.prototype.G=function(){return this.g};function ja(a){this.b=a}function ka(a,b){return b};function la(){this.b=this.g=-1}la.prototype.start=function(){this.g=(new Date).getTime();this.b=-1};var t={V:"a",$:"d",U:"i",W:"j",T:"k",Z:"l",NONE:"x"};var v={};v.a=v.d=v.l=v.j=function(){return[]};v.i=function(a,b,c){return[new fa(a),new ha(b,c)]};v.k=function(a){return[new fa(a)]};function ma(a,b,c){return v[b](a,b,c)};var na={};
na.i=new ja(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new ia(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var n=f[g];if(a[n]){d=d.concat(a[n]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});function w(a){this.b=a}w.prototype.s=function(a,b){var c=a||{},d=this.b.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,b,d){return d&&c[b]?"/"+c[b].join("/"):c[b]||""});d.match(/^\/\//)&&(d=(b?"http:":"https:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function oa(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}};function pa(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)};function x(a,b,c,d,e,f,g){this.b=a;this.B=b;this.F=c;this.D=d;this.v=e;this.o=f;this.K=g}x.prototype.getName=function(){return this.b};function y(a,b,c,d){this.b=null!=a?a:null;this.g=null!=b?b:null;this.h=null!=c?c:null;this.s=null!=d?d:null}var qa=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;function z(a,b){return a.b>b.b||a.b===b.b&&a.g>b.g||a.b===b.b&&a.g===b.g&&a.h>b.h?1:a.b<b.b||a.b===b.b&&a.g<b.g||a.b===b.b&&a.g===b.g&&a.h<b.h?-1:0}function A(a,b){return-1===z(a,b)}function B(a,b){return 0===z(a,b)||1===z(a,b)}function ra(a,b){return 0===z(a,b)||-1===z(a,b)}function sa(a,b){return 0===z(a,b)}
y.prototype.toString=function(){return[this.b,this.g||"",this.h||"",this.s||""].join("")};function D(a){a=qa.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(/^[0-9]+$/.test(a[4])?e=parseInt(a[4],10):e=a[4]));return new y(b,c,d,e)};function ta(a){return"Safari"===a.getName()&&"AppleWebKit"===a.F||"Unknown"===a.getName()&&"AppleWebKit"===a.F&&("iPhone"===a.v||"iPad"===a.v||"iPod"===a.v)}function ua(a){return"Chrome"===a.getName()&&B(a.B,new y(6))&&ra(a.B,new y(35))}function va(a){return"Chrome"===a.getName()&&B(a.B,new y(36))}function wa(a){return"BuiltinBrowser"===a.getName()};function E(a){return"Windows"===a.v}function xa(a){return E(a)&&B(a.o,new y(6,1))}function H(a){return E(a)&&sa(a.o,new y(5,1))||E(a)&&sa(a.o,new y(5,2))||E(a)&&sa(a.o,new y(6,0))||xa(a)}function I(a){return"Macintosh"===a.v&&(B(a.o,new y(10,4))||null===a.o.b)}function ya(a,b){return b.M&&("iPhone"===a.v||"iPod"===a.v)&&B(a.o,new y(4,2))&&A(a.o,new y(5))}function za(a,b){return b.M&&("iPhone"===a.v||"iPod"===a.v)&&B(a.o,new y(5))}
function Aa(a,b){return b.L&&"iPad"===a.v&&B(a.o,new y(4,2))&&A(a.o,new y(5))}function Ba(a,b){return b.L&&"iPad"===a.v&&B(a.o,new y(5))}function J(a,b){return b.I&&"Android"===a.v}function Ca(a,b){return J(a,b)&&B(a.o,new y(2,2))&&A(a.o,new y(3,1))}function Da(a,b){return J(a,b)&&B(a.o,new y(3,1))&&A(a.o,new y(4,1))}function K(a){return"Linux"===a.v||"Ubuntu"===a.v};var Ea={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.F&&B(a.D,new y(525,13))&&A(a.D,new y(534,50))&&(H(a)||I(a))||wa(a)&&(Ca(a,b)||J(a,b)&&B(a.o,new y(4,1)))||b.I&&"Silk"===a.getName()&&A(a.B,new y(2))&&(Ca(a,b)||I)||b.I&&"Silk"===a.getName()&&B(a.B,new y(2))&&J(a,b)&&B(a.o,new y(4,1))||ta(a)&&(Aa(a,b)||ya(a,b))||ua(a)&&(Aa(a,b)||ya(a,b))||va(a)&&(Aa(a,b)||ya(a,b))||"AdobeAIR"===a.getName()&&B(a.B,new y(2,5))&&(E(a)&&null===a.o.b||K(a)||I(a))},d:function(a,b){return ua(a)&&(H(a)||
K(a)||I(a)||J(a,b)||"CrOS"===a.v||"CrKey"===a.v||Ba(a,b)||za(a,b))||va(a)&&(Ba(a,b)||za(a,b))||"Gecko"===a.F&&1===z(a.D,new y(1,9,1))&&ra(a.D,new y(38))&&(H(a)||K(a)||I(a)||J(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.F&&B(a.D,new y(534,50))&&(H(a)||I(a))||ta(a)&&(Ba(a,b)||za(a,b))||"Opera"===a.getName()&&B(a.B,new y(11,10))&&ra(a.B,new y(22))&&(H(a)||K(a)||I(a)||J(a,b))||"MSIE"===a.getName()&&9<=a.K&&(xa(a)||E(a)&&sa(a.o,new y(6,0)))||"Edge"===a.getName()&&xa(a)||"MSIE"===a.getName()&&b.O&&
"Windows Phone"===a.v&&B(a.o,new y(8))||wa(a)&&(b.N&&"BlackBerry"===a.v&&B(a.o,new y(10))||K(a))},j:function(a,b){return wa(a)&&Da(a,b)||b.I&&"Silk"===a.getName()&&B(a.B,new y(2))&&(Da(a,b)||K(a))},i:function(a){return"MSIE"===a.getName()&&B(a.B,new y(6,0))&&(void 0===a.K||9>a.K)&&H(a)},l:function(a,b){return va(a)&&(H(a)||K(a)||I(a)||J(a,b)||"CrOS"===a.v||"CrKey"===a.v)||"Gecko"===a.F&&B(a.D,new y(39))&&(H(a)||K(a)||I(a)||J(a,b))||"Opera"===a.getName()&&B(a.B,new y(23))&&(H(a)||K(a)||I(a)||J(a,b))},
x:function(){return!1}};var Fa=new x("Unknown",new y,"Unknown",new y,"Unknown",new y,void 0);function L(a){var b=M(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!==b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=M(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!==a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function N(a){var b=M(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=M(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=M(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=M(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=M(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function Ga(){var a=O,b="Unknown",c=D(M(a.b,/Presto\/([\d\w\.]+)/,1)),d=D(N(a)),e=P(a.g);null!==c.b?b="Presto":(-1!=a.b.indexOf("Gecko")&&(b="Gecko"),c=D(M(a.b,/rv:([^\)]+)/,1)));if(-1!=a.b.indexOf("Opera Mini/")){var f=D(M(a.b,/Opera Mini\/([\d\.]+)/,1));return new x("OperaMini",f,b,c,L(a),d,e)}if(-1!=a.b.indexOf("Version/")&&(f=D(M(a.b,/Version\/([\d\.]+)/,1)),null!==f.b))return new x("Opera",f,b,c,L(a),d,e);f=D(M(a.b,/Opera[\/ ]([\d\.]+)/,1));return null!==f.b?new x("Opera",f,b,c,L(a),d,e):new x("Opera",
new y,b,c,L(a),d,e)}
function Ha(){var a=O,b=L(a),c=D(N(a)),d=D(M(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new y,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=M(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=M(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=M(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=M(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=M(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=M(a.b,/PhantomJS\/([\d.]+)/,1));f=D(f);return new x(e,f,"AppleWebKit",d,b,c,P(a.g))}function M(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function P(a){if(a.documentMode)return a.documentMode};function Ia(a){this.b=a||"-"}Ia.prototype.s=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.b)};var Ja=!!window.FontFace;function Ka(a,b,c,d){b=a.b.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.b.createTextNode(d));return b}function La(a,b,c){a=a.b.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function Ma(a,b){a.b.body?b():a.b.addEventListener?a.b.addEventListener("DOMContentLoaded",b):a.b.onreadystatechange=function(){"interactive"==a.b.readyState&&b()}}
function Na(a){a.parentNode&&a.parentNode.removeChild(a)}function Q(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function Oa(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function Pa(a){if("string"===typeof a.m)return a.m;var b=a.g.location.protocol;"about:"==b&&(b=a.h.location.protocol);return"https:"==b?"https:":"http:"}function ga(a){return a.g.location.hostname||a.h.location.hostname}
function Qa(a,b,c,d){function e(){C&&q&&F&&(C(G),C=null)}function f(a){for(var c=0;c<k.length;c++)if(k[c].href&&-1!==k[c].href.indexOf(b)){a();return}setTimeout(function(){f(a)},0)}function g(a){for(var c=0;c<k.length;c++)if(k[c].href&&-1!==k[c].href.indexOf(b)&&(k[c].media&&"all"===k[c].media||"all"===k[c].media.mediaText)){a();return}setTimeout(function(){g(a)},0)}var n=Ka(a,"link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),k=a.b.styleSheets,q=!1,F=!d,G=null,C=c||null;Ja?(n.onload=function(){q=
!0;e()},n.onerror=function(){q=!0;G=Error("Stylesheet failed to load");e()}):setTimeout(function(){q=!0;e()},0);La(a,"head",n);d&&f(function(){n.media="all";g(function(){F=!0;e()})})}
function Ra(a,b,c){var d=a.b.getElementsByTagName("head")[0];if(d){var e=Ka(a,"script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}};function Sa(a,b){this.b=a;this.h=a.g.document.documentElement;this.u=b;this.g=new Ia("-");this.w=!1!==b.events;this.m=!1!==b.classes}function Ta(a){if(a.m){var b=Oa(a.h,a.g.s("wf","active")),c=[],d=[a.g.s("wf","loading")];b||c.push(a.g.s("wf","inactive"));Q(a.h,c,d)}R(a,"inactive")}function R(a,b,c){if(a.w&&a.u[b])if(c)a.u[b](c.getName(),S(c));else a.u[b]()};function T(a,b){this.h=a;this.g=4;this.b="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.b=c[1],this.g=parseInt(c[2],10))}T.prototype.getName=function(){return this.h};function Ua(a){return Va(a)+" "+(a.g+"00")+" 300px "+Wa(a.h)}function Wa(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function S(a){return a.b+a.g}
function Va(a){var b="normal";"o"===a.b?b="oblique":"i"===a.b&&(b="italic");return b};function Xa(a,b){this.b=a;this.m=b;this.h={};this.g={}}Xa.prototype.G=function(a){return a?(this.h[a]||this.m).slice(0):this.m.slice(0)};function Ya(a,b,c){for(var d=[],e=a.b.split(",")[0].replace(/"|'/g,""),f=a.G(),g,n=[],k={},q=0;q<f.length;q++)g=f[q],0<g.length&&!k[g]&&(k[g]=!0,n.push(g));c=c.b?c.b(e,n,d):n;a.h[b]=c;a.g[b]=d}
function Za(a,b){for(var c=a.G(b),d=a.g[b]||[],e=[],f=0;f<c.length;f++)e.push(new T(a.b,c[f]));for(f=0;f<d.length;f++)if(c=d[f].b,c!==a.b)for(var g=d[f].G(),n=0;n<g.length;n++)e.push(new T(c,g[n]));return e};function $a(a,b){this.b=a;this.h=b;this.g=Ka(this.b,"span",{"aria-hidden":"true"},this.h)}function ab(a){La(a.b,"body",a.g)}function bb(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+Wa(a.h)+";"+("font-style:"+Va(a)+";font-weight:"+(a.g+"00")+";")};function cb(a,b,c,d,e,f,g){this.H=a;this.R=b;this.b=c;this.g=d;this.C=g||"BESbswy";this.h={};this.S=e||3E3;this.J=f||null;this.A=this.w=this.u=this.m=null;this.m=new $a(this.b,this.C);this.u=new $a(this.b,this.C);this.w=new $a(this.b,this.C);this.A=new $a(this.b,this.C);a=new T(this.g.getName()+",serif",S(this.g));a=bb(a);this.m.g.style.cssText=a;a=new T(this.g.getName()+",sans-serif",S(this.g));a=bb(a);this.u.g.style.cssText=a;a=new T("serif",S(this.g));a=bb(a);this.w.g.style.cssText=a;a=new T("sans-serif",
S(this.g));a=bb(a);this.A.g.style.cssText=a;ab(this.m);ab(this.u);ab(this.w);ab(this.A)}var db={Y:"serif",X:"sans-serif"},eb=null;function fb(){if(null===eb){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);eb=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return eb}cb.prototype.start=function(){this.h.serif=this.w.g.offsetWidth;this.h["sans-serif"]=this.A.g.offsetWidth;this.P=l();gb(this)};
function hb(a,b,c){for(var d in db)if(db.hasOwnProperty(d)&&b===a.h[db[d]]&&c===a.h[db[d]])return!0;return!1}function gb(a){var b=a.m.g.offsetWidth,c=a.u.g.offsetWidth,d;(d=b===a.h.serif&&c===a.h["sans-serif"])||(d=fb()&&hb(a,b,c));d?l()-a.P>=a.S?fb()&&hb(a,b,c)&&(null===a.J||a.J.hasOwnProperty(a.g.getName()))?ib(a,a.H):ib(a,a.R):jb(a):ib(a,a.H)}function jb(a){setTimeout(h(function(){gb(this)},a),50)}
function ib(a,b){setTimeout(h(function(){Na(this.m.g);Na(this.u.g);Na(this.w.g);Na(this.A.g);b(this.g)},a),0)};function kb(a,b,c,d,e,f){this.m=a;this.h=b;this.g=d;this.b=c;this.w=e||3E3;this.u=f||void 0}kb.prototype.start=function(){function a(){l()-d>=c.w?c.h(c.g):b.fonts.load(Ua(c.g),c.u).then(function(b){1<=b.length?c.m(c.g):setTimeout(a,25)},function(){c.h(c.g)})}var b=this.b.g.document,c=this,d=l();a()};function mb(a,b,c){this.b=a;this.g=b;this.h=0;this.A=this.w=!1;this.C=c}var nb=null;mb.prototype.m=function(a){var b=this.g;b.m&&Q(b.h,[b.g.s("wf",a.getName(),S(a).toString(),"active")],[b.g.s("wf",a.getName(),S(a).toString(),"loading"),b.g.s("wf",a.getName(),S(a).toString(),"inactive")]);R(b,"fontactive",a);this.A=!0;ob(this)};
mb.prototype.u=function(a){var b=this.g;if(b.m){var c=Oa(b.h,b.g.s("wf",a.getName(),S(a).toString(),"active")),d=[],e=[b.g.s("wf",a.getName(),S(a).toString(),"loading")];c||d.push(b.g.s("wf",a.getName(),S(a).toString(),"inactive"));Q(b.h,d,e)}R(b,"fontinactive",a);ob(this)};function ob(a){0==--a.h&&a.w&&(a.A?(a=a.g,a.m&&Q(a.h,[a.g.s("wf","active")],[a.g.s("wf","loading"),a.g.s("wf","inactive")]),R(a,"active")):Ta(a.g))};function pb(a,b){this.m=a;this.b=b;this.g=[]}pb.prototype.h=function(a){this.g.push(a)};pb.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)qb(this,c[g],function(){0===--f&&rb(e,d)});else rb(this,d)};function qb(a,b,c){b=a.m.s({id:encodeURIComponent(b)});Ra(a.b,b,c)}
function rb(a,b){if(0!==a.g.length){for(var c=new Sa(a.b,b),d=!1,e=0;e<a.g.length;e++)a.g[e].init(),d=d||a.g[e].supportsConfiguredBrowser();if(d)for(c.m&&Q(c.h,[c.g.s("wf","loading")]),R(c,"loading"),c=0;c<a.g.length;c++)d=a.g[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.g.length-1,b);else Ta(c);a.g=[]}};function sb(){this.g=0;this.b=null}function tb(a){a.g++;return function(){a.g--;ub(a)}}function vb(a,b){a.b=b;ub(a)}function ub(a){0==a.g&&a.b&&(a.b(),a.b=null)};function wb(a){this.b=a;this.g="x";this.w=this.H=null;this.h=[];this.m=[];this.C=this.u=null;this.A=!1}wb.prototype.supportsConfiguredBrowser=function(){return"x"!==this.g};wb.prototype.init=function(){if(0<this.m.length){for(var a=[],b=0;b<this.m.length;b++)a.push(ea(this.m[b]));var b=this.b,a=a.join(""),c=Ka(this.b,"style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));La(b,"head",c)}};
wb.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",n=f.hostname||this.C;a=f.timeout;c=!!f.async;var k=!1!==f.events,q=null,F=new la,G=new la,C=new sb;f.active&&(d=f.active);f.active=function(){G.b=(new Date).getTime();if(e.J){var a=e.J,b=-1!==F.g&&-1!==F.b?F.b-F.g:-1,c=-1!==G.g&&-1!==G.b?G.b-G.g:-1,f=new w("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),
g=encodeURIComponent((window.__adobewebfontsappname__||a.app||"").toString().substr(0,20)),n=encodeURIComponent(ga(e.b)),r=[],k=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var k=window.Typekit.fonts,q=0;q<a.b.length;q++){for(var u=!1,C=0;C<k.length;C++)if(a.b[q]===k[C]){u=!0;break}u||(r.push(a.b[q]),k.push(a.b[q]))}r.length&&pa(f.s({service:a.m,token:a.u,app:g,hosting:a.h,host:n,variations:r.join("."),account:a.g,stylesheetLoadTime:b,fontLoadTime:c,version:a.version,_:(+new Date).toString()}))}d()};
q=new Sa(this.b,f);if(this.g){for(var f=na[this.g]||new ja(ka),u=0;u<this.h.length;u++)Ya(this.h[u],this.g,f);this.u&&(f=ma(this.b,this.g,this.h),f=oa(this.g,f),f.contextPath=g,n&&(f.hostname=n),g=this.u.s(f,this.A?"https:"!==Pa(this.b):!1),F.start(),Qa(this.b,g,tb(C),c));if(k){for(var W=[],lb={},r=new mb(this.b,q,a),u=0;u<this.h.length;u++)W=W.concat(Za(this.h[u],this.g));for(u=0;u<W.length;u++)lb[W[u].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";vb(C,function(){F.b=(new Date).getTime();
G.start();Ma(e.b,function(){var a=W,c={},d=lb||{};if(0===a.length&&b)Ta(r.g);else{r.h+=a.length;b&&(r.w=b);var e,f=[];for(e=0;e<a.length;e++){var g=a[e],n=d[g.getName()],k=r.g,q=g;k.m&&Q(k.h,[k.g.s("wf",q.getName(),S(q).toString(),"loading")]);R(k,"fontloading",q);k=null;null===nb&&(nb=window.FontFace?(q=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(q[1],10):!0:!1);nb?k=new kb(h(r.m,r),h(r.u,r),r.b,g,r.C,n):k=new cb(h(r.m,r),h(r.u,r),r.b,g,r.C,c,n);f.push(k)}for(e=0;e<f.length;e++)f[e].start()}})})}}};var xb,O=new function(){var a=document;this.b=navigator.userAgent;this.g=a},yb;
if(-1!=O.b.indexOf("MSIE")||-1!=O.b.indexOf("Trident/")){var U=O,zb=L(U),Ab=D(N(U)),Bb=null,Cb=null,Db=null,Eb=M(U.b,/Trident\/([\d\w\.]+)/,1),Fb=P(U.g),Bb=-1!=U.b.indexOf("MSIE")?D(M(U.b,/MSIE ([\d\w\.]+)/,1)):D(M(U.b,/rv:([\d\w\.]+)/,1));""!==Eb?(Cb="Trident",Db=D(Eb)):(Cb="Unknown",Db=new y);yb=new x("MSIE",Bb,Cb,Db,zb,Ab,Fb)}else{var Gb;if(-1!=O.b.indexOf("Edge/")){var Hb=O,Ib=L(Hb),Jb=D(N(Hb)),Kb=D(M(Hb.b,/Edge\/([\d\w\.]+)/,1));Gb=new x("Edge",Kb,"Edge",Kb,Ib,Jb,P(Hb.g))}else{var Lb;if(-1!=
O.b.indexOf("Opera"))Lb=Ga();else{var Mb;if(/OPR\/[\d.]+/.test(O.b))Mb=Ha();else{var Nb;if(/AppleWeb(K|k)it/.test(O.b))Nb=Ha();else{var Ob;if(-1!=O.b.indexOf("Gecko")){var V=O,Pb="Unknown",Qb=new y,Rb=D(N(V));-1!=V.b.indexOf("Firefox")?(Pb="Firefox",Qb=D(M(V.b,/Firefox\/([\d\w\.]+)/,1))):-1!=V.b.indexOf("Mozilla")&&(Pb="Mozilla");var Sb=D(M(V.b,/rv:([^\)]+)/,1));Ob=new x(Pb,Qb,"Gecko",Sb,L(V),Rb,P(V.g))}else Ob=Fa;Nb=Ob}Mb=Nb}Lb=Mb}Gb=Lb}yb=Gb}xb=yb;
var Tb=new function(){var a=window;this.g=this.h=a;this.b=this.g.document};window.Typekit||(window.Typekit={});if(!window.Typekit.load){var Ub=window.Typekit.config||{},Vb=null;Ub.k&&(Vb=new w(Ub.k));var Wb=new pb(Vb,Tb);window.Typekit.load=function(){Wb.load.apply(Wb,arguments)};window.Typekit.addKit=function(){Wb.h.apply(Wb,arguments)}}var Xb,X,Y,m=window.Typekit.config||{};Y=new wb(Tb);
Y.J=new function(){var a=m.ht,b=m.fi,c=m.a,d=m.kt,e=m.js,f=m.l;this.m=m.ps;this.h=a;this.b=b||[];this.g=c||null;this.u=d||null;this.version=e||null;this.app=f||null};X=new ca;X.M=!m.si;X.L=!m.st;X.I=!m.sa;X.O=!m.sw;X.N=!m.sb;Y.w=X;m.ds&&(Y.A=m.ds);m.f&&(Xb=new w(m.f),Y.u=Xb);m.hn&&(Y.C=m.hn);var p;if(m.fn)for(p=0;p<m.fn.length;p+=2)Y.h.push(new Xa(m.fn[p],m.fn[p+1]));if(m.c)for(p=0;p<m.c.length;p+=2)Y.m.push(new da);Y.H=xb;var Yb;
a:{var Zb=Y.H,$b=new ca,ac=Y.w||$b,bc;for(bc in t){var Z=t[bc];if(Ea[Z]&&Ea[Z](Zb,ac)){Yb=Z;break a}}for(bc in t)if(Z=t[bc],Ea[Z]&&Ea[Z](Zb,$b)){Yb="x";break a}Yb="k"}Y.g=Yb;window.Typekit.addKit(Y);if(window.WebFont)try{window.Typekit.load()}catch(a){};}(this,document));

try{Typekit.load();}catch(e){};
