"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[16],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"1457. Pseudo-Palindromic Paths in a Binary Tree",sidebar_label:"1457. Pseudo-Palindromic Paths in a Binary Tree",tags:["Leetcode Medium","Binary Tree","DFS"]},i=void 0,l={unversionedId:"leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree",id:"leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree",title:"1457. Pseudo-Palindromic Paths in a Binary Tree",description:"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",source:"@site/docs/leetcode/1001-1500/1457_pseudo_palindromic_paths_in_a_binary_tree.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree",permalink:"/docs/leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1457_pseudo_palindromic_paths_in_a_binary_tree.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:1457,frontMatter:{title:"1457. Pseudo-Palindromic Paths in a Binary Tree",sidebar_label:"1457. Pseudo-Palindromic Paths in a Binary Tree",tags:["Leetcode Medium","Binary Tree","DFS"]},sidebar:"docSidebar",previous:{title:"1448. Count Good Nodes in Binary Tree",permalink:"/docs/leetcode/1001-1500/count_good_nodes_in_binary_tree"},next:{title:"1461. Check If a String Contains All Binary Codes of Size K",permalink:"/docs/leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k"}},c={},s=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/"},"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"dfs"},"DFS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def pseudoPalindromicPaths (self, root: Optional[TreeNode]) -> int:\n        def dfs(node, path_origin: set):\n            if not node:\n                return 0\n            \n            path = path_origin.copy()\n            if node.val in path:\n                path.remove(node.val)\n            else:\n                path.add(node.val)\n\n            if not node.left and not node.right:\n                # Current node is leave, check the path\n                return 1 if len(path) <= 1 else 0\n            \n            return dfs(node.left, path) + dfs(node.right, path)\n        \n        return dfs(root, set())\n")))}u.isMDXComponent=!0}}]);