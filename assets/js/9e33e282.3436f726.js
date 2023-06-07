"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[54969],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i}});var r=n(83117),o=(n(67294),n(3905));const l={title:"2676. Throttle",sidebar_label:"2676. Throttle",tags:["Leetcode Medium","JS 30 Days Challenge"]},a=void 0,c={unversionedId:"leetcode/2000/throttle",id:"leetcode/2000/throttle",title:"2676. Throttle",description:"https://leetcode.com/problems/throttle/",source:"@site/docs/leetcode/2000/2676_throttle.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/throttle",permalink:"/docs/leetcode/2000/throttle",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2676_throttle.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2676,frontMatter:{title:"2676. Throttle",sidebar_label:"2676. Throttle",tags:["Leetcode Medium","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2675. Array of Objects to Matrix",permalink:"/docs/leetcode/2000/array_of_objects_to_matrix"},next:{title:"2677. Chunk Array",permalink:"/docs/leetcode/2000/chunk_array"}},s={},i=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/throttle/"},"https://leetcode.com/problems/throttle/")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var throttle = function(fn, t) {\n    let lastArgs = null\n    let isBlocked = false\n\n    const executor = () => {\n        if (lastArgs === null) {\n            isBlocked = false\n            return\n        }\n\n        fn(...lastArgs)\n        lastArgs = null\n        setTimeout(executor, t)\n    }\n\n    return function(...args) {\n        if (isBlocked) {\n            lastArgs = args\n            return\n        }\n\n        fn(...args)\n        isBlocked = true\n        setTimeout(executor, t)\n    }\n};\n\n/**\n * const throttled = throttle(console.log, 100);\n * throttled("log"); // logged immediately.\n * throttled("log"); // logged at t=100ms.\n */\n')),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type F = (...args: any[]) => void\n\nfunction throttle(fn: F, t: number): F {\n    let lastArgs: any | null = null\n    let isBlocked: Boolean = false\n\n    const executor = () => {\n        if (lastArgs === null) {\n            isBlocked = false \n            return\n        }\n\n        fn(...lastArgs)\n        lastArgs = null\n        setTimeout(executor, t)\n    }\n    \n    return function (...args) {\n        if (isBlocked) {\n            lastArgs = args\n            return\n        }\n\n        fn(...args)\n        isBlocked = true\n        setTimeout(executor, t)\n    }\n};\n\n")))}p.isMDXComponent=!0}}]);