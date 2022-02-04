"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1264],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),y=o,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57137:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"144. Binary Tree Preorder Traversal",slidebar_label:"144. Binary Tree Preorder",tags:["Leetcode Easy","Binary Tree"]},c=void 0,s={unversionedId:"leetcode/1-500/binary_tree_preorder",id:"leetcode/1-500/binary_tree_preorder",title:"144. Binary Tree Preorder Traversal",description:"https://leetcode.com/problems/binary-tree-preorder-traversal",source:"@site/docs/leetcode/1-500/144_binary_tree_preorder.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/binary_tree_preorder",permalink:"/docs/leetcode/1-500/binary_tree_preorder",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/144_binary_tree_preorder.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:144,frontMatter:{title:"144. Binary Tree Preorder Traversal",slidebar_label:"144. Binary Tree Preorder",tags:["Leetcode Easy","Binary Tree"]},sidebar:"docSidebar",previous:{title:"142. Linked List Cycle II",permalink:"/docs/leetcode/1-500/linked_list_cycle_ii"},next:{title:"145. Binary Tree Postorder Traversal",permalink:"/docs/leetcode/1-500/binary_tree_postorder"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-preorder-traversal"},"https://leetcode.com/problems/binary-tree-preorder-traversal")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        return self.travel([], root)\n\n    def travel(self, result: List[int], root: Optional[TreeNode]):\n        if not root:\n            return\n\n        result.append(root.val)\n        self.travel(result, root.left)\n        self.travel(result, root.right)\n        return result\n")))}d.isMDXComponent=!0}}]);