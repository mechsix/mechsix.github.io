"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[20289],{41105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"leetcode/1-500/longest_valid_parentheses","title":"32. Longest Valid Parentheses","description":"https://leetcode.com/problems/longest-valid-parentheses/","source":"@site/docs/leetcode/1-500/32_longest_valid_parentheses.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/longest_valid_parentheses","permalink":"/docs/leetcode/1-500/longest_valid_parentheses","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"Stack","permalink":"/docs/tags/stack"}],"version":"current","sidebarPosition":32,"frontMatter":{"title":"32. Longest Valid Parentheses","sidebar_label":"32. Longest Valid Parentheses","tags":["Leetcode Hard","Stack"]},"sidebar":"docSidebar","previous":{"title":"31. Next Permutation","permalink":"/docs/leetcode/1-500/next_permutation"},"next":{"title":"33. Search in Rotated Sorted Array","permalink":"/docs/leetcode/1-500/search_in_rotated_sorted_array"}}');var a=n(74848),o=n(28453);const r={title:"32. Longest Valid Parentheses",sidebar_label:"32. Longest Valid Parentheses",tags:["Leetcode Hard","Stack"]},l=void 0,c={},i=[{value:"Python",id:"python",level:2},{value:"Stack",id:"stack",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/longest-valid-parentheses/",children:"https://leetcode.com/problems/longest-valid-parentheses/"})}),"\n",(0,a.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,a.jsx)(t.h3,{id:"stack",children:"Stack"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Time: O(N)"}),"\n",(0,a.jsx)(t.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def longestValidParentheses(self, s: str) -> int:\n        max_length = 0\n\n        stack = []\n        stack.append((-1, ')'))\n\n        for i, char in enumerate(s):\n            if char == ')' and stack[-1][1] == '(':\n                stack.pop()\n                max_length = max(max_length, i-stack[-1][0])\n            else:\n                stack.append((i, char))\n\n        return max_length\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);