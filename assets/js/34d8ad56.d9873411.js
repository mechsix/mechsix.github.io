"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[81764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),h=o,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"62. Unique Paths",sidebar_label:"62. Unique Paths",tags:["Leetcode Medium","DP","Go"]},a=void 0,c={unversionedId:"leetcode/1-500/unique_paths",id:"leetcode/1-500/unique_paths",title:"62. Unique Paths",description:"https://leetcode.com/problems/unique-paths/",source:"@site/docs/leetcode/1-500/62_unique_paths.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/unique_paths",permalink:"/docs/leetcode/1-500/unique_paths",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/62_unique_paths.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:62,frontMatter:{title:"62. Unique Paths",sidebar_label:"62. Unique Paths",tags:["Leetcode Medium","DP","Go"]},sidebar:"docSidebar",previous:{title:"61. Rotate List",permalink:"/docs/leetcode/1-500/rotate_list"},next:{title:"63. Unique Paths II",permalink:"/docs/leetcode/1-500/unique_paths_ii"}},l={},p=[{value:"Python",id:"python",level:2},{value:"Top Down DP - Right to Left",id:"top-down-dp---right-to-left",level:3},{value:"Top Down DP - Left to Right",id:"top-down-dp---left-to-right",level:3},{value:"Go",id:"go",level:2},{value:"Top Down DP",id:"top-down-dp",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/unique-paths/"},"https://leetcode.com/problems/unique-paths/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"top-down-dp---right-to-left"},"Top Down DP - Right to Left"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        @cache\n        def dp(row, col):\n            if row == 1 or col == 1:\n                return 1\n            return dp(row-1, col) + dp(row, col-1)\n\n        return dp(m, n)\n")),(0,o.kt)("h3",{id:"top-down-dp---left-to-right"},"Top Down DP - Left to Right"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        @cache\n        def dp(row, col):\n            if row == m-1 or col == n-1:\n                return 1\n            return dp(row+1, col) + dp(row, col+1)\n\n        return dp(0, 0)\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func uniquePaths(m int, n int) int {\n    cache := make(map[string]int)\n    return dp(m-1, n-1, cache)\n}\n\nfunc dp(row int, col int, cache map[string]int) int {\n    if (row == 0 || col == 0) {\n        return 1\n    }\n    key := fmt.Sprintf("%d:%d", row, col)\n\n    if val, isCached := cache[key]; isCached {\n        return val\n    }\n\n    cache[key] = dp(row-1, col, cache) + dp(row, col-1, cache)\n\n    return cache[key]\n}\n')))}d.isMDXComponent=!0}}]);