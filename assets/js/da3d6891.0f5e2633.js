"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[27939],{64155:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(74848),r=o(28453);const s={title:"692. Top K Frequent Words",sidebar_label:"692. Top K Frequent Words",tags:["Leetcode Medium","Sort"]},i=void 0,c={id:"leetcode/501-1000/top_k_frequent_words",title:"692. Top K Frequent Words",description:"https://leetcode.com/problems/top-k-frequent-words/",source:"@site/docs/leetcode/501-1000/692_top_k_frequent_words.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/top_k_frequent_words",permalink:"/docs/leetcode/501-1000/top_k_frequent_words",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Sort",permalink:"/docs/tags/sort"}],version:"current",sidebarPosition:692,frontMatter:{title:"692. Top K Frequent Words",sidebar_label:"692. Top K Frequent Words",tags:["Leetcode Medium","Sort"]},sidebar:"docSidebar",previous:{title:"688. Knight Probability in Chessboard",permalink:"/docs/leetcode/501-1000/knight_probability_in_chessboard"},next:{title:"695. Max Area of Island",permalink:"/docs/leetcode/501-1000/max_area_of_islands"}},d={},l=[{value:"Python",id:"python",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/top-k-frequent-words/",children:"https://leetcode.com/problems/top-k-frequent-words/"})}),"\n",(0,n.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Time: O(N)"}),"\n",(0,n.jsx)(t.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from collections import Counter, defaultdict\n\n\nclass Solution:\n    def topKFrequent(self, words: List[str], k: int) -> List[str]:\n        counts = [(-item[1], item[0]) for item in Counter(words).items()]\n        counts.sort()\n        \n        return [item[1] for item in counts[:k]]\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>c});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);