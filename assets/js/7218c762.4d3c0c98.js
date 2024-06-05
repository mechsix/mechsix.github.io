"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[99433],{83384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=t(74848),i=t(28453);const s={title:"783. Minimum Distance Between BST Nodes",sidebar_label:"783. Minimum Distance Between BST Nodes",tags:["Leetcode Easy","BST"]},r=void 0,d={id:"leetcode/501-1000/min_distance_btw_bst_nodes",title:"783. Minimum Distance Between BST Nodes",description:"https://leetcode.com/problems/minimum-distance-between-bst-nodes",source:"@site/docs/leetcode/501-1000/783_min_distance_btw_bst_nodes.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/min_distance_btw_bst_nodes",permalink:"/docs/leetcode/501-1000/min_distance_btw_bst_nodes",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:783,frontMatter:{title:"783. Minimum Distance Between BST Nodes",sidebar_label:"783. Minimum Distance Between BST Nodes",tags:["Leetcode Easy","BST"]},sidebar:"docSidebar",previous:{title:"779. K-th Symbol in Grammar",permalink:"/docs/leetcode/501-1000/kth_symbol_in_grammar"},next:{title:"785. Is Graph Bipartite?",permalink:"/docs/leetcode/501-1000/is_graph_bipartite"}},a={},c=[{value:"Python",id:"python",level:2},{value:"In-Order Travel",id:"in-order-travel",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-distance-between-bst-nodes",children:"https://leetcode.com/problems/minimum-distance-between-bst-nodes"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"in-order-travel",children:"In-Order Travel"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from math import inf\nfrom typing import Optional\n\n\nclass Solution:\n    def minDiffInBST(self, root: Optional[TreeNode]) -> int:\n        result = inf\n        pre = None\n\n        def inorder(node: Optional[TreeNode]):\n            if not node:\n                return\n\n            nonlocal pre\n            nonlocal result\n\n            inorder(node.left)\n            if pre is not None:\n                result = min(result, node.val-pre)\n\n            pre = node.val\n            inorder(node.right)\n\n        inorder(root)\n\n        return result\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);