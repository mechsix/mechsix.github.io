"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[56104],{22261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"leetcode/1-500/word_pattern","title":"290. Word Pattern","description":"https://leetcode.com/problems/word-pattern/","source":"@site/docs/leetcode/1-500/290_word_pattern.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/word_pattern","permalink":"/docs/leetcode/1-500/word_pattern","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":290,"frontMatter":{"title":"290. Word Pattern","sidebar_label":"290. Word Pattern","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"289. Game of Life","permalink":"/docs/leetcode/1-500/game_of_life"},"next":{"title":"295. Find Median from Data Stream","permalink":"/docs/leetcode/1-500/find_median_from_data_stream"}}');var o=n(74848),s=n(28453);const a={title:"290. Word Pattern",sidebar_label:"290. Word Pattern",tags:["Leetcode Easy"]},d=void 0,c={},i=[{value:"Python",id:"python",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/word-pattern/",children:"https://leetcode.com/problems/word-pattern/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def wordPattern(self, pattern: str, s: str) -> bool:\n        mapper = dict()\n        words = s.split(' ')\n\n        if len(pattern) != len(words):\n            return False\n\n        for p, word in zip(pattern, words):\n            if word not in mapper:\n                mapper[word] = p\n                continue\n\n            if mapper[word] != p:\n                return False\n\n        return len(mapper.values()) == len(set(mapper.values()))\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);