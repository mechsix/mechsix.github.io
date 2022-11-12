"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[81764],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),h=o,f=s["".concat(l,".").concat(h)]||s[h]||d[h]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43543:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={title:"62. Unique Paths",sidebar_label:"62. Unique Paths",tags:["Leetcode Medium","DP"]},l=void 0,u={unversionedId:"leetcode/1-500/unique_paths",id:"leetcode/1-500/unique_paths",title:"62. Unique Paths",description:"https://leetcode.com/problems/unique-paths/",source:"@site/docs/leetcode/1-500/62_unique_paths.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/unique_paths",permalink:"/docs/leetcode/1-500/unique_paths",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/62_unique_paths.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:62,frontMatter:{title:"62. Unique Paths",sidebar_label:"62. Unique Paths",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"61. Rotate List",permalink:"/docs/leetcode/1-500/rotate_list"},next:{title:"63. Unique Paths II",permalink:"/docs/leetcode/1-500/unique_paths_ii"}},p=[{value:"Python",id:"python",children:[{value:"Top Down DP - Right to Left",id:"top-down-dp---right-to-left",children:[],level:3},{value:"Top Down DP - Left to Right",id:"top-down-dp---left-to-right",children:[],level:3}],level:2},{value:"Go",id:"go",children:[{value:"Top Down DP",id:"top-down-dp",children:[],level:3}],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/unique-paths/"},"https://leetcode.com/problems/unique-paths/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"top-down-dp---right-to-left"},"Top Down DP - Right to Left"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:\n        @cache\n        def dp(row, col):\n            if row == 1 or col == 1:\n                return 1\n            return dp(row-1, col) + dp(row, col-1)\n\n        return dp(m, n)\n")),(0,i.kt)("h3",{id:"top-down-dp---left-to-right"},"Top Down DP - Left to Right"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def uniquePaths(self, m: int, n: int) -> int:        \n        @cache\n        def dp(row, col):\n            if row == m-1 or col == n-1:\n                return 1\n            return dp(row+1, col) + dp(row, col+1)\n\n        return dp(0, 0)\n")),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func uniquePaths(m int, n int) int {\n    cache := make(map[string]int)\n    return dp(m-1, n-1, cache)\n}\n\nfunc dp(row int, col int, cache map[string]int) int {\n    if (row == 0 || col == 0) {\n        return 1\n    }\n    key := fmt.Sprintf("%d:%d", row, col)\n\n    if val, isCached := cache[key]; isCached {\n        return val\n    }\n    \n    cache[key] = dp(row-1, col, cache) + dp(row, col-1, cache)\n    \n    return cache[key]\n}\n')))}s.isMDXComponent=!0}}]);