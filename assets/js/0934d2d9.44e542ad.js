"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[99628],{12587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1-500/longest_no_repeat_substring","title":"3. Longest Substring Without Repeating Characters","description":"https://leetcode.com/problems/longest-substring-without-repeating-characters","source":"@site/docs/leetcode/1-500/3_longest_no_repeat_substring.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/longest_no_repeat_substring","permalink":"/docs/leetcode/1-500/longest_no_repeat_substring","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Two Pointer","permalink":"/docs/tags/two-pointer"}],"version":"current","sidebarPosition":3,"frontMatter":{"title":"3. Longest Substring Without Repeating Characters","sidebar_label":"3. Longest Substring Without Repeating Characters","tags":["Leetcode Medium","Two Pointer"]},"sidebar":"docSidebar","previous":{"title":"2. Add Two Numbers","permalink":"/docs/leetcode/1-500/add_two_numbers"},"next":{"title":"4. Median of Two Sorted Arrays","permalink":"/docs/leetcode/1-500/median_two_sorted_array"}}');var r=n(74848),o=n(28453);const i={title:"3. Longest Substring Without Repeating Characters",sidebar_label:"3. Longest Substring Without Repeating Characters",tags:["Leetcode Medium","Two Pointer"]},l=void 0,c={},a=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",children:"https://leetcode.com/problems/longest-substring-without-repeating-characters"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.p,{children:"Test Cases"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'"abcabcbb"'}),"\n",(0,r.jsx)(t.li,{children:'" "'}),"\n",(0,r.jsx)(t.li,{children:'"ok"'}),"\n",(0,r.jsx)(t.li,{children:'"dvdf"'}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        length = len(s)\n        if length < 2:\n            return length\n\n        longest_length = 0\n        left, right = 0, 0\n\n        while right < length:\n            if s[right] in s[left:right]:\n                longest_length = max(longest_length, right-left)\n                left += 1\n                right = left\n                continue\n            right += 1\n\n        return max(longest_length, right-left)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);