"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[81228],{63522:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var n=o(74848),i=o(28453);const a={title:"1318. Minimum Flips to Make a OR b Equal to c",sidebar_label:"1318. Minimum Flips to Make a OR b Equal to c",tags:["Leetcode Medium","Bit Manipulation"]},c=void 0,l={id:"leetcode/1001-1500/min_flips_to_make_a_or_b_equal_c",title:"1318. Minimum Flips to Make a OR b Equal to c",description:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c",source:"@site/docs/leetcode/1001-1500/1318_min_flips_to_make_a_or_b_equal_c.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/min_flips_to_make_a_or_b_equal_c",permalink:"/docs/leetcode/1001-1500/min_flips_to_make_a_or_b_equal_c",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:1318,frontMatter:{title:"1318. Minimum Flips to Make a OR b Equal to c",sidebar_label:"1318. Minimum Flips to Make a OR b Equal to c",tags:["Leetcode Medium","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"1306. Jump Game III",permalink:"/docs/leetcode/1001-1500/jump_game_iii"},next:{title:"1328. Break a Palindrome",permalink:"/docs/leetcode/1001-1500/break_palindrome"}},s={},r=[{value:"Python",id:"python",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c",children:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c"})}),"\n",(0,n.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"class Solution(object):\n    def minFlips(self, a, b, c):\n        count = 0\n        for i in range(31):\n            if not (c >> i) & 1:\n                count += (a >> i) & 1\n                count += (b >> i) & 1\n                continue\n\n            if ((a >> i) & 1) == 0 and ((b >> i) & 1) == 0:\n                count += 1\n\n        return count\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>l});var n=o(96540);const i={},a=n.createContext(i);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);