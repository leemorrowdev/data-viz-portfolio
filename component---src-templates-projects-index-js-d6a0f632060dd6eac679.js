(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4xeF":function(e,t,a){e.exports={container:"projects-module--container--2nSDS",content:"projects-module--content--1DKR-",nav:"projects-module--nav--3MSET",pagination:"projects-module--pagination--jbf2x",numbers:"projects-module--numbers--2py6q",active:"projects-module--active--3ihL6",text:"projects-module--text--26ACf"}},iW9u:function(e,t,a){"use strict";a.r(t),a.d(t,"projectsQuery",(function(){return p}));a("XfO3"),a("HEwt");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),c=a("9eSz"),o=a.n(c),s=a("5uII"),m=a("vrFN"),i=a("4xeF"),u=a.n(i),p="1429491046";t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMdx.edges,c=a.currentPage,i=a.numPages;return r.a.createElement(s.a,null,r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.content},r.a.createElement("div",{className:u.a.nav},r.a.createElement(l.Link,{to:"/"},"← Home")),r.a.createElement("h1",null,"All Projects"),r.a.createElement(m.a,{title:"All Projects"}),r.a.createElement("ul",null,n.map((function(e){var t=e.node;return r.a.createElement("li",{key:t.id},r.a.createElement(l.Link,{to:"/projects"+t.fields.slug,state:{currentPage:c}},r.a.createElement("div",null,r.a.createElement("div",{className:u.a.image},r.a.createElement(o.a,{fluid:t.fields.featuredImage.childImageSharp.fluid})),r.a.createElement("h4",null,t.frontmatter.title),r.a.createElement("span",null,t.frontmatter.date))))})))),r.a.createElement("div",{className:u.a.pagination},r.a.createElement("span",{className:u.a.text},!(1===c)&&r.a.createElement(l.Link,{to:"/projects/"+(c-1==1?"":c-1)},"←")),r.a.createElement("span",{className:u.a.numbers},Array.from({length:i},(function(e,t){var a=t+1;return r.a.createElement("span",{key:a,className:a===c?u.a.active:""},1===a?r.a.createElement(l.Link,{to:"/projects/"},"1"):r.a.createElement(l.Link,{to:"/projects/"+a},a))}))),r.a.createElement("span",{className:u.a.text},c!==i&&r.a.createElement(l.Link,{to:"/projects/"+(c+1),rel:"next"},"→")))))}}}]);
//# sourceMappingURL=component---src-templates-projects-index-js-d6a0f632060dd6eac679.js.map