"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[73483],{68137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"leetcode/1-500/contains_duplicate_ii","title":"219. Contains Duplicate II","description":"https://leetcode.com/problems/contains-duplicate-ii/","source":"@site/docs/leetcode/1-500/219_contains_duplicate_ii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/contains_duplicate_ii","permalink":"/docs/leetcode/1-500/contains_duplicate_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":219,"frontMatter":{"title":"219. Contains Duplicate II","sidebar_label":"219. Contains Duplicate II","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"217. Contains Duplicate","permalink":"/docs/leetcode/1-500/containers_duplicate"},"next":{"title":"221. Maximal Square","permalink":"/docs/leetcode/1-500/max_square"}}');var s=n(74848),o=n(28453);const c={title:"219. Contains Duplicate II",sidebar_label:"219. Contains Duplicate II",tags:["Leetcode Easy"]},a=void 0,l={},r=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/contains-duplicate-ii/",children:"https://leetcode.com/problems/contains-duplicate-ii/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        seen = set()\n        for i in range(len(nums)):\n            if nums[i] in seen:\n                return True\n            seen.add(nums[i])\n            if len(seen) > k:\n                seen.remove(nums[i-k])\n        return False\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);