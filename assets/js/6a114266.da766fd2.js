"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[20736],{22728:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/1-500/recover_bst","title":"99. Recover Binary Search Tree","description":"https://leetcode.com/problems/recover-binary-search-tree/","source":"@site/docs/leetcode/1-500/99_recover_bst.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/recover_bst","permalink":"/docs/leetcode/1-500/recover_bst","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"BST","permalink":"/docs/tags/bst"}],"version":"current","sidebarPosition":99,"frontMatter":{"title":"99. Recover Binary Search Tree","sidebar_label":"99. Recover Binary Search Tree","tags":["Leetcode Medium","BST"]},"sidebar":"docSidebar","previous":{"title":"98. Validate Binary Search Tree","permalink":"/docs/leetcode/1-500/bst_validation"},"next":{"title":"100. Same Tree","permalink":"/docs/leetcode/1-500/same_tree"}}');var t=r(74848),i=r(28453);const s={title:"99. Recover Binary Search Tree",sidebar_label:"99. Recover Binary Search Tree",tags:["Leetcode Medium","BST"]},l=void 0,c={},d=[{value:"Python",id:"python",level:2},{value:"Divide and Conquer",id:"divide-and-conquer",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/recover-binary-search-tree/",children:"https://leetcode.com/problems/recover-binary-search-tree/"})}),"\n",(0,t.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.h3,{id:"divide-and-conquer",children:"Divide and Conquer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Transfer to array by inorder travelsal"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Find the swapped elements"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Travel the tree again, and recover the swapped elements"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Time: O(NlogN)"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Space: O(N)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def recoverTree(self, root: Optional[TreeNode]) -> None:\n        """\n        Do not return anything, modify root in-place instead.\n        """\n        nums = self.inorder(root)\n        \n        x, y = None, None\n        for i in range(1, len(nums)):\n            if nums[i-1] > nums[i]:\n                y = nums[i]\n                if x is None:\n                    x = nums[i-1]\n                else:\n                    break\n        \n        self.recover(root, x, y, 2)\n    \n    def inorder(self, node):\n        if not node:\n            return []\n        \n        return self.inorder(node.left) + [node.val] + self.inorder(node.right)\n    \n    def recover(self, node, x, y, count):\n        if not node or count == 0:\n            return\n        \n        if node.val == x:\n            node.val = y\n            count -= 1\n        elif node.val == y:\n            node.val = x\n            count -= 1\n        \n        self.recover(node.left, x, y, count)\n        self.recover(node.right, x, y, count)\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var o=r(96540);const t={},i=o.createContext(t);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);