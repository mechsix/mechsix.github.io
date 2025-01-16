"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[81758],{11315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1-500/spiral_matrix_ii","title":"59. Spiral Matrix II","description":"Python","source":"@site/docs/leetcode/1-500/59_spiral_matrix_ii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/spiral_matrix_ii","permalink":"/docs/leetcode/1-500/spiral_matrix_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Matrix","permalink":"/docs/tags/matrix"}],"version":"current","sidebarPosition":59,"frontMatter":{"title":"59. Spiral Matrix II","sidebar_label":"59. Spiral Matrix II","tags":["Leetcode Medium","Matrix"]},"sidebar":"docSidebar","previous":{"title":"58. Length of Last Word","permalink":"/docs/leetcode/1-500/len_last_word"},"next":{"title":"61. Rotate List","permalink":"/docs/leetcode/1-500/rotate_list"}}');var r=t(74848),o=t(28453);const a={title:"59. Spiral Matrix II",sidebar_label:"59. Spiral Matrix II",tags:["Leetcode Medium","Matrix"]},s=void 0,l={},c=[{value:"Python",id:"python",level:2}];function d(e){const n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def generateMatrix(self, n: int) -> List[List[int]]:\n        matrix = [[None]*n for i in range(n)]\n\n        direction = 'right'\n        x, y = 0, 0\n\n        for i in range(1, n**2+1):            \n            matrix[y][x] = i\n            \n            if direction == 'right':\n                if x+1 < n and matrix[y][x+1] is None:\n                    x += 1\n                else:\n                    direction = 'down'\n                    y += 1\n            elif direction == 'down':\n                if y+1 < n and matrix[y+1][x] is None:\n                    y += 1\n                else:\n                    direction = 'left'\n                    x -= 1\n            elif direction == 'left':\n                if x-1 >= 0 and matrix[y][x-1] is None:\n                    x -= 1\n                else:\n                    direction = 'up'\n                    y -= 1\n            else:\n                # up\n                if y-1 >= 0 and matrix[y-1][x] is None:\n                    y -= 1\n                else:\n                    direction = 'right'\n                    x += 1\n        \n        return matrix\n"})})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);