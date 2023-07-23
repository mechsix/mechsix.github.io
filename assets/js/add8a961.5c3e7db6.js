"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[63137],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"2675. Array of Objects to Matrix",sidebar_label:"2675. Array of Objects to Matrix",tags:["Leetcode Medium","JS 30 Days Challenge"]},c=void 0,i={unversionedId:"leetcode/2000/array_of_objects_to_matrix",id:"leetcode/2000/array_of_objects_to_matrix",title:"2675. Array of Objects to Matrix",description:"https://leetcode.com/problems/array-of-objects-to-matrix",source:"@site/docs/leetcode/2000/2675_array_of_objects_to_matrix.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/array_of_objects_to_matrix",permalink:"/docs/leetcode/2000/array_of_objects_to_matrix",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2675_array_of_objects_to_matrix.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2675,frontMatter:{title:"2675. Array of Objects to Matrix",sidebar_label:"2675. Array of Objects to Matrix",tags:["Leetcode Medium","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2667. Create Hello World Function",permalink:"/docs/leetcode/2000/create_hello_world_function"},next:{title:"2676. Throttle",permalink:"/docs/leetcode/2000/throttle"}},s={},l=[{value:"Javascript",id:"javascript",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/array-of-objects-to-matrix"},"https://leetcode.com/problems/array-of-objects-to-matrix")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const extract = (item, key='', result=[]) => {\n    if (   typeof item === 'number' \n        || typeof item === 'string' \n        || typeof item === 'boolean' \n        || item === null) {\n        return {[key]: item}\n    }\n\n    for (const [k, v] of Object.entries(item)) {\n        const newKey = key === '' ? k : `${key}.${k}`\n        result.push(extract(v, newKey))\n    }\n    return result.flat()\n}\n\nvar jsonToMatrix = function(arr) {\n    const mapper = arr.map(item => extract(item))\n    const keys = Array.from(new Set(mapper.flat().map(item => Object.keys(item)[0])))\n    keys.sort()\n\n    const result = [keys]\n    for (const items of mapper) {\n        const current = []\n        for (const key of keys) {\n            const value = items.find((item) => item.hasOwnProperty(key))?.[key]\n            current.push(value === undefined ? '' : value)\n        }\n        result.push(current)\n    }\n\n    return result\n};\n")))}m.isMDXComponent=!0}}]);