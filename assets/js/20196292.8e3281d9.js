"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[16110],{6674:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"leetcode/1-500/word_ladder","title":"127. Word Ladder","description":"https://leetcode.com/problems/word-ladder/","source":"@site/docs/leetcode/1-500/127_word_ladder.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/word_ladder","permalink":"/docs/leetcode/1-500/word_ladder","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"BFS","permalink":"/docs/tags/bfs"}],"version":"current","sidebarPosition":127,"frontMatter":{"title":"127. Word Ladder","sidebar_label":"127. Word Ladder","tags":["Leetcode Hard","BFS"]},"sidebar":"docSidebar","previous":{"title":"126. Word Ladder II","permalink":"/docs/leetcode/1-500/word_ladder_ii"},"next":{"title":"128. Longest Consecutive Sequence","permalink":"/docs/leetcode/1-500/longest_consecutive_sequence"}}');var d=r(74848),o=r(28453);const i={title:"127. Word Ladder",sidebar_label:"127. Word Ladder",tags:["Leetcode Hard","BFS"]},s=void 0,l={},c=[{value:"Python",id:"python",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://leetcode.com/problems/word-ladder/",children:"https://leetcode.com/problems/word-ladder/"})}),"\n",(0,d.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"BFS with deuplicate remove"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\n\nclass Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        if beginWord == endWord:\n            return 1\n\n        queue = deque()\n        queue.append(beginWord)\n\n        candidates = set(wordList)\n        candidates.add(beginWord)\n\n        result = 1\n        while queue:\n            for i in range(len(queue)):\n                word = queue.popleft()\n\n                if word not in candidates:\n                    continue\n\n                candidates.remove(word)\n\n                if word == endWord:\n                    return result\n\n                for i in range(len(word)):\n                    for char in string.ascii_letters[:26]:\n                        temp_word = word[:i] + char + word[i+1:]\n                        if temp_word in candidates:\n                            queue.append(temp_word)\n            result += 1\n        return 0\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(96540);const d={},o=t.createContext(d);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);