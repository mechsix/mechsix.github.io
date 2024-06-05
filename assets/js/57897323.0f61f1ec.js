"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9345],{28938:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=t(74848),n=t(28453);const o={title:"429. N-ary Tree Level Order Traversal",sidebar_label:"429. N-ary Tree Level Order Traversal",tags:["Leetcode Medium","DFS","N-ary Tree"]},a=void 0,s={id:"leetcode/1-500/nary_tree_level_order_traversal",title:"429. N-ary Tree Level Order Traversal",description:"https://leetcode.com/problems/n-ary-tree-level-order-traversal/",source:"@site/docs/leetcode/1-500/429_nary_tree_level_order_traversal.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/nary_tree_level_order_traversal",permalink:"/docs/leetcode/1-500/nary_tree_level_order_traversal",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"N-ary Tree",permalink:"/docs/tags/n-ary-tree"}],version:"current",sidebarPosition:429,frontMatter:{title:"429. N-ary Tree Level Order Traversal",sidebar_label:"429. N-ary Tree Level Order Traversal",tags:["Leetcode Medium","DFS","N-ary Tree"]},sidebar:"docSidebar",previous:{title:"424. Longest Repeating Character Replacement",permalink:"/docs/leetcode/1-500/logtest_repeating_character_replacement"},next:{title:"430. Flatten Doubly Linked List",permalink:"/docs/leetcode/1-500/flatten_multilevel_doubly_linked_list"}},d={},c=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3}];function i(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://leetcode.com/problems/n-ary-tree-level-order-traversal/",children:"https://leetcode.com/problems/n-ary-tree-level-order-traversal/"})}),"\n",(0,l.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,l.jsx)(r.h3,{id:"dfs",children:"DFS"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-python",children:"class Solution:\n    def levelOrder(self, root: 'Node') -> List[List[int]]:\n        def dfs(node, level, result):\n            if not node:\n                return\n\n            if len(result) <= level:\n                result.append([])\n\n            result[level].append(node.val)\n\n            for child in node.children:\n                dfs(child, level+1, result)\n\n        levels = []\n        dfs(root, 0, levels)\n        return levels\n"})})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>s});var l=t(96540);const n={},o=l.createContext(n);function a(e){const r=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),l.createElement(o.Provider,{value:r},e.children)}}}]);