(this.webpackJsonpdocumentationsearch=this.webpackJsonpdocumentationsearch||[]).push([[0],{100:function(e,t,n){},105:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(33),i=n.n(c),s=(n(100),n(3)),o=n.n(s),l=n(34),u=n(10),j=n(87),d=Object(j.a)("https://wividmundzugloihzepp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDYxOTczMiwiZXhwIjoxOTQ2MTk1NzMyfQ.D2eVnJ4dlnvt9yKI-9DYcAWxpxVLhChgRdD0AEsx3R8"),h=n(5),b=n(7),p=n(155),O=n(164),x=n(165),m=n(163),f=n(21),v=n(88),g=n(161),w=n(167),k=n(171),y=n(159),C=n(170),I=(n(105),n(85)),S=n.n(I),N=n(72),z=n.n(N),T=n(86),D=n.n(T),E=n(166),M=n(168),F=n(2),V=function(e){var t=e.searchValue,n=e.optionValue,r=e.userId,c=a.a.useState([]),i=Object(u.a)(c,2),s=i[0],j=i[1];function h(){return(h=Object(l.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.from("documentation").select("*").filter("user","eq",r).ilike(n,"%".concat(t,"%"));case 2:a=e.sent,c=a.data,a.error,j(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.useEffect((function(){return function(e){h.apply(this,arguments)}(t),function(){j([])}}),[t,n]);return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("section",{children:[Object(F.jsx)("h2",{children:"Documentacion"}),null===s||void 0===s?void 0:s.map((function(e){return Object(F.jsx)("div",{children:Object(F.jsxs)(E.a,{children:[Object(F.jsx)(w.a,{variant:"h5",component:"div",children:e.title}),Object(F.jsx)(M.a,{href:e.url,target:"_blank",children:e.url})]})},e.id)}))]})})},L=n(60),J={title:"",description:"",url:"",user:""};function R(e){e.userId;var t=e.setSearchValue,n=Object(r.useState)(J),a=Object(u.a)(n,2),c=a[0],i=a[1],s=function(e){i(Object(L.a)(Object(L.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))};function j(){return(j=Object(l.a)(o.a.mark((function e(n){var r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,d.from("documentation").insert([c]);case 4:if(r=e.sent,r.data,!(a=r.error)){e.next=9;break}throw a;case 9:b(),t(null),alert("se inserto correctamente"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("Error creating information: ",e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}var b=function(){i(Object(L.a)({},J))};return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Nuevo Contenido"}),Object(F.jsxs)("form",{className:"row",onSubmit:function(e){return j.apply(this,arguments)},children:[Object(F.jsxs)("div",{className:"col-md-3",children:[Object(F.jsx)("label",{htmlFor:"title",children:"Titulo"}),Object(F.jsx)("br",{}),Object(F.jsx)("input",{type:"text",placeholder:"title",className:"form-control",onChange:s,name:"title",required:!0})]}),Object(F.jsxs)("div",{className:"col-md-3",children:[Object(F.jsx)("label",{htmlFor:"link",children:"Link"}),Object(F.jsx)("br",{}),Object(F.jsx)("input",{type:"text",placeholder:"link",className:"form-control",onChange:s,name:"url",required:!0})]}),Object(F.jsxs)("div",{className:"col-md-3",children:[Object(F.jsx)("label",{htmlFor:"description",children:"Descripcion"}),Object(F.jsx)("br",{}),Object(F.jsx)("textarea",{id:"description",placeholder:"description",className:"form-control",name:"description",rows:"4",cols:"50",onChange:s})]}),Object(F.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Guardar"})]})]})}var B=Object(b.a)("div")((function(e){var t=e.theme;return Object(h.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(p.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),_=Object(b.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),G=Object(b.a)(f.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(h.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));function U(e){var t=e.currentUser,n=e.handleSesionClose,a=r.useState(null),c=Object(u.a)(a,2),i=c[0],s=c[1],o=r.useState(null),l=Object(u.a)(o,2),j=l[0],d=l[1],h=r.useState(null),b=Object(u.a)(h,2),p=b[0],f=b[1],I=r.useState("title"),N=Object(u.a)(I,2),T=N[0],E=N[1],M=Boolean(i),L=Boolean(j),J=function(e){s(e.currentTarget)},U=function(){d(null)},Y="primary-search-account-menu",q=Object(F.jsxs)(v.a,{anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},id:Y,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:M,onClose:function(){s(null),U()},children:[Object(F.jsx)(g.a,{children:Object(F.jsx)("strong",{children:null===t||void 0===t?void 0:t.user_metadata.user_name})}),Object(F.jsx)(g.a,{onClick:n,children:"Cerrar sesion"})]}),A="primary-search-account-menu-mobile",P=Object(F.jsx)(v.a,{anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},id:A,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:L,onClose:U,children:Object(F.jsxs)(g.a,{onClick:J,children:[Object(F.jsx)(m.a,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(F.jsx)(z.a,{})}),Object(F.jsx)("p",{children:null===t||void 0===t?void 0:t.user_metadata.user_name})]})});return Object(F.jsxs)(C.a,{sx:{flexGrow:1},children:[Object(F.jsx)(O.a,{position:"static",children:Object(F.jsxs)(x.a,{children:[Object(F.jsx)(w.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"DOCUMENTATION"}),Object(F.jsxs)(B,{onChange:function(e){f(e.target.value.trim())},children:[Object(F.jsx)(_,{children:Object(F.jsx)(S.a,{})}),Object(F.jsx)(G,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(F.jsx)(C.a,{children:Object(F.jsx)(k.a,{children:Object(F.jsxs)(y.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Fields",value:T,onChange:function(e){E(e.target.value)},children:[Object(F.jsx)(g.a,{value:"title",children:"Titulo"}),Object(F.jsx)(g.a,{value:"description",children:"Descripcion"}),Object(F.jsx)(g.a,{value:"topic",children:"Tema"})]})})}),Object(F.jsx)(C.a,{sx:{flexGrow:1}}),Object(F.jsx)(C.a,{sx:{display:{xs:"none",md:"flex"}},children:Object(F.jsx)(m.a,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":Y,"aria-haspopup":"true",onClick:J,color:"inherit",children:Object(F.jsx)(z.a,{})})}),Object(F.jsx)(C.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(F.jsx)(m.a,{size:"large","aria-label":"show more","aria-controls":A,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(F.jsx)(D.a,{})})})]})}),P,q,Object(F.jsxs)("div",{className:"informationContainer",children:[Object(F.jsx)(R,{setSearchValue:f,userId:t.id}),p&&Object(F.jsx)(V,{userId:t.id,searchValue:p,optionValue:T})]})]})}n(112);var Y=function(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1];function c(){return i.apply(this,arguments)}function i(){return(i=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=d.auth.user(),console.log(t),a(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.auth.signIn({provider:"github"});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.auth.signOut();case 2:a(null);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){c(),window.addEventListener("hashchange",(function(){c()}))}),[]),n?Object(F.jsx)("div",{children:Object(F.jsx)(U,{currentUser:n,handleSesionClose:function(){return j.apply(this,arguments)}})}):Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Hello, please sign in!"}),Object(F.jsx)("button",{onClick:function(){return s.apply(this,arguments)},children:"Sign In"})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(Y,{})}),document.getElementById("root")),q()}},[[114,1,2]]]);
//# sourceMappingURL=main.663a8f1c.chunk.js.map