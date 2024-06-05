"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[49114],{93402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(74848),o=n(28453);const r={title:"2405. Optimal Partition of String",sidebar_label:"2405. Optimal Partition of String",tags:["Leetcode Medium","Hash","Greedy"]},a=void 0,s={id:"leetcode/2000/optimal_partition_of_string",title:"2405. Optimal Partition of String",description:"Python",source:"@site/docs/leetcode/2000/2405_optimal_partition_of_string.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/optimal_partition_of_string",permalink:"/docs/leetcode/2000/optimal_partition_of_string",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Hash",permalink:"/docs/tags/hash"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:2405,frontMatter:{title:"2405. Optimal Partition of String",sidebar_label:"2405. Optimal Partition of String",tags:["Leetcode Medium","Hash","Greedy"]},sidebar:"docSidebar",previous:{title:"2348. Number of Zero-Filled Subarrays",permalink:"/docs/leetcode/2000/num_of_zero_filled_subarrays"},next:{title:"2439. Minimize Maximum of Array",permalink:"/docs/leetcode/2000/min_max_of_array"}},l={},c=[{value:"Python",id:"python",level:2},{value:"Greedy",id:"greedy",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.h3,{id:"greedy",children:"Greedy"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def partitionString(self, s: str) -> int:\n        if len(s) == 1:\n            return 1\n\n        partition = set()\n\n        counter = 1\n        for letter in s:\n            if letter in partition:\n                partition = set()\n                counter += 1\n            partition.add(letter)\n\n        return counter\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var i=n(96540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);