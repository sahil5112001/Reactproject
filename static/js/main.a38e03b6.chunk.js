(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(16),n=a.n(o),l=(a(22),a(7)),i=(a(23),a(9)),r=a(0);function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(r.jsx)("h1",{children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toUpperCase();o(t),e.showAlert("Converted to uppercase!","success")},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toLowerCase();o(t),e.showAlert("Converted to lowercase!","success")},children:"Convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){o(""),e.showAlert("Text Cleared!","success")},children:"Clear Text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){console.log("I am copy");var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text"}),Object(r.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(r.jsx)("h2",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[s.split(" ").length," words and ",s.length," characters"]}),Object(r.jsxs)("p",{children:[.008*s.split(" ").length," Minutes read"]}),Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:s.length>0?s:"Enter something in the textbox above to preview it here"})]})]})}function b(){var e=Object(c.useState)({color:"black",backgroundColor:"white"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable Dark Mode"),n=Object(l.a)(o,2),i=n[0],d=n[1];return Object(r.jsxs)("div",{className:"container",style:a,children:[Object(r.jsx)("h1",{className:"my-3",children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:a,children:[Object(r.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",style:a,children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:a,children:[Object(r.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:a,children:[Object(r.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(r.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)("button",{onClick:function(){"black"===a.color?(s({color:"white",backgroundColor:"black",border:"1px solid white"}),d("Enable Light Mode")):(s({color:"black",backgroundColor:"white"}),d("Enable Dark Mode"))},type:"button",className:"btn btn-primary",children:i})})]})}d.defaultProps={title:"Set title here",aboutText:"About"};var j=function(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})},u=a(2);var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(null),n=Object(l.a)(o,2),m=n[0],p=n[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1500)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",x("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(s("light"),document.body.style.backgroundColor="white",x("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(r.jsx)(j,{alert:m}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{exact:!0,path:"/about",children:Object(r.jsx)(b,{})}),Object(r.jsx)(u.a,{exact:!0,path:"/",children:Object(r.jsx)(h,{showAlert:x,heading:"Enter the text to analyze below",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.a38e03b6.chunk.js.map