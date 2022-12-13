"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[51273],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||u;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<u;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21782:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return i}});var r=t(83117),a=(t(67294),t(3905));const u={title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm"]},o=void 0,s={unversionedId:"leetcode/1-500/max_subarray",id:"leetcode/1-500/max_subarray",title:"53. Maximum Subarray",description:"https://leetcode.com/problems/maximum-subarray",source:"@site/docs/leetcode/1-500/53_max_subarray.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_subarray",permalink:"/docs/leetcode/1-500/max_subarray",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/53_max_subarray.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Max Subarray",permalink:"/docs/tags/max-subarray"},{label:"Kadane Algorithm",permalink:"/docs/tags/kadane-algorithm"}],version:"current",sidebarPosition:53,frontMatter:{title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm"]},sidebar:"docSidebar",previous:{title:"51. N-Queens",permalink:"/docs/leetcode/1-500/n_queens"},next:{title:"54. Spiral Matrix",permalink:"/docs/leetcode/1-500/spiral_matrix"}},l={},i=[{value:"Python",id:"python",level:2},{value:"First Try",id:"first-try",level:3},{value:"O(n) Solution",id:"on-solution",level:3},{value:"Bottom-Up DP",id:"bottom-up-dp",level:3},{value:"Go",id:"go",level:2},{value:"JS",id:"js",level:2}],m={toc:i};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-subarray"},"https://leetcode.com/problems/maximum-subarray")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"first-try"},"First Try"),(0,a.kt)("p",null,"Timeout, O(nlogn)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = 0\n        for start in range(0, len(nums)):\n            for end in range(start, len(nums)+1):\n                if (current_sum := sum(nums[start:end])) > ans_sum:\n                    ans_sum = current_sum\n        return ans_sum\n")),(0,a.kt)("h3",{id:"on-solution"},"O(n) Solution"),(0,a.kt)("p",null,"O(n) Solution, which don't care the ans array but only reach the sum()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = None\n        current_sum = -10^4\n        for num in nums:\n            current_sum = max(current_sum + num, num)\n            ans_sum = current_sum if ans_sum is None else max(ans_sum, current_sum)\n        return ans_sum\n\n")),(0,a.kt)("h3",{id:"bottom-up-dp"},"Bottom-Up DP"),(0,a.kt)("p",null,"Same as previous solution, but follow the DP pattern"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        dp = [0] * (len(nums)+1)\n\n        ans = nums[0]\n        for i in range(1, len(nums)):\n            if nums[i-1] > 0:\n                nums[i] = nums[i] + nums[i-1]\n                ans = max(ans, nums[i])\n\n        return ans\n")),(0,a.kt)("h2",{id:"go"},"Go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func maxSubArray(nums []int) int {\n    var total int = -10000\n    var max_total int = -10000\n\n    for _, num := range nums {\n        if num > total + num {\n            total = num\n        } else {\n            total += num\n        }\n\n        if (max_total < total) {\n            max_total = total\n        }\n    }\n\n    return max_total\n}\n")),(0,a.kt)("h2",{id:"js"},"JS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function(nums) {\n    let max = -Infinity;\n    let cur = 0;\n    \n    for (let num of nums) {\n        if (cur + num < num) {\n            cur = num;\n        } else {\n            cur += num;\n        }\n        max = Math.max(cur, max);\n    }\n    \n    return max;\n};\n\n/**\n * max -2  1  1  4  4  5  6  6  6\n *\n * cur -2  1 -2  4  3  5  6  1  5\n * num -2  1 -3  4 -1  2  1 -5  4\n *.        *    *\n *  1 > (-2 + 1) -> max: 1, cur: 1\n *  4 > (-2 + 4) -> max: 4, cur: 4\n */\n")))}c.isMDXComponent=!0}}]);