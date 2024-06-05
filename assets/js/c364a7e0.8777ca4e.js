"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[55264],{40086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(74848),l=n(28453);const o={title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},s=void 0,a={id:"leetcode/501-1000/average_of_levels_in_binary_tree",title:"637. Average of Levels in Binary Tree",description:"https://leetcode.com/problems/average-of-levels-in-binary-tree/",source:"@site/docs/leetcode/501-1000/637_average_of_levels_in_binary_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/average_of_levels_in_binary_tree",permalink:"/docs/leetcode/501-1000/average_of_levels_in_binary_tree",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:637,frontMatter:{title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},sidebar:"docSidebar",previous:{title:"630. Course Schedule III",permalink:"/docs/leetcode/501-1000/course_schedule_iii"},next:{title:"645. Set Mismatch",permalink:"/docs/leetcode/501-1000/set_mismatch"}},i={},c=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/average-of-levels-in-binary-tree/",children:"https://leetcode.com/problems/average-of-levels-in-binary-tree/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:\n        def travel(node, level: int, result: list):\n            if not node:\n                return\n\n            if level == len(result):\n                result.append([1, node.val])\n            else:\n                result[level][0] += 1\n                result[level][1] += node.val\n\n            travel(node.left, level+1, result)\n            travel(node.right, level+1, result)\n\n        result = [[1, float(root.val)]]\n        travel(root, 0, result)\n        return [n[1]/n[0] for n in result]\n"})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const l={},o=r.createContext(l);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);