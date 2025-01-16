"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[73838],{68644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/1001-1500/nth_tribonacci","title":"1137. N-th Tribonacci Number","description":"https://leetcode.com/problems/n-th-tribonacci-number/","source":"@site/docs/leetcode/1001-1500/1137_nth_tribonacci.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/nth_tribonacci","permalink":"/docs/leetcode/1001-1500/nth_tribonacci","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":1137,"frontMatter":{"title":"1137. N-th Tribonacci Number","sidebar_label":"1137. N-th Tribonacci Number","tags":["Leetcode Easy","DP"]},"sidebar":"docSidebar","previous":{"title":"1114. Print in Order","permalink":"/docs/leetcode/1001-1500/print_in_order"},"next":{"title":"1143. Longest Common Subsequence","permalink":"/docs/leetcode/1001-1500/longest_common_subsequence"}}');var c=n(74848),r=n(28453);const i={title:"1137. N-th Tribonacci Number",sidebar_label:"1137. N-th Tribonacci Number",tags:["Leetcode Easy","DP"]},s=void 0,a={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://leetcode.com/problems/n-th-tribonacci-number/",children:"https://leetcode.com/problems/n-th-tribonacci-number/"})}),"\n",(0,c.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def tribonacci(self, n: int) -> int:\n        if n < 3:\n            return [0, 1, 1][n]\n\n        t1, t2, t3 = 0, 1, 1\n        for i in range(3, n+1):\n            trib = t1+t2+t3\n            t1, t2, t3 = t2, t3, trib\n\n        return t3\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const c={},r=o.createContext(c);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);