"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[60654],{17275:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"leetcode/501-1000/merge_two_binary_trees","title":"617. Merge Two Binary Trees","description":"https://leetcode.com/problems/merge-two-binary-trees/","source":"@site/docs/leetcode/501-1000/617_merge_two_binary_trees.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/merge_two_binary_trees","permalink":"/docs/leetcode/501-1000/merge_two_binary_trees","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":617,"frontMatter":{"title":"617. Merge Two Binary Trees","sidebar_label":"617. Merge Two Binary Trees","tags":["Leetcode Easy","Binary Tree","Go"]},"sidebar":"docSidebar","previous":{"title":"609. Find Duplicate File in System","permalink":"/docs/leetcode/501-1000/find_duplicate_file_in_system"},"next":{"title":"622. Design Circular Queue","permalink":"/docs/leetcode/501-1000/design_circular_queue"}}');var n=r(74848),s=r(28453);const i={title:"617. Merge Two Binary Trees",sidebar_label:"617. Merge Two Binary Trees",tags:["Leetcode Easy","Binary Tree","Go"]},l=void 0,a={},c=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"https://leetcode.com/problems/merge-two-binary-trees/",children:"https://leetcode.com/problems/merge-two-binary-trees/"})}),"\n",(0,n.jsx)(o.h2,{id:"python",children:"Python"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"class Solution:\n    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root1 or not root2:\n            return root1 if root1 else root2\n\n        node = TreeNode(val=root1.val+root2.val)\n        node.left = self.mergeTrees(root1.left, root2.left)\n        node.right = self.mergeTrees(root1.right, root2.right)\n\n        return node\n"})}),"\n",(0,n.jsx)(o.h2,{id:"go",children:"Go"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:"func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {\n    if root1 == nil || root2 == nil {\n        if root1 != nil {\n            return root1\n        } else {\n            return root2\n        }\n    }\n\n    node := new(TreeNode)\n    node.Val = root1.Val + root2.Val\n    node.Left = mergeTrees(root1.Left, root2.Left)\n    node.Right = mergeTrees(root1.Right, root2.Right)\n\n    return node\n}\n"})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>l});var t=r(96540);const n={},s=t.createContext(n);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);