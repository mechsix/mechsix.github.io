"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[90735],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>g});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),d=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,g=p["".concat(l,".").concat(u)]||p[u]||f[u]||a;return r?t.createElement(g,i(i({ref:n},s),{},{components:r})):t.createElement(g,i({ref:n},s))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93892:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=r(87462),o=(r(67294),r(3905));const a={title:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",sidebar_label:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",tags:["Leetcode Medium","DFS","Binary Tree"]},i=void 0,c={unversionedId:"leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned",id:"leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned",title:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",description:"https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",source:"@site/docs/leetcode/1001-1500/1379_find_corresponding_node_of_binary_tree_in_cloned.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned",permalink:"/docs/leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1379_find_corresponding_node_of_binary_tree_in_cloned.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:1379,frontMatter:{title:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",sidebar_label:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",tags:["Leetcode Medium","DFS","Binary Tree"]},sidebar:"docSidebar",previous:{title:"1373. Maximum Sum BST in Binary Tree",permalink:"/docs/leetcode/1001-1500/max_sum_bst_of_bt"},next:{title:"1382. Balance a Binary Search Tree",permalink:"/docs/leetcode/1001-1500/balance_a_bst"}},l={},d=[{value:"Python",id:"python",level:2}],s={toc:d},p="wrapper";function f(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/"},"https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:\n        path = self.generate_path(original, target, [])\n\n        cur = cloned\n        for edge in path:\n            if edge == 'R':\n                cur = cur.right\n            else:\n                cur = cur.left\n        return cur\n\n    def generate_path(self, node: TreeNode, target: TreeNode, path: list) -> Optional[list]:\n        if not node:\n            return\n\n        if node == target:\n            return path\n\n        left = self.generate_path(node.left, target, ['L'])\n        right = self.generate_path(node.right, target, ['R'])\n\n        if left is not None or right is not None:\n            return path + left if left else path + right\n")))}f.isMDXComponent=!0}}]);