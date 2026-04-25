function ue(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function pe(o){if(Object.prototype.hasOwnProperty.call(o,"__esModule"))return o;var f=o.default;if(typeof f=="function"){var p=function y(){return this instanceof y?Reflect.construct(f,arguments,this.constructor):f.apply(this,arguments)};p.prototype=f.prototype}else p={};return Object.defineProperty(p,"__esModule",{value:!0}),Object.keys(o).forEach(function(y){var _=Object.getOwnPropertyDescriptor(o,y);Object.defineProperty(p,y,_.get?_:{enumerable:!0,get:function(){return o[y]}})}),p}var D={exports:{}},M={},T={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K;function ae(){if(K)return r;K=1;var o=Symbol.for("react.element"),f=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),S=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.iterator;function C(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,F={};function b(e,t,n){this.props=e,this.context=t,this.refs=F,this.updater=n||E}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N(){}N.prototype=b.prototype;function P(e,t,n){this.props=e,this.context=t,this.refs=F,this.updater=n||E}var q=P.prototype=new N;q.constructor=P,H(q,b.prototype),q.isPureReactComponent=!0;var z=Array.isArray,U=Object.prototype.hasOwnProperty,A={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,n){var a,u={},c=null,l=null;if(t!=null)for(a in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(c=""+t.key),t)U.call(t,a)&&!B.hasOwnProperty(a)&&(u[a]=t[a]);var i=arguments.length-2;if(i===1)u.children=n;else if(1<i){for(var s=Array(i),m=0;m<i;m++)s[m]=arguments[m+2];u.children=s}if(e&&e.defaultProps)for(a in i=e.defaultProps,i)u[a]===void 0&&(u[a]=i[a]);return{$$typeof:o,type:e,key:c,ref:l,props:u,_owner:A.current}}function te(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function I(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function re(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var G=/\/+/g;function V(e,t){return typeof e=="object"&&e!==null&&e.key!=null?re(""+e.key):t.toString(36)}function O(e,t,n,a,u){var c=typeof e;(c==="undefined"||c==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case f:l=!0}}if(l)return l=e,u=u(l),e=a===""?"."+V(l,0):a,z(u)?(n="",e!=null&&(n=e.replace(G,"$&/")+"/"),O(u,t,n,"",function(m){return m})):u!=null&&(I(u)&&(u=te(u,n+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(G,"$&/")+"/")+e)),t.push(u)),1;if(l=0,a=a===""?".":a+":",z(e))for(var i=0;i<e.length;i++){c=e[i];var s=a+V(c,i);l+=O(c,t,n,s,u)}else if(s=C(e),typeof s=="function")for(e=s.call(e),i=0;!(c=e.next()).done;)c=c.value,s=a+V(c,i++),l+=O(c,t,n,s,u);else if(c==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $(e,t,n){if(e==null)return e;var a=[],u=0;return O(e,a,"","",function(c){return t.call(n,c,u++)}),a}function ne(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var d={current:null},L={transition:null},oe={ReactCurrentDispatcher:d,ReactCurrentBatchConfig:L,ReactCurrentOwner:A};function W(){throw Error("act(...) is not supported in production builds of React.")}return r.Children={map:$,forEach:function(e,t,n){$(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $(e,function(){t++}),t},toArray:function(e){return $(e,function(t){return t})||[]},only:function(e){if(!I(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=p,r.Profiler=_,r.PureComponent=P,r.StrictMode=y,r.Suspense=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,r.act=W,r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=H({},e.props),u=e.key,c=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(c=t.ref,l=A.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)U.call(t,s)&&!B.hasOwnProperty(s)&&(a[s]=t[s]===void 0&&i!==void 0?i[s]:t[s])}var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){i=Array(s);for(var m=0;m<s;m++)i[m]=arguments[m+2];a.children=i}return{$$typeof:o,type:e.type,key:u,ref:c,props:a,_owner:l}},r.createContext=function(e){return e={$$typeof:S,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:x,_context:e},e.Consumer=e},r.createElement=J,r.createFactory=function(e){var t=J.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:R,render:e}},r.isValidElement=I,r.lazy=function(e){return{$$typeof:k,_payload:{_status:-1,_result:e},_init:ne}},r.memo=function(e,t){return{$$typeof:g,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=L.transition;L.transition={};try{e()}finally{L.transition=t}},r.unstable_act=W,r.useCallback=function(e,t){return d.current.useCallback(e,t)},r.useContext=function(e){return d.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return d.current.useDeferredValue(e)},r.useEffect=function(e,t){return d.current.useEffect(e,t)},r.useId=function(){return d.current.useId()},r.useImperativeHandle=function(e,t,n){return d.current.useImperativeHandle(e,t,n)},r.useInsertionEffect=function(e,t){return d.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return d.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return d.current.useMemo(e,t)},r.useReducer=function(e,t,n){return d.current.useReducer(e,t,n)},r.useRef=function(e){return d.current.useRef(e)},r.useState=function(e){return d.current.useState(e)},r.useSyncExternalStore=function(e,t,n){return d.current.useSyncExternalStore(e,t,n)},r.useTransition=function(){return d.current.useTransition()},r.version="18.3.1",r}var Y;function Z(){return Y||(Y=1,T.exports=ae()),T.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function se(){if(Q)return M;Q=1;var o=Z(),f=Symbol.for("react.element"),p=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,_=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function S(R,v,g){var k,w={},C=null,E=null;g!==void 0&&(C=""+g),v.key!==void 0&&(C=""+v.key),v.ref!==void 0&&(E=v.ref);for(k in v)y.call(v,k)&&!x.hasOwnProperty(k)&&(w[k]=v[k]);if(R&&R.defaultProps)for(k in v=R.defaultProps,v)w[k]===void 0&&(w[k]=v[k]);return{$$typeof:f,type:R,key:C,ref:E,props:w,_owner:_.current}}return M.Fragment=p,M.jsx=S,M.jsxs=S,M}var X;function ce(){return X||(X=1,D.exports=se()),D.exports}var ye=ce(),j=Z();const de=ue(j);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ee=(...o)=>o.filter((f,p,y)=>!!f&&f.trim()!==""&&y.indexOf(f)===p).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var le={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=j.forwardRef(({color:o="currentColor",size:f=24,strokeWidth:p=2,absoluteStrokeWidth:y,className:_="",children:x,iconNode:S,...R},v)=>j.createElement("svg",{ref:v,...le,width:f,height:f,stroke:o,strokeWidth:y?Number(p)*24/Number(f):p,className:ee("lucide",_),...R},[...S.map(([g,k])=>j.createElement(g,k)),...Array.isArray(x)?x:[x]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(o,f)=>{const p=j.forwardRef(({className:y,..._},x)=>j.createElement(fe,{ref:x,iconNode:f,className:ee(`lucide-${ie(o)}`,y),..._}));return p.displayName=`${o}`,p};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=h("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=h("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=h("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=h("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=h("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=h("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=h("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=h("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=h("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=h("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=h("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=h("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=h("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=h("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=h("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);export{he as A,ve as C,me as D,_e as F,xe as G,Re as L,Se as P,be as R,Ee as S,Me as T,pe as a,j as b,we as c,ke as d,Ce as e,ge as f,ue as g,je as h,de as i,ye as j,Z as r};
