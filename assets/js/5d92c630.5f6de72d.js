"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28591],{51087:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"leetcode/1-500/n_queens","title":"51. N-Queens","description":"https://leetcode.com/problems/n-queens/","source":"@site/docs/leetcode/1-500/51_n_queens.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/n_queens","permalink":"/docs/leetcode/1-500/n_queens","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"Backtracking","permalink":"/docs/tags/backtracking"}],"version":"current","sidebarPosition":51,"frontMatter":{"title":"51. N-Queens","sidebar_label":"51. N-Queens","tags":["Leetcode Hard","Backtracking"]},"sidebar":"docSidebar","previous":{"title":"50. Pow(x, n)","permalink":"/docs/leetcode/1-500/power_x_n"},"next":{"title":"53. Maximum Subarray","permalink":"/docs/leetcode/1-500/max_subarray"}}');var r=o(74848),a=o(28453);const c={title:"51. N-Queens",sidebar_label:"51. N-Queens",tags:["Leetcode Hard","Backtracking"]},s=void 0,l={},i=[{value:"Python",id:"python",level:2},{value:"Backtracking",id:"backtracking",level:3},{value:"Javascript",id:"javascript",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://leetcode.com/problems/n-queens/",children:"https://leetcode.com/problems/n-queens/"})}),"\n",(0,r.jsx)(e.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(e.h3,{id:"backtracking",children:"Backtracking"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"from typing import List\n\n\nclass Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        max_index = n-1\n        board = [['.']*n for i in range(n)]\n        result = []\n\n        def backtrack(row: int):\n            if row > max_index:\n                result.append([''.join(row) for row in board])\n                return\n\n            for col in range(n):\n                # print(\"Checking\", row, col)\n                if not self.is_valid(board, n, row, col):\n                    continue\n\n                board[row][col] = 'Q'\n                backtrack(row+1)\n                board[row][col] = '.'\n        backtrack(0)\n\n        return result\n\n    def is_valid(self, board, n, row, col):\n        tl_col, tr_col = min(col-1, n-1), max(col+1, 0)\n        for r in range(row-1, -1, -1):\n            # Check up\n            if board[r][col] == 'Q':\n                return False\n\n            # Check top right\n            if tr_col < n:\n                if board[r][tr_col] == 'Q':\n                    return False\n                tr_col += 1\n\n            # Check top left\n            if tl_col >= 0:\n                if board[r][tl_col] == 'Q':\n                    return False\n                tl_col -= 1\n        return True\n"})}),"\n",(0,r.jsx)(e.h2,{id:"javascript",children:"Javascript"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:" var solveNQueens = function(n) {\n   const boarder = new Boarder(n);\n   const emptyBoard = boarder.getEmptyBorad();\n   const result = [];\n\n   const backtrack = function(\n     row, board, cols = new Set(), diagonals = new Set(), antiDiagonals = new Set()\n   ) {\n    if (row === n) {\n      result.push(boarder.getResult(board.slice()));\n      return;\n    }\n\n    for (let col = 0; col < n; col++) {\n      const diagonal = row - col;\n      const antiDiagonal = row + col;\n\n      if (cols.has(col) || diagonals.has(diagonal) || antiDiagonals.has(antiDiagonal))\n        continue\n\n      cols.add(col);\n      diagonals.add(diagonal);\n      antiDiagonals.add(antiDiagonal);\n      board[row][col] = 'Q'\n      backtrack(row + 1, board, cols, diagonals, antiDiagonals);\n      cols.delete(col);\n      diagonals.delete(diagonal)\n      antiDiagonals.delete(antiDiagonal)\n      board[row][col] = '.'\n    }\n   }\n    \n   backtrack(0, emptyBoard)\n\n   return result;\n};\n\nclass Boarder {\n  constructor(n) {\n    this.n = n;\n  }\n\n  getEmptyBorad() {\n    const board = [];\n    for (let i = 0; i < this.n; i++) {\n      board[i] = []\n      for (let j = 0; j < this.n; j++) {\n        board[i][j] = '.';\n      }\n    }\n    return board;\n  }\n\n  getResult(board) {\n    const result = []\n    for (const row of board) {\n      result.push(row.join(''));\n    }\n    return result;\n  }\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>s});var t=o(96540);const r={},a=t.createContext(r);function c(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);