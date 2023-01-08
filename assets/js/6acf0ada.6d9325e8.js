"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[51273],{3905:function(n,e,t){t.d(e,{Zo:function(){return m},kt:function(){return f}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),i=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},m=function(n){var e=i(n.components);return r.createElement(s.Provider,{value:e},n.children)},c="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,m=l(n,["components","mdxType","originalType","parentName"]),c=i(t),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||o;return t?r.createElement(f,u(u({ref:e},m),{},{components:t})):r.createElement(f,u({ref:e},m))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,u=new Array(o);u[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[c]="string"==typeof n?n:a,u[1]=l;for(var i=2;i<o;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21782:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return i}});var r=t(83117),a=(t(67294),t(3905));const o={title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm","Go"]},u=void 0,l={unversionedId:"leetcode/1-500/max_subarray",id:"leetcode/1-500/max_subarray",title:"53. Maximum Subarray",description:"https://leetcode.com/problems/maximum-subarray",source:"@site/docs/leetcode/1-500/53_max_subarray.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_subarray",permalink:"/docs/leetcode/1-500/max_subarray",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/53_max_subarray.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Max Subarray",permalink:"/docs/tags/max-subarray"},{label:"Kadane Algorithm",permalink:"/docs/tags/kadane-algorithm"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:53,frontMatter:{title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm","Go"]},sidebar:"docSidebar",previous:{title:"51. N-Queens",permalink:"/docs/leetcode/1-500/n_queens"},next:{title:"54. Spiral Matrix",permalink:"/docs/leetcode/1-500/spiral_matrix"}},s={},i=[{value:"Python",id:"python",level:2},{value:"First Try",id:"first-try",level:3},{value:"O(n) Solution",id:"on-solution",level:3},{value:"### O(n) clear solution",id:"-on-clear-solution",level:3},{value:"Bottom-Up DP",id:"bottom-up-dp",level:3},{value:"Go",id:"go",level:2},{value:"JS",id:"js",level:2}],m={toc:i};function c(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-subarray"},"https://leetcode.com/problems/maximum-subarray")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"first-try"},"First Try"),(0,a.kt)("p",null,"Timeout, O(nlogn)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = 0\n        for start in range(0, len(nums)):\n            for end in range(start, len(nums)+1):\n                if (current_sum := sum(nums[start:end])) > ans_sum:\n                    ans_sum = current_sum\n        return ans_sum\n")),(0,a.kt)("h3",{id:"on-solution"},"O(n) Solution"),(0,a.kt)("p",null,"O(n) Solution, which don't care the ans array but only reach the sum()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = None\n        current_sum = -10^4\n        for num in nums:\n            current_sum = max(current_sum + num, num)\n            ans_sum = current_sum if ans_sum is None else max(ans_sum, current_sum)\n        return ans_sum\n\n")),(0,a.kt)("h3",{id:"-on-clear-solution"},"### O(n) clear solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        total = -inf\n        max_total = -inf\n        for num in nums:\n            total = max(total+num, num)\n            max_total = max(max_total, total)\n        return max_total\n")),(0,a.kt)("h3",{id:"bottom-up-dp"},"Bottom-Up DP"),(0,a.kt)("p",null,"Same as previous solution, but follow the DP pattern"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        dp = [0] * (len(nums)+1)\n\n        ans = nums[0]\n        for i in range(1, len(nums)):\n            if nums[i-1] > 0:\n                nums[i] = nums[i] + nums[i-1]\n                ans = max(ans, nums[i])\n\n        return ans\n")),(0,a.kt)("h2",{id:"go"},"Go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func maxSubArray(nums []int) int {\n    var total int = -10000\n    var max_total int = -10000\n\n    for _, num := range nums {\n        if num > total + num {\n            total = num\n        } else {\n            total += num\n        }\n\n        if (max_total < total) {\n            max_total = total\n        }\n    }\n\n    return max_total\n}\n")),(0,a.kt)("h2",{id:"js"},"JS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function(nums) {\n    let max = -Infinity;\n    let cur = 0;\n\n    for (let num of nums) {\n        if (cur + num < num) {\n            cur = num;\n        } else {\n            cur += num;\n        }\n        max = Math.max(cur, max);\n    }\n\n    return max;\n};\n\n/**\n * max -2  1  1  4  4  5  6  6  6\n *\n * cur -2  1 -2  4  3  5  6  1  5\n * num -2  1 -3  4 -1  2  1 -5  4\n *.        *    *\n *  1 > (-2 + 1) -> max: 1, cur: 1\n *  4 > (-2 + 4) -> max: 4, cur: 4\n */\n")))}c.isMDXComponent=!0}}]);