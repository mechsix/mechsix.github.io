"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[32451],{39596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/2000/sum_of_num_an_its_reverse","title":"6219. Sum of Number and Its Reverse","description":"https://leetcode.com/contest/weekly-contest-315/problems/sum-of-number-and-its-reverse/","source":"@site/docs/leetcode/2000/6219_sum_of_num_an_its_reverse.md","sourceDirName":"leetcode/2000","slug":"/leetcode/2000/sum_of_num_an_its_reverse","permalink":"/docs/leetcode/2000/sum_of_num_an_its_reverse","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Hash","permalink":"/docs/tags/hash"},{"inline":true,"label":"Contest","permalink":"/docs/tags/contest"}],"version":"current","sidebarPosition":6219,"frontMatter":{"title":"6219. Sum of Number and Its Reverse","sidebar_label":"6219. Sum of Number and Its Reverse","tags":["Leetcode Medium","Hash","Contest"]},"sidebar":"docSidebar","previous":{"title":"6207. Count Subarrays With Fixed Bounds","permalink":"/docs/leetcode/2000/count_subarray_with_fixed_bounds"},"next":{"title":"React with NX","permalink":"/docs/react/nx-react"}}');var r=t(74848),o=t(28453);const i={title:"6219. Sum of Number and Its Reverse",sidebar_label:"6219. Sum of Number and Its Reverse",tags:["Leetcode Medium","Hash","Contest"]},u=void 0,c={},l=[{value:"Python",id:"python",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/contest/weekly-contest-315/problems/sum-of-number-and-its-reverse/",children:"https://leetcode.com/contest/weekly-contest-315/problems/sum-of-number-and-its-reverse/"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contest 315"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def sumOfNumberAndReverse(self, num: int) -> bool:\n        if not num:\n            return True\n        for n in range(num):\n            rev = self.rev(n)\n            if n + rev == num:\n                print(num, n, rev)\n                return True\n        return False\n\n    def rev(self, num):\n        rev = list(str(num))\n        rev.reverse()\n        return int(''.join(rev))\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>u});var s=t(96540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);