"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[33993],{3905:function(t,n,e){e.d(n,{Zo:function(){return m},kt:function(){return s}});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=a.createContext({}),u=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=u(t.components);return a.createElement(p.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(e),s=r,g=d["".concat(p,".").concat(s)]||d[s]||c[s]||l;return e?a.createElement(g,i(i({ref:n},m),{},{components:e})):a.createElement(g,i({ref:n},m))}));function s(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=e[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},80392:function(t,n,e){e.r(n),e.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=e(87462),r=e(63366),l=(e(67294),e(3905)),i=["components"],o={title:"322. Coin Change",sidebar_label:"322. Coin Change",tags:["Leetcode Medium","DP"]},p=void 0,u={unversionedId:"leetcode/1-500/coin_change",id:"leetcode/1-500/coin_change",title:"322. Coin Change",description:"https://leetcode.com/problems/coin-change/",source:"@site/docs/leetcode/1-500/322_coin_change.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/coin_change",permalink:"/docs/leetcode/1-500/coin_change",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/322_coin_change.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:322,frontMatter:{title:"322. Coin Change",sidebar_label:"322. Coin Change",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"318. Maximum Product of Word Lengths",permalink:"/docs/leetcode/1-500/maximum_product_of_word_lengths"},next:{title:"236. Lowest Common Ancestor of a Binary Tree",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bt"}},m=[{value:"Python",id:"python",children:[{value:"Bottom-up DP",id:"bottom-up-dp",children:[],level:3},{value:"Top-down DP",id:"top-down-dp",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],c={toc:m};function d(t){var n=t.components,e=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/coin-change/"},"https://leetcode.com/problems/coin-change/")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("h3",{id:"bottom-up-dp"},"Bottom-up DP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Time: O(amount * C)"),(0,l.kt)("li",{parentName:"ul"},"Space: O(amount)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"coin\\amount"),(0,l.kt)("th",{parentName:"tr",align:null},"0"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"3"),(0,l.kt)("th",{parentName:"tr",align:null},"4"),(0,l.kt)("th",{parentName:"tr",align:null},"5"),(0,l.kt)("th",{parentName:"tr",align:null},"6"),(0,l.kt)("th",{parentName:"tr",align:null},"7"),(0,l.kt)("th",{parentName:"tr",align:null},"8"),(0,l.kt)("th",{parentName:"tr",align:null},"9"),(0,l.kt)("th",{parentName:"tr",align:null},"10"),(0,l.kt)("th",{parentName:"tr",align:null},"11"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00",textDecoration:"underline"}},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00",textDecoration:"underline"}},"2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"4")),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"3")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00"}},"5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00",textDecoration:"underline"}},"2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{color:"#f00",textDecoration:"underline"}},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2")))),(0,l.kt)("p",null,"\u6b78\u7d0d\u6b64\u8868\u5f97\u77e5\uff0c\u67d0\u500bcell\u7684value\u4f86\u81ea\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"pre_row[col - amount] + 1")),(0,l.kt)("p",null,"\u8a73\u89e3\u53c3\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Y0ZqKpToTic"},"https://www.youtube.com/watch?v=Y0ZqKpToTic")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        mapper = [inf] * (amount+1)\n\n        mapper[0] = 0\n        for i in range(1, amount+1):\n            for coin in coins:\n                if i >= coin:\n                    mapper[i] = min(mapper[i], mapper[i-coin]+1)\n\n        if mapper[amount] == inf:\n            return -1\n\n        return mapper[amount]\n")),(0,l.kt)("h3",{id:"top-down-dp"},"Top-down DP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        if amount < 1:\n            return 0\n\n        dp = [0]*(amount+1)\n\n        def dfs(remains):\n            if remains < 0:\n                return -1\n            if remains == 0:\n                return 0\n\n            nonlocal dp\n\n            if dp[remains] != 0:\n                return dp[remains]\n\n            cur_min = inf\n            for coin in coins:\n                result = dfs(remains-coin)\n                if result >= 0 and result < cur_min:\n                    cur_min = 1 + result\n            dp[remains] = -1 if cur_min == inf else cur_min\n\n            return dp[remains]\n\n        return dfs(amount)\n")),(0,l.kt)("h2",{id:"javascript"},"Javascript"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var coinChange = function(coins, amount) {\n    const dp = [0];\n    for (let i = 1; i <= amount; i++) {\n      let tmp = Infinity;\n      for (const coin of coins) {\n        const remain = i - coin;\n        if (remain >= 0 && dp[remain] >= 0) {\n          tmp = Math.min(dp[remain] + 1, tmp);\n        }\n      }\n      dp[i] = tmp === Infinity ? -1 : tmp;\n    }\n    return dp[amount]\n};\n")))}d.isMDXComponent=!0}}]);