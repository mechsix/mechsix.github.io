"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[62899],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6733:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"189. Rotate Array",sidebar_label:"189. Rotate Array",tags:["Leetcode Medium"]},c=void 0,u={unversionedId:"leetcode/1-500/rotate_array",id:"leetcode/1-500/rotate_array",title:"189. Rotate Array",description:"https://leetcode.com/problems/rotate-array",source:"@site/docs/leetcode/1-500/189_rotate_array.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/rotate_array",permalink:"/docs/leetcode/1-500/rotate_array",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/189_rotate_array.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:189,frontMatter:{title:"189. Rotate Array",sidebar_label:"189. Rotate Array",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"188. Best Time to Buy and Sell Stock IV",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock_iv"},next:{title:"190. Reverse Bits",permalink:"/docs/leetcode/1-500/reverse_bits"}},s=[{value:"Python",id:"python",children:[{value:"Extra Array",id:"extra-array",children:[],level:3}],level:2}],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rotate-array"},"https://leetcode.com/problems/rotate-array")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"extra-array"},"Extra Array"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(n)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(n)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        k = k % len(nums)\n        result = nums[-k:] + nums[:-k]\n\n        for i in range(len(result)):\n            nums[i] = result[i]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="simplify version"',title:'"simplify','version"':!0},"class Solution:\n    def rotate(self, nums: List[int], k: int) -> None:\n        k = k % len(nums)\n        nums[:] = nums[-k:] + nums[:-k]\n")))}m.isMDXComponent=!0}}]);