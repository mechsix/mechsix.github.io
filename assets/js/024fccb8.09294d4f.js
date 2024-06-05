"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[78923],{87891:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=t(74848),l=t(28453);const o={title:"102. Binary Tree Level Order Traversal",slidebar_label:"102. Binary Tree Level Order",tags:["Leetcode Medium","Binary Tree"]},s=void 0,i={id:"leetcode/1-500/binary_tree_levelorder",title:"102. Binary Tree Level Order Traversal",description:"https://leetcode.com/problems/binary-tree-level-order-traversal",source:"@site/docs/leetcode/1-500/102_binary_tree_levelorder.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/binary_tree_levelorder",permalink:"/docs/leetcode/1-500/binary_tree_levelorder",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:102,frontMatter:{title:"102. Binary Tree Level Order Traversal",slidebar_label:"102. Binary Tree Level Order",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"101. Symmetric Tree",permalink:"/docs/leetcode/1-500/symmetric_tree"},next:{title:"103. Binary Tree Zigzag Level Order Traversal",permalink:"/docs/leetcode/1-500/binary_tree_zigzag_level_order"}},a={},d=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/binary-tree-level-order-traversal",children:"https://leetcode.com/problems/binary-tree-level-order-traversal"})}),"\n",(0,n.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u6709\u8b8a\u5f62\u984c",(0,n.jsx)(r.a,{href:"/docs/leetcode/1-500/binary_tree_right_side_view",children:"199. Binary Tree Right Side View"})]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\n        return self._travel([], 0, root)\n\n    def _travel(self, result, level, node):\n        if not node:\n            return result\n\n        if len(result) < level+1:\n            result.append([])\n\n        result[level].append(node.val)\n        self._travel(result, level+1, node.left)\n        self._travel(result, level+1, node.right)\n\n        return result\n"})}),"\n",(0,n.jsx)(r.h2,{id:"javascript",children:"Javascript"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"var levelOrder = function(root) {\n  const queue = [];\n  const res = [];  \n  let level = 0;\n  \n  if (root) queue.push(root);\n  \n  while (queue.length) {\n    const total = queue.length;\n    res.push([]);\n    \n    for (let i = 0; i < total; i++) {\n      const currNode = queue.shift();    \n      res[level].push(currNode.val);\n    \n      if (currNode.left) queue.push(currNode.left);\n      if (currNode.right) queue.push(currNode.right);\n    }\n    level += 1;\n  }\n  return res;\n};\n"})})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var n=t(96540);const l={},o=n.createContext(l);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);