"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[50068],{48722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=n(74848),l=n(28453);const i={title:"120. Triangle",slidebar_label:"120. Triangle",tags:["Leetcode Medium","DP"]},r=void 0,c={id:"leetcode/1-500/triangle",title:"120. Triangle",description:"Python",source:"@site/docs/leetcode/1-500/120_triangle.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/triangle",permalink:"/docs/leetcode/1-500/triangle",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:120,frontMatter:{title:"120. Triangle",slidebar_label:"120. Triangle",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"119. Pascal's Triangle II",permalink:"/docs/leetcode/1-500/pascal_triangle_II"},next:{title:"121. Best Time to Buy and Sell Stock",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock"}},s={},a=[{value:"Python",id:"python",level:2},{value:"Top-Down DP",id:"top-down-dp",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.h3,{id:"top-down-dp",children:"Top-Down DP"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def minimumTotal(self, triangle: List[List[int]]) -> int:\n        @cache\n        def dp(level, col):\n            total = triangle[level][col]\n            if level == len(triangle)-1:\n                return total\n\n            return total + min(dp(level+1, col), dp(level+1, col+1))\n\n        return dp(0, 0)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const l={},i=o.createContext(l);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);