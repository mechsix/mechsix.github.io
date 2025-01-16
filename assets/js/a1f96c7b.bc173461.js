"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[13520],{19255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1001-1500/sequential_digits","title":"1291. Sequential Digits","description":"Python","source":"@site/docs/leetcode/1001-1500/1291_sequential_digits.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/sequential_digits","permalink":"/docs/leetcode/1001-1500/sequential_digits","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":1291,"frontMatter":{"title":"1291. Sequential Digits","sidebar_label":"1291. Sequential Digits","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"1290. Binary Num Linked List to Integer","permalink":"/docs/leetcode/1001-1500/bin_linked_list_to_decimal"},"next":{"title":"1295. Find Numbers with Even Number of Digits","permalink":"/docs/leetcode/1001-1500/find_nums_with_even_digits"}}');var s=n(74848),o=n(28453);const r={title:"1291. Sequential Digits",sidebar_label:"1291. Sequential Digits",tags:["Leetcode Medium"]},l=void 0,d={},c=[{value:"Python",id:"python",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.p,{children:"Time: O(1)"}),"\n",(0,s.jsx)(t.p,{children:"Space: O(1)"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def sequentialDigits(self, low: int, high: int) -> List[int]:\n        digits = [str(digit) for digit in range(1, 10)]\n        \n        result = []\n        \n        for i in range(0, 9):\n            for j in range(i, 9):\n                num = int(''.join(digits[i:j+1]))\n                if num >= low and num <= high:\n                    result.append(num)\n                \n        return sorted(result)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);