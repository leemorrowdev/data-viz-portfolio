(self.webpackChunkdata_viz_portfolio=self.webpackChunkdata_viz_portfolio||[]).push([[785],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function c(t,r,l){return o()?(e.exports=c=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.default=e.exports,e.exports.__esModule=!0),c.apply(null,arguments)}e.exports=c,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),c=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||c(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),c=r(9713),l=r(7316),s=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),p=r(4983).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=l(e,s),u=f(t),d=i.useMemo((function(){if(!r)return null;var e=a({React:i,mdx:p},u),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return i.createElement(d,a({},c))}},9734:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(7294),o=r(5444),c=r(4983),l=r(1274),s=r(9611);function u(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}var a=["children"],i=["children"],p=["children"],f=["children"],d=["children"],m=["children"],x=["children"],b={Link:o.Link,h2:function(e){var t=e.children,r=u(e,a);return n.createElement("h2",Object.assign({},r,{className:"components-module--h2--oRgCO"}),t)},blockquote:function(e){var t=e.children,r=u(e,i);return n.createElement("blockquote",Object.assign({},r,{className:"components-module--blockquote--3B3b8"}),t)},inlineCode:function(e){var t=e.children,r=u(e,p);return n.createElement("code",Object.assign({},r,{className:"components-module--code--1sKQV"}),t)},pre:function(e){var t=e.children,r=u(e,f);return n.createElement("pre",Object.assign({},r,{className:"components-module--pre--2eI35"}),t)},ol:function(e){var t=e.children,r=u(e,d);return n.createElement("ol",Object.assign({},r,{className:"components-module--ol--lQnOd"}),t)},ul:function(e){var t=e.children,r=u(e,m);return n.createElement("ul",Object.assign({},r,{className:"components-module--ul--2YX8T"}),t)},li:function(e){var t=e.children,r=u(e,x);return n.createElement("li",Object.assign({},r,{className:"components-module--li--3CeN-"}),t)}},y=r(3751),v=function(e){var t=e.location,r=e.data.mdx,u=r.body,a=r.fileAbsolutePath,i=r.frontmatter,p=i.title,f=i.description,d=i.date,m=/src\/content\/posts/.test(a),x=/src\/content\/projects/.test(a),v=t.state,h=((void 0===v?{}:v)||{}).currentPage;return n.createElement(s.Z,null,n.createElement("div",{className:"mdx-layout-module--container--7oU5t"},n.createElement("div",{className:"mdx-layout-module--nav--2L6AB"},m&&n.createElement(o.Link,{to:"/posts/"+(h?1===h?"":h:"")},"← All Posts"),x&&n.createElement(o.Link,{to:"/projects/"+(h?1===h?"":h:"")},"← All Projects")),n.createElement("h1",null,p),n.createElement("div",{className:"mdx-layout-module--dateText--15Jby"},d),n.createElement(y.Z,{title:p,description:f}),n.createElement(c.MDXProvider,{components:b},n.createElement(l.MDXRenderer,null,u))))}}}]);
//# sourceMappingURL=component---src-components-mdx-layout-index-js-efd1773ec52572d7406a.js.map