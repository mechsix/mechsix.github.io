"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[99152],{24701:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"leetcode/1-500/binary_tree_preorder","title":"144. Binary Tree Preorder Traversal","description":"https://leetcode.com/problems/binary-tree-preorder-traversal","source":"@site/docs/leetcode/1-500/144_binary_tree_preorder.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/binary_tree_preorder","permalink":"/docs/leetcode/1-500/binary_tree_preorder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"Rust","permalink":"/docs/tags/rust"}],"version":"current","sidebarPosition":144,"frontMatter":{"title":"144. Binary Tree Preorder Traversal","slidebar_label":"144. Binary Tree Preorder","tags":["Leetcode Easy","Binary Tree","Rust"]},"sidebar":"docSidebar","previous":{"title":"143. Reorder List","permalink":"/docs/leetcode/1-500/reorder_list"},"next":{"title":"145. Binary Tree Postorder","permalink":"/docs/leetcode/1-500/binary_tree_postorder"}}');var o=t(74848),s=t(28453);const l={title:"144. Binary Tree Preorder Traversal",slidebar_label:"144. Binary Tree Preorder",tags:["Leetcode Easy","Binary Tree","Rust"]},a=void 0,i={},d=[{value:"Python",id:"python",level:2},{value:"Rust",id:"rust",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://leetcode.com/problems/binary-tree-preorder-traversal",children:"https://leetcode.com/problems/binary-tree-preorder-traversal"})}),"\n",(0,o.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\n        return self.travel([], root)\n\n    def travel(self, result: List[int], root: Optional[TreeNode]):\n        if not root:\n            return\n\n        result.append(root.val)\n        self.travel(result, root.left)\n        self.travel(result, root.right)\n        return result\n"})}),"\n",(0,o.jsx)(r.h2,{id:"rust",children:"Rust"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-rust",children:"use std::rc::Rc;\nuse std::cell::RefCell;\nimpl Solution {\n    pub fn preorder_traversal(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {\n        fn preorder(node: &Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<i32>) {\n            if let Some(node) = node {\n                result.push(node.borrow().val);\n                preorder(&node.borrow().left, result);\n                preorder(&node.borrow().right, result);\n            }\n        }\n        let mut result = vec![];\n        preorder(&root, &mut result);\n        result\n    }\n}\n"})})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>a});var n=t(96540);const o={},s=n.createContext(o);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);