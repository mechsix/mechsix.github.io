"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8720],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"114. Flatten Binary Tree to Linked List",sidebar_label:"114. Flatten Binary Tree to Linked List",tags:["Binary Tree","Leetcode Medium"]},l=void 0,a={unversionedId:"leetcode/1-500/flatten_binary_tree_to_ll",id:"leetcode/1-500/flatten_binary_tree_to_ll",title:"114. Flatten Binary Tree to Linked List",description:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list",source:"@site/docs/leetcode/1-500/114_flatten_binary_tree_to_ll.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/flatten_binary_tree_to_ll",permalink:"/docs/leetcode/1-500/flatten_binary_tree_to_ll",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/114_flatten_binary_tree_to_ll.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:114,frontMatter:{title:"114. Flatten Binary Tree to Linked List",sidebar_label:"114. Flatten Binary Tree to Linked List",tags:["Binary Tree","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"113. Path Sum II",permalink:"/docs/leetcode/1-500/path_sum_ii"},next:{title:"115. Distinct Subsequences",permalink:"/docs/leetcode/1-500/distinct_subsequences"}},c={},s=[{value:"Python",id:"python",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list"},"https://leetcode.com/problems/flatten-binary-tree-to-linked-list")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def flatten(self, root: Optional[TreeNode]) -> None:\n        if root is None:\n            return None\n\n        # 1. Flattern both sub-trees\n        self.flatten(root.left)\n        self.flatten(root.right)\n\n        # 2. Left subtree as right tree\n        origin_left = root.left\n        origin_right = root.right\n\n        root.left = None\n        root.right = origin_left\n\n        # 3. Attach origin right tree to the eof right tree\n        cur = root\n        while cur.right:\n            cur = cur.right\n        cur.right = origin_right\n")))}d.isMDXComponent=!0}}]);