"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"983. Minimum Cost For Tickets",sidebar_label:"983. Minimum Cost For Tickets",tags:["Leetcode Medium","DP"]},s=void 0,c={unversionedId:"leetcode/501-1000/min_cost_for_tickets",id:"leetcode/501-1000/min_cost_for_tickets",title:"983. Minimum Cost For Tickets",description:"https://leetcode.com/problems/minimum-cost-for-tickets/",source:"@site/docs/leetcode/501-1000/983_min_cost_for_tickets.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/min_cost_for_tickets",permalink:"/docs/leetcode/501-1000/min_cost_for_tickets",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/983_min_cost_for_tickets.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:983,frontMatter:{title:"983. Minimum Cost For Tickets",sidebar_label:"983. Minimum Cost For Tickets",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"981. Time Based Key-Value Store",permalink:"/docs/leetcode/501-1000/time_based_key_value_store"},next:{title:"985. Sum of Even Numbers After Queries",permalink:"/docs/leetcode/501-1000/sum_of_even_nums_after_queries"}},a={},l=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Javascript",id:"javascript",level:2}],m={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-cost-for-tickets/"},"https://leetcode.com/problems/minimum-cost-for-tickets/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\nfrom math import inf\n\n\nclass Solution:\n    def mincostTickets(self, days: List[int], costs: List[int]) -> int:\n        durations = [1, 7, 30]\n\n        @cache\n        def dp(i):\n            if i >= len(days):\n                return 0\n\n            ans = inf\n            j = i\n            for cost, duration in zip(costs, durations):\n                while j < len(days) and days[j] < days[i]+duration:\n                    j += 1\n                ans = min(ans, dp(j)+cost)\n            return ans\n\n        return dp(0)\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * @param {number[]} days\n * @param {number[]} costs\n * @return {number}\n */\nvar mincostTickets = function(days, costs) {\n    const memo = {};\n    const dp = (i) => {\n        if (i === days.length) return 0;\n        if (memo.hasOwnProperty(i)) return memo[i];\n        \n        let min = Infinity;\n        const steps = [1,7,30];\n        for (let j = 0; j < costs.length; j++) {\n            const cost = costs[j];\n            let k = i;\n            while (k < days.length && days[k] < days[i] + steps[j]) {\n                k++;\n            }\n            \n            min = Math.min(min, cost + dp(k))\n        }\n        \n        return memo[i] = min;\n    }\n    \n    return dp(0);\n};\n")))}p.isMDXComponent=!0}}]);