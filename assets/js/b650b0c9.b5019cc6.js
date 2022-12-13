"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3594],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},78019:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const i={title:"414. Third Maximum Number",sidebar_label:"414. Third Maximum Number",tags:["Leetcode Easy","Leetcode Optimable"]},a=void 0,c={unversionedId:"leetcode/1-500/third_max_number",id:"leetcode/1-500/third_max_number",title:"414. Third Maximum Number",description:"https://leetcode.com/problems/third-maximum-number",source:"@site/docs/leetcode/1-500/414_third_max_number.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/third_max_number",permalink:"/docs/leetcode/1-500/third_max_number",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/414_third_max_number.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Leetcode Optimable",permalink:"/docs/tags/leetcode-optimable"}],version:"current",sidebarPosition:414,frontMatter:{title:"414. Third Maximum Number",sidebar_label:"414. Third Maximum Number",tags:["Leetcode Easy","Leetcode Optimable"]},sidebar:"docSidebar",previous:{title:"413. Arithmetic Slices",permalink:"/docs/leetcode/1-500/arithmetic_slices"},next:{title:"415. Add Strings",permalink:"/docs/leetcode/1-500/add_strings"}},u={},l=[{value:"Python",id:"python",level:2}],s={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/third-maximum-number"},"https://leetcode.com/problems/third-maximum-number")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def thirdMax(self, nums: List[int]) -> int:\n        sorted_nums = sorted(list(set(nums)))\n\n        if len(sorted_nums) < 3:\n            return max(sorted_nums)\n\n        result = None\n        for i in range(3):\n            if nums:\n                result = sorted_nums.pop()\n\n        return result\n")))}m.isMDXComponent=!0}}]);