"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[64272],{98355:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"leetcode/1001-1500/longest_subarray_of_1s_after_deleting_one_element","title":"1493. Longest Subarray of 1\'s After Deleting One Element","description":"https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/","source":"@site/docs/leetcode/1001-1500/1493_longest_subarray_of_1s_after_deleting_one_element.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/longest_subarray_of_1s_after_deleting_one_element","permalink":"/docs/leetcode/1001-1500/longest_subarray_of_1s_after_deleting_one_element","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Sliding Window","permalink":"/docs/tags/sliding-window"}],"version":"current","sidebarPosition":1493,"frontMatter":{"title":"1493. Longest Subarray of 1\'s After Deleting One Element","sidebar_label":"1493. Longest Subarray of 1\'s After Deleting One Element","tags":["Leetcode Medium","Sliding Window"]},"sidebar":"docSidebar","previous":{"title":"1491. Average Salary Excluding the Minimum and Maximum Salary","permalink":"/docs/leetcode/1001-1500/avg_salary_excluding_min_and_max"},"next":{"title":"1498. Number of Subsequences That Satisfy the Given Sum Condition","permalink":"/docs/leetcode/1001-1500/num_of_subsequences_satisfy_the_given_sum_condition"}}');var o=t(74848),r=t(28453);const i={title:"1493. Longest Subarray of 1's After Deleting One Element",sidebar_label:"1493. Longest Subarray of 1's After Deleting One Element",tags:["Leetcode Medium","Sliding Window"]},l=void 0,a={},c=[{value:"Python",id:"python",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",children:"https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"[0,1,1,1,0,1,1,0,1]"}),"  =>  ",(0,o.jsx)(n.code,{children:'"011101101"'})]}),"\n",(0,o.jsxs)(n.li,{children:["segments ",(0,o.jsx)(n.code,{children:"['', '111', '11', '1']"})," =>  counts ",(0,o.jsx)(n.code,{children:"[0, 3, 2, 1]"})]}),"\n",(0,o.jsxs)(n.li,{children:["Copy and offset the counts, then get the max of the sums","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  [0, 0, 3, 2, 1]  # [0]+counts\n+ [0, 3, 2, 1, 0]  # counts+[0]\n= [0, 3, 5, 3, 1]  # sums\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def longestSubarray(self, nums: List[int]) -> int:\n        if 0 not in nums:\n            return len(nums)-1\n\n        segments = ''.join(map(str, nums)).split('0')\n        counts = [len(seg) for seg in segments]\n\n        return max([\n            pair[0]+pair[1]\n            for pair\n            in zip([0]+counts, counts+[0])\n        ])\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);