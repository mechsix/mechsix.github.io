"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2783],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47748:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"34. Find First and Last Position of Element in Sorted Array",sidebar_label:"34. Find First and Last Position of Element in Sorted Array",tags:["Leetcode Medium","Array"]},l=void 0,c={unversionedId:"leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array",id:"leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array",title:"34. Find First and Last Position of Element in Sorted Array",description:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",source:"@site/docs/leetcode/1-500/34_find_first_and_last_pos_of_element_in_sorted_array.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array",permalink:"/docs/leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/34_find_first_and_last_pos_of_element_in_sorted_array.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Array",permalink:"/docs/tags/array"}],version:"current",sidebarPosition:34,frontMatter:{title:"34. Find First and Last Position of Element in Sorted Array",sidebar_label:"34. Find First and Last Position of Element in Sorted Array",tags:["Leetcode Medium","Array"]},sidebar:"docSidebar",previous:{title:"32. Longest Valid Parentheses",permalink:"/docs/leetcode/1-500/longest_valid_parentheses"},next:{title:"35. Search Insert Position",permalink:"/docs/leetcode/1-500/search_insert_pos"}},d=[{value:"Python",id:"python",children:[],level:2}],u={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"},"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\n        first, latest = -1, -1\n        \n        for i in range(len(nums)):\n            j = len(nums)-i-1\n            \n            if nums[i] == target:\n                latest = i\n            if nums[j] == target:\n                first = j\n        \n        return [first, latest]\n")))}f.isMDXComponent=!0}}]);