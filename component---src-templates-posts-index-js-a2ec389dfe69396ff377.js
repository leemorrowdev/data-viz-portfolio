(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"5XDY":function(e,t,a){e.exports={container:"posts-module--container--eoiWG",content:"posts-module--content--LX1ks",nav:"posts-module--nav--1tXeV",pagination:"posts-module--pagination--3X3_w",numbers:"posts-module--numbers--3xm6A",active:"posts-module--active--Fx1bH",text:"posts-module--text--3KSF0"}},w9MZ:function(e,t,a){"use strict";a.r(t),a.d(t,"postsQuery",(function(){return i}));a("XfO3"),a("HEwt");var n=a("q1tI"),l=a.n(n),s=a("Wbzz"),r=a("5uII"),o=a("vrFN"),c=a("5XDY"),m=a.n(c),i="3397589647";t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMdx.edges,c=a.currentPage,i=a.numPages;return l.a.createElement(r.a,null,l.a.createElement("div",{className:m.a.container},l.a.createElement("div",{className:m.a.content},l.a.createElement("div",{className:m.a.nav},l.a.createElement(s.Link,{to:"/"},"← Home")),l.a.createElement("h1",null,"All Posts"),l.a.createElement(o.a,{title:"All Posts"}),l.a.createElement("ul",null,n.map((function(e){var t=e.node;return l.a.createElement("li",{key:t.id},l.a.createElement(s.Link,{to:"/posts"+t.fields.slug,state:{currentPage:c}},l.a.createElement("div",null,l.a.createElement("h3",null,t.frontmatter.title),l.a.createElement("span",null,t.frontmatter.date),l.a.createElement("p",null,t.excerpt))))})))),l.a.createElement("div",{className:m.a.pagination},l.a.createElement("span",{className:m.a.text},!(1===c)&&l.a.createElement(s.Link,{to:"/posts/"+(c-1==1?"":c-1)},"←")),l.a.createElement("span",{className:m.a.numbers},Array.from({length:i},(function(e,t){var a=t+1;return l.a.createElement("span",{key:a,className:a===c?m.a.active:""},1===a?l.a.createElement(s.Link,{to:"/posts/"},"1"):l.a.createElement(s.Link,{to:"/posts/"+a},a))}))),l.a.createElement("span",{className:m.a.text},c!==i&&l.a.createElement(s.Link,{to:"/posts/"+(c+1),rel:"next"},"→")))))}}}]);
//# sourceMappingURL=component---src-templates-posts-index-js-a2ec389dfe69396ff377.js.map