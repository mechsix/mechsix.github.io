"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[14654],{12024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"leetcode/501-1000/search_bst","title":"700. Search in a Binary Search Tree","description":"Python","source":"@site/docs/leetcode/501-1000/700_search_bst.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/search_bst","permalink":"/docs/leetcode/501-1000/search_bst","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"BST","permalink":"/docs/tags/bst"}],"version":"current","sidebarPosition":700,"frontMatter":{"title":"700. Search in a Binary Search Tree","sidebar_label":"700. Search in a Binary Search Tree","tags":["Leetcode Easy","BST"]},"sidebar":"docSidebar","previous":{"title":"696. Count Binary Substrings","permalink":"/docs/leetcode/501-1000/count_binary_substrings"},"next":{"title":"701. Insert into a Binary Search Tree","permalink":"/docs/leetcode/501-1000/insert_bst_node"}}');var o=n(74848),a=n(28453);const s={title:"700. Search in a Binary Search Tree",sidebar_label:"700. Search in a Binary Search Tree",tags:["Leetcode Easy","BST"]},c=void 0,i={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:\n        if not root:\n            return\n\n        if root.val == val:\n            return root\n\n        if root.val > val:\n            return self.searchBST(root.left, val)\n\n        if root.val < val:\n            return self.searchBST(root.right, val)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);