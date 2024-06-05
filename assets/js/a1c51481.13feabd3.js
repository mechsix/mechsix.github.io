"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[73483],{21147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var i=n(74848),o=n(28453);const s={title:"219. Contains Duplicate II",sidebar_label:"219. Contains Duplicate II",tags:["Leetcode Easy"]},c=void 0,a={id:"leetcode/1-500/contains_duplicate_ii",title:"219. Contains Duplicate II",description:"https://leetcode.com/problems/contains-duplicate-ii/",source:"@site/docs/leetcode/1-500/219_contains_duplicate_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/contains_duplicate_ii",permalink:"/docs/leetcode/1-500/contains_duplicate_ii",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:219,frontMatter:{title:"219. Contains Duplicate II",sidebar_label:"219. Contains Duplicate II",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"217. Contains Duplicate",permalink:"/docs/leetcode/1-500/containers_duplicate"},next:{title:"221. Maximal Square",permalink:"/docs/leetcode/1-500/max_square"}},l={},r=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/contains-duplicate-ii/",children:"https://leetcode.com/problems/contains-duplicate-ii/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        seen = set()\n        for i in range(len(nums)):\n            if nums[i] in seen:\n                return True\n            seen.add(nums[i])\n            if len(seen) > k:\n                seen.remove(nums[i-k])\n        return False\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);