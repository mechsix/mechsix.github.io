"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[55920],{35260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(74848),i=t(28453);const o={title:"654. Maximum Binary Tree",sidebar_label:"654. Maximum Binary Tree",tags:["Binary Tree","Leetcode Medium"]},a=void 0,s={id:"leetcode/501-1000/max_binary_tree",title:"654. Maximum Binary Tree",description:"Python",source:"@site/docs/leetcode/501-1000/654_max_binary_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/max_binary_tree",permalink:"/docs/leetcode/501-1000/max_binary_tree",draft:!1,unlisted:!1,tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:654,frontMatter:{title:"654. Maximum Binary Tree",sidebar_label:"654. Maximum Binary Tree",tags:["Binary Tree","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"653. Two Sum IV - Input is a BST",permalink:"/docs/leetcode/501-1000/two_sum_4_bst_input"},next:{title:"658. Find K Closest Elements",permalink:"/docs/leetcode/501-1000/find_k_closest_elements"}},l={},c=[{value:"Python",id:"python",level:2}];function m(e){const n={code:"code",h2:"h2",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from typing import List, Optional\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass Solution:\n    def constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:\n        if not nums:\n            return\n\n        max_val = max(nums)\n        index_max = nums.index(max_val)\n\n        return TreeNode(\n            val=max_val,\n            left=self.constructMaximumBinaryTree(nums[:index_max]),\n            right=self.constructMaximumBinaryTree(nums[index_max + 1:])\n        )\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);