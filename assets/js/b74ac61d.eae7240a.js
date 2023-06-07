"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[56738],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9489:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const c={title:"2665. Counter II",sidebar_label:"2665. Counter II",tags:["Leetcode Easy","JS 30 Days Challenge"]},i=void 0,a={unversionedId:"leetcode/2000/counter_ii",id:"leetcode/2000/counter_ii",title:"2665. Counter II",description:"https://leetcode.com/problems/counter-ii",source:"@site/docs/leetcode/2000/2665_counter_ii.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/counter_ii",permalink:"/docs/leetcode/2000/counter_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2665_counter_ii.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2665,frontMatter:{title:"2665. Counter II",sidebar_label:"2665. Counter II",tags:["Leetcode Easy","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2649. Nested Array Generator",permalink:"/docs/leetcode/2000/nested_array_generator"},next:{title:"2666. Allow One Function Call",permalink:"/docs/leetcode/2000/allow_one_function_call"}},u={},l=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/counter-ii"},"https://leetcode.com/problems/counter-ii")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var createCounter = function(init) {\n    const origin = init\n    let current = init\n\n    return {\n        increment: () => {\n            return ++current\n        },\n        decrement: () => {\n            return --current\n        },\n        reset: () => {\n            current = init\n            return current\n        }\n    }\n};\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type ReturnObj = {\n    increment: () => number,\n    decrement: () => number,\n    reset: () => number,\n}\n\nvar createCounter = function(init): ReturnObj {\n    const origin = init\n    let current = init\n\n    return {\n        increment: () => {\n            return ++current\n        },\n        decrement: () => {\n            return --current\n        },\n        reset: () => {\n            current = init\n            return current\n        }\n    }\n};\n")))}p.isMDXComponent=!0}}]);