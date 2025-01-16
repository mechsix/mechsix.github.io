"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[30109],{2610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"leetcode/501-1000/out_of_boundary_paths","title":"576. Out of Boundary Paths","description":"https://leetcode.com/problems/out-of-boundary-paths/","source":"@site/docs/leetcode/501-1000/576_out_of_boundary_paths.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/out_of_boundary_paths","permalink":"/docs/leetcode/501-1000/out_of_boundary_paths","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":576,"frontMatter":{"title":"576. Out of Boundary Paths","sidebar_label":"576. Out of Boundary Paths","tags":["Leetcode Medium","DP"]},"sidebar":"docSidebar","previous":{"title":"567. Permutation in String","permalink":"/docs/leetcode/501-1000/permutation_in_string"},"next":{"title":"557. Reverse Words in a String III","permalink":"/docs/leetcode/501-1000/reverse_words_in_string_iii"}}');var r=n(74848),s=n(28453);const i={title:"576. Out of Boundary Paths",sidebar_label:"576. Out of Boundary Paths",tags:["Leetcode Medium","DP"]},a=void 0,d={},c=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/out-of-boundary-paths/",children:"https://leetcode.com/problems/out-of-boundary-paths/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from functools import cache\n\nclass Solution:\n    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:\n        @cache\n        def dp(row: int, col: int, remains: int) -> int:\n            if row >= m or row < 0 or col >= n or col < 0:\n                return 1\n\n            if remains == 0:\n                return 0\n\n            result = dp(row+1, col, remains-1) + \\\n                     dp(row-1, col, remains-1) + \\\n                     dp(row, col+1, remains-1) + \\\n                     dp(row, col-1, remains-1)\n\n            return result % (10**9 + 7)\n\n        return dp(startRow, startColumn, maxMove)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);