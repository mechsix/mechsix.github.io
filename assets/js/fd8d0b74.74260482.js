"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[63742],{18168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/2000/diffs_btw_two_object","title":"2700. Differences Between Two Objects","description":"https://leetcode.com/problems/differences-between-two-objects/","source":"@site/docs/leetcode/2000/2700_diffs_btw_two_object.md","sourceDirName":"leetcode/2000","slug":"/leetcode/2000/diffs_btw_two_object","permalink":"/docs/leetcode/2000/diffs_btw_two_object","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"JS 30 Days Challenge","permalink":"/docs/tags/js-30-days-challenge"}],"version":"current","sidebarPosition":2700,"frontMatter":{"title":"2700. Differences Between Two Objects","sidebar_label":"2700. Differences Between Two Objects","tags":["Leetcode Medium","JS 30 Days Challenge"]},"sidebar":"docSidebar","previous":{"title":"2695. Array Wrapper","permalink":"/docs/leetcode/2000/array_wrapper"},"next":{"title":"2738. Count Occurrences in Text","permalink":"/docs/leetcode/2000/count_occurrences_in_text"}}');var s=n(74848),r=n(28453);const c={title:"2700. Differences Between Two Objects",sidebar_label:"2700. Differences Between Two Objects",tags:["Leetcode Medium","JS 30 Days Challenge"]},i=void 0,a={},l=[{value:"Javascript",id:"javascript",level:2}];function b(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/differences-between-two-objects/",children:"https://leetcode.com/problems/differences-between-two-objects/"})}),"\n",(0,s.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'function objDiff(obj1, obj2) {\n    // 1: Pure value\n    if (!isObject(obj1) && !isObject(obj2)) {\n        return obj1 === obj2 ? {} : [obj1, obj2]\n    }\n\n    // 2. Only one of them is Null or Array\n    if (!isObject(obj1) || !isObject(obj2)) {\n        return [obj1, obj2]\n    }\n\n    // 3. Array\n    if (Array.isArray(obj1) !== Array.isArray(obj2)) {\n        return [obj1, obj2]\n    }\n\n    // 4. Compare recursive\n    const diffs = {}\n    for (const key in obj1) {\n        if (!(key in obj2)) {\n            continue\n        }\n\n        const result = objDiff(obj1[key], obj2[key])\n        if (Object.keys(result).length) {\n            diffs[key] = result\n        }\n    }\n\n    return diffs\n}\n\nfunction isObject(obj) {\n    return obj !== null && typeof obj === "object"\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(96540);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);