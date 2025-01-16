"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[63877],{8935:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"leetcode/501-1000/k_closest_points_to_origin","title":"973. K Closest Points to Origin","description":"https://leetcode.com/problems/k-closest-points-to-origin/","source":"@site/docs/leetcode/501-1000/973_k_closest_points_to_origin.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/k_closest_points_to_origin","permalink":"/docs/leetcode/501-1000/k_closest_points_to_origin","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Heap","permalink":"/docs/tags/heap"}],"version":"current","sidebarPosition":973,"frontMatter":{"title":"973. K Closest Points to Origin","sidebar_label":"973. K Closest Points to Origin","tags":["Leetcode Medium","Heap"]},"sidebar":"docSidebar","previous":{"title":"967. Numbers With Same Consecutive Differences","permalink":"/docs/leetcode/501-1000/numbers_with_same_consecutive_differences"},"next":{"title":"976. Largest Perimeter Triangle","permalink":"/docs/leetcode/501-1000/largest_perimeter_triangle"}}');var s=o(74848),i=o(28453);const r={title:"973. K Closest Points to Origin",sidebar_label:"973. K Closest Points to Origin",tags:["Leetcode Medium","Heap"]},c=void 0,l={},a=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/k-closest-points-to-origin/",children:"https://leetcode.com/problems/k-closest-points-to-origin/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import heapq\nimport math\n\nclass Solution:\n    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:\n        return [\n            coord for coord, distance\n            in heapq.nsmallest(\n                k,\n                [((x,y), math.sqrt(x**2+y**2) ) for x, y in points],\n                key=lambda item: item[1]\n            )\n        ]\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>c});var n=o(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);