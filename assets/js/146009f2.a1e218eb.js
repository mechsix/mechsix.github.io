"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[16044],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=a(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return a}});var r=n(83117),o=(n(67294),n(3905));const i={title:"122. Best Time to Buy and Sell Stock II",slidebar_label:"122. Best Time to Buy and Sell Stock II",tags:["Leetcode Medium","Two Pointer","Go"]},l=void 0,s={unversionedId:"leetcode/1-500/best_time_buy_sell_stock_ii",id:"leetcode/1-500/best_time_buy_sell_stock_ii",title:"122. Best Time to Buy and Sell Stock II",description:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",source:"@site/docs/leetcode/1-500/122_best_time_buy_sell_stock_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/best_time_buy_sell_stock_ii",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/122_best_time_buy_sell_stock_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:122,frontMatter:{title:"122. Best Time to Buy and Sell Stock II",slidebar_label:"122. Best Time to Buy and Sell Stock II",tags:["Leetcode Medium","Two Pointer","Go"]},sidebar:"docSidebar",previous:{title:"121. Best Time to Buy and Sell Stock",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock"},next:{title:"125. Valid Palindrome",permalink:"/docs/leetcode/1-500/valid_palindrome"}},c={},a=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],p={toc:a};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii"},"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        total_profit = 0\n        profit = 0\n\n        b, s = 0, 0\n\n        while s < len(prices):\n            if prices[s] > prices[b]:\n                profit = max(profit, prices[s] - prices[b])\n                b = s\n            else:\n                total_profit += profit\n                profit = 0\n                b = s\n                s += 1\n\n        return total_profit\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func maxProfit(prices []int) int {\n    total_profit := 0\n    profit := 0\n    b := 0\n    s := 0\n\n    for s < len(prices) {\n        if prices[s] > prices[b] {\n            if prices[s] - prices[b] > profit {\n                profit = prices[s] - prices[b]\n                b = s\n            }\n        } else {\n            total_profit += profit\n            profit = 0\n            b = s\n            s += 1\n        }\n    }\n    return total_profit\n}\n")))}u.isMDXComponent=!0}}]);