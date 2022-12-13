"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[88253],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},a=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||c;return n?r.createElement(f,l(l({ref:t},a),{},{components:n})):r.createElement(f,l({ref:t},a))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const c={title:"1143. Longest Common Subsequence",sidebar_label:"1143. Longest Common Subsequence",tags:["Leetcode Medium","DP"]},l=void 0,u={unversionedId:"leetcode/1001-1500/longest_common_subsequence",id:"leetcode/1001-1500/longest_common_subsequence",title:"1143. Longest Common Subsequence",description:"https://leetcode.com/problems/longest-common-subsequence/",source:"@site/docs/leetcode/1001-1500/1143_longest_common_subsequence.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/longest_common_subsequence",permalink:"/docs/leetcode/1001-1500/longest_common_subsequence",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1143_longest_common_subsequence.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1143,frontMatter:{title:"1143. Longest Common Subsequence",sidebar_label:"1143. Longest Common Subsequence",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"1137. N-th Tribonacci Number",permalink:"/docs/leetcode/1001-1500/nth_tribonacci"},next:{title:"1155. Number of Dice Rolls With Target Sum",permalink:"/docs/leetcode/1001-1500/num_of_rolls_with_target_sum"}},i={},s=[{value:"Python",id:"python",level:2},{value:"Top-Down DP from right",id:"top-down-dp-from-right",level:3},{value:"Top-Down DP from left",id:"top-down-dp-from-left",level:3},{value:"Bottom-UP DP",id:"bottom-up-dp",level:3},{value:"Javascript",id:"javascript",level:2}],a={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-common-subsequence/"},"https://leetcode.com/problems/longest-common-subsequence/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"top-down-dp-from-right"},"Top-Down DP from right"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        @cache\n        def dp(cur1, cur2):\n            if cur1 == -1 or cur2 == -1:\n                return 0\n\n            if text1[cur1] == text2[cur2]:\n                return 1 + dp(cur1-1, cur2-1)\n\n            return max(dp(cur1, cur2-1), dp(cur1-1, cur2))\n\n        return dp(len(text1)-1, len(text2)-1)\n")),(0,o.kt)("h3",{id:"top-down-dp-from-left"},"Top-Down DP from left"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        @cache\n        def dp(cur1, cur2):\n            if cur1 == len(text1) or cur2 == len(text2):\n                return 0\n\n            if text1[cur1] == text2[cur2]:\n                return 1 + dp(cur1+1, cur2+1)\n\n            return max(dp(cur1, cur2+1), dp(cur1+1, cur2))\n\n        return dp(0, 0)\n")),(0,o.kt)("h3",{id:"bottom-up-dp"},"Bottom-UP DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        dp = [[0]*(len(text2)+1) for _ in range(len(text1)+1)]\n\n        for col in range(len(text2)-1, -1, -1):\n            for row in range(len(text1)-1, -1, -1):\n                if text2[col] == text1[row]:\n                    dp[row][col] = 1 + dp[row+1][col+1]\n                else:\n                    dp[row][col] = max(dp[row+1][col], dp[row][col+1])\n        return dp[0][0]\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestCommonSubsequence = function(text1, text2) {\n    const dp = [...new Array(text1.length + 1)].map(() => new Array(text2.length + 1).fill(0));\n\n    for (let i = 0; i <= text1.length; i++) {\n        for (let j = 0; j <= text2.length; j++) {\n\n            if (i === 0 || j === 0) dp[i][j] = 0;\n            else {\n                if (text1[i - 1] === text2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n    }\n\n    return dp[text1.length][text2.length];\n};\n\n/**\n *   0 a c e\n * 0 0 0 0 0\n * a 0 1 1 1\n * b 0 1 1 1\n * c 0 1 2 2\n * d 0 1 2 2\n * e 0 1 2 3\n */\n")))}p.isMDXComponent=!0}}]);