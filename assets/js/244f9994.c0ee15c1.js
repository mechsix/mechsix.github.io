"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[86354],{1372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/1001-1500/car_pooling","title":"1094. Car Pooling","description":"Python","source":"@site/docs/leetcode/1001-1500/1094_car_pooling.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/car_pooling","permalink":"/docs/leetcode/1001-1500/car_pooling","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":1094,"frontMatter":{"title":"1094. Car Pooling","sidebar_label":"1094. Car Pooling","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"1091. Shortest Path in Binary Matrix","permalink":"/docs/leetcode/1001-1500/shortest_path_in_binary_matrix"},"next":{"title":"1114. Print in Order","permalink":"/docs/leetcode/1001-1500/print_in_order"}}');var r=n(74848),i=n(28453);const s={title:"1094. Car Pooling",sidebar_label:"1094. Car Pooling",tags:["Leetcode Medium"]},a=void 0,c={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={code:"code",h2:"h2",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:\n        start = min([trip[1] for trip in trips])\n        end = max([trip[2] for trip in trips])\n\n        counter = [0 for i in range(start, end+1)]\n\n        for trip in trips:\n            passengers, fromP, toP = trip\n            for point in range(fromP, toP):\n                counter[point-start] += passengers\n\n        return not any(took > capacity for took in counter)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);