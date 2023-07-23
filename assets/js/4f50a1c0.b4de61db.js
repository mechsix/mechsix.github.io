"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,u=e.mdxType,o=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),p=u,f=m["".concat(a,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[m]="string"==typeof e?e:u,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),u=(n(67294),n(3905));const o={title:"416. Partition Equal Subset Sum",sidebar_label:"416. Partition Equal Subset Sum",tags:["Leetcode Medium","DFS","DP"]},s=void 0,i={unversionedId:"leetcode/1-500/partition_equal_subset_sum",id:"leetcode/1-500/partition_equal_subset_sum",title:"416. Partition Equal Subset Sum",description:"https://leetcode.com/problems/partition-equal-subset-sum",source:"@site/docs/leetcode/1-500/416_partition_equal_subset_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/partition_equal_subset_sum",permalink:"/docs/leetcode/1-500/partition_equal_subset_sum",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/416_partition_equal_subset_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:416,frontMatter:{title:"416. Partition Equal Subset Sum",sidebar_label:"416. Partition Equal Subset Sum",tags:["Leetcode Medium","DFS","DP"]},sidebar:"docSidebar",previous:{title:"415. Add Strings",permalink:"/docs/leetcode/1-500/add_strings"},next:{title:"417. Pacific Atlantic Water Flow",permalink:"/docs/leetcode/1-500/pacific_atlantic_water_flow"}},a={},l=[{value:"Python",id:"python",level:2},{value:"DFS (Failed Try)",id:"dfs-failed-try",level:3},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"JS",id:"js",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,u.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/partition-equal-subset-sum"},"https://leetcode.com/problems/partition-equal-subset-sum")),(0,u.kt)("h2",{id:"python"},"Python"),(0,u.kt)("h3",{id:"dfs-failed-try"},"DFS (Failed Try)"),(0,u.kt)("p",null,"Fail try, did not really get the idea...\n(2021/12/12)"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def canPartition(self, nums: List[int]) -> bool:\n        if not nums:\n            return False\n\n        total = sum(nums)\n        if total % 2:\n            return False\n\n        target = total / 2\n        sorted_nums = sorted(nums, reverse=True)\n\n        return self._dfs(sorted_nums, 0, target)\n\n    def _dfs(self, nums, index, target):\n        if target < nums[index]:\n            return False\n\n        target -= nums[index]\n        if target == 0 or self._dfs(nums, index+1, target):\n            return True\n        target += nums[index]\n")),(0,u.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def canPartition(self, nums: List[int]) -> bool:\n        nums.sort()\n\n        @cache\n        def dp(i: int, sum1: int, sum2: int):\n            if i == len(nums):\n                if sum1 == sum2:\n                    return True\n                return False\n\n            num = nums[i]\n\n            return dp(i+1, sum1, sum2+num) or dp(i+1, sum1+num, sum2)\n\n        return dp(0, 0, 0)\n")),(0,u.kt)("h2",{id:"js"},"JS"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"// top-down\nvar canPartition = function(nums) {\n   const sum = nums.reduce((acc, cur) => acc + cur, 0);\n   const subSum = Math.ceil(sum / 2);\n    if (subSum * 2 !== sum) return false;\n    \n   const memo = {};\n   const dfs = (i, curSum) => {\n       const key = `${i}${curSum}`;\n       // console.log(i, curSum)\n       if (curSum === 0) return true;\n       if (i === nums.length || curSum < 0) return false;\n       if (memo.hasOwnProperty(key)) return memo[key];\n       \n       memo[key] = dfs(i + 1, curSum - nums[i]) || dfs(i + 1, curSum);\n       return memo[key]\n   }\n   \n   return dfs(0, subSum);\n};\n\n// bottom-up\nvar canPartition = function(nums) {\n    const sum = nums.reduce((acc, cur) => acc + cur);\n    if (sum % 2 !== 0) return false;\n    \n    const total = sum / 2;\n    const dp = [...new Array(nums.length + 1)].map(() => [...new Array(total + 1)].fill(false));\n    \n    for (let i = 1; i <= nums.length; i++) {\n        for (let j = 0; j <= total; j++) {\n            if (j === 0) dp[i][j] = true;\n            else {\n                if (j - nums[i - 1] < 0) {\n                    dp[i][j] = dp[i - 1][j];\n                } else {\n                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];\n                }\n            }\n        }        \n    }\n  \n    return dp[nums.length][total];\n};\n")))}d.isMDXComponent=!0}}]);