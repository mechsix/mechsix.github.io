"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8253],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),a=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=a(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||c;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var a=2;a<c;a++)i[a]=n[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53265:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u}});var o=n(87462),r=n(63366),c=(n(67294),n(3905)),i=["components"],l={title:"1143. Longest Common Subsequence",sidebar_label:"1143. Longest Common Subsequence",tags:["Leetcode Medium","DP"]},s=void 0,a={unversionedId:"leetcode/1001-1500/longest_common_subsequence",id:"leetcode/1001-1500/longest_common_subsequence",title:"1143. Longest Common Subsequence",description:"https://leetcode.com/problems/longest-common-subsequence/",source:"@site/docs/leetcode/1001-1500/1143_longest_common_subsequence.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/longest_common_subsequence",permalink:"/docs/leetcode/1001-1500/longest_common_subsequence",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1143_longest_common_subsequence.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1143,frontMatter:{title:"1143. Longest Common Subsequence",sidebar_label:"1143. Longest Common Subsequence",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"1114. Print in Order",permalink:"/docs/leetcode/1001-1500/print_in_order"},next:{title:"1167. Minimum Cost to Connect Sticks",permalink:"/docs/leetcode/1001-1500/min_cost_to_connect_sticks"}},u=[{value:"Python",id:"python",children:[{value:"Top-Down DP",id:"top-down-dp",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-common-subsequence/"},"https://leetcode.com/problems/longest-common-subsequence/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("h3",{id:"top-down-dp"},"Top-Down DP"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\n        dp = [[0]*(len(text2)+1) for _ in range(len(text1)+1)]\n\n        for col in range(len(text2)-1, -1, -1):\n            for row in range(len(text1)-1, -1, -1):\n                if text2[col] == text1[row]:\n                    dp[row][col] = 1 + dp[row+1][col+1]\n                else:\n                    dp[row][col] = max(dp[row+1][col], dp[row][col+1])\n        return dp[0][0]\n")),(0,c.kt)("h2",{id:"javascript"},"Javascript"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestCommonSubsequence = function(text1, text2) {\n    const dp = [...new Array(text1.length + 1)].map(() => new Array(text2.length + 1).fill(0));\n\n    for (let i = 0; i <= text1.length; i++) {\n        for (let j = 0; j <= text2.length; j++) {\n\n            if (i === 0 || j === 0) dp[i][j] = 0;\n            else {\n                if (text1[i - 1] === text2[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n    }\n\n    return dp[text1.length][text2.length];\n};\n\n/**\n *   0 a c e\n * 0 0 0 0 0\n * a 0 1 1 1\n * b 0 1 1 1\n * c 0 1 2 2\n * d 0 1 2 2\n * e 0 1 2 3\n */\n")))}m.isMDXComponent=!0}}]);