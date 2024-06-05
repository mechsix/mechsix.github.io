"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[25699],{70585:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(74848),o=n(28453);const i={title:"140. Word Break II",sidebar_label:"140. Word Break II",tags:["Leetcode Hard","Trie"]},s=void 0,c={id:"leetcode/1-500/word_break_ii",title:"140. Word Break II",description:"https://leetcode.com/problems/word-break-ii/",source:"@site/docs/leetcode/1-500/140_word_break_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/word_break_ii",permalink:"/docs/leetcode/1-500/word_break_ii",draft:!1,unlisted:!1,tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Trie",permalink:"/docs/tags/trie"}],version:"current",sidebarPosition:140,frontMatter:{title:"140. Word Break II",sidebar_label:"140. Word Break II",tags:["Leetcode Hard","Trie"]},sidebar:"docSidebar",previous:{title:"139. Word Break",permalink:"/docs/leetcode/1-500/word_break"},next:{title:"141. Linked List Cycle",permalink:"/docs/leetcode/1-500/linked_list_cycle"}},d={},a=[{value:"Python",id:"python",level:2},{value:"DP",id:"dp",level:3},{value:"Javascript",id:"javascript",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://leetcode.com/problems/word-break-ii/",children:"https://leetcode.com/problems/word-break-ii/"})}),"\n",(0,t.jsx)(r.h2,{id:"python",children:"Python"}),"\n",(0,t.jsx)(r.h3,{id:"dp",children:"DP"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"from functools import lru_cache\n\n\nclass Solution:\n    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:\n\n        @lru_cache(maxsize=None)\n        def dp(i):\n            result = []\n            for word in wordDict:\n                if word != s[i:i+len(word)]:\n                    continue\n\n                if len(word) == len(s)-i:\n                    result.append(word)\n                else:\n                    for sentence in dp(i+len(word)):\n                        result.append(word + ' ' + sentence)\n            return result\n\n        return dp(0)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"javascript",children:"Javascript"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:" var wordBreak = function(s, wordDict) {\n   const result = [];\n   const backtrack = function(start, record = []) {\n     if (s === record.join('')) {\n       const str = record.join(' ');\n       if (!result.includes(str)) result.push(record.join(' '))\n       return;\n     }\n\n     for (let i = start; i < s.length; i++) {\n       const partial = s.slice(i);\n       for (const word of wordDict) {\n        if (partial.startsWith(word)) {\n          record.push(word);\n          // console.log(partial)\n          backtrack(start + word.length, record);\n          record.pop();\n        }\n       }\n     }\n   }\n   backtrack(0)\n   return result;\n};\n"})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(96540);const o={},i=t.createContext(o);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);