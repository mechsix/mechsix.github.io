"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[81115],{48040:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"leetcode/1-500/word_break","title":"139. Word Break","description":"https://leetcode.com/problems/word-break/","source":"@site/docs/leetcode/1-500/139_word_break.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/word_break","permalink":"/docs/leetcode/1-500/word_break","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Trie","permalink":"/docs/tags/trie"}],"version":"current","sidebarPosition":139,"frontMatter":{"title":"139. Word Break","sidebar_label":"139. Word Break","tags":["Leetcode Medium","Trie"]},"sidebar":"docSidebar","previous":{"title":"137. Single Number II","permalink":"/docs/leetcode/1-500/single_number_ii"},"next":{"title":"140. Word Break II","permalink":"/docs/leetcode/1-500/word_break_ii"}}');var o=r(74848),i=r(28453);const s={title:"139. Word Break",sidebar_label:"139. Word Break",tags:["Leetcode Medium","Trie"]},a=void 0,d={},c=[{value:"Python",id:"python",level:2},{value:"Trie with BFS",id:"trie-with-bfs",level:3},{value:"Javascript",id:"javascript",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/word-break/",children:"https://leetcode.com/problems/word-break/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"trie-with-bfs",children:"Trie with BFS"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    EOS = '$'\n    def wordBreak(self, s: str, wordDict: List[str]) -> bool:\n        trie = {}\n        for word in wordDict:\n            cur = trie\n            for letter in word:\n                cur = cur.setdefault(letter, {})\n            cur[self.EOS] = True\n\n        queue = [trie]\n\n        for letter in s:\n            new_queue = []\n            is_seen = False\n            while queue:\n                node = queue.pop()\n                if letter not in node:\n                    continue\n\n                node = node[letter]\n                new_queue.append(node)\n\n                if self.EOS in node and not is_seen:\n                    new_queue.append(trie)\n                    is_seen = True\n            queue = new_queue\n\n        return trie in queue\n"})}),"\n",(0,o.jsx)(n.h2,{id:"javascript",children:"Javascript"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var wordBreak = function(s, wordDict) {\n   const recursive = function(start, memo = {}) {\n    if (start === s.length) return true;\n    if (memo[start] !== undefined) return memo[start];\n\n    for (let i = start + 1; i <= s.length; i++) {\n      const partial = s.substring(start, i)\n      for (const word of wordDict) {\n        if (partial === word && recursive(i, memo)) {\n          return memo[start] = true;\n        }\n      }\n    }\n    return memo[start] = false;\n  }\n\n  return recursive(0)\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);