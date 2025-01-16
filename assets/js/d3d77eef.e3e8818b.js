"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[99462],{16801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"leetcode/1-500/best_time_buy_sell_stock_iv","title":"188. Best Time to Buy and Sell Stock IV","description":"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/","source":"@site/docs/leetcode/1-500/188_best_time_buy_sell_stock_iv.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/best_time_buy_sell_stock_iv","permalink":"/docs/leetcode/1-500/best_time_buy_sell_stock_iv","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":188,"frontMatter":{"title":"188. Best Time to Buy and Sell Stock IV","slidebar_label":"188. Best Time to Buy and Sell Stock IV","tags":["Leetcode Hard","DP"]},"sidebar":"docSidebar","previous":{"title":"187. Repeated DNA Sequences","permalink":"/docs/leetcode/1-500/repeated_dna_sequences"},"next":{"title":"189. Rotate Array","permalink":"/docs/leetcode/1-500/rotate_array"}}');var i=n(74848),s=n(28453);const r={title:"188. Best Time to Buy and Sell Stock IV",slidebar_label:"188. Best Time to Buy and Sell Stock IV",tags:["Leetcode Hard","DP"]},l=void 0,c={},d=[{value:"Python",id:"python",level:2},{value:"Bottom Up DP",id:"bottom-up-dp",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",children:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.h3,{id:"bottom-up-dp",children:"Bottom Up DP"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"3\u7dad\u7684DP"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from math import inf\n\n\nclass Solution:\n    def maxProfit(self, k: int, prices: List[int]) -> int:\n        if not prices or not k:\n            return 0\n\n        dp = [\n            [\n                [-inf]*2 for _ in range(k+1)\n\n            ] for _ in range(len(prices))\n        ]\n\n        dp[0][0][0] = 0\n        dp[0][1][1] = -prices[0]\n\n        for i in range(1, len(prices)):\n            for j in range(k+1):\n                dp[i][j][0] = max(dp[i-1][j][0], dp[i-1][j][1]+prices[i])\n\n                if j > 0:\n                    dp[i][j][1] = max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i])\n\n        return max(dp[len(prices)-1][j][0] for j in range(k+1))\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);