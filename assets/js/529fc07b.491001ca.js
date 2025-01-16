"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[51541],{89753:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"leetcode/1-500/lowest_common_ancestor_of_bt","title":"236. Lowest Common Ancestor of a Binary Tree","description":"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree","source":"@site/docs/leetcode/1-500/326_lowest_common_ancestor_of_bt.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/lowest_common_ancestor_of_bt","permalink":"/docs/leetcode/1-500/lowest_common_ancestor_of_bt","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"}],"version":"current","sidebarPosition":326,"frontMatter":{"title":"236. Lowest Common Ancestor of a Binary Tree","sidebar_label":"236. Lowest Common Ancestor of a Binary Tree","tags":["Leetcode Medium","Binary Tree"]},"sidebar":"docSidebar","previous":{"title":"322. Coin Change","permalink":"/docs/leetcode/1-500/coin_change"},"next":{"title":"328. Odd Even Linked List","permalink":"/docs/leetcode/1-500/odd_even_linklist"}}');var r=o(74848),s=o(28453);const c={title:"236. Lowest Common Ancestor of a Binary Tree",sidebar_label:"236. Lowest Common Ancestor of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},i=void 0,a={},l=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",children:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if not root:\n            # Leaf, but target not found\n            return None\n\n        if root.val == p.val or root.val == q.val:\n            # Hit the target, current root is p or q\n            return root\n\n        left = self.lowestCommonAncestor(root.left, p, q)\n        right = self.lowestCommonAncestor(root.right, p, q)\n\n        if not left or not right:\n            # One or more target are not yet reach\n            return left if left else right\n\n        # Both left and right are reaching the targets, current node is the answer\n        return root\n"})}),"\n",(0,r.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var lowestCommonAncestor = function(root, p, q) {\n    let res;\n  \n    const recursive = (node) => {\n      if (node === null) return false;\n      \n      const isLeftMatched = recursive(node.left);\n      const isRightMatched = recursive(node.right);\n      \n      const isMidMatched = node.val === p.val || node.val === q.val;\n      \n      if ((isLeftMatched && isRightMatched) || (isLeftMatched && isMidMatched) || (isRightMatched && isMidMatched)) res = node;\n      \n      return isLeftMatched || isRightMatched || isMidMatched;            \n    }\n    \n    recursive(root);\n    return res;\n};\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>i});var n=o(96540);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);