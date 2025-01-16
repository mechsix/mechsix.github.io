"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52278],{63927:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});const c=JSON.parse('{"id":"leetcode/501-1000/backspacce_string_compare","title":"844. Backspace String Compare","description":"https://leetcode.com/problems/backspace-string-compare/","source":"@site/docs/leetcode/501-1000/844_backspacce_string_compare.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/backspacce_string_compare","permalink":"/docs/leetcode/501-1000/backspacce_string_compare","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Stack","permalink":"/docs/tags/stack"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":844,"frontMatter":{"title":"844. Backspace String Compare","sidebar_label":"844. Backspace String Compare","tags":["Leetcode Easy","Stack","Go"]},"sidebar":"docSidebar","previous":{"title":"841. Keys and Rooms","permalink":"/docs/leetcode/501-1000/keys_and_rooms"},"next":{"title":"852. Peak Index in a Mountain Array","permalink":"/docs/leetcode/501-1000/peak_index_in_a_mountain_array"}}');var s=t(74848),a=t(28453);const o={title:"844. Backspace String Compare",sidebar_label:"844. Backspace String Compare",tags:["Leetcode Easy","Stack","Go"]},r=void 0,i={},l=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/backspace-string-compare/",children:"https://leetcode.com/problems/backspace-string-compare/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def backspaceCompare(self, s: str, t: str) -> bool:\n        return self.convert(s) == self.convert(t)\n\n    @staticmethod\n    def convert(s: str):\n        stack = []\n        for char in s:\n            if char == '#':\n                if stack:\n                    stack.pop()\n                continue\n            stack.append(char)\n\n        return ''.join(stack)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"go",children:"Go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func backspaceCompare(s string, t string) bool {\n    return convert(s) == convert(t)\n}\n\nfunc convert(s string) string {\n    stack := []byte{}\n    for i := range s {\n        if s[i] == '#' {\n            if len(stack) > 0 {\n                stack = stack[:len(stack)-1]\n            }\n        } else {\n            stack = append(stack, s[i])\n        }\n    }\n    return string(stack)\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var c=t(96540);const s={},a=c.createContext(s);function o(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);