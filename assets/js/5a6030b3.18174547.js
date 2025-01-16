"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1711],{21737:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"leetcode/1-500/left_leaf_sum","title":"404. Sum of Left Leaf","description":"https://leetcode.com/problems/sum-of-left-leaves","source":"@site/docs/leetcode/1-500/404_left_leaf_sum.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/left_leaf_sum","permalink":"/docs/leetcode/1-500/left_leaf_sum","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":404,"frontMatter":{"title":"404. Sum of Left Leaf","sidebar_label":"404. Sum of Left Leaf","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"401. Binary Watch","permalink":"/docs/leetcode/1-500/binary_watch"},"next":{"title":"406. Queue Reconstruction by Height","permalink":"/docs/leetcode/1-500/queue_reconstruction_by_height"}}');var s=o(74848),l=o(28453);const r={title:"404. Sum of Left Leaf",sidebar_label:"404. Sum of Left Leaf",tags:["Leetcode Easy"]},a=void 0,c={},i=[{value:"Python",id:"python",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/sum-of-left-leaves",children:"https://leetcode.com/problems/sum-of-left-leaves"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from typing import Optional\n\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\n\nclass Solution:\n    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n\n        sum = self.sumOfLeftLeaves(root.left) + self.sumOfLeftLeaves(root.right)\n        if root.left and root.left.left is None and root.left.right is None:\n            sum += root.left.val\n\n        return sum\n"})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(96540);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);