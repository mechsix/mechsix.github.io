"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8169],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69681:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={title:"198. House Robber",sidebar_label:"198. House Robber",tags:["Leetcode Medium"]},l=void 0,u={unversionedId:"leetcode/1-500/house_robber",id:"leetcode/1-500/house_robber",title:"198. House Robber",description:"https://leetcode.com/problems/house-robber",source:"@site/docs/leetcode/1-500/198_house_robber.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/house_robber",permalink:"/docs/leetcode/1-500/house_robber",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/198_house_robber.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:198,frontMatter:{title:"198. House Robber",sidebar_label:"198. House Robber",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"167. Two Sum II - Input Array Is Sorted",permalink:"/docs/leetcode/1-500/two_sum_ii"},next:{title:"203. Remove Linked List Elements",permalink:"/docs/leetcode/1-500/rm_linked_list_elements"}},s=[{value:"Python",id:"python",children:[],level:2}],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/house-robber"},"https://leetcode.com/problems/house-robber")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rob(self, nums: List[int]) -> int:\n        total_1 = 0\n        total_2 = 0\n\n        for index, num in enumerate(nums):\n            if index % 2 == 0:\n                total_1 = max(total_1 + num, total_2)\n            else:\n                total_2 = max(total_2 + num, total_1)\n        return max(total_1, total_2)\n")))}m.isMDXComponent=!0}}]);