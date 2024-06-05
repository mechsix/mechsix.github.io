"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97724],{79305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=n(74848),l=n(28453);const s={title:"2676. Throttle",sidebar_label:"2676. Throttle",tags:["Leetcode Medium","JS 30 Days Challenge"]},o=void 0,c={id:"leetcode/2000/throttle",title:"2676. Throttle",description:"https://leetcode.com/problems/throttle/",source:"@site/docs/leetcode/2000/2676_throttle.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/throttle",permalink:"/docs/leetcode/2000/throttle",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2676,frontMatter:{title:"2676. Throttle",sidebar_label:"2676. Throttle",tags:["Leetcode Medium","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2675. Array of Objects to Matrix",permalink:"/docs/leetcode/2000/array_of_objects_to_matrix"},next:{title:"2677. Chunk Array",permalink:"/docs/leetcode/2000/chunk_array"}},a={},i=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/throttle/",children:"https://leetcode.com/problems/throttle/"})}),"\n",(0,r.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'var throttle = function(fn, t) {\n    let lastArgs = null\n    let isBlocked = false\n\n    const executor = () => {\n        if (lastArgs === null) {\n            isBlocked = false\n            return\n        }\n\n        fn(...lastArgs)\n        lastArgs = null\n        setTimeout(executor, t)\n    }\n\n    return function(...args) {\n        if (isBlocked) {\n            lastArgs = args\n            return\n        }\n\n        fn(...args)\n        isBlocked = true\n        setTimeout(executor, t)\n    }\n};\n\n/**\n * const throttled = throttle(console.log, 100);\n * throttled("log"); // logged immediately.\n * throttled("log"); // logged at t=100ms.\n */\n'})}),"\n",(0,r.jsx)(t.h2,{id:"typescript",children:"Typescript"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"type F = (...args: any[]) => void\n\nfunction throttle(fn: F, t: number): F {\n    let lastArgs: any | null = null\n    let isBlocked: Boolean = false\n\n    const executor = () => {\n        if (lastArgs === null) {\n            isBlocked = false \n            return\n        }\n\n        fn(...lastArgs)\n        lastArgs = null\n        setTimeout(executor, t)\n    }\n    \n    return function (...args) {\n        if (isBlocked) {\n            lastArgs = args\n            return\n        }\n\n        fn(...args)\n        isBlocked = true\n        setTimeout(executor, t)\n    }\n};\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const l={},s=r.createContext(l);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);