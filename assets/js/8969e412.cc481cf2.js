"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[10975],{56998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(74848),r=t(28453);const s={title:"1641. Count Sorted Vowel Strings",sidebar_label:"1641. Count Sorted Vowel Strings",tags:["Leetcode Medium","Combinations","DP"]},i=void 0,l={id:"leetcode/1501-2000/count_sorted_vowel_strings",title:"1641. Count Sorted Vowel Strings",description:"https://leetcode.com/problems/count-sorted-vowel-strings/",source:"@site/docs/leetcode/1501-2000/1641_count_sorted_vowel_strings.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/count_sorted_vowel_strings",permalink:"/docs/leetcode/1501-2000/count_sorted_vowel_strings",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Combinations",permalink:"/docs/tags/combinations"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1641,frontMatter:{title:"1641. Count Sorted Vowel Strings",sidebar_label:"1641. Count Sorted Vowel Strings",tags:["Leetcode Medium","Combinations","DP"]},sidebar:"docSidebar",previous:{title:"1631. Path With Minimum Effort",permalink:"/docs/leetcode/1501-2000/path_with_min_effort"},next:{title:"1642. Furthest Building You Can Reach",permalink:"/docs/leetcode/1501-2000/furtuest_building_can_reach"}},c={},d=[{value:"Python",id:"python",level:2},{value:"Use itertools from python",id:"use-itertools-from-python",level:3},{value:"Top-Down DP",id:"top-down-dp",level:3},{value:"Bottom-Up DP",id:"bottom-up-dp",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/count-sorted-vowel-strings/",children:"https://leetcode.com/problems/count-sorted-vowel-strings/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"use-itertools-from-python",children:"Use itertools from python"}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u91cd\u8907\u7d44\u5408\uff0c\u5728python ",(0,o.jsx)(n.code,{children:"itertools"}),"\u4e2d\u6709",(0,o.jsx)(n.code,{children:"combinations_with_replacement"}),"\u53ef\u4ee5\u7528"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from itertools import combinations_with_replacement\n\nclass Solution:\n    def countVowelStrings(self, n: int) -> int:\n        cmbs = [0 for cmb in combinations_with_replacement('aeiou', n)]\n\n        return len(cmbs)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"top-down-dp",children:"Top-Down DP"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def countVowelStrings(self, n: int) -> int:\n        @cache\n        def count(n,vow):\n            if vow == 0:\n                return 0\n            if n == 0:\n                return 1\n            return count(n,vow-1) + count(n-1,vow)\n\n        return count(n,5)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"bottom-up-dp",children:"Bottom-Up DP"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from collections import defaultdict\n\nclass Solution:\n    def countVowelStrings(self, n: int) -> int:\n        dp = defaultdict(dict)\n\n        for vowel in range(1, 6):\n            dp[1][vowel] = vowel\n\n        for value in range(2, n+1):\n            dp[value][1] = 1\n            for vowel in range(2, 6):\n                dp[value][vowel] = dp[value][vowel-1] + dp[value-1][vowel]\n\n        return dp[n][5]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);