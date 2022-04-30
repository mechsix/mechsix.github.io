"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1758],{3905:function(n,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var t=r(67294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function i(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var l=t.createContext({}),s=function(n){var e=t.useContext(l),r=e;return n&&(r="function"==typeof n?n(e):c(c({},e),n)),r},u=function(n){var e=s(n.components);return t.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=s(r),f=o,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?t.createElement(b,c(c({ref:e},u),{},{components:r})):t.createElement(b,c({ref:e},u))}));function f(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},41901:function(n,e,r){r.r(e),r.d(e,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"51. N-Queens",sidebar_label:"51. N-Queens",tags:["Leetcode Hard","Backtracking"]},l=void 0,s={unversionedId:"leetcode/1-500/n_queens",id:"leetcode/1-500/n_queens",title:"51. N-Queens",description:"https://leetcode.com/problems/n-queens/",source:"@site/docs/leetcode/1-500/51_n_queens.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/n_queens",permalink:"/docs/leetcode/1-500/n_queens",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/51_n_queens.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:51,frontMatter:{title:"51. N-Queens",sidebar_label:"51. N-Queens",tags:["Leetcode Hard","Backtracking"]},sidebar:"docSidebar",previous:{title:"49. Group Anagrams",permalink:"/docs/leetcode/1-500/group_anagrams"},next:{title:"53. Maximum Subarray",permalink:"/docs/leetcode/1-500/max_subarray"}},u=[{value:"Python",id:"python",children:[{value:"Backtracking",id:"backtracking",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],d={toc:u};function p(n){var e=n.components,r=(0,o.Z)(n,c);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/n-queens/"},"https://leetcode.com/problems/n-queens/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"backtracking"},"Backtracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from typing import List\n\n\nclass Solution:\n    def solveNQueens(self, n: int) -> List[List[str]]:\n        max_index = n-1\n        board = [['.']*n for i in range(n)]\n        result = []\n\n        def backtrack(row: int):\n            if row > max_index:\n                result.append([''.join(row) for row in board])\n                return\n\n            for col in range(n):\n                # print(\"Checking\", row, col)\n                if not self.is_valid(board, n, row, col):\n                    continue\n\n                board[row][col] = 'Q'\n                backtrack(row+1)\n                board[row][col] = '.'\n        backtrack(0)\n\n        return result\n\n    def is_valid(self, board, n, row, col):\n        tl_col, tr_col = min(col-1, n-1), max(col+1, 0)\n        for r in range(row-1, -1, -1):\n            # Check up\n            if board[r][col] == 'Q':\n                return False\n\n            # Check top right\n            if tr_col < n:\n                if board[r][tr_col] == 'Q':\n                    return False\n                tr_col += 1\n\n            # Check top left\n            if tl_col >= 0:\n                if board[r][tl_col] == 'Q':\n                    return False\n                tl_col -= 1\n        return True\n")),(0,a.kt)("h2",{id:"javascript"},"Javascript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," var solveNQueens = function(n) {\n   const boarder = new Boarder(n);\n   const emptyBoard = boarder.getEmptyBorad();\n   const result = [];\n\n   const backtrack = function(\n     row, board, cols = new Set(), diagonals = new Set(), antiDiagonals = new Set()\n   ) {\n    if (row === n) {\n      result.push(boarder.getResult(board.slice()));\n      return;\n    }\n\n    for (let col = 0; col < n; col++) {\n      const diagonal = row - col;\n      const antiDiagonal = row + col;\n\n      if (cols.has(col) || diagonals.has(diagonal) || antiDiagonals.has(antiDiagonal))\n        continue\n\n      cols.add(col);\n      diagonals.add(diagonal);\n      antiDiagonals.add(antiDiagonal);\n      board[row][col] = 'Q'\n      backtrack(row + 1, board, cols, diagonals, antiDiagonals);\n      cols.delete(col);\n      diagonals.delete(diagonal)\n      antiDiagonals.delete(antiDiagonal)\n      board[row][col] = '.'\n    }\n   }\n    \n   backtrack(0, emptyBoard)\n\n   return result;\n};\n\nclass Boarder {\n  constructor(n) {\n    this.n = n;\n  }\n\n  getEmptyBorad() {\n    const board = [];\n    for (let i = 0; i < this.n; i++) {\n      board[i] = []\n      for (let j = 0; j < this.n; j++) {\n        board[i][j] = '.';\n      }\n    }\n    return board;\n  }\n\n  getResult(board) {\n    const result = []\n    for (const row of board) {\n      result.push(row.join(''));\n    }\n    return result;\n  }\n}\n")))}p.isMDXComponent=!0}}]);