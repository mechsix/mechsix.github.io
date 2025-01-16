"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94543],{14134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/1-500/best_time_buy_sell_stock","title":"121. Best Time to Buy and Sell Stock","description":"https://leetcode.com/problems/best-time-to-buy-and-sell-stock","source":"@site/docs/leetcode/1-500/121_best_time_buy_sell_stock.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/best_time_buy_sell_stock","permalink":"/docs/leetcode/1-500/best_time_buy_sell_stock","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":121,"frontMatter":{"title":"121. Best Time to Buy and Sell Stock","slidebar_label":"121. Best Time to Buy and Sell Stock","tags":["Leetcode Easy","Go"]},"sidebar":"docSidebar","previous":{"title":"120. Triangle","permalink":"/docs/leetcode/1-500/triangle"},"next":{"title":"122. Best Time to Buy and Sell Stock II","permalink":"/docs/leetcode/1-500/best_time_buy_sell_stock_ii"}}');var o=n(74848),s=n(28453);const r={title:"121. Best Time to Buy and Sell Stock",slidebar_label:"121. Best Time to Buy and Sell Stock",tags:["Leetcode Easy","Go"]},c=void 0,l={},a=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Top Down DP - Single Variable",id:"top-down-dp---single-variable",level:3},{value:"Go",id:"go",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",children:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # dp[n][0] as buy price\n        # dp[n][1] as profit\n        dp = [[0, 0] for _ in range(len(prices) + 1)]\n\n        dp[0][0] = float('-inf')\n\n        for i, price in enumerate(prices, start=1):\n            dp[i][0] = max(dp[i-1][0], -price)\n            dp[i][1] = max(dp[i-1][1], dp[i-1][0] + price)\n\n        return dp[-1][1]\n"})}),"\n",(0,o.jsx)(t.h3,{id:"top-down-dp---single-variable",children:"Top Down DP - Single Variable"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        max_profit = 0\n        buy_price = None\n\n        for price in prices:\n            buy_price = price if buy_price is None else min(price, buy_price)\n            max_profit = max(max_profit, price - buy_price)\n\n        return max_profit\n"})}),"\n",(0,o.jsx)(t.h2,{id:"go",children:"Go"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"func maxProfit(prices []int) int {\n    max_profit := 0\n    buy_price := prices[0]\n\n    for _, price := range prices {\n        if (price < buy_price) {\n            buy_price = price\n        }\n\n        if (price - buy_price > max_profit) {\n            max_profit = price - buy_price\n        }\n    }\n    return max_profit\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);