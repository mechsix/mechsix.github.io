"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[16678],{15127:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/501-1000/word_subsets","title":"916. Word Subsets","description":"https://leetcode.com/problems/word-subsets/","source":"@site/docs/leetcode/501-1000/916_word_subsets.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/word_subsets","permalink":"/docs/leetcode/501-1000/word_subsets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Hash","permalink":"/docs/tags/hash"}],"version":"current","sidebarPosition":916,"frontMatter":{"title":"916. Word Subsets","sidebar_label":"916. Word Subsets","tags":["Leetcode Medium","Hash"]},"sidebar":"docSidebar","previous":{"title":"912. Sort an Array","permalink":"/docs/leetcode/501-1000/sort_an_array"},"next":{"title":"926. Flip String to Monotone Increasing","permalink":"/docs/leetcode/501-1000/flip_string_to_monotone_increasing"}}');var n=o(74848),r=o(28453);const d={title:"916. Word Subsets",sidebar_label:"916. Word Subsets",tags:["Leetcode Medium","Hash"]},i=void 0,c={},l=[{value:"Python",id:"python",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/word-subsets/",children:"https://leetcode.com/problems/word-subsets/"})}),"\n",(0,n.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\u6ce8\u610fwords2\u88e1\u9762\u53ef\u80fd\u55ae\u4e00\u500bword\u6709\u591a\u500bcharacter\uff0c\u4f8b\u5982",(0,n.jsx)(t.code,{children:"oo"}),"\u5982\u679c\u5b58\u5728\uff0c",(0,n.jsx)(t.code,{children:"o"}),"\u7684\u8a08\u7b97\u5176\u5be6\u7121\u95dc\u7dca\u8981"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from collections import Counter, defaultdict\n\n\nclass Solution:\n    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:\n        map2 = defaultdict(int)\n        for word in words2:\n            for letter, count in Counter(word).items():\n                map2[letter] = max(map2[letter], count)\n\n        result = []\n        for word in words1:\n            map1 = Counter(word)\n            for letter, count in map2.items():\n                if count > map1.get(letter, 0):\n                    break\n            else:\n                result.append(word)\n        return result\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>d,x:()=>i});var s=o(96540);const n={},r=s.createContext(n);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);