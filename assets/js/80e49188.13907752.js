"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[69694],{84896:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/1-500/binary_tree_postorder","title":"145. Binary Tree Postorder Traversal","description":"https://leetcode.com/problems/binary-tree-postorder-traversal","source":"@site/docs/leetcode/1-500/145_binary_tree_postorder.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/binary_tree_postorder","permalink":"/docs/leetcode/1-500/binary_tree_postorder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"}],"version":"current","sidebarPosition":145,"frontMatter":{"title":"145. Binary Tree Postorder Traversal","sidebar_label":"145. Binary Tree Postorder","tags":["Leetcode Easy","Binary Tree"]},"sidebar":"docSidebar","previous":{"title":"144. Binary Tree Preorder Traversal","permalink":"/docs/leetcode/1-500/binary_tree_preorder"},"next":{"title":"146. LRU Cache","permalink":"/docs/leetcode/1-500/lru_cache"}}');var n=t(74848),s=t(28453);const a={title:"145. Binary Tree Postorder Traversal",sidebar_label:"145. Binary Tree Postorder",tags:["Leetcode Easy","Binary Tree"]},l=void 0,i={},d=[{value:"Python",id:"python",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://leetcode.com/problems/binary-tree-postorder-traversal",children:"https://leetcode.com/problems/binary-tree-postorder-traversal"})}),"\n",(0,n.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        return self.travel([], root)\n\n    def travel(self, result, node):\n        if not node:\n            return\n\n        self.travel(result, node.left)\n        self.travel(result, node.right)\n        result.append(node.val)\n        return result\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var o=t(96540);const n={},s=o.createContext(n);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);