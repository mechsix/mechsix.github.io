"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[25026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"2636. Promise Pool",sidebar_label:"2636. Promise Pool",tags:["Leetcode Medium","JS 30 Days Challenge"]},a=void 0,l={unversionedId:"leetcode/2000/promise_pool",id:"leetcode/2000/promise_pool",title:"2636. Promise Pool",description:"https://leetcode.com/problems/promise-pool/",source:"@site/docs/leetcode/2000/2636_promise_pool.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/promise_pool",permalink:"/docs/leetcode/2000/promise_pool",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2636_promise_pool.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2636,frontMatter:{title:"2636. Promise Pool",sidebar_label:"2636. Promise Pool",tags:["Leetcode Medium","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2635. Apply Transform Over Each Element in Array",permalink:"/docs/leetcode/2000/apply_transform_over_each_element_in_array"},next:{title:"2637. Promise Time Limit",permalink:"/docs/leetcode/2000/promise_time_limit"}},s={},c=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/promise-pool/"},"https://leetcode.com/problems/promise-pool/")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var promisePool = async function(functions, n) {\n    const doNext = async () => {\n        if (!functions.length) {\n            return Promise.resolve()\n        }\n        await functions.shift()()\n        await doNext()\n    }\n    return Promise.all(\n        new Array(n)\n        .fill(0)\n        .map(doNext)\n    )\n};\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type F = () => Promise<any>;\n\nfunction promisePool(functions: F[], n: number): Promise<any> {\n    const doNext = async () => {\n        if (!functions.length) {\n            return Promise.resolve()\n        }\n        await functions.shift()()\n        await doNext()\n    }\n    return Promise.all(\n        new Array(n)\n        .fill(0)\n        .map(doNext)\n    )\n};\n")))}u.isMDXComponent=!0}}]);