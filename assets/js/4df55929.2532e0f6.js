"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52197],{16005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>_,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(74848),i=n(28453);const s={title:"34. Find First and Last Position of Element in Sorted Array",sidebar_label:"34. Find First and Last Position of Element in Sorted Array",tags:["Leetcode Medium","Array"]},o=void 0,a={id:"leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array",title:"34. Find First and Last Position of Element in Sorted Array",description:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",source:"@site/docs/leetcode/1-500/34_find_first_and_last_pos_of_element_in_sorted_array.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array",permalink:"/docs/leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Array",permalink:"/docs/tags/array"}],version:"current",sidebarPosition:34,frontMatter:{title:"34. Find First and Last Position of Element in Sorted Array",sidebar_label:"34. Find First and Last Position of Element in Sorted Array",tags:["Leetcode Medium","Array"]},sidebar:"docSidebar",previous:{title:"33. Search in Rotated Sorted Array",permalink:"/docs/leetcode/1-500/search_in_rotated_sorted_array"},next:{title:"35. Search Insert Position",permalink:"/docs/leetcode/1-500/search_insert_pos"}},d={},l=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",children:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Time: O(N)"}),"\n",(0,r.jsx)(t.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        first, latest = -1, -1\n        \n        for i in range(len(nums)):\n            j = len(nums)-i-1\n            \n            if nums[i] == target:\n                latest = i\n            if nums[j] == target:\n                first = j\n        \n        return [first, latest]\n"})})]})}function _(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);