(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4xeF":function(e,a,t){e.exports={container:"projects-module--container--2nSDS",content:"projects-module--content--1DKR-",nav:"projects-module--nav--3MSET",pagination:"projects-module--pagination--jbf2x",number:"projects-module--number--2Imui",current:"projects-module--current--3SPJ0",arrow:"projects-module--arrow--l8jDO"}},iW9u:function(e,a,t){"use strict";t.r(a),t.d(a,"projectsQuery",(function(){return p}));t("XfO3"),t("HEwt");var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),c=t("9eSz"),o=t.n(c),m=t("5uII"),s=t("vrFN"),i=t("4xeF"),u=t.n(i),p="4043494599";a.default=function(e){var a=e.data,t=e.pageContext,n=a.allMdx.edges,c=t.currentPage,i=t.numPages;return r.a.createElement(m.a,null,r.a.createElement("div",{className:u.a.container},r.a.createElement("div",{className:u.a.content},r.a.createElement("div",{className:u.a.nav},r.a.createElement(l.Link,{to:"/"},"← Home")),r.a.createElement("h1",null,"All Projects"),r.a.createElement(s.a,{title:"All Projects - "+c,description:"All data visualization projects."}),r.a.createElement("ul",null,n.map((function(e){var a=e.node;return r.a.createElement("li",{key:a.id},r.a.createElement(l.Link,{to:"/projects"+a.fields.slug,state:{currentPage:c}},r.a.createElement("div",null,r.a.createElement("div",{className:u.a.image},r.a.createElement(o.a,{fluid:a.fields.featuredImage.childImageSharp.fluid})),r.a.createElement("h4",null,a.frontmatter.title),r.a.createElement("span",null,a.frontmatter.date))))})))),r.a.createElement("div",{className:u.a.pagination},r.a.createElement("span",{className:u.a.arrow},!(1===c)&&r.a.createElement(l.Link,{to:"/projects/"+(c-1==1?"":c-1)},"←")),r.a.createElement("span",null,Array.from({length:i},(function(e,a){var t=a+1;return r.a.createElement("span",{key:t,className:u.a.number+" "+(t===c&&u.a.current)},1===t?r.a.createElement(l.Link,{to:"/projects/"},"1"):r.a.createElement(l.Link,{to:"/projects/"+t},t))}))),r.a.createElement("span",{className:u.a.arrow},c!==i&&r.a.createElement(l.Link,{to:"/projects/"+(c+1),rel:"next"},"→")))))}}}]);
//# sourceMappingURL=component---src-templates-projects-index-js-80aa3df7ab9d94b57281.js.map