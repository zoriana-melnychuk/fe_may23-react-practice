(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{12:function(e,c,a){},14:function(e,c,a){"use strict";a.r(c);var t=a(1),s=a(5),i=a.n(s),n=(a(10),a(11),a(4)),r=(a(12),a(2)),l=a.n(r),d=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],o=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],j=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}],h=a(0),b=function(){var e=Object(t.useState)(""),c=Object(n.a)(e,2),a=c[0],s=c[1],i=Object(t.useState)(""),r=Object(n.a)(i,2),b=r[0],x=r[1];return Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:l()({"is-active":""===a}),onClick:function(){return s("")},children:"All"}),d.map((function(e){return Object(h.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:l()({"is-active":a===e.id}),onClick:function(){return s(e.id)},children:e.name},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:"qwe"}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),o.map((function(e){return Object(h.jsx)("a",{"data-cy":"Category",href:"#/",className:l()({"button mr-2 my-1":!0,"is-info":b===e.id}),onClick:function(){return x(e.id)},children:e.title},e.id)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(h.jsxs)("div",{className:"box table-container",children:[Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(h.jsx)("tbody",{children:j.map((function(e){var c=o.find((function(c){return c.id===e.categoryId})),a=c?d.find((function(e){return e.id===c.ownerId})):null;return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(h.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(h.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(c.icon," - ").concat(c.title)}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:l()({"has-text-link":"m"===a.sex,"has-text-danger":"f"===a.sex}),children:a.name})]},e.id)}))})]})]})]})})};i.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.40105eee.chunk.js.map