"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[15242],{98041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/1-500/find_the_index_of_the_first_occurence_in_a_string","title":"28. Find the Index of the First Occurrence in a String","description":"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string","source":"@site/docs/leetcode/1-500/28_find_the_index_of_the_first_occurence_in_a_string.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/find_the_index_of_the_first_occurence_in_a_string","permalink":"/docs/leetcode/1-500/find_the_index_of_the_first_occurence_in_a_string","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Bit Manipulation","permalink":"/docs/tags/bit-manipulation"}],"version":"current","sidebarPosition":28,"frontMatter":{"title":"28. Find the Index of the First Occurrence in a String","sidebar_label":"28. Find the Index of the First Occurrence in a String","tags":["Leetcode Medium","Bit Manipulation"]},"sidebar":"docSidebar","previous":{"title":"27. Remove Element","permalink":"/docs/leetcode/1-500/remove_element"},"next":{"title":"29. Divide Two Integers","permalink":"/docs/leetcode/1-500/divide_two_integers"}}');var r=t(74848),o=t(28453);const c={title:"28. Find the Index of the First Occurrence in a String",sidebar_label:"28. Find the Index of the First Occurrence in a String",tags:["Leetcode Medium","Bit Manipulation"]},s=void 0,d={},a=[{value:"Python",id:"python",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",children:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def strStr(self, haystack: str, needle: str) -> int:\n        n, m = len(haystack), len(needle)\n        if n < m:\n            return -1\n        if n == m:\n            return 0 if haystack == needle else -1\n\n        for i in range(n-m+1):\n            if ''.join([haystack[i:i+m]]) == needle:\n                return i\n        return -1\n\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);