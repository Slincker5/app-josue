import{_ as f,a as _}from"./_plugin-vue_export-helper-ee8c573c.js";import{r as c,o as w,a as C,b as d,c as p,d as e,t as n,e as S,w as I,f as x,F as B,g as T,p as V,h as A}from"./index-8f497695.js";const M="/assets/usuario-1216284d.png",i=a=>(V("data-v-685ddd14"),a=a(),A(),a),N={class:"border border-solid border-[#e6e4e4] shadow-md w-[95%] mx-auto mt-2"},j=i(()=>e("div",{class:"flex items-center gap-2 p-4"},[e("img",{src:M,class:"w-[40px] h-[40px] block"}),e("div",null,[e("span",{class:"block text-xs font-light leading-3 text-gray-400"},"Bienvenido de nuevo,"),e("h2",{class:"text-lg font-medium leading-6 text-gray-900"}," Josue Gabriel ")])],-1)),L={class:"flex items-center justify-between bg-gray-100"},$={class:"px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"},z={class:"px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"},E=i(()=>e("div",{class:"px-4 py-3 text-sm text-center"},"Cerrar sesion",-1)),F={class:"p-4"},H=i(()=>e("h2",{class:"p-4 pt-0 font-medium text-gray-900"},"Ultimos acortadores creados",-1)),D={class:"font-medium text-black"},G={class:"flex items-center gap-4"},J=["onClick"],O=["onClick"],P=i(()=>e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900"},"Stats",-1)),U={__name:"HomeView",setup(a){const u=c("");w(()=>{u.value=b(7)});const b=t=>{const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let r="";for(let s=0;s<t;s++)r+=o.charAt(Math.floor(Math.random()*o.length));return r},h=c(localStorage.getItem("token")),m=c("");(async()=>{try{const t={Authorization:"Bearer "+h.value,"Content-Type":"application/json"},{data:o}=await _.get("https://api.mxclick.site/api/link/clics",{headers:t});m.value=o[0].total_clics}catch(t){console.error(t)}})();const l=c([]);(async()=>{try{const t={Authorization:"Bearer "+h.value,"Content-Type":"application/json"},{data:o}=await _.get("https://api.mxclick.site/api/link/list",{headers:t});l.value=o}catch(t){console.error(t)}})();async function g(t){try{await navigator.clipboard.writeText(t),console.log("Texto copiado al portapapeles:",t)}catch(o){console.error("No se pudo copiar el texto:",o)}}function v(t,o="Compartir enlace",r="Mira este enlace!"){navigator.share?navigator.share({title:o,text:r,url:t}).then(()=>{console.log("Enlace compartido exitosamente!")}).catch(s=>{console.log("Ocurrió un error al compartir:",s)}):console.log("La API Web Share no está disponible en este navegador.")}return(t,o)=>{const r=C("router-link");return d(),p("main",null,[e("div",N,[j,e("div",L,[e("div",$,n(l.value.length)+" enlaces ",1),e("div",z,n(m.value)+" vistas ",1),E])]),e("div",F,[S(r,{to:"/crear-enlace",class:"block px-4 py-2 text-center text-white bg-slate-800 hover:bg-slate-700"},{default:I(()=>[x("Crear acortador")]),_:1})]),H,(d(!0),p(B,null,T(l.value,(s,y)=>(d(),p("div",{class:"p-4 border-b border-solid border-[#ddd]",key:s.id},[e("div",null,[e("b",D,"#"+n(y),1),x(" https://mxclick.site/"+n(s.link_short),1)]),e("div",G,[e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900",onClick:k=>g(`https://mxclick.site/${s.link_short}`)},"Copiar",8,J),e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900",onClick:k=>v(`https://mxclick.site/${s.link_short}`)},"Compartir",8,O),P])]))),128))])}}},R=f(U,[["__scopeId","data-v-685ddd14"]]);export{R as default};
