"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,m=u["".concat(i,".").concat(d)]||u[d]||y[d]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,c[1]=p;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"2631. Group By",sidebar_label:"2631. Group By",tags:["Leetcode Medium","JS 30 Days Challenge"]},c=void 0,p={unversionedId:"leetcode/2000/group_by",id:"leetcode/2000/group_by",title:"2631. Group By",description:"https://leetcode.com/problems/group-by",source:"@site/docs/leetcode/2000/2631_group_by.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/group_by",permalink:"/docs/leetcode/2000/group_by",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2631_group_by.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2631,frontMatter:{title:"2631. Group By",sidebar_label:"2631. Group By",tags:["Leetcode Medium","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2629. Function Composition",permalink:"/docs/leetcode/2000/function_composition"},next:{title:"2632. Curry",permalink:"/docs/leetcode/2000/curry"}},i={},l=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}],s={toc:l},u="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/group-by"},"https://leetcode.com/problems/group-by")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Array.prototype.groupBy = function(fn) {\n    const groups = {}\n    this.forEach((value) => {\n        const key = fn(value)\n        if (!groups.hasOwnProperty(key)) {\n            groups[key] = []\n        }\n        groups[key].push(value)\n    })\n    return groups\n};\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare global {\n    interface Array<T> {\n        groupBy(fn: (item: T) => string): Record<string, T[]>\n    }\n}\n\nArray.prototype.groupBy = function(fn) {\n    const groups = {}\n    this.forEach((value) => {\n        const key = fn(value)\n        if (!groups.hasOwnProperty(key)) {\n            groups[key] = []\n        }\n        groups[key].push(value)\n    })\n    return groups\n}\n")))}y.isMDXComponent=!0}}]);