"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[34721],{12203:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts","title":"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts","description":"https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/","source":"@site/docs/leetcode/1001-1500/1465_max_area_of_piece_of_cake_after_h_w_cuts.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts","permalink":"/docs/leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Greedy","permalink":"/docs/tags/greedy"}],"version":"current","sidebarPosition":1465,"frontMatter":{"title":"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts","sidebar_label":"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts","tags":["Leetcode Medium","Greedy"]},"sidebar":"docSidebar","previous":{"title":"1461. Check If a String Contains All Binary Codes of Size K","permalink":"/docs/leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k"},"next":{"title":"1470. Shuffle the Array","permalink":"/docs/leetcode/1001-1500/shuffle_the_array"}}');var n=a(74848),r=a(28453);const i={title:"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",sidebar_label:"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",tags:["Leetcode Medium","Greedy"]},c=void 0,s={},l=[{value:"Python",id:"python",level:2},{value:"Greedy",id:"greedy",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/",children:"https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/"})}),"\n",(0,n.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,n.jsx)(t.h3,{id:"greedy",children:"Greedy"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def maxArea(self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]) -> int:\n        horizontalCuts.sort()\n        verticalCuts.sort()\n\n        max_h = max(horizontalCuts[0], h-horizontalCuts[-1])\n        max_w = max(verticalCuts[0], w-verticalCuts[-1])\n\n        for i in range(1, len(horizontalCuts)):\n            interval_h = horizontalCuts[i] - horizontalCuts[i-1]\n            max_h = max(max_h, interval_h)\n\n        for j in range(1, len(verticalCuts)):\n            interval_w = verticalCuts[j] - verticalCuts[j-1]\n            max_w = max(max_w, interval_w)\n\n        return (max_h * max_w) % (10**9 + 7)\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var o=a(96540);const n={},r=o.createContext(n);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);