import{r as d,h as g,a as x,o as w,c as k,b as e,d as p,w as I,i as _,v as f,j as T,F as O,f as h,p as S,g as C}from"./index-f65f9b8f.js";import{a as N}from"./axios-21b846bc.js";import{_ as V,l as n}from"./_plugin-vue_export-helper-4e9dfc8e.js";const l=i=>(S("data-v-6ae96f08"),i=i(),C(),i),M={class:"w-1/2 mt-4 text-left"},j={"aria-label":"breadcrumb",class:"w-max"},A={class:"flex flex-wrap items-center w-full px-4 py-2 rounded-md bg-blue-gray-50 bg-opacity-60"},L={class:"flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-pink-500"},U=l(()=>e("span",{class:"mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500"},"/",-1)),B=l(()=>e("li",{class:"flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-pink-500"},[e("span",{class:"opacity-60"},[e("span",null,"Crear acortador")])],-1)),F=l(()=>e("h1",{class:"p-4 text-black"},"Crear Acortador",-1)),P=["onSubmit"],q={class:"flex items-center justify-between border border-solid border-[#ddd] mb-6"},E={class:"flex items-center justify-between border border-solid border-[#ddd] mb-6"},R={class:"flex items-center justify-between border border-solid border-[#ddd] mb-6 w-full overflow-hidden"},D=l(()=>e("div",{class:"py-2 pl-4 rounded-sm"},[e("span",{class:"text-green-500"},"https://"),h("mxclick.site/ ")],-1)),G=l(()=>e("input",{type:"submit",class:"mb-4 inline-flex items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 bg-[#1e272e] rounded-sm hover:bg-[#0e1216] focus:shadow-outline focus:outline-none w-full",value:"Generar enlace"},null,-1)),Z={__name:"CrearLinkView",setup(i){const v=d(localStorage.getItem("token")),u=d(""),c=d(""),m=d("");g(()=>{c.value=b(7)});const b=s=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let o="";for(let a=0;a<s;a++)o+=t.charAt(Math.floor(Math.random()*t.length));return o},y=async()=>{try{const s={Authorization:"Bearer "+v.value,"Content-Type":"application/json"},t={link_name:u.value,link_short:c.value,link_real:m.value},{data:o}=await N.post("https://api.mxclick.site/api/link/create",t,{headers:s});o.status==="OK"?n.success(o.message,{theme:"colored",autoClose:1500,position:n.POSITION.TOP_LEFT,transition:n.TRANSITIONS.ZOOM}):n.error(o.message,{theme:"colored",autoClose:1500,position:n.POSITION.TOP_LEFT,transition:n.TRANSITIONS.ZOOM})}catch(s){console.error(s)}};return(s,t)=>{const o=x("router-link"),a=x("font-awesome-icon");return w(),k(O,null,[e("div",M,[e("nav",j,[e("ol",A,[e("li",L,[p(o,{to:"/",class:"opacity-60"},{default:I(()=>[h(" Inicio ")]),_:1}),U]),B])])]),F,e("form",{class:"p-4 pt-0",onSubmit:T(y,["prevent"])},[e("div",q,[_(e("input",{type:"text",placeholder:"Titulo del enlace",class:"flex-1 py-2 pl-4 rounded-sm outline-0",required:"","onUpdate:modelValue":t[0]||(t[0]=r=>u.value=r)},null,512),[[f,u.value]]),p(a,{icon:["fas","file-signature"],class:"py-2 pr-4 text-gray-500"})]),e("div",E,[_(e("input",{type:"text",placeholder:"URL para acortar",class:"flex-1 py-2 pl-4 rounded-sm outline-0",required:"","onUpdate:modelValue":t[1]||(t[1]=r=>m.value=r)},null,512),[[f,m.value]]),p(a,{icon:["fas","link"],class:"py-2 pr-4 text-gray-500"})]),e("div",R,[D,_(e("input",{type:"text",placeholder:"Genera un UUID",class:"flex-1 py-2 overflow-hidden outline-0","onUpdate:modelValue":t[2]||(t[2]=r=>c.value=r),required:""},null,512),[[f,c.value]]),p(a,{icon:["fas","pen"],class:"py-2 pr-4 text-gray-500"})]),G],40,P)],64)}}},J=V(Z,[["__scopeId","data-v-6ae96f08"]]);export{J as default};