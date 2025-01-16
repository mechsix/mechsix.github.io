"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4654],{1215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/501-1000/leaf_similar_trees","title":"872. Leaf-Similar Trees","description":"https://leetcode.com/problems/leaf-similar-trees","source":"@site/docs/leetcode/501-1000/872_leaf_similar_trees.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/leaf_similar_trees","permalink":"/docs/leetcode/501-1000/leaf_similar_trees","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"}],"version":"current","sidebarPosition":872,"frontMatter":{"title":"872. Leaf-Similar Trees","sidebar_label":"872. Leaf-Similar Trees","tags":["Leetcode Easy","DFS","Binary Tree"]},"sidebar":"docSidebar","previous":{"title":"871. Minimum Number of Refueling Stops","permalink":"/docs/leetcode/501-1000/minimum_number_of_refueling_stops"},"next":{"title":"875. Koko Eating Bananas","permalink":"/docs/leetcode/501-1000/koko_eating_bananas"}}');var r=t(74848),s=t(28453);const l={title:"872. Leaf-Similar Trees",sidebar_label:"872. Leaf-Similar Trees",tags:["Leetcode Easy","DFS","Binary Tree"]},i=void 0,a={},d=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3},{value:"Rust",id:"rust",level:2},{value:"DFS",id:"dfs-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/leaf-similar-trees",children:"https://leetcode.com/problems/leaf-similar-trees"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"dfs",children:"DFS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:\n        def dfs(node):\n            if not node:\n                return []\n\n            if not node.left and not node.right:\n                return [node.val]\n\n            return dfs(node.left) + dfs(node.right)\n\n        return dfs(root1) == dfs(root2)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,r.jsx)(n.h3,{id:"dfs-1",children:"DFS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use std::rc::Rc;\nuse std::cell::RefCell;\n\n\nimpl Solution {\n    pub fn leaf_similar(root1: Option<Rc<RefCell<TreeNode>>>, root2: Option<Rc<RefCell<TreeNode>>>) -> bool {\n        fn dfs(node: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {\n            match node {\n                None => Vec::new(),\n                Some(node) => {\n                    let node = node.borrow();\n                    if node.left.is_none() && node.right.is_none() {\n                        return vec![node.val];\n                    }\n                    let mut leaves = Vec::new();\n                    leaves.extend(dfs(node.left.clone()));\n                    leaves.extend(dfs(node.right.clone()));\n                    leaves\n                }\n            }\n        }\n        dfs(root1) == dfs(root2)\n    }\n}\n"})})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var o=t(96540);const r={},s=o.createContext(r);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);