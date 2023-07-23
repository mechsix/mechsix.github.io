"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[85866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"2140. Solving Questions With Brainpower",sidebar_label:"2140. Solving Questions With Brainpower",tags:["Leetcode Medium","DP"]},s=void 0,a={unversionedId:"leetcode/2000/solving_questions_with_brainpower",id:"leetcode/2000/solving_questions_with_brainpower",title:"2140. Solving Questions With Brainpower",description:"https://leetcode.com/problems/solving-questions-with-brainpower/",source:"@site/docs/leetcode/2000/2140_solving_questions_with_brainpower.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/solving_questions_with_brainpower",permalink:"/docs/leetcode/2000/solving_questions_with_brainpower",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2140_solving_questions_with_brainpower.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:2140,frontMatter:{title:"2140. Solving Questions With Brainpower",sidebar_label:"2140. Solving Questions With Brainpower",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"2136. Earliest Possible Day of Full Bloom",permalink:"/docs/leetcode/2000/earliest_possible_day_of_full_bloom"},next:{title:"2215. Find the Difference of Two Arrays",permalink:"/docs/leetcode/2000/find_the_difference_of_two_arrays"}},l={},p=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Bottom Up DP",id:"bottom-up-dp",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/solving-questions-with-brainpower/"},"https://leetcode.com/problems/solving-questions-with-brainpower/")),(0,r.kt)("h2",{id:"python"},"Python"),(0,r.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def mostPoints(self, questions: List[List[int]]) -> int:\n        @cache\n        def dfs(i):\n            if i >= len(questions):\n                return 0\n            point, skip_step = questions[i][0], questions[i][1]\n            take = dfs(i+skip_step+1) + point\n            skip = dfs(i+1)\n\n            return max(take, skip)\n        \n        return dfs(0)\n")),(0,r.kt)("h3",{id:"bottom-up-dp"},"Bottom Up DP"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def mostPoints(self, questions: List[List[int]]) -> int:\n        n = len(questions)\n        dp = [0] * (n+1)\n\n        for i in range(n-1, -1, -1):\n            take = questions[i][0]\n            skip = questions[i][1]\n\n            next_ques = min(n, i+skip+1)\n            dp[i] = max(dp[i+1], take + dp[next_ques])\n\n        return dp[0]\n")))}d.isMDXComponent=!0}}]);