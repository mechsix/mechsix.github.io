"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[19942],{31424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>i});const l=JSON.parse('{"id":"leetcode/2000/allow_one_function_call","title":"2666. Allow One Function Call","description":"https://leetcode.com/problems/allow-one-function-call","source":"@site/docs/leetcode/2000/2666_allow_one_function_call.md","sourceDirName":"leetcode/2000","slug":"/leetcode/2000/allow_one_function_call","permalink":"/docs/leetcode/2000/allow_one_function_call","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"JS 30 Days Challenge","permalink":"/docs/tags/js-30-days-challenge"}],"version":"current","sidebarPosition":2666,"frontMatter":{"title":"2666. Allow One Function Call","sidebar_label":"2666. Allow One Function Call","tags":["Leetcode Easy","JS 30 Days Challenge"]},"sidebar":"docSidebar","previous":{"title":"2665. Counter II","permalink":"/docs/leetcode/2000/counter_ii"},"next":{"title":"2667. Create Hello World Function","permalink":"/docs/leetcode/2000/create_hello_world_function"}}');var o=t(74848),a=t(28453);const c={title:"2666. Allow One Function Call",sidebar_label:"2666. Allow One Function Call",tags:["Leetcode Easy","JS 30 Days Challenge"]},s=void 0,r={},i=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/allow-one-function-call",children:"https://leetcode.com/problems/allow-one-function-call"})}),"\n",(0,o.jsx)(n.h2,{id:"javascript",children:"Javascript"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var once = function(fn) {\n    let isCalled = false\n    return function(...args){\n        if (!isCalled) {\n            isCalled = true\n            return fn(...args)\n        }\n    }\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"function once<T extends (...args: any[]) => any>(fn: T):\n ((...args: Parameters<T>) => ReturnType<T> | undefined) {\n  let isCalled = false\n  return function (...args) {\n    if (!isCalled) {\n        isCalled = true\n        return fn(...args)\n    }\n  };\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var l=t(96540);const o={},a=l.createContext(o);function c(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);