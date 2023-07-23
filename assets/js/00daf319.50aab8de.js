"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[57484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(r),h=a,u=f["".concat(s,".").concat(h)]||f[h]||p[h]||o;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},58769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"2246. Longest Path With Different Adjacent Characters",sidebar_label:"2246. Longest Path With Different Adjacent Characters",tags:["Leetcode Hard","Tree","Hash"]},i=void 0,c={unversionedId:"leetcode/2000/longest_path_with_different_adjacent_chars",id:"leetcode/2000/longest_path_with_different_adjacent_chars",title:"2246. Longest Path With Different Adjacent Characters",description:"https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/",source:"@site/docs/leetcode/2000/2246_longest_path_with_different_adjacent_chars.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/longest_path_with_different_adjacent_chars",permalink:"/docs/leetcode/2000/longest_path_with_different_adjacent_chars",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2246_longest_path_with_different_adjacent_chars.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Tree",permalink:"/docs/tags/tree"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:2246,frontMatter:{title:"2246. Longest Path With Different Adjacent Characters",sidebar_label:"2246. Longest Path With Different Adjacent Characters",tags:["Leetcode Hard","Tree","Hash"]},sidebar:"docSidebar",previous:{title:"2215. Find the Difference of Two Arrays",permalink:"/docs/leetcode/2000/find_the_difference_of_two_arrays"},next:{title:"2305. Fair Distribution of Cookies",permalink:"/docs/leetcode/2000/fair_distribution_of_cookies"}},s={},l=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3}],d={toc:l},f="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/"},"https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"dfs"},"DFS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\nclass Solution:\n    def longestPath(self, parent: List[int], s: str) -> int:\n        mapper = defaultdict(set)\n        for i, p in enumerate(parent):\n            mapper[p].add(i)\n\n        def dfs(node):\n            first, second = 0, 0\n            for child in mapper[node]:\n                child_path = dfs(child)\n                if s[child] == s[node]:\n                    continue\n\n                if child_path >= first:\n                    first, second = child_path, first\n                elif child_path > second:\n                    second = child_path\n            self.ans = max(self.ans, 1+first+second)\n            return 1 + first\n        self.ans = 0\n\n        dfs(0)\n        return self.ans\n")))}p.isMDXComponent=!0}}]);