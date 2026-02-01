(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))A(j);new MutationObserver(j=>{for(const H of j)if(H.type==="childList")for(const te of H.addedNodes)te.tagName==="LINK"&&te.rel==="modulepreload"&&A(te)}).observe(document,{childList:!0,subtree:!0});function h(j){const H={};return j.integrity&&(H.integrity=j.integrity),j.referrerPolicy&&(H.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?H.credentials="include":j.crossOrigin==="anonymous"?H.credentials="omit":H.credentials="same-origin",H}function A(j){if(j.ep)return;j.ep=!0;const H=h(j);fetch(j.href,H)}})();var Co={exports:{}},vr={},bo={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cu;function jd(){if(Cu)return O;Cu=1;var T=Symbol.for("react.element"),_=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),te=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Q=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Y=Symbol.iterator;function J(c){return c===null||typeof c!="object"?null:(c=Y&&c[Y]||c["@@iterator"],typeof c=="function"?c:null)}var Se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ve=Object.assign,ie={};function X(c,g,D){this.props=c,this.context=g,this.refs=ie,this.updater=D||Se}X.prototype.isReactComponent={},X.prototype.setState=function(c,g){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,g,"setState")},X.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function gt(){}gt.prototype=X.prototype;function st(c,g,D){this.props=c,this.context=g,this.refs=ie,this.updater=D||Se}var Xe=st.prototype=new gt;Xe.constructor=st,Ve(Xe,X.prototype),Xe.isPureReactComponent=!0;var xe=Array.isArray,Ze=Object.prototype.hasOwnProperty,Pe={current:null},Me={key:!0,ref:!0,__self:!0,__source:!0};function Ge(c,g,D){var I,B={},V=null,Z=null;if(g!=null)for(I in g.ref!==void 0&&(Z=g.ref),g.key!==void 0&&(V=""+g.key),g)Ze.call(g,I)&&!Me.hasOwnProperty(I)&&(B[I]=g[I]);var q=arguments.length-2;if(q===1)B.children=D;else if(1<q){for(var le=Array(q),Ae=0;Ae<q;Ae++)le[Ae]=arguments[Ae+2];B.children=le}if(c&&c.defaultProps)for(I in q=c.defaultProps,q)B[I]===void 0&&(B[I]=q[I]);return{$$typeof:T,type:c,key:V,ref:Z,props:B,_owner:Pe.current}}function Pt(c,g){return{$$typeof:T,type:c.type,key:g,ref:c.ref,props:c.props,_owner:c._owner}}function yt(c){return typeof c=="object"&&c!==null&&c.$$typeof===T}function Qt(c){var g={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(D){return g[D]})}var ut=/\/+/g;function Ie(c,g){return typeof c=="object"&&c!==null&&c.key!=null?Qt(""+c.key):g.toString(36)}function et(c,g,D,I,B){var V=typeof c;(V==="undefined"||V==="boolean")&&(c=null);var Z=!1;if(c===null)Z=!0;else switch(V){case"string":case"number":Z=!0;break;case"object":switch(c.$$typeof){case T:case _:Z=!0}}if(Z)return Z=c,B=B(Z),c=I===""?"."+Ie(Z,0):I,xe(B)?(D="",c!=null&&(D=c.replace(ut,"$&/")+"/"),et(B,g,D,"",function(Ae){return Ae})):B!=null&&(yt(B)&&(B=Pt(B,D+(!B.key||Z&&Z.key===B.key?"":(""+B.key).replace(ut,"$&/")+"/")+c)),g.push(B)),1;if(Z=0,I=I===""?".":I+":",xe(c))for(var q=0;q<c.length;q++){V=c[q];var le=I+Ie(V,q);Z+=et(V,g,D,le,B)}else if(le=J(c),typeof le=="function")for(c=le.call(c),q=0;!(V=c.next()).done;)V=V.value,le=I+Ie(V,q++),Z+=et(V,g,D,le,B);else if(V==="object")throw g=String(c),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return Z}function ct(c,g,D){if(c==null)return c;var I=[],B=0;return et(c,I,"","",function(V){return g.call(D,V,B++)}),I}function _e(c){if(c._status===-1){var g=c._result;g=g(),g.then(function(D){(c._status===0||c._status===-1)&&(c._status=1,c._result=D)},function(D){(c._status===0||c._status===-1)&&(c._status=2,c._result=D)}),c._status===-1&&(c._status=0,c._result=g)}if(c._status===1)return c._result.default;throw c._result}var ue={current:null},S={transition:null},z={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:S,ReactCurrentOwner:Pe};function C(){throw Error("act(...) is not supported in production builds of React.")}return O.Children={map:ct,forEach:function(c,g,D){ct(c,function(){g.apply(this,arguments)},D)},count:function(c){var g=0;return ct(c,function(){g++}),g},toArray:function(c){return ct(c,function(g){return g})||[]},only:function(c){if(!yt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}},O.Component=X,O.Fragment=h,O.Profiler=j,O.PureComponent=st,O.StrictMode=A,O.Suspense=W,O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,O.act=C,O.cloneElement=function(c,g,D){if(c==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+c+".");var I=Ve({},c.props),B=c.key,V=c.ref,Z=c._owner;if(g!=null){if(g.ref!==void 0&&(V=g.ref,Z=Pe.current),g.key!==void 0&&(B=""+g.key),c.type&&c.type.defaultProps)var q=c.type.defaultProps;for(le in g)Ze.call(g,le)&&!Me.hasOwnProperty(le)&&(I[le]=g[le]===void 0&&q!==void 0?q[le]:g[le])}var le=arguments.length-2;if(le===1)I.children=D;else if(1<le){q=Array(le);for(var Ae=0;Ae<le;Ae++)q[Ae]=arguments[Ae+2];I.children=q}return{$$typeof:T,type:c.type,key:B,ref:V,props:I,_owner:Z}},O.createContext=function(c){return c={$$typeof:te,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},c.Provider={$$typeof:H,_context:c},c.Consumer=c},O.createElement=Ge,O.createFactory=function(c){var g=Ge.bind(null,c);return g.type=c,g},O.createRef=function(){return{current:null}},O.forwardRef=function(c){return{$$typeof:$,render:c}},O.isValidElement=yt,O.lazy=function(c){return{$$typeof:U,_payload:{_status:-1,_result:c},_init:_e}},O.memo=function(c,g){return{$$typeof:Q,type:c,compare:g===void 0?null:g}},O.startTransition=function(c){var g=S.transition;S.transition={};try{c()}finally{S.transition=g}},O.unstable_act=C,O.useCallback=function(c,g){return ue.current.useCallback(c,g)},O.useContext=function(c){return ue.current.useContext(c)},O.useDebugValue=function(){},O.useDeferredValue=function(c){return ue.current.useDeferredValue(c)},O.useEffect=function(c,g){return ue.current.useEffect(c,g)},O.useId=function(){return ue.current.useId()},O.useImperativeHandle=function(c,g,D){return ue.current.useImperativeHandle(c,g,D)},O.useInsertionEffect=function(c,g){return ue.current.useInsertionEffect(c,g)},O.useLayoutEffect=function(c,g){return ue.current.useLayoutEffect(c,g)},O.useMemo=function(c,g){return ue.current.useMemo(c,g)},O.useReducer=function(c,g,D){return ue.current.useReducer(c,g,D)},O.useRef=function(c){return ue.current.useRef(c)},O.useState=function(c){return ue.current.useState(c)},O.useSyncExternalStore=function(c,g,D){return ue.current.useSyncExternalStore(c,g,D)},O.useTransition=function(){return ue.current.useTransition()},O.version="18.3.1",O}var bu;function Mo(){return bu||(bu=1,bo.exports=jd()),bo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Dd(){if(Pu)return vr;Pu=1;var T=Mo(),_=Symbol.for("react.element"),h=Symbol.for("react.fragment"),A=Object.prototype.hasOwnProperty,j=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H={key:!0,ref:!0,__self:!0,__source:!0};function te($,W,Q){var U,Y={},J=null,Se=null;Q!==void 0&&(J=""+Q),W.key!==void 0&&(J=""+W.key),W.ref!==void 0&&(Se=W.ref);for(U in W)A.call(W,U)&&!H.hasOwnProperty(U)&&(Y[U]=W[U]);if($&&$.defaultProps)for(U in W=$.defaultProps,W)Y[U]===void 0&&(Y[U]=W[U]);return{$$typeof:_,type:$,key:J,ref:Se,props:Y,_owner:j.current}}return vr.Fragment=h,vr.jsx=te,vr.jsxs=te,vr}var Lu;function Od(){return Lu||(Lu=1,Co.exports=Dd()),Co.exports}var k=Od(),Mi={},Po={exports:{}},He={},Lo={exports:{}},No={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function Hd(){return Nu||(Nu=1,(function(T){function _(S,z){var C=S.length;S.push(z);e:for(;0<C;){var c=C-1>>>1,g=S[c];if(0<j(g,z))S[c]=z,S[C]=g,C=c;else break e}}function h(S){return S.length===0?null:S[0]}function A(S){if(S.length===0)return null;var z=S[0],C=S.pop();if(C!==z){S[0]=C;e:for(var c=0,g=S.length,D=g>>>1;c<D;){var I=2*(c+1)-1,B=S[I],V=I+1,Z=S[V];if(0>j(B,C))V<g&&0>j(Z,B)?(S[c]=Z,S[V]=C,c=V):(S[c]=B,S[I]=C,c=I);else if(V<g&&0>j(Z,C))S[c]=Z,S[V]=C,c=V;else break e}}return z}function j(S,z){var C=S.sortIndex-z.sortIndex;return C!==0?C:S.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var H=performance;T.unstable_now=function(){return H.now()}}else{var te=Date,$=te.now();T.unstable_now=function(){return te.now()-$}}var W=[],Q=[],U=1,Y=null,J=3,Se=!1,Ve=!1,ie=!1,X=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,st=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Xe(S){for(var z=h(Q);z!==null;){if(z.callback===null)A(Q);else if(z.startTime<=S)A(Q),z.sortIndex=z.expirationTime,_(W,z);else break;z=h(Q)}}function xe(S){if(ie=!1,Xe(S),!Ve)if(h(W)!==null)Ve=!0,_e(Ze);else{var z=h(Q);z!==null&&ue(xe,z.startTime-S)}}function Ze(S,z){Ve=!1,ie&&(ie=!1,gt(Ge),Ge=-1),Se=!0;var C=J;try{for(Xe(z),Y=h(W);Y!==null&&(!(Y.expirationTime>z)||S&&!Qt());){var c=Y.callback;if(typeof c=="function"){Y.callback=null,J=Y.priorityLevel;var g=c(Y.expirationTime<=z);z=T.unstable_now(),typeof g=="function"?Y.callback=g:Y===h(W)&&A(W),Xe(z)}else A(W);Y=h(W)}if(Y!==null)var D=!0;else{var I=h(Q);I!==null&&ue(xe,I.startTime-z),D=!1}return D}finally{Y=null,J=C,Se=!1}}var Pe=!1,Me=null,Ge=-1,Pt=5,yt=-1;function Qt(){return!(T.unstable_now()-yt<Pt)}function ut(){if(Me!==null){var S=T.unstable_now();yt=S;var z=!0;try{z=Me(!0,S)}finally{z?Ie():(Pe=!1,Me=null)}}else Pe=!1}var Ie;if(typeof st=="function")Ie=function(){st(ut)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ct=et.port2;et.port1.onmessage=ut,Ie=function(){ct.postMessage(null)}}else Ie=function(){X(ut,0)};function _e(S){Me=S,Pe||(Pe=!0,Ie())}function ue(S,z){Ge=X(function(){S(T.unstable_now())},z)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(S){S.callback=null},T.unstable_continueExecution=function(){Ve||Se||(Ve=!0,_e(Ze))},T.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<S?Math.floor(1e3/S):5},T.unstable_getCurrentPriorityLevel=function(){return J},T.unstable_getFirstCallbackNode=function(){return h(W)},T.unstable_next=function(S){switch(J){case 1:case 2:case 3:var z=3;break;default:z=J}var C=J;J=z;try{return S()}finally{J=C}},T.unstable_pauseExecution=function(){},T.unstable_requestPaint=function(){},T.unstable_runWithPriority=function(S,z){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=J;J=S;try{return z()}finally{J=C}},T.unstable_scheduleCallback=function(S,z,C){var c=T.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?c+C:c):C=c,S){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=C+g,S={id:U++,callback:z,priorityLevel:S,startTime:C,expirationTime:g,sortIndex:-1},C>c?(S.sortIndex=C,_(Q,S),h(W)===null&&S===h(Q)&&(ie?(gt(Ge),Ge=-1):ie=!0,ue(xe,C-c))):(S.sortIndex=g,_(W,S),Ve||Se||(Ve=!0,_e(Ze))),S},T.unstable_shouldYield=Qt,T.unstable_wrapCallback=function(S){var z=J;return function(){var C=J;J=z;try{return S.apply(this,arguments)}finally{J=C}}}})(No)),No}var Mu;function Id(){return Mu||(Mu=1,Lo.exports=Hd()),Lo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u;function Ad(){if(_u)return He;_u=1;var T=Mo(),_=Id();function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A=new Set,j={};function H(e,t){te(e,t),te(e+"Capture",t)}function te(e,t){for(j[e]=t,e=0;e<t.length;e++)A.add(t[e])}var $=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),W=Object.prototype.hasOwnProperty,Q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,U={},Y={};function J(e){return W.call(Y,e)?!0:W.call(U,e)?!1:Q.test(e)?Y[e]=!0:(U[e]=!0,!1)}function Se(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ve(e,t,n,r){if(t===null||typeof t>"u"||Se(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new ie(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];X[t]=new ie(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new ie(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new ie(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new ie(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new ie(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var gt=/[\-:]([a-z])/g;function st(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gt,st);X[t]=new ie(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gt,st);X[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gt,st);X[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xe(e,t,n,r){var i=X.hasOwnProperty(t)?X[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ve(t,n,i,r)&&(n=null),r||i===null?J(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xe=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ze=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Ge=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),yt=Symbol.for("react.provider"),Qt=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),S=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var C=Object.assign,c;function g(e){if(c===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);c=t&&t[1]||""}return`
`+c+e}var D=!1;function I(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{D=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function B(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=I(e.type,!1),e;case 11:return e=I(e.type.render,!1),e;case 1:return e=I(e.type,!0),e;default:return""}}function V(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case Pe:return"Portal";case Pt:return"Profiler";case Ge:return"StrictMode";case Ie:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qt:return(e.displayName||"Context")+".Consumer";case yt:return(e._context.displayName||"Context")+".Provider";case ut:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ct:return t=e.displayName||null,t!==null?t:V(e.type)||"Memo";case _e:t=e._payload,e=e._init;try{return V(e(t))}catch{}}return null}function Z(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===Ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function q(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function le(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ae(e){var t=le(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Ae(e))}function _o(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=le(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,t){var n=t.checked;return C({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=q(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ro(e,t){t=t.checked,t!=null&&Xe(e,"checked",t,!1)}function zi(e,t){Ro(e,t);var n=q(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ri(e,t.type,q(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ri(e,t,n){(t!=="number"||Sr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+q(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(h(91));return C({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Do(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(h(92));if(Rn(n)){if(1<n.length)throw Error(h(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:q(n)}}function Oo(e,t){var n=q(t.value),r=q(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ho(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Io(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Ao=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Iu=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Iu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function Fo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function Wo(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Au=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,t){if(t){if(Au[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(h(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(h(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(h(61))}if(t.style!=null&&typeof t.style!="object")throw Error(h(62))}}function Hi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function Ai(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,un=null,cn=null;function Uo(e){if(e=rr(e)){if(typeof Fi!="function")throw Error(h(280));var t=e.stateNode;t&&(t=Gr(t),Fi(e.stateNode,e.type,t))}}function Bo(e){un?cn?cn.push(e):cn=[e]:un=e}function Vo(){if(un){var e=un,t=cn;if(cn=un=null,Uo(e),t)for(e=0;e<t.length;e++)Uo(t[e])}}function Go(e,t){return e(t)}function $o(){}var Wi=!1;function Qo(e,t,n){if(Wi)return e(t,n);Wi=!0;try{return Go(e,t,n)}finally{Wi=!1,(un!==null||cn!==null)&&($o(),Vo())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=Gr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var Ui=!1;if($)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Ui=!1}function Fu(e,t,n,r,i,l,o,a,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var In=!1,Tr=null,Er=!1,Bi=null,Wu={onError:function(e){In=!0,Tr=e}};function Uu(e,t,n,r,i,l,o,a,s){In=!1,Tr=null,Fu.apply(Wu,arguments)}function Bu(e,t,n,r,i,l,o,a,s){if(Uu.apply(this,arguments),In){if(In){var p=Tr;In=!1,Tr=null}else throw Error(h(198));Er||(Er=!0,Bi=p)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Yo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jo(e){if(Yt(e)!==e)throw Error(h(188))}function Vu(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Jo(i),e;if(l===r)return Jo(i),t;l=l.sibling}throw Error(h(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(h(189))}}if(n.alternate!==r)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function qo(e){return e=Vu(e),e!==null?Ko(e):null}function Ko(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ko(e);if(t!==null)return t;e=e.sibling}return null}var Xo=_.unstable_scheduleCallback,Zo=_.unstable_cancelCallback,Gu=_.unstable_shouldYield,$u=_.unstable_requestPaint,de=_.unstable_now,Qu=_.unstable_getCurrentPriorityLevel,Vi=_.unstable_ImmediatePriority,ea=_.unstable_UserBlockingPriority,Cr=_.unstable_NormalPriority,Yu=_.unstable_LowPriority,ta=_.unstable_IdlePriority,br=null,dt=null;function Ju(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Xu,qu=Math.log,Ku=Math.LN2;function Xu(e){return e>>>=0,e===0?32:31-(qu(e)/Ku|0)|0}var Pr=64,Lr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=An(a):(l&=o,l!==0&&(r=An(l)))}else o=n&~i,o!==0?r=An(o):l!==0&&(r=An(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),i=1<<n,r|=e[n],t&=~i;return r}function Zu(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ec(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-tt(l),a=1<<o,s=i[o];s===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Zu(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function na(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function $i(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function tc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-tt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var K=0;function ra(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ia,Yi,la,oa,aa,Ji=!1,Mr=[],Lt=null,Nt=null,Mt=null,Wn=new Map,Un=new Map,_t=[],nc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sa(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function Bn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=rr(t),t!==null&&Yi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rc(e,t,n,r,i){switch(t){case"focusin":return Lt=Bn(Lt,e,t,n,r,i),!0;case"dragenter":return Nt=Bn(Nt,e,t,n,r,i),!0;case"mouseover":return Mt=Bn(Mt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Wn.set(l,Bn(Wn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Un.set(l,Bn(Un.get(l)||null,e,t,n,r,i)),!0}return!1}function ua(e){var t=Jt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Yo(n),t!==null){e.blockedOn=t,aa(e.priority,function(){la(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ii=r,n.target.dispatchEvent(r),Ii=null}else return t=rr(n),t!==null&&Yi(t),e.blockedOn=n,!1;t.shift()}return!0}function ca(e,t,n){_r(e)&&n.delete(t)}function ic(){Ji=!1,Lt!==null&&_r(Lt)&&(Lt=null),Nt!==null&&_r(Nt)&&(Nt=null),Mt!==null&&_r(Mt)&&(Mt=null),Wn.forEach(ca),Un.forEach(ca)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ji||(Ji=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,ic)))}function Gn(e){function t(i){return Vn(i,e)}if(0<Mr.length){Vn(Mr[0],e);for(var n=1;n<Mr.length;n++){var r=Mr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&Vn(Lt,e),Nt!==null&&Vn(Nt,e),Mt!==null&&Vn(Mt,e),Wn.forEach(t),Un.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)ua(n),n.blockedOn===null&&_t.shift()}var dn=xe.ReactCurrentBatchConfig,zr=!0;function lc(e,t,n,r){var i=K,l=dn.transition;dn.transition=null;try{K=1,qi(e,t,n,r)}finally{K=i,dn.transition=l}}function oc(e,t,n,r){var i=K,l=dn.transition;dn.transition=null;try{K=4,qi(e,t,n,r)}finally{K=i,dn.transition=l}}function qi(e,t,n,r){if(zr){var i=Ki(e,t,n,r);if(i===null)hl(e,t,r,Rr,n),sa(e,r);else if(rc(i,e,t,n,r))r.stopPropagation();else if(sa(e,r),t&4&&-1<nc.indexOf(e)){for(;i!==null;){var l=rr(i);if(l!==null&&ia(l),l=Ki(e,t,n,r),l===null&&hl(e,t,r,Rr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Rr=null;function Ki(e,t,n,r){if(Rr=null,e=Ai(r),e=Jt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Yo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rr=e,null}function da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qu()){case Vi:return 1;case ea:return 4;case Cr:case Yu:return 16;case ta:return 536870912;default:return 16}default:return 16}}var zt=null,Xi=null,jr=null;function fa(){if(jr)return jr;var e,t=Xi,n=t.length,r,i="value"in zt?zt.value:zt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return jr=i.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function pa(){return!1}function Fe(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Or:pa,this.isPropagationStopped=pa,this}return C(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=Fe(fn),$n=C({},fn,{view:0,detail:0}),ac=Fe($n),el,tl,Qn,Hr=C({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qn&&(Qn&&e.type==="mousemove"?(el=e.screenX-Qn.screenX,tl=e.screenY-Qn.screenY):tl=el=0,Qn=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),ha=Fe(Hr),sc=C({},Hr,{dataTransfer:0}),uc=Fe(sc),cc=C({},$n,{relatedTarget:0}),nl=Fe(cc),dc=C({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),fc=Fe(dc),pc=C({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hc=Fe(pc),mc=C({},fn,{data:0}),ma=Fe(mc),gc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vc[e])?!!t[e]:!1}function rl(){return wc}var kc=C({},$n,{key:function(e){if(e.key){var t=gc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sc=Fe(kc),xc=C({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=Fe(xc),Tc=C({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Ec=Fe(Tc),Cc=C({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bc=Fe(Cc),Pc=C({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lc=Fe(Pc),Nc=[9,13,27,32],il=$&&"CompositionEvent"in window,Yn=null;$&&"documentMode"in document&&(Yn=document.documentMode);var Mc=$&&"TextEvent"in window&&!Yn,ya=$&&(!il||Yn&&8<Yn&&11>=Yn),va=" ",wa=!1;function ka(e,t){switch(e){case"keyup":return Nc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pn=!1;function _c(e,t){switch(e){case"compositionend":return Sa(t);case"keypress":return t.which!==32?null:(wa=!0,va);case"textInput":return e=t.data,e===va&&wa?null:e;default:return null}}function zc(e,t){if(pn)return e==="compositionend"||!il&&ka(e,t)?(e=fa(),jr=Xi=zt=null,pn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ya&&t.locale!=="ko"?null:t.data;default:return null}}var Rc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Rc[e.type]:t==="textarea"}function Ta(e,t,n,r){Bo(r),t=Ur(t,"onChange"),0<t.length&&(n=new Zi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jn=null,qn=null;function jc(e){Wa(e,0)}function Ir(e){var t=vn(e);if(_o(t))return e}function Dc(e,t){if(e==="change")return t}var Ea=!1;if($){var ll;if($){var ol="oninput"in document;if(!ol){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),ol=typeof Ca.oninput=="function"}ll=ol}else ll=!1;Ea=ll&&(!document.documentMode||9<document.documentMode)}function ba(){Jn&&(Jn.detachEvent("onpropertychange",Pa),qn=Jn=null)}function Pa(e){if(e.propertyName==="value"&&Ir(qn)){var t=[];Ta(t,qn,e,Ai(e)),Qo(jc,t)}}function Oc(e,t,n){e==="focusin"?(ba(),Jn=t,qn=n,Jn.attachEvent("onpropertychange",Pa)):e==="focusout"&&ba()}function Hc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ir(qn)}function Ic(e,t){if(e==="click")return Ir(t)}function Ac(e,t){if(e==="input"||e==="change")return Ir(t)}function Fc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Fc;function Kn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!W.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Na(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function Ma(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ma(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _a(){for(var e=window,t=Sr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sr(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wc(e){var t=_a(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ma(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Na(n,l);var o=Na(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Uc=$&&"documentMode"in document&&11>=document.documentMode,hn=null,sl=null,Xn=null,ul=!1;function za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ul||hn==null||hn!==Sr(r)||(r=hn,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xn&&Kn(Xn,r)||(Xn=r,r=Ur(sl,"onSelect"),0<r.length&&(t=new Zi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},cl={},Ra={};$&&(Ra=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Fr(e){if(cl[e])return cl[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ra)return cl[e]=t[n];return e}var ja=Fr("animationend"),Da=Fr("animationiteration"),Oa=Fr("animationstart"),Ha=Fr("transitionend"),Ia=new Map,Aa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rt(e,t){Ia.set(e,t),H(t,[e])}for(var dl=0;dl<Aa.length;dl++){var fl=Aa[dl],Bc=fl.toLowerCase(),Vc=fl[0].toUpperCase()+fl.slice(1);Rt(Bc,"on"+Vc)}Rt(ja,"onAnimationEnd"),Rt(Da,"onAnimationIteration"),Rt(Oa,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(Ha,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),H("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),H("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),H("onBeforeInput",["compositionend","keypress","textInput","paste"]),H("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),H("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),H("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));function Fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bu(r,t,void 0,e),e.currentTarget=null}function Wa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,p=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;Fa(i,a,p),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,p=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;Fa(i,a,p),l=s}}}if(Er)throw e=Bi,Er=!1,Bi=null,e}function ne(e,t){var n=t[kl];n===void 0&&(n=t[kl]=new Set);var r=e+"__bubble";n.has(r)||(Ua(t,e,2,!1),n.add(r))}function pl(e,t,n){var r=0;t&&(r|=4),Ua(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Wr]){e[Wr]=!0,A.forEach(function(n){n!=="selectionchange"&&(Gc.has(n)||pl(n,!1,e),pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,pl("selectionchange",!1,t))}}function Ua(e,t,n,r){switch(da(t)){case 1:var i=lc;break;case 4:i=oc;break;default:i=qi}n=i.bind(null,t,n,e),i=void 0,!Ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Jt(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Qo(function(){var p=l,y=Ai(n),v=[];e:{var m=Ia.get(e);if(m!==void 0){var x=Zi,b=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":x=Sc;break;case"focusin":b="focus",x=nl;break;case"focusout":b="blur",x=nl;break;case"beforeblur":case"afterblur":x=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ec;break;case ja:case Da:case Oa:x=fc;break;case Ha:x=bc;break;case"scroll":x=ac;break;case"wheel":x=Lc;break;case"copy":case"cut":case"paste":x=hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ga}var P=(t&4)!==0,fe=!P&&e==="scroll",d=P?m!==null?m+"Capture":null:m;P=[];for(var u=p,f;u!==null;){f=u;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=On(u,d),w!=null&&P.push(tr(u,w,f)))),fe)break;u=u.return}0<P.length&&(m=new x(m,b,null,n,y),v.push({event:m,listeners:P}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Ii&&(b=n.relatedTarget||n.fromElement)&&(Jt(b)||b[vt]))break e;if((x||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,x?(b=n.relatedTarget||n.toElement,x=p,b=b?Jt(b):null,b!==null&&(fe=Yt(b),b!==fe||b.tag!==5&&b.tag!==6)&&(b=null)):(x=null,b=p),x!==b)){if(P=ha,w="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(P=ga,w="onPointerLeave",d="onPointerEnter",u="pointer"),fe=x==null?m:vn(x),f=b==null?m:vn(b),m=new P(w,u+"leave",x,n,y),m.target=fe,m.relatedTarget=f,w=null,Jt(y)===p&&(P=new P(d,u+"enter",b,n,y),P.target=f,P.relatedTarget=fe,w=P),fe=w,x&&b)t:{for(P=x,d=b,u=0,f=P;f;f=gn(f))u++;for(f=0,w=d;w;w=gn(w))f++;for(;0<u-f;)P=gn(P),u--;for(;0<f-u;)d=gn(d),f--;for(;u--;){if(P===d||d!==null&&P===d.alternate)break t;P=gn(P),d=gn(d)}P=null}else P=null;x!==null&&Ba(v,m,x,P,!1),b!==null&&fe!==null&&Ba(v,fe,b,P,!0)}}e:{if(m=p?vn(p):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var L=Dc;else if(xa(m))if(Ea)L=Ac;else{L=Hc;var N=Oc}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=Ic);if(L&&(L=L(e,p))){Ta(v,L,n,y);break e}N&&N(e,m,p),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Ri(m,"number",m.value)}switch(N=p?vn(p):window,e){case"focusin":(xa(N)||N.contentEditable==="true")&&(hn=N,sl=p,Xn=null);break;case"focusout":Xn=sl=hn=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,za(v,n,y);break;case"selectionchange":if(Uc)break;case"keydown":case"keyup":za(v,n,y)}var M;if(il)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else pn?ka(e,n)&&(R="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ya&&n.locale!=="ko"&&(pn||R!=="onCompositionStart"?R==="onCompositionEnd"&&pn&&(M=fa()):(zt=y,Xi="value"in zt?zt.value:zt.textContent,pn=!0)),N=Ur(p,R),0<N.length&&(R=new ma(R,e,null,n,y),v.push({event:R,listeners:N}),M?R.data=M:(M=Sa(n),M!==null&&(R.data=M)))),(M=Mc?_c(e,n):zc(e,n))&&(p=Ur(p,"onBeforeInput"),0<p.length&&(y=new ma("onBeforeInput","beforeinput",null,n,y),v.push({event:y,listeners:p}),y.data=M))}Wa(v,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=On(e,n),l!=null&&r.unshift(tr(e,l,i)),l=On(e,t),l!=null&&r.push(tr(e,l,i))),e=e.return}return r}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ba(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,p=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&p!==null&&(a=p,i?(s=On(n,l),s!=null&&o.unshift(tr(n,s,a))):i||(s=On(n,l),s!=null&&o.push(tr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $c=/\r\n?/g,Qc=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace($c,`
`).replace(Qc,"")}function Br(e,t,n){if(t=Va(t),Va(e)!==t&&n)throw Error(h(425))}function Vr(){}var ml=null,gl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,Yc=typeof clearTimeout=="function"?clearTimeout:void 0,Ga=typeof Promise=="function"?Promise:void 0,Jc=typeof queueMicrotask=="function"?queueMicrotask:typeof Ga<"u"?function(e){return Ga.resolve(null).then(e).catch(qc)}:vl;function qc(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gn(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),ft="__reactFiber$"+yn,nr="__reactProps$"+yn,vt="__reactContainer$"+yn,kl="__reactEvents$"+yn,Kc="__reactListeners$"+yn,Xc="__reactHandles$"+yn;function Jt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$a(e);e!==null;){if(n=e[ft])return n;e=$a(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[ft]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(h(33))}function Gr(e){return e[nr]||null}var Sl=[],wn=-1;function Dt(e){return{current:e}}function re(e){0>wn||(e.current=Sl[wn],Sl[wn]=null,wn--)}function ee(e,t){wn++,Sl[wn]=e.current,e.current=t}var Ot={},Te=Dt(Ot),ze=Dt(!1),qt=Ot;function kn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Re(e){return e=e.childContextTypes,e!=null}function $r(){re(ze),re(Te)}function Qa(e,t,n){if(Te.current!==Ot)throw Error(h(168));ee(Te,t),ee(ze,n)}function Ya(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(h(108,Z(e)||"Unknown",i));return C({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,qt=Te.current,ee(Te,e),ee(ze,ze.current),!0}function Ja(e,t,n){var r=e.stateNode;if(!r)throw Error(h(169));n?(e=Ya(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,re(ze),re(Te),ee(Te,e)):re(ze),ee(ze,n)}var wt=null,Yr=!1,xl=!1;function qa(e){wt===null?wt=[e]:wt.push(e)}function Zc(e){Yr=!0,qa(e)}function Ht(){if(!xl&&wt!==null){xl=!0;var e=0,t=K;try{var n=wt;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Yr=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),Xo(Vi,Ht),i}finally{K=t,xl=!1}}return null}var Sn=[],xn=0,Jr=null,qr=0,$e=[],Qe=0,Kt=null,kt=1,St="";function Xt(e,t){Sn[xn++]=qr,Sn[xn++]=Jr,Jr=e,qr=t}function Ka(e,t,n){$e[Qe++]=kt,$e[Qe++]=St,$e[Qe++]=Kt,Kt=e;var r=kt;e=St;var i=32-tt(r)-1;r&=~(1<<i),n+=1;var l=32-tt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-tt(t)+i|n<<i|r,St=l+e}else kt=1<<l|n<<i|r,St=e}function Tl(e){e.return!==null&&(Xt(e,1),Ka(e,1,0))}function El(e){for(;e===Jr;)Jr=Sn[--xn],Sn[xn]=null,qr=Sn[--xn],Sn[xn]=null;for(;e===Kt;)Kt=$e[--Qe],$e[Qe]=null,St=$e[--Qe],$e[Qe]=null,kt=$e[--Qe],$e[Qe]=null}var We=null,Ue=null,oe=!1,rt=null;function Xa(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ue=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kt!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ue=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(oe){var t=Ue;if(t){var n=t;if(!Za(e,t)){if(Cl(e))throw Error(h(418));t=jt(n.nextSibling);var r=We;t&&Za(e,t)?Xa(r,n):(e.flags=e.flags&-4097|2,oe=!1,We=e)}}else{if(Cl(e))throw Error(h(418));e.flags=e.flags&-4097|2,oe=!1,We=e}}}function es(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function Kr(e){if(e!==We)return!1;if(!oe)return es(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Ue)){if(Cl(e))throw ts(),Error(h(418));for(;t;)Xa(e,t),t=jt(t.nextSibling)}if(es(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=We?jt(e.stateNode.nextSibling):null;return!0}function ts(){for(var e=Ue;e;)e=jt(e.nextSibling)}function Tn(){Ue=We=null,oe=!1}function Pl(e){rt===null?rt=[e]:rt.push(e)}var ed=xe.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(h(309));var r=n.stateNode}if(!r)throw Error(h(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(h(284));if(!n._owner)throw Error(h(290,e))}return e}function Xr(e,t){throw e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function rs(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function i(d,u){return d=Gt(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=2,u):f):(d.flags|=2,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,u,f,w){return u===null||u.tag!==6?(u=wo(f,d.mode,w),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,w){var L=f.type;return L===Me?y(d,u,f.props.children,w,f.key):u!==null&&(u.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===_e&&ns(L)===u.type)?(w=i(u,f.props),w.ref=ir(d,u,f),w.return=d,w):(w=xi(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,u,f),w.return=d,w)}function p(d,u,f,w){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=ko(f,d.mode,w),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function y(d,u,f,w,L){return u===null||u.tag!==7?(u=an(f,d.mode,w,L),u.return=d,u):(u=i(u,f),u.return=d,u)}function v(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number")return u=wo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ze:return f=xi(u.type,u.key,u.props,null,d.mode,f),f.ref=ir(d,null,u),f.return=d,f;case Pe:return u=ko(u,d.mode,f),u.return=d,u;case _e:var w=u._init;return v(d,w(u._payload),f)}if(Rn(u)||z(u))return u=an(u,d.mode,f,null),u.return=d,u;Xr(d,u)}return null}function m(d,u,f,w){var L=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return L!==null?null:a(d,u,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:return f.key===L?s(d,u,f,w):null;case Pe:return f.key===L?p(d,u,f,w):null;case _e:return L=f._init,m(d,u,L(f._payload),w)}if(Rn(f)||z(f))return L!==null?null:y(d,u,f,w,null);Xr(d,f)}return null}function x(d,u,f,w,L){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,a(u,d,""+w,L);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ze:return d=d.get(w.key===null?f:w.key)||null,s(u,d,w,L);case Pe:return d=d.get(w.key===null?f:w.key)||null,p(u,d,w,L);case _e:var N=w._init;return x(d,u,f,N(w._payload),L)}if(Rn(w)||z(w))return d=d.get(f)||null,y(u,d,w,L,null);Xr(u,w)}return null}function b(d,u,f,w){for(var L=null,N=null,M=u,R=u=0,ve=null;M!==null&&R<f.length;R++){M.index>R?(ve=M,M=null):ve=M.sibling;var G=m(d,M,f[R],w);if(G===null){M===null&&(M=ve);break}e&&M&&G.alternate===null&&t(d,M),u=l(G,u,R),N===null?L=G:N.sibling=G,N=G,M=ve}if(R===f.length)return n(d,M),oe&&Xt(d,R),L;if(M===null){for(;R<f.length;R++)M=v(d,f[R],w),M!==null&&(u=l(M,u,R),N===null?L=M:N.sibling=M,N=M);return oe&&Xt(d,R),L}for(M=r(d,M);R<f.length;R++)ve=x(M,d,R,f[R],w),ve!==null&&(e&&ve.alternate!==null&&M.delete(ve.key===null?R:ve.key),u=l(ve,u,R),N===null?L=ve:N.sibling=ve,N=ve);return e&&M.forEach(function($t){return t(d,$t)}),oe&&Xt(d,R),L}function P(d,u,f,w){var L=z(f);if(typeof L!="function")throw Error(h(150));if(f=L.call(f),f==null)throw Error(h(151));for(var N=L=null,M=u,R=u=0,ve=null,G=f.next();M!==null&&!G.done;R++,G=f.next()){M.index>R?(ve=M,M=null):ve=M.sibling;var $t=m(d,M,G.value,w);if($t===null){M===null&&(M=ve);break}e&&M&&$t.alternate===null&&t(d,M),u=l($t,u,R),N===null?L=$t:N.sibling=$t,N=$t,M=ve}if(G.done)return n(d,M),oe&&Xt(d,R),L;if(M===null){for(;!G.done;R++,G=f.next())G=v(d,G.value,w),G!==null&&(u=l(G,u,R),N===null?L=G:N.sibling=G,N=G);return oe&&Xt(d,R),L}for(M=r(d,M);!G.done;R++,G=f.next())G=x(M,d,R,G.value,w),G!==null&&(e&&G.alternate!==null&&M.delete(G.key===null?R:G.key),u=l(G,u,R),N===null?L=G:N.sibling=G,N=G);return e&&M.forEach(function(Rd){return t(d,Rd)}),oe&&Xt(d,R),L}function fe(d,u,f,w){if(typeof f=="object"&&f!==null&&f.type===Me&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ze:e:{for(var L=f.key,N=u;N!==null;){if(N.key===L){if(L=f.type,L===Me){if(N.tag===7){n(d,N.sibling),u=i(N,f.props.children),u.return=d,d=u;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===_e&&ns(L)===N.type){n(d,N.sibling),u=i(N,f.props),u.ref=ir(d,N,f),u.return=d,d=u;break e}n(d,N);break}else t(d,N);N=N.sibling}f.type===Me?(u=an(f.props.children,d.mode,w,f.key),u.return=d,d=u):(w=xi(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,u,f),w.return=d,d=w)}return o(d);case Pe:e:{for(N=f.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){n(d,u.sibling),u=i(u,f.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=ko(f,d.mode,w),u.return=d,d=u}return o(d);case _e:return N=f._init,fe(d,u,N(f._payload),w)}if(Rn(f))return b(d,u,f,w);if(z(f))return P(d,u,f,w);Xr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,u!==null&&u.tag===6?(n(d,u.sibling),u=i(u,f),u.return=d,d=u):(n(d,u),u=wo(f,d.mode,w),u.return=d,d=u),o(d)):n(d,u)}return fe}var En=rs(!0),is=rs(!1),Zr=Dt(null),ei=null,Cn=null,Ll=null;function Nl(){Ll=Cn=ei=null}function Ml(e){var t=Zr.current;re(Zr),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bn(e,t){ei=e,Ll=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(je=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(ei===null)throw Error(h(308));Cn=e,ei.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var Zt=null;function zl(e){Zt===null?Zt=[e]:Zt.push(e)}function ls(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zl(t)):(n.next=i.next,i.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function os(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function At(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xt(e,n)}return i=r.interleaved,i===null?(t.next=t,zl(r)):(t.next=i.next,i.next=t),r.interleaved=t,xt(e,n)}function ti(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qi(e,n)}}function as(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ni(e,t,n,r){var i=e.updateQueue;It=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,p=s.next;s.next=null,o===null?l=p:o.next=p,o=s;var y=e.alternate;y!==null&&(y=y.updateQueue,a=y.lastBaseUpdate,a!==o&&(a===null?y.firstBaseUpdate=p:a.next=p,y.lastBaseUpdate=s))}if(l!==null){var v=i.baseState;o=0,y=p=s=null,a=l;do{var m=a.lane,x=a.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var b=e,P=a;switch(m=t,x=n,P.tag){case 1:if(b=P.payload,typeof b=="function"){v=b.call(x,v,m);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=P.payload,m=typeof b=="function"?b.call(x,v,m):b,m==null)break e;v=C({},v,m);break e;case 2:It=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},y===null?(p=y=x,s=v):y=y.next=x,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(y===null&&(s=v),i.baseState=s,i.firstBaseUpdate=p,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);nn|=o,e.lanes=o,e.memoizedState=v}}function ss(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(h(191,i));i.call(r)}}}var lr={},pt=Dt(lr),or=Dt(lr),ar=Dt(lr);function en(e){if(e===lr)throw Error(h(174));return e}function jl(e,t){switch(ee(ar,t),ee(or,e),ee(pt,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}re(pt),ee(pt,t)}function Pn(){re(pt),re(or),re(ar)}function us(e){en(ar.current);var t=en(pt.current),n=Di(t,e.type);t!==n&&(ee(or,e),ee(pt,n))}function Dl(e){or.current===e&&(re(pt),re(or))}var ae=Dt(0);function ri(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ol=[];function Hl(){for(var e=0;e<Ol.length;e++)Ol[e]._workInProgressVersionPrimary=null;Ol.length=0}var ii=xe.ReactCurrentDispatcher,Il=xe.ReactCurrentBatchConfig,tn=0,se=null,he=null,ge=null,li=!1,sr=!1,ur=0,td=0;function Ee(){throw Error(h(321))}function Al(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,i,l){if(tn=l,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ii.current=e===null||e.memoizedState===null?ld:od,e=n(r,i),sr){l=0;do{if(sr=!1,ur=0,25<=l)throw Error(h(301));l+=1,ge=he=null,t.updateQueue=null,ii.current=ad,e=n(r,i)}while(sr)}if(ii.current=si,t=he!==null&&he.next!==null,tn=0,ge=he=se=null,li=!1,t)throw Error(h(300));return e}function Wl(){var e=ur!==0;return ur=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?se.memoizedState=ge=e:ge=ge.next=e,ge}function Je(){if(he===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ge===null?se.memoizedState:ge.next;if(t!==null)ge=t,he=e;else{if(e===null)throw Error(h(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ge===null?se.memoizedState=ge=e:ge=ge.next=e}return ge}function cr(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Je(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,p=l;do{var y=p.lane;if((tn&y)===y)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(a=s=v,o=r):s=s.next=v,se.lanes|=y,nn|=y}p=p.next}while(p!==null&&p!==l);s===null?o=r:s.next=a,nt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,se.lanes|=l,nn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=Je(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);nt(l,t.memoizedState)||(je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function cs(){}function ds(e,t){var n=se,r=Je(),i=t(),l=!nt(r.memoizedState,i);if(l&&(r.memoizedState=i,je=!0),r=r.queue,Vl(hs.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,dr(9,ps.bind(null,n,r,i,t),void 0,null),ye===null)throw Error(h(349));(tn&30)!==0||fs(n,t,i)}return i}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&gs(e)}function hs(e,t,n){return n(function(){ms(t)&&gs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function gs(e){var t=xt(e,1);t!==null&&at(t,e,1,-1)}function ys(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:e},t.queue=e,e=e.dispatch=id.bind(null,se,e),[t.memoizedState,e]}function dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vs(){return Je().memoizedState}function oi(e,t,n,r){var i=ht();se.flags|=e,i.memoizedState=dr(1|t,n,void 0,r===void 0?null:r)}function ai(e,t,n,r){var i=Je();r=r===void 0?null:r;var l=void 0;if(he!==null){var o=he.memoizedState;if(l=o.destroy,r!==null&&Al(r,o.deps)){i.memoizedState=dr(t,n,l,r);return}}se.flags|=e,i.memoizedState=dr(1|t,n,l,r)}function ws(e,t){return oi(8390656,8,e,t)}function Vl(e,t){return ai(2048,8,e,t)}function ks(e,t){return ai(4,2,e,t)}function Ss(e,t){return ai(4,4,e,t)}function xs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ts(e,t,n){return n=n!=null?n.concat([e]):null,ai(4,4,xs.bind(null,t,e),n)}function Gl(){}function Es(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Al(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bs(e,t,n){return(tn&21)===0?(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n):(nt(n,t)||(n=na(),se.lanes|=n,nn|=n,e.baseState=!0),t)}function nd(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Il.transition;Il.transition={};try{e(!1),t()}finally{K=n,Il.transition=r}}function Ps(){return Je().memoizedState}function rd(e,t,n){var r=Bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ls(e))Ns(t,n);else if(n=ls(e,t,n,r),n!==null){var i=Ne();at(n,e,r,i),Ms(n,t,r)}}function id(e,t,n){var r=Bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ls(e))Ns(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,nt(a,o)){var s=t.interleaved;s===null?(i.next=i,zl(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=ls(e,t,i,r),n!==null&&(i=Ne(),at(n,e,r,i),Ms(n,t,r))}}function Ls(e){var t=e.alternate;return e===se||t!==null&&t===se}function Ns(e,t){sr=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ms(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qi(e,n)}}var si={readContext:Ye,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},ld={readContext:Ye,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:ws,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,oi(4194308,4,xs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return oi(4194308,4,e,t)},useInsertionEffect:function(e,t){return oi(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=rd.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:Gl,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=nd.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=ht();if(oe){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),ye===null)throw Error(h(349));(tn&30)!==0||fs(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,ws(hs.bind(null,r,l,e),[e]),r.flags|=2048,dr(9,ps.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ht(),t=ye.identifierPrefix;if(oe){var n=St,r=kt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=td++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},od={readContext:Ye,useCallback:Es,useContext:Ye,useEffect:Vl,useImperativeHandle:Ts,useInsertionEffect:ks,useLayoutEffect:Ss,useMemo:Cs,useReducer:Ul,useRef:vs,useState:function(){return Ul(cr)},useDebugValue:Gl,useDeferredValue:function(e){var t=Je();return bs(t,he.memoizedState,e)},useTransition:function(){var e=Ul(cr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1},ad={readContext:Ye,useCallback:Es,useContext:Ye,useEffect:Vl,useImperativeHandle:Ts,useInsertionEffect:ks,useLayoutEffect:Ss,useMemo:Cs,useReducer:Bl,useRef:vs,useState:function(){return Bl(cr)},useDebugValue:Gl,useDeferredValue:function(e){var t=Je();return he===null?t.memoizedState=e:bs(t,he.memoizedState,e)},useTransition:function(){var e=Bl(cr)[0],t=Je().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=C({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:C({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Bt(e),l=Tt(r,i);l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(at(t,e,i,r),ti(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=Bt(e),l=Tt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=At(e,l,i),t!==null&&(at(t,e,i,r),ti(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Bt(e),i=Tt(n,r);i.tag=2,t!=null&&(i.callback=t),t=At(e,i,r),t!==null&&(at(t,e,r,n),ti(t,e,r))}};function _s(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Kn(n,r)||!Kn(i,l):!0}function zs(e,t,n){var r=!1,i=Ot,l=t.contextType;return typeof l=="object"&&l!==null?l=Ye(l):(i=Re(t)?qt:Te.current,r=t.contextTypes,l=(r=r!=null)?kn(e,i):Ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Ql(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Rl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ye(l):(l=Re(t)?qt:Te.current,i.context=kn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&($l(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),ni(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var n="",r=t;do n+=B(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sd=typeof WeakMap=="function"?WeakMap:Map;function js(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){gi||(gi=!0,co=r),Jl(e,t)},n}function Ds(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Jl(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sd;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xd.bind(null,e,t,n),t.then(e,e))}function Hs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Is(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,At(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ud=xe.ReactCurrentOwner,je=!1;function Le(e,t,n,r){t.child=e===null?is(t,null,n,r):En(t,e.child,n,r)}function As(e,t,n,r,i){n=n.render;var l=t.ref;return bn(t,i),r=Fl(e,t,n,r,l,i),n=Wl(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(oe&&n&&Tl(t),t.flags|=1,Le(e,t,r,i),t.child)}function Fs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!vo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ws(e,t,l,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Kn,n(o,r)&&e.ref===t.ref)return Et(e,t,i)}return t.flags|=1,e=Gt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ws(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Kn(l,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Et(e,t,i)}return ql(e,t,n,r,i)}function Us(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Mn,Be),Be|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Mn,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ee(Mn,Be),Be|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ee(Mn,Be),Be|=r;return Le(e,t,i,n),t.child}function Bs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ql(e,t,n,r,i){var l=Re(n)?qt:Te.current;return l=kn(t,l),bn(t,i),n=Fl(e,t,n,r,l,i),r=Wl(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Et(e,t,i)):(oe&&r&&Tl(t),t.flags|=1,Le(e,t,n,i),t.child)}function Vs(e,t,n,r,i){if(Re(n)){var l=!0;Qr(t)}else l=!1;if(bn(t,i),t.stateNode===null)di(e,t),zs(t,n,r),Ql(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ye(p):(p=Re(n)?qt:Te.current,p=kn(t,p));var y=n.getDerivedStateFromProps,v=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==p)&&Rs(t,o,r,p),It=!1;var m=t.memoizedState;o.state=m,ni(t,r,o,i),s=t.memoizedState,a!==r||m!==s||ze.current||It?(typeof y=="function"&&($l(t,n,y,r),s=t.memoizedState),(a=It||_s(t,n,a,r,m,s,p))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=p,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,os(e,t),a=t.memoizedProps,p=t.type===t.elementType?a:it(t.type,a),o.props=p,v=t.pendingProps,m=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ye(s):(s=Re(n)?qt:Te.current,s=kn(t,s));var x=n.getDerivedStateFromProps;(y=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==v||m!==s)&&Rs(t,o,r,s),It=!1,m=t.memoizedState,o.state=m,ni(t,r,o,i);var b=t.memoizedState;a!==v||m!==b||ze.current||It?(typeof x=="function"&&($l(t,n,x,r),b=t.memoizedState),(p=It||_s(t,n,p,r,m,b,s)||!1)?(y||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),o.props=r,o.state=b,o.context=s,r=p):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Kl(e,t,n,r,l,i)}function Kl(e,t,n,r,i,l){Bs(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Ja(t,n,!1),Et(e,t,l);r=t.stateNode,ud.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,l),t.child=En(t,null,a,l)):Le(e,t,a,l),t.memoizedState=r.state,i&&Ja(t,n,!0),t.child}function Gs(e){var t=e.stateNode;t.pendingContext?Qa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qa(e,t.context,!1),jl(e,t.containerInfo)}function $s(e,t,n,r,i){return Tn(),Pl(i),t.flags|=256,Le(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qs(e,t,n){var r=t.pendingProps,i=ae.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ae,i&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Ti(o,r,0,null),e=an(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Zl(n),t.memoizedState=Xl,e):eo(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cd(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Gt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=Gt(a,l):(l=an(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Zl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return l=e.child,e=l.sibling,r=Gt(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eo(e,t){return t=Ti({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ci(e,t,n,r){return r!==null&&Pl(r),En(t,e.child,null,n),e=eo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cd(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(h(422))),ci(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Ti({mode:"visible",children:r.children},i,0,null),l=an(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&En(t,e.child,null,o),t.child.memoizedState=Zl(o),t.memoizedState=Xl,l);if((t.mode&1)===0)return ci(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(h(419)),r=Yl(l,r,void 0),ci(e,t,o,r)}if(a=(o&e.childLanes)!==0,je||a){if(r=ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,xt(e,i),at(r,e,i,-1))}return yo(),r=Yl(Error(h(421))),ci(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Td.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,Ue=jt(i.nextSibling),We=t,oe=!0,rt=null,e!==null&&($e[Qe++]=kt,$e[Qe++]=St,$e[Qe++]=Kt,kt=e.id,St=e.overflow,Kt=t),t=eo(t,r.children),t.flags|=4096,t)}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function to(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Js(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(Le(e,t,r.children,n),r=ae.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ae,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ri(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),to(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ri(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}to(t,!0,n,null,l);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function di(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Et(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dd(e,t,n){switch(t.tag){case 3:Gs(t),Tn();break;case 5:us(t);break;case 1:Re(t.type)&&Qr(t);break;case 4:jl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Zr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Qs(e,t,n):(ee(ae,ae.current&1),e=Et(e,t,n),e!==null?e.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Js(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Us(e,t,n)}return Et(e,t,n)}var qs,no,Ks,Xs;qs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},no=function(){},Ks=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,en(pt.current);var l=null;switch(n){case"input":i=_i(e,i),r=_i(e,r),l=[];break;case"select":i=C({},i,{value:void 0}),r=C({},r,{value:void 0}),l=[];break;case"textarea":i=ji(e,i),r=ji(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vr)}Oi(n,r);var o;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var a=i[p];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(j.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in r){var s=r[p];if(a=i?.[p],r.hasOwnProperty(p)&&s!==a&&(s!=null||a!=null))if(p==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(j.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&ne("scroll",e),l||a===s||(l=[])):(l=l||[]).push(p,s))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}},Xs=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fd(e,t,n){var r=t.pendingProps;switch(El(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Re(t.type)&&$r(),Ce(t),null;case 3:return r=t.stateNode,Pn(),re(ze),re(Te),Hl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Kr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,rt!==null&&(ho(rt),rt=null))),no(e,t),Ce(t),null;case 5:Dl(t);var i=en(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)Ks(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(h(166));return Ce(t),null}if(e=en(pt.current),Kr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[ft]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Zn.length;i++)ne(Zn[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":zo(r,l),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ne("invalid",r);break;case"textarea":Do(r,l),ne("invalid",r)}Oi(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Br(r.textContent,a,e),i=["children",""+a]):j.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":kr(r),jo(r,l,!0);break;case"textarea":kr(r),Ho(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Io(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ft]=t,e[nr]=r,qs(e,t,!1,!1),t.stateNode=e;e:{switch(o=Hi(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zn.length;i++)ne(Zn[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":zo(e,r),i=_i(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=C({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Do(e,r),i=ji(e,r),ne("invalid",e);break;default:i=r}Oi(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Wo(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Ao(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&jn(e,s):typeof s=="number"&&jn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(j.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ne("scroll",e):s!=null&&Xe(e,l,s,o))}switch(n){case"input":kr(e),jo(e,r,!1);break;case"textarea":kr(e),Ho(e);break;case"option":r.value!=null&&e.setAttribute("value",""+q(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sn(e,!!r.multiple,l,!1):r.defaultValue!=null&&sn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Xs(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(h(166));if(n=en(ar.current),en(pt.current),Kr(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(l=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:Br(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Br(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return Ce(t),null;case 13:if(re(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ue!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ts(),Tn(),t.flags|=98560,l=!1;else if(l=Kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(h(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(h(317));l[ft]=t}else Tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),l=!1}else rt!==null&&(ho(rt),rt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ae.current&1)!==0?me===0&&(me=3):yo())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Pn(),no(e,t),e===null&&er(t.stateNode.containerInfo),Ce(t),null;case 10:return Ml(t.type._context),Ce(t),null;case 17:return Re(t.type)&&$r(),Ce(t),null;case 19:if(re(ae),l=t.memoizedState,l===null)return Ce(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)fr(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ri(e),o!==null){for(t.flags|=128,fr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),t.child}e=e.sibling}l.tail!==null&&de()>_n&&(t.flags|=128,r=!0,fr(l,!1),t.lanes=4194304)}else{if(!r)if(e=ri(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!oe)return Ce(t),null}else 2*de()-l.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,fr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=de(),t.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return go(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Be&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(h(156,t.tag))}function pd(e,t){switch(El(t),t.tag){case 1:return Re(t.type)&&$r(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),re(ze),re(Te),Hl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Dl(t),null;case 13:if(re(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ae),null;case 4:return Pn(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return go(),null;case 24:return null;default:return null}}var fi=!1,be=!1,hd=typeof WeakSet=="function"?WeakSet:Set,E=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function ro(e,t,n){try{n()}catch(r){ce(e,t,r)}}var Zs=!1;function md(e,t){if(ml=zr,e=_a(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,p=0,y=0,v=e,m=null;t:for(;;){for(var x;v!==n||i!==0&&v.nodeType!==3||(a=o+i),v!==l||r!==0&&v.nodeType!==3||(s=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break t;if(m===n&&++p===i&&(a=o),m===l&&++y===r&&(s=o),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gl={focusedElem:e,selectionRange:n},zr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var P=b.memoizedProps,fe=b.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?P:it(t.type,P),fe);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(w){ce(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return b=Zs,Zs=!1,b}function pr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ro(t,n,l)}i=i.next}while(i!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[nr],delete t[kl],delete t[Kc],delete t[Xc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vr));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}var we=null,lt=!1;function Ft(e,t,n){for(n=n.child;n!==null;)ru(e,t,n),n=n.sibling}function ru(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(br,n)}catch{}switch(n.tag){case 5:be||Nn(n,t);case 6:var r=we,i=lt;we=null,Ft(e,t,n),we=r,lt=i,we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(lt?(e=we,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Gn(e)):wl(we,n.stateNode));break;case 4:r=we,i=lt,we=n.stateNode.containerInfo,lt=!0,Ft(e,t,n),we=r,lt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&((l&2)!==0||(l&4)!==0)&&ro(n,t,o),i=i.next}while(i!==r)}Ft(e,t,n);break;case 1:if(!be&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ce(n,t,a)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,Ft(e,t,n),be=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new hd),t.forEach(function(r){var i=Ed.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:we=a.stateNode,lt=!1;break e;case 3:we=a.stateNode.containerInfo,lt=!0;break e;case 4:we=a.stateNode.containerInfo,lt=!0;break e}a=a.return}if(we===null)throw Error(h(160));ru(l,o,i),we=null,lt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(p){ce(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lu(t,e),t=t.sibling}function lu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{pr(3,e,e.return),pi(3,e)}catch(P){ce(e,e.return,P)}try{pr(5,e,e.return)}catch(P){ce(e,e.return,P)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{jn(i,"")}catch(P){ce(e,e.return,P)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ro(i,l),Hi(a,o);var p=Hi(a,l);for(o=0;o<s.length;o+=2){var y=s[o],v=s[o+1];y==="style"?Wo(i,v):y==="dangerouslySetInnerHTML"?Ao(i,v):y==="children"?jn(i,v):Xe(i,y,v,p)}switch(a){case"input":zi(i,l);break;case"textarea":Oo(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?sn(i,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?sn(i,!!l.multiple,l.defaultValue,!0):sn(i,!!l.multiple,l.multiple?[]:"",!1))}i[nr]=l}catch(P){ce(e,e.return,P)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(h(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(P){ce(e,e.return,P)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(P){ce(e,e.return,P)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(uo=de())),r&4&&iu(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(be=(p=be)||y,ot(t,e),be=p):ot(t,e),mt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&(e.mode&1)!==0)for(E=e,y=e.child;y!==null;){for(v=E=y;E!==null;){switch(m=E,x=m.child,m.tag){case 0:case 11:case 14:case 15:pr(4,m,m.return);break;case 1:Nn(m,m.return);var b=m.stateNode;if(typeof b.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(P){ce(r,n,P)}}break;case 5:Nn(m,m.return);break;case 22:if(m.memoizedState!==null){su(v);continue}}x!==null?(x.return=m,E=x):su(v)}y=y.sibling}e:for(y=null,v=e;;){if(v.tag===5){if(y===null){y=v;try{i=v.stateNode,p?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=v.stateNode,s=v.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Fo("display",o))}catch(P){ce(e,e.return,P)}}}else if(v.tag===6){if(y===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(P){ce(e,e.return,P)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;y===v&&(y=null),v=v.return}y===v&&(y=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ot(t,e),mt(e),r&4&&iu(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var r=n;break e}n=n.return}throw Error(h(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jn(i,""),r.flags&=-33);var l=nu(e);oo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nu(e);lo(e,a,o);break;default:throw Error(h(161))}}catch(s){ce(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gd(e,t,n){E=e,ou(e)}function ou(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fi;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||be;a=fi;var p=be;if(fi=o,(be=s)&&!p)for(E=i;E!==null;)o=E,s=o.child,o.tag===22&&o.memoizedState!==null?uu(i):s!==null?(s.return=o,E=s):uu(i);for(;l!==null;)E=l,ou(l),l=l.sibling;E=i,fi=a,be=p}au(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,E=l):au(e)}}function au(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:be||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ss(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ss(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var v=y.dehydrated;v!==null&&Gn(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}be||t.flags&512&&io(t)}catch(m){ce(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function su(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function uu(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(s){ce(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){ce(t,i,s)}}var l=t.return;try{io(t)}catch(s){ce(t,l,s)}break;case 5:var o=t.return;try{io(t)}catch(s){ce(t,o,s)}}}catch(s){ce(t,t.return,s)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var yd=Math.ceil,hi=xe.ReactCurrentDispatcher,ao=xe.ReactCurrentOwner,qe=xe.ReactCurrentBatchConfig,F=0,ye=null,pe=null,ke=0,Be=0,Mn=Dt(0),me=0,hr=null,nn=0,mi=0,so=0,mr=null,De=null,uo=0,_n=1/0,Ct=null,gi=!1,co=null,Wt=null,yi=!1,Ut=null,vi=0,gr=0,fo=null,wi=-1,ki=0;function Ne(){return(F&6)!==0?de():wi!==-1?wi:wi=de()}function Bt(e){return(e.mode&1)===0?1:(F&2)!==0&&ke!==0?ke&-ke:ed.transition!==null?(ki===0&&(ki=na()),ki):(e=K,e!==0||(e=window.event,e=e===void 0?16:da(e.type)),e)}function at(e,t,n,r){if(50<gr)throw gr=0,fo=null,Error(h(185));Fn(e,n,r),((F&2)===0||e!==ye)&&(e===ye&&((F&2)===0&&(mi|=n),me===4&&Vt(e,ke)),Oe(e,r),n===1&&F===0&&(t.mode&1)===0&&(_n=de()+500,Yr&&Ht()))}function Oe(e,t){var n=e.callbackNode;ec(e,t);var r=Nr(e,e===ye?ke:0);if(r===0)n!==null&&Zo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Zo(n),t===1)e.tag===0?Zc(du.bind(null,e)):qa(du.bind(null,e)),Jc(function(){(F&6)===0&&Ht()}),n=null;else{switch(ra(r)){case 1:n=Vi;break;case 4:n=ea;break;case 16:n=Cr;break;case 536870912:n=ta;break;default:n=Cr}n=wu(n,cu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cu(e,t){if(wi=-1,ki=0,(F&6)!==0)throw Error(h(327));var n=e.callbackNode;if(zn()&&e.callbackNode!==n)return null;var r=Nr(e,e===ye?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Si(e,r);else{t=r;var i=F;F|=2;var l=pu();(ye!==e||ke!==t)&&(Ct=null,_n=de()+500,ln(e,t));do try{kd();break}catch(a){fu(e,a)}while(!0);Nl(),hi.current=l,F=i,pe!==null?t=0:(ye=null,ke=0,t=me)}if(t!==0){if(t===2&&(i=Gi(e),i!==0&&(r=i,t=po(e,i))),t===1)throw n=hr,ln(e,0),Vt(e,r),Oe(e,de()),n;if(t===6)Vt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!vd(i)&&(t=Si(e,r),t===2&&(l=Gi(e),l!==0&&(r=l,t=po(e,l))),t===1))throw n=hr,ln(e,0),Vt(e,r),Oe(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(h(345));case 2:on(e,De,Ct);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=uo+500-de(),10<t)){if(Nr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vl(on.bind(null,e,De,Ct),t);break}on(e,De,Ct);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-tt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yd(r/1960))-r,10<r){e.timeoutHandle=vl(on.bind(null,e,De,Ct),r);break}on(e,De,Ct);break;case 5:on(e,De,Ct);break;default:throw Error(h(329))}}}return Oe(e,de()),e.callbackNode===n?cu.bind(null,e):null}function po(e,t){var n=mr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=Si(e,t),e!==2&&(t=De,De=n,t!==null&&ho(t)),e}function ho(e){De===null?De=e:De.push.apply(De,e)}function vd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~so,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function du(e){if((F&6)!==0)throw Error(h(327));zn();var t=Nr(e,0);if((t&1)===0)return Oe(e,de()),null;var n=Si(e,t);if(e.tag!==0&&n===2){var r=Gi(e);r!==0&&(t=r,n=po(e,r))}if(n===1)throw n=hr,ln(e,0),Vt(e,t),Oe(e,de()),n;if(n===6)throw Error(h(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,De,Ct),Oe(e,de()),null}function mo(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(_n=de()+500,Yr&&Ht())}}function rn(e){Ut!==null&&Ut.tag===0&&(F&6)===0&&zn();var t=F;F|=1;var n=qe.transition,r=K;try{if(qe.transition=null,K=1,e)return e()}finally{K=r,qe.transition=n,F=t,(F&6)===0&&Ht()}}function go(){Be=Mn.current,re(Mn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yc(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(El(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$r();break;case 3:Pn(),re(ze),re(Te),Hl();break;case 5:Dl(r);break;case 4:Pn();break;case 13:re(ae);break;case 19:re(ae);break;case 10:Ml(r.type._context);break;case 22:case 23:go()}n=n.return}if(ye=e,pe=e=Gt(e.current,null),ke=Be=t,me=0,hr=null,so=mi=nn=0,De=mr=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Zt=null}return e}function fu(e,t){do{var n=pe;try{if(Nl(),ii.current=si,li){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(tn=0,ge=he=se=null,sr=!1,ur=0,ao.current=null,n===null||n.return===null){me=1,hr=t,pe=null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=ke,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,y=a,v=y.tag;if((y.mode&1)===0&&(v===0||v===11||v===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var x=Hs(o);if(x!==null){x.flags&=-257,Is(x,o,a,l,t),x.mode&1&&Os(l,p,t),t=x,s=p;var b=t.updateQueue;if(b===null){var P=new Set;P.add(s),t.updateQueue=P}else b.add(s);break e}else{if((t&1)===0){Os(l,p,t),yo();break e}s=Error(h(426))}}else if(oe&&a.mode&1){var fe=Hs(o);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),Is(fe,o,a,l,t),Pl(Ln(s,a));break e}}l=s=Ln(s,a),me!==4&&(me=2),mr===null?mr=[l]:mr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=js(l,s,t);as(l,d);break e;case 1:a=s;var u=l.type,f=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wt===null||!Wt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Ds(l,a,t);as(l,w);break e}}l=l.return}while(l!==null)}mu(n)}catch(L){t=L,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function pu(){var e=hi.current;return hi.current=si,e===null?si:e}function yo(){(me===0||me===3||me===2)&&(me=4),ye===null||(nn&268435455)===0&&(mi&268435455)===0||Vt(ye,ke)}function Si(e,t){var n=F;F|=2;var r=pu();(ye!==e||ke!==t)&&(Ct=null,ln(e,t));do try{wd();break}catch(i){fu(e,i)}while(!0);if(Nl(),F=n,hi.current=r,pe!==null)throw Error(h(261));return ye=null,ke=0,me}function wd(){for(;pe!==null;)hu(pe)}function kd(){for(;pe!==null&&!Gu();)hu(pe)}function hu(e){var t=vu(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?mu(e):pe=t,ao.current=null}function mu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=fd(n,t,Be),n!==null){pe=n;return}}else{if(n=pd(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);me===0&&(me=5)}function on(e,t,n){var r=K,i=qe.transition;try{qe.transition=null,K=1,Sd(e,t,n,r)}finally{qe.transition=i,K=r}return null}function Sd(e,t,n,r){do zn();while(Ut!==null);if((F&6)!==0)throw Error(h(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(h(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(tc(e,l),e===ye&&(pe=ye=null,ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yi||(yi=!0,wu(Cr,function(){return zn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=qe.transition,qe.transition=null;var o=K;K=1;var a=F;F|=4,ao.current=null,md(e,n),lu(n,e),Wc(gl),zr=!!ml,gl=ml=null,e.current=n,gd(n),$u(),F=a,K=o,qe.transition=l}else e.current=n;if(yi&&(yi=!1,Ut=e,vi=i),l=e.pendingLanes,l===0&&(Wt=null),Ju(n.stateNode),Oe(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gi)throw gi=!1,e=co,co=null,e;return(vi&1)!==0&&e.tag!==0&&zn(),l=e.pendingLanes,(l&1)!==0?e===fo?gr++:(gr=0,fo=e):gr=0,Ht(),null}function zn(){if(Ut!==null){var e=ra(vi),t=qe.transition,n=K;try{if(qe.transition=null,K=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,vi=0,(F&6)!==0)throw Error(h(331));var i=F;for(F|=4,E=e.current;E!==null;){var l=E,o=l.child;if((E.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var p=a[s];for(E=p;E!==null;){var y=E;switch(y.tag){case 0:case 11:case 15:pr(8,y,l)}var v=y.child;if(v!==null)v.return=y,E=v;else for(;E!==null;){y=E;var m=y.sibling,x=y.return;if(eu(y),y===p){E=null;break}if(m!==null){m.return=x,E=m;break}E=x}}}var b=l.alternate;if(b!==null){var P=b.child;if(P!==null){b.child=null;do{var fe=P.sibling;P.sibling=null,P=fe}while(P!==null)}}E=l}}if((l.subtreeFlags&2064)!==0&&o!==null)o.return=l,E=o;else e:for(;E!==null;){if(l=E,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:pr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,E=d;break e}E=l.return}}var u=e.current;for(E=u;E!==null;){o=E;var f=o.child;if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,E=f;else e:for(o=u;E!==null;){if(a=E,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:pi(9,a)}}catch(L){ce(a,a.return,L)}if(a===o){E=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,E=w;break e}E=a.return}}if(F=i,Ht(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(br,e)}catch{}r=!0}return r}finally{K=n,qe.transition=t}}return!1}function gu(e,t,n){t=Ln(n,t),t=js(e,t,1),e=At(e,t,1),t=Ne(),e!==null&&(Fn(e,1,t),Oe(e,t))}function ce(e,t,n){if(e.tag===3)gu(e,e,n);else for(;t!==null;){if(t.tag===3){gu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Ln(n,e),e=Ds(t,e,1),t=At(t,e,1),e=Ne(),t!==null&&(Fn(t,1,e),Oe(t,e));break}}t=t.return}}function xd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(ke&n)===n&&(me===4||me===3&&(ke&130023424)===ke&&500>de()-uo?ln(e,0):so|=n),Oe(e,t)}function yu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Lr,Lr<<=1,(Lr&130023424)===0&&(Lr=4194304)));var n=Ne();e=xt(e,t),e!==null&&(Fn(e,t,n),Oe(e,n))}function Td(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),yu(e,n)}function Ed(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(h(314))}r!==null&&r.delete(t),yu(e,n)}var vu;vu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return je=!1,dd(e,t,n);je=(e.flags&131072)!==0}else je=!1,oe&&(t.flags&1048576)!==0&&Ka(t,qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;di(e,t),e=t.pendingProps;var i=kn(t,Te.current);bn(t,n),i=Fl(null,t,r,e,i,n);var l=Wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(l=!0,Qr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rl(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Ql(t,r,e,n),t=Kl(null,t,r,!0,l,n)):(t.tag=0,oe&&l&&Tl(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(di(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bd(r),e=it(r,e),i){case 0:t=ql(null,t,r,e,n);break e;case 1:t=Vs(null,t,r,e,n);break e;case 11:t=As(null,t,r,e,n);break e;case 14:t=Fs(null,t,r,it(r.type,e),n);break e}throw Error(h(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),Vs(e,t,r,i,n);case 3:e:{if(Gs(t),e===null)throw Error(h(387));r=t.pendingProps,l=t.memoizedState,i=l.element,os(e,t),ni(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Ln(Error(h(423)),t),t=$s(e,t,r,n,i);break e}else if(r!==i){i=Ln(Error(h(424)),t),t=$s(e,t,r,n,i);break e}else for(Ue=jt(t.stateNode.containerInfo.firstChild),We=t,oe=!0,rt=null,n=is(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===i){t=Et(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return us(t),e===null&&bl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,yl(r,i)?o=null:l!==null&&yl(r,l)&&(t.flags|=32),Bs(e,t),Le(e,t,o,n),t.child;case 6:return e===null&&bl(t),null;case 13:return Qs(e,t,n);case 4:return jl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),As(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,ee(Zr,r._currentValue),r._currentValue=o,l!==null)if(nt(l.value,o)){if(l.children===i.children&&!ze.current){t=Et(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Tt(-1,n&-n),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?s.next=s:(s.next=y.next,y.next=s),p.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),_l(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(h(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_l(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,bn(t,n),i=Ye(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=it(r,t.pendingProps),i=it(r.type,i),Fs(e,t,r,i,n);case 15:return Ws(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:it(r,i),di(e,t),t.tag=1,Re(r)?(e=!0,Qr(t)):e=!1,bn(t,n),zs(t,r,i),Ql(t,r,i,n),Kl(null,t,r,!0,e,n);case 19:return Js(e,t,n);case 22:return Us(e,t,n)}throw Error(h(156,t.tag))};function wu(e,t){return Xo(e,t)}function Cd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Cd(e,t,n,r)}function vo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bd(e){if(typeof e=="function")return vo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ut)return 11;if(e===ct)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function xi(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")vo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Me:return an(n.children,i,l,t);case Ge:o=8,i|=8;break;case Pt:return e=Ke(12,n,t,i|2),e.elementType=Pt,e.lanes=l,e;case Ie:return e=Ke(13,n,t,i),e.elementType=Ie,e.lanes=l,e;case et:return e=Ke(19,n,t,i),e.elementType=et,e.lanes=l,e;case ue:return Ti(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yt:o=10;break e;case Qt:o=9;break e;case ut:o=11;break e;case ct:o=14;break e;case _e:o=16,r=null;break e}throw Error(h(130,e==null?e:typeof e,""))}return t=Ke(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function an(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function Ti(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function ko(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$i(0),this.expirationTimes=$i(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function So(e,t,n,r,i,l,o,a,s){return e=new Pd(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ke(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(l),e}function Ld(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ku(e){if(!e)return Ot;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(h(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(h(171))}if(e.tag===1){var n=e.type;if(Re(n))return Ya(e,n,t)}return t}function Su(e,t,n,r,i,l,o,a,s){return e=So(n,r,!0,e,i,l,o,a,s),e.context=ku(null),n=e.current,r=Ne(),i=Bt(n),l=Tt(r,i),l.callback=t??null,At(n,l,i),e.current.lanes=i,Fn(e,i,r),Oe(e,r),e}function Ei(e,t,n,r){var i=t.current,l=Ne(),o=Bt(i);return n=ku(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=At(i,t,o),e!==null&&(at(e,i,o,l),ti(e,i,o)),o}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xo(e,t){xu(e,t),(e=e.alternate)&&xu(e,t)}function Nd(){return null}var Tu=typeof reportError=="function"?reportError:function(e){console.error(e)};function To(e){this._internalRoot=e}bi.prototype.render=To.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));Ei(e,t,null,null)},bi.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){Ei(null,e,null,null)}),t[vt]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&ua(e)}};function Eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Eu(){}function Md(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var p=Ci(o);l.call(p)}}var o=Su(t,r,e,0,null,!1,!1,"",Eu);return e._reactRootContainer=o,e[vt]=o.current,er(e.nodeType===8?e.parentNode:e),rn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var p=Ci(s);a.call(p)}}var s=So(e,0,!1,null,null,!1,!1,"",Eu);return e._reactRootContainer=s,e[vt]=s.current,er(e.nodeType===8?e.parentNode:e),rn(function(){Ei(t,s,n,r)}),s}function Li(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=Ci(o);a.call(s)}}Ei(t,o,e,i)}else o=Md(n,t,e,i,r);return Ci(o)}ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(Qi(t,n|1),Oe(t,de()),(F&6)===0&&(_n=de()+500,Ht()))}break;case 13:rn(function(){var r=xt(e,1);if(r!==null){var i=Ne();at(r,e,1,i)}}),xo(e,1)}},Yi=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Ne();at(t,e,134217728,n)}xo(e,134217728)}},la=function(e){if(e.tag===13){var t=Bt(e),n=xt(e,t);if(n!==null){var r=Ne();at(n,e,t,r)}xo(e,t)}},oa=function(){return K},aa=function(e,t){var n=K;try{return K=e,t()}finally{K=n}},Fi=function(e,t,n){switch(t){case"input":if(zi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Gr(r);if(!i)throw Error(h(90));_o(r),zi(r,i)}}}break;case"textarea":Oo(e,n);break;case"select":t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}},Go=mo,$o=rn;var _d={usingClientEntryPoint:!1,Events:[rr,vn,Gr,Bo,Vo,mo]},yr={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zd={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qo(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Nd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{br=Ni.inject(zd),dt=Ni}catch{}}return He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_d,He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eo(t))throw Error(h(200));return Ld(e,t,null,n)},He.createRoot=function(e,t){if(!Eo(e))throw Error(h(299));var n=!1,r="",i=Tu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=So(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,er(e.nodeType===8?e.parentNode:e),new To(t)},He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=qo(t),e=e===null?null:e.stateNode,e},He.flushSync=function(e){return rn(e)},He.hydrate=function(e,t,n){if(!Pi(t))throw Error(h(200));return Li(null,e,t,!0,n)},He.hydrateRoot=function(e,t,n){if(!Eo(e))throw Error(h(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=Tu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Su(t,null,e,1,n??null,i,!1,l,o),e[vt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new bi(t)},He.render=function(e,t,n){if(!Pi(t))throw Error(h(200));return Li(null,e,t,!1,n)},He.unmountComponentAtNode=function(e){if(!Pi(e))throw Error(h(40));return e._reactRootContainer?(rn(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1},He.unstable_batchedUpdates=mo,He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pi(n))throw Error(h(200));if(e==null||e._reactInternals===void 0)throw Error(h(38));return Li(e,t,n,!1,r)},He.version="18.3.1-next-f1338f8080-20240426",He}var zu;function Fd(){if(zu)return Po.exports;zu=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(_){console.error(_)}}return T(),Po.exports=Ad(),Po.exports}var Ru;function Wd(){if(Ru)return Mi;Ru=1;var T=Fd();return Mi.createRoot=T.createRoot,Mi.hydrateRoot=T.hydrateRoot,Mi}var Ud=Wd(),bt=Mo();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=T=>T.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vd=T=>T.replace(/^([A-Z])|[\s-_]+(\w)/g,(_,h,A)=>A?A.toUpperCase():h.toLowerCase()),ju=T=>{const _=Vd(T);return _.charAt(0).toUpperCase()+_.slice(1)},Hu=(...T)=>T.filter((_,h,A)=>!!_&&_.trim()!==""&&A.indexOf(_)===h).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gd={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=bt.forwardRef(({color:T="currentColor",size:_=24,strokeWidth:h=2,absoluteStrokeWidth:A,className:j="",children:H,iconNode:te,...$},W)=>bt.createElement("svg",{ref:W,...Gd,width:_,height:_,stroke:T,strokeWidth:A?Number(h)*24/Number(_):h,className:Hu("lucide",j),...$},[...te.map(([Q,U])=>bt.createElement(Q,U)),...Array.isArray(H)?H:[H]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=(T,_)=>{const h=bt.forwardRef(({className:A,...j},H)=>bt.createElement($d,{ref:H,iconNode:_,className:Hu(`lucide-${Bd(ju(T))}`,`lucide-${T}`,A),...j}));return h.displayName=ju(T),h};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Yd=wr("check",Qd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qd=wr("chevron-down",Jd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xd=wr("chevron-right",Kd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ef=wr("copy",Zd);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],nf=wr("lightbulb",tf);function rf({phases:T,selectedPhase:_,selectedTopic:h,onPhaseSelect:A,onTopicSelect:j}){const[H,te]=bt.useState(new Set([0])),$=Q=>{const U=new Set(H);U.has(Q)?U.delete(Q):U.add(Q),te(U)},W=Q=>{A(Q),j(0),$(Q)};return k.jsxs("nav",{className:"w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto",children:[k.jsxs("div",{className:"p-6 border-b border-gray-800",children:[k.jsx("h1",{className:"text-2xl font-bold text-blue-400",children:"HTML Mastery"}),k.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Complete HTML Learning Guide"})]}),k.jsx("div",{className:"p-4",children:T.map((Q,U)=>k.jsxs("div",{className:"mb-2",children:[k.jsxs("button",{onClick:()=>W(U),className:`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${_===U?"bg-blue-600 text-white":"hover:bg-gray-800 text-gray-300"}`,children:[k.jsxs("div",{className:"flex items-center gap-3",children:[k.jsx("span",{className:"text-xl",children:Q.icon}),k.jsx("span",{className:"font-medium text-sm",children:Q.title})]}),k.jsx("span",{className:"p-1",children:H.has(U)?k.jsx(qd,{className:"w-4 h-4"}):k.jsx(Xd,{className:"w-4 h-4"})})]}),H.has(U)&&k.jsx("div",{className:"ml-8 mt-1 space-y-1",children:Q.topics.map((Y,J)=>k.jsx("button",{onClick:()=>{A(U),j(J)},className:`w-full text-left p-2 px-3 rounded text-sm transition-colors ${_===U&&h===J?"bg-blue-500 text-white":"hover:bg-gray-800 text-gray-400"}`,children:Y.title},J))})]},Q.id))})]})}function Du({code:T}){const[_,h]=bt.useState(!1),A=async()=>{await navigator.clipboard.writeText(T),h(!0),setTimeout(()=>h(!1),2e3)},H=(te=>{let $=te.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return $=$.replace(/(&lt;!--[\s\S]*?--&gt;)/g,'<span class="text-emerald-400 italic">$1</span>'),$=$.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9-]*)(.*?)(&gt;)/g,(W,Q,U,Y,J)=>{let Se=`<span class="text-cyan-400 font-semibold">${Q}${U}</span>`;return Y&&(Y=Y.replace(/([a-zA-Z-]+)(=)(&quot;|")(.*?)(\3)/g,'<span class="text-pink-400">$1</span><span class="text-yellow-300">$2</span><span class="text-lime-400">$3$4$5</span>'),Se+=Y),Se+=`<span class="text-cyan-400 font-semibold">${J}</span>`,Se}),$})(T);return k.jsxs("div",{className:"relative group",children:[k.jsxs("div",{className:"flex items-center justify-between bg-gray-800 border border-gray-700 border-b-0 rounded-t-lg px-4 py-2",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsxs("div",{className:"flex gap-1.5",children:[k.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/80"}),k.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/80"}),k.jsx("div",{className:"w-3 h-3 rounded-full bg-green-500/80"})]}),k.jsx("span",{className:"text-xs text-gray-400 ml-2",children:"index.html"})]}),k.jsx("button",{onClick:A,className:"flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-all text-xs font-medium text-gray-300 hover:text-white",title:"Copy code",children:_?k.jsxs(k.Fragment,{children:[k.jsx(Yd,{className:"w-3.5 h-3.5 text-green-400"}),k.jsx("span",{className:"text-green-400",children:"Copied!"})]}):k.jsxs(k.Fragment,{children:[k.jsx(ef,{className:"w-3.5 h-3.5"}),k.jsx("span",{children:"Copy"})]})})]}),k.jsxs("div",{className:"relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-b-lg overflow-hidden",children:[k.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-12 bg-gray-800/50 border-r border-gray-700"}),k.jsx("pre",{className:"overflow-x-auto p-4 pl-14",children:k.jsx("code",{className:"text-sm font-mono leading-relaxed block",dangerouslySetInnerHTML:{__html:H}})}),k.jsx("div",{className:"absolute left-0 top-0 p-4 pr-3 text-right select-none pointer-events-none",children:T.split(`
`).map((te,$)=>k.jsx("div",{className:"text-xs text-gray-600 leading-relaxed font-mono",children:$+1},$))})]})]})}function lf({phase:T,topicIndex:_}){const h=T.topics[_];return h?k.jsx("main",{className:"flex-1 overflow-y-auto",children:k.jsxs("div",{className:"max-w-4xl mx-auto p-8",children:[k.jsx("div",{className:"mb-8",children:k.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[k.jsx("span",{className:"text-4xl",children:T.icon}),k.jsxs("div",{children:[k.jsx("h2",{className:"text-3xl font-bold text-blue-400",children:h.title}),k.jsx("p",{className:"text-gray-400 text-sm mt-1",children:T.title})]})]})}),k.jsxs("section",{className:"mb-8",children:[k.jsxs("h3",{className:"text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2",children:[k.jsx("span",{className:"w-1 h-6 bg-blue-500 rounded"}),"What is it?"]}),k.jsx("p",{className:"text-gray-300 leading-relaxed bg-gray-800 p-4 rounded-lg border border-gray-700",children:h.definition})]}),h.code&&k.jsxs("section",{className:"mb-8",children:[k.jsxs("h3",{className:"text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2",children:[k.jsx("span",{className:"w-1 h-6 bg-green-500 rounded"}),"Code Example"]}),k.jsx(Du,{code:h.code})]}),h.additionalCodes&&h.additionalCodes.map((A,j)=>k.jsxs("section",{className:"mb-8",children:[k.jsxs("h3",{className:"text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2",children:[k.jsx("span",{className:"w-1 h-6 bg-purple-500 rounded"}),A.label]}),k.jsx(Du,{code:A.code})]},j)),k.jsxs("section",{className:"mb-8",children:[k.jsxs("h3",{className:"text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2",children:[k.jsx("span",{className:"w-1 h-6 bg-yellow-500 rounded"}),"Real-World Example"]}),k.jsx("div",{className:"bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-700/50 rounded-lg p-5",children:k.jsxs("div",{className:"flex gap-3",children:[k.jsx(nf,{className:"w-6 h-6 text-yellow-400 flex-shrink-0 mt-1"}),k.jsx("p",{className:"text-gray-200 leading-relaxed",children:h.realWorldExample})]})})]})]})}):k.jsx("main",{className:"flex-1 overflow-y-auto",children:k.jsx("div",{className:"max-w-4xl mx-auto p-8",children:k.jsxs("div",{className:"text-center py-20",children:[k.jsx("h2",{className:"text-2xl text-gray-400",children:"No content available"}),k.jsx("p",{className:"text-gray-500 mt-2",children:"Select a topic from the sidebar"})]})})})}const Ou=[{id:1,title:"Phase 1: Web Fundamentals",icon:"🔰",topics:[{title:"How the Internet Works",definition:"The internet is a global network of interconnected computers that communicate using standardized protocols. When you visit a website, your computer sends a request through your Internet Service Provider (ISP) to servers around the world, which then send back the requested information.",code:`<!-- Understanding the flow -->
<!-- 1. You type: www.example.com -->
<!-- 2. DNS translates to: 192.168.1.1 -->
<!-- 3. Browser sends HTTP request -->
<!-- 4. Server sends HTML response -->
<!-- 5. Browser displays the page -->`,realWorldExample:"Think of the internet like the postal system. Your home address is like your IP address, the post office routes mail like routers direct data packets, and the postal service protocols (zip codes, addresses) are like internet protocols (TCP/IP, HTTP). When you send a letter, it goes through multiple post offices before reaching its destination - just like data packets travel through multiple routers."},{title:"Client-Server Architecture",definition:"Client-server is a computing model where the client (your browser) requests resources or services, and the server provides them. The client initiates requests, and the server responds with the requested data.",code:`<!-- CLIENT SIDE (Your Browser) -->
<!-- Sends requests, displays content -->

<!-- SERVER SIDE (Web Server) -->
<!-- Processes requests, sends responses -->

<!-- Example flow: -->
<!-- Client: "Can I have the homepage?" -->
<!-- Server: "Here's the HTML, CSS, and images" -->`,realWorldExample:"Imagine a restaurant: You (the client) look at the menu and order food. The kitchen (the server) prepares your order and serves it to you. You don't need to know how the kitchen works - you just make requests and receive responses. Similarly, your browser requests web pages, and servers send them back without you needing to know the server's internal workings."},{title:"HTTP vs HTTPS",definition:"HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web. HTTPS (HTTP Secure) is the encrypted version that protects data during transmission using SSL/TLS encryption, making it secure from eavesdroppers.",code:`<!-- HTTP - Not Secure -->
http://example.com
<!-- Data sent in plain text -->
<!-- Anyone can intercept and read -->

<!-- HTTPS - Secure -->
https://example.com
<!-- Data is encrypted -->
<!-- Protected from hackers -->`,realWorldExample:"HTTP is like sending a postcard - anyone handling it can read your message. HTTPS is like sending a sealed, locked box - only the intended recipient has the key to open it. This is why banking websites, shopping sites, and login pages use HTTPS to protect your passwords, credit card numbers, and personal information."},{title:"Domain, Hosting & DNS",definition:"A domain name is your website's human-readable address (like google.com). Hosting is the server space where your website files are stored. DNS (Domain Name System) is like the internet's phonebook, translating domain names into IP addresses that computers understand.",code:`<!-- Domain Structure -->
https://www.example.com/page.html
<!-- https:// - Protocol -->
<!-- www - Subdomain -->
<!-- example - Domain name -->
<!-- .com - Top-level domain (TLD) -->
<!-- /page.html - Path -->`,realWorldExample:"Think of it like a physical store: The domain name (example.com) is your store's street address that people remember. The hosting is the actual building where your store operates. DNS is like GPS - when someone types your address, DNS directs them to the exact location of your store (the server's IP address like 192.168.1.1)."},{title:"How Browsers Render HTML",definition:"Browser rendering is the process of converting HTML, CSS, and JavaScript into the visual webpage you see. The browser reads HTML top to bottom, builds the DOM (Document Object Model), applies CSS styles, executes JavaScript, and paints the final result on screen.",code:`<!DOCTYPE html>
<html>
<head>
  <title>Rendering Process</title>
  <style>
    /* 2. CSS is parsed */
    h1 { color: blue; }
  </style>
</head>
<body>
  <!-- 1. HTML is parsed -->
  <h1>Hello World</h1>
  
  <script>
    // 3. JavaScript is executed
    console.log('Page loaded!');
  <\/script>
  <!-- 4. Page is painted to screen -->
</body>
</html>`,realWorldExample:"Rendering is like building a house from blueprints. The HTML is the blueprint (structure), CSS is the interior design (styling), and JavaScript is the electricity and plumbing (functionality). The browser reads the blueprint, applies the design, adds functionality, and finally shows you the completed house. Just as you see walls before paint, browsers render HTML structure before applying CSS styles."}]},{id:2,title:"Phase 2: HTML Core Fundamentals",icon:"🧱",topics:[{title:"What is HTML?",definition:"HTML (HyperText Markup Language) is the standard markup language for creating web pages. It uses tags to structure content and tell browsers how to display text, images, links, and other elements. HTML is not a programming language - it's a markup language that describes the structure of web content.",code:`<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML!</h1>
  <p>This is a paragraph of text.</p>
</body>
</html>`,realWorldExample:"HTML is like the skeleton and organs of a body. Just as bones give structure to your body, HTML gives structure to web pages. Each tag is like a different body part serving a specific purpose: <head> is the brain (contains metadata), <body> is the torso (contains visible content), headings are like chapter titles in a book, and paragraphs are like text blocks."},{title:"HTML5 Introduction",definition:"HTML5 is the latest version of HTML, introduced in 2014. It added new semantic elements (like <header>, <nav>, <article>), multimedia support (audio/video without plugins), improved form controls, and APIs for offline storage, geolocation, and drag-and-drop functionality.",code:`<!DOCTYPE html> <!-- HTML5 doctype -->
<html>
<body>
  <!-- HTML5 Semantic Elements -->
  <header>Site Header</header>
  <nav>Navigation</nav>
  <main>
    <article>Article Content</article>
    <aside>Sidebar</aside>
  </main>
  <footer>Site Footer</footer>
  
  <!-- HTML5 Multimedia -->
  <video src="movie.mp4" controls></video>
  <audio src="song.mp3" controls></audio>
</body>
</html>`,realWorldExample:"HTML5 is like upgrading from a flip phone to a smartphone. Old HTML could display text and images (like a flip phone with basic features). HTML5 added native video playback, location services, offline capabilities, and better structure - just like smartphones added cameras, GPS, apps, and touchscreens without needing extra accessories."},{title:"HTML Document Structure",definition:"Every HTML document follows a specific structure: DOCTYPE declaration, <html> root element, <head> for metadata, and <body> for visible content. This structure tells browsers how to interpret and display the page correctly.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Metadata section (not visible) -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document Title</title>
</head>
<body>
  <!-- Visible content goes here -->
  <h1>Welcome!</h1>
  <p>This is visible to users.</p>
</body>
</html>`,realWorldExample:"An HTML document is like a business letter. The DOCTYPE is like the letterhead showing it's official. The <head> section is like the envelope with sender/recipient info (not part of the message but necessary for delivery). The <body> is the actual letter content that people read. Just as letters follow a format, HTML documents follow this structure so browsers can read them correctly."},{title:"Doctype Declaration",definition:"The DOCTYPE declaration (<!DOCTYPE html>) tells the browser which version of HTML the page uses. In HTML5, it's simply <!DOCTYPE html>. It must be the very first line and ensures the browser renders the page in standards mode rather than quirks mode.",code:`<!DOCTYPE html> <!-- HTML5 -->
<!-- Must be first line, before <html> -->

<!-- Old HTML4 doctype (don't use) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!-- Modern way (use this) -->
<!DOCTYPE html>`,realWorldExample:"The DOCTYPE is like showing your ID before entering a building. It tells the security guard (browser) what rulebook to follow. Without it, the guard might use old, outdated rules (quirks mode) which could make things look wrong. With <!DOCTYPE html>, everyone knows to use the latest HTML5 standards, ensuring consistency."},{title:"Elements, Tags & Attributes",definition:"Elements are the building blocks of HTML, defined by tags. Tags are enclosed in angle brackets (<tag>). Most elements have an opening tag, content, and closing tag. Attributes provide additional information about elements, written as name='value' pairs inside opening tags.",code:`<!-- ELEMENT = Opening Tag + Content + Closing Tag -->
<p>This is a paragraph element</p>

<!-- TAG: <p> and </p> -->
<!-- CONTENT: "This is a paragraph element" -->

<!-- ATTRIBUTES provide extra info -->
<a href="https://google.com" target="_blank">
  Click here
</a>
<!-- href and target are attributes -->

<!-- Self-closing tags (no content) -->
<img src="photo.jpg" alt="A photo">
<br>
<hr>`,realWorldExample:"Think of HTML like building with LEGO blocks. Each block type (element) serves a purpose - some are bricks (paragraphs), some are wheels (images), some are windows (links). The block's color and size (attributes) give extra details. Tags are like the connectors that hold blocks together. Just as LEGO instructions show how to assemble blocks, HTML tags show browsers how to build the webpage."},{title:"Block vs Inline Elements",definition:"Block elements start on a new line and take up the full width available, stacking vertically. Inline elements only take up as much width as needed and don't start new lines, flowing horizontally within text. Understanding this is crucial for layout.",code:`<!-- BLOCK ELEMENTS (full width, new line) -->
<div>Division block</div>
<p>Paragraph block</p>
<h1>Heading block</h1>
<ul>
  <li>List item block</li>
</ul>

<!-- INLINE ELEMENTS (flow with text) -->
<span>Inline span</span>
<a href="#">Inline link</a>
<strong>Bold inline</strong>
<em>Italic inline</em>
<img src="icon.png" alt="Inline image">

<!-- Example mixing both -->
<p>This is a <strong>paragraph</strong> with 
<a href="#">inline</a> elements inside.</p>`,realWorldExample:"Block elements are like shipping containers stacked vertically on a ship - each takes up the full width and sits on its own level. Inline elements are like items on a conveyor belt flowing left to right - they line up horizontally until the belt runs out of space, then wrap to the next line. A paragraph (<p>) is a container, while bold text (<strong>) is an item flowing inside that container."}]},{id:3,title:"Phase 3: Links, Media & Assets",icon:"🔗",topics:[{title:"Anchor Tag & Hyperlinks",definition:"The <a> (anchor) tag creates hyperlinks that connect web pages together. It uses the href attribute to specify the destination URL. Links can point to other pages, sections within the same page, email addresses, or phone numbers.",code:`<!-- Basic link -->
<a href="https://www.google.com">Visit Google</a>

<!-- Link to another page on your site -->
<a href="about.html">About Us</a>

<!-- Link to section on same page -->
<a href="#contact">Jump to Contact</a>
<section id="contact">Contact form here</section>

<!-- Email link -->
<a href="mailto:hello@example.com">Email Us</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>`,realWorldExample:"Hyperlinks are like doorways between rooms in a building. Clicking a link is like walking through a door to another room (webpage). The href attribute is the room number telling you where the door leads. Just as buildings have elevators (links to different floors/pages) and room numbers (section links), websites use links to navigate between different content areas."},{title:"Absolute vs Relative URLs",definition:"Absolute URLs include the full web address starting with http:// or https://, pointing to a specific location on the internet. Relative URLs are shortcuts that point to files relative to the current page's location, making them portable and easier to maintain.",code:`<!-- ABSOLUTE URL (complete address) -->
<a href="https://www.example.com/about.html">
  About (Absolute)
</a>

<!-- RELATIVE URL (relative to current page) -->
<a href="about.html">About (Same folder)</a>
<a href="pages/about.html">About (subfolder)</a>
<a href="../about.html">About (parent folder)</a>

<!-- Images work the same way -->
<img src="https://example.com/logo.png" alt="Absolute">
<img src="images/logo.png" alt="Relative">`,realWorldExample:"Absolute URLs are like giving someone your complete address: '123 Main Street, New York, NY 10001, USA.' Relative URLs are like saying 'two doors down' - it only makes sense from your current location. If you move houses (change domains), absolute addresses from others stay the same, but your relative directions ('upstairs', 'next room') move with you, making relative URLs better for internal site links."},{title:"Target Attributes",definition:"The target attribute specifies where to open the linked document. The most common value is _blank which opens links in a new tab/window. Other values include _self (same window), _parent, and _top for frame-based layouts.",code:`<!-- Open in same tab (default) -->
<a href="page.html">Same Tab</a>
<a href="page.html" target="_self">Same Tab</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank">
  New Tab
</a>

<!-- Security best practice with new tab -->
<a href="https://external-site.com" 
   target="_blank" 
   rel="noopener noreferrer">
  Secure External Link
</a>`,realWorldExample:"The target attribute is like choosing how to open a book while reading another. target='_self' is like putting down your current book to read the new one (same tab). target='_blank' is like keeping your current book open while opening another book beside it (new tab). Libraries (browsers) let you have multiple books (tabs) open at once, and you choose how to manage them."},{title:"Image Formats",definition:"Different image formats serve different purposes: JPEG for photos (lossy compression, smaller files), PNG for graphics with transparency (lossless), SVG for scalable vector graphics (perfect at any size), and WebP for modern browsers (better compression than JPEG/PNG).",code:`<!-- JPEG - Best for photographs -->
<img src="photo.jpg" alt="Photo" 
     width="600" height="400">

<!-- PNG - Best for logos, transparency -->
<img src="logo.png" alt="Logo">

<!-- SVG - Scalable vector graphics -->
<img src="icon.svg" alt="Icon">

<!-- WebP - Modern, smaller files -->
<img src="image.webp" alt="Modern format">

<!-- Picture element for multiple formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Fallback">
</picture>`,realWorldExample:"Image formats are like different types of paper for printing. JPEG is like magazine paper - great for colorful photos but you lose some quality for smaller file size. PNG is like glossy brochure paper - higher quality with transparent areas. SVG is like a rubber stamp - it stays sharp at any size because it's based on mathematical shapes, not pixels. WebP is like eco-friendly paper - same quality as traditional but uses less space."},{title:"img Tag & Alt Attribute",definition:"The <img> tag embeds images in web pages. It's self-closing and requires the src attribute (image source). The alt attribute provides alternative text for screen readers and displays when images fail to load, crucial for accessibility and SEO.",code:`<!-- Basic image -->
<img src="photo.jpg" alt="Sunset over mountains">

<!-- With dimensions (improves loading) -->
<img src="photo.jpg" 
     alt="Sunset over mountains"
     width="800" 
     height="600">

<!-- Decorative images (empty alt) -->
<img src="decoration.png" alt="">

<!-- Image as link -->
<a href="gallery.html">
  <img src="thumbnail.jpg" alt="View photo gallery">
</a>`,realWorldExample:"The img tag is like hanging a picture frame on a wall. The src tells you which painting to put in the frame. The alt text is like the title plaque next to artwork in a museum - it describes the image for people who can't see it (blind visitors using screen readers) or when the painting is being restored (image failed to load). Museums always label their art, and websites should always use alt text."},{title:"Responsive Images",definition:"Responsive images adapt to different screen sizes and resolutions. The srcset attribute provides multiple image versions for different device widths or pixel densities, allowing browsers to download the most appropriate size, saving bandwidth and improving performance.",code:`<!-- Basic responsive image with srcset -->
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w,
             photo-800.jpg 800w,
             photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Responsive photo">

<!-- High DPI displays (Retina) -->
<img src="logo.png"
     srcset="logo.png 1x,
             logo@2x.png 2x,
             logo@3x.png 3x"
     alt="Logo">

<!-- Picture element for art direction -->
<picture>
  <source media="(max-width: 600px)" 
          srcset="mobile.jpg">
  <source media="(max-width: 1200px)" 
          srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Responsive">
</picture>`,realWorldExample:"Responsive images are like a restaurant menu with different portion sizes. A phone (small screen) gets the small portion (small image), a tablet gets medium, and a desktop monitor gets large. Why serve a giant meal to someone who asked for a snack? Similarly, why send a massive 4K image to a phone screen? The browser picks the right 'portion size' based on the device's 'appetite' (screen size)."},{title:"Audio & Video Tags",definition:"HTML5's <audio> and <video> tags embed media directly in web pages without plugins. They support multiple formats, include built-in controls, and offer attributes for autoplay, looping, and preloading. Multiple source formats ensure browser compatibility.",code:`<!-- Audio player -->
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  <source src="song.ogg" type="audio/ogg">
  Your browser doesn't support audio.
</audio>

<!-- Video player -->
<video controls width="640" height="360">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser doesn't support video.
</video>

<!-- Video with poster and autoplay -->
<video controls 
       poster="preview.jpg"
       autoplay 
       muted 
       loop>
  <source src="video.mp4" type="video/mp4">
</video>`,realWorldExample:"The audio and video tags are like built-in media players in your car. Before HTML5, you needed to install separate plugins (like carrying a portable CD player). Now browsers have native players - just like modern cars have built-in systems. The controls attribute is like the play/pause buttons on your steering wheel, and multiple source formats are like playing both CDs and USB drives."}]},{id:4,title:"Phase 4: Lists, Tables & Forms",icon:"📋",topics:[{title:"Ordered Lists",definition:"Ordered lists (<ol>) display items in a numbered sequence. They're used when the order matters, like instructions or rankings. Browsers automatically number items using <li> (list item) tags. You can customize numbering with type and start attributes.",code:`<!-- Basic ordered list -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

<!-- Custom start number -->
<ol start="5">
  <li>Item 5</li>
  <li>Item 6</li>
</ol>

<!-- Different numbering types -->
<ol type="A"><!-- A, B, C... -->
  <li>Item A</li>
</ol>

<ol type="I"><!-- I, II, III... -->
  <li>Item I</li>
</ol>

<ol type="i"><!-- i, ii, iii... -->
  <li>Item i</li>
</ol>`,realWorldExample:"Ordered lists are like cooking recipes where steps must follow a specific sequence: 1) Preheat oven, 2) Mix ingredients, 3) Bake for 30 minutes. If you skip step 1 or do them out of order, the cake won't turn out right. Similarly, assembly instructions, tutorial steps, and top-10 rankings use ordered lists because the sequence matters."},{title:"Unordered Lists",definition:"Unordered lists (<ul>) display items with bullet points where order doesn't matter. They're perfect for grouping related items like features, ingredients, or navigation menus. Each item uses the <li> tag, just like ordered lists.",code:`<!-- Basic unordered list -->
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>

<!-- Navigation menu (common use) -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Feature list -->
<ul>
  <li>Fast performance</li>
  <li>Easy to use</li>
  <li>Secure</li>
</ul>`,realWorldExample:"Unordered lists are like a grocery shopping list. It doesn't matter if you pick up milk before eggs or bread before cheese - the order isn't important. Similarly, a list of product features, team members, or menu items works as an unordered list. The bullet points show these items are related but not sequential."},{title:"Definition Lists",definition:"Definition lists (<dl>) display term-definition pairs, perfect for glossaries, metadata, or FAQs. They use <dt> for the term and <dd> for the definition/description. One term can have multiple definitions and vice versa.",code:`<!-- Basic definition list -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  
  <dt>JavaScript</dt>
  <dd>Programming language for web interactivity</dd>
</dl>

<!-- Multiple definitions for one term -->
<dl>
  <dt>Bank</dt>
  <dd>Financial institution</dd>
  <dd>The side of a river</dd>
  <dd>To tilt an airplane</dd>
</dl>`,realWorldExample:"Definition lists are like a dictionary or glossary. Each entry has a word (term) followed by its meaning (definition). In a cookbook, the ingredients section uses this format: 'Flour - 2 cups', 'Sugar - 1 cup'. In FAQ sections, questions are terms and answers are definitions. It's perfect whenever you're explaining or defining things."},{title:"Nested Lists",definition:"Lists can be nested inside other lists to create hierarchical structures. Place a new <ul> or <ol> inside an <li> element to create sublists. This is common in navigation menus, outlines, and site maps.",code:`<!-- Nested list structure -->
<ul>
  <li>Fruits
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrots</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>

<!-- Mixed ordered and unordered -->
<ol>
  <li>Main Topic 1
    <ul>
      <li>Subtopic A</li>
      <li>Subtopic B</li>
    </ul>
  </li>
  <li>Main Topic 2
    <ul>
      <li>Subtopic C</li>
    </ul>
  </li>
</ol>`,realWorldExample:"Nested lists are like a company org chart or a file folder system. The main list is like department heads, and nested lists are employees within each department. Or think of your computer's folders: 'Documents' might contain 'Work' and 'Personal', and each of those contains more subfolders. The indentation shows the hierarchy - what belongs to what."},{title:"Table Structure",definition:"Tables organize data in rows and columns using <table>, <tr> (table row), <td> (table data/cell), and <th> (table header) tags. They're designed for tabular data like schedules, pricing, or statistics - not for page layout.",code:`<!-- Basic table structure -->
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Sarah</td>
    <td>30</td>
    <td>London</td>
  </tr>
</table>

<!-- Table with border (use CSS instead) -->
<table border="1">
  <tr>
    <th>Product</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Laptop</td>
    <td>$999</td>
  </tr>
</table>`,realWorldExample:"Tables are like spreadsheets or sports league standings. Each row is a record (like a player or team), and each column is a category (name, wins, losses). A train schedule is a perfect table - rows for different trains, columns for stations and times. Tables organize related data so you can quickly compare information across rows and columns."},{title:"thead, tbody, tfoot",definition:"Tables can be structured with <thead> for headers, <tbody> for body content, and <tfoot> for footers. This semantic structure helps browsers, screen readers, and printers handle tables better - for example, repeating headers on each printed page.",code:`<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>1</td>
      <td>$999</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>2</td>
      <td>$25</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td colspan="2">Total:</td>
      <td>$1049</td>
    </tr>
  </tfoot>
</table>`,realWorldExample:"Think of a receipt from a store. The <thead> is the header showing column names ('Item', 'Price'). The <tbody> is all your purchased items. The <tfoot> is the bottom showing subtotal, tax, and total. When printing a long table over multiple pages, the header and footer repeat on each page - just like multi-page receipts show store info at top and totals at bottom of each page."},{title:"Row & Column Span",definition:"The colspan attribute makes a cell span multiple columns, while rowspan makes it span multiple rows. This is useful for creating complex table layouts like merged cells in spreadsheets, calendar layouts, or timetables.",code:`<!-- Column span example -->
<table border="1">
  <tr>
    <th colspan="3">Student Grades</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>Math</th>
    <th>Science</th>
  </tr>
  <tr>
    <td>John</td>
    <td>90</td>
    <td>85</td>
  </tr>
</table>

<!-- Row span example -->
<table border="1">
  <tr>
    <th rowspan="2">Name</th>
    <th colspan="2">Grades</th>
  </tr>
  <tr>
    <th>Math</th>
    <th>Science</th>
  </tr>
  <tr>
    <td>John</td>
    <td>90</td>
    <td>85</td>
  </tr>
</table>`,realWorldExample:"Row and column spanning is like merging cells in Excel. Imagine a class schedule: Monday spans across morning and afternoon slots (rowspan), or 'Lunch Break' spans across all weekdays (colspan). In a tournament bracket, the winner's name spans across multiple rounds. Anytime you need one cell to cover the space of multiple cells, you use row or column spanning."},{title:"Table Accessibility",definition:"Accessible tables use <caption> for titles, <th> with scope attributes for headers, and proper structure so screen readers can navigate them. The scope attribute ('row' or 'col') helps assistive technology understand header relationships.",code:`<table>
  <caption>Monthly Sales Report 2026</caption>
  
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
      <th scope="col">Profit</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$10,000</td>
      <td>$2,000</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$12,000</td>
      <td>$2,500</td>
    </tr>
  </tbody>
</table>`,realWorldExample:"Accessible tables are like a well-organized filing system with clear labels. The caption is like the folder name. The scope attribute tells screen readers which way to read (across columns or down rows) - like telling someone 'read across each row' vs 'read down each column'. This helps blind users navigate tables just as clear labels help anyone find information in filing cabinets."},{title:"Form Input Types",definition:"HTML5 provides various input types for collecting different data: text, email, number, date, password, checkbox, radio, file, and more. Each type provides appropriate keyboard layouts on mobile devices and built-in validation.",code:`<form>
  <!-- Text input -->
  <input type="text" name="username" placeholder="Username">
  
  <!-- Email (validates format) -->
  <input type="email" name="email" placeholder="Email">
  
  <!-- Password (hidden characters) -->
  <input type="password" name="password">
  
  <!-- Number (with min/max) -->
  <input type="number" name="age" min="0" max="120">
  
  <!-- Date picker -->
  <input type="date" name="birthday">
  
  <!-- Checkbox -->
  <input type="checkbox" name="subscribe" id="sub">
  <label for="sub">Subscribe to newsletter</label>
  
  <!-- Radio buttons -->
  <input type="radio" name="gender" value="male" id="male">
  <label for="male">Male</label>
  <input type="radio" name="gender" value="female" id="female">
  <label for="female">Female</label>
  
  <!-- File upload -->
  <input type="file" name="avatar">
</form>`,realWorldExample:"Form inputs are like different types of questionnaire fields. Text input is like a blank line for writing. Checkboxes are like 'check all that apply' questions. Radio buttons are like multiple choice where you can only pick one. Date input is like those forms where you circle a calendar date. Number inputs have up/down arrows like counters. Each input type is specialized for its purpose, just like different question formats on paper forms."},{title:"Labels & Placeholders",definition:"Labels (<label>) describe form inputs and improve accessibility by allowing users to click the label to focus the input. Placeholders provide example text inside inputs. Labels are crucial for screen readers and should always be used, while placeholders are optional hints.",code:`<!-- Label with for attribute (recommended) -->
<label for="username">Username:</label>
<input type="text" id="username" name="username" 
       placeholder="Enter your username">

<!-- Label wrapping input (alternative) -->
<label>
  Email:
  <input type="email" name="email" 
         placeholder="you@example.com">
</label>

<!-- Multiple inputs with labels -->
<form>
  <label for="fname">First Name:</label>
  <input type="text" id="fname" 
         placeholder="John">
  
  <label for="lname">Last Name:</label>
  <input type="text" id="lname" 
         placeholder="Doe">
</form>`,realWorldExample:"Labels are like the questions on a form, while inputs are the blank spaces where you write answers. Placeholders are like light gray example text ('e.g., John Doe') that disappears when you start typing. Think of a job application: 'Name:' is the label (question), the blank line is the input, and 'First Last' in light text is the placeholder (example format). Labels stay visible; placeholders disappear."},{title:"Required & Pattern Validation",definition:"The required attribute makes fields mandatory before form submission. The pattern attribute validates input against a regular expression. Browsers show error messages automatically when validation fails, providing client-side validation without JavaScript.",code:`<form>
  <!-- Required field -->
  <label for="name">Name (required):</label>
  <input type="text" id="name" name="name" 
         required>
  
  <!-- Email validation (built-in) -->
  <label for="email">Email:</label>
  <input type="email" id="email" 
         required>
  
  <!-- Pattern validation (phone) -->
  <label for="phone">Phone (XXX-XXX-XXXX):</label>
  <input type="tel" id="phone" 
         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
         placeholder="123-456-7890"
         required>
  
  <!-- Password with requirements -->
  <label for="pwd">Password (min 8 chars):</label>
  <input type="password" id="pwd" 
         minlength="8" 
         required>
  
  <button type="submit">Submit</button>
</form>`,realWorldExample:"Form validation is like having a smart assistant check your forms before mailing them. Required fields are like mandatory questions marked with asterisks - you can't submit until they're filled. Pattern validation is like when forms say 'SSN must be XXX-XX-XXXX format' and reject '123456789'. The browser won't let you submit until everything's correct, saving you from rejection and re-submission later."},{title:"Form Submission Methods",definition:"Forms use the action attribute to specify where to send data and method to specify how. GET appends data to the URL (visible, for searches), while POST sends data in the request body (hidden, for sensitive data). The submit button triggers the submission.",code:`<!-- GET method (data in URL) -->
<form action="/search" method="GET">
  <input type="text" name="q" placeholder="Search">
  <button type="submit">Search</button>
</form>
<!-- Submits to: /search?q=searchterm -->

<!-- POST method (data hidden) -->
<form action="/register" method="POST">
  <label for="user">Username:</label>
  <input type="text" id="user" name="username">
  
  <label for="pass">Password:</label>
  <input type="password" id="pass" name="password">
  
  <button type="submit">Register</button>
</form>

<!-- Form with multiple submit buttons -->
<form action="/process" method="POST">
  <input type="text" name="data">
  <button type="submit" name="action" value="save">
    Save Draft
  </button>
  <button type="submit" name="action" value="publish">
    Publish
  </button>
</form>`,realWorldExample:"Form methods are like different ways to send mail. GET is like a postcard - the message is visible on the outside (URL), fine for non-sensitive info like searches. POST is like a sealed envelope - the contents are hidden, necessary for passwords and personal data. Search engines use GET so you can share search result URLs. Login forms use POST so passwords aren't visible in the URL bar or browser history."}]},{id:5,title:"Phase 5: Semantic HTML",icon:"🧩",topics:[{title:"Semantic Tags Overview",definition:"Semantic HTML uses elements that clearly describe their meaning and purpose: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>. These tags make code more readable for developers, accessible for users, and understandable for search engines, replacing generic <div> tags with meaningful structure.",code:`<!DOCTYPE html>
<html>
<body>
  <!-- Page header -->
  <header>
    <h1>Website Title</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  </header>
  
  <!-- Main content -->
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Article content...</p>
    </article>
    
    <aside>
      <h3>Related Links</h3>
    </aside>
  </main>
  
  <!-- Page footer -->
  <footer>
    <p>&copy; 2026 Company Name</p>
  </footer>
</body>
</html>`,realWorldExample:"Semantic HTML is like organizing a newspaper. Instead of calling everything 'box', you have specific sections: masthead (header), table of contents (nav), main story (main/article), sidebar ads (aside), and copyright info (footer). Just as newspaper sections have clear purposes, semantic tags tell browsers, search engines, and screen readers exactly what each part of your webpage is for."},{title:"Why Semantic HTML Matters",definition:"Semantic HTML improves accessibility (screen readers understand page structure), SEO (search engines better index content), maintainability (developers understand code faster), and future compatibility. It makes your HTML self-documenting and meaningful beyond just visual presentation.",code:`<!-- Bad: Non-semantic (divitis) -->
<div class="header">
  <div class="logo">Logo</div>
  <div class="menu">
    <div class="menu-item">Home</div>
  </div>
</div>

<!-- Good: Semantic -->
<header>
  <h1>Logo</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<!-- Screen readers can now skip to navigation,
     search engines understand page structure,
     developers see meaning at a glance -->`,realWorldExample:"Imagine walking into an unlabeled building versus one with clear signs. Non-semantic HTML is like a building where every room is called 'Room' - you need to go inside each to know its purpose. Semantic HTML is like having signs: 'Reception', 'Conference Hall', 'Exit'. Blind visitors (screen reader users) can navigate by signs, new employees (developers) understand the layout faster, and fire marshals (search engines) can map the building correctly."},{title:"SEO Benefits",definition:"Search engines use semantic HTML to better understand content hierarchy and importance. Proper heading structure (<h1>-<h6>), semantic sectioning (<article>, <nav>), and meaningful tags help search engines index your content accurately, potentially improving search rankings.",code:`<!-- SEO-friendly structure -->
<article>
  <!-- One H1 per page (main topic) -->
  <h1>Ultimate Guide to Web Development</h1>
  
  <!-- Organized hierarchy -->
  <section>
    <h2>HTML Basics</h2>
    <p>Content about HTML...</p>
    
    <h3>HTML Elements</h3>
    <p>More specific content...</p>
  </section>
  
  <section>
    <h2>CSS Styling</h2>
    <p>Content about CSS...</p>
  </section>
</article>

<!-- Search engines understand:
     - Main topic (H1)
     - Subtopics (H2)
     - Related content (sections) -->`,realWorldExample:"Semantic HTML for SEO is like writing a well-organized book with a clear table of contents, chapter headings, and subheadings. Search engines are like librarians cataloging books - they need clear structure to understand what your book (webpage) is about and where to file it. A book with proper chapters and headings gets cataloged correctly; a wall of text without structure gets poorly indexed, just like websites without semantic HTML."},{title:"Screen Reader Compatibility",definition:"Screen readers use semantic HTML to help blind users navigate. They can jump between landmarks (<nav>, <main>, <aside>), skip to content sections, and understand page structure. Proper semantics transform a visual layout into a logical auditory experience.",code:`<!-- Screen reader friendly -->
<header role="banner">
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#main">Skip to content</a></li>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main id="main" role="main">
  <article>
    <h1>Page Title</h1>
    <p>Content...</p>
  </article>
</main>

<aside role="complementary" aria-label="Sidebar">
  <h2>Related Articles</h2>
</aside>

<footer role="contentinfo">
  <p>Copyright info</p>
</footer>

<!-- Screen readers announce:
     "Banner region", "Navigation", 
     "Main content", "Complementary" -->`,realWorldExample:"Screen readers with semantic HTML are like having a tour guide in a museum who can say 'We're now entering the Egyptian exhibit (main), here's the navigation desk (nav), and on your right is the gift shop (aside).' Without semantic tags, it's like a guide saying 'Room, room, room' for everything - no context about what each space is for. Semantic tags are the signs and labels that make the tour meaningful."}]},{id:6,title:"Phase 6: Accessibility (A11y)",icon:"♿",topics:[{title:"WCAG Guidelines",definition:"WCAG (Web Content Accessibility Guidelines) are international standards for web accessibility. They follow four principles: Perceivable (users can perceive information), Operable (users can navigate), Understandable (content is clear), and Robust (works with assistive technologies). Levels range from A (basic) to AAA (highest).",code:`<!-- Perceivable: Alt text for images -->
<img src="chart.jpg" alt="Sales increased 50% in Q1 2026">

<!-- Operable: Keyboard navigation -->
<button type="button">Click Me</button>
<!-- (Works with keyboard, not just mouse) -->

<!-- Understandable: Clear labels -->
<label for="email">Email Address:</label>
<input type="email" id="email" 
       aria-describedby="email-help">
<small id="email-help">We'll never share your email</small>

<!-- Robust: Valid HTML -->
<!DOCTYPE html>
<html lang="en">
<!-- Proper structure works with all browsers -->`,realWorldExample:"WCAG is like building codes for construction. Just as buildings need ramps (Operable), clear exit signs (Understandable), fire alarms with lights and sounds (Perceivable), and must work during power outages (Robust), websites must work for everyone regardless of ability. Meeting these standards ensures your digital building is accessible to all visitors, not just those who can see, hear, or use a mouse."},{title:"ARIA Roles",definition:"ARIA (Accessible Rich Internet Applications) roles, states, and properties provide additional semantic information to assistive technologies. They fill gaps where native HTML lacks sufficient meaning, especially in dynamic web applications with custom widgets.",code:`<!-- ARIA roles for landmarks -->
<div role="navigation" aria-label="Main menu">
  <ul>...</ul>
</div>

<!-- Custom button made accessible -->
<div role="button" 
     tabindex="0"
     aria-pressed="false"
     onclick="toggle()">
  Toggle
</div>

<!-- Live regions (announce updates) -->
<div role="alert" aria-live="assertive">
  Form submitted successfully!
</div>

<!-- Descriptive labels -->
<button aria-label="Close dialog">
  <span aria-hidden="true">&times;</span>
</button>

<!-- Expanded/collapsed state -->
<button aria-expanded="false" 
        aria-controls="menu">
  Menu
</button>
<div id="menu" hidden>...</div>`,realWorldExample:"ARIA roles are like adding Braille labels and audio descriptions to a museum. The exhibits (HTML elements) exist, but ARIA adds extra context for people who can't see. A button shaped like an X needs aria-label='Close' so screen readers say 'Close button' instead of just 'X'. Live regions are like PA announcements - they interrupt to announce important updates, just like 'The museum closes in 10 minutes' over speakers."},{title:"Keyboard Navigation",definition:"Keyboard accessibility ensures users can navigate and interact with your site using only a keyboard (Tab, Enter, Arrow keys, Escape). Interactive elements must be focusable, focus order must be logical, and focus indicators must be visible. This helps users with motor disabilities and power users.",code:`<!-- Proper tab order (tabindex) -->
<div>
  <button tabindex="0">First (natural order)</button>
  <a href="#" tabindex="0">Second</a>
  <div tabindex="-1">Not in tab order</div>
</div>

<!-- Custom widget with keyboard support -->
<div role="button"
     tabindex="0"
     onkeydown="if(event.key==='Enter' || 
                event.key===' ') handleClick()">
  Press Enter or Space
</div>

<!-- Skip navigation link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Focus management -->
<style>
  /* Visible focus indicator */
  button:focus {
    outline: 2px solid blue;
    outline-offset: 2px;
  }
</style>`,realWorldExample:"Keyboard navigation is like designing a building where elevators and stairs go to all floors, not just some. Mouse users can 'fly' directly to any element, but keyboard users 'walk' step by step using Tab. A skip link is like an express elevator to skip the lobby (header/nav) and go straight to main content. Focus indicators are like highlighting each floor button as the elevator arrives - you need to see where you are."},{title:"Screen Reader Testing",definition:"Screen reader testing involves using assistive technology (NVDA, JAWS, VoiceOver) to experience your site as blind users do. This reveals issues invisible to sighted users, like missing alt text, poor heading structure, or confusing navigation. Regular testing ensures your site is truly accessible.",code:`<!-- Screen reader best practices -->

<!-- 1. Meaningful alt text -->
<img src="chart.jpg" 
     alt="Bar chart showing 50% sales increase">
<!-- Not: alt="chart" or alt="image" -->

<!-- 2. Descriptive links -->
<a href="report.pdf">Download Q1 2026 Report (PDF, 2MB)</a>
<!-- Not: <a href="report.pdf">Click here</a> -->

<!-- 3. Logical heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
<!-- Not: <h1>, <h3>, <h2> (skipping/wrong order) -->

<!-- 4. Hidden content from screen readers -->
<span aria-hidden="true">★★★★☆</span>
<span class="sr-only">4 out of 5 stars</span>`,realWorldExample:"Screen reader testing is like navigating a city blindfolded with only audio directions. If street signs aren't announced (missing alt text), directions are unclear ('turn here' vs 'turn left at Main Street'), or the map is in the wrong order (heading chaos), you'll get lost. Testing with a screen reader reveals these navigation problems. It's experiencing your website the way millions of blind users do every day."},{title:"Color Contrast Awareness",definition:"Sufficient color contrast between text and background ensures readability for users with low vision or color blindness. WCAG requires a 4.5:1 contrast ratio for normal text and 3:1 for large text (Level AA). Tools can check if your color combinations meet these standards.",code:`<!-- Good contrast examples -->
<style>
  /* High contrast (passes WCAG AA) */
  .good {
    color: #000000; /* Black */
    background: #FFFFFF; /* White */
    /* Ratio: 21:1 - Excellent! */
  }
  
  .also-good {
    color: #333333; /* Dark gray */
    background: #FFFFFF; /* White */
    /* Ratio: 12.6:1 - Great! */
  }
  
  /* Poor contrast (fails WCAG) */
  .bad {
    color: #777777; /* Light gray */
    background: #FFFFFF; /* White */
    /* Ratio: 4.5:1 - Borderline */
  }
  
  .very-bad {
    color: #CCCCCC; /* Very light gray */
    background: #FFFFFF; /* White */
    /* Ratio: 1.6:1 - Fails! */
  }
</style>`,realWorldExample:"Color contrast is like reading in different lighting conditions. High contrast (black on white) is like reading in bright sunlight - easy for everyone. Low contrast (light gray on white) is like reading in dim candlelight - difficult even for people with perfect vision. For people with low vision or color blindness, it's like reading in near-darkness. Proper contrast is like turning on proper lights - it helps everyone, but it's essential for some."},{title:"Accessible Forms & Tables",definition:"Accessible forms use proper labels, fieldsets for grouping, error messages associated with fields, and clear instructions. Accessible tables use headers, captions, scope attributes, and summaries to help screen reader users navigate and understand tabular data.",code:`<!-- Accessible Form -->
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="name">Full Name:</label>
    <input type="text" id="name" 
           aria-required="true"
           aria-describedby="name-error">
    <span id="name-error" role="alert"></span>
    
    <label for="email">Email:</label>
    <input type="email" id="email" required>
  </fieldset>
  
  <button type="submit">Submit</button>
</form>

<!-- Accessible Table -->
<table>
  <caption>Employee Sales Q1 2026</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John</th>
      <td>$50,000</td>
    </tr>
  </tbody>
</table>`,realWorldExample:"Accessible forms are like well-designed paper forms with clear instructions, grouped sections (Personal Info, Payment Info), and labels directly next to each field. Screen readers need the same clarity - which label goes with which field, what's required, what's the error. Accessible tables are like spreadsheets with column and row headers frozen in place - you always know what each number represents even when scrolling."}]},{id:7,title:"Phase 7: Advanced HTML5 Features",icon:"⚙️",topics:[{title:"HTML Data Attributes",definition:"Data attributes (data-*) let you store custom data on HTML elements without affecting presentation or semantics. JavaScript can read and modify these values, making them perfect for storing configuration, state, or identifiers that don't belong in classes or IDs.",code:`<!-- Storing custom data -->
<article data-post-id="12345" 
         data-author="John"
         data-category="technology">
  Article content
</article>

<!-- JavaScript access -->
<button data-action="delete" 
        data-confirm="Are you sure?"
        onclick="handleAction(this)">
  Delete
</button>

<script>
function handleAction(btn) {
  const action = btn.dataset.action;
  const message = btn.dataset.confirm;
  if (confirm(message)) {
    // perform action
  }
}
<\/script>

<!-- Multiple data attributes -->
<div data-user-id="789"
     data-user-role="admin"
     data-user-status="active">
  User profile
</div>`,realWorldExample:"Data attributes are like invisible sticky notes attached to objects. Imagine a library where books (elements) have visible labels (classes, IDs) and hidden notes (data attributes) for staff. A book might show 'Fiction' (class) but have a hidden note with inventory number, last checkout date, and location code (data attributes). Patrons see the cover, but the library system reads the hidden data to manage the book."},{title:"Meta Tags (SEO, Viewport, Charset)",definition:"Meta tags provide metadata about the HTML document, including character encoding, viewport settings for responsive design, and SEO information like descriptions and keywords. They go in the <head> section and don't display on the page but affect how browsers and search engines handle your content.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character encoding (always first) -->
  <meta charset="UTF-8">
  
  <!-- Responsive viewport -->
  <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
  
  <!-- SEO meta tags -->
  <meta name="description" 
        content="Learn HTML with easy examples and tutorials">
  <meta name="keywords" 
        content="HTML, tutorial, web development">
  <meta name="author" content="John Doe">
  
  <!-- Social media (Open Graph) -->
  <meta property="og:title" content="HTML Guide">
  <meta property="og:description" content="Complete HTML tutorial">
  <meta property="og:image" content="preview.jpg">
  
  <title>HTML Learning Guide</title>
</head>`,realWorldExample:"Meta tags are like the card catalog entry for a library book - information about the book, not the content itself. Charset is like declaring the language alphabet used. Viewport is like telling a reader whether to hold the book portrait or landscape. Description is the summary on the back cover. Just as librarians use catalog cards to organize books, search engines use meta tags to understand and rank your website."},{title:"Favicon & Manifest",definition:"A favicon is the small icon displayed in browser tabs and bookmarks. The web app manifest is a JSON file that defines how your app appears when installed on mobile devices, including icons, colors, and display mode. Together they make your site recognizable and installable.",code:`<!DOCTYPE html>
<html>
<head>
  <!-- Favicon (multiple sizes) -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" 
        href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" 
        href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" 
        href="/apple-touch-icon.png">
  
  <!-- Web app manifest -->
  <link rel="manifest" href="/manifest.json">
  
  <title>My Website</title>
</head>
</html>

<!-- manifest.json file -->
{
  "name": "My Web App",
  "short_name": "MyApp",
  "icons": [{
    "src": "/icon-192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "theme_color": "#2196F3",
  "background_color": "#FFFFFF",
  "display": "standalone"
}`,realWorldExample:"A favicon is like a logo on a business card - a small icon that identifies your brand. When you have dozens of browser tabs open, favicons help you find the right one, just like logos on app icons help you find apps on your phone. The manifest is like installation instructions that tell phones how to save your website as an app - what icon to use, what color scheme, whether to hide the browser bar."},{title:"Iframe Usage",definition:"The <iframe> element embeds another HTML page within the current page, creating a page-within-a-page. Common uses include embedding videos (YouTube), maps (Google Maps), or third-party widgets. Iframes run in isolation for security but can communicate with the parent page if from the same origin.",code:`<!-- Basic iframe -->
<iframe src="https://example.com" 
        width="800" 
        height="600"
        title="Example Website">
</iframe>

<!-- YouTube video embed -->
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media"
  allowfullscreen>
</iframe>

<!-- Google Maps embed -->
<iframe 
  src="https://www.google.com/maps/embed?pb=..."
  width="600" height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>

<!-- Security: sandbox attribute -->
<iframe src="untrusted.html" 
        sandbox="allow-scripts">
</iframe>`,realWorldExample:"An iframe is like a TV within a TV - picture-in-picture mode. The main channel (your webpage) continues playing while a smaller screen (iframe) shows different content. YouTube embeds are iframes showing YouTube's player on your page. Just as the small TV has its own remote and doesn't interfere with the main TV, iframes are isolated - they can't access your page's data for security, but you can still watch the content."},{title:"HTML Entities",definition:"HTML entities are special codes for displaying reserved characters (<, >, &), symbols (©, ™), and non-keyboard characters (€, é, ™). They start with & and end with ; preventing conflicts with HTML syntax and enabling international characters.",code:`<!-- Reserved characters -->
&lt;   <!-- < (less than) -->
&gt;   <!-- > (greater than) -->
&amp;  <!-- & (ampersand) -->
&quot; <!-- " (quote) -->
&#39;  <!-- ' (apostrophe) -->

<!-- Common symbols -->
&copy;   <!-- © (copyright) -->
&reg;    <!-- ® (registered) -->
&trade;  <!-- ™ (trademark) -->
&euro;   <!-- € (euro) -->
&pound;  <!-- £ (pound) -->

<!-- Example usage -->
<p>Use &lt;p&gt; tags for paragraphs</p>
<!-- Displays: Use <p> tags for paragraphs -->

<p>Price: &euro;49.99</p>
<!-- Displays: Price: €49.99 -->

<p>&copy; 2026 Company Name</p>
<!-- Displays: © 2026 Company Name -->

<!-- Non-breaking space -->
<p>Mr.&nbsp;Smith</p>
<!-- Keeps "Mr. Smith" on same line -->`,realWorldExample:"HTML entities are like escape codes or keyboard shortcuts for special characters. Imagine writing on a computer where '<' would always try to create a tag - you need a special code (&lt;) to actually display '<' as text. It's like typing 'copyright symbol' when you can't find © on your keyboard. Entities are the HTML keyboard's special key combinations for accessing symbols not directly available."},{title:"Custom Data Attributes in Practice",definition:"Custom data attributes shine in real applications for storing state, configuration, and relationships. They work with CSS for styling based on state and with JavaScript for interactive features, avoiding the need for global variables or complex DOM queries.",code:`<!-- Tabs with data attributes -->
<div class="tabs">
  <button data-tab="home" class="active">Home</button>
  <button data-tab="profile">Profile</button>
  <button data-tab="settings">Settings</button>
</div>

<div data-tab-content="home">Home content</div>
<div data-tab-content="profile" hidden>Profile content</div>
<div data-tab-content="settings" hidden>Settings content</div>

<!-- Accordion with state -->
<div class="accordion-item" data-expanded="false">
  <h3 data-toggle>Click to expand</h3>
  <div data-content>Hidden content</div>
</div>

<!-- Product with multiple data points -->
<div class="product" 
     data-id="12345"
     data-price="29.99"
     data-stock="in-stock"
     data-category="electronics">
  <h4>Product Name</h4>
  <button data-action="add-to-cart">Add to Cart</button>
</div>

<!-- CSS can style based on data attributes -->
<style>
  [data-stock="out-of-stock"] {
    opacity: 0.5;
  }
  [data-expanded="true"] [data-content] {
    display: block;
  }
</style>`,realWorldExample:"Data attributes in practice are like barcode stickers on products in a store. Each item (element) has visible labels (brand, price tag) and a barcode (data attributes) that scanners (JavaScript) read for inventory, pricing, and tracking. The barcode doesn't affect how customers see the product, but it's essential for store operations. Similarly, data attributes store information for your website's functionality without cluttering the visible content."}]},{id:8,title:"Phase 8: SEO & Performance",icon:"🔐",topics:[{title:"Meta Title & Description",definition:"The <title> tag defines the page title shown in browser tabs and search results (50-60 characters ideal). Meta descriptions summarize page content in search results (150-160 characters). Both significantly impact click-through rates from search engines and should be unique for each page.",code:`<head>
  <!-- Page title (appears in tab and search results) -->
  <title>Learn HTML - Complete Beginner's Guide 2026</title>
  
  <!-- Meta description (appears in search results) -->
  <meta name="description" 
        content="Master HTML with our comprehensive guide. 
        Learn tags, elements, forms, and semantic HTML 
        with practical examples. Perfect for beginners!">
  
  <!-- Bad examples to avoid -->
  <!-- Too short: <title>HTML</title> -->
  <!-- Too long: <title>Learn HTML CSS JavaScript...</title> -->
  <!-- Not unique: <title>Home</title> -->
</head>`,realWorldExample:"Title and description are like a book's spine and back cover text in a library. The title (on the spine) helps people find your book when browsing shelves (search results). The description (back cover summary) convinces them to pick it up and read more. A vague title like 'Book' or missing description won't attract readers. Specific, compelling titles and descriptions are like good marketing - they earn clicks and visits."},{title:"Heading Hierarchy",definition:"Proper heading hierarchy uses <h1> through <h6> in logical order to structure content. Each page should have one <h1> (main topic), followed by <h2> for sections, <h3> for subsections, etc. Don't skip levels or use headings for styling - this helps SEO and accessibility.",code:`<!-- Correct heading hierarchy -->
<article>
  <h1>Complete Guide to Web Development</h1>
  
  <h2>Frontend Development</h2>
  <p>Introduction to frontend...</p>
  
    <h3>HTML Basics</h3>
    <p>HTML content...</p>
    
      <h4>HTML Elements</h4>
      <p>Element details...</p>
    
    <h3>CSS Styling</h3>
    <p>CSS content...</p>
  
  <h2>Backend Development</h2>
  <p>Backend content...</p>
</article>

<!-- WRONG: Skipping levels -->
<h1>Title</h1>
<h3>Skipped H2!</h3> <!-- Bad! -->

<!-- WRONG: Multiple H1s -->
<h1>First Title</h1>
<h1>Second Title</h1> <!-- Bad! -->`,realWorldExample:"Heading hierarchy is like an outline for a research paper or a table of contents in a book. The main title is H1 (the book title), chapter titles are H2 (major sections), section titles are H3 (subsections), and so on. You wouldn't jump from Chapter 1 directly to subsection 1.2.1 without section 1.2. Search engines and screen readers navigate your content the same way - logical hierarchy helps them understand structure and importance."},{title:"Semantic Markup for SEO",definition:"Search engines understand semantic HTML better than generic divs. Using <article>, <header>, <nav>, <main>, <aside>, and <footer> helps search engines identify important content, navigation, and supplementary information, improving how they index and rank your pages.",code:`<!-- SEO-friendly semantic structure -->
<header>
  <h1>Website Name</h1>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <header>
      <h1>Article Title: How to Learn HTML</h1>
      <p>Published: <time datetime="2026-02-01">Feb 1, 2026</time></p>
      <p>By: <span itemprop="author">John Doe</span></p>
    </header>
    
    <p>Article content with proper semantic markup...</p>
    
    <footer>
      <p>Tags: <a href="/tags/html">HTML</a></p>
    </footer>
  </article>
  
  <aside>
    <h2>Related Articles</h2>
  </aside>
</main>

<footer>
  <p>&copy; 2026</p>
</footer>`,realWorldExample:"Semantic markup for SEO is like organizing a newspaper with clear sections: masthead, headlines, main story, sidebar, and footer. Search engine crawlers are like speed readers who scan section headings to understand content quickly. A newspaper where everything is unlabeled paragraphs is hard to scan. Similarly, a website using only <div> tags forces search engines to guess what's important, while semantic tags clearly label 'this is navigation', 'this is main content', 'this is supplementary'."},{title:"Image Optimization",definition:"Optimized images load faster through proper formatting, compression, and sizing. Use appropriate formats (JPEG for photos, PNG for graphics, SVG for icons, WebP for modern browsers), compress without visible quality loss, specify dimensions, and use lazy loading for images below the fold.",code:`<!-- Optimized image with dimensions -->
<img src="photo-800.jpg" 
     alt="Sunset over mountains"
     width="800" 
     height="600"
     loading="lazy">

<!-- Responsive images (browser picks best size) -->
<img src="photo-800.jpg"
     srcset="photo-400.jpg 400w,
             photo-800.jpg 800w,
             photo-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 
            (max-width: 1200px) 50vw,
            800px"
     alt="Optimized responsive image">

<!-- Modern format with fallback -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Fallback image">
</picture>

<!-- Lazy loading (loads when scrolled into view) -->
<img src="below-fold.jpg" 
     loading="lazy" 
     alt="Loads when needed">`,realWorldExample:"Image optimization is like choosing the right vehicle for a delivery. You wouldn't send a semi-truck to deliver a letter (huge image for a thumbnail), nor would you use a bicycle for furniture (tiny image blown up). JPEG is the compact car (good for most photos), PNG is the pickup truck (handles transparency/graphics), SVG is the motorcycle (tiny, perfect for icons), and WebP is the electric car (modern, efficient). Lazy loading is like only dispatching vehicles when orders come in."},{title:"Structured Data Basics",definition:"Structured data (Schema.org markup) helps search engines understand your content's meaning - whether it's a recipe, event, product, review, etc. This can earn rich snippets in search results (star ratings, prices, cooking times) that improve click-through rates and visibility.",code:`<!-- Article structured data -->
<article itemscope itemtype="https://schema.org/Article">
  <h1 itemprop="headline">How to Bake Chocolate Cake</h1>
  <p>By <span itemprop="author">Jane Chef</span></p>
  <time itemprop="datePublished" datetime="2026-02-01">
    Feb 1, 2026
  </time>
  <div itemprop="articleBody">
    <p>Article content...</p>
  </div>
</article>

<!-- Recipe structured data (rich snippets) -->
<div itemscope itemtype="https://schema.org/Recipe">
  <h2 itemprop="name">Chocolate Cake</h2>
  <img itemprop="image" src="cake.jpg" alt="Chocolate cake">
  <p itemprop="description">Delicious chocolate cake</p>
  
  <span itemprop="prepTime" content="PT30M">30 min prep</span>
  <span itemprop="cookTime" content="PT45M">45 min cook</span>
  
  <div itemprop="aggregateRating" 
       itemscope itemtype="https://schema.org/AggregateRating">
    <span itemprop="ratingValue">4.8</span> stars
    (<span itemprop="reviewCount">127</span> reviews)
  </div>
</div>`,realWorldExample:"Structured data is like adding universal barcodes to products. Without barcodes, a store clerk must read labels and guess categories. With barcodes, scanners instantly know everything - price, brand, category. Similarly, without structured data, search engines parse your HTML and guess what it is. With Schema.org markup, you explicitly tell Google 'this is a recipe with 4.8 stars, 30 min prep time', earning special formatting in search results, just like verified products get prime shelf space."},{title:"Performance Best Practices",definition:"HTML performance involves minimizing file size, reducing HTTP requests, lazy loading non-critical resources, and optimizing the critical rendering path. Techniques include inlining critical CSS, deferring JavaScript, preloading important assets, and using efficient HTML structure.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  
  <!-- Preload critical assets -->
  <link rel="preload" href="critical.css" as="style">
  <link rel="preload" href="logo.webp" as="image">
  
  <!-- Inline critical CSS (above fold) -->
  <style>
    /* Critical CSS here */
    header { background: #333; }
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="stylesheet" href="styles.css" media="print" 
        onload="this.media='all'">
</head>
<body>
  <!-- Content here -->
  
  <!-- Defer JavaScript (loads after HTML) -->
  <script src="app.js" defer><\/script>
  
  <!-- Async for independent scripts -->
  <script src="analytics.js" async><\/script>
  
  <!-- Lazy load images -->
  <img src="hero.jpg" alt="Hero">
  <img src="feature.jpg" loading="lazy" alt="Feature">
</body>
</html>`,realWorldExample:"Performance optimization is like organizing a restaurant kitchen for fast service. Critical CSS/assets are like having knives, pans, and ingredients at arm's reach (preloaded, inline). Defer is like starting appetizers before mains (load HTML first, JavaScript after). Async is like having independent stations (salad station works independently of grill). Lazy loading is like only cooking desserts when ordered, not preparing them for everyone upfront. Efficiency = faster service (page loads)."}]},{id:9,title:"Phase 9: Tools & Best Practices",icon:"🛠️",topics:[{title:"Code Formatting & Readability",definition:"Well-formatted HTML uses consistent indentation (2 or 4 spaces), meaningful tag names, proper nesting, and logical organization. Readable code helps team collaboration, maintenance, and debugging. Use comments for complex sections but keep code self-documenting through semantic HTML.",code:`<!-- GOOD: Properly formatted HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Well Formatted Page</title>
</head>
<body>
  <!-- Main navigation -->
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
  
  <main>
    <article>
      <h1>Article Title</h1>
      <p>Paragraph with proper indentation.</p>
    </article>
  </main>
</body>
</html>

<!-- BAD: Poor formatting -->
<html><head><title>Bad</title></head><body><div>
<p>No indentation</p><div><span>Hard to read
</span></div></div></body></html>`,realWorldExample:"Code formatting is like organizing a closet versus throwing clothes in a pile. A well-organized closet has sections (shirts, pants, accessories), items folded uniformly, and everything in its place - you can find what you need quickly. Messy code is like a clothes pile - it works, but finding or changing anything is frustrating. Proper indentation shows parent-child relationships, like hangers showing which accessories belong to which outfits."},{title:"HTML Validation (W3C)",definition:"The W3C validator checks HTML against official standards, catching errors like unclosed tags, invalid attributes, or improper nesting. Valid HTML ensures cross-browser compatibility, better SEO, and fewer bugs. Use validator.w3.org to check your code regularly.",code:`<!-- Valid HTML example -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Valid Page</title>
</head>
<body>
  <h1>Heading</h1>
  <p>Paragraph with <strong>bold</strong> text.</p>
  <img src="image.jpg" alt="Description">
</body>
</html>

<!-- Common validation errors -->

<!-- ERROR: Unclosed tag -->
<p>Paragraph
<!-- Missing </p> -->

<!-- ERROR: Invalid nesting -->
<p>Text <div>Block inside inline</div></p>
<!-- Can't put block element inside <p> -->

<!-- ERROR: Missing required attribute -->
<img src="photo.jpg">
<!-- Missing alt attribute -->

<!-- ERROR: Duplicate IDs -->
<div id="main">Content</div>
<div id="main">More content</div>
<!-- IDs must be unique -->`,realWorldExample:"HTML validation is like spell-check and grammar-check for code. Just as Microsoft Word underlines errors in documents, W3C validator catches HTML mistakes. A document with spelling errors might be readable but looks unprofessional and could confuse readers. Invalid HTML might display in some browsers but break in others, fail accessibility tools, or hurt SEO - like how typos might confuse readers or look bad in print."},{title:"Version Control (Git Basics)",definition:"Version control systems like Git track changes to your code over time, allowing you to revert mistakes, collaborate with teams, and maintain history. Basic concepts include commits (save points), branches (parallel versions), and repositories (project storage).",code:`<!-- Not actual HTML, but Git commands for HTML projects -->

<!-- Initialize Git repository -->
git init

<!-- Track HTML files -->
git add index.html
git add styles.css
git add *.html

<!-- Save changes with message -->
git commit -m "Add homepage HTML structure"

<!-- Create branch for new feature -->
git branch new-feature
git checkout new-feature

<!-- Make changes to HTML -->
<!-- ... edit index.html ... -->

<!-- Commit changes -->
git add index.html
git commit -m "Add contact form to homepage"

<!-- Merge back to main -->
git checkout main
git merge new-feature

<!-- View history -->
git log`,realWorldExample:"Git is like a time machine for your code with multiple timelines. Each commit is a save point you can return to - like checkpoints in a video game. Branches are parallel universes where you can experiment (try a new homepage design) without affecting the main timeline. If the experiment works, merge it back; if not, delete the branch. It's essential for teams - like Google Docs version history, but more powerful."},{title:"Clean & Maintainable Markup",definition:"Maintainable HTML is semantic, modular, DRY (Don't Repeat Yourself), and follows conventions. Use components/partials for repeated elements, avoid inline styles, keep structure separate from presentation, and write code that others (including future you) can understand.",code:`<!-- GOOD: Clean, maintainable -->
<header class="site-header">
  <nav class="main-nav">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
      </li>
    </ul>
  </nav>
</header>

<!-- BAD: Hard to maintain -->
<div style="background:blue;padding:20px;">
  <div style="display:flex;">
    <div style="margin:10px;">
      <a href="/" style="color:white;text-decoration:none;">
        Home
      </a>
    </div>
  </div>
</div>

<!-- GOOD: Reusable component structure -->
<!-- card.html partial -->
<article class="card">
  <img class="card-image" src="" alt="">
  <h3 class="card-title"></h3>
  <p class="card-description"></p>
</article>

<!-- Include card multiple times -->
<!-- (with templating or components) -->`,realWorldExample:"Maintainable code is like IKEA furniture with instructions versus a custom built-in bookshelf. IKEA furniture (modular, maintainable code) can be assembled by anyone following instructions, moved to different rooms, or repaired by replacing parts. Custom built-ins (messy code with inline styles) work but are hard to modify, can't be moved, and only the original builder understands them. Use consistent patterns like IKEA uses standard parts."},{title:"HTML Coding Standards",definition:"Coding standards are agreed-upon conventions for HTML structure, naming, and organization. Common standards include lowercase tag names, double quotes for attributes, meaningful class names, file organization, and documentation. Following standards ensures team consistency.",code:`<!-- Standard conventions -->

<!-- 1. Lowercase tags and attributes -->
<div class="container">  <!-- Good -->
<DIV CLASS="container">  <!-- Bad -->

<!-- 2. Double quotes for attributes -->
<img src="photo.jpg" alt="Photo">  <!-- Good -->
<img src='photo.jpg' alt='Photo'>  <!-- Acceptable but inconsistent -->

<!-- 3. Meaningful class names -->
<button class="btn-primary">  <!-- Good: descriptive -->
<button class="b1">           <!-- Bad: unclear -->

<!-- 4. Semantic HTML over divs -->
<article>  <!-- Good -->
<div class="article">  <!-- Bad -->

<!-- 5. Proper indentation (2 or 4 spaces) -->
<div>
  <p>Properly indented</p>
</div>

<!-- 6. Comments for complex sections -->
<!-- Primary navigation -->
<nav>...</nav>

<!-- 7. Organize attributes logically -->
<img 
  class="hero-image"
  src="hero.jpg" 
  alt="Hero image"
  width="1200"
  height="600"
  loading="lazy">`,realWorldExample:"Coding standards are like grammar rules for writing. Just as books follow grammar conventions (capitalize sentences, use punctuation), code follows standards (lowercase tags, meaningful names). A book with inconsistent capitalization and no punctuation is hard to read. Code without standards is like mixing British and American English randomly - understandable but confusing. Standards ensure everyone on the team 'speaks the same dialect' making collaboration smooth."}]},{id:10,title:"Phase 10: Real-World Projects",icon:"📁",topics:[{title:"Personal Portfolio Page",definition:"A portfolio page showcases your skills, projects, and experience. It should include a header with navigation, hero section with introduction, projects section with examples, skills/about section, contact information, and footer. Use semantic HTML and proper structure.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Web Developer Portfolio</title>
  <meta name="description" content="Portfolio of John Doe, 
        a web developer specializing in HTML, CSS, and JavaScript">
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="hero">
      <h1>John Doe</h1>
      <p>Web Developer & Designer</p>
    </section>
    
    <section id="about">
      <h2>About Me</h2>
      <p>Passionate web developer with expertise in...</p>
    </section>
    
    <section id="projects">
      <h2>My Projects</h2>
      <article class="project">
        <h3>E-commerce Website</h3>
        <img src="project1.jpg" alt="E-commerce project">
        <p>Built a full e-commerce site with...</p>
      </article>
    </section>
    
    <section id="contact">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:john@example.com">
         john@example.com</a></p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 John Doe</p>
  </footer>
</body>
</html>`,realWorldExample:"A portfolio website is like a digital business card and resume combined. Just as a business card shows your name, title, and contact info, your hero section does the same. The projects section is like your resume's work experience - showcasing what you've built. The about section is your elevator pitch. It's your professional presence online, like how artists have gallery exhibitions, but yours is accessible 24/7 worldwide."},{title:"Resume Website",definition:"A resume website presents your professional experience in web format. Include personal info, professional summary, work experience, education, skills, and downloadable PDF resume. Use proper semantic markup for SEO and accessibility, making it easy for recruiters to find and read.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>John Doe - Resume</title>
  <meta name="description" content="Resume of John Doe, 
        Software Developer with 5 years experience">
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Software Developer</p>
    <p>Email: john@example.com | Phone: (555) 123-4567</p>
    <p><a href="resume.pdf" download>Download PDF Resume</a></p>
  </header>
  
  <main>
    <section id="summary">
      <h2>Professional Summary</h2>
      <p>Experienced developer with expertise in...</p>
    </section>
    
    <section id="experience">
      <h2>Work Experience</h2>
      <article>
        <h3>Senior Developer</h3>
        <p>Tech Company Inc. | 2022 - Present</p>
        <ul>
          <li>Led team of 5 developers</li>
          <li>Increased performance by 40%</li>
        </ul>
      </article>
      
      <article>
        <h3>Junior Developer</h3>
        <p>Startup Co. | 2019 - 2022</p>
        <ul>
          <li>Developed web applications</li>
          <li>Maintained codebase</li>
        </ul>
      </article>
    </section>
    
    <section id="education">
      <h2>Education</h2>
      <article>
        <h3>Bachelor of Science in Computer Science</h3>
        <p>University Name | 2015 - 2019</p>
      </article>
    </section>
    
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>Git, Agile</li>
      </ul>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 John Doe</p>
  </footer>
</body>
</html>`,realWorldExample:"A resume website is like having your paper resume displayed in a store window instead of sitting in a drawer. It's accessible 24/7, searchable by Google (recruiters can find you), easily updated (no need to print new copies), and can include clickable links to your projects and social profiles. It's your paper resume evolved - still contains the same sections (experience, education, skills) but in an interactive, always-accessible format."},{title:"Landing Page",definition:"A landing page is focused on one goal: converting visitors (signing up, buying, downloading). It includes a compelling headline, benefits/features, social proof (testimonials), clear call-to-action, and minimal distractions. Every element serves the conversion goal.",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Learn HTML - Free Course</title>
  <meta name="description" content="Master HTML in 30 days 
        with our free course. Join 10,000+ students.">
</head>
<body>
  <!-- Hero section with CTA -->
  <section id="hero">
    <h1>Master HTML in 30 Days</h1>
    <p>Join 10,000+ students learning web development</p>
    
    <!-- Primary CTA -->
    <form action="/signup" method="POST">
      <input type="email" name="email" 
             placeholder="Enter your email" required>
      <button type="submit">Start Free Course</button>
    </form>
  </section>
  
  <!-- Benefits section -->
  <section id="benefits">
    <h2>What You'll Learn</h2>
    <article>
      <h3>Build Real Websites</h3>
      <p>Create professional websites from scratch</p>
    </article>
    <article>
      <h3>Lifetime Access</h3>
      <p>Learn at your own pace, forever</p>
    </article>
    <article>
      <h3>Certificate</h3>
      <p>Get certified upon completion</p>
    </article>
  </section>
  
  <!-- Social proof -->
  <section id="testimonials">
    <h2>What Students Say</h2>
    <blockquote>
      <p>"This course changed my career!"</p>
      <footer>- Sarah, Web Developer</footer>
    </blockquote>
  </section>
  
  <!-- Final CTA -->
  <section id="cta">
    <h2>Ready to Start?</h2>
    <form action="/signup" method="POST">
      <input type="email" name="email" required>
      <button type="submit">Join Free Now</button>
    </form>
  </section>
  
  <footer>
    <p>&copy; 2026 HTML Course</p>
  </footer>
</body>
</html>`,realWorldExample:"A landing page is like a focused sales pitch or infomercial. Unlike a website with many pages and goals, a landing page has one mission (like an infomercial selling one product). The headline grabs attention ('Wait, there's more!'), benefits show value ('It slices, dices...'), testimonials build trust ('Here's what customers say'), and the CTA demands action ('Call now!'). Everything - design, copy, structure - pushes visitors toward that one goal: sign up, buy, or download."}]}];function of(){const[T,_]=bt.useState(0),[h,A]=bt.useState(0);return k.jsxs("div",{className:"flex h-screen bg-gray-950 text-gray-100",children:[k.jsx(rf,{phases:Ou,selectedPhase:T,selectedTopic:h,onPhaseSelect:_,onTopicSelect:A}),k.jsx(lf,{phase:Ou[T],topicIndex:h})]})}Ud.createRoot(document.getElementById("root")).render(k.jsx(of,{}));
