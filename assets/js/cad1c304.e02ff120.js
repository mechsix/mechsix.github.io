"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6814],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||c;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13401:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=["components"],a={title:"231. Power of Two",sidebar_label:"231. Power of Two",tags:["Leetcode Easy"]},l=void 0,s={unversionedId:"leetcode/1-500/power_of_two",id:"leetcode/1-500/power_of_two",title:"231. Power of Two",description:"Python",source:"@site/docs/leetcode/1-500/231_power_of_two.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/power_of_two",permalink:"/docs/leetcode/1-500/power_of_two",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/231_power_of_two.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:231,frontMatter:{title:"231. Power of Two",sidebar_label:"231. Power of Two",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"230. Kth Smallest Element in a BST",permalink:"/docs/leetcode/1-500/kth_smallest_elm_in_bst"},next:{title:"236. Lowest Common Ancestor of a Binary Tree",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bt"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isPowerOfTwo(self, n: int) -> bool:\n        while n > 1:\n            n /= 2\n        return n == 1\n")))}f.isMDXComponent=!0}}]);