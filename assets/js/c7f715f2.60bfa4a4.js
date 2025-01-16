"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37962],{21807:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree","title":"1457. Pseudo-Palindromic Paths in a Binary Tree","description":"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/","source":"@site/docs/leetcode/1001-1500/1457_pseudo_palindromic_paths_in_a_binary_tree.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree","permalink":"/docs/leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"}],"version":"current","sidebarPosition":1457,"frontMatter":{"title":"1457. Pseudo-Palindromic Paths in a Binary Tree","sidebar_label":"1457. Pseudo-Palindromic Paths in a Binary Tree","tags":["Leetcode Medium","Binary Tree","DFS"]},"sidebar":"docSidebar","previous":{"title":"1448. Count Good Nodes in Binary Tree","permalink":"/docs/leetcode/1001-1500/count_good_nodes_in_binary_tree"},"next":{"title":"1458. Max Dot Product of Two Subsequences","permalink":"/docs/leetcode/1001-1500/max_dot_product_of_two_subsequences"}}');var i=t(74848),r=t(28453);const a={title:"1457. Pseudo-Palindromic Paths in a Binary Tree",sidebar_label:"1457. Pseudo-Palindromic Paths in a Binary Tree",tags:["Leetcode Medium","Binary Tree","DFS"]},s=void 0,d={},c=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/",children:"https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.h3,{id:"dfs",children:"DFS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def pseudoPalindromicPaths (self, root: Optional[TreeNode]) -> int:\n        def dfs(node, path_origin: set):\n            if not node:\n                return 0\n            \n            path = path_origin.copy()\n            if node.val in path:\n                path.remove(node.val)\n            else:\n                path.add(node.val)\n\n            if not node.left and not node.right:\n                # Current node is leave, check the path\n                return 1 if len(path) <= 1 else 0\n            \n            return dfs(node.left, path) + dfs(node.right, path)\n        \n        return dfs(root, set())\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);