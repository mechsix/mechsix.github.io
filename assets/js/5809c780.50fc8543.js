"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[25215],{70276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(74848),s=t(28453);const i={title:"458. Poor Pigs",sidebar_label:"458. Poor Pigs",tags:["Leetcode Hard","DP"]},c=void 0,r={id:"leetcode/1-500/poor_pigs",title:"458. Poor Pigs",description:"https://leetcode.com/problems/poor-pigs/",source:"@site/docs/leetcode/1-500/458_poor_pigs.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/poor_pigs",permalink:"/docs/leetcode/1-500/poor_pigs",draft:!1,unlisted:!1,tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:458,frontMatter:{title:"458. Poor Pigs",sidebar_label:"458. Poor Pigs",tags:["Leetcode Hard","DP"]},sidebar:"docSidebar",previous:{title:"456. 132 Pattern",permalink:"/docs/leetcode/1-500/p132_pattern"},next:{title:"461. Hamming Distance",permalink:"/docs/leetcode/1-500/hamming_distance"}},l={},d=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Loop",id:"loop",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/poor-pigs/",children:"https://leetcode.com/problems/poor-pigs/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u56e0\u70ba\u9935\u98df\u5f8c\u5230Pig GG\u4e4b\u524d\u4e0d\u80fd\u518d\u5582\u5176\u4ed6\u7684\u8c6c\uff0c\u6240\u4ee5\u7e3d\u5171\u53ef\u4ee5\u57f7\u884c\u7684\u6b65\u6578\u70ba",(0,o.jsx)(n.code,{children:"ToTest/toDie+"}),"\uff0c\u52a01\u662f\u56e0\u70ba\u5de6\u53f3\u754c\u90fd\u9700\u8981\u5305\u542b"]}),"\n",(0,o.jsxs)(n.li,{children:["\u6bcf\u6b21\u9935\u98df\u7684\u8c6c\u96bb\u6578\u91cf\u7684\u6307\u6578\u53ea\u8981\u80fd\u5927\u65bc",(0,o.jsx)(n.code,{children:"buckets"}),"\u4ee3\u8868\u8c6c\u96bb\u6578\u91cf\u8db3\u5920"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:\n        steps = minutesToTest // minutesToDie + 1\n\n        @cache\n        def dp(exp):\n            if steps**exp >= buckets:\n                return 1\n\n            return 1 + dp(exp+1)\n\n        return dp(1) if buckets > 1 else 0\n"})}),"\n",(0,o.jsx)(n.h3,{id:"loop",children:"Loop"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u540c\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8dd1\u8ff4\u5708\u627e\u51fa\u7b2c\u4e00\u500b\u5927\u65bcbuckets\u7684\u6307\u6578\u7d50\u679c\u5c31\u597d"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:\n        steps = minutesToTest // minutesToDie + 1\n\n        pig_count = 0\n        while steps ** pig_count < buckets:\n            pig_count += 1\n\n        return pig_count\n"})})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(96540);const s={},i=o.createContext(s);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);