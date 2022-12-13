"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75003],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return w}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,w=u["".concat(l,".").concat(f)]||u[f]||p[f]||c;return n?t.createElement(w,i(i({ref:r},d),{},{components:n})):t.createElement(w,i({ref:r},d))}));function w(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98287:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s}});var t=n(83117),o=(n(67294),n(3905));const c={title:"79. Word Search",sidebar_label:"79. Word Search",tags:["Leetcode Medium","Backtracking"]},i=void 0,a={unversionedId:"leetcode/1-500/word_search",id:"leetcode/1-500/word_search",title:"79. Word Search",description:"https://leetcode.com/problems/word-search/",source:"@site/docs/leetcode/1-500/79_word_search.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/word_search",permalink:"/docs/leetcode/1-500/word_search",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/79_word_search.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:79,frontMatter:{title:"79. Word Search",sidebar_label:"79. Word Search",tags:["Leetcode Medium","Backtracking"]},sidebar:"docSidebar",previous:{title:"78. Subsets",permalink:"/docs/leetcode/1-500/subsets"},next:{title:"80. Remove Duplicates from Sorted Array II",permalink:"/docs/leetcode/1-500/remove_duplicates_from_sorted_array_ii"}},l={},s=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],d={toc:s};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/word-search/"},"https://leetcode.com/problems/word-search/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def exist(self, board: List[List[str]], word: str) -> bool:\n        row_limit = len(board)\n        col_limit = len(board[0])\n\n        used = set()\n\n        def backtrack(row, col, index):\n            if index == len(word):\n                return True\n\n            if board[row][col] != word[index]:\n                return False\n\n            up = down = right = left = False\n            used.add((row, col))\n\n            next_index = index + 1\n            if row - 1 >= 0 and (row-1, col) not in used:\n                up = backtrack(row-1, col, next_index)\n\n            if row + 1 < row_limit and (row+1, col) not in used:\n                down = backtrack(row+1, col, next_index)\n\n            if col - 1 >= 0 and (row, col-1) not in used:\n                left = backtrack(row, col-1, next_index)\n\n            if col + 1 < col_limit and (row, col+1) not in used:\n                right = backtrack(row, col+1, next_index)\n\n            used.remove((row, col))\n            # print(row, col, board[row][col], up, down, left, right, used)\n            return up or down or right or left or index == len(word)-1\n\n        for row in range(row_limit):\n            for col in range(col_limit):\n                if backtrack(row, col, 0):\n                    return True\n        return False\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var exist = function (board, word) {\n  const finding = new Finding(board, word);\n\n  for (let row = 0; row < board.length; row++) {\n    for (let col = 0; col < board[row].length; col++) {\n      if (finding.track(row, col)) return true;\n    }\n  }\n  return false;\n};\n\nclass Finding {\n  constructor(board, word) {\n    this.maxRows = board.length;\n    this.maxCols = board[0].length;\n    this.board = board;\n    this.word = word;\n  }\n\n  track(row, col, i = 0) {\n    // matched\n    if (i >= this.word.length) return true;\n\n    if (row < 0 || row >= this.maxRows || col < 0 || col >= this.maxCols || this.word[i] !== this.board[row][col]) {\n      return;\n    }\n    // console.log([row, col], i, this.word[i])\n\n    let res = false;\n    this.board[row][col] = null;\n    // console.log(this.board)\n\n    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];\n    for (const [x, y] of directions) {\n      res = this.track(row + y, col + x, i + 1);\n      if (res) break;\n    }\n    // console.log([row, col], this.word[i])\n    this.board[row][col] = this.word[i]\n\n    return res;\n  }\n}\n")))}u.isMDXComponent=!0}}]);