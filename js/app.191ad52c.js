(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],p=0,f=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/kobe/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"3b27":function(e,t,n){"use strict";var r=n("6f03"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Loading")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Loader",attrs:{id:"loader"},on:{click:e.playStartSound}},[e._m(0),n("div",{staticClass:"play",attrs:{id:"play"}})])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shoes"},[n("div",{staticClass:"tips"},[e._v("请戴上耳机")])])}],i=n("1e5c"),s=new i["Howl"]({src:"./sounds/mambastart.mp3"}),l=(new i["Howl"]({src:"./sounds/mambaend.mp3"}),new i["Howl"]({src:"./sounds/hit.mp3"}),new i["Howl"]({src:"./sounds/net.mp3"}),{name:"Loading",methods:{playStartSound:function(){console.log("click event"),s.play()}}}),p=l,f=(n("3b27"),n("2877")),d=Object(f["a"])(p,c,u,!1,null,"684e650d",null),v=d.exports,b={name:"App",components:{Loading:v}},m=b,h=(n("034f"),Object(f["a"])(m,o,a,!1,null,null,null)),y=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"6f03":function(e,t,n){},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.191ad52c.js.map