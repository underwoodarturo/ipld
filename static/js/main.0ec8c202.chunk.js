(this["webpackJsonpipld-explorer"]=this["webpackJsonpipld-explorer"]||[]).push([[3],{183:function(e,t,n){e.exports=n.p+"static/media/ipfs-logo.4831bd1a.svg"},215:function(e,t,n){e.exports=n(368)},235:function(e,t){},368:function(e,t,n){"use strict";n.r(t);n(216),n(217),n(218),n(123),n(124);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=n(46),l=n(371),c=n(113),p=n(161),u=n.n(p),d=n(162),f=n(164),m=n(165),h=n.n(m),g=n(166),I=n.n(g),v=n(167),b=n.n(v),w=n(168),S=n.n(w),y=n(169),E=n.n(y),P=n(170),O=n.n(P),N=n(171),_=n.n(N),j=n(172),x=n.n(j),T=n(173),k=n.n(T),F=n(174),A=n.n(F),D=n(175),U=n.n(D),L=n(176),C=n.n(L),R=n(177),W=n.n(R),H=n(178),J=n.n(H),z=n(179),q=n.n(z),B=n(180),K=n.n(B),M=n(181),Q=n.n(M),V=[h.a,I.a,b.a,S.a,E.a,O.a,_.a,x.a,k.a,A.a,U.a,C.a,W.a,J.a,q.a,K.a,Q.a];c.a.use(new u.a({localeData:V})).use(d.a).use(f.a).init({ns:["explore"],fallbackLng:{"zh-Hans":["zh-CN","en"],"zh-Hant":["zh-TW","en"],zh:["zh-CN","en"],default:["en"]},debug:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_VERSION:"1.1.0"}).DEBUG,backend:{loadPath:"locales/{{lng}}/{{ns}}.json"},react:{wait:!0,bindI18n:"languageChanged loaded",bindStore:"added removed",nsMode:"default",useSuspense:!1}});var G=c.a,$=n(62),X=n(63),Y=n(118),Z=n(121),ee=n(182),te=n.n(ee),ne=n(183),ae=n.n(ne),re=n(34),oe=n(372),ie=Object(oe.a)("explore")((function(e){var t=e.t;return r.a.createElement("header",{className:"flex-l items-center pa3 bg-navy bb bw3 border-aqua tc tl-l"},r.a.createElement("a",{href:"#/",title:t("homeLink"),className:"flex-none v-mid"},r.a.createElement("img",{src:ae.a,alt:"IPFS",style:{height:50,width:117.5}})),r.a.createElement("div",{className:"flex-auto ph2 ph3-l pt1"},r.a.createElement("div",{style:{maxWidth:560},className:"center-m"},r.a.createElement(re.b,null))),r.a.createElement("div",{className:"pt2 pt0-l ma0 inline-flex items-center"},r.a.createElement("h1",{className:"f3 fw2 montserrat aqua ttu"},t("appName"))))})),se=n(370),le=Object(oe.a)("explore")((function(){return r.a.createElement("div",{className:"fixed bottom-0 w-100 tc"},r.a.createElement("div",{className:"dib f5 lh-copy avenir ph4 pv3 white bg-green br2 br--top"},r.a.createElement(se.a,{i18nKey:"UpdateAvailable.paragraph1"},"A new version of IPLD Explorer is available,"," ",r.a.createElement("button",{className:"ma0 pa0 button-reset pointer underline link white fw5 bg-transparent bn",onClick:function(){return window.location.reload()}},"please reload"))))})),ce=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(e){var a;return Object($.a)(this,n),(a=t.call(this,e)).state={showUpdateAvailable:!1},e.registerServiceWorker&&e.registerServiceWorker({onUpdate:function(){return a.setState({showUpdateAvailable:!0})}}),a}return Object(X.a)(n,[{key:"componentDidMount",value:function(){this.props.doInitIpfs()}},{key:"render",value:function(){var e=this.state.showUpdateAvailable,t=this.props.route,n=this.props.queryObject.embed;return r.a.createElement("div",{className:"sans-serif",onClick:te()(this.props.doUpdateUrl)},n?null:r.a.createElement(ie,null),r.a.createElement("div",{className:"ph4-l pt4-l"},r.a.createElement(t,{embed:n})),e?r.a.createElement(le,null):null)}}]),n}(a.Component),pe=Object(s.b)("selectRoute","selectQueryObject","doUpdateUrl","doInitIpfs",ce),ue=n(12),de=n.n(ue),fe=n(159),me=n(195),he=n(72),ge=n(33),Ie=n(40),ve=n.n(Ie),be={apiOpts:{host:"enterprise.api.trato.io",port:"443",protocol:"https"},provider:"js-ipfs",ipfsReady:!1},we={name:"ipfs",reducer(e,t){var n=t.type,a=t.payload,r=t.error;return e=e||be,"IPFS_INIT_FINISHED"===n?Object.assign({},e,{ipfsReady:!0,identity:a.identity,provider:a.provider,apiOts:a.apiOpts||e.apiOpts}):"IPFS_INIT_FAILED"===n?Object.assign({},e,{ipfsReady:!1,error:r}):e},getExtraArgs:()=>({getIpfs:function(){return ve.a._ipfs}}),selectIpfsReady:function(e){return e.ipfs.ipfsReady},selectIpfsIdentity:function(e){return e.ipfs.identity},doInitIpfs:function(){return function(){var e=Object(he.a)(de.a.mark((function e(t){var a,r,o,i,s,l,c,p,u,d,f,m;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.dispatch,r=t.getState,console.log("Looking for IPFS"),console.time("IPFS_INIT"),a({type:"IPFS_INIT_STARTED"}),o=null,i=null,ve.a.ipfs,s=Object.assign({},r().ipfs.apiOpts,Se("ipfsApi")),e.prev=8,console.time("IPFS_INIT_API"),e.next=12,Promise.all([n.e(0),n.e(1),n.e(7),n.e(11)]).then(n.t.bind(null,3301,7));case 12:return l=e.sent,c=l.default,console.log("Trying ipfs-http-client",s),console.info("\ud83c\udf9b\ufe0f Customise your js-ipfs-api opts by setting an `ipfsApi` value in localStorage. e.g. localStorage.setItem('ipfsApi', JSON.stringify({port: '1337'}))"),o=c(s),e.next=19,o.id();case 19:return i=e.sent,console.log("js-ipfs-api ready!"),ve.a._ipfs=o,console.timeEnd("IPFS_INIT_API"),console.timeEnd("IPFS_INIT"),e.abrupt("return",a({type:"IPFS_INIT_FINISHED",payload:{identity:i,provider:"js-ipfs-api",apiOpts:s}}));case 27:e.prev=27,e.t0=e.catch(8),console.log("No ipfs-api found",e.t0);case 30:return p=Se("ipfsOpts"),e.prev=31,console.time("IPFS_INIT_JS_IPFS"),console.log("Trying js-ipfs",p),console.info("\ud83c\udf9b\ufe0f Customise your js-ipfs opts by setting an `ipfsOpts` value in localStorage. e.g. localStorage.setItem('ipfsOpts', JSON.stringify({relay: {enabled: true}}))"),e.next=37,Promise.all([n.e(0),n.e(5),n.e(10)]).then(n.t.bind(null,3302,7));case 37:return u=e.sent,d=u.default,console.log("got Ipfs"),e.next=42,ye(d,p);case 42:return f=e.sent,console.log("got ipfs"),e.next=46,f.id();case 46:return i=e.sent,console.log("js-ipfs ready!"),ve.a._ipfs=f,console.timeEnd("IPFS_INIT_JS_IPFS"),console.timeEnd("IPFS_INIT"),e.abrupt("return",a({type:"IPFS_INIT_FINISHED",payload:{identity:i,provider:"js-ipfs"}}));case 54:if(e.prev=54,e.t1=e.catch(31),!e.t1.message||!e.t1.message.includes("subtle is undefined")){e.next=62;break}return console.warn("IPLD Explorer requires access to window.crypto, redirecting to canonical URL that is known to provide it in all browsers"),(m=new URL("https://explore.ipld.io/?x-ipfs-companion-no-redirect")).hash=window.location.hash,window.location.replace(m.toString()),e.abrupt("return");case 62:return console.log("Failed to initialise js-ipfs",e.t1),console.timeEnd("IPFS_INIT"),e.abrupt("return",a({type:"IPFS_INIT_FAILED",error:e.t1}));case 65:case"end":return e.stop()}}),e,null,[[8,27],[31,54]])})));return function(t){return e.apply(this,arguments)}}()}};function Se(e){var t={};if(ve.a.localStorage)try{var n=ve.a.localStorage.getItem(e)||"{}";t=JSON.parse(n)}catch(a){console.log("Error reading '".concat(e,"' value from localStorage"),a)}return t}function ye(e,t){return new Promise((function(n,a){var r=new e(t);r.once("ready",(function(){return n(r)})),r.once("error",(function(e){return a(e)}))}))}var Ee=Object(ge.c)({"/explore*":re.a,"/":re.c,"":re.c},{routeInfoSelector:"selectHash"}),Pe=Object(ge.a)(Object(re.d)(Object(he.a)(de.a.mark((function e(){var t,a,r,o,i,s;return de.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,3296,7)),Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,3297,7)),Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,2057,7)),Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,2068,7)),Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,3298,7)),Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,2075,7)),Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,3299,7)),Promise.all([n.e(0),n.e(1),n.e(6),n.e(2)]).then(n.t.bind(null,3300,7))]);case 2:return t=e.sent,a=t.map((function(e){return e.default})),r=Object(me.a)(a),o=r[0],i=r.slice(1),s=i.pop(),i.push.apply(i,Object(fe.a)(Object.values(s))),e.abrupt("return",{ipld:o,formats:i});case 7:case"end":return e.stop()}}),e)})))),Ee,we),Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("A new version of IPLD Explorer is available, please reload the page."),t.onUpdate&&t.onUpdate(e)):(console.log("IPLD Explorer is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}console.log("IPLD Explorer - v".concat("1.1.0"," - https://github.com/ipfs-shipyard/ipld-explorer")),i.a.render(r.a.createElement(s.a,{store:Pe()},r.a.createElement(l.a,{i18n:G},r.a.createElement(pe,{registerServiceWorker:function(e){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Oe?(!function(e,t){window.fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Ne(t,e)}))}}}))),document.getElementById("root"))}},[[215,4,8]]]);
//# sourceMappingURL=main.0ec8c202.chunk.js.map