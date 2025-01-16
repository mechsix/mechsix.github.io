"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75010],{1482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"leetcode/1-500/add_bin","title":"67. Add Binary","description":"https://leetcode.com/problems/add-binary","source":"@site/docs/leetcode/1-500/67_add_bin.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/add_bin","permalink":"/docs/leetcode/1-500/add_bin","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Bit Manipulation","permalink":"/docs/tags/bit-manipulation"}],"version":"current","sidebarPosition":67,"frontMatter":{"title":"67. Add Binary","sidebar_label":"67. Add Binary","tags":["Leetcode Easy","Bit Manipulation"]},"sidebar":"docSidebar","previous":{"title":"66. Plus One","permalink":"/docs/leetcode/1-500/plus_one"},"next":{"title":"69. Sqrt(x)","permalink":"/docs/leetcode/1-500/sqrt_x"}}');var a=t(74848),o=t(28453);const r={title:"67. Add Binary",sidebar_label:"67. Add Binary",tags:["Leetcode Easy","Bit Manipulation"]},s=void 0,l={},d=[{value:"Python",id:"python",level:2},{value:"Convert to number and join back",id:"convert-to-number-and-join-back",level:3},{value:"Bit Manipulation",id:"bit-manipulation",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/add-binary",children:"https://leetcode.com/problems/add-binary"})}),"\n",(0,a.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,a.jsx)(n.h3,{id:"convert-to-number-and-join-back",children:"Convert to number and join back"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        return '{0:b}'.format(int(a, 2) + int(b, 2))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"bit-manipulation",children:"Bit Manipulation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def addBinary(self, a: str, b: str) -> str:\n        result = []\n\n        items_a = list(a)\n        items_b = list(b)\n\n        carry = 0\n        while items_a or items_b:\n            bit = carry\n            if items_a:\n                bit += 1 if items_a.pop() == '1' else 0\n            if items_b:\n                bit += 1 if items_b.pop() == '1' else 0\n\n            result.append('1' if bit % 2 == 1 else '0')\n            carry = bit >> 1\n\n        if carry:\n            result.append('1')\n\n        return ''.join(result[::-1])\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);