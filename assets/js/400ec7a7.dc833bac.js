"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[17272],{30416:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(74848),r=t(28453);const o={title:"1823. Find the Winner of the Circular Game",sidebar_label:"1823. Find the Winner of the Circular Game",tags:["Leetcode Medium"]},c=void 0,a={id:"leetcode/1501-2000/find_winner_of_circular_game",title:"1823. Find the Winner of the Circular Game",description:"Python",source:"@site/docs/leetcode/1501-2000/1823_find_winner_of_circular_game.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/find_winner_of_circular_game",permalink:"/docs/leetcode/1501-2000/find_winner_of_circular_game",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:1823,frontMatter:{title:"1823. Find the Winner of the Circular Game",sidebar_label:"1823. Find the Winner of the Circular Game",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"1822. Sign of the Product of an Array",permalink:"/docs/leetcode/1501-2000/sign_of_the_product_of_an_array"},next:{title:"1832. Check if the Sentence Is Pangram",permalink:"/docs/leetcode/1501-2000/check_if_the_sentence_is_pangram"}},s={},d=[{value:"Python",id:"python",level:2}];function l(e){const n={code:"code",h2:"h2",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def findTheWinner(self, n: int, k: int) -> int:\n        friends = list(range(n))\n\n        i = 0\n        while len(friends) > 1:\n            i = (i+k-1) % len(friends)\n            print("Remove {} {}".format(i, friends))\n            friends.pop(i)\n\n        return friends[0] + 1\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(96540);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);