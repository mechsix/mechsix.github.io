"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2740],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},76143:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"94. Binary Tree Inorder Traversal",slidebar_label:"94. Binary Tree Inorder",tags:["Leetcode Easy","Binary Tree"]},l=void 0,s={unversionedId:"leetcode/1-500/binary_tree_inorder",id:"leetcode/1-500/binary_tree_inorder",title:"94. Binary Tree Inorder Traversal",description:"",source:"@site/docs/leetcode/1-500/94_binary_tree_inorder.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/binary_tree_inorder",permalink:"/docs/leetcode/1-500/binary_tree_inorder",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/94_binary_tree_inorder.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:94,frontMatter:{title:"94. Binary Tree Inorder Traversal",slidebar_label:"94. Binary Tree Inorder",tags:["Leetcode Easy","Binary Tree"]},sidebar:"docSidebar",previous:{title:"88. Merge Sorted Array",permalink:"/docs/leetcode/1-500/merge_sorted_array"},next:{title:"95. Unique Binary Search Trees II",permalink:"/docs/leetcode/1-500/uniq_bin_trees_ii"}},u=[],d={toc:u};function p(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        return self.travel([], root)\n    def travel(self, result, node):\n        if not node:\n            return\n\n        self.travel(result, node.left)\n        result.append(node.val)\n        self.travel(result, node.right)\n        return result\n")))}p.isMDXComponent=!0}}]);