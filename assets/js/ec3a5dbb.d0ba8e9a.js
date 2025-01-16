"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[45440],{48261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/1-500/flatten_binary_tree_to_ll","title":"114. Flatten Binary Tree to Linked List","description":"https://leetcode.com/problems/flatten-binary-tree-to-linked-list","source":"@site/docs/leetcode/1-500/114_flatten_binary_tree_to_ll.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/flatten_binary_tree_to_ll","permalink":"/docs/leetcode/1-500/flatten_binary_tree_to_ll","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":114,"frontMatter":{"title":"114. Flatten Binary Tree to Linked List","sidebar_label":"114. Flatten Binary Tree to Linked List","tags":["Binary Tree","Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"113. Path Sum II","permalink":"/docs/leetcode/1-500/path_sum_ii"},"next":{"title":"115. Distinct Subsequences","permalink":"/docs/leetcode/1-500/distinct_subsequences"}}');var o=n(74848),i=n(28453);const l={title:"114. Flatten Binary Tree to Linked List",sidebar_label:"114. Flatten Binary Tree to Linked List",tags:["Binary Tree","Leetcode Medium"]},s=void 0,a={},c=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list",children:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def flatten(self, root: Optional[TreeNode]) -> None:\n        if root is None:\n            return None\n\n        # 1. Flattern both sub-trees\n        self.flatten(root.left)\n        self.flatten(root.right)\n\n        # 2. Left subtree as right tree\n        origin_left = root.left\n        origin_right = root.right\n\n        root.left = None\n        root.right = origin_left\n\n        # 3. Attach origin right tree to the eof right tree\n        cur = root\n        while cur.right:\n            cur = cur.right\n        cur.right = origin_right\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);