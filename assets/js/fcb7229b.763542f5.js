"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[87026],{73108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"leetcode/1-500/bst_iterator","title":"173. Binary Search Tree Iterator","description":"Python","source":"@site/docs/leetcode/1-500/173_bst_iterator.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/bst_iterator","permalink":"/docs/leetcode/1-500/bst_iterator","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"BST","permalink":"/docs/tags/bst"}],"version":"current","sidebarPosition":173,"frontMatter":{"title":"173. Binary Search Tree Iterator","sidebar_label":"173. Binary Search Tree Iterator","tags":["Leetcode Medium","BST"]},"sidebar":"docSidebar","previous":{"title":"171. Excel Sheet Column Number","permalink":"/docs/leetcode/1-500/excel_sheet_column"},"next":{"title":"176. Second Highest Salary","permalink":"/docs/leetcode/1-500/second_highest_salary"}}');var o=n(74848),s=n(28453);const i={title:"173. Binary Search Tree Iterator",sidebar_label:"173. Binary Search Tree Iterator",tags:["Leetcode Medium","BST"]},c=void 0,a={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class BSTIterator:\n    def __init__(self, root: Optional[TreeNode]):\n        tree = []\n\n        def inorder(node):\n            if not node:\n                return\n            inorder(node.left)\n            tree.append(node.val)\n            inorder(node.right)\n\n        inorder(root)\n        \n        self.root = root\n        self.tree = tree\n        self.cur = 0\n\n    def next(self) -> int:\n        result = self.tree[self.cur]\n        self.cur += 1\n        return result\n\n    def hasNext(self) -> bool:\n        return self.cur < len(self.tree)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);