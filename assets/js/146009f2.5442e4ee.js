"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37735],{3102:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"leetcode/1-500/best_time_buy_sell_stock_ii","title":"122. Best Time to Buy and Sell Stock II","description":"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii","source":"@site/docs/leetcode/1-500/122_best_time_buy_sell_stock_ii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/best_time_buy_sell_stock_ii","permalink":"/docs/leetcode/1-500/best_time_buy_sell_stock_ii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Two Pointer","permalink":"/docs/tags/two-pointer"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":122,"frontMatter":{"title":"122. Best Time to Buy and Sell Stock II","slidebar_label":"122. Best Time to Buy and Sell Stock II","tags":["Leetcode Medium","Two Pointer","Go"]},"sidebar":"docSidebar","previous":{"title":"121. Best Time to Buy and Sell Stock","permalink":"/docs/leetcode/1-500/best_time_buy_sell_stock"},"next":{"title":"125. Valid Palindrome","permalink":"/docs/leetcode/1-500/valid_palindrome"}}');var i=o(74848),s=o(28453);const l={title:"122. Best Time to Buy and Sell Stock II",slidebar_label:"122. Best Time to Buy and Sell Stock II",tags:["Leetcode Medium","Two Pointer","Go"]},r=void 0,c={},a=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",children:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        total_profit = 0\n        profit = 0\n\n        b, s = 0, 0\n\n        while s < len(prices):\n            if prices[s] > prices[b]:\n                profit = max(profit, prices[s] - prices[b])\n                b = s\n            else:\n                total_profit += profit\n                profit = 0\n                b = s\n                s += 1\n\n        return total_profit\n"})}),"\n",(0,i.jsx)(t.h2,{id:"go",children:"Go"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"func maxProfit(prices []int) int {\n    total_profit := 0\n    profit := 0\n    b := 0\n    s := 0\n\n    for s < len(prices) {\n        if prices[s] > prices[b] {\n            if prices[s] - prices[b] > profit {\n                profit = prices[s] - prices[b]\n                b = s\n            }\n        } else {\n            total_profit += profit\n            profit = 0\n            b = s\n            s += 1\n        }\n    }\n    return total_profit\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>r});var n=o(96540);const i={},s=n.createContext(i);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);