"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[93746],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return t?n.createElement(f,a(a({ref:r},s),{},{components:t})):n.createElement(f,a({ref:r},s))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56905:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"80. Remove Duplicates from Sorted Array II",sidebar_label:"80. Remove Duplicates from Sorted Array II",tags:["Leetcode Medium","In Place","Two Pointer"]},l=void 0,u={unversionedId:"leetcode/1-500/remove_duplicates_from_sorted_array_ii",id:"leetcode/1-500/remove_duplicates_from_sorted_array_ii",title:"80. Remove Duplicates from Sorted Array II",description:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",source:"@site/docs/leetcode/1-500/80_remove_duplicates_from_sorted_array_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/remove_duplicates_from_sorted_array_ii",permalink:"/docs/leetcode/1-500/remove_duplicates_from_sorted_array_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/80_remove_duplicates_from_sorted_array_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"In Place",permalink:"/docs/tags/in-place"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:80,frontMatter:{title:"80. Remove Duplicates from Sorted Array II",sidebar_label:"80. Remove Duplicates from Sorted Array II",tags:["Leetcode Medium","In Place","Two Pointer"]},sidebar:"docSidebar",previous:{title:"79. Word Search",permalink:"/docs/leetcode/1-500/word_search"},next:{title:"82. Remove Duplicates from Sorted List II",permalink:"/docs/leetcode/1-500/remove_duplicates_from_sorted_list_ii"}},s=[{value:"Python",id:"python",children:[],level:2}],d={toc:s};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"},"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(n)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(logn)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\nclass Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        cur, end = 0, len(nums)-1\n\n        counter = defaultdict(int)\n\n        while cur <= end:\n            num = nums[cur]\n            counter[num] += 1\n\n            if counter[num] > 2:\n                nums.pop(cur)\n                end -= 1\n                continue\n            cur += 1\n\n        return end+1\n")))}m.isMDXComponent=!0}}]);