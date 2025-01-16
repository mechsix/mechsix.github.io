"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28298],{75797:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/501-1000/non_decreasing_array","title":"665. Non-decreasing Array","description":"https://leetcode.com/problems/non-decreasing-array/","source":"@site/docs/leetcode/501-1000/665_non_decreasing_array.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/non_decreasing_array","permalink":"/docs/leetcode/501-1000/non_decreasing_array","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":665,"frontMatter":{"title":"665. Non-decreasing Array","sidebar_label":"665. Non-decreasing Array","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"664. Strange Printer","permalink":"/docs/leetcode/501-1000/strange_printer"},"next":{"title":"669. Trim a Binary Search Tree","permalink":"/docs/leetcode/501-1000/trim_bst"}}');var i=r(74848),s=r(28453);const o={title:"665. Non-decreasing Array",sidebar_label:"665. Non-decreasing Array",tags:["Leetcode Medium"]},a=void 0,c={},d=[{value:"Python",id:"python",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/non-decreasing-array/",children:"https://leetcode.com/problems/non-decreasing-array/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def checkPossibility(self, nums: List[int]) -> bool:\n        if len(nums) <= 2:\n            return True\n\n        is_modified = False\n\n        for i in range(1, len(nums)):\n            left, right = nums[i-1], nums[i]\n            \n            if left <= right:\n                continue\n\n            if is_modified:\n                return False\n            \n            is_modified = True\n            \n            if i < 2 or nums[i-2] <= nums[i]:\n                nums[i-1] = nums[i]\n            else:\n                nums[i] = nums[i-1]\n\n        return True\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);