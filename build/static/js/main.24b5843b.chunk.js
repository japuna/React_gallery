(this.webpackJsonpgalleries=this.webpackJsonpgalleries||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(6),r=n.n(a),i=(n(11),n(2)),l=n.n(i),o=n(4),u=n(3),d=n.p+"static/media/trespies5.27c0116a.png",j=n(0),h=function(e){e.title,e.onAdd,e.showAdd;return Object(j.jsx)("header",{children:Object(j.jsxs)("h1",{children:[Object(j.jsx)("img",{src:d,width:"10%"}),"ILUSTRACI\xd3N"]})})},b=function(e){var t=e.element,n=e.updateElement;return Object(j.jsx)("a",{id:"Elemento".concat(t.id),onClick:function(){return n(t)},className:"galeriaElemento",onMouseEnter:function(){var e=document.getElementById("overBar");e.style.display="block",e.innerHTML="<p>"+t.title+"</p>";var n=document.getElementById("Elemento"+t.id),c=n.getBoundingClientRect().left,s=n.getBoundingClientRect().top;console.log(e.style.top),e.style.top=s+"px",console.log(e.style.top),e.style.left=c+"px"},onMouseLeave:function(){document.getElementById("overBar").style.display="none"},children:Object(j.jsx)("img",{width:"100%",height:"auto",src:"../images/".concat(t.url),alt:t.title})})},O=function(e){var t=e.works,n=e.updateElement,s=Object(c.useState)(t),a=Object(u.a)(s,2),r=a[0],i=a[1],d=function(){var e=Object(o.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Todas"==(n=document.getElementById("selectivo").value)?i(t):(c=t.filter((function(e){return e.Technique==n})),i(c));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"tecnicas",children:[Object(j.jsx)("label",{children:"T\xe9cnicas   "}),Object(j.jsxs)("select",{onChange:d,id:"selectivo",children:[Object(j.jsx)("option",{defaultValue:"Todas",children:"Todas"}),Object(j.jsx)("option",{value:"Digital",children:"Digital"}),Object(j.jsx)("option",{value:"Acr\xedlicos",children:"Acr\xedlicos"}),Object(j.jsx)("option",{value:"Otras T\xe9cnicas",children:"Otras T\xe9cnicas"})]})]}),Object(j.jsxs)("div",{className:"galerie",children:[r.map((function(e){return Object(j.jsx)(b,{element:e,updateElement:n},e.id)})),Object(j.jsx)("div",{id:"overBar",className:"galeriaElemento",children:Object(j.jsx)("p",{style:{width:"100%",textAlign:"center"},children:"Holasdasd asdasdasdasd"})})]})]})},p=function(e){var t=e.newElement,n=e.hide;return console.log(t),Object(j.jsxs)("div",{className:"ventana",children:[Object(j.jsx)("div",{className:"ventana_cerrar",onClick:function(){return n(!1)},children:"X"}),Object(j.jsx)("div",{className:"ventana_seccion",children:Object(j.jsx)("img",{style:{width:"100%"},src:"../images/".concat(t.url)})}),Object(j.jsxs)("div",{className:"ventana_seccion",children:[Object(j.jsx)("div",{className:"ventana_title",children:Object(j.jsx)("h1",{children:t.title})}),Object(j.jsx)("h3",{children:"T\xe9cnica: ".concat(t.Technique)}),Object(j.jsx)("p",{children:t.Comentarios})]})]})};n(14);var f=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(u.a)(a,2),i=r[0],d=r[1],b=Object(c.useState)(!1),f=Object(u.a)(b,2),m=f[0],v=f[1];Object(c.useEffect)((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:4000/ilustrations");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),m&&Object(j.jsx)(p,{newElement:i,hide:v}),Object(j.jsx)(O,{works:n,updateElement:function(e){v(!0),d(e)}})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.24b5843b.chunk.js.map