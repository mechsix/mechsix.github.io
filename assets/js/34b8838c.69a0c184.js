"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3722],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(f,c(c({ref:r},u),{},{components:t})):n.createElement(f,c({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},61535:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=["components"],i={title:"26. Remove Duplicates from Sorted Array",sidebar_label:"26. Remove Duplicates from Sorted Array",tags:["Leetcode Easy","Leetcode Fail Review","In Place","Two Pointer"]},l=void 0,s={unversionedId:"leetcode/1-500/rm_duplicate_from_sorted_array",id:"leetcode/1-500/rm_duplicate_from_sorted_array",title:"26. Remove Duplicates from Sorted Array",description:"https://leetcode.com/problems/remove-duplicates-from-sorted-array",source:"@site/docs/leetcode/1-500/26_rm_duplicate_from_sorted_array.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/rm_duplicate_from_sorted_array",permalink:"/docs/leetcode/1-500/rm_duplicate_from_sorted_array",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/26_rm_duplicate_from_sorted_array.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Leetcode Fail Review",permalink:"/docs/tags/leetcode-fail-review"},{label:"In Place",permalink:"/docs/tags/in-place"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:26,frontMatter:{title:"26. Remove Duplicates from Sorted Array",sidebar_label:"26. Remove Duplicates from Sorted Array",tags:["Leetcode Easy","Leetcode Fail Review","In Place","Two Pointer"]},sidebar:"docSidebar",previous:{title:"25. Reverse Nodes in k-Group",permalink:"/docs/leetcode/1-500/reverse_nodes_in_k_group"},next:{title:"27. Remove Element",permalink:"/docs/leetcode/1-500/remove_element"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array"},"https://leetcode.com/problems/remove-duplicates-from-sorted-array")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removeDuplicates(self, nums: List[int]) -> int:\n        if length := len(nums) < 2:\n            return length\n\n        cur, after = 0, 1\n\n        while after < len(nums):\n            if nums[cur] != nums[after]:\n                cur += 1\n                nums[cur], nums[after] = nums[after], nums[cur]\n            after += 1\n        return cur + 1\n")))}m.isMDXComponent=!0}}]);