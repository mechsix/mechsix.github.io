"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=a(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2918:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],l={title:"122. Best Time to Buy and Sell Stock II",slidebar_label:"122. Best Time to Buy and Sell Stock II",tags:["Leetcode Medium","Two Pointer"]},s=void 0,a={unversionedId:"leetcode/1-500/best_time_buy_sell_stock_ii",id:"leetcode/1-500/best_time_buy_sell_stock_ii",title:"122. Best Time to Buy and Sell Stock II",description:"Python",source:"@site/docs/leetcode/1-500/122_best_time_buy_sell_stock_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/best_time_buy_sell_stock_ii",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/122_best_time_buy_sell_stock_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:122,frontMatter:{title:"122. Best Time to Buy and Sell Stock II",slidebar_label:"122. Best Time to Buy and Sell Stock II",tags:["Leetcode Medium","Two Pointer"]},sidebar:"docSidebar",previous:{title:"121. Best Time to Buy and Sell Stock",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock"},next:{title:"130. Surrounded Regions",permalink:"/docs/leetcode/1-500/surrounded_regions"}},u=[{value:"Python",id:"python",children:[],level:2},{value:"Go",id:"go",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxProfit(self, prices: List[int]) -> int:\n        total_profit = 0\n        profit = 0\n\n        b, s = 0, 0\n\n        while s < len(prices):\n            if prices[s] > prices[b]:\n                profit = max(profit, prices[s] - prices[b])\n                b = s\n            else:\n                total_profit += profit\n                profit = 0\n                b = s\n                s += 1\n\n        return total_profit\n")),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func maxProfit(prices []int) int {\n    total_profit := 0\n    profit := 0\n    b := 0\n    s := 0\n\n    for s < len(prices) {\n        if prices[s] > prices[b] {\n            if prices[s] - prices[b] > profit {\n                profit = prices[s] - prices[b]\n                b = s\n            }\n        } else {\n            total_profit += profit\n            profit = 0\n            b = s\n            s += 1\n        }\n    }\n    return total_profit\n}\n")))}f.isMDXComponent=!0}}]);