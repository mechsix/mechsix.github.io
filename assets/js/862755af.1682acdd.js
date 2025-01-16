"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[80111],{76570:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"leetcode/501-1000/minimum-ascii-delete-sum-for-two-strings","title":"712. Minimum ASCII Delete Sum for Two Strings","description":"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/","source":"@site/docs/leetcode/501-1000/712_minimum-ascii-delete-sum-for-two-strings.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/minimum-ascii-delete-sum-for-two-strings","permalink":"/docs/leetcode/501-1000/minimum-ascii-delete-sum-for-two-strings","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":712,"frontMatter":{"title":"712. Minimum ASCII Delete Sum for Two Strings","sidebar_label":"712. Minimum ASCII Delete Sum for Two Strings","tags":["Leetcode Medium","DP"]},"sidebar":"docSidebar","previous":{"title":"707. Design Linked List","permalink":"/docs/leetcode/501-1000/design_linked_list"},"next":{"title":"718. Maximum Length of Repeated Subarray","permalink":"/docs/leetcode/501-1000/max_length_of_repeated_subarray"}}');var s=t(74848),o=t(28453);const r={title:"712. Minimum ASCII Delete Sum for Two Strings",sidebar_label:"712. Minimum ASCII Delete Sum for Two Strings",tags:["Leetcode Medium","DP"]},l=void 0,d={},m=[{value:"Python",id:"python",level:2},{value:"Bottom-UP DP",id:"bottom-up-dp",level:3},{value:"JS",id:"js",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/",children:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.h3,{id:"bottom-up-dp",children:"Bottom-UP DP"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minimumDeleteSum(self, s1: str, s2: str) -> int:\n        m, n = len(s1), len(s2)\n\n        dp = [[0]*(n+1) for _ in range(m+1)]\n\n        for i in range(m-1, -1, -1):\n            dp[i][n] = dp[i+1][n] + ord(s1[i])\n        for j in range(n-1, -1, -1):\n            dp[m][j] = dp[m][j+1] + ord(s2[j])\n\n        for i in range(m-1, -1, -1):\n            for j in range(n-1, -1, -1):\n                if s1[i] == s2[j]:\n                    dp[i][j] = dp[i+1][j+1]\n                else:\n                    dp[i][j] = min(\n                        dp[i+1][j] + ord(s1[i]),\n                        dp[i][j+1] + ord(s2[j])\n                    )\n\n        return dp[0][0]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"js",children:"JS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'var minimumDeleteSum = function(s1, s2) {\n    const dp = [...new Array(s2.length + 1)].map(() => new Array(s1.length + 1).fill(0));\n\n    for (let i = 1; i <= s2.length; i++) {\n        dp[i][0] = dp[i - 1][0] + s2[i - 1].charCodeAt(0)\n    }\n\n    for (let j = 1; j <= s1.length; j++) {\n        dp[0][j] = dp[0][j - 1] + s1[j - 1].charCodeAt(0)\n    }\n    // console.log(dp)\n\n    for (let i = 1; i <= s2.length; i++) {\n        for (let j = 1; j <= s1.length; j++) {\n            if (s2[i - 1] !== s1[j - 1]) {\n                dp[i][j] = Math.min(\n                    dp[i - 1][j] + s2[i - 1].charCodeAt(0),\n                    dp[i][j - 1] + s1[j - 1].charCodeAt(0)\n                );\n            } else {\n                dp[i][j] = dp[i - 1][j - 1];\n            }\n        }\n    }\n    // console.log(dp)\n    return dp[s2.length][s1.length]\n};\n\n/**\n *\n *     "   s   e   a\n * "   0 115 216 313\n * e 101 216 115 212\n * a 198 313 212 115\n * t 314 429     231\n *\n * sea, e  -> ["sea", ""] + e or ["se", "e"] + a -> [313 + 116] or [115 + 97]\n * sea, ea -> ["se", "e"] -> 115\n */\n\n// e: 101, a: 97, t: 116, s: 115\n'})})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);