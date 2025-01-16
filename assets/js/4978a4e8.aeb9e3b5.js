"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[72259],{37782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"leetcode/1-500/longest_common_prefix","title":"14. Longest Common Prefix","description":"https://leetcode.com/problems/longest-common-prefix/","source":"@site/docs/leetcode/1-500/14_longest_common_prefix.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/longest_common_prefix","permalink":"/docs/leetcode/1-500/longest_common_prefix","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":14,"frontMatter":{"title":"14. Longest Common Prefix","sidebar_label":"14. Longest Common Prefix","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"13. Roman to Integer","permalink":"/docs/leetcode/1-500/roman_to_integer"},"next":{"title":"15. 3Sum","permalink":"/docs/leetcode/1-500/three_sum"}}');var s=t(74848),r=t(28453);const i={title:"14. Longest Common Prefix",sidebar_label:"14. Longest Common Prefix",tags:["Leetcode Easy"]},c=void 0,l={},a=[{value:"Python",id:"python",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/longest-common-prefix/",children:"https://leetcode.com/problems/longest-common-prefix/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        if not strs:\n            return \"\"\n\n        limit = min([len(s) for s in strs])\n\n        prefix = []\n        for i in range(limit):\n            cur = strs[0][i]\n            if all([s[i]==cur for s in strs[1:]]):\n                prefix.append(cur)\n                continue\n            break\n\n        return ''.join(prefix)\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);