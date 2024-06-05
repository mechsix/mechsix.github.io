"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[43832],{80421:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=i(74848),a=i(28453);const o={title:"399. Evaluate Division",sidebar_label:"399. Evaluate Division",tags:["Leetcode Medium","Graph","Backtracking","TODO"]},r=void 0,s={id:"leetcode/1-500/evaluate_division",title:"399. Evaluate Division",description:"https://leetcode.com/problems/evaluate-division/",source:"@site/docs/leetcode/1-500/399_evaluate_division.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/evaluate_division",permalink:"/docs/leetcode/1-500/evaluate_division",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Graph",permalink:"/docs/tags/graph"},{label:"Backtracking",permalink:"/docs/tags/backtracking"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:399,frontMatter:{title:"399. Evaluate Division",sidebar_label:"399. Evaluate Division",tags:["Leetcode Medium","Graph","Backtracking","TODO"]},sidebar:"docSidebar",previous:{title:"394. Decode String",permalink:"/docs/leetcode/1-500/decode_string"},next:{title:"401. Binary Watch",permalink:"/docs/leetcode/1-500/binary_watch"}},d={},c=[{value:"Python",id:"python",level:2},{value:"Backtracking (Offical Solution)",id:"backtracking-offical-solution",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/evaluate-division/",children:"https://leetcode.com/problems/evaluate-division/"})}),"\n",(0,t.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.h3,{id:"backtracking-offical-solution",children:"Backtracking (Offical Solution)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u56e0\u70baa/c = a/b * b/c\uff0c\u6240\u4ee5\u5c07\u6574\u500bequations/values\u7684\u5c0d\u61c9\u8b8a\u6210\u4e00\u500b\u6709\u5411\u5716"}),"\n",(0,t.jsx)(n.li,{children:"\u5728\u5716\u5167\u51fa\u767c(\u88ab\u9664\u6578)\u627e\u5f97\u5230path\u5230\u9054\u76ee\u7684(\u9664\u6578)\uff0cpath\u7684node\u76f8\u4e58\u5c31\u6703\u662f\u7b54\u6848"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"from collections import defaultdict\n\nclass Solution:\n    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:\n\n        def backtrack(curr_node, target_node, acc_product, visited):\n            neighbors = graph[curr_node]\n            if target_node in neighbors:\n                return acc_product * neighbors[target_node]\n\n            visited.add(curr_node)\n\n            for neighbor, value in neighbors.items():\n                if neighbor in visited:\n                    continue\n\n                ret = backtrack(\n                    neighbor,\n                    target_node,\n                    acc_product * value,\n                    visited\n                )\n                if ret != -1.0:\n                    return ret\n\n            visited.remove(curr_node)\n\n            return -1.0\n\n        # 1. build the graph from the equations\n        graph = defaultdict(defaultdict)\n        for i, pair in enumerate(equations):\n            dividend, divisor = pair\n            graph[dividend][divisor] = values[i]\n            graph[divisor][dividend] = 1 / values[i]\n\n        # 2. Evaluate each query with backtracking\n        results = []\n        for dividend, divisor in queries:\n            if dividend not in graph or divisor not in graph:\n                # Either node does not exist\n                results.append(-1.0)\n            elif dividend == divisor:\n                # Origin and destination are the same node\n                results.append(1.0)\n            else:\n                result = backtrack(dividend, divisor, 1, set())\n                results.append(result)\n\n        return results\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(96540);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);