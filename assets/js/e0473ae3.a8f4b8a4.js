"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[50859],{40799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(74848),i=t(28453);const r={title:"334. Increasing Triplet Subsequence",sidebar_label:"334. Increasing Triplet Subsequence",tags:["Leetcode Medium","Greedy"]},c=void 0,o={id:"leetcode/1-500/increasing_triplet_subsequence",title:"334. Increasing Triplet Subsequence",description:"https://leetcode.com/problems/increasing-triplet-subsequence/",source:"@site/docs/leetcode/1-500/334_increasing_triplet_subsequence.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/increasing_triplet_subsequence",permalink:"/docs/leetcode/1-500/increasing_triplet_subsequence",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:334,frontMatter:{title:"334. Increasing Triplet Subsequence",sidebar_label:"334. Increasing Triplet Subsequence",tags:["Leetcode Medium","Greedy"]},sidebar:"docSidebar",previous:{title:"329. Longest Increasing Path in a Matrix",permalink:"/docs/leetcode/1-500/longest_increasing_path_in_matrix"},next:{title:"336. Palindrome Pairs",permalink:"/docs/leetcode/1-500/palindrome_pairs"}},l={},a=[{value:"Python",id:"python",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/increasing-triplet-subsequence/",children:"https://leetcode.com/problems/increasing-triplet-subsequence/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def increasingTriplet(self, nums: List[int]) -> bool:\n        if len(nums) < 3:\n            return False\n        \n        maximum = max(nums)\n        left, mid = maximum, maximum\n\n        for num in nums:\n            if num <= left:\n                left = num\n            elif num <= mid:\n                mid = num\n            else:\n                return True\n        \n        return False\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);