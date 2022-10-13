"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[32680],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25182:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"494. Target Sum",sidebar_label:"494. Target Sum",tags:["Leetcode Medium","DP"]},u=void 0,l={unversionedId:"leetcode/1-500/target_sum",id:"leetcode/1-500/target_sum",title:"494. Target Sum",description:"https://leetcode.com/problems/target-sum/",source:"@site/docs/leetcode/1-500/494_target_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/target_sum",permalink:"/docs/leetcode/1-500/target_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/494_target_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:494,frontMatter:{title:"494. Target Sum",sidebar_label:"494. Target Sum",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"487. Max Consecutive Ones II",permalink:"/docs/leetcode/1-500/max_consecutive_ones_ii"},next:{title:"495. Teemo Attacking",permalink:"/docs/leetcode/1-500/teemo_attack"}},s=[{value:"Python",id:"python",children:[{value:"Backtrack (Timelimit Exceed)",id:"backtrack-timelimit-exceed",children:[],level:3},{value:"Top-Down DP",id:"top-down-dp",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/target-sum/"},"https://leetcode.com/problems/target-sum/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"backtrack-timelimit-exceed"},"Backtrack (Timelimit Exceed)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N**2)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findTargetSumWays(self, nums: List[int], target: int) -> int:\n        count = 0\n\n        def backtrack(i, remain):\n            nonlocal count\n            if i == len(nums):\n                if remain == 0:\n                    count += 1\n                return\n\n            backtrack(i+1, remain+nums[i])  # Pick -\n            backtrack(i+1, remain-nums[i])  # Pick +\n\n        backtrack(0, target)\n\n        return count\n")),(0,i.kt)("h3",{id:"top-down-dp"},"Top-Down DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def findTargetSumWays(self, nums: List[int], target: int) -> int:\n        @cache\n        def dp(i, remain):\n            if i == len(nums):\n                if remain == 0:\n                    return 1\n                return 0\n            return dp(i+1, remain+nums[i]) + dp(i+1, remain-nums[i])\n\n        return dp(0, target)\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var findTargetSumWays = function(nums, target) {\n    const sum = nums.reduce((acc, cur) => acc + cur);\n    const dp = [...new Array(nums.length)].map(() => new Array(sum * 2 + 1).fill(0));\n    // add 1 or -1 from total (5)\n    dp[0][nums[0] + sum] = 1;\n    dp[0][-nums[0] + sum] += 1;\n\n    for (let i = 1; i < nums.length; i++) {\n        for (let j = -sum; j <= sum; j++) {\n            if (dp[i - 1][j + sum] > 0) {\n                dp[i][j + sum + nums[i]] += dp[i - 1][j + sum];\n                dp[i][j + sum - nums[i]] += dp[i - 1][j + sum];\n            }\n        }\n    }\n    // console.log(dp)\n    return dp[nums.length - 1][target + sum] || 0;\n};\n\n\n/**\n *   -5 -4 -3 -2 -1 0  1 2 3 4 5\n * 0              1 0  1\n * 1           1  0 2  0 1\n * 2        1  0  3 0  3 0 1\n * 3     1  0  4  0 6  0 4 0 1\n * 4  1  0  5  0 10 0 10 4 5 0 1\n */\n")))}p.isMDXComponent=!0}}]);