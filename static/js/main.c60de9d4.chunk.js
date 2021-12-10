(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),o=n.n(s),r=(n(9),n(2)),l=(n(10),n(0));var i=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};function b(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})})]}),Object(l.jsx)("input",{type:"radio",class:"btn-check",name:"options",id:"option1",autocomplete:"off",onClick:e.toggleMode}),Object(l.jsx)("label",{class:"btn btn-secondary me-2",for:"option1",children:"Light Theme"}),Object(l.jsx)("input",{type:"radio",class:"btn-check",name:"options",id:"option4",autocomplete:"off",onClick:e.toggleMode}),Object(l.jsx)("label",{class:"btn btn-secondary me-2",for:"option4",children:"Dark Mode"}),Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"htmlForm-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}function d(e){var t=Object(c.useState)("Enter text here."),n=Object(r.a)(t,2),a=n[0],s=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3 my-3",children:Object(l.jsx)("textarea",{className:"form-control",value:a,onChange:function(e){s(e.target.value)},id:"mybox",rows:"8",style:{background:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"}})}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=a.toUpperCase();s(t),e.showAlert("Text is converted into Uppercase!","success")},children:"Convert to UPPERCASE"}),Object(l.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){var t=a.toLowerCase();s(t),e.showAlert("Text is converted into Lowercase!","success")},children:"Convert to lowerCase"}),Object(l.jsx)("button",{className:"btn btn-success my-2",onClick:function(){navigator.clipboard.writeText(a),e.showAlert("Text is copied to clipboard!","success")},children:"Copy to clipboard"}),Object(l.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){s(""),e.showAlert("Text is cleared!","success")},children:"Clear"})]}),Object(l.jsxs)("div",{className:"container my-2",children:[Object(l.jsx)("h2",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[a.split(" ").length," words, ",a.length," characters"," "]}),Object(l.jsxs)("p",{children:[.008*a.split(" ").length," minutes to read."]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:a.length>0?a:"Enter something in the textbox to preview it"})]})]})}b.defaultProps={title:"Set title here",aboutText:"About text here"};var j=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),o=Object(r.a)(s,2),j=o[0],h=o[1],u=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{title:"TextUtils",aboutText:"About TextUtils",mode:n,toggleMode:function(){"light"===n?(a("dark"),document.body.style.background="black",document.body.style.color="white",u("Dark mode is enabled","success")):(a("light"),document.body.style.background="white",document.body.style.color="black",u("Light mode is enabled","success"))}}),Object(l.jsx)(i,{alert:j}),Object(l.jsx)("div",{className:"container my-2",children:Object(l.jsx)(d,{showAlert:u,heading:"Enter the text to analyse.",mode:n})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.c60de9d4.chunk.js.map