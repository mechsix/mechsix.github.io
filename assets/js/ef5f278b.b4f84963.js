"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[7821],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70799:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],s={title:"35. Search Insert Position",sidebar_label:"35. Search Insert Position",tags:["Leetcode Easy"]},a=void 0,l={unversionedId:"leetcode/search_insert_pos",id:"leetcode/search_insert_pos",isDocsHomePage:!1,title:"35. Search Insert Position",description:"Python",source:"@site/docs/leetcode/35_search_insert_pos.md",sourceDirName:"leetcode",slug:"/leetcode/search_insert_pos",permalink:"/docs/leetcode/search_insert_pos",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/35_search_insert_pos.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:35,frontMatter:{title:"35. Search Insert Position",sidebar_label:"35. Search Insert Position",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"21. Merge Two Sorted Lists",permalink:"/docs/leetcode/merge_sorted_list"},next:{title:"43. Multiply Strings",permalink:"/docs/leetcode/multiply_strings"}},u=[{value:"Python",id:"python",children:[]}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        insert_pos = 0\n\n        for index, num in enumerate(nums):\n            if target == num:\n                return index\n            if target > num:\n                insert_pos = index+1\n\n        return insert_pos\n")))}d.isMDXComponent=!0}}]);