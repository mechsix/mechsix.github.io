"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[30873],{94949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"leetcode/1-500/remove_duplicates_from_sorted_array_ii","title":"80. Remove Duplicates from Sorted Array II","description":"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/","source":"@site/docs/leetcode/1-500/80_remove_duplicates_from_sorted_array_ii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/remove_duplicates_from_sorted_array_ii","permalink":"/docs/leetcode/1-500/remove_duplicates_from_sorted_array_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"In Place","permalink":"/docs/tags/in-place"},{"inline":true,"label":"Two Pointer","permalink":"/docs/tags/two-pointer"}],"version":"current","sidebarPosition":80,"frontMatter":{"title":"80. Remove Duplicates from Sorted Array II","sidebar_label":"80. Remove Duplicates from Sorted Array II","tags":["Leetcode Medium","In Place","Two Pointer"]},"sidebar":"docSidebar","previous":{"title":"79. Word Search","permalink":"/docs/leetcode/1-500/word_search"},"next":{"title":"82. Remove Duplicates from Sorted List II","permalink":"/docs/leetcode/1-500/remove_duplicates_from_sorted_list_ii"}}');var n=r(74848),i=r(28453);const s={title:"80. Remove Duplicates from Sorted Array II",sidebar_label:"80. Remove Duplicates from Sorted Array II",tags:["Leetcode Medium","In Place","Two Pointer"]},c=void 0,l={},a=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",children:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"})}),"\n",(0,n.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Time: O(n)"}),"\n",(0,n.jsx)(t.li,{children:"Space: O(logn)"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from collections import defaultdict\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        cur, end = 0, len(nums)-1\n\n        counter = defaultdict(int)\n\n        while cur <= end:\n            num = nums[cur]\n            counter[num] += 1\n\n            if counter[num] > 2:\n                nums.pop(cur)\n                end -= 1\n                continue\n            cur += 1\n\n        return end+1\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var o=r(96540);const n={},i=o.createContext(n);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);