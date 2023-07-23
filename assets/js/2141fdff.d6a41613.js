"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[83880],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},80202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={title:"95. Unique Binary Search Trees II",sidebar_label:"95. Unique Binary Search Trees II",tags:["Leetcode Medium","BST","DFS","TODO"]},a=void 0,s={unversionedId:"leetcode/1-500/uniq_bin_trees_ii",id:"leetcode/1-500/uniq_bin_trees_ii",title:"95. Unique Binary Search Trees II",description:"https://leetcode.com/problems/unique-binary-search-trees-ii",source:"@site/docs/leetcode/1-500/95_uniq_bin_trees_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/uniq_bin_trees_ii",permalink:"/docs/leetcode/1-500/uniq_bin_trees_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/95_uniq_bin_trees_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:95,frontMatter:{title:"95. Unique Binary Search Trees II",sidebar_label:"95. Unique Binary Search Trees II",tags:["Leetcode Medium","BST","DFS","TODO"]},sidebar:"docSidebar",previous:{title:"94. Binary Tree Inorder Traversal",permalink:"/docs/leetcode/1-500/binary_tree_inorder"},next:{title:"96. Unique Binary Trees",permalink:"/docs/leetcode/1-500/unique_binary_trees"}},l={},c=[{value:"Python",id:"python",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/unique-binary-search-trees-ii"},"https://leetcode.com/problems/unique-binary-search-trees-ii")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,"DFS solution with recursion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:\n        if n < 1:\n            return []\n\n        return self.generate_dfs(1, n)\n\n    def generate_dfs(self, left: int, right: int):\n        if left > right:\n            return [None]\n\n        result = []\n        for i in range(left, right+1):\n            left_nodes = self.generate_dfs(left, i-1)\n            right_nodes = self.generate_dfs(i+1, right)\n            result += self.generate_tree(\n                    root_val=i,\n                    left_nodes=left_nodes,\n                    right_nodes=right_nodes\n                )\n        return result\n\n    @staticmethod\n    def generate_tree(root_val, left_nodes, right_nodes):\n        trees = []\n        for l_node in left_nodes:\n            for r_node in right_nodes:\n                root = TreeNode(root_val)\n                root.left = l_node\n                root.right = r_node\n                trees.append(root)\n        return trees\n")))}p.isMDXComponent=!0}}]);