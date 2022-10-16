"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[91520],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,s=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(s,a(a({ref:t},f),{},{components:n})):r.createElement(s,a({ref:t},f))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77499:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"1335. Minimum Difficulty of a Job Schedule",sidebar_label:"1335. Minimum Difficulty of a Job Schedule",tags:["Leetcode Hard","Prefix Sum","DP"]},c=void 0,u={unversionedId:"leetcode/1001-1500/min_difficulty_of_job_schedule",id:"leetcode/1001-1500/min_difficulty_of_job_schedule",title:"1335. Minimum Difficulty of a Job Schedule",description:"Python",source:"@site/docs/leetcode/1001-1500/1335_min_difficulty_of_job_schedule.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/min_difficulty_of_job_schedule",permalink:"/docs/leetcode/1001-1500/min_difficulty_of_job_schedule",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1335_min_difficulty_of_job_schedule.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Prefix Sum",permalink:"/docs/tags/prefix-sum"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1335,frontMatter:{title:"1335. Minimum Difficulty of a Job Schedule",sidebar_label:"1335. Minimum Difficulty of a Job Schedule",tags:["Leetcode Hard","Prefix Sum","DP"]},sidebar:"docSidebar",previous:{title:"1332. Remove Palindromic Subsequences",permalink:"/docs/leetcode/1001-1500/remove_palindromic_subsequences"},next:{title:"1337. The K Weakest Rows in a Matrix",permalink:"/docs/leetcode/1001-1500/k_weakest_rows_in_matrix"}},f=[{value:"Python",id:"python",children:[{value:"Top Down DP",id:"top-down-dp",children:[],level:3}],level:2}],d={toc:f};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Time: O(N*",(0,o.kt)("em",{parentName:"p"},"2 ")," d)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Space: O(N*",(0,o.kt)("em",{parentName:"p"},"2 ")," d)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9810\u5148\u505aprefix sum\u62ff\u51fa\u6bcf\u500b",(0,o.kt)("inlineCode",{parentName:"p"},"index"),"\u5f80\u53f3\u770b\u6700\u5927\u7684\u503c\uff0c\u7528\u4ee5\u6c7a\u5b9a\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"index"),"\u6642\u7684difficulty")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DP\u8981\u8dd1\u6240\u6709\u53ef\u80fd\uff0c\u4f46\u53ea\u7528\u4e00\u500b\u8b8a\u6578(diff)\u5b58\uff0c\u610f\u7fa9\u4e0a\u662f2D DP\u7684\u964d\u7dad\u6253\u64ca"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\nclass Solution:\n    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:\n        length = len(jobDifficulty)\n\n        if length < d:\n            return -1\n\n        max_remaing = jobDifficulty[:]\n        for i in range(length-2, -1, -1):\n            max_remaing[i] = max(max_remaing[i], max_remaing[i + 1])\n\n        @cache\n        def dp(i, remains):\n            if remains == 1:\n                return max_remaing[i]\n\n            res = inf\n            diff = 0\n\n            for j in range(i, length-remains+1):\n                diff = max(diff, jobDifficulty[j])\n                res = min(res, diff + dp(j+1, remains-1))\n\n            return res\n\n        return dp(0, d)\n")))}m.isMDXComponent=!0}}]);