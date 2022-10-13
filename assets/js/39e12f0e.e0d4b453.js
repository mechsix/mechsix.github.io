"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[11656],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,v=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return t?n.createElement(v,l(l({ref:r},d),{},{components:t})):n.createElement(v,l({ref:r},d))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},80567:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],i={title:"104. Maximum Depth of Binary Tree",sidebar_label:"104. Maximum Depth of Binary Tree",tags:["Binary Tree","Leetcode Easy"]},c=void 0,u={unversionedId:"leetcode/1-500/max_depth_of_binary_tree",id:"leetcode/1-500/max_depth_of_binary_tree",title:"104. Maximum Depth of Binary Tree",description:"Python",source:"@site/docs/leetcode/1-500/104_max_depth_of_binary_tree.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_depth_of_binary_tree",permalink:"/docs/leetcode/1-500/max_depth_of_binary_tree",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/104_max_depth_of_binary_tree.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:104,frontMatter:{title:"104. Maximum Depth of Binary Tree",sidebar_label:"104. Maximum Depth of Binary Tree",tags:["Binary Tree","Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"103. Binary Tree Zigzag Level Order Traversal",permalink:"/docs/leetcode/1-500/binary_tree_zigzag_level_order"},next:{title:"105. Construct Binary Tree from Preorder and Inorder Traversal",permalink:"/docs/leetcode/1-500/binary_tree_preorder_inorder"}},d=[{value:"Python",id:"python",children:[],level:2},{value:"Go",id:"go",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],p={toc:d};function s(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxDepth(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n        return self._travel(0, root)\n\n    def _travel(self, level, node):\n        if not node:\n            return level\n\n        return max(self._travel(level+1, node.left), self._travel(level+1, node.right))\n")),(0,a.kt)("h2",{id:"go"},"Go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func maxDepth(root *TreeNode) int {\n    if root == nil {\n        return 0\n    }\n    return travel(0, root)\n}\n\nfunc travel(level int, node *TreeNode) int {\n    if node == nil {\n        return level\n    }\n\n    leftLevel := travel(level+1, node.Left)\n    rightLevel := travel(level+1, node.Right)\n\n    if leftLevel > rightLevel {\n        return leftLevel\n    } else {\n        return rightLevel\n    }\n}\n")),(0,a.kt)("h2",{id:"javascript"},"Javascript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var maxDepth = function(root) {\n    if (root === undefined) {\n        return 0\n    }\n\n    return travel(root, 0)\n};\n\nvar travel = (node, level) => {\n    if (node === null) {\n        return level\n    }\n\n    return Math.max(travel(node.left, level+1), travel(node.right, level+1))\n}\n")))}s.isMDXComponent=!0}}]);