"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[53054],{99457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1001-1500/diagonal_traverse_ii","title":"1424. Diagonal Traverse II","description":"https://leetcode.com/problems/diagonal-traverse-ii","source":"@site/docs/leetcode/1001-1500/1424_diagonal_traverse_ii.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/diagonal_traverse_ii","permalink":"/docs/leetcode/1001-1500/diagonal_traverse_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Matrix","permalink":"/docs/tags/matrix"}],"version":"current","sidebarPosition":1424,"frontMatter":{"title":"1424. Diagonal Traverse II","sidebar_label":"1424. Diagonal Traverse II","tags":["Leetcode Medium","Matrix"]},"sidebar":"docSidebar","previous":{"title":"1413. Mini Value to Possitive Sum","permalink":"/docs/leetcode/1001-1500/min_value_get_positive_sum"},"next":{"title":"1431. Kids With the Greatest Number of Candies","permalink":"/docs/leetcode/1001-1500/kids_with_the_greatest_num_of_candies"}}');var r=n(74848),o=n(28453);const s={title:"1424. Diagonal Traverse II",sidebar_label:"1424. Diagonal Traverse II",tags:["Leetcode Medium","Matrix"]},a=void 0,l={},c=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/diagonal-traverse-ii",children:"https://leetcode.com/problems/diagonal-traverse-ii"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from collections import defaultdict\n\n\nclass Solution:\n    def findDiagonalOrder(self, nums: List[List[int]]) -> List[int]:\n        mapper = defaultdict(list)\n\n        for i in range(len(nums)-1, -1, -1):\n            for j in range(len(nums[i])):\n                mapper[i+j].append(nums[i][j])\n\n        result = []\n        for key in sorted(mapper.keys()):\n            result += mapper[key]\n\n        return result\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);