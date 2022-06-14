"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8169],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,u(u({ref:t},s),{},{components:n})):r.createElement(b,u({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69681:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],l={title:"198. House Robber",sidebar_label:"198. House Robber",tags:["Leetcode Medium","DP"]},a=void 0,c={unversionedId:"leetcode/1-500/house_robber",id:"leetcode/1-500/house_robber",title:"198. House Robber",description:"https://leetcode.com/problems/house-robber",source:"@site/docs/leetcode/1-500/198_house_robber.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/house_robber",permalink:"/docs/leetcode/1-500/house_robber",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/198_house_robber.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:198,frontMatter:{title:"198. House Robber",sidebar_label:"198. House Robber",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"191. Number of 1 Bits",permalink:"/docs/leetcode/1-500/number_of_1_bits"},next:{title:"199. Binary Tree Right Side View",permalink:"/docs/leetcode/1-500/binary_tree_right_side_view"}},s=[{value:"Python",id:"python",children:[{value:"(First Try)",id:"first-try",children:[],level:3},{value:"Top-down DP",id:"top-down-dp",children:[],level:3},{value:"Bottom-up DP",id:"bottom-up-dp",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/house-robber"},"https://leetcode.com/problems/house-robber")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"first-try"},"(First Try)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rob(self, nums: List[int]) -> int:\n        total_1 = 0\n        total_2 = 0\n\n        for index, num in enumerate(nums):\n            if index % 2 == 0:\n                total_1 = max(total_1 + num, total_2)\n            else:\n                total_2 = max(total_2 + num, total_1)\n        return max(total_1, total_2)\n")),(0,i.kt)("h3",{id:"top-down-dp"},"Top-down DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def rob(self, nums: List[int]) -> int:\n        @cache\n        def dp(i):\n            if i == 0:\n                return nums[0]\n            if i == 1:\n                return max(nums[0], nums[1])\n            return max(dp(i-1), dp(i-2)+nums[i])\n\n        return dp(len(nums)-1)\n")),(0,i.kt)("h3",{id:"bottom-up-dp"},"Bottom-up DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rob(self, nums: List[int]) -> int:\n        if len(nums) < 2:\n            return nums[0]\n\n        dp = [0] * len(nums)\n        dp[0] = nums[0]\n        dp[1] = max(nums[0], nums[1])\n\n        for i in range(2, len(nums)):\n            dp[i] = max(dp[i-1], dp[i-2]+nums[i])\n\n        return dp[-1]\n")))}d.isMDXComponent=!0}}]);