"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94539],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,c(c({ref:t},s),{},{components:n})):r.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13827:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={title:"116. Populating Next Right Pointers in Each Node",sidebar_label:"116. Populating Next Right Pointers in Each Node",tags:["Binary Tree","Leetcode Medium","Go"]},c=void 0,l={unversionedId:"leetcode/1-500/link_next_right_in_binary_tree_nodes",id:"leetcode/1-500/link_next_right_in_binary_tree_nodes",title:"116. Populating Next Right Pointers in Each Node",description:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node",source:"@site/docs/leetcode/1-500/116_link_next_right_in_binary_tree_nodes.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/link_next_right_in_binary_tree_nodes",permalink:"/docs/leetcode/1-500/link_next_right_in_binary_tree_nodes",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/116_link_next_right_in_binary_tree_nodes.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:116,frontMatter:{title:"116. Populating Next Right Pointers in Each Node",sidebar_label:"116. Populating Next Right Pointers in Each Node",tags:["Binary Tree","Leetcode Medium","Go"]},sidebar:"docSidebar",previous:{title:"115. Distinct Subsequences",permalink:"/docs/leetcode/1-500/distinct_subsequences"},next:{title:"117. Populating Next Right Pointers in Each Node II",permalink:"/docs/leetcode/1-500/link_next_right_in_binary_tree_nodes_ii"}},a={},u=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2},{value:"Javascript",id:"javascript",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node"},"https://leetcode.com/problems/populating-next-right-pointers-in-each-node")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def connect(self, root):\n        if root is None:\n            return root\n        self._connect(root.left, root.right)\n        return root\n\n    def _connect(self, node1, node2):\n        if node1 is None or node2 is None:\n            return None\n        node1.next = node2\n        self._connect(node1.left, node1.right)\n        self._connect(node2.left, node2.right)\n        self._connect(node1.right, node2.left)\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func connect(root *Node) *Node {\n    if root == nil {\n        return nil\n    }\n\n    connectTwo(root.Left, root.Right)\n    return root\n}\n\nfunc connectTwo(left *Node, right *Node) *Node {\n    if left == nil || right == nil {\n        return nil\n    }\n\n    left.Next = right\n    connectTwo(left.Left, left.Right)\n    connectTwo(right.Left, right.Right)\n    connectTwo(left.Right, right.Left)\n    return nil\n}\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  const queue = [];\n  if (root) queue.push(root);\n\n  while (queue.length) {\n    const total = queue.length;\n    for (let i = 0; i < total; i++) {\n      const node = queue.shift();\n      if (i < total - 1) node.next = queue[0];\n\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n\n  }\n  return root;\n")))}d.isMDXComponent=!0}}]);