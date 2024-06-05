"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[27859],{26595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=t(74848),i=t(28453);const s={title:"1473. Paint House III",sidebar_label:"1473. Paint House III",tags:["Leetcode Hard","DP"]},r=void 0,c={id:"leetcode/1001-1500/paint_house_iii",title:"1473. Paint House III",description:"https://leetcode.com/problems/paint-house-iii/",source:"@site/docs/leetcode/1001-1500/1473_paint_house_iii.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/paint_house_iii",permalink:"/docs/leetcode/1001-1500/paint_house_iii",draft:!1,unlisted:!1,tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1473,frontMatter:{title:"1473. Paint House III",sidebar_label:"1473. Paint House III",tags:["Leetcode Hard","DP"]},sidebar:"docSidebar",previous:{title:"1470. Shuffle the Array",permalink:"/docs/leetcode/1001-1500/shuffle_the_array"},next:{title:"1480. Running Sum of 1d Array",permalink:"/docs/leetcode/1001-1500/running_sum_of_1d_array"}},l={},a=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/paint-house-iii/",children:"https://leetcode.com/problems/paint-house-iii/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u4e09\u7dad\u7684DP..."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from math import inf\nfrom functools import cache\n\n\nclass Solution:\n    def minCost(self, houses: List[int], costs: List[List[int]], m: int, n: int, target: int) -> int:\n        @cache\n        def dp(i: int, count: int, pre_color: int):\n            if i == len(houses):\n                return 0 if count == target else inf\n\n            if count > target:\n                return inf\n\n            min_cost = inf\n\n            if houses[i] != 0:\n                # The house not yet paint\n                new_count = count + (1 if houses[i] != pre_color else 0)\n                return dp(i+1, new_count, houses[i])\n\n            # The house is painted, go over all possible colors\n            for color in range(1, n+1):\n                new_count = count + (1 if color != pre_color else 0)\n                min_cost = min(\n                    min_cost,\n                    costs[i][color-1] + dp(i+1, new_count, color)\n                )\n\n            return min_cost\n\n        min_cost = dp(0, 0, 0)\n        return min_cost if min_cost != inf else -1\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);