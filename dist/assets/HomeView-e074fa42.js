import{r as i,o as p,a as u,b as f,c as m,d as e,e as l,w as _,v as h,p as x,f as b,g as y}from"./index-5ec09b90.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const s=r=>(x("data-v-d420841a"),r=r(),b(),r),w=s(()=>e("h1",{class:"p-4 text-lg text-black"},"Crear Enlace",-1)),g={class:"p-4 pt-0"},k={class:"flex items-center justify-between border border-solid border-[#ddd] mb-6"},I=s(()=>e("input",{type:"text",placeholder:"Titulo del enlace",class:"flex-1 py-2 pl-4 rounded-sm outline-0",required:""},null,-1)),V={class:"flex items-center justify-between border border-solid border-[#ddd] mb-6"},j=s(()=>e("input",{type:"text",placeholder:"URL para acortar",class:"flex-1 py-2 pl-4 rounded-sm outline-0",required:""},null,-1)),M={class:"flex items-center justify-between border border-solid border-[#ddd] mb-6 w-full overflow-hidden"},S=s(()=>e("div",{class:"py-2 pl-4 rounded-sm"},[e("span",{class:"text-green-500"},"https://"),y("mxclick.site/")],-1)),U=s(()=>e("input",{type:"submit",class:"mb-4 inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 bg-[#1e272e] rounded-sm hover:bg-[#0e1216] focus:shadow-outline focus:outline-none w-full",value:"Generar enlace"},null,-1)),q={__name:"HomeView",setup(r){const a=i("");p(()=>{a.value=c(7)});const c=d=>{const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let n=0;n<d;n++)t+=o.charAt(Math.floor(Math.random()*o.length));return t};return(d,o)=>{const t=u("font-awesome-icon");return f(),m("main",null,[w,e("form",g,[e("div",k,[I,l(t,{icon:["fas","file-signature"],class:"py-2 pr-4 text-gray-500"})]),e("div",V,[j,l(t,{icon:["fas","link"],class:"py-2 pr-4 text-gray-500"})]),e("div",M,[S,_(e("input",{type:"text",placeholder:"Genera un UUID",class:"flex-1 py-2 overflow-hidden outline-0","onUpdate:modelValue":o[0]||(o[0]=n=>a.value=n),required:""},null,512),[[h,a.value]]),l(t,{icon:["fas","pen"],class:"py-2 pr-4 text-gray-500"})]),U])])}}},T=v(q,[["__scopeId","data-v-d420841a"]]);export{T as default};
