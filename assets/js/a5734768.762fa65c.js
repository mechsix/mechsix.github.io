"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37206],{48759:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(74848),t=r(28453);const s={title:"745. Prefix and Suffix Search",sidebar_label:"745. Prefix and Suffix Search",tags:["Leetcode Hard","Trie"]},l=void 0,c={id:"leetcode/501-1000/prefix_and_suffix_search",title:"745. Prefix and Suffix Search",description:"https://leetcode.com/problems/prefix-and-suffix-search/",source:"@site/docs/leetcode/501-1000/745_prefix_and_suffix_search.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/prefix_and_suffix_search",permalink:"/docs/leetcode/501-1000/prefix_and_suffix_search",draft:!1,unlisted:!1,tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Trie",permalink:"/docs/tags/trie"}],version:"current",sidebarPosition:745,frontMatter:{title:"745. Prefix and Suffix Search",sidebar_label:"745. Prefix and Suffix Search",tags:["Leetcode Hard","Trie"]},sidebar:"docSidebar",previous:{title:"744. Find Smallest Letter Greater Than Target",permalink:"/docs/leetcode/501-1000/find_smallest_letter_greater_than_target"},next:{title:"746. Min Cost Climbing Stairs",permalink:"/docs/leetcode/501-1000/min_cost_climbing_stairs"}},a={},d=[{value:"Python",id:"python",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/prefix-and-suffix-search/",children:"https://leetcode.com/problems/prefix-and-suffix-search/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.p,{children:"\u5c07\u5b58\u5165Trie Tree\u7684string\u505a\u9ede\u8b8a\u5316\uff0c\u65b9\u4fbf\u5f8c\u7e8c\u641c\u5c0b"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5",(0,i.jsx)(n.code,{children:"apple"}),"\u70ba\u4f8b\uff0c\u5be6\u969b\u5b58\u9032Trie Tree\u7684\u5b57\u4e32\u70ba suffix + \u5206\u9694 + prefix"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"|apple"}),"\n",(0,i.jsx)(n.li,{children:"e|apple"}),"\n",(0,i.jsx)(n.li,{children:"le|apple"}),"\n",(0,i.jsx)(n.li,{children:"ple|apple"}),"\n",(0,i.jsx)(n.li,{children:"pple|apple"}),"\n",(0,i.jsx)(n.li,{children:"apple|apple"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7576\u8981\u641c\u5c0b\u6642\uff0c\u56e0\u70basuffix\u5df2\u7d93\u88ab\u5c55\u958b\uff0c\u6240\u4ee5\u76f4\u63a5\u4ee5\u76f8\u540cpattern\u641c\u5c0bTrie tree\u5c31\u53ef\u5f97\u77e5\u7b54\u6848"}),"\n",(0,i.jsx)(n.p,{children:"Initial"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Time: O(N * K^2)  # N: numer of words; K: longest word length"}),"\n",(0,i.jsx)(n.li,{children:"Space: O(N * K^2)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Search:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Time: O(P+S)  # P: prefix length; S: suffix length"}),"\n",(0,i.jsx)(n.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class WordFilter:\n    DELIMITER = '|'\n    EOS = '#'\n    WI = 'WI'\n    def __init__(self, words: List[str]):\n        trie = dict()\n        for weight, word in enumerate(words):\n            for i in range(len(word)+1):\n                cur = trie\n                cur[self.WI] = weight\n                for char in word[i:] + self.DELIMITER + word:\n                    cur = cur.setdefault(char, {})\n                    cur[self.WI] = weight\n\n                cur[self.EOS] = True\n\n        self.trie = trie\n\n    def f(self, prefix: str, suffix: str) -> int:\n        cur = self.trie\n        for char in suffix+self.DELIMITER+prefix:\n            if char not in cur:\n                return -1\n            cur = cur[char]\n\n        return cur[self.WI]\n"})})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var i=r(96540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);