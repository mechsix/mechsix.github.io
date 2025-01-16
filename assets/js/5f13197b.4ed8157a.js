"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[11067],{47082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/501-1000/sortest_unsorted_continuous_subarray","title":"581. Shortest Unsorted Continuous Subarray","description":"https://leetcode.com/problems/shortest-unsorted-continuous-subarray/","source":"@site/docs/leetcode/501-1000/581_sortest_unsorted_continuous_subarray.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/sortest_unsorted_continuous_subarray","permalink":"/docs/leetcode/501-1000/sortest_unsorted_continuous_subarray","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Two Pointer","permalink":"/docs/tags/two-pointer"}],"version":"current","sidebarPosition":581,"frontMatter":{"title":"581. Shortest Unsorted Continuous Subarray","sidebar_label":"581. Shortest Unsorted Continuous Subarray","tags":["Leetcode Medium","Two Pointer"]},"sidebar":"docSidebar","previous":{"title":"557. Reverse Words in a String III","permalink":"/docs/leetcode/501-1000/reverse_words_in_string_iii"},"next":{"title":"583. Delete Operation for Two Strings","permalink":"/docs/leetcode/501-1000/delete_operation_for_two_strings"}}');var r=n(74848),s=n(28453);const i={title:"581. Shortest Unsorted Continuous Subarray",sidebar_label:"581. Shortest Unsorted Continuous Subarray",tags:["Leetcode Medium","Two Pointer"]},a=void 0,u={},d=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/shortest-unsorted-continuous-subarray/",children:"https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.p,{children:"\u56e0\u70ba\u984c\u76ee\u6700\u7d42\u9700\u8981\u7684\u662f\u905e\u589e\u6392\u5e8f\n\u62ff\u539f\u672c\u7684array\u53bb\u6bd4\u5c0d\u6392\u5e8f\u5f8c\u7684array\n\u7528max/min\u7b97\u51fa\u5de6\u53f3\u754c"}),"\n",(0,r.jsx)(t.p,{children:"\u4f46\u8981\u662f\u984c\u76ee\u4e0d\u77e5\u9053\u6700\u7d42\u6703\u662f\u905e\u589e\u6216\u905e\u6e1b...\u53ef\u80fd\u53ea\u80fd\u66b4\u529b\u7834"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Time: O(NlogN), for the sorting"}),"\n",(0,r.jsx)(t.li,{children:"Space: O(N), for the sorted array"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def findUnsortedSubarray(self, nums: List[int]) -> int:\n        sorted_nums = sorted(nums[:])\n        start, end = len(nums)-1, 0\n\n        for i in range(len(nums)):\n            if nums[i] != sorted_nums[i]:\n                start = min(start, i)\n                end = max(end, i)\n\n        diff = end - start\n        return diff+1 if diff > 0 else 0\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);