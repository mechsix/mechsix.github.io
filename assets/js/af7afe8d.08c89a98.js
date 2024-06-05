"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[57969],{59652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(74848),i=t(28453);const s={title:"2140. Solving Questions With Brainpower",sidebar_label:"2140. Solving Questions With Brainpower",tags:["Leetcode Medium","DP"]},r=void 0,l={id:"leetcode/2000/solving_questions_with_brainpower",title:"2140. Solving Questions With Brainpower",description:"https://leetcode.com/problems/solving-questions-with-brainpower/",source:"@site/docs/leetcode/2000/2140_solving_questions_with_brainpower.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/solving_questions_with_brainpower",permalink:"/docs/leetcode/2000/solving_questions_with_brainpower",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:2140,frontMatter:{title:"2140. Solving Questions With Brainpower",sidebar_label:"2140. Solving Questions With Brainpower",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"2136. Earliest Possible Day of Full Bloom",permalink:"/docs/leetcode/2000/earliest_possible_day_of_full_bloom"},next:{title:"2141. Maximum Running Time of N Computers",permalink:"/docs/leetcode/2000/max_running_time_of_n_computers"}},d={},c=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Bottom Up DP",id:"bottom-up-dp",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/solving-questions-with-brainpower/",children:"https://leetcode.com/problems/solving-questions-with-brainpower/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def mostPoints(self, questions: List[List[int]]) -> int:\n        @cache\n        def dfs(i):\n            if i >= len(questions):\n                return 0\n            point, skip_step = questions[i][0], questions[i][1]\n            take = dfs(i+skip_step+1) + point\n            skip = dfs(i+1)\n\n            return max(take, skip)\n        \n        return dfs(0)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"bottom-up-dp",children:"Bottom Up DP"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def mostPoints(self, questions: List[List[int]]) -> int:\n        n = len(questions)\n        dp = [0] * (n+1)\n\n        for i in range(n-1, -1, -1):\n            take = questions[i][0]\n            skip = questions[i][1]\n\n            next_ques = min(n, i+skip+1)\n            dp[i] = max(dp[i+1], take + dp[next_ques])\n\n        return dp[0]\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);