"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[30660],{82461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/1001-1500/running_sum_of_1d_array","title":"1480. Running Sum of 1d Array","description":"https://leetcode.com/problems/running-sum-of-1d-array/","source":"@site/docs/leetcode/1001-1500/1480_running_sum_of_1d_array.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/running_sum_of_1d_array","permalink":"/docs/leetcode/1001-1500/running_sum_of_1d_array","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":1480,"frontMatter":{"title":"1480. Running Sum of 1d Array","sidebar_label":"1480. Running Sum of 1d Array","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"1473. Paint House III","permalink":"/docs/leetcode/1001-1500/paint_house_iii"},"next":{"title":"1491. Average Salary Excluding the Minimum and Maximum Salary","permalink":"/docs/leetcode/1001-1500/avg_salary_excluding_min_and_max"}}');var o=t(74848),s=t(28453);const a={title:"1480. Running Sum of 1d Array",sidebar_label:"1480. Running Sum of 1d Array",tags:["Leetcode Easy"]},i=void 0,u={},c=[{value:"Python",id:"python",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/running-sum-of-1d-array/",children:"https://leetcode.com/problems/running-sum-of-1d-array/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def runningSum(self, nums: List[int]) -> List[int]:\n        total = 0\n        for i, num in enumerate(nums):\n            nums[i] += total\n            total += num\n\n        return nums\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);