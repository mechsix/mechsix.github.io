"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9484],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||c;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},67043:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),a=["components"],i={title:"326. Power of Three",sidebar_label:"326. Power of Three",tags:["Leetcode Easy"]},l=void 0,p={unversionedId:"leetcode/1-500/power_of_three",id:"leetcode/1-500/power_of_three",title:"326. Power of Three",description:"https://leetcode.com/problems/power-of-three/",source:"@site/docs/leetcode/1-500/236_power_of_three.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/power_of_three",permalink:"/docs/leetcode/1-500/power_of_three",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/236_power_of_three.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:236,frontMatter:{title:"326. Power of Three",sidebar_label:"326. Power of Three",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"235. Lowest Common Ancestor of a Binary Search Tree",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bst"},next:{title:"238. Product of Array Except Self",permalink:"/docs/leetcode/1-500/product_array_except_self"}},s=[{value:"Python",id:"python",children:[],level:2}],u={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/power-of-three/"},"https://leetcode.com/problems/power-of-three/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isPowerOfThree(self, n: int) -> bool:\n        if n < 1:\n            return False\n        \n        while n % 3 == 0:\n            n /= 3\n        \n        return n == 1\n")))}f.isMDXComponent=!0}}]);