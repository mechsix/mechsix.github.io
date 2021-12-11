"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9568],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,y=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?t.createElement(y,u(u({ref:r},l),{},{components:n})):t.createElement(y,u({ref:r},l))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=n[c];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84399:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],i={title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm"]},s=void 0,c={unversionedId:"leetcode/max_subarray",id:"leetcode/max_subarray",isDocsHomePage:!1,title:"53. Maximum Subarray",description:"Python",source:"@site/docs/leetcode/53_max_subarray.md",sourceDirName:"leetcode",slug:"/leetcode/max_subarray",permalink:"/docs/leetcode/max_subarray",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/53_max_subarray.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Max Subarray",permalink:"/docs/tags/max-subarray"},{label:"Kadane Algorithm",permalink:"/docs/tags/kadane-algorithm"}],version:"current",sidebarPosition:53,frontMatter:{title:"53. Maximum Subarray",sidebar_label:"53. Maximum Subarray",tags:["Leetcode Easy","Max Subarray","Kadane Algorithm"]},sidebar:"docSidebar",previous:{title:"43. Multiply Strings",permalink:"/docs/leetcode/multiply_strings"},next:{title:"96. Unique Binary Trees",permalink:"/docs/leetcode/unique_binary_trees"}},l=[{value:"Python",id:"python",children:[{value:"First Try",id:"first-try",children:[]},{value:"O(n) Solution",id:"on-solution",children:[]}]}],m={toc:l};function p(e){var r=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"first-try"},"First Try"),(0,o.kt)("p",null,"Timeout, O(nlogn)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = 0\n        for start in range(0, len(nums)):\n            for end in range(start, len(nums)+1):\n                if (current_sum := sum(nums[start:end])) > ans_sum:\n                    ans_sum = current_sum\n        return ans_sum\n")),(0,o.kt)("h3",{id:"on-solution"},"O(n) Solution"),(0,o.kt)("p",null,"O(n) Solution, which don't care the ans array but only reach the sum()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxSubArray(self, nums: List[int]) -> int:\n        ans_sum = None\n        current_sum = -10^4\n        for num in nums:\n            current_sum = max(current_sum + num, num)\n            ans_sum = current_sum if ans_sum is None else max(ans_sum, current_sum)\n        return ans_sum\n\n")))}p.isMDXComponent=!0}}]);