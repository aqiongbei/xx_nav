(function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],s=0,d=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function l(e){return u.p+"js/"+({404:"404",Home:"Home",Playground:"Playground",Settings:"Settings"}[e]||e)+"."+{404:"c05458f2",Home:"6306b99b",Playground:"2b331507",Settings:"2368d5e4"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={404:1,Home:1,Playground:1,Settings:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({404:"404",Home:"Home",Playground:"Playground",Settings:"Settings"}[e]||e)+"."+{404:"86aa7c43",Home:"9bce3cb1",Playground:"649ba64a",Settings:"0e433876"}[e]+".css",i=u.p+r,a=document.getElementsByTagName("link"),l=0;l<a.length;l++){var c=a[l],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===i))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],s=c.getAttribute("data-href");if(s===r||s===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=l(e);var d=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/nav/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("7c55"),n("2877")),l={},u=Object(a["a"])(l,o,i,!1,null,null,null),c=u.exports,s=(n("b0c0"),n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",on:{touchstart:e.touchHandler}},[n("div",{staticClass:"content"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1),n("transition",{attrs:{appear:""}},[n("Affix",{directives:[{name:"show",rawName:"v-show",value:e.show_navbar,expression:"show_navbar"}],attrs:{"offset-bottom":20}},[n("div",{staticClass:"nav"},e._l(e.NAV_CONFIG,(function(t){return n("router-link",{key:t.path,class:["item",e.active==t.path&&"active"],attrs:{to:t.path}},[n("Icon",{attrs:{type:t.icon}}),n("br"),n("span",[e._v(e._s(t.name))])],1)})),1)])],1)],1)},f=[],p=[{path:"/playground",name:"广场",icon:"md-wifi"},{path:"/home",name:"我的",icon:"md-home"},{path:"/settings",name:"设置",icon:"md-settings"}],m={name:"Home",components:{},data:function(){return{NAV_CONFIG:p,active:p[1].path,last_offset:0,show_navbar:!0}},computed:{},watch:{last_offset:function(e,t){this.show_navbar=!(e>140)||e<t},$route:function(e){this.active=e.path}},created:function(){var e=this;"/"==this.$route.path?this.active="/home":this.active=this.$route.path,window.addEventListener("scroll",(function(t){e.last_offset=window.pageYOffset})),window.addEventListener("contextmenu",(function(e){e.preventDefault()}))},mounted:function(){},methods:{touchHandler:function(e){if(!this.$utils.isFullScreen()){var t=e.target;"content"==t.className&&(window.touch_el=e.target)}}}},h=m,v=(n("c0f7"),Object(a["a"])(h,d,f,!1,null,null,null)),g=v.exports;r["default"].use(s["a"]);var b=[{path:"/",component:g,children:[{path:"/",name:"我的",component:function(){return n.e("Home").then(n.bind(null,"bb51"))}},{path:"/playground",name:"广场",component:function(){return n.e("Playground").then(n.bind(null,"08ad"))}},{path:"/home",name:"我的",component:function(){return n.e("Home").then(n.bind(null,"bb51"))}},{path:"/settings",name:"设置",component:function(){return n.e("Settings").then(n.bind(null,"26d3"))}}]},{path:"/about",name:"关于",component:function(){return n.e("404").then(n.bind(null,"754b"))}},{path:"*",name:"404",component:function(){return n.e("404").then(n.bind(null,"8cdb"))}}],_=new s["a"]({mode:"hash",base:"/nav/",routes:b});_.beforeEach((function(e,t,n){document.title="".concat(e.name,"-自嗨导航"),n()}));var w=_,y=(n("4de4"),n("caad"),n("d81d"),n("a9e3"),n("ac1f"),n("2532"),n("1276"),n("9911"),"link_500");function k(){var e=y;return localStorage.last_id&&(e=localStorage.last_id.split("_")[1],e="link_".concat(++e)),e}function S(e){var t=localStorage.last_id||y,n=Number(t.split("_")[1]),r=Number(e.split("_")[1]);return r>n}function F(e){S(e)&&(localStorage.last_id=e)}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t;try{n=JSON.parse(localStorage[e])}catch(r){}return n}function O(e,t){localStorage[e]=JSON.stringify(t)}var E={get:function(e){var t=x("link_id_list",[]);if("export"==e){var n={};return t.map((function(e){n[e]=x(e)})),n}var r=[];return t.map((function(e){r.push(x(e))})),r},insert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.map((function(e){e.id=e.id||k();var t=x("link_id_list",[]);t.includes(e.id)||(t.push(e.id),O("link_id_list",t)),F(e.id),O(e.id,e)}))},update:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O(e.id,e)},remove:function(e){delete localStorage[e];var t=x("link_id_list",[]);t=t.filter((function(t){return e!=t})),O("link_id_list",t)},export:function(){return{links:this.get("export"),link_id_list:x("link_id_list",[]),last_id:localStorage.last_id}},import:function(e,t){var n=this,r=this.export();e.link_id_list.map((function(o){if(r.link_id_list.includes(o))if(e.links[o].name==r.links[o].name&&e.links[o].link==r.links[o].link);else{var i=e.links[o];t.merge&&delete i.id}else{e.links[o];n.insert([e.links[o]])}}))}},N={isFullScreen:function(){return!!(document.fullscreen||document.mozFullScreen||document.webkitIsFullScreen||document.webkitFullScreen||document.msFullScreen)},exitFullscreen:function(){document.exitFullScreen?document.exitFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():element.msExitFullscreen&&element.msExitFullscreen()},fullScreen:function(){var e=window.touch_el;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}};function P(e){e.prototype.$links=E,e.prototype.$utils=N}var j=P,C=n("f825"),H=n.n(C),A=n("9483");Object(A["a"])("".concat("/nav/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("f8ce");r["default"].use(H.a),r["default"].use(j),r["default"].config.productionTip=!1,new r["default"]({router:w,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395"),o=n.n(r);o.a},"9cff":function(e,t,n){},c0f7:function(e,t,n){"use strict";var r=n("9cff"),o=n.n(r);o.a}});
//# sourceMappingURL=app.f5464d9b.js.map