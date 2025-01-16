"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[88681],{10179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1-500/reverse_string","title":"344. Reverse String","description":"https://leetcode.com/problems/reverse-string","source":"@site/docs/leetcode/1-500/344_reverse_string.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/reverse_string","permalink":"/docs/leetcode/1-500/reverse_string","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"In Place","permalink":"/docs/tags/in-place"}],"version":"current","sidebarPosition":344,"frontMatter":{"title":"344. Reverse String","sidebar_label":"344. Reverse String","tags":["Leetcode Easy","In Place"]},"sidebar":"docSidebar","previous":{"title":"343. Integer Break","permalink":"/docs/leetcode/1-500/integer_break"},"next":{"title":"374. Guess Number Higher or Lower","permalink":"/docs/leetcode/1-500/guess_num_higher_or_lower"}}');var r=t(74848),i=t(28453);const o={title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},l=void 0,c={},a=[{value:"Python",id:"python",level:2},{value:"Loop",id:"loop",level:3},{value:"Recursion",id:"recursion",level:3},{value:"Stack",id:"stack",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/reverse-string",children:"https://leetcode.com/problems/reverse-string"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"loop",children:"Loop"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        length = len(s)\n        max_index = length - 1\n\n        for i in range(0, length//2):\n            s[i], s[max_index-i] = s[max_index-i], s[i]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"recursion",children:"Recursion"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        self._travel(s, 0, len(s)-1)\n\n    def _travel(self, s, left, right):\n        if left >= right:\n            return\n\n        s[left], s[right] = s[right], s[left]\n        self._travel(s, left+1, right-1)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"stack",children:"Stack"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        stack = []\n        for char in s:\n            stack.append(char)\n\n        i = 0\n        while stack:\n            s[i] = stack.pop()\n            i += 1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);