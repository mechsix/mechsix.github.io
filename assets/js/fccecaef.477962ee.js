"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[78531],{5175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1-500/symmetric_tree","title":"101. Symmetric Tree","description":"https://leetcode.com/problems/symmetric-tree/","source":"@site/docs/leetcode/1-500/101_symmetric_tree.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/symmetric_tree","permalink":"/docs/leetcode/1-500/symmetric_tree","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":101,"frontMatter":{"title":"101. Symmetric Tree","slidebar_label":"101. Symmetric Tree","tags":["Leetcode Easy","Binary Tree","DFS","Go"]},"sidebar":"docSidebar","previous":{"title":"100. Same Tree","permalink":"/docs/leetcode/1-500/same_tree"},"next":{"title":"102. Binary Tree Level Order Traversal","permalink":"/docs/leetcode/1-500/binary_tree_levelorder"}}');var o=n(74848),i=n(28453);const l={title:"101. Symmetric Tree",slidebar_label:"101. Symmetric Tree",tags:["Leetcode Easy","Binary Tree","DFS","Go"]},c=void 0,s={},a=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3},{value:"Go",id:"go",level:2},{value:"DFS",id:"dfs-1",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/symmetric-tree/",children:"https://leetcode.com/problems/symmetric-tree/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.h3,{id:"dfs",children:"DFS"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\n        if not root:\n            return False\n\n        def check(left, right):\n            if not left or not right:\n                if not left and not right:\n                    return True\n                return False\n\n            if left.val != right.val:\n                return False\n\n            return check(left.left, right.right) and \\\n                   check(left.right, right.left)\n\n        return check(root.left, root.right)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"go",children:"Go"}),"\n",(0,o.jsx)(t.h3,{id:"dfs-1",children:"DFS"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"/**\n * Definition for a binary tree node.\n * type TreeNode struct {\n *     Val int\n *     Left *TreeNode\n *     Right *TreeNode\n * }\n */\nfunc isSymmetric(root *TreeNode) bool {\n    if root == nil {\n        return false\n    }\n\n    return check(root.Left, root.Right)\n}\n\nfunc check(left *TreeNode, right *TreeNode) bool {\n    if left == nil && right == nil {\n        return true\n    }\n\n    if left == nil || right == nil {\n        return false\n    }\n\n    if left.Val != right.Val {\n        return false\n    }\n\n    return check(left.Right, right.Left) && check(left.Left, right.Right)\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(96540);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);