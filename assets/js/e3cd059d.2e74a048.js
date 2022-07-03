"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3168],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},a=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,u(u({ref:t},a),{},{components:n})):r.createElement(g,u({ref:t},a))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},743:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return a}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],c={title:"376. Wiggle Subsequence",sidebar_label:"376. Wiggle Subsequence",tags:["Leetcode Medium","DP"]},l=void 0,s={unversionedId:"leetcode/1-500/wiggle_subsequence",id:"leetcode/1-500/wiggle_subsequence",title:"376. Wiggle Subsequence",description:"https://leetcode.com/problems/wiggle-subsequence/",source:"@site/docs/leetcode/1-500/376_wiggle_subsequence.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/wiggle_subsequence",permalink:"/docs/leetcode/1-500/wiggle_subsequence",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/376_wiggle_subsequence.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:376,frontMatter:{title:"376. Wiggle Subsequence",sidebar_label:"376. Wiggle Subsequence",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"371. Sum of Two Integers",permalink:"/docs/leetcode/1-500/sum_of_two_integer"},next:{title:"378. Kth Smallest Element in a Sorted Matrix",permalink:"/docs/leetcode/1-500/kth_smallest_elm_in_sorted_martrix"}},a=[{value:"Python",id:"python",children:[{value:"Bottom-Up DP",id:"bottom-up-dp",children:[],level:3}],level:2}],p={toc:a};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/wiggle-subsequence/"},"https://leetcode.com/problems/wiggle-subsequence/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"bottom-up-dp"},"Bottom-Up DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def wiggleMaxLength(self, nums: List[int]) -> int:\n        if (length := len(nums)) < 2:\n            return length\n\n        dp_up, dp_down = [0]*len(nums), [0]*len(nums)\n\n        for i in range(1, len(nums)):\n            for j in range(i):\n                if nums[i] > nums[j]:\n                    dp_up[i] = max(dp_up[i], dp_down[j]+1)\n                elif nums[i] < nums[j]:\n                    dp_down[i] = max(dp_down[i], dp_up[j]+1)\n\n        return 1 + max(dp_up[-1], dp_down[-1])\n")))}d.isMDXComponent=!0}}]);