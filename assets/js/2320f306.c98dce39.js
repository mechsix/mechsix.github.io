"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[40455],{19749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=t(74848),c=t(28453);const a={title:"2677. Chunk Array",sidebar_label:"2677. Chunk Array",tags:["Leetcode Easy","JS 30 Days Challenge"]},s=void 0,u={id:"leetcode/2000/chunk_array",title:"2677. Chunk Array",description:"https://leetcode.com/problems/chunk-array/",source:"@site/docs/leetcode/2000/2677_chunk_array.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/chunk_array",permalink:"/docs/leetcode/2000/chunk_array",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2677,frontMatter:{title:"2677. Chunk Array",sidebar_label:"2677. Chunk Array",tags:["Leetcode Easy","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2676. Throttle",permalink:"/docs/leetcode/2000/throttle"},next:{title:"2693. Call Function with Custom Context",permalink:"/docs/leetcode/2000/call_function_with_custom_context"}},l={},o=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}];function i(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/chunk-array/",children:"https://leetcode.com/problems/chunk-array/"})}),"\n",(0,r.jsx)(n.h2,{id:"javascript",children:"Javascript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var chunk = function(arr, size) {\n    const result = []\n    arr.reduce((accu, value, index) => {\n        let  current\n        if (index % size === 0) {\n            current = []\n            accu.push(current)\n        } else {\n            current = accu[accu.length-1]\n        }\n\n        current.push(value)\n        return accu\n    }, result)\n    return result\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function chunk(arr: any[], size: number): any[][] {\n    const result = []\n    arr.reduce((accu, value, index) => {\n        let current: any[]\n        if (index % size === 0) {\n            current = []\n            accu.push(current)\n        } else {\n            current = accu[accu.length-1]\n        }\n\n        current.push(value)\n        return accu\n    }, result)\n    return result\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>u});var r=t(96540);const c={},a=r.createContext(c);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);