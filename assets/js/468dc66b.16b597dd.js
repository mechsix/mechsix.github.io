"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[77438],{20917:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"leetcode/501-1000/increasing_order_bst","title":"897. Increasing Order Search Tree","description":"https://leetcode.com/problems/increasing-order-search-tree/","source":"@site/docs/leetcode/501-1000/897_increasing_order_bst.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/increasing_order_bst","permalink":"/docs/leetcode/501-1000/increasing_order_bst","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"BST","permalink":"/docs/tags/bst"}],"version":"current","sidebarPosition":897,"frontMatter":{"title":"897. Increasing Order Search Tree","sidebar_label":"897. Increasing Order Search Tree","tags":["Leetcode Easy","BST"]},"sidebar":"docSidebar","previous":{"title":"894. All Possible Full Binary Trees","permalink":"/docs/leetcode/501-1000/all_possible_full_binary_tree"},"next":{"title":"905. Sort Array By Parity","permalink":"/docs/leetcode/501-1000/sort_array_by_parity"}}');var o=n(74848),i=n(28453);const d={title:"897. Increasing Order Search Tree",sidebar_label:"897. Increasing Order Search Tree",tags:["Leetcode Easy","BST"]},s=void 0,l={},a=[{value:"Python",id:"python",level:2},{value:"Inorder travel &amp; rebuild",id:"inorder-travel--rebuild",level:3},{value:"Inorder travel with pointers swap",id:"inorder-travel-with-pointers-swap",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://leetcode.com/problems/increasing-order-search-tree/",children:"https://leetcode.com/problems/increasing-order-search-tree/"})}),"\n",(0,o.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(r.h3,{id:"inorder-travel--rebuild",children:"Inorder travel & rebuild"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def increasingBST(self, root: TreeNode) -> TreeNode:\n        def inorder(node):\n            if not node:\n                return\n            yield from inorder(node.left)\n            yield node.val\n            yield from inorder(node.right)\n\n        dummy = TreeNode()\n        cur = dummy\n        for value in inorder(root):\n            cur.right = TreeNode(val=value)\n            cur = cur.right\n\n        return dummy.right\n"})}),"\n",(0,o.jsx)(r.h3,{id:"inorder-travel-with-pointers-swap",children:"Inorder travel with pointers swap"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def increasingBST(self, root: TreeNode) -> TreeNode:\n        dummy = TreeNode()\n        cur = dummy\n\n        def inorder(node):\n            nonlocal cur\n            if not node:\n                return\n\n            inorder(node.left)\n\n            node.left = None\n            cur.right = node\n            cur = node\n\n            inorder(node.right)\n\n        inorder(root)\n        return dummy.right\n"})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>s});var t=n(96540);const o={},i=t.createContext(o);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);