"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[76155],{34965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"leetcode/1-500/search_2d_matrix","title":"74. Search a 2D Matrix","description":"https://leetcode.com/problems/search-a-2d-matrix","source":"@site/docs/leetcode/1-500/74_search_2d_matrix.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/search_2d_matrix","permalink":"/docs/leetcode/1-500/search_2d_matrix","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Binary Search","permalink":"/docs/tags/binary-search"}],"version":"current","sidebarPosition":74,"frontMatter":{"title":"74. Search a 2D Matrix","sidebar_label":"74. Search a 2D Matrix","tags":["Leetcode Medium","Binary Search"]},"sidebar":"docSidebar","previous":{"title":"72. Edit Distance","permalink":"/docs/leetcode/1-500/edit_distance"},"next":{"title":"75. Sort Colors","permalink":"/docs/leetcode/1-500/sort_colors"}}');var a=r(74848),i=r(28453);const c={title:"74. Search a 2D Matrix",sidebar_label:"74. Search a 2D Matrix",tags:["Leetcode Medium","Binary Search"]},o=void 0,s={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/search-a-2d-matrix",children:"https://leetcode.com/problems/search-a-2d-matrix"})}),"\n",(0,a.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\n        m = len(matrix[0])\n        n = len(matrix)\n\n        l, r = 0, m*n-1\n\n        while l <= r:\n            cur = (l+r)//2\n            col_index = cur % m\n            row_index = cur // m\n\n            if matrix[row_index][col_index] == target:\n                return True\n            if matrix[row_index][col_index] < target:\n                l = cur + 1\n            else:\n                r = cur - 1\n\n        return False\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);