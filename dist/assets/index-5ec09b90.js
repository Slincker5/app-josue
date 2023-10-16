(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function D6(c,a){const e=Object.create(null),r=c.split(",");for(let s=0;s<r.length;s++)e[r[s]]=!0;return a?s=>!!e[s.toLowerCase()]:s=>!!e[s]}const c2={},D1=[],T2=()=>{},Ki=()=>!1,Yi=/^on[^a-z]/,u4=c=>Yi.test(c),_6=c=>c.startsWith("onUpdate:"),t2=Object.assign,O6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Xi=Object.prototype.hasOwnProperty,G=(c,a)=>Xi.call(c,a),U=Array.isArray,n3=c=>v4(c)==="[object Map]",Qi=c=>v4(c)==="[object Set]",I=c=>typeof c=="function",u2=c=>typeof c=="string",U6=c=>typeof c=="symbol",n2=c=>c!==null&&typeof c=="object",U5=c=>n2(c)&&I(c.then)&&I(c.catch),Ji=Object.prototype.toString,v4=c=>Ji.call(c),Zi=c=>v4(c).slice(8,-1),cl=c=>v4(c)==="[object Object]",I6=c=>u2(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,Y3=D6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},al=/-(\w)/g,G2=H4(c=>c.replace(al,(a,e)=>e?e.toUpperCase():"")),el=/\B([A-Z])/g,K1=H4(c=>c.replace(el,"-$1").toLowerCase()),z4=H4(c=>c.charAt(0).toUpperCase()+c.slice(1)),K4=H4(c=>c?`on${z4(c)}`:""),v3=(c,a)=>!Object.is(c,a),X3=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},e4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},t6=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let p8;const o6=()=>p8||(p8=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function q6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++){const r=c[e],s=u2(r)?il(r):q6(r);if(s)for(const n in s)a[n]=s[n]}return a}else{if(u2(c))return c;if(n2(c))return c}}const rl=/;(?![^(]*\))/g,sl=/:([^]+)/,nl=/\/\*[^]*?\*\//g;function il(c){const a={};return c.replace(nl,"").split(rl).forEach(e=>{if(e){const r=e.split(sl);r.length>1&&(a[r[0].trim()]=r[1].trim())}}),a}function W6(c){let a="";if(u2(c))a=c;else if(U(c))for(let e=0;e<c.length;e++){const r=W6(c[e]);r&&(a+=r+" ")}else if(n2(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const ll="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fl=D6(ll);function I5(c){return!!c||c===""}let y2;class q5{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=y2,!a&&y2&&(this.index=(y2.scopes||(y2.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const e=y2;try{return y2=this,a()}finally{y2=e}}}on(){y2=this}off(){y2=this.parent}stop(a){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function tl(c){return new q5(c)}function ol(c,a=y2){a&&a.active&&a.effects.push(c)}function ml(){return y2}const G6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},W5=c=>(c.w&m1)>0,G5=c=>(c.n&m1)>0,ul=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=m1},vl=c=>{const{deps:a}=c;if(a.length){let e=0;for(let r=0;r<a.length;r++){const s=a[r];W5(s)&&!G5(s)?s.delete(c):a[e++]=s,s.w&=~m1,s.n&=~m1}a.length=e}},m6=new WeakMap;let e3=0,m1=1;const u6=30;let k2;const g1=Symbol(""),v6=Symbol("");class j6{constructor(a,e=null,r){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,ol(this,r)}run(){if(!this.active)return this.fn();let a=k2,e=t1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=k2,k2=this,t1=!0,m1=1<<++e3,e3<=u6?ul(this):M8(this),this.fn()}finally{e3<=u6&&vl(this),m1=1<<--e3,k2=this.parent,t1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){k2===this?this.deferStop=!0:this.active&&(M8(this),this.onStop&&this.onStop(),this.active=!1)}}function M8(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let t1=!0;const j5=[];function Y1(){j5.push(t1),t1=!1}function X1(){const c=j5.pop();t1=c===void 0?!0:c}function L2(c,a,e){if(t1&&k2){let r=m6.get(c);r||m6.set(c,r=new Map);let s=r.get(e);s||r.set(e,s=G6()),$5(s)}}function $5(c,a){let e=!1;e3<=u6?G5(c)||(c.n|=m1,e=!W5(c)):e=!c.has(k2),e&&(c.add(k2),k2.deps.push(c))}function X2(c,a,e,r,s,n){const i=m6.get(c);if(!i)return;let l=[];if(a==="clear")l=[...i.values()];else if(e==="length"&&U(c)){const f=Number(r);i.forEach((o,t)=>{(t==="length"||t>=f)&&l.push(o)})}else switch(e!==void 0&&l.push(i.get(e)),a){case"add":U(c)?I6(e)&&l.push(i.get("length")):(l.push(i.get(g1)),n3(c)&&l.push(i.get(v6)));break;case"delete":U(c)||(l.push(i.get(g1)),n3(c)&&l.push(i.get(v6)));break;case"set":n3(c)&&l.push(i.get(g1));break}if(l.length===1)l[0]&&H6(l[0]);else{const f=[];for(const o of l)o&&f.push(...o);H6(G6(f))}}function H6(c,a){const e=U(c)?c:[...c];for(const r of e)r.computed&&d8(r);for(const r of e)r.computed||d8(r)}function d8(c,a){(c!==k2||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const Hl=D6("__proto__,__v_isRef,__isVue"),K5=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(U6)),zl=$6(),hl=$6(!1,!0),Vl=$6(!0),C8=pl();function pl(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const r=j(this);for(let n=0,i=this.length;n<i;n++)L2(r,"get",n+"");const s=r[a](...e);return s===-1||s===!1?r[a](...e.map(j)):s}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){Y1();const r=j(this)[a].apply(this,e);return X1(),r}}),c}function Ml(c){const a=j(this);return L2(a,"has",c),a.hasOwnProperty(c)}function $6(c=!1,a=!1){return function(r,s,n){if(s==="__v_isReactive")return!c;if(s==="__v_isReadonly")return c;if(s==="__v_isShallow")return a;if(s==="__v_raw"&&n===(c?a?Bl:Z5:a?J5:Q5).get(r))return r;const i=U(r);if(!c){if(i&&G(C8,s))return Reflect.get(C8,s,n);if(s==="hasOwnProperty")return Ml}const l=Reflect.get(r,s,n);return(U6(s)?K5.has(s):Hl(s))||(c||L2(r,"get",s),a)?l:z2(l)?i&&I6(s)?l:l.value:n2(l)?c?a7(l):V4(l):l}}const dl=Y5(),Cl=Y5(!0);function Y5(c=!1){return function(e,r,s,n){let i=e[r];if(I1(i)&&z2(i)&&!z2(s))return!1;if(!c&&(!r4(s)&&!I1(s)&&(i=j(i),s=j(s)),!U(e)&&z2(i)&&!z2(s)))return i.value=s,!0;const l=U(e)&&I6(r)?Number(r)<e.length:G(e,r),f=Reflect.set(e,r,s,n);return e===j(n)&&(l?v3(s,i)&&X2(e,"set",r,s):X2(e,"add",r,s)),f}}function Ll(c,a){const e=G(c,a);c[a];const r=Reflect.deleteProperty(c,a);return r&&e&&X2(c,"delete",a,void 0),r}function gl(c,a){const e=Reflect.has(c,a);return(!U6(a)||!K5.has(a))&&L2(c,"has",a),e}function xl(c){return L2(c,"iterate",U(c)?"length":g1),Reflect.ownKeys(c)}const X5={get:zl,set:dl,deleteProperty:Ll,has:gl,ownKeys:xl},bl={get:Vl,set(c,a){return!0},deleteProperty(c,a){return!0}},Nl=t2({},X5,{get:hl,set:Cl}),K6=c=>c,h4=c=>Reflect.getPrototypeOf(c);function R3(c,a,e=!1,r=!1){c=c.__v_raw;const s=j(c),n=j(a);e||(a!==n&&L2(s,"get",a),L2(s,"get",n));const{has:i}=h4(s),l=r?K6:e?J6:H3;if(i.call(s,a))return l(c.get(a));if(i.call(s,n))return l(c.get(n));c!==s&&c.get(a)}function B3(c,a=!1){const e=this.__v_raw,r=j(e),s=j(c);return a||(c!==s&&L2(r,"has",c),L2(r,"has",s)),c===s?e.has(c):e.has(c)||e.has(s)}function F3(c,a=!1){return c=c.__v_raw,!a&&L2(j(c),"iterate",g1),Reflect.get(c,"size",c)}function L8(c){c=j(c);const a=j(this);return h4(a).has.call(a,c)||(a.add(c),X2(a,"add",c,c)),this}function g8(c,a){a=j(a);const e=j(this),{has:r,get:s}=h4(e);let n=r.call(e,c);n||(c=j(c),n=r.call(e,c));const i=s.call(e,c);return e.set(c,a),n?v3(a,i)&&X2(e,"set",c,a):X2(e,"add",c,a),this}function x8(c){const a=j(this),{has:e,get:r}=h4(a);let s=e.call(a,c);s||(c=j(c),s=e.call(a,c)),r&&r.call(a,c);const n=a.delete(c);return s&&X2(a,"delete",c,void 0),n}function b8(){const c=j(this),a=c.size!==0,e=c.clear();return a&&X2(c,"clear",void 0,void 0),e}function E3(c,a){return function(r,s){const n=this,i=n.__v_raw,l=j(i),f=a?K6:c?J6:H3;return!c&&L2(l,"iterate",g1),i.forEach((o,t)=>r.call(s,f(o),f(t),n))}}function D3(c,a,e){return function(...r){const s=this.__v_raw,n=j(s),i=n3(n),l=c==="entries"||c===Symbol.iterator&&i,f=c==="keys"&&i,o=s[c](...r),t=e?K6:a?J6:H3;return!a&&L2(n,"iterate",f?v6:g1),{next(){const{value:u,done:H}=o.next();return H?{value:u,done:H}:{value:l?[t(u[0]),t(u[1])]:t(u),done:H}},[Symbol.iterator](){return this}}}}function s1(c){return function(...a){return c==="delete"?!1:this}}function Sl(){const c={get(n){return R3(this,n)},get size(){return F3(this)},has:B3,add:L8,set:g8,delete:x8,clear:b8,forEach:E3(!1,!1)},a={get(n){return R3(this,n,!1,!0)},get size(){return F3(this)},has:B3,add:L8,set:g8,delete:x8,clear:b8,forEach:E3(!1,!0)},e={get(n){return R3(this,n,!0)},get size(){return F3(this,!0)},has(n){return B3.call(this,n,!0)},add:s1("add"),set:s1("set"),delete:s1("delete"),clear:s1("clear"),forEach:E3(!0,!1)},r={get(n){return R3(this,n,!0,!0)},get size(){return F3(this,!0)},has(n){return B3.call(this,n,!0)},add:s1("add"),set:s1("set"),delete:s1("delete"),clear:s1("clear"),forEach:E3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{c[n]=D3(n,!1,!1),e[n]=D3(n,!0,!1),a[n]=D3(n,!1,!0),r[n]=D3(n,!0,!0)}),[c,e,a,r]}const[wl,yl,kl,Al]=Sl();function Y6(c,a){const e=a?c?Al:kl:c?yl:wl;return(r,s,n)=>s==="__v_isReactive"?!c:s==="__v_isReadonly"?c:s==="__v_raw"?r:Reflect.get(G(e,s)&&s in r?e:r,s,n)}const Pl={get:Y6(!1,!1)},Tl={get:Y6(!1,!0)},Rl={get:Y6(!0,!1)},Q5=new WeakMap,J5=new WeakMap,Z5=new WeakMap,Bl=new WeakMap;function Fl(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function El(c){return c.__v_skip||!Object.isExtensible(c)?0:Fl(Zi(c))}function V4(c){return I1(c)?c:X6(c,!1,X5,Pl,Q5)}function c7(c){return X6(c,!1,Nl,Tl,J5)}function a7(c){return X6(c,!0,bl,Rl,Z5)}function X6(c,a,e,r,s){if(!n2(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const n=s.get(c);if(n)return n;const i=El(c);if(i===0)return c;const l=new Proxy(c,i===2?r:e);return s.set(c,l),l}function _1(c){return I1(c)?_1(c.__v_raw):!!(c&&c.__v_isReactive)}function I1(c){return!!(c&&c.__v_isReadonly)}function r4(c){return!!(c&&c.__v_isShallow)}function e7(c){return _1(c)||I1(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function Q6(c){return e4(c,"__v_skip",!0),c}const H3=c=>n2(c)?V4(c):c,J6=c=>n2(c)?a7(c):c;function r7(c){t1&&k2&&(c=j(c),$5(c.dep||(c.dep=G6())))}function s7(c,a){c=j(c);const e=c.dep;e&&H6(e)}function z2(c){return!!(c&&c.__v_isRef===!0)}function n7(c){return i7(c,!1)}function Dl(c){return i7(c,!0)}function i7(c,a){return z2(c)?c:new _l(c,a)}class _l{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:H3(a)}get value(){return r7(this),this._value}set value(a){const e=this.__v_isShallow||r4(a)||I1(a);a=e?a:j(a),v3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:H3(a),s7(this))}}function x1(c){return z2(c)?c.value:c}const Ol={get:(c,a,e)=>x1(Reflect.get(c,a,e)),set:(c,a,e,r)=>{const s=c[a];return z2(s)&&!z2(e)?(s.value=e,!0):Reflect.set(c,a,e,r)}};function l7(c){return _1(c)?c:new Proxy(c,Ol)}class Ul{constructor(a,e,r,s){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new j6(a,()=>{this._dirty||(this._dirty=!0,s7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const a=j(this);return r7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function Il(c,a,e=!1){let r,s;const n=I(c);return n?(r=c,s=T2):(r=c.get,s=c.set),new Ul(r,s,n||!s,e)}function o1(c,a,e,r){let s;try{s=r?c(...r):c()}catch(n){p4(n,a,e)}return s}function R2(c,a,e,r){if(I(c)){const n=o1(c,a,e,r);return n&&U5(n)&&n.catch(i=>{p4(i,a,e)}),n}const s=[];for(let n=0;n<c.length;n++)s.push(R2(c[n],a,e,r));return s}function p4(c,a,e,r=!0){const s=a?a.vnode:null;if(a){let n=a.parent;const i=a.proxy,l=e;for(;n;){const o=n.ec;if(o){for(let t=0;t<o.length;t++)if(o[t](c,i,l)===!1)return}n=n.parent}const f=a.appContext.config.errorHandler;if(f){o1(f,null,10,[c,i,l]);return}}ql(c,e,s,r)}function ql(c,a,e,r=!0){console.error(c)}let z3=!1,z6=!1;const H2=[];let I2=0;const O1=[];let K2=null,p1=0;const f7=Promise.resolve();let Z6=null;function t7(c){const a=Z6||f7;return c?a.then(this?c.bind(this):c):a}function Wl(c){let a=I2+1,e=H2.length;for(;a<e;){const r=a+e>>>1;h3(H2[r])<c?a=r+1:e=r}return a}function c0(c){(!H2.length||!H2.includes(c,z3&&c.allowRecurse?I2+1:I2))&&(c.id==null?H2.push(c):H2.splice(Wl(c.id),0,c),o7())}function o7(){!z3&&!z6&&(z6=!0,Z6=f7.then(u7))}function Gl(c){const a=H2.indexOf(c);a>I2&&H2.splice(a,1)}function jl(c){U(c)?O1.push(...c):(!K2||!K2.includes(c,c.allowRecurse?p1+1:p1))&&O1.push(c),o7()}function N8(c,a=z3?I2+1:0){for(;a<H2.length;a++){const e=H2[a];e&&e.pre&&(H2.splice(a,1),a--,e())}}function m7(c){if(O1.length){const a=[...new Set(O1)];if(O1.length=0,K2){K2.push(...a);return}for(K2=a,K2.sort((e,r)=>h3(e)-h3(r)),p1=0;p1<K2.length;p1++)K2[p1]();K2=null,p1=0}}const h3=c=>c.id==null?1/0:c.id,$l=(c,a)=>{const e=h3(c)-h3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function u7(c){z6=!1,z3=!0,H2.sort($l);const a=T2;try{for(I2=0;I2<H2.length;I2++){const e=H2[I2];e&&e.active!==!1&&o1(e,null,14)}}finally{I2=0,H2.length=0,m7(),z3=!1,Z6=null,(H2.length||O1.length)&&u7()}}function Kl(c,a,...e){if(c.isUnmounted)return;const r=c.vnode.props||c2;let s=e;const n=a.startsWith("update:"),i=n&&a.slice(7);if(i&&i in r){const t=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:H}=r[t]||c2;H&&(s=e.map(h=>u2(h)?h.trim():h)),u&&(s=e.map(t6))}let l,f=r[l=K4(a)]||r[l=K4(G2(a))];!f&&n&&(f=r[l=K4(K1(a))]),f&&R2(f,c,6,s);const o=r[l+"Once"];if(o){if(!c.emitted)c.emitted={};else if(c.emitted[l])return;c.emitted[l]=!0,R2(o,c,6,s)}}function v7(c,a,e=!1){const r=a.emitsCache,s=r.get(c);if(s!==void 0)return s;const n=c.emits;let i={},l=!1;if(!I(c)){const f=o=>{const t=v7(o,a,!0);t&&(l=!0,t2(i,t))};!e&&a.mixins.length&&a.mixins.forEach(f),c.extends&&f(c.extends),c.mixins&&c.mixins.forEach(f)}return!n&&!l?(n2(c)&&r.set(c,null),null):(U(n)?n.forEach(f=>i[f]=null):t2(i,n),n2(c)&&r.set(c,i),i)}function M4(c,a){return!c||!u4(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,K1(a))||G(c,a))}let S2=null,d4=null;function s4(c){const a=S2;return S2=c,d4=c&&c.type.__scopeId||null,a}function Y_(c){d4=c}function X_(){d4=null}function Yl(c,a=S2,e){if(!a||c._n)return c;const r=(...s)=>{r._d&&E8(-1);const n=s4(a);let i;try{i=c(...s)}finally{s4(n),r._d&&E8(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function Y4(c){const{type:a,vnode:e,proxy:r,withProxy:s,props:n,propsOptions:[i],slots:l,attrs:f,emit:o,render:t,renderCache:u,data:H,setupState:h,ctx:S,inheritAttrs:w}=c;let F,d;const C=s4(c);try{if(e.shapeFlag&4){const y=s||r;F=U2(t.call(y,y,u,n,h,H,S)),d=f}else{const y=a;F=U2(y.length>1?y(n,{attrs:f,slots:l,emit:o}):y(n,null)),d=a.props?f:Xl(f)}}catch(y){f3.length=0,p4(y,c,1),F=C2(N1)}let B=F;if(d&&w!==!1){const y=Object.keys(d),{shapeFlag:q}=B;y.length&&q&7&&(i&&y.some(_6)&&(d=Ql(d,i)),B=q1(B,d))}return e.dirs&&(B=q1(B),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),F=B,s4(C),F}const Xl=c=>{let a;for(const e in c)(e==="class"||e==="style"||u4(e))&&((a||(a={}))[e]=c[e]);return a},Ql=(c,a)=>{const e={};for(const r in c)(!_6(r)||!(r.slice(9)in a))&&(e[r]=c[r]);return e};function Jl(c,a,e){const{props:r,children:s,component:n}=c,{props:i,children:l,patchFlag:f}=a,o=n.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&f>=0){if(f&1024)return!0;if(f&16)return r?S8(r,i,o):!!i;if(f&8){const t=a.dynamicProps;for(let u=0;u<t.length;u++){const H=t[u];if(i[H]!==r[H]&&!M4(o,H))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===i?!1:r?i?S8(r,i,o):!0:!!i;return!1}function S8(c,a,e){const r=Object.keys(a);if(r.length!==Object.keys(c).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(a[n]!==c[n]&&!M4(e,n))return!0}return!1}function Zl({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const cf=c=>c.__isSuspense;function af(c,a){a&&a.pendingBranch?U(c)?a.effects.push(...c):a.effects.push(c):jl(c)}function Q_(c,a){return a0(c,null,a)}const _3={};function i3(c,a,e){return a0(c,a,e)}function a0(c,a,{immediate:e,deep:r,flush:s,onTrack:n,onTrigger:i}=c2){var l;const f=ml()===((l=m2)==null?void 0:l.scope)?m2:null;let o,t=!1,u=!1;if(z2(c)?(o=()=>c.value,t=r4(c)):_1(c)?(o=()=>c,r=!0):U(c)?(u=!0,t=c.some(y=>_1(y)||r4(y)),o=()=>c.map(y=>{if(z2(y))return y.value;if(_1(y))return d1(y);if(I(y))return o1(y,f,2)})):I(c)?a?o=()=>o1(c,f,2):o=()=>{if(!(f&&f.isUnmounted))return H&&H(),R2(c,f,3,[h])}:o=T2,a&&r){const y=o;o=()=>d1(y())}let H,h=y=>{H=C.onStop=()=>{o1(y,f,4)}},S;if(p3)if(h=T2,a?e&&R2(a,f,3,[o(),u?[]:void 0,h]):o(),s==="sync"){const y=Jf();S=y.__watcherHandles||(y.__watcherHandles=[])}else return T2;let w=u?new Array(c.length).fill(_3):_3;const F=()=>{if(C.active)if(a){const y=C.run();(r||t||(u?y.some((q,J)=>v3(q,w[J])):v3(y,w)))&&(H&&H(),R2(a,f,3,[y,w===_3?void 0:u&&w[0]===_3?[]:w,h]),w=y)}else C.run()};F.allowRecurse=!!a;let d;s==="sync"?d=F:s==="post"?d=()=>d2(F,f&&f.suspense):(F.pre=!0,f&&(F.id=f.uid),d=()=>c0(F));const C=new j6(o,d);a?e?F():w=C.run():s==="post"?d2(C.run.bind(C),f&&f.suspense):C.run();const B=()=>{C.stop(),f&&f.scope&&O6(f.scope.effects,C)};return S&&S.push(B),B}function ef(c,a,e){const r=this.proxy,s=u2(c)?c.includes(".")?H7(r,c):()=>r[c]:c.bind(r,r);let n;I(a)?n=a:(n=a.handler,e=a);const i=m2;W1(this);const l=a0(s,n.bind(r),e);return i?W1(i):b1(),l}function H7(c,a){const e=a.split(".");return()=>{let r=c;for(let s=0;s<e.length&&r;s++)r=r[e[s]];return r}}function d1(c,a){if(!n2(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),z2(c))d1(c.value,a);else if(U(c))for(let e=0;e<c.length;e++)d1(c[e],a);else if(Qi(c)||n3(c))c.forEach(e=>{d1(e,a)});else if(cl(c))for(const e in c)d1(c[e],a);return c}function J_(c,a){const e=S2;if(e===null)return c;const r=x4(e)||e.proxy,s=c.dirs||(c.dirs=[]);for(let n=0;n<a.length;n++){let[i,l,f,o=c2]=a[n];i&&(I(i)&&(i={mounted:i,updated:i}),i.deep&&d1(l),s.push({dir:i,instance:r,value:l,oldValue:void 0,arg:f,modifiers:o}))}return c}function h1(c,a,e,r){const s=c.dirs,n=a&&a.dirs;for(let i=0;i<s.length;i++){const l=s[i];n&&(l.oldValue=n[i].value);let f=l.dir[r];f&&(Y1(),R2(f,e,8,[c.el,l,c,a]),X1())}}function e0(c,a){return I(c)?(()=>t2({name:c.name},a,{setup:c}))():c}const Q3=c=>!!c.type.__asyncLoader,z7=c=>c.type.__isKeepAlive;function rf(c,a){h7(c,"a",a)}function sf(c,a){h7(c,"da",a)}function h7(c,a,e=m2){const r=c.__wdc||(c.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return c()});if(C4(a,r,e),e){let s=e.parent;for(;s&&s.parent;)z7(s.parent.vnode)&&nf(r,a,e,s),s=s.parent}}function nf(c,a,e,r){const s=C4(a,c,r,!0);V7(()=>{O6(r[a],s)},e)}function C4(c,a,e=m2,r=!1){if(e){const s=e[c]||(e[c]=[]),n=a.__weh||(a.__weh=(...i)=>{if(e.isUnmounted)return;Y1(),W1(e);const l=R2(a,e,c,i);return b1(),X1(),l});return r?s.unshift(n):s.push(n),n}}const c1=c=>(a,e=m2)=>(!p3||c==="sp")&&C4(c,(...r)=>a(...r),e),lf=c1("bm"),ff=c1("m"),tf=c1("bu"),of=c1("u"),mf=c1("bum"),V7=c1("um"),uf=c1("sp"),vf=c1("rtg"),Hf=c1("rtc");function zf(c,a=m2){C4("ec",c,a)}const p7="components";function Z_(c,a){return Vf(p7,c,!0,a)||c}const hf=Symbol.for("v-ndc");function Vf(c,a,e=!0,r=!1){const s=S2||m2;if(s){const n=s.type;if(c===p7){const l=Yf(n,!1);if(l&&(l===a||l===G2(a)||l===z4(G2(a))))return n}const i=w8(s[c]||n[c],a)||w8(s.appContext[c],a);return!i&&r?n:i}}function w8(c,a){return c&&(c[a]||c[G2(a)]||c[z4(G2(a))])}const h6=c=>c?k7(c)?x4(c)||c.proxy:h6(c.parent):null,l3=t2(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>h6(c.parent),$root:c=>h6(c.root),$emit:c=>c.emit,$options:c=>r0(c),$forceUpdate:c=>c.f||(c.f=()=>c0(c.update)),$nextTick:c=>c.n||(c.n=t7.bind(c.proxy)),$watch:c=>ef.bind(c)}),X4=(c,a)=>c!==c2&&!c.__isScriptSetup&&G(c,a),pf={get({_:c},a){const{ctx:e,setupState:r,data:s,props:n,accessCache:i,type:l,appContext:f}=c;let o;if(a[0]!=="$"){const h=i[a];if(h!==void 0)switch(h){case 1:return r[a];case 2:return s[a];case 4:return e[a];case 3:return n[a]}else{if(X4(r,a))return i[a]=1,r[a];if(s!==c2&&G(s,a))return i[a]=2,s[a];if((o=c.propsOptions[0])&&G(o,a))return i[a]=3,n[a];if(e!==c2&&G(e,a))return i[a]=4,e[a];V6&&(i[a]=0)}}const t=l3[a];let u,H;if(t)return a==="$attrs"&&L2(c,"get",a),t(c);if((u=l.__cssModules)&&(u=u[a]))return u;if(e!==c2&&G(e,a))return i[a]=4,e[a];if(H=f.config.globalProperties,G(H,a))return H[a]},set({_:c},a,e){const{data:r,setupState:s,ctx:n}=c;return X4(s,a)?(s[a]=e,!0):r!==c2&&G(r,a)?(r[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(n[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:r,appContext:s,propsOptions:n}},i){let l;return!!e[i]||c!==c2&&G(c,i)||X4(a,i)||(l=n[0])&&G(l,i)||G(r,i)||G(l3,i)||G(s.config.globalProperties,i)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};function y8(c){return U(c)?c.reduce((a,e)=>(a[e]=null,a),{}):c}let V6=!0;function Mf(c){const a=r0(c),e=c.proxy,r=c.ctx;V6=!1,a.beforeCreate&&k8(a.beforeCreate,c,"bc");const{data:s,computed:n,methods:i,watch:l,provide:f,inject:o,created:t,beforeMount:u,mounted:H,beforeUpdate:h,updated:S,activated:w,deactivated:F,beforeDestroy:d,beforeUnmount:C,destroyed:B,unmounted:y,render:q,renderTracked:J,renderTriggered:r2,errorCaptured:g2,serverPrefetch:h2,expose:N2,inheritAttrs:e1,components:z1,directives:F2,filters:J1}=a;if(o&&df(o,r,null),i)for(const Q in i){const $=i[Q];I($)&&(r[Q]=$.bind(e))}if(s){const Q=s.call(e,e);n2(Q)&&(c.data=V4(Q))}if(V6=!0,n)for(const Q in n){const $=n[Q],j2=I($)?$.bind(e,e):I($.get)?$.get.bind(e,e):T2,r1=!I($)&&I($.set)?$.set.bind(e):T2,E2=o2({get:j2,set:r1});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>E2.value,set:p2=>E2.value=p2})}if(l)for(const Q in l)M7(l[Q],r,e,Q);if(f){const Q=I(f)?f.call(e):f;Reflect.ownKeys(Q).forEach($=>{J3($,Q[$])})}t&&k8(t,c,"c");function f2(Q,$){U($)?$.forEach(j2=>Q(j2.bind(e))):$&&Q($.bind(e))}if(f2(lf,u),f2(ff,H),f2(tf,h),f2(of,S),f2(rf,w),f2(sf,F),f2(zf,g2),f2(Hf,J),f2(vf,r2),f2(mf,C),f2(V7,y),f2(uf,h2),U(N2))if(N2.length){const Q=c.exposed||(c.exposed={});N2.forEach($=>{Object.defineProperty(Q,$,{get:()=>e[$],set:j2=>e[$]=j2})})}else c.exposed||(c.exposed={});q&&c.render===T2&&(c.render=q),e1!=null&&(c.inheritAttrs=e1),z1&&(c.components=z1),F2&&(c.directives=F2)}function df(c,a,e=T2){U(c)&&(c=p6(c));for(const r in c){const s=c[r];let n;n2(s)?"default"in s?n=W2(s.from||r,s.default,!0):n=W2(s.from||r):n=W2(s),z2(n)?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:i=>n.value=i}):a[r]=n}}function k8(c,a,e){R2(U(c)?c.map(r=>r.bind(a.proxy)):c.bind(a.proxy),a,e)}function M7(c,a,e,r){const s=r.includes(".")?H7(e,r):()=>e[r];if(u2(c)){const n=a[c];I(n)&&i3(s,n)}else if(I(c))i3(s,c.bind(e));else if(n2(c))if(U(c))c.forEach(n=>M7(n,a,e,r));else{const n=I(c.handler)?c.handler.bind(e):a[c.handler];I(n)&&i3(s,n,c)}}function r0(c){const a=c.type,{mixins:e,extends:r}=a,{mixins:s,optionsCache:n,config:{optionMergeStrategies:i}}=c.appContext,l=n.get(a);let f;return l?f=l:!s.length&&!e&&!r?f=a:(f={},s.length&&s.forEach(o=>n4(f,o,i,!0)),n4(f,a,i)),n2(a)&&n.set(a,f),f}function n4(c,a,e,r=!1){const{mixins:s,extends:n}=a;n&&n4(c,n,e,!0),s&&s.forEach(i=>n4(c,i,e,!0));for(const i in a)if(!(r&&i==="expose")){const l=Cf[i]||e&&e[i];c[i]=l?l(c[i],a[i]):a[i]}return c}const Cf={data:A8,props:P8,emits:P8,methods:r3,computed:r3,beforeCreate:V2,created:V2,beforeMount:V2,mounted:V2,beforeUpdate:V2,updated:V2,beforeDestroy:V2,beforeUnmount:V2,destroyed:V2,unmounted:V2,activated:V2,deactivated:V2,errorCaptured:V2,serverPrefetch:V2,components:r3,directives:r3,watch:gf,provide:A8,inject:Lf};function A8(c,a){return a?c?function(){return t2(I(c)?c.call(this,this):c,I(a)?a.call(this,this):a)}:a:c}function Lf(c,a){return r3(p6(c),p6(a))}function p6(c){if(U(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function V2(c,a){return c?[...new Set([].concat(c,a))]:a}function r3(c,a){return c?t2(Object.create(null),c,a):a}function P8(c,a){return c?U(c)&&U(a)?[...new Set([...c,...a])]:t2(Object.create(null),y8(c),y8(a??{})):a}function gf(c,a){if(!c)return a;if(!a)return c;const e=t2(Object.create(null),c);for(const r in a)e[r]=V2(c[r],a[r]);return e}function d7(){return{app:null,config:{isNativeTag:Ki,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xf=0;function bf(c,a){return function(r,s=null){I(r)||(r=t2({},r)),s!=null&&!n2(s)&&(s=null);const n=d7(),i=new Set;let l=!1;const f=n.app={_uid:xf++,_component:r,_props:s,_container:null,_context:n,_instance:null,version:Zf,get config(){return n.config},set config(o){},use(o,...t){return i.has(o)||(o&&I(o.install)?(i.add(o),o.install(f,...t)):I(o)&&(i.add(o),o(f,...t))),f},mixin(o){return n.mixins.includes(o)||n.mixins.push(o),f},component(o,t){return t?(n.components[o]=t,f):n.components[o]},directive(o,t){return t?(n.directives[o]=t,f):n.directives[o]},mount(o,t,u){if(!l){const H=C2(r,s);return H.appContext=n,t&&a?a(H,o):c(H,o,u),l=!0,f._container=o,o.__vue_app__=f,x4(H.component)||H.component.proxy}},unmount(){l&&(c(null,f._container),delete f._container.__vue_app__)},provide(o,t){return n.provides[o]=t,f},runWithContext(o){i4=f;try{return o()}finally{i4=null}}};return f}}let i4=null;function J3(c,a){if(m2){let e=m2.provides;const r=m2.parent&&m2.parent.provides;r===e&&(e=m2.provides=Object.create(r)),e[c]=a}}function W2(c,a,e=!1){const r=m2||S2;if(r||i4){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:i4._context.provides;if(s&&c in s)return s[c];if(arguments.length>1)return e&&I(a)?a.call(r&&r.proxy):a}}function Nf(c,a,e,r=!1){const s={},n={};e4(n,g4,1),c.propsDefaults=Object.create(null),C7(c,a,s,n);for(const i in c.propsOptions[0])i in s||(s[i]=void 0);e?c.props=r?s:c7(s):c.type.props?c.props=s:c.props=n,c.attrs=n}function Sf(c,a,e,r){const{props:s,attrs:n,vnode:{patchFlag:i}}=c,l=j(s),[f]=c.propsOptions;let o=!1;if((r||i>0)&&!(i&16)){if(i&8){const t=c.vnode.dynamicProps;for(let u=0;u<t.length;u++){let H=t[u];if(M4(c.emitsOptions,H))continue;const h=a[H];if(f)if(G(n,H))h!==n[H]&&(n[H]=h,o=!0);else{const S=G2(H);s[S]=M6(f,l,S,h,c,!1)}else h!==n[H]&&(n[H]=h,o=!0)}}}else{C7(c,a,s,n)&&(o=!0);let t;for(const u in l)(!a||!G(a,u)&&((t=K1(u))===u||!G(a,t)))&&(f?e&&(e[u]!==void 0||e[t]!==void 0)&&(s[u]=M6(f,l,u,void 0,c,!0)):delete s[u]);if(n!==l)for(const u in n)(!a||!G(a,u))&&(delete n[u],o=!0)}o&&X2(c,"set","$attrs")}function C7(c,a,e,r){const[s,n]=c.propsOptions;let i=!1,l;if(a)for(let f in a){if(Y3(f))continue;const o=a[f];let t;s&&G(s,t=G2(f))?!n||!n.includes(t)?e[t]=o:(l||(l={}))[t]=o:M4(c.emitsOptions,f)||(!(f in r)||o!==r[f])&&(r[f]=o,i=!0)}if(n){const f=j(e),o=l||c2;for(let t=0;t<n.length;t++){const u=n[t];e[u]=M6(s,f,u,o[u],c,!G(o,u))}}return i}function M6(c,a,e,r,s,n){const i=c[e];if(i!=null){const l=G(i,"default");if(l&&r===void 0){const f=i.default;if(i.type!==Function&&!i.skipFactory&&I(f)){const{propsDefaults:o}=s;e in o?r=o[e]:(W1(s),r=o[e]=f.call(null,a),b1())}else r=f}i[0]&&(n&&!l?r=!1:i[1]&&(r===""||r===K1(e))&&(r=!0))}return r}function L7(c,a,e=!1){const r=a.propsCache,s=r.get(c);if(s)return s;const n=c.props,i={},l=[];let f=!1;if(!I(c)){const t=u=>{f=!0;const[H,h]=L7(u,a,!0);t2(i,H),h&&l.push(...h)};!e&&a.mixins.length&&a.mixins.forEach(t),c.extends&&t(c.extends),c.mixins&&c.mixins.forEach(t)}if(!n&&!f)return n2(c)&&r.set(c,D1),D1;if(U(n))for(let t=0;t<n.length;t++){const u=G2(n[t]);T8(u)&&(i[u]=c2)}else if(n)for(const t in n){const u=G2(t);if(T8(u)){const H=n[t],h=i[u]=U(H)||I(H)?{type:H}:t2({},H);if(h){const S=F8(Boolean,h.type),w=F8(String,h.type);h[0]=S>-1,h[1]=w<0||S<w,(S>-1||G(h,"default"))&&l.push(u)}}}const o=[i,l];return n2(c)&&r.set(c,o),o}function T8(c){return c[0]!=="$"}function R8(c){const a=c&&c.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:c===null?"null":""}function B8(c,a){return R8(c)===R8(a)}function F8(c,a){return U(a)?a.findIndex(e=>B8(e,c)):I(a)&&B8(a,c)?0:-1}const g7=c=>c[0]==="_"||c==="$stable",s0=c=>U(c)?c.map(U2):[U2(c)],wf=(c,a,e)=>{if(a._n)return a;const r=Yl((...s)=>s0(a(...s)),e);return r._c=!1,r},x7=(c,a,e)=>{const r=c._ctx;for(const s in c){if(g7(s))continue;const n=c[s];if(I(n))a[s]=wf(s,n,r);else if(n!=null){const i=s0(n);a[s]=()=>i}}},b7=(c,a)=>{const e=s0(a);c.slots.default=()=>e},yf=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),e4(a,"_",e)):x7(a,c.slots={})}else c.slots={},a&&b7(c,a);e4(c.slots,g4,1)},kf=(c,a,e)=>{const{vnode:r,slots:s}=c;let n=!0,i=c2;if(r.shapeFlag&32){const l=a._;l?e&&l===1?n=!1:(t2(s,a),!e&&l===1&&delete s._):(n=!a.$stable,x7(a,s)),i=a}else a&&(b7(c,a),i={default:1});if(n)for(const l in s)!g7(l)&&!(l in i)&&delete s[l]};function d6(c,a,e,r,s=!1){if(U(c)){c.forEach((H,h)=>d6(H,a&&(U(a)?a[h]:a),e,r,s));return}if(Q3(r)&&!s)return;const n=r.shapeFlag&4?x4(r.component)||r.component.proxy:r.el,i=s?null:n,{i:l,r:f}=c,o=a&&a.r,t=l.refs===c2?l.refs={}:l.refs,u=l.setupState;if(o!=null&&o!==f&&(u2(o)?(t[o]=null,G(u,o)&&(u[o]=null)):z2(o)&&(o.value=null)),I(f))o1(f,l,12,[i,t]);else{const H=u2(f),h=z2(f);if(H||h){const S=()=>{if(c.f){const w=H?G(u,f)?u[f]:t[f]:f.value;s?U(w)&&O6(w,n):U(w)?w.includes(n)||w.push(n):H?(t[f]=[n],G(u,f)&&(u[f]=t[f])):(f.value=[n],c.k&&(t[c.k]=f.value))}else H?(t[f]=i,G(u,f)&&(u[f]=i)):h&&(f.value=i,c.k&&(t[c.k]=i))};i?(S.id=-1,d2(S,e)):S()}}}const d2=af;function Af(c){return Pf(c)}function Pf(c,a){const e=o6();e.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:i,createText:l,createComment:f,setText:o,setElementText:t,parentNode:u,nextSibling:H,setScopeId:h=T2,insertStaticContent:S}=c,w=(m,v,z,V=null,M=null,L=null,k=!1,x=null,b=!!v.dynamicChildren)=>{if(m===v)return;m&&!c3(m,v)&&(V=p(m),p2(m,M,L,!0),m=null),v.patchFlag===-2&&(b=!1,v.dynamicChildren=null);const{type:g,ref:D,shapeFlag:T}=v;switch(g){case L4:F(m,v,z,V);break;case N1:d(m,v,z,V);break;case Q4:m==null&&C(v,z,V,k);break;case O2:z1(m,v,z,V,M,L,k,x,b);break;default:T&1?q(m,v,z,V,M,L,k,x,b):T&6?F2(m,v,z,V,M,L,k,x,b):(T&64||T&128)&&g.process(m,v,z,V,M,L,k,x,b,N)}D!=null&&M&&d6(D,m&&m.ref,L,v||m,!v)},F=(m,v,z,V)=>{if(m==null)r(v.el=l(v.children),z,V);else{const M=v.el=m.el;v.children!==m.children&&o(M,v.children)}},d=(m,v,z,V)=>{m==null?r(v.el=f(v.children||""),z,V):v.el=m.el},C=(m,v,z,V)=>{[m.el,m.anchor]=S(m.children,v,z,V,m.el,m.anchor)},B=({el:m,anchor:v},z,V)=>{let M;for(;m&&m!==v;)M=H(m),r(m,z,V),m=M;r(v,z,V)},y=({el:m,anchor:v})=>{let z;for(;m&&m!==v;)z=H(m),s(m),m=z;s(v)},q=(m,v,z,V,M,L,k,x,b)=>{k=k||v.type==="svg",m==null?J(v,z,V,M,L,k,x,b):h2(m,v,M,L,k,x,b)},J=(m,v,z,V,M,L,k,x)=>{let b,g;const{type:D,props:T,shapeFlag:_,transition:O,dirs:W}=m;if(b=m.el=i(m.type,L,T&&T.is,T),_&8?t(b,m.children):_&16&&g2(m.children,b,null,V,M,L&&D!=="foreignObject",k,x),W&&h1(m,null,V,"created"),r2(b,m,m.scopeId,k,V),T){for(const X in T)X!=="value"&&!Y3(X)&&n(b,X,null,T[X],L,m.children,V,M,v2);"value"in T&&n(b,"value",null,T.value),(g=T.onVnodeBeforeMount)&&_2(g,V,m)}W&&h1(m,null,V,"beforeMount");const Z=(!M||M&&!M.pendingBranch)&&O&&!O.persisted;Z&&O.beforeEnter(b),r(b,v,z),((g=T&&T.onVnodeMounted)||Z||W)&&d2(()=>{g&&_2(g,V,m),Z&&O.enter(b),W&&h1(m,null,V,"mounted")},M)},r2=(m,v,z,V,M)=>{if(z&&h(m,z),V)for(let L=0;L<V.length;L++)h(m,V[L]);if(M){let L=M.subTree;if(v===L){const k=M.vnode;r2(m,k,k.scopeId,k.slotScopeIds,M.parent)}}},g2=(m,v,z,V,M,L,k,x,b=0)=>{for(let g=b;g<m.length;g++){const D=m[g]=x?l1(m[g]):U2(m[g]);w(null,D,v,z,V,M,L,k,x)}},h2=(m,v,z,V,M,L,k)=>{const x=v.el=m.el;let{patchFlag:b,dynamicChildren:g,dirs:D}=v;b|=m.patchFlag&16;const T=m.props||c2,_=v.props||c2;let O;z&&V1(z,!1),(O=_.onVnodeBeforeUpdate)&&_2(O,z,v,m),D&&h1(v,m,z,"beforeUpdate"),z&&V1(z,!0);const W=M&&v.type!=="foreignObject";if(g?N2(m.dynamicChildren,g,x,z,V,W,L):k||$(m,v,x,null,z,V,W,L,!1),b>0){if(b&16)e1(x,v,T,_,z,V,M);else if(b&2&&T.class!==_.class&&n(x,"class",null,_.class,M),b&4&&n(x,"style",T.style,_.style,M),b&8){const Z=v.dynamicProps;for(let X=0;X<Z.length;X++){const i2=Z[X],w2=T[i2],P1=_[i2];(P1!==w2||i2==="value")&&n(x,i2,w2,P1,M,m.children,z,V,v2)}}b&1&&m.children!==v.children&&t(x,v.children)}else!k&&g==null&&e1(x,v,T,_,z,V,M);((O=_.onVnodeUpdated)||D)&&d2(()=>{O&&_2(O,z,v,m),D&&h1(v,m,z,"updated")},V)},N2=(m,v,z,V,M,L,k)=>{for(let x=0;x<v.length;x++){const b=m[x],g=v[x],D=b.el&&(b.type===O2||!c3(b,g)||b.shapeFlag&70)?u(b.el):z;w(b,g,D,null,V,M,L,k,!0)}},e1=(m,v,z,V,M,L,k)=>{if(z!==V){if(z!==c2)for(const x in z)!Y3(x)&&!(x in V)&&n(m,x,z[x],null,k,v.children,M,L,v2);for(const x in V){if(Y3(x))continue;const b=V[x],g=z[x];b!==g&&x!=="value"&&n(m,x,g,b,k,v.children,M,L,v2)}"value"in V&&n(m,"value",z.value,V.value)}},z1=(m,v,z,V,M,L,k,x,b)=>{const g=v.el=m?m.el:l(""),D=v.anchor=m?m.anchor:l("");let{patchFlag:T,dynamicChildren:_,slotScopeIds:O}=v;O&&(x=x?x.concat(O):O),m==null?(r(g,z,V),r(D,z,V),g2(v.children,z,D,M,L,k,x,b)):T>0&&T&64&&_&&m.dynamicChildren?(N2(m.dynamicChildren,_,z,M,L,k,x),(v.key!=null||M&&v===M.subTree)&&N7(m,v,!0)):$(m,v,z,D,M,L,k,x,b)},F2=(m,v,z,V,M,L,k,x,b)=>{v.slotScopeIds=x,m==null?v.shapeFlag&512?M.ctx.activate(v,z,V,k,b):J1(v,z,V,M,L,k,b):y1(m,v,b)},J1=(m,v,z,V,M,L,k)=>{const x=m.component=Wf(m,V,M);if(z7(m)&&(x.ctx.renderer=N),Gf(x),x.asyncDep){if(M&&M.registerDep(x,f2),!m.el){const b=x.subTree=C2(N1);d(null,b,v,z)}return}f2(x,m,v,z,M,L,k)},y1=(m,v,z)=>{const V=v.component=m.component;if(Jl(m,v,z))if(V.asyncDep&&!V.asyncResolved){Q(V,v,z);return}else V.next=v,Gl(V.update),V.update();else v.el=m.el,V.vnode=v},f2=(m,v,z,V,M,L,k)=>{const x=()=>{if(m.isMounted){let{next:D,bu:T,u:_,parent:O,vnode:W}=m,Z=D,X;V1(m,!1),D?(D.el=W.el,Q(m,D,k)):D=W,T&&X3(T),(X=D.props&&D.props.onVnodeBeforeUpdate)&&_2(X,O,D,W),V1(m,!0);const i2=Y4(m),w2=m.subTree;m.subTree=i2,w(w2,i2,u(w2.el),p(w2),m,M,L),D.el=i2.el,Z===null&&Zl(m,i2.el),_&&d2(_,M),(X=D.props&&D.props.onVnodeUpdated)&&d2(()=>_2(X,O,D,W),M)}else{let D;const{el:T,props:_}=v,{bm:O,m:W,parent:Z}=m,X=Q3(v);if(V1(m,!1),O&&X3(O),!X&&(D=_&&_.onVnodeBeforeMount)&&_2(D,Z,v),V1(m,!0),T&&K){const i2=()=>{m.subTree=Y4(m),K(T,m.subTree,m,M,null)};X?v.type.__asyncLoader().then(()=>!m.isUnmounted&&i2()):i2()}else{const i2=m.subTree=Y4(m);w(null,i2,z,V,m,M,L),v.el=i2.el}if(W&&d2(W,M),!X&&(D=_&&_.onVnodeMounted)){const i2=v;d2(()=>_2(D,Z,i2),M)}(v.shapeFlag&256||Z&&Q3(Z.vnode)&&Z.vnode.shapeFlag&256)&&m.a&&d2(m.a,M),m.isMounted=!0,v=z=V=null}},b=m.effect=new j6(x,()=>c0(g),m.scope),g=m.update=()=>b.run();g.id=m.uid,V1(m,!0),g()},Q=(m,v,z)=>{v.component=m;const V=m.vnode.props;m.vnode=v,m.next=null,Sf(m,v.props,V,z),kf(m,v.children,z),Y1(),N8(),X1()},$=(m,v,z,V,M,L,k,x,b=!1)=>{const g=m&&m.children,D=m?m.shapeFlag:0,T=v.children,{patchFlag:_,shapeFlag:O}=v;if(_>0){if(_&128){r1(g,T,z,V,M,L,k,x,b);return}else if(_&256){j2(g,T,z,V,M,L,k,x,b);return}}O&8?(D&16&&v2(g,M,L),T!==g&&t(z,T)):D&16?O&16?r1(g,T,z,V,M,L,k,x,b):v2(g,M,L,!0):(D&8&&t(z,""),O&16&&g2(T,z,V,M,L,k,x,b))},j2=(m,v,z,V,M,L,k,x,b)=>{m=m||D1,v=v||D1;const g=m.length,D=v.length,T=Math.min(g,D);let _;for(_=0;_<T;_++){const O=v[_]=b?l1(v[_]):U2(v[_]);w(m[_],O,z,null,M,L,k,x,b)}g>D?v2(m,M,L,!0,!1,T):g2(v,z,V,M,L,k,x,b,T)},r1=(m,v,z,V,M,L,k,x,b)=>{let g=0;const D=v.length;let T=m.length-1,_=D-1;for(;g<=T&&g<=_;){const O=m[g],W=v[g]=b?l1(v[g]):U2(v[g]);if(c3(O,W))w(O,W,z,null,M,L,k,x,b);else break;g++}for(;g<=T&&g<=_;){const O=m[T],W=v[_]=b?l1(v[_]):U2(v[_]);if(c3(O,W))w(O,W,z,null,M,L,k,x,b);else break;T--,_--}if(g>T){if(g<=_){const O=_+1,W=O<D?v[O].el:V;for(;g<=_;)w(null,v[g]=b?l1(v[g]):U2(v[g]),z,W,M,L,k,x,b),g++}}else if(g>_)for(;g<=T;)p2(m[g],M,L,!0),g++;else{const O=g,W=g,Z=new Map;for(g=W;g<=_;g++){const x2=v[g]=b?l1(v[g]):U2(v[g]);x2.key!=null&&Z.set(x2.key,g)}let X,i2=0;const w2=_-W+1;let P1=!1,z8=0;const Z1=new Array(w2);for(g=0;g<w2;g++)Z1[g]=0;for(g=O;g<=T;g++){const x2=m[g];if(i2>=w2){p2(x2,M,L,!0);continue}let D2;if(x2.key!=null)D2=Z.get(x2.key);else for(X=W;X<=_;X++)if(Z1[X-W]===0&&c3(x2,v[X])){D2=X;break}D2===void 0?p2(x2,M,L,!0):(Z1[D2-W]=g+1,D2>=z8?z8=D2:P1=!0,w(x2,v[D2],z,null,M,L,k,x,b),i2++)}const h8=P1?Tf(Z1):D1;for(X=h8.length-1,g=w2-1;g>=0;g--){const x2=W+g,D2=v[x2],V8=x2+1<D?v[x2+1].el:V;Z1[g]===0?w(null,D2,z,V8,M,L,k,x,b):P1&&(X<0||g!==h8[X]?E2(D2,z,V8,2):X--)}}},E2=(m,v,z,V,M=null)=>{const{el:L,type:k,transition:x,children:b,shapeFlag:g}=m;if(g&6){E2(m.component.subTree,v,z,V);return}if(g&128){m.suspense.move(v,z,V);return}if(g&64){k.move(m,v,z,N);return}if(k===O2){r(L,v,z);for(let T=0;T<b.length;T++)E2(b[T],v,z,V);r(m.anchor,v,z);return}if(k===Q4){B(m,v,z);return}if(V!==2&&g&1&&x)if(V===0)x.beforeEnter(L),r(L,v,z),d2(()=>x.enter(L),M);else{const{leave:T,delayLeave:_,afterLeave:O}=x,W=()=>r(L,v,z),Z=()=>{T(L,()=>{W(),O&&O()})};_?_(L,W,Z):Z()}else r(L,v,z)},p2=(m,v,z,V=!1,M=!1)=>{const{type:L,props:k,ref:x,children:b,dynamicChildren:g,shapeFlag:D,patchFlag:T,dirs:_}=m;if(x!=null&&d6(x,null,z,m,!0),D&256){v.ctx.deactivate(m);return}const O=D&1&&_,W=!Q3(m);let Z;if(W&&(Z=k&&k.onVnodeBeforeUnmount)&&_2(Z,v,m),D&6)T3(m.component,z,V);else{if(D&128){m.suspense.unmount(z,V);return}O&&h1(m,null,v,"beforeUnmount"),D&64?m.type.remove(m,v,z,M,N,V):g&&(L!==O2||T>0&&T&64)?v2(g,v,z,!1,!0):(L===O2&&T&384||!M&&D&16)&&v2(b,v,z),V&&k1(m)}(W&&(Z=k&&k.onVnodeUnmounted)||O)&&d2(()=>{Z&&_2(Z,v,m),O&&h1(m,null,v,"unmounted")},z)},k1=m=>{const{type:v,el:z,anchor:V,transition:M}=m;if(v===O2){A1(z,V);return}if(v===Q4){y(m);return}const L=()=>{s(z),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:k,delayLeave:x}=M,b=()=>k(z,L);x?x(m.el,L,b):b()}else L()},A1=(m,v)=>{let z;for(;m!==v;)z=H(m),s(m),m=z;s(v)},T3=(m,v,z)=>{const{bum:V,scope:M,update:L,subTree:k,um:x}=m;V&&X3(V),M.stop(),L&&(L.active=!1,p2(k,m,v,z)),x&&d2(x,v),d2(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},v2=(m,v,z,V=!1,M=!1,L=0)=>{for(let k=L;k<m.length;k++)p2(m[k],v,z,V,M)},p=m=>m.shapeFlag&6?p(m.component.subTree):m.shapeFlag&128?m.suspense.next():H(m.anchor||m.el),P=(m,v,z)=>{m==null?v._vnode&&p2(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,z),N8(),m7(),v._vnode=m},N={p:w,um:p2,m:E2,r:k1,mt:J1,mc:g2,pc:$,pbc:N2,n:p,o:c};let E,K;return a&&([E,K]=a(N)),{render:P,hydrate:E,createApp:bf(P,E)}}function V1({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function N7(c,a,e=!1){const r=c.children,s=a.children;if(U(r)&&U(s))for(let n=0;n<r.length;n++){const i=r[n];let l=s[n];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[n]=l1(s[n]),l.el=i.el),e||N7(i,l)),l.type===L4&&(l.el=i.el)}}function Tf(c){const a=c.slice(),e=[0];let r,s,n,i,l;const f=c.length;for(r=0;r<f;r++){const o=c[r];if(o!==0){if(s=e[e.length-1],c[s]<o){a[r]=s,e.push(r);continue}for(n=0,i=e.length-1;n<i;)l=n+i>>1,c[e[l]]<o?n=l+1:i=l;o<c[e[n]]&&(n>0&&(a[r]=e[n-1]),e[n]=r)}}for(n=e.length,i=e[n-1];n-- >0;)e[n]=i,i=a[i];return e}const Rf=c=>c.__isTeleport,O2=Symbol.for("v-fgt"),L4=Symbol.for("v-txt"),N1=Symbol.for("v-cmt"),Q4=Symbol.for("v-stc"),f3=[];let A2=null;function S7(c=!1){f3.push(A2=c?null:[])}function Bf(){f3.pop(),A2=f3[f3.length-1]||null}let V3=1;function E8(c){V3+=c}function w7(c){return c.dynamicChildren=V3>0?A2||D1:null,Bf(),V3>0&&A2&&A2.push(c),c}function Ff(c,a,e,r,s,n){return w7(n0(c,a,e,r,s,n,!0))}function Ef(c,a,e,r,s){return w7(C2(c,a,e,r,s,!0))}function C6(c){return c?c.__v_isVNode===!0:!1}function c3(c,a){return c.type===a.type&&c.key===a.key}const g4="__vInternal",y7=({key:c})=>c??null,Z3=({ref:c,ref_key:a,ref_for:e})=>(typeof c=="number"&&(c=""+c),c!=null?u2(c)||z2(c)||I(c)?{i:S2,r:c,k:a,f:!!e}:c:null);function n0(c,a=null,e=null,r=0,s=null,n=c===O2?0:1,i=!1,l=!1){const f={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&y7(a),ref:a&&Z3(a),scopeId:d4,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:S2};return l?(i0(f,e),n&128&&c.normalize(f)):e&&(f.shapeFlag|=u2(e)?8:16),V3>0&&!i&&A2&&(f.patchFlag>0||n&6)&&f.patchFlag!==32&&A2.push(f),f}const C2=Df;function Df(c,a=null,e=null,r=0,s=null,n=!1){if((!c||c===hf)&&(c=N1),C6(c)){const l=q1(c,a,!0);return e&&i0(l,e),V3>0&&!n&&A2&&(l.shapeFlag&6?A2[A2.indexOf(c)]=l:A2.push(l)),l.patchFlag|=-2,l}if(Xf(c)&&(c=c.__vccOpts),a){a=_f(a);let{class:l,style:f}=a;l&&!u2(l)&&(a.class=W6(l)),n2(f)&&(e7(f)&&!U(f)&&(f=t2({},f)),a.style=q6(f))}const i=u2(c)?1:cf(c)?128:Rf(c)?64:n2(c)?4:I(c)?2:0;return n0(c,a,e,r,s,i,n,!0)}function _f(c){return c?e7(c)||g4 in c?t2({},c):c:null}function q1(c,a,e=!1){const{props:r,ref:s,patchFlag:n,children:i}=c,l=a?Uf(r||{},a):r;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:l,key:l&&y7(l),ref:a&&a.ref?e&&s?U(s)?s.concat(Z3(a)):[s,Z3(a)]:Z3(a):s,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:i,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==O2?n===-1?16:n|16:n,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&q1(c.ssContent),ssFallback:c.ssFallback&&q1(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx,ce:c.ce}}function Of(c=" ",a=0){return C2(L4,null,c,a)}function cO(c="",a=!1){return a?(S7(),Ef(N1,null,c)):C2(N1,null,c)}function U2(c){return c==null||typeof c=="boolean"?C2(N1):U(c)?C2(O2,null,c.slice()):typeof c=="object"?l1(c):C2(L4,null,String(c))}function l1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:q1(c)}function i0(c,a){let e=0;const{shapeFlag:r}=c;if(a==null)a=null;else if(U(a))e=16;else if(typeof a=="object")if(r&65){const s=a.default;s&&(s._c&&(s._d=!1),i0(c,s()),s._c&&(s._d=!0));return}else{e=32;const s=a._;!s&&!(g4 in a)?a._ctx=S2:s===3&&S2&&(S2.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else I(a)?(a={default:a,_ctx:S2},e=32):(a=String(a),r&64?(e=16,a=[Of(a)]):e=8);c.children=a,c.shapeFlag|=e}function Uf(...c){const a={};for(let e=0;e<c.length;e++){const r=c[e];for(const s in r)if(s==="class")a.class!==r.class&&(a.class=W6([a.class,r.class]));else if(s==="style")a.style=q6([a.style,r.style]);else if(u4(s)){const n=a[s],i=r[s];i&&n!==i&&!(U(n)&&n.includes(i))&&(a[s]=n?[].concat(n,i):i)}else s!==""&&(a[s]=r[s])}return a}function _2(c,a,e,r=null){R2(c,a,7,[e,r])}const If=d7();let qf=0;function Wf(c,a,e){const r=c.type,s=(a?a.appContext:c.appContext)||If,n={uid:qf++,vnode:c,type:r,parent:a,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new q5(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:L7(r,s),emitsOptions:v7(r,s),emit:null,emitted:null,propsDefaults:c2,inheritAttrs:r.inheritAttrs,ctx:c2,data:c2,props:c2,attrs:c2,slots:c2,refs:c2,setupState:c2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=a?a.root:n,n.emit=Kl.bind(null,n),c.ce&&c.ce(n),n}let m2=null,l0,T1,D8="__VUE_INSTANCE_SETTERS__";(T1=o6()[D8])||(T1=o6()[D8]=[]),T1.push(c=>m2=c),l0=c=>{T1.length>1?T1.forEach(a=>a(c)):T1[0](c)};const W1=c=>{l0(c),c.scope.on()},b1=()=>{m2&&m2.scope.off(),l0(null)};function k7(c){return c.vnode.shapeFlag&4}let p3=!1;function Gf(c,a=!1){p3=a;const{props:e,children:r}=c.vnode,s=k7(c);Nf(c,e,s,a),yf(c,r);const n=s?jf(c,a):void 0;return p3=!1,n}function jf(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=Q6(new Proxy(c.ctx,pf));const{setup:r}=e;if(r){const s=c.setupContext=r.length>1?Kf(c):null;W1(c),Y1();const n=o1(r,c,0,[c.props,s]);if(X1(),b1(),U5(n)){if(n.then(b1,b1),a)return n.then(i=>{_8(c,i,a)}).catch(i=>{p4(i,c,0)});c.asyncDep=n}else _8(c,n,a)}else A7(c,a)}function _8(c,a,e){I(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:n2(a)&&(c.setupState=l7(a)),A7(c,e)}let O8;function A7(c,a,e){const r=c.type;if(!c.render){if(!a&&O8&&!r.render){const s=r.template||r0(c).template;if(s){const{isCustomElement:n,compilerOptions:i}=c.appContext.config,{delimiters:l,compilerOptions:f}=r,o=t2(t2({isCustomElement:n,delimiters:l},i),f);r.render=O8(s,o)}}c.render=r.render||T2}W1(c),Y1(),Mf(c),X1(),b1()}function $f(c){return c.attrsProxy||(c.attrsProxy=new Proxy(c.attrs,{get(a,e){return L2(c,"get","$attrs"),a[e]}}))}function Kf(c){const a=e=>{c.exposed=e||{}};return{get attrs(){return $f(c)},slots:c.slots,emit:c.emit,expose:a}}function x4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(l7(Q6(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in l3)return l3[e](c)},has(a,e){return e in a||e in l3}}))}function Yf(c,a=!0){return I(c)?c.displayName||c.name:c.name||a&&c.__name}function Xf(c){return I(c)&&"__vccOpts"in c}const o2=(c,a)=>Il(c,a,p3);function f0(c,a,e){const r=arguments.length;return r===2?n2(a)&&!U(a)?C6(a)?C2(c,null,[a]):C2(c,a):C2(c,null,a):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&C6(e)&&(e=[e]),C2(c,a,e))}const Qf=Symbol.for("v-scx"),Jf=()=>W2(Qf),Zf="3.3.4",ct="http://www.w3.org/2000/svg",M1=typeof document<"u"?document:null,U8=M1&&M1.createElement("template"),at={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,r)=>{const s=a?M1.createElementNS(ct,c):M1.createElement(c,e?{is:e}:void 0);return c==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:c=>M1.createTextNode(c),createComment:c=>M1.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>M1.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,r,s,n){const i=e?e.previousSibling:a.lastChild;if(s&&(s===n||s.nextSibling))for(;a.insertBefore(s.cloneNode(!0),e),!(s===n||!(s=s.nextSibling)););else{U8.innerHTML=r?`<svg>${c}</svg>`:c;const l=U8.content;if(r){const f=l.firstChild;for(;f.firstChild;)l.appendChild(f.firstChild);l.removeChild(f)}a.insertBefore(l,e)}return[i?i.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function et(c,a,e){const r=c._vtc;r&&(a=(a?[a,...r]:[...r]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function rt(c,a,e){const r=c.style,s=u2(e);if(e&&!s){if(a&&!u2(a))for(const n in a)e[n]==null&&L6(r,n,"");for(const n in e)L6(r,n,e[n])}else{const n=r.display;s?a!==e&&(r.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(r.display=n)}}const I8=/\s*!important$/;function L6(c,a,e){if(U(e))e.forEach(r=>L6(c,a,r));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const r=st(c,a);I8.test(e)?c.setProperty(K1(r),e.replace(I8,""),"important"):c[r]=e}}const q8=["Webkit","Moz","ms"],J4={};function st(c,a){const e=J4[a];if(e)return e;let r=G2(a);if(r!=="filter"&&r in c)return J4[a]=r;r=z4(r);for(let s=0;s<q8.length;s++){const n=q8[s]+r;if(n in c)return J4[a]=n}return a}const W8="http://www.w3.org/1999/xlink";function nt(c,a,e,r,s){if(r&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(W8,a.slice(6,a.length)):c.setAttributeNS(W8,a,e);else{const n=fl(a);e==null||n&&!I5(e)?c.removeAttribute(a):c.setAttribute(a,n?"":e)}}function it(c,a,e,r,s,n,i){if(a==="innerHTML"||a==="textContent"){r&&i(r,s,n),c[a]=e??"";return}const l=c.tagName;if(a==="value"&&l!=="PROGRESS"&&!l.includes("-")){c._value=e;const o=l==="OPTION"?c.getAttribute("value"):c.value,t=e??"";o!==t&&(c.value=t),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const o=typeof c[a];o==="boolean"?e=I5(e):e==null&&o==="string"?(e="",f=!0):o==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function R1(c,a,e,r){c.addEventListener(a,e,r)}function lt(c,a,e,r){c.removeEventListener(a,e,r)}function ft(c,a,e,r,s=null){const n=c._vei||(c._vei={}),i=n[a];if(r&&i)i.value=r;else{const[l,f]=tt(a);if(r){const o=n[a]=ut(r,s);R1(c,l,o,f)}else i&&(lt(c,l,i,f),n[a]=void 0)}}const G8=/(?:Once|Passive|Capture)$/;function tt(c){let a;if(G8.test(c)){a={};let r;for(;r=c.match(G8);)c=c.slice(0,c.length-r[0].length),a[r[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):K1(c.slice(2)),a]}let Z4=0;const ot=Promise.resolve(),mt=()=>Z4||(ot.then(()=>Z4=0),Z4=Date.now());function ut(c,a){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;R2(vt(r,e.value),a,5,[r])};return e.value=c,e.attached=mt(),e}function vt(c,a){if(U(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(r=>s=>!s._stopped&&r&&r(s))}else return a}const j8=/^on[a-z]/,Ht=(c,a,e,r,s=!1,n,i,l,f)=>{a==="class"?et(c,r,s):a==="style"?rt(c,e,r):u4(a)?_6(a)||ft(c,a,e,r,i):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):zt(c,a,r,s))?it(c,a,r,n,i,l,f):(a==="true-value"?c._trueValue=r:a==="false-value"&&(c._falseValue=r),nt(c,a,r,s))};function zt(c,a,e,r){return r?!!(a==="innerHTML"||a==="textContent"||a in c&&j8.test(a)&&I(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||j8.test(a)&&u2(e)?!1:a in c}const $8=c=>{const a=c.props["onUpdate:modelValue"]||!1;return U(a)?e=>X3(a,e):a};function ht(c){c.target.composing=!0}function K8(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const aO={created(c,{modifiers:{lazy:a,trim:e,number:r}},s){c._assign=$8(s);const n=r||s.props&&s.props.type==="number";R1(c,a?"change":"input",i=>{if(i.target.composing)return;let l=c.value;e&&(l=l.trim()),n&&(l=t6(l)),c._assign(l)}),e&&R1(c,"change",()=>{c.value=c.value.trim()}),a||(R1(c,"compositionstart",ht),R1(c,"compositionend",K8),R1(c,"change",K8))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:r,number:s}},n){if(c._assign=$8(n),c.composing||document.activeElement===c&&c.type!=="range"&&(e||r&&c.value.trim()===a||(s||c.type==="number")&&t6(c.value)===a))return;const i=a??"";c.value!==i&&(c.value=i)}},Vt=["ctrl","shift","alt","meta"],pt={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>Vt.some(e=>c[`${e}Key`]&&!a.includes(e))},eO=(c,a)=>(e,...r)=>{for(let s=0;s<a.length;s++){const n=pt[a[s]];if(n&&n(e,a))return}return c(e,...r)},Mt=t2({patchProp:Ht},at);let Y8;function dt(){return Y8||(Y8=Af(Mt))}const Ct=(...c)=>{const a=dt().createApp(...c),{mount:e}=a;return a.mount=r=>{const s=Lt(r);if(!s)return;const n=a._component;!I(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.innerHTML="";const i=e(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},a};function Lt(c){return u2(c)?document.querySelector(c):c}var gt=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const xt=Symbol();var X8;(function(c){c.direct="direct",c.patchObject="patch object",c.patchFunction="patch function"})(X8||(X8={}));function bt(){const c=tl(!0),a=c.run(()=>n7({}));let e=[],r=[];const s=Q6({install(n){s._a=n,n.provide(xt,s),n.config.globalProperties.$pinia=s,r.forEach(i=>e.push(i)),r=[]},use(n){return!this._a&&!gt?r.push(n):e.push(n),this},_p:e,_a:null,_e:c,_s:new Map,state:a});return s}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const B1=typeof window<"u";function Nt(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const Y=Object.assign;function c6(c,a){const e={};for(const r in a){const s=a[r];e[r]=B2(s)?s.map(c):c(s)}return e}const t3=()=>{},B2=Array.isArray,St=/\/$/,wt=c=>c.replace(St,"");function a6(c,a,e="/"){let r,s={},n="",i="";const l=a.indexOf("#");let f=a.indexOf("?");return l<f&&l>=0&&(f=-1),f>-1&&(r=a.slice(0,f),n=a.slice(f+1,l>-1?l:a.length),s=c(n)),l>-1&&(r=r||a.slice(0,l),i=a.slice(l,a.length)),r=Pt(r??a,e),{fullPath:r+(n&&"?")+n+i,path:r,query:s,hash:i}}function yt(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function Q8(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function kt(c,a,e){const r=a.matched.length-1,s=e.matched.length-1;return r>-1&&r===s&&G1(a.matched[r],e.matched[s])&&P7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function G1(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function P7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!At(c[e],a[e]))return!1;return!0}function At(c,a){return B2(c)?J8(c,a):B2(a)?J8(a,c):c===a}function J8(c,a){return B2(a)?c.length===a.length&&c.every((e,r)=>e===a[r]):c.length===1&&c[0]===a}function Pt(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),r=c.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let n=e.length-1,i,l;for(i=0;i<r.length;i++)if(l=r[i],l!==".")if(l==="..")n>1&&n--;else break;return e.slice(0,n).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var M3;(function(c){c.pop="pop",c.push="push"})(M3||(M3={}));var o3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(o3||(o3={}));function Tt(c){if(!c)if(B1){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),wt(c)}const Rt=/^[^#]+#/;function Bt(c,a){return c.replace(Rt,"#")+a}function Ft(c,a){const e=document.documentElement.getBoundingClientRect(),r=c.getBoundingClientRect();return{behavior:a.behavior,left:r.left-e.left-(a.left||0),top:r.top-e.top-(a.top||0)}}const b4=()=>({left:window.pageXOffset,top:window.pageYOffset});function Et(c){let a;if("el"in c){const e=c.el,r=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;a=Ft(s,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Z8(c,a){return(history.state?history.state.position-a:-1)+c}const g6=new Map;function Dt(c,a){g6.set(c,a)}function _t(c){const a=g6.get(c);return g6.delete(c),a}let Ot=()=>location.protocol+"//"+location.host;function T7(c,a){const{pathname:e,search:r,hash:s}=a,n=c.indexOf("#");if(n>-1){let l=s.includes(c.slice(n))?c.slice(n).length:1,f=s.slice(l);return f[0]!=="/"&&(f="/"+f),Q8(f,"")}return Q8(e,c)+r+s}function Ut(c,a,e,r){let s=[],n=[],i=null;const l=({state:H})=>{const h=T7(c,location),S=e.value,w=a.value;let F=0;if(H){if(e.value=h,a.value=H,i&&i===S){i=null;return}F=w?H.position-w.position:0}else r(h);s.forEach(d=>{d(e.value,S,{delta:F,type:M3.pop,direction:F?F>0?o3.forward:o3.back:o3.unknown})})};function f(){i=e.value}function o(H){s.push(H);const h=()=>{const S=s.indexOf(H);S>-1&&s.splice(S,1)};return n.push(h),h}function t(){const{history:H}=window;H.state&&H.replaceState(Y({},H.state,{scroll:b4()}),"")}function u(){for(const H of n)H();n=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",t)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",t,{passive:!0}),{pauseListeners:f,listen:o,destroy:u}}function c5(c,a,e,r=!1,s=!1){return{back:c,current:a,forward:e,replaced:r,position:window.history.length,scroll:s?b4():null}}function It(c){const{history:a,location:e}=window,r={value:T7(c,e)},s={value:a.state};s.value||n(r.value,{back:null,current:r.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function n(f,o,t){const u=c.indexOf("#"),H=u>-1?(e.host&&document.querySelector("base")?c:c.slice(u))+f:Ot()+c+f;try{a[t?"replaceState":"pushState"](o,"",H),s.value=o}catch(h){console.error(h),e[t?"replace":"assign"](H)}}function i(f,o){const t=Y({},a.state,c5(s.value.back,f,s.value.forward,!0),o,{position:s.value.position});n(f,t,!0),r.value=f}function l(f,o){const t=Y({},s.value,a.state,{forward:f,scroll:b4()});n(t.current,t,!0);const u=Y({},c5(r.value,f,null),{position:t.position+1},o);n(f,u,!1),r.value=f}return{location:r,state:s,push:l,replace:i}}function qt(c){c=Tt(c);const a=It(c),e=Ut(c,a.state,a.location,a.replace);function r(n,i=!0){i||e.pauseListeners(),history.go(n)}const s=Y({location:"",base:c,go:r,createHref:Bt.bind(null,c)},a,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>a.state.value}),s}function Wt(c){return typeof c=="string"||c&&typeof c=="object"}function R7(c){return typeof c=="string"||typeof c=="symbol"}const n1={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B7=Symbol("");var a5;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(a5||(a5={}));function j1(c,a){return Y(new Error,{type:c,[B7]:!0},a)}function $2(c,a){return c instanceof Error&&B7 in c&&(a==null||!!(c.type&a))}const e5="[^/]+?",Gt={sensitive:!1,strict:!1,start:!0,end:!0},jt=/[.+*?^${}()[\]/\\]/g;function $t(c,a){const e=Y({},Gt,a),r=[];let s=e.start?"^":"";const n=[];for(const o of c){const t=o.length?[]:[90];e.strict&&!o.length&&(s+="/");for(let u=0;u<o.length;u++){const H=o[u];let h=40+(e.sensitive?.25:0);if(H.type===0)u||(s+="/"),s+=H.value.replace(jt,"\\$&"),h+=40;else if(H.type===1){const{value:S,repeatable:w,optional:F,regexp:d}=H;n.push({name:S,repeatable:w,optional:F});const C=d||e5;if(C!==e5){h+=10;try{new RegExp(`(${C})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${S}" (${C}): `+y.message)}}let B=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;u||(B=F&&o.length<2?`(?:/${B})`:"/"+B),F&&(B+="?"),s+=B,h+=20,F&&(h+=-8),w&&(h+=-20),C===".*"&&(h+=-50)}t.push(h)}r.push(t)}if(e.strict&&e.end){const o=r.length-1;r[o][r[o].length-1]+=.7000000000000001}e.strict||(s+="/?"),e.end?s+="$":e.strict&&(s+="(?:/|$)");const i=new RegExp(s,e.sensitive?"":"i");function l(o){const t=o.match(i),u={};if(!t)return null;for(let H=1;H<t.length;H++){const h=t[H]||"",S=n[H-1];u[S.name]=h&&S.repeatable?h.split("/"):h}return u}function f(o){let t="",u=!1;for(const H of c){(!u||!t.endsWith("/"))&&(t+="/"),u=!1;for(const h of H)if(h.type===0)t+=h.value;else if(h.type===1){const{value:S,repeatable:w,optional:F}=h,d=S in o?o[S]:"";if(B2(d)&&!w)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const C=B2(d)?d.join("/"):d;if(!C)if(F)H.length<2&&(t.endsWith("/")?t=t.slice(0,-1):u=!0);else throw new Error(`Missing required param "${S}"`);t+=C}}return t||"/"}return{re:i,score:r,keys:n,parse:l,stringify:f}}function Kt(c,a){let e=0;for(;e<c.length&&e<a.length;){const r=a[e]-c[e];if(r)return r;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function Yt(c,a){let e=0;const r=c.score,s=a.score;for(;e<r.length&&e<s.length;){const n=Kt(r[e],s[e]);if(n)return n;e++}if(Math.abs(s.length-r.length)===1){if(r5(r))return 1;if(r5(s))return-1}return s.length-r.length}function r5(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const Xt={type:0,value:""},Qt=/[a-zA-Z0-9_]/;function Jt(c){if(!c)return[[]];if(c==="/")return[[Xt]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(h){throw new Error(`ERR (${e})/"${o}": ${h}`)}let e=0,r=e;const s=[];let n;function i(){n&&s.push(n),n=[]}let l=0,f,o="",t="";function u(){o&&(e===0?n.push({type:0,value:o}):e===1||e===2||e===3?(n.length>1&&(f==="*"||f==="+")&&a(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),n.push({type:1,value:o,regexp:t,repeatable:f==="*"||f==="+",optional:f==="*"||f==="?"})):a("Invalid state to consume buffer"),o="")}function H(){o+=f}for(;l<c.length;){if(f=c[l++],f==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:f==="/"?(o&&u(),i()):f===":"?(u(),e=1):H();break;case 4:H(),e=r;break;case 1:f==="("?e=2:Qt.test(f)?H():(u(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--);break;case 2:f===")"?t[t.length-1]=="\\"?t=t.slice(0,-1)+f:e=3:t+=f;break;case 3:u(),e=0,f!=="*"&&f!=="?"&&f!=="+"&&l--,t="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${o}"`),u(),i(),s}function Zt(c,a,e){const r=$t(Jt(c.path),e),s=Y(r,{record:c,parent:a,children:[],alias:[]});return a&&!s.record.aliasOf==!a.record.aliasOf&&a.children.push(s),s}function co(c,a){const e=[],r=new Map;a=i5({strict:!1,end:!0,sensitive:!1},a);function s(t){return r.get(t)}function n(t,u,H){const h=!H,S=ao(t);S.aliasOf=H&&H.record;const w=i5(a,t),F=[S];if("alias"in t){const B=typeof t.alias=="string"?[t.alias]:t.alias;for(const y of B)F.push(Y({},S,{components:H?H.record.components:S.components,path:y,aliasOf:H?H.record:S}))}let d,C;for(const B of F){const{path:y}=B;if(u&&y[0]!=="/"){const q=u.record.path,J=q[q.length-1]==="/"?"":"/";B.path=u.record.path+(y&&J+y)}if(d=Zt(B,u,w),H?H.alias.push(d):(C=C||d,C!==d&&C.alias.push(d),h&&t.name&&!n5(d)&&i(t.name)),S.children){const q=S.children;for(let J=0;J<q.length;J++)n(q[J],d,H&&H.children[J])}H=H||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&f(d)}return C?()=>{i(C)}:t3}function i(t){if(R7(t)){const u=r.get(t);u&&(r.delete(t),e.splice(e.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=e.indexOf(t);u>-1&&(e.splice(u,1),t.record.name&&r.delete(t.record.name),t.children.forEach(i),t.alias.forEach(i))}}function l(){return e}function f(t){let u=0;for(;u<e.length&&Yt(t,e[u])>=0&&(t.record.path!==e[u].record.path||!F7(t,e[u]));)u++;e.splice(u,0,t),t.record.name&&!n5(t)&&r.set(t.record.name,t)}function o(t,u){let H,h={},S,w;if("name"in t&&t.name){if(H=r.get(t.name),!H)throw j1(1,{location:t});w=H.record.name,h=Y(s5(u.params,H.keys.filter(C=>!C.optional).map(C=>C.name)),t.params&&s5(t.params,H.keys.map(C=>C.name))),S=H.stringify(h)}else if("path"in t)S=t.path,H=e.find(C=>C.re.test(S)),H&&(h=H.parse(S),w=H.record.name);else{if(H=u.name?r.get(u.name):e.find(C=>C.re.test(u.path)),!H)throw j1(1,{location:t,currentLocation:u});w=H.record.name,h=Y({},u.params,t.params),S=H.stringify(h)}const F=[];let d=H;for(;d;)F.unshift(d.record),d=d.parent;return{name:w,path:S,params:h,matched:F,meta:ro(F)}}return c.forEach(t=>n(t)),{addRoute:n,resolve:o,removeRoute:i,getRoutes:l,getRecordMatcher:s}}function s5(c,a){const e={};for(const r of a)r in c&&(e[r]=c[r]);return e}function ao(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:eo(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function eo(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const r in c.components)a[r]=typeof e=="object"?e[r]:e;return a}function n5(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function ro(c){return c.reduce((a,e)=>Y(a,e.meta),{})}function i5(c,a){const e={};for(const r in c)e[r]=r in a?a[r]:c[r];return e}function F7(c,a){return a.children.some(e=>e===c||F7(c,e))}const E7=/#/g,so=/&/g,no=/\//g,io=/=/g,lo=/\?/g,D7=/\+/g,fo=/%5B/g,to=/%5D/g,_7=/%5E/g,oo=/%60/g,O7=/%7B/g,mo=/%7C/g,U7=/%7D/g,uo=/%20/g;function t0(c){return encodeURI(""+c).replace(mo,"|").replace(fo,"[").replace(to,"]")}function vo(c){return t0(c).replace(O7,"{").replace(U7,"}").replace(_7,"^")}function x6(c){return t0(c).replace(D7,"%2B").replace(uo,"+").replace(E7,"%23").replace(so,"%26").replace(oo,"`").replace(O7,"{").replace(U7,"}").replace(_7,"^")}function Ho(c){return x6(c).replace(io,"%3D")}function zo(c){return t0(c).replace(E7,"%23").replace(lo,"%3F")}function ho(c){return c==null?"":zo(c).replace(no,"%2F")}function l4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function Vo(c){const a={};if(c===""||c==="?")return a;const r=(c[0]==="?"?c.slice(1):c).split("&");for(let s=0;s<r.length;++s){const n=r[s].replace(D7," "),i=n.indexOf("="),l=l4(i<0?n:n.slice(0,i)),f=i<0?null:l4(n.slice(i+1));if(l in a){let o=a[l];B2(o)||(o=a[l]=[o]),o.push(f)}else a[l]=f}return a}function l5(c){let a="";for(let e in c){const r=c[e];if(e=Ho(e),r==null){r!==void 0&&(a+=(a.length?"&":"")+e);continue}(B2(r)?r.map(n=>n&&x6(n)):[r&&x6(r)]).forEach(n=>{n!==void 0&&(a+=(a.length?"&":"")+e,n!=null&&(a+="="+n))})}return a}function po(c){const a={};for(const e in c){const r=c[e];r!==void 0&&(a[e]=B2(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return a}const Mo=Symbol(""),f5=Symbol(""),N4=Symbol(""),I7=Symbol(""),b6=Symbol("");function a3(){let c=[];function a(r){return c.push(r),()=>{const s=c.indexOf(r);s>-1&&c.splice(s,1)}}function e(){c=[]}return{add:a,list:()=>c.slice(),reset:e}}function f1(c,a,e,r,s){const n=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const f=u=>{u===!1?l(j1(4,{from:e,to:a})):u instanceof Error?l(u):Wt(u)?l(j1(2,{from:a,to:u})):(n&&r.enterCallbacks[s]===n&&typeof u=="function"&&n.push(u),i())},o=c.call(r&&r.instances[s],a,e,f);let t=Promise.resolve(o);c.length<3&&(t=t.then(f)),t.catch(u=>l(u))})}function e6(c,a,e,r){const s=[];for(const n of c)for(const i in n.components){let l=n.components[i];if(!(a!=="beforeRouteEnter"&&!n.instances[i]))if(Co(l)){const o=(l.__vccOpts||l)[a];o&&s.push(f1(o,e,r,n,i))}else{let f=l();s.push(()=>f.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${n.path}"`));const t=Nt(o)?o.default:o;n.components[i]=t;const H=(t.__vccOpts||t)[a];return H&&f1(H,e,r,n,i)()}))}}return s}function Co(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function t5(c){const a=W2(N4),e=W2(I7),r=o2(()=>a.resolve(x1(c.to))),s=o2(()=>{const{matched:f}=r.value,{length:o}=f,t=f[o-1],u=e.matched;if(!t||!u.length)return-1;const H=u.findIndex(G1.bind(null,t));if(H>-1)return H;const h=o5(f[o-2]);return o>1&&o5(t)===h&&u[u.length-1].path!==h?u.findIndex(G1.bind(null,f[o-2])):H}),n=o2(()=>s.value>-1&&bo(e.params,r.value.params)),i=o2(()=>s.value>-1&&s.value===e.matched.length-1&&P7(e.params,r.value.params));function l(f={}){return xo(f)?a[x1(c.replace)?"replace":"push"](x1(c.to)).catch(t3):Promise.resolve()}return{route:r,href:o2(()=>r.value.href),isActive:n,isExactActive:i,navigate:l}}const Lo=e0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:t5,setup(c,{slots:a}){const e=V4(t5(c)),{options:r}=W2(N4),s=o2(()=>({[m5(c.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[m5(c.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const n=a.default&&a.default(e);return c.custom?n:f0("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},n)}}}),go=Lo;function xo(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function bo(c,a){for(const e in a){const r=a[e],s=c[e];if(typeof r=="string"){if(r!==s)return!1}else if(!B2(s)||s.length!==r.length||r.some((n,i)=>n!==s[i]))return!1}return!0}function o5(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const m5=(c,a,e)=>c??a??e,No=e0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const r=W2(b6),s=o2(()=>c.route||r.value),n=W2(f5,0),i=o2(()=>{let o=x1(n);const{matched:t}=s.value;let u;for(;(u=t[o])&&!u.components;)o++;return o}),l=o2(()=>s.value.matched[i.value]);J3(f5,o2(()=>i.value+1)),J3(Mo,l),J3(b6,s);const f=n7();return i3(()=>[f.value,l.value,c.name],([o,t,u],[H,h,S])=>{t&&(t.instances[u]=o,h&&h!==t&&o&&o===H&&(t.leaveGuards.size||(t.leaveGuards=h.leaveGuards),t.updateGuards.size||(t.updateGuards=h.updateGuards))),o&&t&&(!h||!G1(t,h)||!H)&&(t.enterCallbacks[u]||[]).forEach(w=>w(o))},{flush:"post"}),()=>{const o=s.value,t=c.name,u=l.value,H=u&&u.components[t];if(!H)return u5(e.default,{Component:H,route:o});const h=u.props[t],S=h?h===!0?o.params:typeof h=="function"?h(o):h:null,F=f0(H,Y({},S,a,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(u.instances[t]=null)},ref:f}));return u5(e.default,{Component:F,route:o})||F}}});function u5(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const q7=No;function So(c){const a=co(c.routes,c),e=c.parseQuery||Vo,r=c.stringifyQuery||l5,s=c.history,n=a3(),i=a3(),l=a3(),f=Dl(n1);let o=n1;B1&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const t=c6.bind(null,p=>""+p),u=c6.bind(null,ho),H=c6.bind(null,l4);function h(p,P){let N,E;return R7(p)?(N=a.getRecordMatcher(p),E=P):E=p,a.addRoute(E,N)}function S(p){const P=a.getRecordMatcher(p);P&&a.removeRoute(P)}function w(){return a.getRoutes().map(p=>p.record)}function F(p){return!!a.getRecordMatcher(p)}function d(p,P){if(P=Y({},P||f.value),typeof p=="string"){const z=a6(e,p,P.path),V=a.resolve({path:z.path},P),M=s.createHref(z.fullPath);return Y(z,V,{params:H(V.params),hash:l4(z.hash),redirectedFrom:void 0,href:M})}let N;if("path"in p)N=Y({},p,{path:a6(e,p.path,P.path).path});else{const z=Y({},p.params);for(const V in z)z[V]==null&&delete z[V];N=Y({},p,{params:u(z)}),P.params=u(P.params)}const E=a.resolve(N,P),K=p.hash||"";E.params=t(H(E.params));const m=yt(r,Y({},p,{hash:vo(K),path:E.path})),v=s.createHref(m);return Y({fullPath:m,hash:K,query:r===l5?po(p.query):p.query||{}},E,{redirectedFrom:void 0,href:v})}function C(p){return typeof p=="string"?a6(e,p,f.value.path):Y({},p)}function B(p,P){if(o!==p)return j1(8,{from:P,to:p})}function y(p){return r2(p)}function q(p){return y(Y(C(p),{replace:!0}))}function J(p){const P=p.matched[p.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let E=typeof N=="function"?N(p):N;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=C(E):{path:E},E.params={}),Y({query:p.query,hash:p.hash,params:"path"in E?{}:p.params},E)}}function r2(p,P){const N=o=d(p),E=f.value,K=p.state,m=p.force,v=p.replace===!0,z=J(N);if(z)return r2(Y(C(z),{state:typeof z=="object"?Y({},K,z.state):K,force:m,replace:v}),P||N);const V=N;V.redirectedFrom=P;let M;return!m&&kt(r,E,N)&&(M=j1(16,{to:V,from:E}),E2(E,E,!0,!1)),(M?Promise.resolve(M):N2(V,E)).catch(L=>$2(L)?$2(L,2)?L:r1(L):$(L,V,E)).then(L=>{if(L){if($2(L,2))return r2(Y({replace:v},C(L.to),{state:typeof L.to=="object"?Y({},K,L.to.state):K,force:m}),P||V)}else L=z1(V,E,!0,v,K);return e1(V,E,L),L})}function g2(p,P){const N=B(p,P);return N?Promise.reject(N):Promise.resolve()}function h2(p){const P=A1.values().next().value;return P&&typeof P.runWithContext=="function"?P.runWithContext(p):p()}function N2(p,P){let N;const[E,K,m]=wo(p,P);N=e6(E.reverse(),"beforeRouteLeave",p,P);for(const z of E)z.leaveGuards.forEach(V=>{N.push(f1(V,p,P))});const v=g2.bind(null,p,P);return N.push(v),v2(N).then(()=>{N=[];for(const z of n.list())N.push(f1(z,p,P));return N.push(v),v2(N)}).then(()=>{N=e6(K,"beforeRouteUpdate",p,P);for(const z of K)z.updateGuards.forEach(V=>{N.push(f1(V,p,P))});return N.push(v),v2(N)}).then(()=>{N=[];for(const z of m)if(z.beforeEnter)if(B2(z.beforeEnter))for(const V of z.beforeEnter)N.push(f1(V,p,P));else N.push(f1(z.beforeEnter,p,P));return N.push(v),v2(N)}).then(()=>(p.matched.forEach(z=>z.enterCallbacks={}),N=e6(m,"beforeRouteEnter",p,P),N.push(v),v2(N))).then(()=>{N=[];for(const z of i.list())N.push(f1(z,p,P));return N.push(v),v2(N)}).catch(z=>$2(z,8)?z:Promise.reject(z))}function e1(p,P,N){l.list().forEach(E=>h2(()=>E(p,P,N)))}function z1(p,P,N,E,K){const m=B(p,P);if(m)return m;const v=P===n1,z=B1?history.state:{};N&&(E||v?s.replace(p.fullPath,Y({scroll:v&&z&&z.scroll},K)):s.push(p.fullPath,K)),f.value=p,E2(p,P,N,v),r1()}let F2;function J1(){F2||(F2=s.listen((p,P,N)=>{if(!T3.listening)return;const E=d(p),K=J(E);if(K){r2(Y(K,{replace:!0}),E).catch(t3);return}o=E;const m=f.value;B1&&Dt(Z8(m.fullPath,N.delta),b4()),N2(E,m).catch(v=>$2(v,12)?v:$2(v,2)?(r2(v.to,E).then(z=>{$2(z,20)&&!N.delta&&N.type===M3.pop&&s.go(-1,!1)}).catch(t3),Promise.reject()):(N.delta&&s.go(-N.delta,!1),$(v,E,m))).then(v=>{v=v||z1(E,m,!1),v&&(N.delta&&!$2(v,8)?s.go(-N.delta,!1):N.type===M3.pop&&$2(v,20)&&s.go(-1,!1)),e1(E,m,v)}).catch(t3)}))}let y1=a3(),f2=a3(),Q;function $(p,P,N){r1(p);const E=f2.list();return E.length?E.forEach(K=>K(p,P,N)):console.error(p),Promise.reject(p)}function j2(){return Q&&f.value!==n1?Promise.resolve():new Promise((p,P)=>{y1.add([p,P])})}function r1(p){return Q||(Q=!p,J1(),y1.list().forEach(([P,N])=>p?N(p):P()),y1.reset()),p}function E2(p,P,N,E){const{scrollBehavior:K}=c;if(!B1||!K)return Promise.resolve();const m=!N&&_t(Z8(p.fullPath,0))||(E||!N)&&history.state&&history.state.scroll||null;return t7().then(()=>K(p,P,m)).then(v=>v&&Et(v)).catch(v=>$(v,p,P))}const p2=p=>s.go(p);let k1;const A1=new Set,T3={currentRoute:f,listening:!0,addRoute:h,removeRoute:S,hasRoute:F,getRoutes:w,resolve:d,options:c,push:y,replace:q,go:p2,back:()=>p2(-1),forward:()=>p2(1),beforeEach:n.add,beforeResolve:i.add,afterEach:l.add,onError:f2.add,isReady:j2,install(p){const P=this;p.component("RouterLink",go),p.component("RouterView",q7),p.config.globalProperties.$router=P,Object.defineProperty(p.config.globalProperties,"$route",{enumerable:!0,get:()=>x1(f)}),B1&&!k1&&f.value===n1&&(k1=!0,y(s.location).catch(K=>{}));const N={};for(const K in n1)Object.defineProperty(N,K,{get:()=>f.value[K],enumerable:!0});p.provide(N4,P),p.provide(I7,c7(N)),p.provide(b6,f);const E=p.unmount;A1.add(p),p.unmount=function(){A1.delete(p),A1.size<1&&(o=n1,F2&&F2(),F2=null,f.value=n1,k1=!1,Q=!1),E()}}};function v2(p){return p.reduce((P,N)=>P.then(()=>h2(N)),Promise.resolve())}return T3}function wo(c,a){const e=[],r=[],s=[],n=Math.max(a.matched.length,c.matched.length);for(let i=0;i<n;i++){const l=a.matched[i];l&&(c.matched.find(o=>G1(o,l))?r.push(l):e.push(l));const f=c.matched[i];f&&(a.matched.find(o=>G1(o,f))||s.push(f))}return[e,r,s]}function rO(){return W2(N4)}const yo=n0("header",{class:"bg-[#1e272e] text-white px-4 py-5 font-semibold"}," MXCLICK ",-1),ko={__name:"App",setup(c){return(a,e)=>(S7(),Ff(O2,null,[yo,C2(x1(q7))],64))}},Ao="modulepreload",Po=function(c){return"/"+c},v5={},r6=function(a,e,r){if(!e||e.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(e.map(n=>{if(n=Po(n),n in v5)return;v5[n]=!0;const i=n.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(!!r)for(let t=s.length-1;t>=0;t--){const u=s[t];if(u.href===n&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":Ao,i||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),i)return new Promise((t,u)=>{o.addEventListener("load",t),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>a()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})};const W7=So({history:qt("/"),routes:[{path:"/",name:"home",component:()=>r6(()=>import("./HomeView-e074fa42.js"),["assets/HomeView-e074fa42.js","assets/_plugin-vue_export-helper-c27b6911.js"]),meta:{requiresAuth:!0,title:"Inicio | Panel de administracion"}},{path:"/login",name:"login",component:()=>r6(()=>import("./LoginView-899e8bdd.js"),["assets/LoginView-899e8bdd.js","assets/index-c86ce77c.js","assets/index-755185d7.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/LoginView-8f78422c.css"]),meta:{requiresAuth:!1,title:"Inicio de sesion"}},{path:"/register",name:"register",component:()=>r6(()=>import("./RegisterView-9984cfe8.js"),["assets/RegisterView-9984cfe8.js","assets/index-c86ce77c.js","assets/index-755185d7.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/RegisterView-28626074.css"]),meta:{requiresAuth:!1,title:"Crear Cuenta"}}]});W7.beforeEach((c,a,e)=>{if(c.matched.some(s=>s.meta.requiresAuth)){if(!localStorage.getItem("token")){e({path:"/login"});return}}else if(c.path==="/register"&&localStorage.getItem("token")||c.path==="/login"&&localStorage.getItem("token")){e("/");return}const r=c.meta.title;r&&(document.title=r),e()});function H5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function A(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?H5(Object(e),!0).forEach(function(r){l2(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):H5(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function f4(c){"@babel/helpers - typeof";return f4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f4(c)}function To(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function z5(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Ro(c,a,e){return a&&z5(c.prototype,a),e&&z5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function l2(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function o0(c,a){return Fo(c)||Do(c,a)||G7(c,a)||Oo()}function b3(c){return Bo(c)||Eo(c)||G7(c)||_o()}function Bo(c){if(Array.isArray(c))return N6(c)}function Fo(c){if(Array.isArray(c))return c}function Eo(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Do(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,n=!1,i,l;try{for(e=e.call(c);!(s=(i=e.next()).done)&&(r.push(i.value),!(a&&r.length===a));s=!0);}catch(f){n=!0,l=f}finally{try{!s&&e.return!=null&&e.return()}finally{if(n)throw l}}return r}}function G7(c,a){if(c){if(typeof c=="string")return N6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N6(c,a)}}function N6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function _o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h5=function(){},m0={},j7={},$7=null,K7={mark:h5,measure:h5};try{typeof window<"u"&&(m0=window),typeof document<"u"&&(j7=document),typeof MutationObserver<"u"&&($7=MutationObserver),typeof performance<"u"&&(K7=performance)}catch{}var Uo=m0.navigator||{},V5=Uo.userAgent,p5=V5===void 0?"":V5,u1=m0,e2=j7,M5=$7,O3=K7;u1.document;var a1=!!e2.documentElement&&!!e2.head&&typeof e2.addEventListener=="function"&&typeof e2.createElement=="function",Y7=~p5.indexOf("MSIE")||~p5.indexOf("Trident/"),U3,I3,q3,W3,G3,Q2="___FONT_AWESOME___",S6=16,X7="fa",Q7="svg-inline--fa",S1="data-fa-i2svg",w6="data-fa-pseudo-element",Io="data-fa-pseudo-element-pending",u0="data-prefix",v0="data-icon",d5="fontawesome-i2svg",qo="async",Wo=["HTML","HEAD","STYLE","SCRIPT"],J7=function(){try{return!0}catch{return!1}}(),a2="classic",s2="sharp",H0=[a2,s2];function N3(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[a2]}})}var d3=N3((U3={},l2(U3,a2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),l2(U3,s2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),U3)),C3=N3((I3={},l2(I3,a2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),l2(I3,s2,{solid:"fass",regular:"fasr",light:"fasl"}),I3)),L3=N3((q3={},l2(q3,a2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),l2(q3,s2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),q3)),Go=N3((W3={},l2(W3,a2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),l2(W3,s2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),W3)),jo=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Z7="fa-layers-text",$o=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ko=N3((G3={},l2(G3,a2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),l2(G3,s2,{900:"fass",400:"fasr",300:"fasl"}),G3)),cc=[1,2,3,4,5,6,7,8,9,10],Yo=cc.concat([11,12,13,14,15,16,17,18,19,20]),Xo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],C1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g3=new Set;Object.keys(C3[a2]).map(g3.add.bind(g3));Object.keys(C3[s2]).map(g3.add.bind(g3));var Qo=[].concat(H0,b3(g3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",C1.GROUP,C1.SWAP_OPACITY,C1.PRIMARY,C1.SECONDARY]).concat(cc.map(function(c){return"".concat(c,"x")})).concat(Yo.map(function(c){return"w-".concat(c)})),m3=u1.FontAwesomeConfig||{};function Jo(c){var a=e2.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Zo(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e2&&typeof e2.querySelector=="function"){var cm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cm.forEach(function(c){var a=o0(c,2),e=a[0],r=a[1],s=Zo(Jo(e));s!=null&&(m3[r]=s)})}var ac={styleDefault:"solid",familyDefault:"classic",cssPrefix:X7,replacementClass:Q7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m3.familyPrefix&&(m3.cssPrefix=m3.familyPrefix);var $1=A(A({},ac),m3);$1.autoReplaceSvg||($1.observeMutations=!1);var R={};Object.keys(ac).forEach(function(c){Object.defineProperty(R,c,{enumerable:!0,set:function(e){$1[c]=e,u3.forEach(function(r){return r(R)})},get:function(){return $1[c]}})});Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(a){$1.cssPrefix=a,u3.forEach(function(e){return e(R)})},get:function(){return $1.cssPrefix}});u1.FontAwesomeConfig=R;var u3=[];function am(c){return u3.push(c),function(){u3.splice(u3.indexOf(c),1)}}var i1=S6,q2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function em(c){if(!(!c||!a1)){var a=e2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e2.head.childNodes,r=null,s=e.length-1;s>-1;s--){var n=e[s],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return e2.head.insertBefore(a,r),c}}var rm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function x3(){for(var c=12,a="";c-- >0;)a+=rm[Math.random()*62|0];return a}function Q1(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function z0(c){return c.classList?Q1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function ec(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function sm(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(ec(c[e]),'" ')},"").trim()}function S4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function h0(c){return c.size!==q2.size||c.x!==q2.x||c.y!==q2.y||c.rotate!==q2.rotate||c.flipX||c.flipY}function nm(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(n," ").concat(i," ").concat(l)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:f,path:o}}function im(c){var a=c.transform,e=c.width,r=e===void 0?S6:e,s=c.height,n=s===void 0?S6:s,i=c.startCentered,l=i===void 0?!1:i,f="";return l&&Y7?f+="translate(".concat(a.x/i1-r/2,"em, ").concat(a.y/i1-n/2,"em) "):l?f+="translate(calc(-50% + ".concat(a.x/i1,"em), calc(-50% + ").concat(a.y/i1,"em)) "):f+="translate(".concat(a.x/i1,"em, ").concat(a.y/i1,"em) "),f+="scale(".concat(a.size/i1*(a.flipX?-1:1),", ").concat(a.size/i1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var lm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function rc(){var c=X7,a=Q7,e=R.cssPrefix,r=R.replacementClass,s=lm;if(e!==c||r!==a){var n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),l=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(l,".".concat(r))}return s}var C5=!1;function s6(){R.autoAddCss&&!C5&&(em(rc()),C5=!0)}var fm={mixout:function(){return{dom:{css:rc,insertCss:s6}}},hooks:function(){return{beforeDOMElementCreation:function(){s6()},beforeI2svg:function(){s6()}}}},J2=u1||{};J2[Q2]||(J2[Q2]={});J2[Q2].styles||(J2[Q2].styles={});J2[Q2].hooks||(J2[Q2].hooks={});J2[Q2].shims||(J2[Q2].shims=[]);var P2=J2[Q2],sc=[],tm=function c(){e2.removeEventListener("DOMContentLoaded",c),t4=1,sc.map(function(a){return a()})},t4=!1;a1&&(t4=(e2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e2.readyState),t4||e2.addEventListener("DOMContentLoaded",tm));function om(c){a1&&(t4?setTimeout(c,0):sc.push(c))}function S3(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,n=s===void 0?[]:s;return typeof c=="string"?ec(c):"<".concat(a," ").concat(sm(r),">").concat(n.map(S3).join(""),"</").concat(a,">")}function L5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var mm=function(a,e){return function(r,s,n,i){return a.call(e,r,s,n,i)}},n6=function(a,e,r,s){var n=Object.keys(a),i=n.length,l=s!==void 0?mm(e,s):e,f,o,t;for(r===void 0?(f=1,t=a[n[0]]):(f=0,t=r);f<i;f++)o=n[f],t=l(t,a[o],o,a);return t};function um(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var n=c.charCodeAt(e++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function y6(c){var a=um(c);return a.length===1?a[0].toString(16):null}function vm(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function g5(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function k6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,n=g5(a);typeof P2.hooks.addPack=="function"&&!s?P2.hooks.addPack(c,g5(a)):P2.styles[c]=A(A({},P2.styles[c]||{}),n),c==="fas"&&k6("fa",a)}var j3,$3,K3,F1=P2.styles,Hm=P2.shims,zm=(j3={},l2(j3,a2,Object.values(L3[a2])),l2(j3,s2,Object.values(L3[s2])),j3),V0=null,nc={},ic={},lc={},fc={},tc={},hm=($3={},l2($3,a2,Object.keys(d3[a2])),l2($3,s2,Object.keys(d3[s2])),$3);function Vm(c){return~Qo.indexOf(c)}function pm(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Vm(s)?s:null}var oc=function(){var a=function(n){return n6(F1,function(i,l,f){return i[f]=n6(l,n,{}),i},{})};nc=a(function(s,n,i){if(n[3]&&(s[n[3]]=i),n[2]){var l=n[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){s[f.toString(16)]=i})}return s}),ic=a(function(s,n,i){if(s[i]=i,n[2]){var l=n[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){s[f]=i})}return s}),tc=a(function(s,n,i){var l=n[2];return s[i]=i,l.forEach(function(f){s[f]=i}),s});var e="far"in F1||R.autoFetchSvg,r=n6(Hm,function(s,n){var i=n[0],l=n[1],f=n[2];return l==="far"&&!e&&(l="fas"),typeof i=="string"&&(s.names[i]={prefix:l,iconName:f}),typeof i=="number"&&(s.unicodes[i.toString(16)]={prefix:l,iconName:f}),s},{names:{},unicodes:{}});lc=r.names,fc=r.unicodes,V0=w4(R.styleDefault,{family:R.familyDefault})};am(function(c){V0=w4(c.styleDefault,{family:R.familyDefault})});oc();function p0(c,a){return(nc[c]||{})[a]}function Mm(c,a){return(ic[c]||{})[a]}function L1(c,a){return(tc[c]||{})[a]}function mc(c){return lc[c]||{prefix:null,iconName:null}}function dm(c){var a=fc[c],e=p0("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function v1(){return V0}var M0=function(){return{prefix:null,iconName:null,rest:[]}};function w4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?a2:e,s=d3[r][c],n=C3[r][c]||C3[r][s],i=c in P2.styles?c:null;return n||i||null}var x5=(K3={},l2(K3,a2,Object.keys(L3[a2])),l2(K3,s2,Object.keys(L3[s2])),K3);function y4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,n=(a={},l2(a,a2,"".concat(R.cssPrefix,"-").concat(a2)),l2(a,s2,"".concat(R.cssPrefix,"-").concat(s2)),a),i=null,l=a2;(c.includes(n[a2])||c.some(function(o){return x5[a2].includes(o)}))&&(l=a2),(c.includes(n[s2])||c.some(function(o){return x5[s2].includes(o)}))&&(l=s2);var f=c.reduce(function(o,t){var u=pm(R.cssPrefix,t);if(F1[t]?(t=zm[l].includes(t)?Go[l][t]:t,i=t,o.prefix=t):hm[l].indexOf(t)>-1?(i=t,o.prefix=w4(t,{family:l})):u?o.iconName=u:t!==R.replacementClass&&t!==n[a2]&&t!==n[s2]&&o.rest.push(t),!s&&o.prefix&&o.iconName){var H=i==="fa"?mc(o.iconName):{},h=L1(o.prefix,o.iconName);H.prefix&&(i=null),o.iconName=H.iconName||h||o.iconName,o.prefix=H.prefix||o.prefix,o.prefix==="far"&&!F1.far&&F1.fas&&!R.autoFetchSvg&&(o.prefix="fas")}return o},M0());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===s2&&(F1.fass||R.autoFetchSvg)&&(f.prefix="fass",f.iconName=L1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=v1()||"fas"),f}var Cm=function(){function c(){To(this,c),this.definitions={}}return Ro(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];var i=s.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(l){e.definitions[l]=A(A({},e.definitions[l]||{}),i[l]),k6(l,i[l]);var f=L3[a2][l];f&&k6(f,i[l]),oc()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(n){var i=s[n],l=i.prefix,f=i.iconName,o=i.icon,t=o[2];e[l]||(e[l]={}),t.length>0&&t.forEach(function(u){typeof u=="string"&&(e[l][u]=o)}),e[l][f]=o}),e}}]),c}(),b5=[],E1={},U1={},Lm=Object.keys(U1);function gm(c,a){var e=a.mixoutsTo;return b5=c,E1={},Object.keys(U1).forEach(function(r){Lm.indexOf(r)===-1&&delete U1[r]}),b5.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(i){typeof s[i]=="function"&&(e[i]=s[i]),f4(s[i])==="object"&&Object.keys(s[i]).forEach(function(l){e[i]||(e[i]={}),e[i][l]=s[i][l]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){E1[i]||(E1[i]=[]),E1[i].push(n[i])})}r.provides&&r.provides(U1)}),e}function A6(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var n=E1[c]||[];return n.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function w1(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=E1[c]||[];s.forEach(function(n){n.apply(null,e)})}function Z2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return U1[c]?U1[c].apply(null,a):void 0}function P6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||v1();if(a)return a=L1(e,a)||a,L5(uc.definitions,e,a)||L5(P2.styles,e,a)}var uc=new Cm,xm=function(){R.autoReplaceSvg=!1,R.observeMutations=!1,w1("noAuto")},bm={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a1?(w1("beforeI2svg",a),Z2("pseudoElements2svg",a),Z2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,om(function(){Sm({autoReplaceSvgRoot:e}),w1("watch",a)})}},Nm={icon:function(a){if(a===null)return null;if(f4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:L1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=w4(a[0]);return{prefix:r,iconName:L1(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(R.cssPrefix,"-"))>-1||a.match(jo))){var s=y4(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||v1(),iconName:L1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var n=v1();return{prefix:n,iconName:L1(n,a)||a}}}},b2={noAuto:xm,config:R,dom:bm,parse:Nm,library:uc,findIconDefinition:P6,toHtml:S3},Sm=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?e2:e;(Object.keys(P2.styles).length>0||R.autoFetchSvg)&&a1&&R.autoReplaceSvg&&b2.dom.i2svg({node:r})};function k4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return S3(r)})}}),Object.defineProperty(c,"node",{get:function(){if(a1){var r=e2.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function wm(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,n=c.styles,i=c.transform;if(h0(i)&&e.found&&!r.found){var l=e.width,f=e.height,o={x:l/f/2,y:.5};s.style=S4(A(A({},n),{},{"transform-origin":"".concat(o.x+i.x/16,"em ").concat(o.y+i.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function ym(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,n=c.symbol,i=n===!0?"".concat(a,"-").concat(R.cssPrefix,"-").concat(e):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},s),{},{id:i}),children:r}]}]}function d0(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,n=c.iconName,i=c.transform,l=c.symbol,f=c.title,o=c.maskId,t=c.titleId,u=c.extra,H=c.watchable,h=H===void 0?!1:H,S=r.found?r:e,w=S.width,F=S.height,d=s==="fak",C=[R.replacementClass,n?"".concat(R.cssPrefix,"-").concat(n):""].filter(function(h2){return u.classes.indexOf(h2)===-1}).filter(function(h2){return h2!==""||!!h2}).concat(u.classes).join(" "),B={children:[],attributes:A(A({},u.attributes),{},{"data-prefix":s,"data-icon":n,class:C,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(F)})},y=d&&!~u.classes.indexOf("fa-fw")?{width:"".concat(w/F*16*.0625,"em")}:{};h&&(B.attributes[S1]=""),f&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(t||x3())},children:[f]}),delete B.attributes.title);var q=A(A({},B),{},{prefix:s,iconName:n,main:e,mask:r,maskId:o,transform:i,symbol:l,styles:A(A({},y),u.styles)}),J=r.found&&e.found?Z2("generateAbstractMask",q)||{children:[],attributes:{}}:Z2("generateAbstractIcon",q)||{children:[],attributes:{}},r2=J.children,g2=J.attributes;return q.children=r2,q.attributes=g2,l?ym(q):wm(q)}function N5(c){var a=c.content,e=c.width,r=c.height,s=c.transform,n=c.title,i=c.extra,l=c.watchable,f=l===void 0?!1:l,o=A(A(A({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});f&&(o[S1]="");var t=A({},i.styles);h0(s)&&(t.transform=im({transform:s,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var u=S4(t);u.length>0&&(o.style=u);var H=[];return H.push({tag:"span",attributes:o,children:[a]}),n&&H.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),H}function km(c){var a=c.content,e=c.title,r=c.extra,s=A(A(A({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),n=S4(r.styles);n.length>0&&(s.style=n);var i=[];return i.push({tag:"span",attributes:s,children:[a]}),e&&i.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),i}var i6=P2.styles;function T6(c){var a=c[0],e=c[1],r=c.slice(4),s=o0(r,1),n=s[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(R.cssPrefix,"-").concat(C1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(C1.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(R.cssPrefix,"-").concat(C1.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:a,height:e,icon:i}}var Am={found:!1,width:512,height:512};function Pm(c,a){!J7&&!R.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function R6(c,a){var e=a;return a==="fa"&&R.styleDefault!==null&&(a=v1()),new Promise(function(r,s){if(Z2("missingIconAbstract"),e==="fa"){var n=mc(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&i6[a]&&i6[a][c]){var i=i6[a][c];return r(T6(i))}Pm(c,a),r(A(A({},Am),{},{icon:R.showMissingIcons&&c?Z2("missingIconAbstract")||{}:{}}))})}var S5=function(){},B6=R.measurePerformance&&O3&&O3.mark&&O3.measure?O3:{mark:S5,measure:S5},s3='FA "6.4.2"',Tm=function(a){return B6.mark("".concat(s3," ").concat(a," begins")),function(){return vc(a)}},vc=function(a){B6.mark("".concat(s3," ").concat(a," ends")),B6.measure("".concat(s3," ").concat(a),"".concat(s3," ").concat(a," begins"),"".concat(s3," ").concat(a," ends"))},C0={begin:Tm,end:vc},c4=function(){};function w5(c){var a=c.getAttribute?c.getAttribute(S1):null;return typeof a=="string"}function Rm(c){var a=c.getAttribute?c.getAttribute(u0):null,e=c.getAttribute?c.getAttribute(v0):null;return a&&e}function Bm(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(R.replacementClass)}function Fm(){if(R.autoReplaceSvg===!0)return a4.replace;var c=a4[R.autoReplaceSvg];return c||a4.replace}function Em(c){return e2.createElementNS("http://www.w3.org/2000/svg",c)}function Dm(c){return e2.createElement(c)}function Hc(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Em:Dm:e;if(typeof c=="string")return e2.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(i){s.setAttribute(i,c.attributes[i])});var n=c.children||[];return n.forEach(function(i){s.appendChild(Hc(i,{ceFn:r}))}),s}function _m(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var a4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(Hc(s),e)}),e.getAttribute(S1)===null&&R.keepOriginalSource){var r=e2.createComment(_m(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~z0(e).indexOf(R.replacementClass))return a4.replace(a);var s=new RegExp("".concat(R.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(l,f){return f===R.replacementClass||f.match(s)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(l){return S3(l)}).join(`
`);e.setAttribute(S1,""),e.innerHTML=i}};function y5(c){c()}function zc(c,a){var e=typeof a=="function"?a:c4;if(c.length===0)e();else{var r=y5;R.mutateApproach===qo&&(r=u1.requestAnimationFrame||y5),r(function(){var s=Fm(),n=C0.begin("mutate");c.map(s),n(),e()})}}var L0=!1;function hc(){L0=!0}function F6(){L0=!1}var o4=null;function k5(c){if(M5&&R.observeMutations){var a=c.treeCallback,e=a===void 0?c4:a,r=c.nodeCallback,s=r===void 0?c4:r,n=c.pseudoElementsCallback,i=n===void 0?c4:n,l=c.observeMutationsRoot,f=l===void 0?e2:l;o4=new M5(function(o){if(!L0){var t=v1();Q1(o).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!w5(u.addedNodes[0])&&(R.searchPseudoElements&&i(u.target),e(u.target)),u.type==="attributes"&&u.target.parentNode&&R.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&w5(u.target)&&~Xo.indexOf(u.attributeName))if(u.attributeName==="class"&&Rm(u.target)){var H=y4(z0(u.target)),h=H.prefix,S=H.iconName;u.target.setAttribute(u0,h||t),S&&u.target.setAttribute(v0,S)}else Bm(u.target)&&s(u.target)})}}),a1&&o4.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Om(){o4&&o4.disconnect()}function Um(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var n=s.split(":"),i=n[0],l=n.slice(1);return i&&l.length>0&&(r[i]=l.join(":").trim()),r},{})),e}function Im(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=y4(z0(c));return s.prefix||(s.prefix=v1()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Mm(s.prefix,c.innerText)||p0(s.prefix,y6(c.innerText))),!s.iconName&&R.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function qm(c){var a=Q1(c.attributes).reduce(function(s,n){return s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return R.autoA11y&&(e?a["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(r||x3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Wm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:q2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function A5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Im(c),r=e.iconName,s=e.prefix,n=e.rest,i=qm(c),l=A6("parseNodeAttributes",{},c),f=a.styleParser?Um(c):[];return A({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:q2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:f,attributes:i}},l)}var Gm=P2.styles;function Vc(c){var a=R.autoReplaceSvg==="nest"?A5(c,{styleParser:!1}):A5(c);return~a.extra.classes.indexOf(Z7)?Z2("generateLayersText",c,a):Z2("generateSvgReplacementMutation",c,a)}var H1=new Set;H0.map(function(c){H1.add("fa-".concat(c))});Object.keys(d3[a2]).map(H1.add.bind(H1));Object.keys(d3[s2]).map(H1.add.bind(H1));H1=b3(H1);function P5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!a1)return Promise.resolve();var e=e2.documentElement.classList,r=function(u){return e.add("".concat(d5,"-").concat(u))},s=function(u){return e.remove("".concat(d5,"-").concat(u))},n=R.autoFetchSvg?H1:H0.map(function(t){return"fa-".concat(t)}).concat(Object.keys(Gm));n.includes("fa")||n.push("fa");var i=[".".concat(Z7,":not([").concat(S1,"])")].concat(n.map(function(t){return".".concat(t,":not([").concat(S1,"])")})).join(", ");if(i.length===0)return Promise.resolve();var l=[];try{l=Q1(c.querySelectorAll(i))}catch{}if(l.length>0)r("pending"),s("complete");else return Promise.resolve();var f=C0.begin("onTree"),o=l.reduce(function(t,u){try{var H=Vc(u);H&&t.push(H)}catch(h){J7||h.name==="MissingIcon"&&console.error(h)}return t},[]);return new Promise(function(t,u){Promise.all(o).then(function(H){zc(H,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(H){f(),u(H)})})}function jm(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vc(c).then(function(e){e&&zc([e],a)})}function $m(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:P6(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:P6(s||{})),c(r,A(A({},e),{},{mask:s}))}}var Km=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?q2:r,n=e.symbol,i=n===void 0?!1:n,l=e.mask,f=l===void 0?null:l,o=e.maskId,t=o===void 0?null:o,u=e.title,H=u===void 0?null:u,h=e.titleId,S=h===void 0?null:h,w=e.classes,F=w===void 0?[]:w,d=e.attributes,C=d===void 0?{}:d,B=e.styles,y=B===void 0?{}:B;if(a){var q=a.prefix,J=a.iconName,r2=a.icon;return k4(A({type:"icon"},a),function(){return w1("beforeDOMElementCreation",{iconDefinition:a,params:e}),R.autoA11y&&(H?C["aria-labelledby"]="".concat(R.replacementClass,"-title-").concat(S||x3()):(C["aria-hidden"]="true",C.focusable="false")),d0({icons:{main:T6(r2),mask:f?T6(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:J,transform:A(A({},q2),s),symbol:i,title:H,maskId:t,titleId:S,extra:{attributes:C,styles:y,classes:F}})})}},Ym={mixout:function(){return{icon:$m(Km)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=P5,e.nodeCallback=jm,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?e2:r,n=e.callback,i=n===void 0?function(){}:n;return P5(s,i)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,n=r.title,i=r.titleId,l=r.prefix,f=r.transform,o=r.symbol,t=r.mask,u=r.maskId,H=r.extra;return new Promise(function(h,S){Promise.all([R6(s,l),t.iconName?R6(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var F=o0(w,2),d=F[0],C=F[1];h([e,d0({icons:{main:d,mask:C},prefix:l,iconName:s,transform:f,symbol:o,maskId:u,title:n,titleId:i,extra:H,watchable:!0})])}).catch(S)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,n=e.main,i=e.transform,l=e.styles,f=S4(l);f.length>0&&(s.style=f);var o;return h0(i)&&(o=Z2("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(o||n.icon),{children:r,attributes:s}}}},Xm={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,n=s===void 0?[]:s;return k4({type:"layer"},function(){w1("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(l){Array.isArray(l)?l.map(function(f){i=i.concat(f.abstract)}):i=i.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(R.cssPrefix,"-layers")].concat(b3(n)).join(" ")},children:i}]})}}}},Qm={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,n=s===void 0?null:s,i=r.classes,l=i===void 0?[]:i,f=r.attributes,o=f===void 0?{}:f,t=r.styles,u=t===void 0?{}:t;return k4({type:"counter",content:e},function(){return w1("beforeDOMElementCreation",{content:e,params:r}),km({content:e.toString(),title:n,extra:{attributes:o,styles:u,classes:["".concat(R.cssPrefix,"-layers-counter")].concat(b3(l))}})})}}}},Jm={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,n=s===void 0?q2:s,i=r.title,l=i===void 0?null:i,f=r.classes,o=f===void 0?[]:f,t=r.attributes,u=t===void 0?{}:t,H=r.styles,h=H===void 0?{}:H;return k4({type:"text",content:e},function(){return w1("beforeDOMElementCreation",{content:e,params:r}),N5({content:e,transform:A(A({},q2),n),title:l,extra:{attributes:u,styles:h,classes:["".concat(R.cssPrefix,"-layers-text")].concat(b3(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,n=r.transform,i=r.extra,l=null,f=null;if(Y7){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();l=t.width/o,f=t.height/o}return R.autoA11y&&!s&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,N5({content:e.innerHTML,width:l,height:f,transform:n,title:s,extra:i,watchable:!0})])}}},Zm=new RegExp('"',"ug"),T5=[1105920,1112319];function cu(c){var a=c.replace(Zm,""),e=vm(a,0),r=e>=T5[0]&&e<=T5[1],s=a.length===2?a[0]===a[1]:!1;return{value:y6(s?a[0]:a),isSecondary:r||s}}function R5(c,a){var e="".concat(Io).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var n=Q1(c.children),i=n.filter(function(r2){return r2.getAttribute(w6)===a})[0],l=u1.getComputedStyle(c,a),f=l.getPropertyValue("font-family").match($o),o=l.getPropertyValue("font-weight"),t=l.getPropertyValue("content");if(i&&!f)return c.removeChild(i),r();if(f&&t!=="none"&&t!==""){var u=l.getPropertyValue("content"),H=~["Sharp"].indexOf(f[2])?s2:a2,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?C3[H][f[2].toLowerCase()]:Ko[H][o],S=cu(u),w=S.value,F=S.isSecondary,d=f[0].startsWith("FontAwesome"),C=p0(h,w),B=C;if(d){var y=dm(w);y.iconName&&y.prefix&&(C=y.iconName,h=y.prefix)}if(C&&!F&&(!i||i.getAttribute(u0)!==h||i.getAttribute(v0)!==B)){c.setAttribute(e,B),i&&c.removeChild(i);var q=Wm(),J=q.extra;J.attributes[w6]=a,R6(C,h).then(function(r2){var g2=d0(A(A({},q),{},{icons:{main:r2,mask:M0()},prefix:h,iconName:B,extra:J,watchable:!0})),h2=e2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(h2,c.firstChild):c.appendChild(h2),h2.outerHTML=g2.map(function(N2){return S3(N2)}).join(`