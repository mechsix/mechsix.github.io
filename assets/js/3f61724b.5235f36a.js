"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8674],{42861:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"leetcode/1001-1500/balance_a_bst","title":"1382. Balance a Binary Search Tree","description":"https://leetcode.com/problems/balance-a-binary-search-tree","source":"@site/docs/leetcode/1001-1500/1382_balance_a_bst.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/balance_a_bst","permalink":"/docs/leetcode/1001-1500/balance_a_bst","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"BST","permalink":"/docs/tags/bst"}],"version":"current","sidebarPosition":1382,"frontMatter":{"title":"1382. Balance a Binary Search Tree","sidebar_label":"1382. Balance a Binary Search Tree","tags":["Leetcode Medium","BST"]},"sidebar":"docSidebar","previous":{"title":"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree","permalink":"/docs/leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned"},"next":{"title":"1383. Maximum Performance of a Team","permalink":"/docs/leetcode/1001-1500/max_performance_of_team"}}');var a=r(74848),o=r(28453);const i={title:"1382. Balance a Binary Search Tree",sidebar_label:"1382. Balance a Binary Search Tree",tags:["Leetcode Medium","BST"]},d=void 0,l={},c=[{value:"Python",id:"python",level:2},{value:"In-order and rebuild",id:"in-order-and-rebuild",level:3}];function s(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://leetcode.com/problems/balance-a-binary-search-tree",children:"https://leetcode.com/problems/balance-a-binary-search-tree"})}),"\n",(0,a.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,a.jsx)(n.h3,{id:"in-order-and-rebuild",children:"In-order and rebuild"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def balanceBST(self, root: TreeNode) -> TreeNode:\n        def inorder(node, result):\n            if not node:\n                return\n\n            inorder(node.left, result)\n            result.append(node.val)\n            inorder(node.right, result)\n\n        nums = []\n        inorder(root, nums)\n\n        def build(left, right):\n            if left > right:\n                return\n\n            mid = (left+right) >> 1\n            return TreeNode(nums[mid], build(left,mid-1), build(mid+1,right))\n\n        return build(0, len(nums)-1)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(96540);const a={},o=t.createContext(a);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);