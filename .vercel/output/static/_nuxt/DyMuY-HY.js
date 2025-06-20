import{V as l,c5 as d,c6 as w,c7 as C,i as p}from"./D6CIXsZs.js";/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,s)=>s?s.toUpperCase():o.toLowerCase()),g=e=>{const t=m(e);return t.charAt(0).toUpperCase()+t.slice(1)},k=(...e)=>e.filter((t,o,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=({size:e,strokeWidth:t=2,absoluteStrokeWidth:o,color:s,iconNode:a,name:r,class:L,...u},{slots:n})=>l("svg",{...c,width:e||c.width,height:e||c.height,stroke:s||c.stroke,"stroke-width":o?Number(t)*24/Number(e):t,class:k("lucide",...r?[`lucide-${i(g(r))}-icon`,`lucide-${i(r)}`]:["lucide-icon"]),...u},[...a.map(h=>l(...h)),...n.default?[n.default()]:[]]);/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=(e,t)=>(o,{slots:s})=>l(v,{...o,iconNode:t,name:e},s);/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=f("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),A=()=>{const{locales:e,setLocale:t,locale:o}=d(),s=w(),a=C();return{locales:e,locale:o,setLocale:t,localePath:s,switchLocalePath:a}},x=()=>{const{localePath:e}=A(),t=p();return{isActive:s=>t.fullPath===e(s)}};export{b as U,x as a,f as c,A as u};
