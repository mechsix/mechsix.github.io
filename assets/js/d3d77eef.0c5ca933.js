"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[7997],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85188:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],l={title:"188. Best Time to Buy and Sell Stock IV",slidebar_label:"188. Best Time to Buy and Sell Stock IV",tags:["Leetcode Hard","DP"]},a=void 0,s={unversionedId:"leetcode/1-500/best_time_buy_sell_stock_iv",id:"leetcode/1-500/best_time_buy_sell_stock_iv",title:"188. Best Time to Buy and Sell Stock IV",description:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",source:"@site/docs/leetcode/1-500/188_best_time_buy_sell_stock_iv.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/best_time_buy_sell_stock_iv",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock_iv",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/188_best_time_buy_sell_stock_iv.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:188,frontMatter:{title:"188. Best Time to Buy and Sell Stock IV",slidebar_label:"188. Best Time to Buy and Sell Stock IV",tags:["Leetcode Hard","DP"]},sidebar:"docSidebar",previous:{title:"187. Repeated DNA Sequences",permalink:"/docs/leetcode/1-500/repeated_dna_sequences"},next:{title:"189. Rotate Array",permalink:"/docs/leetcode/1-500/rotate_array"}},p=[{value:"Python",id:"python",children:[{value:"Bottom Up DP",id:"bottom-up-dp",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"},"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"bottom-up-dp"},"Bottom Up DP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"3\u7dad\u7684DP")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def maxProfit(self, k: int, prices: List[int]) -> int:\n        if not prices or not k:\n            return 0\n\n        dp = [\n            [\n                [-inf]*2 for _ in range(k+1)\n\n            ] for _ in range(len(prices))\n        ]\n\n        dp[0][0][0] = 0\n        dp[0][1][1] = -prices[0]\n\n        for i in range(1, len(prices)):\n            for j in range(k+1):\n                dp[i][j][0] = max(dp[i-1][j][0], dp[i-1][j][1]+prices[i])\n\n                if j > 0:\n                    dp[i][j][1] = max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i])\n\n        return max(dp[len(prices)-1][j][0] for j in range(k+1))\n")))}d.isMDXComponent=!0}}]);