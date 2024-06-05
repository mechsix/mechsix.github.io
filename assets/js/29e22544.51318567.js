"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[25350],{81725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(74848),i=n(28453);const r={title:"1557. Minimum Number of Vertices to Reach All Nodes",sidebar_label:"1557. Minimum Number of Vertices to Reach All Nodes",tags:["Leetcode Medium","Graph"]},s=void 0,l={id:"leetcode/1501-2000/min_number_vertice_reach_all_nodes",title:"1557. Minimum Number of Vertices to Reach All Nodes",description:"https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/",source:"@site/docs/leetcode/1501-2000/1557_min_number_vertice_reach_all_nodes.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/min_number_vertice_reach_all_nodes",permalink:"/docs/leetcode/1501-2000/min_number_vertice_reach_all_nodes",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Graph",permalink:"/docs/tags/graph"}],version:"current",sidebarPosition:1557,frontMatter:{title:"1557. Minimum Number of Vertices to Reach All Nodes",sidebar_label:"1557. Minimum Number of Vertices to Reach All Nodes",tags:["Leetcode Medium","Graph"]},sidebar:"docSidebar",previous:{title:"1539. Kth Missing Positive Number",permalink:"/docs/leetcode/1501-2000/kth_missing_possitive_num"},next:{title:"1575. Count All Possible Routes",permalink:"/docs/leetcode/1501-2000/count_all_possible_routes"}},c={},d=[{value:"Python",id:"python",level:2},{value:"Outdegree Difference",id:"outdegree-difference",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/",children:"https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.h3,{id:"outdegree-difference",children:"Outdegree Difference"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u80fd\u5920\u900f\u904e\u5176\u4ed6\u7bc0\u9ede\u5230\u9054\u7684\u7bc0\u9ede(edge outdegree)\u90fd\u53ef\u4ee5\u8996\u70bareachable"}),"\n",(0,o.jsx)(t.li,{children:"\u6240\u6709\u7bc0\u9ede\u8207edge outdegree\u7684\u5dee\u96c6\uff0c\u5373\u662f\u81f3\u5c11\u8981\u4f7f\u7528\u7684\u51fa\u767c\u9ede"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:\n        nodes = set(range(n))\n        outdegree = set([edge[1] for edge in edges])\n\n        return list(nodes - outdegree)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(96540);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);