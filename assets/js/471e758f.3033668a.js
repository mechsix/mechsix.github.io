"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[47240],{80926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"leetcode/1-500/max_xor_of_2_nums_in_array","title":"421. Maximum XOR of Two Numbers in an Array","description":"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array","source":"@site/docs/leetcode/1-500/421_max_xor_of_2_nums_in_array.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/max_xor_of_2_nums_in_array","permalink":"/docs/leetcode/1-500/max_xor_of_2_nums_in_array","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":421,"frontMatter":{"title":"421. Maximum XOR of Two Numbers in an Array","sidebar_label":"421. Maximum XOR of Two Numbers in an Array","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"417. Pacific Atlantic Water Flow","permalink":"/docs/leetcode/1-500/pacific_atlantic_water_flow"},"next":{"title":"424. Longest Repeating Character Replacement","permalink":"/docs/leetcode/1-500/logtest_repeating_character_replacement"}}');var o=t(74848),i=t(28453);const s={title:"421. Maximum XOR of Two Numbers in an Array",sidebar_label:"421. Maximum XOR of Two Numbers in an Array",tags:["Leetcode Medium"]},a=void 0,c={},l=[{value:"Python",id:"python",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",children:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["XOR\u7684\u7279\u6027\uff1a If ",(0,o.jsx)(n.strong,{children:"a ^ b = c"}),", then ",(0,o.jsx)(n.strong,{children:"a ^ c = b"}),", ",(0,o.jsx)(n.strong,{children:"b ^ c = a"})," are also True"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<<"}),"\u5728Python\u4e2d\u662f\u5f80\u5de6\u79fb\u52d5\u4e00\u500bbit\uff1b",(0,o.jsx)(n.code,{children:">>"}),"\u5f80\u53f3\u79fb\u52d5\u4e00\u500bbit","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"1 << 2"}),"\u6703\u5c07",(0,o.jsx)(n.code,{children:"001"}),"\u79fb\u52d5\u6210",(0,o.jsx)(n.code,{children:"100"}),"\uff0c\u56e0\u6b64\u5f97\u5230\u5341\u9032\u4f4d\u76844"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"16 >> 2"}),"\u6703\u5c07",(0,o.jsx)(n.code,{children:"10000"}),"\u5f80\u53f3\u79fb\u52d5\u57ce",(0,o.jsx)(n.code,{children:"100"}),"\uff0c\u5f97\u5230\u5341\u9032\u4f4d\u76844"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"\u56e0\u70ba\u984c\u76ee\u7684nums\u7bc4\u570d\u592a\u5927\u76f4\u63a5liter\u6703timeout\uff0c\u5c0d32 bit\u505aliter\u53ef\u4ee5\u5f97\u5230O(1)\u7684\u6642\u9593\u8907\u96dc\u5ea6"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def findMaximumXOR(self, nums: List[int]) -> int:\n        result = 0\n        for bit in range(31, -1, -1):\n            result <<= 1\n            shifts = {num >> bit for num in nums}\n            if any(result ^ 1 ^ num in shifts for num in shifts):\n                result += 1\n        return result\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);