"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[22790],{57325:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var n=r(74848),i=r(28453);const o={title:"199. Binary Tree Right Side View",sidebar_label:"199. Binary Tree Right Side View",tags:["Leetcode Medium","Binary Tree"]},l=void 0,s={id:"leetcode/1-500/binary_tree_right_side_view",title:"199. Binary Tree Right Side View",description:"https://leetcode.com/problems/binary-tree-right-side-view/",source:"@site/docs/leetcode/1-500/199_binary_tree_right_side_view.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/binary_tree_right_side_view",permalink:"/docs/leetcode/1-500/binary_tree_right_side_view",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:199,frontMatter:{title:"199. Binary Tree Right Side View",sidebar_label:"199. Binary Tree Right Side View",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"198. House Robber",permalink:"/docs/leetcode/1-500/house_robber"},next:{title:"200. Number of Islands",permalink:"/docs/leetcode/1-500/number_of_islands"}},d={},a=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/binary-tree-right-side-view/",children:"https://leetcode.com/problems/binary-tree-right-side-view/"})}),"\n",(0,n.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/docs/leetcode/1-500/binary_tree_levelorder",children:"102. Level Order"}),"\u7684\u8b8a\u5f62"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\n        return self._travel(root, 0, [])\n\n    def _travel(self, node, level, result):\n        if not node:\n            return result\n\n        if len(result) < level+1:\n            result.append(None)\n\n        result[level] = node.val\n\n        self._travel(node.left, level+1, result)\n        self._travel(node.right, level+1, result)\n\n        return result\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var n=r(96540);const i={},o=n.createContext(i);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);