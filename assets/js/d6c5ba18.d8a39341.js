"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[67013],{87466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"leetcode/1-500/max_consecutive_ones_ii","title":"487. Max Consecutive Ones II","description":"https://leetcode.com/problems/max-consecutive-ones-ii","source":"@site/docs/leetcode/1-500/487_max_consecutive_ones_ii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/max_consecutive_ones_ii","permalink":"/docs/leetcode/1-500/max_consecutive_ones_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":487,"frontMatter":{"title":"487. Max Consecutive Ones II","sidebar_label":"487. Max Consecutive Ones II","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"485. Max Consecutive Ones","permalink":"/docs/leetcode/1-500/max_consecutive_ones"},"next":{"title":"494. Target Sum","permalink":"/docs/leetcode/1-500/target_sum"}}');var s=t(74848),i=t(28453);const c={title:"487. Max Consecutive Ones II",sidebar_label:"487. Max Consecutive Ones II",tags:["Leetcode Medium"]},r=void 0,a={},u=[{value:"Python",id:"python",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/max-consecutive-ones-ii",children:"https://leetcode.com/problems/max-consecutive-ones-ii"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:\n        length = len(nums)\n        if length < 2:\n            return 1\n\n        if 0 not in nums:\n            return length\n\n        target_index = None\n        max_ones = 0\n\n        for i in range(0, length):\n            if nums[i] == 0:\n                counter = 0\n\n                for j in range(i-1, -1, -1):\n                    if nums[j] == 0:\n                        break\n                    counter += 1\n\n                for j in range(i+1, length):\n                    if nums[j] == 0:\n                        break\n                    counter += 1\n\n                if counter > max_ones:\n                    target_index = i\n                    max_ones = counter\n        return max_ones + 1\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);