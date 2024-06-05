"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[26060],{55873:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=o(74848),c=o(28453);const i={title:"406. Queue Reconstruction by Height",sidebar_label:"406. Queue Reconstruction by Height",tags:["Leetcode Medium","Greedy"]},s=void 0,r={id:"leetcode/1-500/queue_reconstruction_by_height",title:"406. Queue Reconstruction by Height",description:"https://leetcode.com/problems/queue-reconstruction-by-height/solution/",source:"@site/docs/leetcode/1-500/406_queue_reconstruction_by_height.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/queue_reconstruction_by_height",permalink:"/docs/leetcode/1-500/queue_reconstruction_by_height",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:406,frontMatter:{title:"406. Queue Reconstruction by Height",sidebar_label:"406. Queue Reconstruction by Height",tags:["Leetcode Medium","Greedy"]},sidebar:"docSidebar",previous:{title:"404. Sum of Left Leaf",permalink:"/docs/leetcode/1-500/left_leaf_sum"},next:{title:"409. Longest Palindrome",permalink:"/docs/leetcode/1-500/longest_palindrome"}},u={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/queue-reconstruction-by-height/solution/",children:"https://leetcode.com/problems/queue-reconstruction-by-height/solution/"})}),"\n",(0,n.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\n        people.sort(key=lambda p: (-p[0], p[1]))\n\n        queue = []\n        for p in people:\n            queue.insert(p[1], p)\n        return queue\n"})})]})}function a(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var n=o(96540);const c={},i=n.createContext(c);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);