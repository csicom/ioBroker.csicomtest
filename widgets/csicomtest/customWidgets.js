var vis2csicomtestWidgets;(()=>{"use strict";var e={6062:(e,r,t)=>{var s={"./csicom1":()=>Promise.all([t.e("webpack_sharing_consume_default_react_react"),t.e("src_csicom1_jsx")]).then((()=>()=>t(5683))),"./translations":()=>t.e("src_translations_js").then((()=>()=>t(5850)))},o=(e,r)=>(t.R=r,r=t.o(s,e)?s[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),n=(e,r)=>{if(t.S){var s="default",o=t.S[s];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[s]=e,t.I(s,r)}};t.d(r,{get:()=>o,init:()=>n})}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var n=r[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.m=e,t.c=r,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,s)=>(t.f[s](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{"vendors-node_modules_mui_system_DefaultPropsProvider_DefaultPropsProvider_js-node_modules_mui-d9e9bd":"e34756b0","vendors-node_modules_mui_material_index_js":"4fa44c5e",webpack_sharing_consume_default_react_react:"3f16c17a","webpack_sharing_consume_default_clsx_clsx-webpack_sharing_consume_default_prop-types_prop-types":"a2b33879","webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4":"e86a0ae7","node_modules_react_jsx-runtime_js-_c9180":"4737ba92","vendors-node_modules_mui_system_index_js":"3e1df31a","node_modules_react_jsx-runtime_js-_c9181":"f6243449",node_modules_clsx_dist_clsx_mjs:"aa41554c","node_modules_prop-types_index_js":"a5a37e4b","vendors-node_modules_react-dom_index_js":"572eaf4c",node_modules_react_index_js:"27ff650a",src_csicom1_jsx:"c6548fde",src_translations_js:"5d7d5d34"}[e]+".chunk.js",t.miniCssF=e=>{},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="iobroker.csicomtest:";t.l=(s,o,n,a)=>{if(e[s])e[s].push(o);else{var _,i;if(void 0!==n)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==s||c.getAttribute("data-webpack")==r+n){_=c;break}}_||(i=!0,(_=document.createElement("script")).charset="utf-8",_.timeout=120,t.nc&&_.setAttribute("nonce",t.nc),_.setAttribute("data-webpack",r+n),_.src=s),e[s]=[o];var l=(r,t)=>{_.onerror=_.onload=null,clearTimeout(m);var o=e[s];if(delete e[s],_.parentNode&&_.parentNode.removeChild(_),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:_}),12e4);_.onerror=l.bind(null,_.onerror),_.onload=l.bind(null,_.onload),i&&document.head.appendChild(_)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{t.S={};var e={},r={};t.I=(s,o)=>{o||(o=[]);var n=r[s];if(n||(n=r[s]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[s])return e[s];t.o(t.S,s)||(t.S[s]={});var a=t.S[s],_="iobroker.csicomtest",i=(e,r,t,s)=>{var o=a[e]=a[e]||{},n=o[r];(!n||!n.loaded&&(!s!=!n.eager?s:_>n.from))&&(o[r]={get:t,from:_,eager:!!s})},d=[];if("default"===s)i("@mui/material","*",(()=>Promise.all([t.e("vendors-node_modules_mui_system_DefaultPropsProvider_DefaultPropsProvider_js-node_modules_mui-d9e9bd"),t.e("vendors-node_modules_mui_material_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_clsx_clsx-webpack_sharing_consume_default_prop-types_prop-types"),t.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),t.e("node_modules_react_jsx-runtime_js-_c9180")]).then((()=>()=>t(5441))))),i("@mui/system","*",(()=>Promise.all([t.e("vendors-node_modules_mui_system_DefaultPropsProvider_DefaultPropsProvider_js-node_modules_mui-d9e9bd"),t.e("vendors-node_modules_mui_system_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_clsx_clsx-webpack_sharing_consume_default_prop-types_prop-types"),t.e("node_modules_react_jsx-runtime_js-_c9181")]).then((()=>()=>t(1463))))),i("clsx","*",(()=>t.e("node_modules_clsx_dist_clsx_mjs").then((()=>()=>t(8387))))),i("prop-types","*",(()=>t.e("node_modules_prop-types_index_js").then((()=>()=>t(5173))))),i("react-dom","*",(()=>Promise.all([t.e("vendors-node_modules_react-dom_index_js"),t.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>t(7950))))),i("react","*",(()=>t.e("node_modules_react_index_js").then((()=>()=>t(5043)))));return d.length?e[s]=Promise.all(d).then((()=>e[s]=1)):e[s]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var s=r.getElementsByTagName("script");if(s.length)for(var o=s.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=s[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),s=t[1]?r(t[1]):[];return t[2]&&(s.length++,s.push.apply(s,r(t[2]))),t[3]&&(s.push([]),s.push.apply(s,r(t[3]))),s},r=(r,t)=>{r=e(r),t=e(t);for(var s=0;;){if(s>=r.length)return s<t.length&&"u"!=(typeof t[s])[0];var o=r[s],n=(typeof o)[0];if(s>=t.length)return"u"==n;var a=t[s],_=(typeof a)[0];if(n!=_)return"o"==n&&"n"==_||"s"==_||"u"==n;if("o"!=n&&"u"!=n&&o!=a)return o<a;s++}},s=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,n=1;n<e.length;n++)o--,t+="u"==(typeof(_=e[n]))[0]?"-":(o>0?".":"")+(o=2,_);return t}var a=[];for(n=1;n<e.length;n++){var _=e[n];a.push(0===_?"not("+i()+")":1===_?"("+i()+" || "+i()+")":2===_?a.pop()+" "+a.pop():s(_))}return i();function i(){return a.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var s=r[0],n=s<0;n&&(s=-s-1);for(var a=0,_=1,i=!0;;_++,a++){var d,u,c=_<r.length?(typeof r[_])[0]:"";if(a>=t.length||"o"==(u=(typeof(d=t[a]))[0]))return!i||("u"==c?_>s&&!n:""==c!=n);if("u"==u){if(!i||"u"!=c)return!1}else if(i)if(c==u)if(_<=s){if(d!=r[_])return!1}else{if(n?d>r[_]:d<r[_])return!1;d!=r[_]&&(i=!1)}else if("s"!=c&&"n"!=c){if(n||_<=s)return!1;i=!1,_--}else{if(_<=s||u<c!=n)return!1;i=!1}else"s"!=c&&"n"!=c&&(i=!1,_--)}}var l=[],m=l.pop.bind(l);for(a=1;a<r.length;a++){var p=r[a];l.push(1==p?m()|m():2==p?m()&m():p?o(p,t):!m())}return!!m()},n=(e,r)=>e&&t.o(e,r),a=e=>(e.loaded=1,e.get()),_=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),i=(e,t,s)=>{var o=s?_(e[t]):e[t];return Object.keys(o).reduce(((e,t)=>!e||!o[e].loaded&&r(e,t)?t:e),0)},d=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+s(o)+")",u=e=>{throw new Error(e)},c=e=>{"undefined"!==typeof console&&console.warn&&console.warn(e)},l=e=>function(r,s,o,n,a){var _=t.I(r);return _&&_.then&&!o?_.then(e.bind(e,r,t.S[r],s,!1,n,a)):e(r,t.S[r],s,o,n,a)},m=(e,r,t)=>t?t():((e,r)=>u("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),p=l(((e,r,t,s,_,u)=>{if(!n(r,t))return m(e,t,u);var l=i(r,t,s);return o(_,l)||c(d(r,t,l,_)),a(r[t][l])})),f={},h={8437:()=>p("default","react",!1,[0],(()=>t.e("node_modules_react_index_js").then((()=>()=>t(5043))))),3829:()=>p("default","clsx",!1,[0],(()=>t.e("node_modules_clsx_dist_clsx_mjs").then((()=>()=>t(8387))))),5973:()=>p("default","prop-types",!1,[0],(()=>t.e("node_modules_prop-types_index_js").then((()=>()=>t(5173))))),9945:()=>p("default","@mui/system",!1,[0],(()=>t.e("vendors-node_modules_mui_system_index_js").then((()=>()=>t(1463))))),3479:()=>p("default","react-dom",!1,[0],(()=>t.e("vendors-node_modules_react-dom_index_js").then((()=>()=>t(7950))))),7085:()=>p("default","@mui/material",!1,[0],(()=>Promise.all([t.e("vendors-node_modules_mui_system_DefaultPropsProvider_DefaultPropsProvider_js-node_modules_mui-d9e9bd"),t.e("vendors-node_modules_mui_material_index_js"),t.e("webpack_sharing_consume_default_clsx_clsx-webpack_sharing_consume_default_prop-types_prop-types"),t.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4")]).then((()=>()=>t(5441)))))},v={webpack_sharing_consume_default_react_react:[8437],"webpack_sharing_consume_default_clsx_clsx-webpack_sharing_consume_default_prop-types_prop-types":[3829,5973],"webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4":[9945,3479],src_csicom1_jsx:[7085]},b={};t.f.consumes=(e,r)=>{t.o(v,e)&&v[e].forEach((e=>{if(t.o(f,e))return r.push(f[e]);if(!b[e]){var s=r=>{f[e]=0,t.m[e]=s=>{delete t.c[e],s.exports=r()}};b[e]=!0;var o=r=>{delete f[e],t.m[e]=s=>{throw delete t.c[e],r}};try{var n=h[e]();n.then?r.push(f[e]=n.then(s).catch(o)):s(n)}catch(a){o(a)}}}))}})(),(()=>{var e={vis2csicomtestWidgets:0};t.f.j=(r,s)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)s.push(o[2]);else if(/^webpack_sharing_consume_default_(clsx_clsx\-webpack_sharing_consume_default_prop\-types_prop\-types|mui_system_mui_system\-webpack_sharing_consume_default_react\-d\-dde2d4|react_react)$/.test(r))e[r]=0;else{var n=new Promise(((t,s)=>o=e[r]=[t,s]));s.push(o[2]=n);var a=t.p+t.u(r),_=new Error;t.l(a,(s=>{if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;_.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",_.name="ChunkLoadError",_.type=n,_.request=a,o[1](_)}}),"chunk-"+r,r)}};var r=(r,s)=>{var o,n,a=s[0],_=s[1],i=s[2],d=0;if(a.some((r=>0!==e[r]))){for(o in _)t.o(_,o)&&(t.m[o]=_[o]);if(i)i(t)}for(r&&r(s);d<a.length;d++)n=a[d],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0},s=self.webpackChunkiobroker_csicomtest=self.webpackChunkiobroker_csicomtest||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))})();var s=t(6062);vis2csicomtestWidgets=s})();
//# sourceMappingURL=customWidgets.js.map