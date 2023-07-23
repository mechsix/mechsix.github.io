"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[42084],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>_});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,_=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(_,l(l({ref:t},d),{},{components:n})):r.createElement(_,l({ref:t},d))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"117. Populating Next Right Pointers in Each Node II",sidebar_label:"117. Populating Next Right Pointers in Each Node II",tags:["Binary Tree","Leetcode Medium","Leetcode Optimable"]},l=void 0,a={unversionedId:"leetcode/1-500/link_next_right_in_binary_tree_nodes_ii",id:"leetcode/1-500/link_next_right_in_binary_tree_nodes_ii",title:"117. Populating Next Right Pointers in Each Node II",description:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii",source:"@site/docs/leetcode/1-500/117_link_next_right_in_binary_tree_nodes_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/link_next_right_in_binary_tree_nodes_ii",permalink:"/docs/leetcode/1-500/link_next_right_in_binary_tree_nodes_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/117_link_next_right_in_binary_tree_nodes_ii.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Leetcode Optimable",permalink:"/docs/tags/leetcode-optimable"}],version:"current",sidebarPosition:117,frontMatter:{title:"117. Populating Next Right Pointers in Each Node II",sidebar_label:"117. Populating Next Right Pointers in Each Node II",tags:["Binary Tree","Leetcode Medium","Leetcode Optimable"]},sidebar:"docSidebar",previous:{title:"116. Populating Next Right Pointers in Each Node",permalink:"/docs/leetcode/1-500/link_next_right_in_binary_tree_nodes"},next:{title:"118. Pascal's Triangle",permalink:"/docs/leetcode/1-500/pascal_triangle"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii"},"https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\nclass Solution:\n    def __init__(self):\n        self.map = defaultdict(list)\n\n    def connect(self, root: 'Node') -> 'Node':\n        if root is None:\n            return root\n        self._travel(root.left, 1)\n        self._travel(root.right, 1)\n\n        for level in self.map:\n            reduce(self._link_nodes, self.map[level])\n        return root\n\n    def _link_nodes(self, node1, node2):\n        node1.next = node2\n        return node2\n\n    def _travel(self, node, level):\n        if not node:\n            return\n\n        self.map[level].append(node)\n        self._travel(node.left, level+1)\n        self._travel(node.right, level+1)\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var connect = function(root) {\n  const queue = [];\n  if (root) queue.push(root);\n  \n  while (queue.length) {\n    const total = queue.length;\n    for (let i = 0; i < total; i++) {\n      const node = queue.shift();\n      if (i < total - 1) node.next = queue[0];\n    \n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);  \n    }\n    \n  }\n  return root;\n};\n")))}u.isMDXComponent=!0}}]);