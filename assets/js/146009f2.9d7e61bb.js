"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[16044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=a(r),m=o,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=r[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const i={title:"122. Best Time to Buy and Sell Stock II",slidebar_label:"122. Best Time to Buy and Sell Stock II",tags:["Leetcode Medium","Two Pointer","Go"]},l=void 0,s={unversionedId:"leetcode/1-500/best_time_buy_sell_stock_ii",id:"leetcode/1-500/best_time_buy_sell_stock_ii",title:"122. Best Time to Buy and Sell Stock II",description:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",source:"@site/docs/leetcode/1-500/122_best_time_buy_sell_stock_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/best_time_buy_sell_stock_ii",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/122_best_time_buy_sell_stock_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:122,frontMatter:{title:"122. Best Time to Buy and Sell Stock II",slidebar_label:"122. Best Time to Buy and Sell Stock II",tags:["Leetcode Medium","Two Pointer","Go"]},sidebar:"docSidebar",previous:{title:"121. Best Time to Buy and Sell Stock",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock"},next:{title:"125. Valid Palindrome",permalink:"/docs/leetcode/1-500/valid_palindrome"}},c={},a=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],p={toc:a},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii"},"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        total_profit = 0\n        profit = 0\n\n        b, s = 0, 0\n\n        while s < len(prices):\n            if prices[s] > prices[b]:\n                profit = max(profit, prices[s] - prices[b])\n                b = s\n            else:\n                total_profit += profit\n                profit = 0\n                b = s\n                s += 1\n\n        return total_profit\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func maxProfit(prices []int) int {\n    total_profit := 0\n    profit := 0\n    b := 0\n    s := 0\n\n    for s < len(prices) {\n        if prices[s] > prices[b] {\n            if prices[s] - prices[b] > profit {\n                profit = prices[s] - prices[b]\n                b = s\n            }\n        } else {\n            total_profit += profit\n            profit = 0\n            b = s\n            s += 1\n        }\n    }\n    return total_profit\n}\n")))}d.isMDXComponent=!0}}]);