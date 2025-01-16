"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4781],{69362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>m,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/1-500/minimum_moves_to_equal_array_elements_ii","title":"462. Minimum Moves to Equal Array Elements II","description":"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/","source":"@site/docs/leetcode/1-500/462_minimum_moves_to_equal_array_elements_ii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/minimum_moves_to_equal_array_elements_ii","permalink":"/docs/leetcode/1-500/minimum_moves_to_equal_array_elements_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":462,"frontMatter":{"title":"462. Minimum Moves to Equal Array Elements II","sidebar_label":"462. Minimum Moves to Equal Array Elements II","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"461. Hamming Distance","permalink":"/docs/leetcode/1-500/hamming_distance"},"next":{"title":"473. Matchsticks to Square","permalink":"/docs/leetcode/1-500/matchsticks_to_square"}}');var i=n(74848),o=n(28453);const m={title:"462. Minimum Moves to Equal Array Elements II",sidebar_label:"462. Minimum Moves to Equal Array Elements II",tags:["Leetcode Medium"]},r=void 0,a={},l=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/",children:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u4e00\u958b\u59cb\u89ba\u5f97\u662f\u7528\u5e73\u5747\u6578\uff0c\u4f46\u5e73\u5747\u6578\u6703\u53d7\u96e2\u7fa4\u503c\u5f71\u97ff\u5c0e\u81f4\u504f\u96e2\u8207\u6240\u6709\u6578\u5b57\u6700\u77ed\u8ddd\u96e2\u7684\u984c\u610f\u3002\u56e0\u6b64\u4f7f\u7528\u4e2d\u4f4d\u6578\u8655\u7406"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def minMoves2(self, nums: List[int]) -> int:\n        nums.sort()\n        mid = nums[len(nums)>>1]\n        \n        ans = 0\n        for num in nums:\n            ans += abs(num-mid)\n\n        return ans\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>m,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function m(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:m(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);