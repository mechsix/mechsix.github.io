"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[24943],{50667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1-500/kth_smallest_elm_in_sorted_martrix","title":"378. Kth Smallest Element in a Sorted Matrix","description":"Python","source":"@site/docs/leetcode/1-500/378_kth_smallest_elm_in_sorted_martrix.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/kth_smallest_elm_in_sorted_martrix","permalink":"/docs/leetcode/1-500/kth_smallest_elm_in_sorted_martrix","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Heap","permalink":"/docs/tags/heap"}],"version":"current","sidebarPosition":378,"frontMatter":{"title":"378. Kth Smallest Element in a Sorted Matrix","sidebar_label":"378. Kth Smallest Element in a Sorted Matrix","tags":["Leetcode Medium","Heap"]},"sidebar":"docSidebar","previous":{"title":"377. Combination Sum IV","permalink":"/docs/leetcode/1-500/combination_sum_iv"},"next":{"title":"380. Insert Delete GetRandom O(1)","permalink":"/docs/leetcode/1-500/insert_delete_get_random_o1"}}');var l=n(74848),o=n(28453);const r={title:"378. Kth Smallest Element in a Sorted Matrix",sidebar_label:"378. Kth Smallest Element in a Sorted Matrix",tags:["Leetcode Medium","Heap"]},s=void 0,a={},c=[{value:"Python",id:"python",level:2},{value:"Min Heap",id:"min-heap",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,l.jsx)(t.h3,{id:"min-heap",children:"Min Heap"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Time: O(N*M)"}),"\n",(0,l.jsx)(t.li,{children:"Space: O(N*M)"}),"\n"]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"import heapq\n\n\nclass Solution:\n    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:\n        heap = []\n        for row in matrix:\n            for num in row:\n                heapq.heappush(heap, num)\n\n        return heapq.nsmallest(k, heap)[-1]\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const l={},o=i.createContext(l);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);