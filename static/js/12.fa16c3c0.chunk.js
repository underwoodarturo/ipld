(this["webpackJsonpipld-explorer"]=this["webpackJsonpipld-explorer"]||[]).push([[12],{3303:function(e,t,r){"use strict";r.r(t),r.d(t,"ExplorePage",(function(){return L}));var n=r(0),a=r.n(n),l=r(128),o=r(372),c=r(46),i=r(160),s=r(122),u=r(45),p=r(120);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e){var t=e.split("");return t.length<=9?e:{value:e,start:t.slice(0,4).join(""),end:t.slice(t.length-4).join("")}}var y=function(e){var t=e.value,r=e.title,n=e.style,l=d(e,["value","title","style"]);n=Object.assign({},{textDecoration:"none"},n);var o=m(t),c=o.start,i=o.end;return a.a.createElement("abbr",f({title:r||t,style:n},l),a.a.createElement("span",null,c),a.a.createElement("span",{className:"o-20"},"\u2026"),a.a.createElement("span",null,i))},h=r(103);function b(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function g(e,t,r,n){var a=r.slice(0,n).map((function(e){return e.path})).join("/"),l=e+"/"+t;return a?l+"/"+a:l}var O=function(e){var t=e.cid,r=e.children,n=Object(h.a)(t),l=Object(u.a)(n);return a.a.createElement("div",{className:"dib overflow-hidden"},a.a.createElement("div",{className:"bb bw1 pb1",style:{borderColor:l}},r))},j=function(e){var t=e.path,r=e.hrefBase,n=e.sourceCid,l=t.split("/").filter((function(e){return!!e}));return a.a.createElement("div",{className:"dib"},l.map((function(e,t){var o=l.slice(0,t+1).join("/"),c="".concat(r,"/").concat(o);return a.a.createElement("div",{className:"dib",key:c},0!==t&&a.a.createElement(w,null),a.a.createElement("a",{className:"dib link dark-gray o-50 glow",title:n+"/"+o,href:c},e))})))},w=function(){return a.a.createElement("div",{className:"dib ph2 gray v-top"},"/")},x=function(e){var t=e.cid,r=e.pathBoundaries,n=e.localPath,l=e.hrefBase,o=void 0===l?"#/explore":l,c=e.className,i=void 0===c?"":c,s=E(e,["cid","pathBoundaries","localPath","hrefBase","className"]),u=b(r),p=u[0],f=u.slice(1),d=r[r.length-1],m=g(o,t,r,0);return a.a.createElement("div",s,a.a.createElement("div",{className:"sans-serif ".concat(i)},a.a.createElement(O,{cid:t},a.a.createElement("a",{href:m,className:"monospace link dark-gray o-50 glow"},a.a.createElement(y,{value:t})),p?a.a.createElement("div",{className:"dib"},a.a.createElement(w,null),a.a.createElement(j,{path:p.path,hrefBase:m,sourceCid:t})):null,n&&0===r.length?a.a.createElement("div",{className:"dib"},a.a.createElement(w,null),a.a.createElement(j,{path:n,sourceCid:t,hrefBase:m})):null),f.map((function(e,n){var l=g(o,t,r,n+1);return a.a.createElement("div",{className:"dib",key:n},a.a.createElement(w,null),a.a.createElement(O,{cid:e.source},a.a.createElement(j,{path:e.path,sourceCid:e.source,hrefBase:l})))})),n&&r.length>0?a.a.createElement("div",{className:"dib"},a.a.createElement(w,null),a.a.createElement(O,{cid:d.target},a.a.createElement(j,{path:n,sourceCid:d.target,hrefBase:g(o,t,r,r.length)}))):null))},N=r(73),k=r(153),P=r(107);function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=A(e);if(t){var a=A(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return _(this,r)}}function _(e,t){return!t||"object"!==S(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(c,e);var t,r,n,o=I(c);function c(){return B(this,c),o.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=e.t,r=e.explore,n=e.exploreIsLoading,o=e.explorePathFromHash,c=e.doExploreLink,f=e.runTour,d=void 0!==f&&f,m=e.joyrideCallback,y=e.gatewayUrl,h=void 0===y?"https://ipfs.io":y;if(!o)return console.log("[IPLD Explorer] ExplorePage loaded without a path to explore"),null;r=r||{};var b=r=n?{}:r,v=b.error,E=b.targetNode,g=b.localPath,O=b.nodes,j=b.pathBoundaries,w=O&&O[0]||null;return a.a.createElement("div",{className:"nt4-l"},a.a.createElement(l.Helmet,null,a.a.createElement("title",null,t("ExplorePage.title"))),j&&E?a.a.createElement(x,{className:"joyride-explorer-crumbs",style:{padding:"15px 0 10px"},cid:w.cid,pathBoundaries:j,localPath:g}):a.a.createElement("div",{style:{height:54}}),a.a.createElement("div",{className:"dt-l dt--fixed"},a.a.createElement("div",{className:"dtc-l w-100 w-two-thirds-l pr3-l v-top"},v?a.a.createElement("div",{className:"bg-red white pa3 lh-copy"},v):null,E?a.a.createElement(u.b,{className:"joyride-explorer-node",style:{background:"#FBFBFB"},cid:E.cid,localPath:g,size:E.size,links:E.links,data:E.data,type:E.type,format:E.format,onLinkClick:c,gatewayUrl:h}):null,v||E?null:a.a.createElement(N.a,{pastDelay:!0})),a.a.createElement("div",{className:"dtc-l w-third-l v-top pt3 pt0-l"},E?a.a.createElement(s.a,{className:"joyride-explorer-cid",style:{background:"#FBFBFB",overflow:"hidden"},cid:E.cid}):null,E?a.a.createElement(i.a,null,a.a.createElement(p.a,{className:"joyride-explorer-graph",style:{width:"100%",height:300},path:E.cid,links:E.links,onNodeClick:c})):null)),a.a.createElement(k.a,{run:d,steps:P.a.getSteps({t:t}),styles:P.a.styles,callback:m,continuous:!0,scrollToFirstStep:!0,showProgress:!0}))}}])&&C(t.prototype,r),n&&C(t,n),c}(a.a.Component);t.default=Object(c.b)("selectExplore","selectExploreIsLoading","selectExplorePathFromHash","doExploreLink",Object(o.a)("explore")(L))}}]);
//# sourceMappingURL=12.fa16c3c0.chunk.js.map