(function(e){function t(t){for(var o,r,c=t[0],l=t[1],u=t[2],s=0,d=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function c(e){return l.p+"js/"+({404:"404",Home:"Home",Playground:"Playground",Settings:"Settings"}[e]||e)+"."+{404:"a85dac9f",Home:"34eefe8f",Playground:"babc7ccb",Settings:"02818b70"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={404:1,Home:1,Playground:1,Settings:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({404:"404",Home:"Home",Playground:"Playground",Settings:"Settings"}[e]||e)+"."+{404:"86aa7c43",Home:"b3621618",Playground:"72c3eb6d",Settings:"0e433876"}[e]+".css",i=l.p+o,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===o||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/nav/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("7c55"),n("2877")),c={},l=Object(a["a"])(c,r,i,!1,null,null,null),u=l.exports,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),d=(n("ac1f"),n("1276"),n("a9e3"),n("d81d"),n("caad"),n("2532"),n("4de4"),n("9911"),"link_500");function f(){var e=d;return localStorage.last_id&&(e=localStorage.last_id.split("_")[1],e="link_".concat(++e)),h(e),e}function p(e){var t=localStorage.last_id||d,n=Number(t.split("_")[1]),o=Number(e.split("_")[1]);return o>n}function h(e){localStorage.last_id&&!p(e)||(localStorage.last_id=e)}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t;try{n=JSON.parse(localStorage[e])}catch(o){}return n}function v(e,t){localStorage[e]=JSON.stringify(t)}var g={get:function(e){var t=m("link_id_list",[]);if("export"==e){var n={};return t.map((function(e){n[e]=m(e)})),n}var o=[];return t.map((function(e){o.push(m(e))})),o},insert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.map((function(e){e.id=e.id||f();var t=m("link_id_list",[]);t.includes(e.id)||(t.push(e.id),v("link_id_list",t)),h(e.id),v(e.id,e)}))},update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(e.id,e)},remove:function(e){delete localStorage[e];var t=m("link_id_list",[]);t=t.filter((function(t){return e!=t})),v("link_id_list",t)},export:function(){return{links:this.get("export"),link_id_list:m("link_id_list",[]),last_id:localStorage.last_id}},import:function(e,t){var n=this,o=this.export();e.link_id_list.map((function(r){if(o.link_id_list.includes(r))if(e.links[r].name==o.links[r].name&&e.links[r].link==o.links[r].link);else{var i=e.links[r];t.merge&&delete i.id}else{e.links[r];n.insert([e.links[r]])}}))}},b={report:function(e,t,n){window.gtag&&window.gtag("event",e,{event_category:t,event_label:n})}};function _(e){if(!e)return b;e.prototype.$links=g,e.prototype.$utils=b}var y=_,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1),n("transition",{attrs:{appear:""}},[n("Affix",{directives:[{name:"show",rawName:"v-show",value:e.show_navbar,expression:"show_navbar"}],attrs:{"offset-bottom":20}},[n("div",{staticClass:"nav"},e._l(e.NAV_CONFIG,(function(t){return n("router-link",{key:t.path,class:["item",e.active==t.path&&"active"],attrs:{to:t.path}},[n("Icon",{attrs:{type:t.icon}}),n("br"),n("span",[e._v(e._s(t.name))])],1)})),1)])],1)],1)},k=[],S=[{path:"/playground",name:"广场",icon:"md-wifi"},{path:"/home",name:"我的",icon:"md-home"},{path:"/settings",name:"设置",icon:"md-settings"}],O={name:"Home",components:{},data:function(){return{NAV_CONFIG:S,active:S[1].path,last_offset:0,show_navbar:!0}},computed:{},watch:{last_offset:function(e,t){this.show_navbar=!(e>140)||e<t},$route:function(e){this.active=e.path}},created:function(){var e=this;"/"==this.$route.path?this.active="/home":this.active=this.$route.path,window.addEventListener("scroll",(function(t){e.last_offset=window.pageYOffset})),window.addEventListener("contextmenu",(function(e){e.preventDefault()}))},mounted:function(){},methods:{}},P=O,N=(n("c0f7"),Object(a["a"])(P,w,k,!1,null,null,null)),x=N.exports;o["default"].use(s["a"]);var j=[{path:"/",component:x,children:[{path:"/",name:"我的",component:function(){return n.e("Home").then(n.bind(null,"bb51"))}},{path:"/playground",name:"广场",component:function(){return n.e("Playground").then(n.bind(null,"08ad"))}},{path:"/home",name:"我的",component:function(){return n.e("Home").then(n.bind(null,"bb51"))}},{path:"/settings",name:"设置",component:function(){return n.e("Settings").then(n.bind(null,"26d3"))}}]},{path:"/about",name:"关于",component:function(){return n.e("404").then(n.bind(null,"754b"))}},{path:"*",name:"404",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}}],E=new s["a"]({mode:"hash",base:"/nav/",routes:j});E.beforeEach((function(e,t,n){y().report("点击","跳转",e.name),document.title="".concat(e.name,"-自嗨导航"),n()}));var C=E,A=n("f825"),H=n.n(A),T=n("9483");Object(T["a"])("".concat("/nav/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("f8ce");o["default"].use(H.a),o["default"].use(y),o["default"].config.productionTip=!1,new o["default"]({router:C,render:function(e){return e(u)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")},"9cff":function(e,t,n){},c0f7:function(e,t,n){"use strict";n("9cff")}});
//# sourceMappingURL=app.710a6603.js.map