"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5050],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9695:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],u={title:"416. Partition Equal Subset Sum",sidebar_label:"416. Partition Equal Subset Sum",tags:["Leetcode Medium","Leetcode Fail Review","DFS"]},s=void 0,l={unversionedId:"leetcode/1-500/partition_equal_subset_sum",id:"leetcode/1-500/partition_equal_subset_sum",title:"416. Partition Equal Subset Sum",description:"https://leetcode.com/problems/partition-equal-subset-sum",source:"@site/docs/leetcode/1-500/416_partition_equal_subset_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/partition_equal_subset_sum",permalink:"/docs/leetcode/1-500/partition_equal_subset_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/416_partition_equal_subset_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Leetcode Fail Review",permalink:"/docs/tags/leetcode-fail-review"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:416,frontMatter:{title:"416. Partition Equal Subset Sum",sidebar_label:"416. Partition Equal Subset Sum",tags:["Leetcode Medium","Leetcode Fail Review","DFS"]},sidebar:"docSidebar",previous:{title:"414. Third Maximum Number",permalink:"/docs/leetcode/1-500/third_max_number"},next:{title:"421. Maximum XOR of Two Numbers in an Array",permalink:"/docs/leetcode/1-500/max_xor_of_2_nums_in_array"}},c=[{value:"Python",id:"python",children:[],level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/partition-equal-subset-sum"},"https://leetcode.com/problems/partition-equal-subset-sum")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,"Fail try, did not really get the idea..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def canPartition(self, nums: List[int]) -> bool:\n        if not nums:\n            return False\n\n        total = sum(nums)\n        if total % 2:\n            return False\n\n        target = total / 2\n        sorted_nums = sorted(nums, reverse=True)\n\n        return self._dfs(sorted_nums, 0, target)\n\n    def _dfs(self, nums, index, target):\n        if target < nums[index]:\n            return False\n\n        target -= nums[index]\n        if target == 0 or self._dfs(nums, index+1, target):\n            return True\n        target += nums[index]\n")))}d.isMDXComponent=!0}}]);