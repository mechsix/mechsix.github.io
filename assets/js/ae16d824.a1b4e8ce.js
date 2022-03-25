"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1492],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},78976:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"538. Convert BST to Greater Tree",sidebar_label:"538. Convert BST to Greater Tree",tags:["Leetcode Medium","BST"]},l=void 0,u={unversionedId:"leetcode/501-1000/538_1038_convert_bst_greater_tree",id:"leetcode/501-1000/538_1038_convert_bst_greater_tree",title:"538. Convert BST to Greater Tree",description:"Python",source:"@site/docs/leetcode/501-1000/538_1038_convert_bst_greater_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/538_1038_convert_bst_greater_tree",permalink:"/docs/leetcode/501-1000/538_1038_convert_bst_greater_tree",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/538_1038_convert_bst_greater_tree.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",frontMatter:{title:"538. Convert BST to Greater Tree",sidebar_label:"538. Convert BST to Greater Tree",tags:["Leetcode Medium","BST"]},sidebar:"docSidebar",previous:{title:"997. Find the Town Judge",permalink:"/docs/leetcode/501-1000/find_the_town_judge"},next:{title:"1004. Max Consecutive Ones III",permalink:"/docs/leetcode/1001-1500/max_consecutive_ones_iii"}},s=[{value:"Python",id:"python",children:[],level:2}],d={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"BST inorder is in increasing order")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.total = 0\n\n    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root:\n            return\n        self.total = 0\n        self._travel(root)\n\n        return root\n\n    def _travel(self, node):\n        if not node:\n            return\n\n        self._travel(node.right)\n\n        self.total += node.val\n        node.val = self.total\n\n        self._travel(node.left)\n")))}p.isMDXComponent=!0}}]);