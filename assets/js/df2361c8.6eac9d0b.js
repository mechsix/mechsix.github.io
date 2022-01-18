"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3192],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},64697:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"112. Path Sum",slidebar_label:"112. Path Sum",tags:["Leetcode Easy","Binary Tree"]},c=void 0,u={unversionedId:"leetcode/1-500/path_sum",id:"leetcode/1-500/path_sum",title:"112. Path Sum",description:"Python",source:"@site/docs/leetcode/1-500/112_path_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/path_sum",permalink:"/docs/leetcode/1-500/path_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/112_path_sum.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:112,frontMatter:{title:"112. Path Sum",slidebar_label:"112. Path Sum",tags:["Leetcode Easy","Binary Tree"]},sidebar:"docSidebar",previous:{title:"106. Construct Binary Tree from Inorder and Postorder Traversal",permalink:"/docs/leetcode/1-500/construct_bin_tree_from_inorder_postorder_traversal"},next:{title:"114. Flatten Binary Tree to Linked List",permalink:"/docs/leetcode/1-500/flatten_binary_tree_to_ll"}},s=[{value:"Python",id:"python",children:[],level:2}],d={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:\n        return self._travel(0, root, targetSum)\n\n    def _travel(self, total: int, node: Optional[TreeNode], targetSum: int) -> bool:\n        if not node:\n            return False\n\n        if not node.left and not node.right and total + node.val == targetSum:\n            return True\n\n        return self._travel(total+node.val, node.left, targetSum) \\\n            or self._travel(total+node.val, node.right, targetSum)\n")))}p.isMDXComponent=!0}}]);