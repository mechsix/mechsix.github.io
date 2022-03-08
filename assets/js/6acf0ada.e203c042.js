"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1273],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,y=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(y,u(u({ref:t},c),{},{components:n})):r.createElement(y,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],i={title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm"]},l=void 0,s={unversionedId:"leetcode/1-500/max_subarray",id:"leetcode/1-500/max_subarray",title:"53. Maximum Subarray",description:"https://leetcode.com/problems/maximum-subarray",source:"@site/docs/leetcode/1-500/53_max_subarray.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_subarray",permalink:"/docs/leetcode/1-500/max_subarray",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/53_max_subarray.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Max Subarray",permalink:"/docs/tags/max-subarray"},{label:"Kadane Algorithm",permalink:"/docs/tags/kadane-algorithm"}],version:"current",sidebarPosition:53,frontMatter:{title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm"]},sidebar:"docSidebar",previous:{title:"48. Rotate Image",permalink:"/docs/leetcode/1-500/rotate_image"},next:{title:"56. Merge Intervals",permalink:"/docs/leetcode/1-500/merge_intervals"}},c=[{value:"Python",id:"python",children:[{value:"First Try",id:"first-try",children:[],level:3},{value:"O(n) Solution",id:"on-solution",children:[],level:3}],level:2},{value:"Go",id:"go",children:[],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-subarray"},"https://leetcode.com/problems/maximum-subarray")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"first-try"},"First Try"),(0,o.kt)("p",null,"Timeout, O(nlogn)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = 0\n        for start in range(0, len(nums)):\n            for end in range(start, len(nums)+1):\n                if (current_sum := sum(nums[start:end])) > ans_sum:\n                    ans_sum = current_sum\n        return ans_sum\n")),(0,o.kt)("h3",{id:"on-solution"},"O(n) Solution"),(0,o.kt)("p",null,"O(n) Solution, which don't care the ans array but only reach the sum()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = None\n        current_sum = -10^4\n        for num in nums:\n            current_sum = max(current_sum + num, num)\n            ans_sum = current_sum if ans_sum is None else max(ans_sum, current_sum)\n        return ans_sum\n\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func maxSubArray(nums []int) int {\n    var total int = -10000\n    var max_total int = -10000\n\n    for _, num := range nums {\n        if num > total + num {\n            total = num\n        } else {\n            total += num\n        }\n\n        if (max_total < total) {\n            max_total = total\n        }\n    }\n\n    return max_total\n}\n")))}p.isMDXComponent=!0}}]);