"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[71814],{14218:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"leetcode/1-500/binary_tree_inorder","title":"94. Binary Tree Inorder Traversal","description":"https://leetcode.com/problems/binary-tree-inorder-traversal","source":"@site/docs/leetcode/1-500/94_binary_tree_inorder.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/binary_tree_inorder","permalink":"/docs/leetcode/1-500/binary_tree_inorder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"}],"version":"current","sidebarPosition":94,"frontMatter":{"title":"94. Binary Tree Inorder Traversal","slidebar_label":"94. Binary Tree Inorder","tags":["Leetcode Easy","Binary Tree"]},"sidebar":"docSidebar","previous":{"title":"93. Restore IP Addresses","permalink":"/docs/leetcode/1-500/restore_ip_addresses"},"next":{"title":"95. Unique Binary Search Trees II","permalink":"/docs/leetcode/1-500/uniq_bin_trees_ii"}}');var o=t(74848),s=t(28453);const a={title:"94. Binary Tree Inorder Traversal",slidebar_label:"94. Binary Tree Inorder",tags:["Leetcode Easy","Binary Tree"]},i=void 0,l={},d=[];function c(e){const r={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://leetcode.com/problems/binary-tree-inorder-traversal",children:"https://leetcode.com/problems/binary-tree-inorder-traversal"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        return self.travel([], root)\n    def travel(self, result, node):\n        if not node:\n            return\n\n        self.travel(result, node.left)\n        result.append(node.val)\n        self.travel(result, node.right)\n        return result\n"})})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);