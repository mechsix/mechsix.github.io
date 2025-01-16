"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28466],{45997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/1-500/kth_largest_elm_in_array","title":"215. Kth Largest Element in an Array","description":"https://leetcode.com/problems/kth-largest-element-in-an-array/","source":"@site/docs/leetcode/1-500/215_kth_largest_elm_in_array.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/kth_largest_elm_in_array","permalink":"/docs/leetcode/1-500/kth_largest_elm_in_array","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Heap","permalink":"/docs/tags/heap"}],"version":"current","sidebarPosition":215,"frontMatter":{"title":"215. Kth Largest Element in an Array","sidebar_label":"215. Kth Largest Element in an Array","tags":["Leetcode Medium","Heap"]},"sidebar":"docSidebar","previous":{"title":"213. House Robber II","permalink":"/docs/leetcode/1-500/house_robber_ii"},"next":{"title":"216. Combination Sum III","permalink":"/docs/leetcode/1-500/combination_sum_iii"}}');var s=n(74848),a=n(28453);const i={title:"215. Kth Largest Element in an Array",sidebar_label:"215. Kth Largest Element in an Array",tags:["Leetcode Medium","Heap"]},l=void 0,o={},c=[{value:"Python",id:"python",level:2},{value:"Sort and get",id:"sort-and-get",level:3},{value:"Heap",id:"heap",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/kth-largest-element-in-an-array/",children:"https://leetcode.com/problems/kth-largest-element-in-an-array/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.h3,{id:"sort-and-get",children:"Sort and get"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Time: O(N log N)"}),"\n",(0,s.jsx)(t.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        nums.sort(reverse=True)\n        return nums[k-1]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"heap",children:"Heap"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Time: O(N log k)"}),"\n",(0,s.jsx)(t.li,{children:"Space: O(k)"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        return heapq.nlargest(k, nums)[-1]\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);