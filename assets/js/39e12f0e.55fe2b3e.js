"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1656],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80567:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"104. Maximum Depth of Binary Tree",sidebar_label:"104. Maximum Depth of Binary Tree",tags:["Binary Tree","Leetcode Easy"]},c=void 0,u={unversionedId:"leetcode/1-500/max_depth_of_binary_tree",id:"leetcode/1-500/max_depth_of_binary_tree",title:"104. Maximum Depth of Binary Tree",description:"Python",source:"@site/docs/leetcode/1-500/104_max_depth_of_binary_tree.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_depth_of_binary_tree",permalink:"/docs/leetcode/1-500/max_depth_of_binary_tree",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/104_max_depth_of_binary_tree.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:104,frontMatter:{title:"104. Maximum Depth of Binary Tree",sidebar_label:"104. Maximum Depth of Binary Tree",tags:["Binary Tree","Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"102. Binary Tree Level Order Traversal",permalink:"/docs/leetcode/1-500/binary_tree_levelorder"},next:{title:"105. Construct Binary Tree from Preorder and Inorder Traversal",permalink:"/docs/leetcode/1-500/binary_tree_preorder_inorder"}},p=[{value:"Python",id:"python",children:[],level:2}],s={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n        return self._travel(0, root)\n\n    def _travel(self, level, node):\n        if not node:\n            return level\n\n        return max(self._travel(level+1, node.left), self._travel(level+1, node.right))\n")))}d.isMDXComponent=!0}}]);