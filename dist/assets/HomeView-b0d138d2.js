import{a as x}from"./axios-21b846bc.js";import{_ as I,l}from"./_plugin-vue_export-helper-4e9dfc8e.js";import{u as T,r as i,a as N,o as d,c as p,b as e,t as a,d as b,w as g,F as O,e as B,f as _,p as V,g as $}from"./index-f65f9b8f.js";const A="/assets/usuario-1216284d.png";const u=r=>(V("data-v-86a18693"),r=r(),$(),r),E={class:"border border-solid border-[#e6e4e4] shadow-md w-[95%] mx-auto mt-2"},L={class:"flex items-center gap-2 p-4"},j=u(()=>e("img",{src:A,class:"w-[40px] h-[40px] block"},null,-1)),F=u(()=>e("span",{class:"block text-xs font-light leading-3 text-gray-400"},"Bienvenido de nuevo,",-1)),H={class:"text-lg font-medium leading-6 text-gray-900"},P={class:"flex items-center justify-between bg-gray-100"},z={class:"px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"},M={class:"px-4 py-3 border-r border-solid border-[#ddd] text-center text-sm text-gray-500"},R={class:"p-4"},D=u(()=>e("h2",{class:"p-4 pt-0 font-medium text-gray-900"}," Ultimos acortadores creados ",-1)),U={class:"font-medium text-black"},W={class:"flex items-center gap-4"},Z=["onClick"],q=["onClick"],G={__name:"HomeView",setup(r){const v=T(),y=i(localStorage.getItem("username")),m=i(localStorage.getItem("token")),h=i("");(async()=>{try{const t={Authorization:"Bearer "+m.value,"Content-Type":"application/json"},{data:o}=await x.get("https://api.mxclick.site/api/link/clics",{headers:t});h.value=o[0].total_clics}catch(t){console.error(t)}})();const n=i([]);(async()=>{try{const t={Authorization:"Bearer "+m.value,"Content-Type":"application/json"},{data:o}=await x.get("https://api.mxclick.site/api/link/list",{headers:t});n.value=o}catch(t){console.error(t)}})();async function k(t){try{await navigator.clipboard.writeText(t),l.success("Enlace copiado al portapapeles.",{theme:"colored",autoClose:1500,position:l.POSITION.TOP_LEFT,transition:l.TRANSITIONS.ZOOM})}catch(o){console.error("No se pudo copiar el texto:",o)}}function f(t,o="Compartir enlace",c="Mira este enlace!"){navigator.share?navigator.share({title:o,text:c,url:t}).then(()=>{console.log("Enlace compartido exitosamente!")}).catch(s=>{console.log("Ocurrió un error al compartir:",s)}):console.log("La API Web Share no está disponible en este navegador.")}const C=()=>{localStorage.clear(),v.push("/login")};return(t,o)=>{const c=N("router-link");return d(),p("main",null,[e("div",E,[e("div",L,[j,e("div",null,[F,e("h2",H,a(y.value),1)])]),e("div",P,[e("div",z,a(n.value.length)+" enlaces ",1),e("div",M,a(h.value)+" vistas ",1),e("button",{class:"px-4 py-3 text-sm text-center",onClick:C},"Cerrar sesion")])]),e("div",R,[b(c,{to:"/crear-enlace",class:"block px-4 py-2 text-center text-white bg-slate-800 hover:bg-slate-700"},{default:g(()=>[_("Crear acortador")]),_:1})]),D,(d(!0),p(O,null,B(n.value,(s,w)=>(d(),p("div",{class:"p-4 border-b border-solid border-[#ddd]",key:s.id},[e("div",null,[e("b",U,"#"+a(w),1),_(" https://mxclick.site/"+a(s.link_short),1)]),e("div",W,[e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900",onClick:S=>k(`https://mxclick.site/${s.link_short}`)}," Copiar ",8,Z),e("button",{class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900",onClick:S=>f(`https://mxclick.site/${s.link_short}`)}," Compartir ",8,q),b(c,{to:`/enlace/${s.link_uuid}`,class:"px-3 py-1 mt-4 text-sm border border-solid border-slate-900"},{default:g(()=>[_(" Stats ")]),_:2},1032,["to"])])]))),128))])}}},ee=I(G,[["__scopeId","data-v-86a18693"]]);export{ee as default};