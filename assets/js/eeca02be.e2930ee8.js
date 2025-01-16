"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[87432],{8854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"leetcode/501-1000/image_overlap","title":"835. Image Overlap","description":"https://leetcode.com/problems/image-overlap/","source":"@site/docs/leetcode/501-1000/835_image_overlap.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/image_overlap","permalink":"/docs/leetcode/501-1000/image_overlap","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Matrix","permalink":"/docs/tags/matrix"}],"version":"current","sidebarPosition":835,"frontMatter":{"title":"835. Image Overlap","sidebar_label":"835. Image Overlap","tags":["Leetcode Medium","Matrix"]},"sidebar":"docSidebar","previous":{"title":"823. Binary Trees With Factors","permalink":"/docs/leetcode/501-1000/binary_tree_with_factors"},"next":{"title":"841. Keys and Rooms","permalink":"/docs/leetcode/501-1000/keys_and_rooms"}}');var r=t(74848),a=t(28453);const i={title:"835. Image Overlap",sidebar_label:"835. Image Overlap",tags:["Leetcode Medium","Matrix"]},l=void 0,s={},c=[{value:"Python",id:"python",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/image-overlap/",children:"https://leetcode.com/problems/image-overlap/"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:\n        n = len(img1)\n\n        def count_overlay(start_row, start_col):\n            up_left, up_right, down_left, down_right = 0, 0, 0, 0\n\n            for row_ref, row_move in enumerate(range(start_row, n)):\n                for col_ref, col_move in enumerate(range(start_col, n)):\n                    if img1[row_move][col_move] and img2[row_ref][col_ref]:\n                        up_left += 1\n\n                    if img1[row_move][col_ref] and img2[row_ref][col_move]:\n                        up_right += 1\n\n                    if img1[row_ref][col_ref] and img2[row_move][col_move]:\n                        down_left += 1\n\n                    if img1[row_ref][col_move] and img2[row_move][col_ref]:\n                        down_right += 1\n\n            return max(up_left, up_right, down_left, down_right)\n\n        ans = 0\n        for r in range(n):\n            for c in range(n):\n                ans = max(ans, count_overlay(r, c))\n        return ans\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(96540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);