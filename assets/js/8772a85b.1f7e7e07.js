"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[86257],{43677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"leetcode/1-500/integer_break","title":"343. Integer Break","description":"Python","source":"@site/docs/leetcode/1-500/343_integer_break.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/integer_break","permalink":"/docs/leetcode/1-500/integer_break","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":343,"frontMatter":{"title":"343. Integer Break","sidebar_label":"343. Integer Break","tags":["Leetcode Medium","DP"]},"sidebar":"docSidebar","previous":{"title":"342. Power of Four","permalink":"/docs/leetcode/1-500/power_of_4"},"next":{"title":"344. Reverse String","permalink":"/docs/leetcode/1-500/reverse_string"}}');var s=t(74848),d=t(28453);const i={title:"343. Integer Break",sidebar_label:"343. Integer Break",tags:["Leetcode Medium","DP"]},l=void 0,c={},o=[{value:"Python",id:"python",level:2},{value:"Top-Down DP",id:"top-down-dp",level:3},{value:"3s",id:"3s",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.h3,{id:"top-down-dp",children:"Top-Down DP"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from math import inf\nfrom functools import cache\n\n\nclass Solution:\n    def integerBreak(self, n: int) -> int:\n        @cache\n        def dp(k):\n            if k == 1:\n                return 1\n\n            result = -inf\n            for i in range(1, k):\n                result = max(result, i * dp(k-i), i*(k-i))\n            return result\n        return dp(n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3s",children:"3s"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Time: O(logN), Space: O(1), \u7b97\u6bd4\u8f03\u5feb\u7684\u89e3\u6cd5"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4e4d\u770b\u4e4b\u4e0b\u6c92\u6709\u898f\u5247\uff0c\u4f46\u628a",(0,s.jsx)(n.code,{children:"n<10"}),"\u62c6\u5b8c\u6703\u767c\u73fe\u898f\u5f8b"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u56e0\u70ba",(0,s.jsx)(n.code,{children:"2*2 > 1*3"}),"\uff0c\u76e1\u53ef\u80fd\u5c074\u5206\u89e3\u6210",(0,s.jsx)(n.code,{children:"2*2"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/integer-break/solutions/4135679/93-65-why-3s/",children:"\u53c3\u8003"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"n"}),(0,s.jsx)(n.th,{children:"breaks"}),(0,s.jsx)(n.th,{children:"memo"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"1+1"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"1+2"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"2+2"}),(0,s.jsx)(n.td,{children:"\u4e0d\u8981\u62c6\u62101+3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"2+3"}),(0,s.jsx)(n.td,{children:"\u4ee5\u4e0b\u958b\u59cb\u5faa\u74b0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"3+3"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"3+2+2"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"3+3+2"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"9"}),(0,s.jsx)(n.td,{children:"3+3+3"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"3+3+2+2"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def integerBreak(self, n: int) -> int:\n        if n <= 3:\n            return n - 1\n\n        pow, remain = divmod(n, 3)\n\n        if remain == 0:\n            return 3 ** pow\n\n        if remain == 1:\n            return 3 ** (pow-1) * 4\n\n        return 3 ** pow * 2\n"})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(96540);const s={},d=r.createContext(s);function i(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);