"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[85586],{95142:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"leetcode/1001-1500/number_of_enclaves","title":"1020. Number of Enclaves","description":"https://leetcode.com/problems/number-of-enclaves/","source":"@site/docs/leetcode/1001-1500/1020_number_of_enclaves.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/number_of_enclaves","permalink":"/docs/leetcode/1001-1500/number_of_enclaves","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"}],"version":"current","sidebarPosition":1020,"frontMatter":{"title":"1020. Number of Enclaves","sidebar_label":"1020. Number of Enclaves","tags":["Leetcode Medium","DFS"]},"sidebar":"docSidebar","previous":{"title":"1009. Complement of Base 10 Integer","permalink":"/docs/leetcode/1001-1500/complement_base_10_int"},"next":{"title":"1046. Last Stone Weight","permalink":"/docs/leetcode/1001-1500/last_stone_weight"}}');var i=r(74848),t=r(28453);const s={title:"1020. Number of Enclaves",sidebar_label:"1020. Number of Enclaves",tags:["Leetcode Medium","DFS"]},c=void 0,l={},a=[{value:"Python",id:"python",level:2},{value:"Mark and Query - DFS",id:"mark-and-query---dfs",level:3},{value:"Mark and Query - BFS (Timelimit Exceed)",id:"mark-and-query---bfs-timelimit-exceed",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/number-of-enclaves/",children:"https://leetcode.com/problems/number-of-enclaves/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.h3,{id:"mark-and-query---dfs",children:"Mark and Query - DFS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def numEnclaves(self, grid: List[List[int]]) -> int:\n        m, n = len(grid), len(grid[0])\n\n        def dfs(i, j):\n            if i < 0 or i >= m or j < 0 or j >= n:\n                return\n\n            if grid[i][j] <= 0:\n                return\n\n            grid[i][j] = -1\n\n            for rx, cx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:\n                dfs(i+rx, j+cx)\n\n        # Mark reachable islands from edges\n        for row in range(m):\n            dfs(row, 0)\n            dfs(row, n-1)\n\n        for col in range(n):\n            dfs(0, col)\n            dfs(m-1, col)\n\n        # Count the remains islands\n        ans = 0\n        for row in range(m):\n            for col in range(n):\n                if grid[row][col] == 1:\n                    ans += 1\n        return ans\n"})}),"\n",(0,i.jsx)(n.h3,{id:"mark-and-query---bfs-timelimit-exceed",children:"Mark and Query - BFS (Timelimit Exceed)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\n\nclass Solution:\n    def numEnclaves(self, grid: List[List[int]]) -> int:\n        m, n = len(grid), len(grid[0])\n\n        queue = deque()\n\n        for row in range(m):\n            if grid[row][0] == 1:\n                queue.append((row, 0))\n            if grid[row][n-1] == 1:\n                queue.append((row, n-1))\n\n        for col in range(n):\n            if grid[0][col] == 1:\n                queue.append((0, col))\n            if grid[m-1][col] == 1:\n                queue.append((m-1, col))\n\n        while queue:\n            row, col = queue.popleft()\n            grid[row][col] = -1\n\n            for rx, cx in [(1, 0), (-1, 0), (0, 1), (0, -1)]:\n                rn, cn = row+rx, col+cx\n                if rn >= 0 and rn < m and cn >= 0 and cn < n and grid[rn][cn] == 1:\n                    queue.append((rn, cn))\n\n        ans = 0\n        for row in range(m):\n            for col in range(n):\n                if grid[row][col] == 1:\n                    ans += 1\n        return ans\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var o=r(96540);const i={},t=o.createContext(i);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);