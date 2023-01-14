"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[57484],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=l(n),h=a,u=f["".concat(s,".").concat(h)]||f[h]||p[h]||o;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=n(83117),a=(n(67294),n(3905));const o={title:"2246. Longest Path With Different Adjacent Characters",sidebar_label:"2246. Longest Path With Different Adjacent Characters",tags:["Leetcode Hard","Tree","Hash"]},i=void 0,c={unversionedId:"leetcode/2000/longest_path_with_different_adjacent_chars",id:"leetcode/2000/longest_path_with_different_adjacent_chars",title:"2246. Longest Path With Different Adjacent Characters",description:"https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/",source:"@site/docs/leetcode/2000/2246_longest_path_with_different_adjacent_chars.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/longest_path_with_different_adjacent_chars",permalink:"/docs/leetcode/2000/longest_path_with_different_adjacent_chars",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2246_longest_path_with_different_adjacent_chars.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Tree",permalink:"/docs/tags/tree"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:2246,frontMatter:{title:"2246. Longest Path With Different Adjacent Characters",sidebar_label:"2246. Longest Path With Different Adjacent Characters",tags:["Leetcode Hard","Tree","Hash"]},sidebar:"docSidebar",previous:{title:"2136. Earliest Possible Day of Full Bloom",permalink:"/docs/leetcode/2000/earliest_possible_day_of_full_bloom"},next:{title:"6204. Largest Positive Integer That Exists With Its Negative",permalink:"/docs/leetcode/2000/largest_positive_int_that_exists_with_its_negative"}},s={},l=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3}],d={toc:l};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/"},"https://leetcode.com/problems/longest-path-with-different-adjacent-characters/description/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"dfs"},"DFS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\nclass Solution:\n    def longestPath(self, parent: List[int], s: str) -> int:\n        mapper = defaultdict(set)\n        for i, p in enumerate(parent):\n            mapper[p].add(i)\n\n        def dfs(node):\n            first, second = 0, 0\n            for child in mapper[node]:\n                child_path = dfs(child)\n                if s[child] == s[node]:\n                    continue\n\n                if child_path >= first:\n                    first, second = child_path, first\n                elif child_path > second:\n                    second = child_path\n            self.ans = max(self.ans, 1+first+second)\n            return 1 + first\n        self.ans = 0\n\n        dfs(0)\n        return self.ans\n")))}f.isMDXComponent=!0}}]);