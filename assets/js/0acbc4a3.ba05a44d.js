"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75132],{23365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),o=n(28453);const i={title:"669. Trim a Binary Search Tree",sidebar_label:"669. Trim a Binary Search Tree",tags:["BST","Leetcode Medium"]},s=void 0,c={id:"leetcode/501-1000/trim_bst",title:"669. Trim a Binary Search Tree",description:"https://leetcode.com/problems/trim-a-binary-search-tree/",source:"@site/docs/leetcode/501-1000/669_trim_bst.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/trim_bst",permalink:"/docs/leetcode/501-1000/trim_bst",draft:!1,unlisted:!1,tags:[{label:"BST",permalink:"/docs/tags/bst"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:669,frontMatter:{title:"669. Trim a Binary Search Tree",sidebar_label:"669. Trim a Binary Search Tree",tags:["BST","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"665. Non-decreasing Array",permalink:"/docs/leetcode/501-1000/non_decreasing_array"},next:{title:"673. Number of Longest Increasing Subsequence",permalink:"/docs/leetcode/501-1000/num_of_longest_increasing_subsequence"}},a={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/trim-a-binary-search-tree/",children:"https://leetcode.com/problems/trim-a-binary-search-tree/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def trimBST(self, root: Optional[TreeNode], low: int, high: int) -> Optional[TreeNode]:\n        return self.trim(root, low, high)\n\n    def trim(self, node, low, high):\n        if not node:\n            return\n\n        if node.val > high:\n            return self.trim(node.left, low, high)\n        elif node.val < low:\n            return self.trim(node.right, low, high)\n        else:\n            node.left = self.trim(node.left, low, high)\n            node.right = self.trim(node.right, low, high)\n            return node\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(96540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);