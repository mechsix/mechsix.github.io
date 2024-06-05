"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4441],{87021:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=e(74848),o=e(28453);const r={title:"77. Combinations",sidebar_label:"77. Combinations",tags:["Leetcode Medium","Backtracking"]},c=void 0,s={id:"leetcode/1-500/combinations",title:"77. Combinations",description:"https://leetcode.com/problems/combinations/",source:"@site/docs/leetcode/1-500/77_combinations.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/combinations",permalink:"/docs/leetcode/1-500/combinations",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:77,frontMatter:{title:"77. Combinations",sidebar_label:"77. Combinations",tags:["Leetcode Medium","Backtracking"]},sidebar:"docSidebar",previous:{title:"75. Sort Colors",permalink:"/docs/leetcode/1-500/sort_colors"},next:{title:"78. Subsets",permalink:"/docs/leetcode/1-500/subsets"}},a={},l=[{value:"Python",id:"python",level:2},{value:"Backtracking",id:"backtracking",level:3},{value:"Python Itertools built-in package",id:"python-itertools-built-in-package",level:3},{value:"Javascript",id:"javascript",level:2}];function d(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/combinations/",children:"https://leetcode.com/problems/combinations/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.h3,{id:"backtracking",children:"Backtracking"}),"\n",(0,i.jsx)(t.p,{children:"A general algorithm for finding solutions to some computational problems."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Backtracking",children:"Wikipedia - Backtracking"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        return self._backtrack(k, n, 1, [], [])\n\n    def _backtrack(self, k: int, n: int, start: int, current: List[int], result: List[List[int]]):\n\n        if len(current) == k:\n            result.append(current[:])\n\n        for i in range(start, n+1):\n            current.append(i)\n            self._backtrack(k, n, i+1, current, result)\n            current.pop()\n\n        return result\n"})}),"\n",(0,i.jsx)(t.h3,{id:"python-itertools-built-in-package",children:"Python Itertools built-in package"}),"\n",(0,i.jsx)(t.p,{children:"Cheet with Python...lol"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from itertools import combinations\n\nclass Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        return [comb for comb in combinations([num for num in range(1, n+1)], k)]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var combine = function (n, k) {\n\tconst record = [];\n\tconst result = [];\n\n\tbacktracking(record, 1, n, k, result);\n\n\treturn result;\n};\n\nvar backtracking = function (record, start, n, k, result) {\n\tif (record.length === k) {\n\t\tresult.push(record.slice(0));\n\t\treturn;\n\t}\n\n\tfor (let i = start; i <= n; i++) {\n\t\trecord.push(i);\n\t\tbacktracking(record, i + 1, n, k, result);\n\t\trecord.pop();\n\t}\n};\n"})})]})}function u(n={}){const{wrapper:t}={...(0,o.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>c,x:()=>s});var i=e(96540);const o={},r=i.createContext(o);function c(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);