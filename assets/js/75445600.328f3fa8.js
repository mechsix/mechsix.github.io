"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[77826],{94576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"leetcode/1-500/max_consecutive_ones","title":"485. Max Consecutive Ones","description":"https://leetcode.com/problems/max-consecutive-ones","source":"@site/docs/leetcode/1-500/485_max_consecutive_ones.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/max_consecutive_ones","permalink":"/docs/leetcode/1-500/max_consecutive_ones","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":485,"frontMatter":{"title":"485. Max Consecutive Ones","sidebar_label":"485. Max Consecutive Ones","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"473. Matchsticks to Square","permalink":"/docs/leetcode/1-500/matchsticks_to_square"},"next":{"title":"487. Max Consecutive Ones II","permalink":"/docs/leetcode/1-500/max_consecutive_ones_ii"}}');var s=t(74848),c=t(28453);const i={title:"485. Max Consecutive Ones",sidebar_label:"485. Max Consecutive Ones",tags:["Leetcode Easy"]},a=void 0,r={},u=[{value:"Python",id:"python",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/max-consecutive-ones",children:"https://leetcode.com/problems/max-consecutive-ones"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:\n        if not nums:\n            return 0\n\n        count, max_count = 0, 0\n        for num in nums:\n            if num == 1:\n                count += 1\n            else:\n                max_count = max(max_count, count)\n                count = 0\n\n        return max_count if max_count > count else count\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const s={},c=o.createContext(s);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);