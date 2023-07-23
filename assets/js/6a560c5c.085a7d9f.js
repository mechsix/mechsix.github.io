"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[66147],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>v});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,v=p["".concat(d,".").concat(f)]||p[f]||u[f]||a;return t?n.createElement(v,o(o({ref:r},c),{},{components:t})):n.createElement(v,o({ref:r},c))}));function v(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90389:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=t(87462),l=(t(67294),t(3905));const a={title:"103. Binary Tree Zigzag Level Order Traversal",sidebar_label:"103. Binary Tree Zigzag Level Order Traversal",tags:["Binary Tree","Leetcode Medium","DFS"]},o=void 0,i={unversionedId:"leetcode/1-500/binary_tree_zigzag_level_order",id:"leetcode/1-500/binary_tree_zigzag_level_order",title:"103. Binary Tree Zigzag Level Order Traversal",description:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",source:"@site/docs/leetcode/1-500/103_binary_tree_zigzag_level_order.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/binary_tree_zigzag_level_order",permalink:"/docs/leetcode/1-500/binary_tree_zigzag_level_order",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/103_binary_tree_zigzag_level_order.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:103,frontMatter:{title:"103. Binary Tree Zigzag Level Order Traversal",sidebar_label:"103. Binary Tree Zigzag Level Order Traversal",tags:["Binary Tree","Leetcode Medium","DFS"]},sidebar:"docSidebar",previous:{title:"102. Binary Tree Level Order Traversal",permalink:"/docs/leetcode/1-500/binary_tree_levelorder"},next:{title:"104. Maximum Depth of Binary Tree",permalink:"/docs/leetcode/1-500/max_depth_of_binary_tree"}},d={},s=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3},{value:"BFS",id:"bfs",level:3}],c={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,l.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("h3",{id:"dfs"},"DFS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n\nclass Solution:\n    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        if not root:\n            return []\n\n        result = []\n\n        def dfs(node, level):\n            if level >= len(result):\n                result.append(deque([node.val]))\n            else:\n                if level % 2 == 0:\n                    result[level].append(node.val)\n                else:\n                    result[level].appendleft(node.val)\n\n            if node.left:\n                dfs(node.left, level+1)\n\n            if node.right:\n                dfs(node.right, level+1)\n\n        dfs(root, 0)\n        return result\n")),(0,l.kt)("h3",{id:"bfs"},"BFS"),(0,l.kt)("p",null,"(TODO)"))}u.isMDXComponent=!0}}]);