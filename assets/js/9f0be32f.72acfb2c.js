"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[63172],{35317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/501-1000/num_of_longest_increasing_subsequence","title":"673. Number of Longest Increasing Subsequence","description":"https://leetcode.com/problems/number-of-longest-increasing-subsequence/","source":"@site/docs/leetcode/501-1000/673_num_of_longest_increasing_subsequence.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/num_of_longest_increasing_subsequence","permalink":"/docs/leetcode/501-1000/num_of_longest_increasing_subsequence","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":673,"frontMatter":{"title":"673. Number of Longest Increasing Subsequence","sidebar_label":"673. Number of Longest Increasing Subsequence","tags":["Leetcode Medium","DP"]},"sidebar":"docSidebar","previous":{"title":"669. Trim a Binary Search Tree","permalink":"/docs/leetcode/501-1000/trim_bst"},"next":{"title":"680. Valid Palindrome II","permalink":"/docs/leetcode/501-1000/valid_palindrome_ii"}}');var o=t(74848),i=t(28453);const r={title:"673. Number of Longest Increasing Subsequence",sidebar_label:"673. Number of Longest Increasing Subsequence",tags:["Leetcode Medium","DP"]},c=void 0,u={},a=[{value:"Python",id:"python",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/number-of-longest-increasing-subsequence/",children:"https://leetcode.com/problems/number-of-longest-increasing-subsequence/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findNumberOfLIS(self, nums: List[int]) -> int:\n        n = len(nums)\n        dp = [1 for _ in range(n)]\n        counter = [1 for _ in range(n)]\n\n        max_item = 1\n\n        for i in range(1, n):\n            for j in range(i):\n                if nums[i] <= nums[j]:\n                    continue\n\n                if dp[i] == dp[j]+1:\n                    counter[i] += counter[j]\n                    continue\n\n                if dp[i] < dp[j]+1:\n                    dp[i] = dp[j] + 1\n                    counter[i] = counter[j]\n            max_item = max(max_item, dp[i])\n\n        ans = 0\n        for i, item in enumerate(dp):\n            if item == max_item:\n                ans += counter[i]\n        return ans\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);