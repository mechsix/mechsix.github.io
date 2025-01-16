"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[53795],{33156:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/1001-1500/max_dot_product_of_two_subsequences","title":"1458. Max Dot Product of Two Subsequences","description":"https://leetcode.com/problems/max-dot-product-of-two-subsequences","source":"@site/docs/leetcode/1001-1500/1458_max_dot_product_of_two_subsequences.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/max_dot_product_of_two_subsequences","permalink":"/docs/leetcode/1001-1500/max_dot_product_of_two_subsequences","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":1458,"frontMatter":{"title":"1458. Max Dot Product of Two Subsequences","sidebar_label":"1458. Max Dot Product of Two Subsequences","tags":["Leetcode Hard","DP"]},"sidebar":"docSidebar","previous":{"title":"1457. Pseudo-Palindromic Paths in a Binary Tree","permalink":"/docs/leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree"},"next":{"title":"1461. Check If a String Contains All Binary Codes of Size K","permalink":"/docs/leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k"}}');var s=o(74848),i=o(28453);const c={title:"1458. Max Dot Product of Two Subsequences",sidebar_label:"1458. Max Dot Product of Two Subsequences",tags:["Leetcode Hard","DP"]},r=void 0,d={},a=[{value:"Python",id:"python",level:2},{value:"Bottom-Up DP",id:"bottom-up-dp",level:3},{value:"Top Down DP",id:"top-down-dp",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/max-dot-product-of-two-subsequences",children:"https://leetcode.com/problems/max-dot-product-of-two-subsequences"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.h3,{id:"bottom-up-dp",children:"Bottom-Up DP"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from functools import cache\nfrom math import inf\n\n\nclass Solution:\n    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:\n        n, m = len(nums1), len(nums2)\n\n        @cache\n        def dp(i, j):\n            if i == n or j == m:\n                return -inf\n            \n            return max(\n                nums1[i] * nums2[j] + max(dp(i+1, j+1), 0),\n                dp(i+1, j),\n                dp(i, j+1)\n            )\n        return dp(0, 0)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:\n        n, m = len(nums1), len(nums2)\n\n        dp = [[-inf] * (m+1) for _ in range(n+1)]\n\n        for i in range(n + 1):\n            for j in range(m + 1):\n                if i == 0 or j == 0:\n                    dp[i][j] = float('-inf') \n                    continue\n                    \n                dp[i][j] = max(\n                    nums1[i - 1] * nums2[j - 1] + max(dp[i - 1][j - 1], 0),  \n                    dp[i - 1][j],  \n                    dp[i][j - 1],  \n                )\n\n        return dp[n][m]\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var t=o(96540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);