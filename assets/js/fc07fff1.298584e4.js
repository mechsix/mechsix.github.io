"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28298],{91034:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=r(74848),i=r(28453);const o={title:"665. Non-decreasing Array",sidebar_label:"665. Non-decreasing Array",tags:["Leetcode Medium"]},s=void 0,c={id:"leetcode/501-1000/non_decreasing_array",title:"665. Non-decreasing Array",description:"https://leetcode.com/problems/non-decreasing-array/",source:"@site/docs/leetcode/501-1000/665_non_decreasing_array.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/non_decreasing_array",permalink:"/docs/leetcode/501-1000/non_decreasing_array",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:665,frontMatter:{title:"665. Non-decreasing Array",sidebar_label:"665. Non-decreasing Array",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"664. Strange Printer",permalink:"/docs/leetcode/501-1000/strange_printer"},next:{title:"669. Trim a Binary Search Tree",permalink:"/docs/leetcode/501-1000/trim_bst"}},a={},d=[{value:"Python",id:"python",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/non-decreasing-array/",children:"https://leetcode.com/problems/non-decreasing-array/"})}),"\n",(0,t.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def checkPossibility(self, nums: List[int]) -> bool:\n        if len(nums) <= 2:\n            return True\n\n        is_modified = False\n\n        for i in range(1, len(nums)):\n            left, right = nums[i-1], nums[i]\n            \n            if left <= right:\n                continue\n\n            if is_modified:\n                return False\n            \n            is_modified = True\n            \n            if i < 2 or nums[i-2] <= nums[i]:\n                nums[i-1] = nums[i]\n            else:\n                nums[i] = nums[i-1]\n\n        return True\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(96540);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);