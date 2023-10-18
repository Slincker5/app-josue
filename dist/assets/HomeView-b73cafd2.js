import{a as x}from"./axios-21b846bc.js";import{_ as f,l as d}from"./_plugin-vue_export-helper-10f9bc22.js";import{r as i,a as w,o as p,c as _,b as e,t as a,d as C,w as I,F as S,e as T,f as u,p as N,g as O}from"./index-043336a8.js";const B="/assets/usuario-1216284d.png";const r=c=>(N("data-v-ab29590e"),c=c(),O(),c),V={class:"border border-solid border-[#e6e4e4] shadow-md w-[95%] mx-auto mt-2"},A={class:"flex items-center gap-2 p-4"},E=r(()=>e("img",{src:B,class:"w-[40px] h-[40px] block"},null,-1)),L=r(()=>e("span",{class:"block text-xs font-light leading-3 text-gray-400"},"Bienvenido de nuevo,",-1)),$={class:"text-lg font-medium leading-6 text-gray-900"},j={class:"flex items-center justify-between bg-gray-100"},F={class:"px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"},H={class:"px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"},P=r(()=>e("div",{class:"px-4 py-3 text-sm text-center"},"Cerrar sesion",-1)),z={class:"p-4"},M=r(()=>e("h2",{class:"p-4 pt-0 font-medium text-gray-900"}," Ultimos acortadores creados ",-1)),D={class:"font-medium text-black"},R={class:"flex items-center gap-4"},U=["onClick"],W=["onClick"],Z=r(()=>e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900"}," Stats ",-1)),q={__name:"HomeView",setup(c){const b=i(localStorage.getItem("username")),m=i(localStorage.getItem("token")),h=i("");(async()=>{try{const t={Authorization:"Bearer "+m.value,"Content-Type":"application/json"},{data:o}=await x.get("https://api.mxclick.site/api/link/clics",{headers:t});h.value=o[0].total_clics}catch(t){console.error(t)}})();const n=i([]);(async()=>{try{const t={Authorization:"Bearer "+m.value,"Content-Type":"application/json"},{data:o}=await x.get("https://api.mxclick.site/api/link/list",{headers:t});n.value=o}catch(t){console.error(t)}})();async function g(t){try{await navigator.clipboard.writeText(t),d.success("Enlace copiado al portapapeles.",{theme:"colored",autoClose:1500,position:d.POSITION.TOP_LEFT,transition:d.TRANSITIONS.ZOOM})}catch(o){console.error("No se pudo copiar el texto:",o)}}function v(t,o="Compartir enlace",l="Mira este enlace!"){navigator.share?navigator.share({title:o,text:l,url:t}).then(()=>{console.log("Enlace compartido exitosamente!")}).catch(s=>{console.log("Ocurrió un error al compartir:",s)}):console.log("La API Web Share no está disponible en este navegador.")}return(t,o)=>{const l=w("router-link");return p(),_("main",null,[e("div",V,[e("div",A,[E,e("div",null,[L,e("h2",$,a(b.value),1)])]),e("div",j,[e("div",F,a(n.value.length)+" enlaces ",1),e("div",H,a(h.value)+" vistas ",1),P])]),e("div",z,[C(l,{to:"/crear-enlace",class:"block px-4 py-2 text-center text-white bg-slate-800 hover:bg-slate-700"},{default:I(()=>[u("Crear acortador")]),_:1})]),M,(p(!0),_(S,null,T(n.value,(s,y)=>(p(),_("div",{class:"p-4 border-b border-solid border-[#ddd]",key:s.id},[e("div",null,[e("b",D,"#"+a(y),1),u(" https://mxclick.site/"+a(s.link_short),1)]),e("div",R,[e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900",onClick:k=>g(`https://mxclick.site/${s.link_short}`)}," Copiar ",8,U),e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900",onClick:k=>v(`https://mxclick.site/${s.link_short}`)}," Compartir ",8,W),Z])]))),128))])}}},Y=f(q,[["__scopeId","data-v-ab29590e"]]);export{Y as default};
