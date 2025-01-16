"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[85377],{18152:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>d,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"leetcode/1-500/binary_tree_preorder_inorder","title":"105. Construct Binary Tree from Preorder and Inorder Traversal","description":"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal","source":"@site/docs/leetcode/1-500/105_binary_tree_preorder_inorder.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/binary_tree_preorder_inorder","permalink":"/docs/leetcode/1-500/binary_tree_preorder_inorder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":105,"frontMatter":{"title":"105. Construct Binary Tree from Preorder and Inorder Traversal","sidebar_label":"105. Construct Binary Tree from Preorder and Inorder Traversal","tags":["Binary Tree","Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"104. Maximum Depth of Binary Tree","permalink":"/docs/leetcode/1-500/max_depth_of_binary_tree"},"next":{"title":"106. Construct Binary Tree from Inorder and Postorder Traversal","permalink":"/docs/leetcode/1-500/construct_bin_tree_from_inorder_postorder_traversal"}}');var o=n(74848),i=n(28453);const d={title:"105. Construct Binary Tree from Preorder and Inorder Traversal",sidebar_label:"105. Construct Binary Tree from Preorder and Inorder Traversal",tags:["Binary Tree","Leetcode Medium"]},s=void 0,a={},l=[{value:"Python",id:"python",level:2},{value:"First try",id:"first-try",level:3},{value:"Second try",id:"second-try",level:3},{value:"Javscript",id:"javscript",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",children:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal"})}),"\n",(0,o.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(r.h3,{id:"first-try",children:"First try"}),"\n",(0,o.jsx)(r.p,{children:"A correct solutions but did not get benfit from Python List slide"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"from typing import List, Optional\n\n\nclass Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        return self._build(\n            preorder=preorder,\n            pre_start=0,\n            pre_end=len(preorder)-1,\n            inorder=inorder,\n            in_start=0,\n            in_end=len(inorder)-1\n        )\n\n    def _build(self, preorder: List[int], pre_start: int, pre_end: int,\n               inorder: List[int], in_start: int, in_end: int):\n        if pre_start > pre_end:\n            return None\n\n        root_val = preorder[pre_start]\n        root_index = inorder.index(root_val)\n\n        left_size = root_index - in_start\n\n        return TreeNode(\n            val=root_val,\n            left=self._build(\n                preorder=preorder,\n                pre_start=pre_start+1,\n                pre_end=pre_start+left_size,\n                inorder=inorder,\n                in_start=in_start,\n                in_end=root_index-1\n            ),\n            right=self._build(\n                preorder=preorder,\n                pre_start=pre_start+left_size+1,\n                pre_end=pre_end,\n                inorder=inorder,\n                in_start=root_index+1,\n                in_end=in_end\n            )\n        )\n\n"})}),"\n",(0,o.jsx)(r.h3,{id:"second-try",children:"Second try"}),"\n",(0,o.jsx)(r.p,{children:"Solution which more Pythonic"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"from typing import List\n\n\nclass Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        if not preorder or not inorder:\n            return\n\n        root_val = preorder[0]\n        root_index = inorder.index(root_val)\n\n        return TreeNode(\n            val=root_val,\n            left=self.buildTree(\n                preorder[1:],\n                inorder[0:root_index]\n            ),\n            right=self.buildTree(\n                preorder[root_index+1:],\n                inorder[root_index+1:]\n            )\n        )\n"})}),"\n",(0,o.jsx)(r.h2,{id:"javscript",children:"Javscript"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-javascript",children:"var buildTree = function(preorder, inorder) {\n    const hashmap = new Map(inorder.map((val, idx) => [val, idx]));\n    const constructTree = (start, end) => {\n      if (start > end) return null;\n      \n      const value = preorder.shift();      \n      const index = hashmap.get(value);\n      const root = new TreeNode(value);\n      root.left = constructTree(start, index - 1);\n      root.right = constructTree(index + 1, end);\n      return root;\n    }\n    \n    return constructTree(0, preorder.length - 1);\n};\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>s});var t=n(96540);const o={},i=t.createContext(o);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);