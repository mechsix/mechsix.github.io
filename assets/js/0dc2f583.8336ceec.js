"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97e3],{615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/501-1000/count_binary_substrings","title":"696. Count Binary Substrings","description":"https://leetcode.com/problems/count-binary-substrings/","source":"@site/docs/leetcode/501-1000/696_count_binary_substrings.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/count_binary_substrings","permalink":"/docs/leetcode/501-1000/count_binary_substrings","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Two Pointer","permalink":"/docs/tags/two-pointer"}],"version":"current","sidebarPosition":696,"frontMatter":{"title":"696. Count Binary Substrings","sidebar_label":"696. Count Binary Substrings","tags":["Leetcode Easy","Two Pointer"]},"sidebar":"docSidebar","previous":{"title":"695. Max Area of Island","permalink":"/docs/leetcode/501-1000/max_area_of_islands"},"next":{"title":"700. Search in a Binary Search Tree","permalink":"/docs/leetcode/501-1000/search_bst"}}');var s=t(74848),i=t(28453);const o={title:"696. Count Binary Substrings",sidebar_label:"696. Count Binary Substrings",tags:["Leetcode Easy","Two Pointer"]},c=void 0,l={},d=[{value:"Python",id:"python",level:2},{value:"Two Pointer",id:"two-pointer",level:3},{value:"JS",id:"js",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/count-binary-substrings/",children:"https://leetcode.com/problems/count-binary-substrings/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.h3,{id:"two-pointer",children:"Two Pointer"}),"\n",(0,s.jsx)(n.p,{children:"\u5217\u8868\u5982\u4e0b"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"String"}),(0,s.jsx)(n.th,{children:"Group Count"}),(0,s.jsx)(n.th,{children:"Groups"}),(0,s.jsx)(n.th,{children:"Details"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"0011"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"01, 0011"}),(0,s.jsx)(n.td,{children:"1\u500bgroup\uff0cmin(0,1) = 2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"00011"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"01, 0011"}),(0,s.jsx)(n.td,{children:"1\u500bgroup\uff0cmin(0,1) = 2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10101"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"10, 01, 10, 01"}),(0,s.jsx)(n.td,{children:"4\u500bgroup\uff0cmin(0,1)\u5404\u5225\u70ba1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"000111"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"000111, 0011, 01"}),(0,s.jsx)(n.td,{children:"1\u500bgroup\uff0cmin(0,1) = 3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"00011100111"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"000111, 0011, 01, 1100, 10, 0011, 01"}),(0,s.jsx)(n.td,{children:"3\u500bgroup\uff0cmin(0,1)\u5404\u70ba3, 2, 2"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u6b78\u7d0d\u5f8c\u6703\u767c\u73fe\uff0c\u4ee5\u9023\u7e8c\u76840\u8ddf1\u7d44\u6210\u7684group\uff0c\u53d6\u5176\u4e2d\u5404group\u5c0f\u7684\u6578\u5b57\u52a0\u7e3d\u70ba\u7b54\u6848"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def countBinarySubstrings(self, s: str) -> int:\n        left, right = 0, 1\n        count = 0\n\n        for i in range(1, len(s)):\n            if s[i] != s[i-1]:\n                count += min(left, right)\n                left = right\n                right = 1\n            else:\n                right += 1\n\n        count += min(left, right)\n        return count\n"})}),"\n",(0,s.jsx)(n.h2,{id:"js",children:"JS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:" var countBinarySubstrings = function(s) {\n   let curr = 1;\n   let prev = 0;\n   let sum = 0;\n\n   for (let i = 1; i < s.length; i++) {\n     if (s[i] === s[i - 1]) curr++;\n     else {       \n       sum += Math.min(curr, prev);\n       prev = curr;\n       curr = 1;\n     }\n   }\n   return sum + Math.min(curr, prev)\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);