(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5XDY":function(e,t,a){e.exports={container:"posts-module--container--eoiWG",content:"posts-module--content--LX1ks",nav:"posts-module--nav--1tXeV",pagination:"posts-module--pagination--3X3_w",number:"posts-module--number--7BHUv",current:"posts-module--current--3Mw-B",arrow:"posts-module--arrow--3037N"}},w9MZ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("F0VE"),s=a("vrFN"),c=a("5XDY"),m=a.n(c);t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMdx.edges,c=a.currentPage,u=a.numPages;return r.a.createElement(o.a,null,r.a.createElement("div",{className:m.a.container},r.a.createElement("div",{className:m.a.content},r.a.createElement("div",{className:m.a.nav},r.a.createElement(l.Link,{to:"/"},"← Home")),r.a.createElement("h1",null,"Posts"),r.a.createElement(s.a,{title:"All Posts - "+c,description:"All front end development blog posts - "+c}),r.a.createElement("ul",null,n.map((function(e){var t=e.node;return r.a.createElement("li",{key:t.id},r.a.createElement(l.Link,{to:"/posts"+t.fields.slug,state:{currentPage:c}},r.a.createElement("div",null,r.a.createElement("h3",null,t.frontmatter.title),r.a.createElement("span",null,t.frontmatter.date),r.a.createElement("p",null,t.excerpt))))})))),r.a.createElement("div",{className:m.a.pagination},r.a.createElement("span",{className:m.a.arrow},!(1===c)&&r.a.createElement(l.Link,{to:"/posts/"+(c-1==1?"":c-1)},"←")),r.a.createElement("span",null,Array.from({length:u},(function(e,t){var a=t+1;return r.a.createElement("span",{key:a,className:m.a.number+" "+(a===c&&m.a.current)},1===a?r.a.createElement(l.Link,{to:"/posts/"},"1"):r.a.createElement(l.Link,{to:"/posts/"+a},a))}))),r.a.createElement("span",{className:m.a.arrow},c!==u&&r.a.createElement(l.Link,{to:"/posts/"+(c+1),rel:"next"},"→")))))}}}]);
//# sourceMappingURL=component---src-templates-posts-index-js-848ea3544225c99bef1b.js.map