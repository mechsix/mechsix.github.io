"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[78315],{61914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"leetcode/1-500/decode_string","title":"394. Decode String","description":"https://leetcode.com/problems/decode-string/","source":"@site/docs/leetcode/1-500/394_decode_string.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/decode_string","permalink":"/docs/leetcode/1-500/decode_string","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Stack","permalink":"/docs/tags/stack"},{"inline":true,"label":"String","permalink":"/docs/tags/string"}],"version":"current","sidebarPosition":394,"frontMatter":{"title":"394. Decode String","sidebar_label":"394. Decode String","tags":["Leetcode Medium","Stack","String"]},"sidebar":"docSidebar","previous":{"title":"392. Is Subsequence","permalink":"/docs/leetcode/1-500/is_subsequence"},"next":{"title":"399. Evaluate Division","permalink":"/docs/leetcode/1-500/evaluate_division"}}');var s=n(74848),c=n(28453);const i={title:"394. Decode String",sidebar_label:"394. Decode String",tags:["Leetcode Medium","Stack","String"]},r=void 0,d={},a=[{value:"Python",id:"python",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/decode-string/",children:"https://leetcode.com/problems/decode-string/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from collections import deque\n\n\nclass Solution:\n    def decodeString(self, s: str) -> str:\n        stack = []\n        for c in range(len(s)):\n            if s[c] != ']':\n                stack.append(s[c])\n                continue\n\n            num, letters = deque(), deque()\n\n            while stack[-1] != '[':\n                letters.appendleft(stack.pop())\n\n            stack.pop()\n\n            while stack and stack[-1].isdigit():\n                num.appendleft(stack.pop())\n\n            stack.append(int(''.join(num)) * ''.join(letters))\n\n        return \"\".join(stack)\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const s={},c=o.createContext(s);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);