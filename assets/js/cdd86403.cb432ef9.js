"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9849],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),m=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(t),p=o,b=d["".concat(i,".").concat(p)]||d[p]||s[p]||a;return t?n.createElement(b,u(u({ref:r},l),{},{components:t})):n.createElement(b,u({ref:r},l))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var m=2;m<a;m++)u[m]=t[m];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66142:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return l},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),u=["components"],c={title:"152. Maximum Product Subarray",sidebar_label:"152. Maximum Product Subarray",tags:["Leetcode Medium","Max Subarray","Kadane Algorithm"]},i=void 0,m={unversionedId:"leetcode/1-500/max_product_subarray",id:"leetcode/1-500/max_product_subarray",title:"152. Maximum Product Subarray",description:"Python",source:"@site/docs/leetcode/1-500/152_max_product_subarray.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_product_subarray",permalink:"/docs/leetcode/1-500/max_product_subarray",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/152_max_product_subarray.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Max Subarray",permalink:"/docs/tags/max-subarray"},{label:"Kadane Algorithm",permalink:"/docs/tags/kadane-algorithm"}],version:"current",sidebarPosition:152,frontMatter:{title:"152. Maximum Product Subarray",sidebar_label:"152. Maximum Product Subarray",tags:["Leetcode Medium","Max Subarray","Kadane Algorithm"]},sidebar:"docSidebar",previous:{title:"147. Insertion Sort List",permalink:"/docs/leetcode/1-500/insertion_sort_list"},next:{title:"198. House Robber",permalink:"/docs/leetcode/1-500/house_robber"}},l=[{value:"Python",id:"python",children:[],level:2}],s={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxProduct(self, nums: List[int]) -> int:\n        if not nums:\n            return\n\n        ans_product = nums[0]\n        current_max = nums[0]\n        current_min = nums[0]\n\n        for num in nums[1:]:\n            if num < 0:\n                current_max, current_min = current_min, current_max\n            current_max = max(current_max * num, num)\n            current_min = min(current_min * num, num)\n\n            ans_product = max(current_max, ans_product)\n\n        return ans_product\n")))}d.isMDXComponent=!0}}]);