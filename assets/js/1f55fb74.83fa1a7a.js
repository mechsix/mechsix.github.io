"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[79797],{919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/1-500/path_sum_ii","title":"113. Path Sum II","description":"https://leetcode.com/problems/path-sum-ii/","source":"@site/docs/leetcode/1-500/113_path_sum_ii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/path_sum_ii","permalink":"/docs/leetcode/1-500/path_sum_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"}],"version":"current","sidebarPosition":113,"frontMatter":{"title":"113. Path Sum II","slidebar_label":"113. Path Sum II","tags":["Leetcode Medium","Binary Tree","DFS"]},"sidebar":"docSidebar","previous":{"title":"112. Path Sum","permalink":"/docs/leetcode/1-500/path_sum"},"next":{"title":"114. Flatten Binary Tree to Linked List","permalink":"/docs/leetcode/1-500/flatten_binary_tree_to_ll"}}');var r=n(74848),s=n(28453);const i={title:"113. Path Sum II",slidebar_label:"113. Path Sum II",tags:["Leetcode Medium","Binary Tree","DFS"]},a=void 0,l={},d=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/path-sum-ii/",children:"https://leetcode.com/problems/path-sum-ii/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:\n        result = []\n\n        def dfs(node, path, current_sum):\n            if not node:\n                return\n\n            current_sum += node.val\n\n            if current_sum == targetSum and not node.left and not node.right:\n                result.append(path+[node.val])\n\n            dfs(node.left, path+[node.val], current_sum)\n            dfs(node.right, path+[node.val], current_sum)\n\n        dfs(root, [], 0)\n\n        return result\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);