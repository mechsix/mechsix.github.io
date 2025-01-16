"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[48473],{6254:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1001-1500/sort_matrix_diagonally","title":"1329. Sort the Matrix Diagonally","description":"Python","source":"@site/docs/leetcode/1001-1500/1329_sort_matrix_diagonally.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/sort_matrix_diagonally","permalink":"/docs/leetcode/1001-1500/sort_matrix_diagonally","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Matrix","permalink":"/docs/tags/matrix"}],"version":"current","sidebarPosition":1329,"frontMatter":{"title":"1329. Sort the Matrix Diagonally","sidebar_label":"1329. Sort the Matrix Diagonally","tags":["Leetcode Medium","Matrix"]},"sidebar":"docSidebar","previous":{"title":"1328. Break a Palindrome","permalink":"/docs/leetcode/1001-1500/break_palindrome"},"next":{"title":"1332. Remove Palindromic Subsequences","permalink":"/docs/leetcode/1001-1500/remove_palindromic_subsequences"}}');var o=t(74848),r=t(28453);const a={title:"1329. Sort the Matrix Diagonally",sidebar_label:"1329. Sort the Matrix Diagonally",tags:["Leetcode Medium","Matrix"]},l=void 0,s={},c=[{value:"Python",id:"python",level:2},{value:"Build Map, Sort, Put back",id:"build-map-sort-put-back",level:3},{value:"Build with Heap",id:"build-with-heap",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"build-map-sort-put-back",children:"Build Map, Sort, Put back"}),"\n",(0,o.jsx)(n.p,{children:"N\u662frow*col\u7684matrix\u7e3d\u6578"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Time: O(NlogN)  # sorting"}),"\n",(0,o.jsx)(n.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from collections import defaultdict, deque\n\n\nclass Solution:\n    def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:\n        m, n = len(mat), len(mat[0])\n        mapper = defaultdict(list)\n\n        # Build the map\n        for row in range(m):\n            for col in range(n):\n                mapper[row-col].append(mat[row][col])\n\n        # Sort them\n        for id in mapper.keys():\n            mapper[id].sort()\n            mapper[id] = deque(mapper[id])\n\n        # Put back\n        for row in range(m):\n            for col in range(n):\n                mat[row][col] = mapper[row-col].popleft()\n        return mat\n"})}),"\n",(0,o.jsx)(n.h2,{id:"build-with-heap",children:"Build with Heap"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5c11\u4e00\u6b21loop\uff0cbuild\u7684\u6642\u5019\u5c31\u6392\u597d"}),"\n",(0,o.jsx)(n.li,{children:"\u6703\u5feb\u4e00\u9ede\u9ede"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import heapq\nfrom collections import defaultdict\n\n\nclass Solution:\n    def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:\n        m, n = len(mat), len(mat[0])\n        mapper = defaultdict(list)\n\n        for row in range(m):\n            for col in range(n):\n                heapq.heappush(mapper[row-col], mat[row][col])\n\n        for row in range(m):\n            for col in range(n):\n                mat[row][col] = heapq.heappop(mapper[row-col])\n\n        return mat\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);