"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[81108],{20873:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var o=i(74848),t=i(28453);const s={title:"516. Longest Palindromic Subsequence",sidebar_label:"516. Longest Palindromic Subsequence",tags:["Leetcode Medium","DP"]},c=void 0,r={id:"leetcode/501-1000/longest_palindromic\u2013subsequence",title:"516. Longest Palindromic Subsequence",description:"https://leetcode.com/problems/longest-palindromic-subsequence/",source:"@site/docs/leetcode/501-1000/516_longest_palindromic\u2013subsequence.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/longest_palindromic\u2013subsequence",permalink:"/docs/leetcode/501-1000/longest_palindromic\u2013subsequence",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:516,frontMatter:{title:"516. Longest Palindromic Subsequence",sidebar_label:"516. Longest Palindromic Subsequence",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"509. Fibonacci Number",permalink:"/docs/leetcode/501-1000/fibonacci_number"},next:{title:"518. Coin Change 2",permalink:"/docs/leetcode/501-1000/coin_change2"}},l={},d=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Javascript",id:"javascript",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/longest-palindromic-subsequence/",children:"https://leetcode.com/problems/longest-palindromic-subsequence/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def longestPalindromeSubseq(self, s: str) -> int:\n        dp = [\n            [0 for _ in range(len(s))]\n            for _ in range(len(s))\n        ]\n\n        for k in range(1, len(s) + 1):\n            for i in range(len(s) - k + 1):\n                j = k + i - 1\n                if i == j:\n                    dp[i][j] = 1\n                elif i + 1 == j and s[i] == s[j]:\n                    dp[i][j] = 2\n                elif s[i] == s[j]:\n                    dp[i][j] = dp[i+1][j-1] + 2\n                else:\n                    dp[i][j] = max(dp[i+1][j], dp[i][j-1])\n\n        return dp[0][-1]\n"})}),"\n",(0,o.jsx)(n.h2,{id:"javascript",children:"Javascript"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var longestPalindromeSubseq = function(s) {\n    const memo = {};\n    const dp = (i, j) => {\n        if (!memo[i]) memo[i] = {};\n        if (i > j) return 0;\n        if (i === j) return 1\n        if (memo[i][j]) return memo[i][j];\n\n        if (s[i] === s[j]) {\n            memo[i][j] = dp(i + 1, j - 1) + 2;\n        } else {\n            memo[i][j] = Math.max(dp(i + 1, j), dp(i, j - 1));\n        }\n\n        return memo[i][j];\n    }\n    return dp(0, s.length - 1)\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var o=i(96540);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);