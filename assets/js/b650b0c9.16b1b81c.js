"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[27246],{5895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"leetcode/1-500/third_max_number","title":"414. Third Maximum Number","description":"https://leetcode.com/problems/third-maximum-number","source":"@site/docs/leetcode/1-500/414_third_max_number.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/third_max_number","permalink":"/docs/leetcode/1-500/third_max_number","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Leetcode Optimable","permalink":"/docs/tags/leetcode-optimable"}],"version":"current","sidebarPosition":414,"frontMatter":{"title":"414. Third Maximum Number","sidebar_label":"414. Third Maximum Number","tags":["Leetcode Easy","Leetcode Optimable"]},"sidebar":"docSidebar","previous":{"title":"413. Arithmetic Slices","permalink":"/docs/leetcode/1-500/arithmetic_slices"},"next":{"title":"415. Add Strings","permalink":"/docs/leetcode/1-500/add_strings"}}');var s=n(74848),i=n(28453);const o={title:"414. Third Maximum Number",sidebar_label:"414. Third Maximum Number",tags:["Leetcode Easy","Leetcode Optimable"]},c=void 0,d={},a=[{value:"Python",id:"python",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/third-maximum-number",children:"https://leetcode.com/problems/third-maximum-number"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def thirdMax(self, nums: List[int]) -> int:\n        sorted_nums = sorted(list(set(nums)))\n\n        if len(sorted_nums) < 3:\n            return max(sorted_nums)\n\n        result = None\n        for i in range(3):\n            if nums:\n                result = sorted_nums.pop()\n\n        return result\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);