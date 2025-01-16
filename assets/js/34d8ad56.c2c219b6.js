"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[59452],{53941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/1-500/unique_paths","title":"62. Unique Paths","description":"https://leetcode.com/problems/unique-paths/","source":"@site/docs/leetcode/1-500/62_unique_paths.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/unique_paths","permalink":"/docs/leetcode/1-500/unique_paths","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":62,"frontMatter":{"title":"62. Unique Paths","sidebar_label":"62. Unique Paths","tags":["Leetcode Medium","DP","Go"]},"sidebar":"docSidebar","previous":{"title":"61. Rotate List","permalink":"/docs/leetcode/1-500/rotate_list"},"next":{"title":"63. Unique Paths II","permalink":"/docs/leetcode/1-500/unique_paths_ii"}}');var i=t(74848),c=t(28453);const r={title:"62. Unique Paths",sidebar_label:"62. Unique Paths",tags:["Leetcode Medium","DP","Go"]},s=void 0,l={},d=[{value:"Python",id:"python",level:2},{value:"Top Down DP - Right to Left",id:"top-down-dp---right-to-left",level:3},{value:"Top Down DP - Left to Right",id:"top-down-dp---left-to-right",level:3},{value:"Go",id:"go",level:2},{value:"Top Down DP",id:"top-down-dp",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/unique-paths/",children:"https://leetcode.com/problems/unique-paths/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.h3,{id:"top-down-dp---right-to-left",children:"Top Down DP - Right to Left"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        @cache\n        def dp(row, col):\n            if row == 1 or col == 1:\n                return 1\n            return dp(row-1, col) + dp(row, col-1)\n\n        return dp(m, n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"top-down-dp---left-to-right",children:"Top Down DP - Left to Right"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        @cache\n        def dp(row, col):\n            if row == m-1 or col == n-1:\n                return 1\n            return dp(row+1, col) + dp(row, col+1)\n\n        return dp(0, 0)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"go",children:"Go"}),"\n",(0,i.jsx)(n.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'func uniquePaths(m int, n int) int {\n    cache := make(map[string]int)\n    return dp(m-1, n-1, cache)\n}\n\nfunc dp(row int, col int, cache map[string]int) int {\n    if (row == 0 || col == 0) {\n        return 1\n    }\n    key := fmt.Sprintf("%d:%d", row, col)\n\n    if val, isCached := cache[key]; isCached {\n        return val\n    }\n\n    cache[key] = dp(row-1, col, cache) + dp(row, col-1, cache)\n\n    return cache[key]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const i={},c=o.createContext(i);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);