"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[12388],{38159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(74848),o=n(28453);const r={title:"11. Container With Most Water",sidebar_label:"11. Container With Most Water",tags:["Leetcode Medium","Two Pointer"]},a=void 0,l={id:"leetcode/1-500/container_with_most_water",title:"11. Container With Most Water",description:"https://leetcode.com/problems/container-with-most-water/",source:"@site/docs/leetcode/1-500/11_container_with_most_water.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/container_with_most_water",permalink:"/docs/leetcode/1-500/container_with_most_water",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:11,frontMatter:{title:"11. Container With Most Water",sidebar_label:"11. Container With Most Water",tags:["Leetcode Medium","Two Pointer"]},sidebar:"docSidebar",previous:{title:"9. Palindrome Number",permalink:"/docs/leetcode/1-500/palindrome_num"},next:{title:"12. Integer to Roman",permalink:"/docs/leetcode/1-500/integer_to_roman"}},s={},c=[{value:"Python",id:"python",level:2},{value:"Brute Force (Timelimit Exceed)",id:"brute-force-timelimit-exceed",level:3},{value:"Two Pointer",id:"two-pointer",level:3}];function m(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/container-with-most-water/",children:"https://leetcode.com/problems/container-with-most-water/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.h3,{id:"brute-force-timelimit-exceed",children:"Brute Force (Timelimit Exceed)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Time: O(NlogN)"}),"\n",(0,i.jsx)(t.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        max_amount = 0\n        for i in range(len(height)):\n            amount = 0\n            for j in range(i, len(height)):\n                amount = (j-i) * min(height[i], height[j])\n                max_amount = max(max_amount, amount)\n        return max_amount\n"})}),"\n",(0,i.jsx)(t.h3,{id:"two-pointer",children:"Two Pointer"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Time: O(N)"}),"\n",(0,i.jsx)(t.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        max_amount = 0\n        l, r = 0, len(height)-1\n\n        while l < r:\n            amount = min(height[l], height[r]) * (r-l)\n            max_amount = max(max_amount, amount)\n\n            if height[l] < height[r]:\n                l += 1\n            else:\n                r -= 1\n        return max_amount\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var i=n(96540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);