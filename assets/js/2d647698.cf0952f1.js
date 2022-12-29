"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[78361],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=(n(67294),n(3905));const i={title:"121. Best Time to Buy and Sell Stock",slidebar_label:"121. Best Time to Buy and Sell Stock",tags:["Leetcode Easy","Go"]},c=void 0,l={unversionedId:"leetcode/1-500/best_time_buy_sell_stock",id:"leetcode/1-500/best_time_buy_sell_stock",title:"121. Best Time to Buy and Sell Stock",description:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",source:"@site/docs/leetcode/1-500/121_best_time_buy_sell_stock.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/best_time_buy_sell_stock",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/121_best_time_buy_sell_stock.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:121,frontMatter:{title:"121. Best Time to Buy and Sell Stock",slidebar_label:"121. Best Time to Buy and Sell Stock",tags:["Leetcode Easy","Go"]},sidebar:"docSidebar",previous:{title:"120. Triangle",permalink:"/docs/leetcode/1-500/triangle"},next:{title:"122. Best Time to Buy and Sell Stock II",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock_ii"}},a={},p=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Top Down DP - Single Variable",id:"top-down-dp---single-variable",level:3},{value:"Go",id:"go",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock"},"https://leetcode.com/problems/best-time-to-buy-and-sell-stock")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        # dp[n][0] as buy price\n        # dp[n][1] as profit\n        dp = [[0, 0] for _ in range(len(prices) + 1)]\n\n        dp[0][0] = float('-inf')\n\n        for i, price in enumerate(prices, start=1):\n            dp[i][0] = max(dp[i-1][0], -price)\n            dp[i][1] = max(dp[i-1][1], dp[i-1][0] + price)\n\n        return dp[-1][1]\n")),(0,o.kt)("h3",{id:"top-down-dp---single-variable"},"Top Down DP - Single Variable"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        max_profit = 0\n        buy_price = None\n\n        for price in prices:\n            buy_price = price if buy_price is None else min(price, buy_price)\n            max_profit = max(max_profit, price - buy_price)\n\n        return max_profit\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func maxProfit(prices []int) int {\n    max_profit := 0\n    buy_price := prices[0]\n\n    for _, price := range prices {\n        if (price < buy_price) {\n            buy_price = price\n        }\n\n        if (price - buy_price > max_profit) {\n            max_profit = price - buy_price\n        }\n    }\n    return max_profit\n}\n")))}u.isMDXComponent=!0}}]);