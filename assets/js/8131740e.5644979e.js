"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8169],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),a=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=a(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=a(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,u(u({ref:n},p),{},{components:t})):r.createElement(f,u({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var a=2;a<i;a++)u[a]=t[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69681:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),u=["components"],s={title:"198. House Robber",sidebar_label:"198. House Robber",tags:["Leetcode Medium","DP"]},l=void 0,a={unversionedId:"leetcode/1-500/house_robber",id:"leetcode/1-500/house_robber",title:"198. House Robber",description:"https://leetcode.com/problems/house-robber",source:"@site/docs/leetcode/1-500/198_house_robber.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/house_robber",permalink:"/docs/leetcode/1-500/house_robber",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/198_house_robber.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:198,frontMatter:{title:"198. House Robber",sidebar_label:"198. House Robber",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"191. Number of 1 Bits",permalink:"/docs/leetcode/1-500/number_of_1_bits"},next:{title:"199. Binary Tree Right Side View",permalink:"/docs/leetcode/1-500/binary_tree_right_side_view"}},p=[{value:"Python",id:"python",children:[{value:"(First Try)",id:"first-try",children:[],level:3},{value:"Top-down DP",id:"top-down-dp",children:[],level:3},{value:"Bottom-up DP",id:"bottom-up-dp",children:[],level:3}],level:2},{value:"Go",id:"go",children:[{value:"Bottom-Up DP",id:"bottom-up-dp-1",children:[],level:3}],level:2},{value:"JS",id:"js",children:[],level:2}],c={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/house-robber"},"https://leetcode.com/problems/house-robber")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"first-try"},"(First Try)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rob(self, nums: List[int]) -> int:\n        total_1 = 0\n        total_2 = 0\n\n        for index, num in enumerate(nums):\n            if index % 2 == 0:\n                total_1 = max(total_1 + num, total_2)\n            else:\n                total_2 = max(total_2 + num, total_1)\n        return max(total_1, total_2)\n")),(0,i.kt)("h3",{id:"top-down-dp"},"Top-down DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        @cache\n        def dp(i):\n            if i == 0:\n                return nums[0]\n            if i == 1:\n                return max(nums[0], nums[1])\n            return max(dp(i-1), dp(i-2)+nums[i])\n\n        return dp(len(nums)-1)\n")),(0,i.kt)("h3",{id:"bottom-up-dp"},"Bottom-up DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) < 2:\n            return nums[0]\n\n        dp = [0] * len(nums)\n        dp[0] = nums[0]\n        dp[1] = max(nums[0], nums[1])\n\n        for i in range(2, len(nums)):\n            dp[i] = max(dp[i-1], dp[i-2]+nums[i])\n\n        return dp[-1]\n")),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("h3",{id:"bottom-up-dp-1"},"Bottom-Up DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func rob(nums []int) int {\n    if len(nums) == 1 {\n        return nums[0]\n    }\n\n    dp := make([]int, len(nums))\n\n    dp[0] = nums[0]\n    if (nums[0] > nums[1]) {\n        dp[1] = nums[0]\n    } else {\n        dp[1] = nums[1]\n    }\n\n    for i:=2; i<len(nums); i++ {\n        taken := dp[i-2]+nums[i]\n        skip := dp[i-1]\n\n        if (taken > skip) {\n            dp[i] = taken\n        } else {\n            dp[i] = skip\n        }\n\n    }\n    return dp[len(dp)-1]\n}\n")),(0,i.kt)("h2",{id:"js"},"JS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"\n// top-down\nvar rob = function(nums) {\n    if (nums.length === 1) return nums[0];\n\n    function dp(i) {\n        if (i === 0) return nums[0];\n        else if (i === 1) return Math.max(nums[0], nums[1]);\n        return Math.max(nums[i] + dp(i - 2), dp(i - 1));\n    }\n    return dp(nums.length - 1);\n};\n\n// bottom-up\nvar rob = function(nums) {\n  if (nums.length === 1) return nums[0];\n\n  let prev = nums[0];\n  let curr = Math.max(nums[0], nums[1]);\n\n  for (let i = 2; i < nums.length; i++) {\n    let tmp = curr;\n    curr = Math.max(nums[i] + prev, curr);\n    prev = tmp;\n  }\n\n  return curr;\n};\n\n/**\n *\n * base case:\n * dp[0] = nums[0], dp[1] = max(nums[0], nums[1])\n *\n * transition fn:\n * dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])\n */\n")))}m.isMDXComponent=!0}}]);