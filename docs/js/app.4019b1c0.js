(function(e){function n(n){for(var o,r,u=n[0],c=n[1],s=n[2],l=0,d=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(d.length)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({404:"404","Home~Playground":"Home~Playground",Home:"Home",Playground:"Playground",Settings:"Settings"}[e]||e)+"."+{404:"81ef6568","Home~Playground":"9d282d5a",Home:"dc3506c8",Playground:"81be9223",Settings:"1775d4a1"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={404:1,"Home~Playground":1,Home:1,Playground:1,Settings:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({404:"404","Home~Playground":"Home~Playground",Home:"Home",Playground:"Playground",Settings:"Settings"}[e]||e)+"."+{404:"86aa7c43","Home~Playground":"f4751fab",Home:"7f9c0cc6",Playground:"95f8aef0",Settings:"0e433876"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===o||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),t(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/nav/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2395:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i=(t("7c55"),t("2877")),u={},c=Object(i["a"])(u,r,a,!1,null,null,null),s=c.exports,l=(t("d3b7"),t("3ca3"),t("ddb0"),t("b0c0"),t("8c4f")),d=(t("99af"),t("4de4"),t("d81d"),t("caad"),t("2532"),t("7db0"),t("9911"),"link_ids");function f(){var e=parseInt(1e5*Math.random(0,1e4));return"user_link-".concat(+new Date,"-").concat(e)}function p(e){return localStorage[e]?JSON.parse(localStorage[e]):void 0}function m(e,n){localStorage[e]=JSON.stringify(n)}var h={find:function(){var e=this,n=p(d)||[],t=[],o=n.filter((function(n){var o=e.findOne(n);return o&&t.push(o),o}));return o.length!==n.length&&m(d,o),t},findOne:function(e){return p(e)},insert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.map((function(e){insertOne(e)}))},insertOne:function(e){e.id=e.id||f();var n=p(d)||[];n.includes(e.id)||(n.push(e.id),m(d,n)),m(e.id,e)},update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(e.id,e)},remove:function(e){delete localStorage[e]},export:function(){return{links:this.find(),link_ids:p(d)}},import:function(e,n){var t=this,o=p(d)||[];e.links.map((function(e){if(o.includes(e.id)){var r=t.findOne(e.id);e.name===r.name&&e.link===r.link||(n.merge&&delete e.id,t.insertOne(e))}else t.insertOne(e)}))}},g={report:function(e,n,t){window.gtag&&window.gtag("event",e,{event_category:n,event_label:t})}};function v(e){if(!e)return g;e.prototype.$links=h,e.prototype.$utils=g}var b=v,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("keep-alive",[t("router-view")],1)],1)],1),t("transition",{attrs:{appear:""}},[t("Affix",{directives:[{name:"show",rawName:"v-show",value:e.show_navbar,expression:"show_navbar"}],attrs:{"offset-bottom":20}},[t("div",{staticClass:"nav"},e._l(e.NAV_CONFIG,(function(n){return t("router-link",{key:n.path,class:["item",e.active==n.path&&"active"],attrs:{to:n.path}},[t("Icon",{attrs:{type:n.icon}}),t("br"),t("span",[e._v(e._s(n.name))])],1)})),1)])],1)],1)},w=[],P=[{path:"/playground",name:"广场",icon:"md-wifi"},{path:"/home",name:"我的",icon:"md-home"},{path:"/settings",name:"设置",icon:"md-settings"}],_={name:"Home",components:{},data:function(){return{NAV_CONFIG:P,active:P[1].path,last_offset:0,show_navbar:!0}},computed:{},watch:{last_offset:function(e,n){this.show_navbar=!(e>140)||e<n},$route:function(e){this.active=e.path}},created:function(){var e=this;"/"==this.$route.path?this.active="/home":this.active=this.$route.path,window.addEventListener("scroll",(function(n){e.last_offset=window.pageYOffset})),window.addEventListener("contextmenu",(function(e){e.preventDefault()}))},mounted:function(){},methods:{}},O=_,k=(t("c0f7"),Object(i["a"])(O,y,w,!1,null,null,null)),S=k.exports;o["default"].use(l["a"]);var H=[{path:"/",component:S,children:[{path:"/",name:"我的",component:function(){return Promise.all([t.e("Home~Playground"),t.e("Home")]).then(t.bind(null,"bb51"))}},{path:"/playground",name:"广场",component:function(){return Promise.all([t.e("Home~Playground"),t.e("Playground")]).then(t.bind(null,"08ad"))}},{path:"/home",name:"我的",component:function(){return Promise.all([t.e("Home~Playground"),t.e("Home")]).then(t.bind(null,"bb51"))}},{path:"/settings",name:"设置",component:function(){return t.e("Settings").then(t.bind(null,"26d3"))}}]},{path:"/about",name:"关于",component:function(){return t.e("404").then(t.bind(null,"754b"))}},{path:"*",name:"404",component:function(){return t.e("404").then(t.bind(null,"8cdb"))}}],j=new l["a"]({mode:"hash",base:"/nav/",routes:H});j.beforeEach((function(e,n,t){b().report("点击","跳转",e.name),document.title="".concat(e.name,"-自嗨导航"),t()}));var E=j,N=t("f825"),x=t.n(N),C=t("9483");Object(C["a"])("".concat("/nav/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("f8ce");o["default"].use(x.a),o["default"].use(b),o["default"].config.productionTip=!1,new o["default"]({router:E,render:function(e){return e(s)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";t("2395")},"9cff":function(e,n,t){},c0f7:function(e,n,t){"use strict";t("9cff")}});
//# sourceMappingURL=app.4019b1c0.js.map