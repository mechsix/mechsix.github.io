"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[81728],{18732:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"leetcode/1-500/is_subsequence","title":"392. Is Subsequence","description":"https://leetcode.com/problems/is-subsequence/","source":"@site/docs/leetcode/1-500/392_is_subsequence.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/is_subsequence","permalink":"/docs/leetcode/1-500/is_subsequence","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":392,"frontMatter":{"title":"392. Is Subsequence","sidebar_label":"392. Is Subsequence","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"389. Find the Difference","permalink":"/docs/leetcode/1-500/find_the_difference"},"next":{"title":"394. Decode String","permalink":"/docs/leetcode/1-500/decode_string"}}');var c=s(74848),o=s(28453);const i={title:"392. Is Subsequence",sidebar_label:"392. Is Subsequence",tags:["Leetcode Easy"]},r=void 0,l={},u=[{value:"Python",id:"python",level:2},{value:"Queue Pop",id:"queue-pop",level:3},{value:"Pointer",id:"pointer",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://leetcode.com/problems/is-subsequence/",children:"https://leetcode.com/problems/is-subsequence/"})}),"\n",(0,c.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,c.jsx)(n.h3,{id:"queue-pop",children:"Queue Pop"}),"\n",(0,c.jsx)(n.p,{children:"N = len(s), M = len(t)"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Time: O(M)"}),"\n",(0,c.jsx)(n.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\n\nclass Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        checks = deque(s)\n        for char in t:\n            if not checks:\n                return True\n\n            if checks[0] == char:\n                checks.popleft()\n\n        return not bool(checks)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"pointer",children:"Pointer"}),"\n",(0,c.jsx)(n.p,{children:"N = len(s), M = len(t)"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"Time: O(M)"}),"\n",(0,c.jsx)(n.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        if not s:\n            return True\n\n        i = 0\n        for letter in t:\n            if i == len(s):\n                return True\n            if s[i] == letter:\n                i += 1\n\n        return i == len(s)\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var t=s(96540);const c={},o=t.createContext(c);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);