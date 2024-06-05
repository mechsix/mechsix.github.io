"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94827],{97502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(74848),s=n(28453);const o={title:"560. Subarray Sum Equals K",sidebar_label:"560. Subarray Sum Equals K",tags:["Leetcode Medium"]},r=void 0,u={id:"leetcode/501-1000/subarray_sum_equals_k",title:"560. Subarray Sum Equals K",description:"https://leetcode.com/problems/subarray-sum-equals-k/",source:"@site/docs/leetcode/501-1000/560_subarray_sum_equals_k.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/subarray_sum_equals_k",permalink:"/docs/leetcode/501-1000/subarray_sum_equals_k",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:560,frontMatter:{title:"560. Subarray Sum Equals K",sidebar_label:"560. Subarray Sum Equals K",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"543. Diameter of Binary Tree",permalink:"/docs/leetcode/501-1000/diameter_of_binary_tree"},next:{title:"563. Binary Tree Tilt",permalink:"/docs/leetcode/501-1000/binary_tree_tilt"}},l={},c=[{value:"Python",id:"python",level:2}];function i(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/subarray-sum-equals-k/",children:"https://leetcode.com/problems/subarray-sum-equals-k/"})}),"\n",(0,a.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from collections import defaultdict\n\n\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        # Key as the total, value is the count of this total\n        sum_map = defaultdict(lambda: 0)\n\n        # counter to accumulate the answer\n        count = 0\n\n        # The current sum\n        total = 0\n\n        # Edge case, total == 0 initial with one possible combination: []\n        sum_map[0] = 1\n\n        for num in nums:\n            total += num\n            count += sum_map[total-k]\n            sum_map[total] += 1\n\n        return count\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>u});var a=n(96540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);