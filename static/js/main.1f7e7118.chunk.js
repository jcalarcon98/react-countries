(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{25:function(e,n,t){},26:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t(2),r=t(18),i=t.n(r),s=(t(25),t(7)),o=(t(26),function(){return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("div",{className:"text",children:"Where in the World?"}),Object(c.jsxs)("div",{onClick:function(){return console.log("Dark mode is disable")},className:"dark-mode",children:[Object(c.jsx)(s.a,{}),Object(c.jsx)("div",{className:"text-dark",children:"Dark Mode"})]})]})}),l=t(0),u=t(5),j=t.n(u),d=t(8),h=t(6),b=t(19),O=t.n(b);function x(){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(j.a.mark((function e(){var n,t,c,a,r=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"europe",t="https://restcountries.eu/rest/v2/region/".concat(n),e.prev=2,e.next=5,O.a.get(t);case 5:return c=e.sent,a=c.data,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var f=t(4),v=Object(a.createContext)(),m=function(){return Object(a.useContext)(v)},g=function(e){var n=e.children,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(a.useState)(e),t=Object(h.a)(n,2),c=t[0],r=t[1];return{filter:c,changeContinent:function(e){var n=e.target.value;r(Object(f.a)(Object(f.a)({},c),{},{continent:n}))},changeCountrie:function(e){var n=e.target.value;r(Object(f.a)(Object(f.a)({},c),{},{countrie:n}))}}}({continent:"americas",countrie:""}),r=t.filter,i=t.changeCountrie,s=t.changeContinent,o=r.continent,l=r.countrie,u=Object(a.useState)([]),b=Object(h.a)(u,2),O=b[0],p=b[1],m=Object(a.useState)([]),g=Object(h.a)(m,2),C=g[0],N=g[1];return Object(a.useEffect)((function(){p(C.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})))}),[C,l]),Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(o);case 2:n=e.sent,N(n),p(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(c.jsx)(v.Provider,{value:{filter:r,changeCountrie:i,changeContinent:s,countries:O},children:n})},C=(t(46),function(){var e=m(),n=e.filter,t=e.changeCountrie,a=e.changeContinent,r=n.continent,i=n.countrie;return Object(c.jsxs)("div",{className:"filter-container",children:[Object(c.jsxs)("div",{className:"search-input-container",children:[Object(c.jsx)(l.b.Provider,{value:{color:"gray",className:"global-class-name"},children:Object(c.jsx)("div",{className:"search-icon",children:Object(c.jsx)(s.b,{})})}),Object(c.jsx)("input",{value:i,onChange:t,type:"text",className:"search-input",placeholder:"Search for a country..."})]}),Object(c.jsx)("div",{className:"filter-dropdow-box",children:Object(c.jsxs)("select",{value:r,onChange:a,className:"select",name:"continents",id:"continents",children:[Object(c.jsx)("option",{value:"africa",children:"\xc1frica"}),Object(c.jsx)("option",{value:"americas",children:"America"}),Object(c.jsx)("option",{value:"asia",children:"Asia"}),Object(c.jsx)("option",{value:"europe",children:"Europa"}),Object(c.jsx)("option",{value:"oceania",children:"Oceania"})]})})]})}),N=(t(47),function(e){var n=e.message,t=void 0===n?"Default message":n;return Object(c.jsx)("div",{className:"alert",children:Object(c.jsxs)("p",{children:["Warning: ",Object(c.jsxs)("span",{children:[" ",t," "]})]})})}),w=(t(48),function(e){var n=e.name,t=e.population,a=e.region,r=e.capital,i=e.flag;return Object(c.jsxs)("div",{className:"card-container",children:[Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:i,alt:"name",className:"img"})}),Object(c.jsxs)("div",{className:"card-text",children:[Object(c.jsx)("h3",{children:n}),Object(c.jsxs)("p",{children:["Population: ",Object(c.jsx)("span",{children:t})]}),Object(c.jsxs)("p",{children:["Region: ",Object(c.jsx)("span",{children:a})]}),Object(c.jsxs)("p",{children:["Capital: ",Object(c.jsx)("span",{children:r})]})]})]})}),k=(t(49),function(){var e=m(),n=e.filter,t=e.countries,a=n.continent,r=n.countrie;return Object(c.jsxs)("div",{className:1===t.length?"container container-one":"container",children:[0===t.length&&Object(c.jsx)(N,{message:"There isn't any countrie with the name ".concat(r," in ").concat(a.toUpperCase()," continent")}),t.map((function(e){return Object(c.jsx)(w,Object(f.a)({},e),e.alpha2Code)}))]})});t(50);var y=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)("div",{className:"main-container",children:Object(c.jsxs)(g,{children:[Object(c.jsx)(C,{}),Object(c.jsx)(k,{})]})})]})};i.a.render(Object(c.jsx)(y,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.1f7e7118.chunk.js.map