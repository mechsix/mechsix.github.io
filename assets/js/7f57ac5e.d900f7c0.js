"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[50946],{43789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(74848),r=n(28453);const s={title:"27. Remove Element",sidebar_label:"27. Remove Element",tags:["Leetcode Easy"]},i=void 0,c={id:"leetcode/1-500/remove_element",title:"27. Remove Element",description:"https://leetcode.com/problems/remove-element",source:"@site/docs/leetcode/1-500/27_remove_element.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/remove_element",permalink:"/docs/leetcode/1-500/remove_element",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:27,frontMatter:{title:"27. Remove Element",sidebar_label:"27. Remove Element",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"26. Remove Duplicates from Sorted Array",permalink:"/docs/leetcode/1-500/rm_duplicate_from_sorted_array"},next:{title:"28. Find the Index of the First Occurrence in a String",permalink:"/docs/leetcode/1-500/find_the_index_of_the_first_occurence_in_a_string"}},l={},a=[{value:"Python",id:"python",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/remove-element",children:"https://leetcode.com/problems/remove-element"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.p,{children:"Hard to understand, but since the rest of elements in array are not matters\nSimply use the dual cur alg will work"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def removeElement(self, nums, val: int) -> int:\n        max_index = len(nums) - 1\n        i = 0\n        while i <= max_index:\n            if nums[i] == val:\n                nums[i], nums[max_index] = nums[max_index], nums[i]\n                max_index -= 1\n                continue\n            i += 1\n        return i\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);