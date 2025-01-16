"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[77141],{27929:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"leetcode/1-500/lowest_common_ancestor_of_bst","title":"235. Lowest Common Ancestor of a Binary Search Tree","description":"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/","source":"@site/docs/leetcode/1-500/235_lowest_common_ancestor_of_bst.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/lowest_common_ancestor_of_bst","permalink":"/docs/leetcode/1-500/lowest_common_ancestor_of_bst","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"BST","permalink":"/docs/tags/bst"}],"version":"current","sidebarPosition":235,"frontMatter":{"title":"235. Lowest Common Ancestor of a Binary Search Tree","sidebar_label":"235. Lowest Common Ancestor of a Binary Search Tree","tags":["Leetcode Easy","BST"]},"sidebar":"docSidebar","previous":{"title":"234. Palindrome Linked List","permalink":"/docs/leetcode/1-500/palindrome_linked_list"},"next":{"title":"326. Power of Three","permalink":"/docs/leetcode/1-500/power_of_three"}}');var r=t(74848),s=t(28453);const a={title:"235. Lowest Common Ancestor of a Binary Search Tree",sidebar_label:"235. Lowest Common Ancestor of a Binary Search Tree",tags:["Leetcode Easy","BST"]},l=void 0,i={},c=[{value:"Python",id:"python",level:2},{value:"First Solution",id:"first-solution",level:3},{value:"Second Solution",id:"second-solution",level:3}];function d(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:(0,r.jsx)(o.a,{href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",children:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"})}),"\n",(0,r.jsx)(o.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(o.h3,{id:"first-solution",children:"First Solution"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if not root:\n            # Leaf, but target not found\n            return None\n\n        if root.val == p.val or root.val == q.val:\n            # Hit the target, current root is p or q\n            return root\n\n        if p.val > root.val and q.val > root.val:\n            # Find targets from the right tree\n            return self.lowestCommonAncestor(root.right, p, q)\n        elif p.val < root.val and q.val < root.val:\n            # Find targets from the left tree\n            return self.lowestCommonAncestor(root.left, p, q)\n\n        # Both left and right are reaching the targets, current node is the answer\n        return root\n"})}),"\n",(0,r.jsx)(o.h3,{id:"second-solution",children:"Second Solution"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-python",children:"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        targets = (p.val, q.val)\n        \n        def find(node):\n            if not node:\n                return\n            \n            if node.val in targets:\n                return node\n            \n            if all(node.val > t for t in targets):\n                return find(node.left)\n\n            if all(node.val < t for t in targets):\n                return find(node.right)\n            \n            return node\n            \n            \n        return find(root)\n"})})]})}function f(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>l});var n=t(96540);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);