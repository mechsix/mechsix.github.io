"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[15409],{29062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned","title":"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree","description":"https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/","source":"@site/docs/leetcode/1001-1500/1379_find_corresponding_node_of_binary_tree_in_cloned.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned","permalink":"/docs/leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"}],"version":"current","sidebarPosition":1379,"frontMatter":{"title":"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree","sidebar_label":"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree","tags":["Leetcode Medium","DFS","Binary Tree"]},"sidebar":"docSidebar","previous":{"title":"1373. Maximum Sum BST in Binary Tree","permalink":"/docs/leetcode/1001-1500/max_sum_bst_of_bt"},"next":{"title":"1382. Balance a Binary Search Tree","permalink":"/docs/leetcode/1001-1500/balance_a_bst"}}');var r=t(74848),i=t(28453);const a={title:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",sidebar_label:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",tags:["Leetcode Medium","DFS","Binary Tree"]},d=void 0,s={},l=[{value:"Python",id:"python",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",children:"https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:\n        path = self.generate_path(original, target, [])\n\n        cur = cloned\n        for edge in path:\n            if edge == 'R':\n                cur = cur.right\n            else:\n                cur = cur.left\n        return cur\n\n    def generate_path(self, node: TreeNode, target: TreeNode, path: list) -> Optional[list]:\n        if not node:\n            return\n\n        if node == target:\n            return path\n\n        left = self.generate_path(node.left, target, ['L'])\n        right = self.generate_path(node.right, target, ['R'])\n\n        if left is not None or right is not None:\n            return path + left if left else path + right\n"})})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var o=t(96540);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);