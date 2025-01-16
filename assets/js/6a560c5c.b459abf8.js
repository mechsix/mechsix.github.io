"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[66402],{82343:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/1-500/binary_tree_zigzag_level_order","title":"103. Binary Tree Zigzag Level Order Traversal","description":"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/","source":"@site/docs/leetcode/1-500/103_binary_tree_zigzag_level_order.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/binary_tree_zigzag_level_order","permalink":"/docs/leetcode/1-500/binary_tree_zigzag_level_order","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"}],"version":"current","sidebarPosition":103,"frontMatter":{"title":"103. Binary Tree Zigzag Level Order Traversal","sidebar_label":"103. Binary Tree Zigzag Level Order Traversal","tags":["Binary Tree","Leetcode Medium","DFS"]},"sidebar":"docSidebar","previous":{"title":"102. Binary Tree Level Order Traversal","permalink":"/docs/leetcode/1-500/binary_tree_levelorder"},"next":{"title":"104. Maximum Depth of Binary Tree","permalink":"/docs/leetcode/1-500/max_depth_of_binary_tree"}}');var l=n(74848),i=n(28453);const o={title:"103. Binary Tree Zigzag Level Order Traversal",sidebar_label:"103. Binary Tree Zigzag Level Order Traversal",tags:["Binary Tree","Leetcode Medium","DFS"]},a=void 0,s={},d=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3},{value:"BFS",id:"bfs",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",children:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"})}),"\n",(0,l.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,l.jsx)(r.h3,{id:"dfs",children:"DFS"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-python",children:"from collections import deque\n\n\nclass Solution:\n    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        if not root:\n            return []\n\n        result = []\n\n        def dfs(node, level):\n            if level >= len(result):\n                result.append(deque([node.val]))\n            else:\n                if level % 2 == 0:\n                    result[level].append(node.val)\n                else:\n                    result[level].appendleft(node.val)\n\n            if node.left:\n                dfs(node.left, level+1)\n\n            if node.right:\n                dfs(node.right, level+1)\n\n        dfs(root, 0)\n        return result\n"})}),"\n",(0,l.jsx)(r.h3,{id:"bfs",children:"BFS"}),"\n",(0,l.jsx)(r.p,{children:"(TODO)"})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>a});var t=n(96540);const l={},i=t.createContext(l);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);