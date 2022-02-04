"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4370],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27900:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"145. Binary Tree Postorder Traversal",slidebar_label:"145. Binary Tree Postorder",tags:["Leetcode Easy","Binary Tree"]},s=void 0,c={unversionedId:"leetcode/1-500/binary_tree_postorder",id:"leetcode/1-500/binary_tree_postorder",title:"145. Binary Tree Postorder Traversal",description:"https://leetcode.com/problems/binary-tree-postorder-traversal",source:"@site/docs/leetcode/1-500/145_binary_tree_postorder.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/binary_tree_postorder",permalink:"/docs/leetcode/1-500/binary_tree_postorder",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/145_binary_tree_postorder.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:145,frontMatter:{title:"145. Binary Tree Postorder Traversal",slidebar_label:"145. Binary Tree Postorder",tags:["Leetcode Easy","Binary Tree"]},sidebar:"docSidebar",previous:{title:"144. Binary Tree Preorder Traversal",permalink:"/docs/leetcode/1-500/binary_tree_preorder"},next:{title:"147. Insertion Sort List",permalink:"/docs/leetcode/1-500/insertion_sort_list"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-postorder-traversal"},"https://leetcode.com/problems/binary-tree-postorder-traversal")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        return self.travel([], root)\n\n    def travel(self, result, node):\n        if not node:\n            return\n\n        self.travel(result, node.left)\n        self.travel(result, node.right)\n        result.append(node.val)\n        return result\n")))}d.isMDXComponent=!0}}]);