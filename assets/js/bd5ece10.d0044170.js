"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6827],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(r),b=o,f=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64053:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={title:"198. House Robber",sidebar_label:"198. House Robber"},u=void 0,l={unversionedId:"leetcode/house_robber",id:"leetcode/house_robber",isDocsHomePage:!1,title:"198. House Robber",description:"Python",source:"@site/docs/leetcode/198_house_robber.md",sourceDirName:"leetcode",slug:"/leetcode/house_robber",permalink:"/docs/leetcode/house_robber",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/198_house_robber.md",tags:[],version:"current",sidebarPosition:198,frontMatter:{title:"198. House Robber",sidebar_label:"198. House Robber"},sidebar:"tutorialSidebar",previous:{title:"130. Surrounded Regions",permalink:"/docs/leetcode/surrounded_regions"},next:{title:"203. Remove Linked List Elements",permalink:"/docs/leetcode/rm_linked_list_elements"}},s=[{value:"Python",id:"python",children:[]}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rob(self, nums: List[int]) -> int:\n        total_1 = 0\n        total_2 = 0\n        \n        for index, num in enumerate(nums):\n            if index % 2 == 0:\n                total_1 = max(total_1 + num, total_2)\n            else:\n                total_2 = max(total_2 + num, total_1)\n        return max(total_1, total_2)\n")))}d.isMDXComponent=!0}}]);