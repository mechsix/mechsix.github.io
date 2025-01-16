"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[49513],{27305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/1-500/happy_number","title":"202. Happy Number","description":"https://leetcode.com/problems/happy-number/","source":"@site/docs/leetcode/1-500/202_happy_number.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/happy_number","permalink":"/docs/leetcode/1-500/happy_number","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":202,"frontMatter":{"title":"202. Happy Number","sidebar_label":"202. Happy Number","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"200. Number of Islands","permalink":"/docs/leetcode/1-500/number_of_islands"},"next":{"title":"203. Remove Linked List Elements","permalink":"/docs/leetcode/1-500/rm_linked_list_elements"}}');var s=t(74848),r=t(28453);const c={title:"202. Happy Number",sidebar_label:"202. Happy Number",tags:["Leetcode Easy"]},a=void 0,i={},l=[{value:"Python",id:"python",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/happy-number/",children:"https://leetcode.com/problems/happy-number/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isHappy(self, n: int) -> bool:\n        seen = set()\n\n        while n != 1 and n not in seen:\n            seen.add(n)\n            current, m = 0, n\n            while m > 0:\n                m, remain = divmod(m, 10)\n                current += remain ** 2\n            n = current\n\n        return n == 1\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(96540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);