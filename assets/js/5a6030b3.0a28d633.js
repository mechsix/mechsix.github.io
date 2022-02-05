"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8610],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),f=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=f(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=f(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var f=2;f<l;f++)a[f]=r[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58533:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return s},default:function(){return p}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],i={title:"404. Sum of Left Leaf",sidebar_label:"404. Sum of Left Leaf",tags:["Leetcode Easy"]},c=void 0,f={unversionedId:"leetcode/1-500/left_leaf_sum",id:"leetcode/1-500/left_leaf_sum",title:"404. Sum of Left Leaf",description:"https://leetcode.com/problems/sum-of-left-leaves",source:"@site/docs/leetcode/1-500/404_left_leaf_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/left_leaf_sum",permalink:"/docs/leetcode/1-500/left_leaf_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/404_left_leaf_sum.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:404,frontMatter:{title:"404. Sum of Left Leaf",sidebar_label:"404. Sum of Left Leaf",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"387. First Unique Character in a String",permalink:"/docs/leetcode/1-500/first_unique_char_in_string"},next:{title:"414. Third Maximum Number",permalink:"/docs/leetcode/1-500/third_max_number"}},s=[{value:"Python",id:"python",children:[],level:2}],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sum-of-left-leaves"},"https://leetcode.com/problems/sum-of-left-leaves")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from typing import Optional\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass Solution:\n    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n\n        sum = self.sumOfLeftLeaves(root.left) + self.sumOfLeftLeaves(root.right)\n        if root.left and root.left.left is None and root.left.right is None:\n            sum += root.left.val\n\n        return sum\n")))}p.isMDXComponent=!0}}]);