"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[98745],{165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=t(74848),l=t(28453);const i={title:"740. Delete and Earn",sidebar_label:"740. Delete and Earn",tags:["Leetcode Medium","DP"]},o=void 0,s={id:"leetcode/501-1000/delete_and_earn",title:"740. Delete and Earn",description:"https://leetcode.com/problems/delete-and-earn/",source:"@site/docs/leetcode/501-1000/740_delete_and_earn.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/delete_and_earn",permalink:"/docs/leetcode/501-1000/delete_and_earn",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:740,frontMatter:{title:"740. Delete and Earn",sidebar_label:"740. Delete and Earn",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"739. Daily Temperatures",permalink:"/docs/leetcode/501-1000/daily_temperatures"},next:{title:"743. Network Delay Time",permalink:"/docs/leetcode/501-1000/network_delay_time"}},d={},a=[{value:"Python",id:"python",level:2},{value:"DP with decreasing tuple (Time Limit Exceed)",id:"dp-with-decreasing-tuple-time-limit-exceed",level:3},{value:"Top-Down DP",id:"top-down-dp",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/delete-and-earn/",children:"https://leetcode.com/problems/delete-and-earn/"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"dp-with-decreasing-tuple-time-limit-exceed",children:"DP with decreasing tuple (Time Limit Exceed)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def deleteAndEarn(self, nums: List[int]) -> int:\n        result = self.travel(tuple(nums))\n        return result\n\n    @cache\n    def travel(self, nums):\n        if not nums:\n            return 0\n\n        result = 0\n        for i in range(len(nums)):\n            pick_num = nums[i]\n            rest = [num for num in nums[:i]+nums[i+1:] if num != pick_num+1 and num != pick_num-1]\n            result = max(result, self.travel(tuple(rest))+pick_num)\n\n        return result\n"})}),"\n",(0,r.jsx)(n.h3,{id:"top-down-dp",children:"Top-Down DP"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Official Solution"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from collections import Counter\nfrom functools import cache\n\n\nclass Solution:\n    def deleteAndEarn(self, nums: List[int]) -> int:\n        counts = Counter(nums)\n        max_num = max(counts.keys())\n\n        @cache\n        def travel(num):\n            if num == 0:\n                return 0\n            if num == 1:\n                return counts[1]\n\n            return max(\n                travel(num-1),\n                travel(num-2)+num*counts[num]\n            )\n        return travel(max_num)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const l={},i=r.createContext(l);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);