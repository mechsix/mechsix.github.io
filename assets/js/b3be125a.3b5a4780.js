"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[87915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},a=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,s(s({ref:t},a),{},{components:n})):r.createElement(f,s({ref:t},a))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<c;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const c={title:"128. Longest Consecutive Sequence",sidebar_label:"128. Longest Consecutive Sequence",tags:["Leetcode Medium"]},s=void 0,i={unversionedId:"leetcode/1-500/longest_consecutive_sequence",id:"leetcode/1-500/longest_consecutive_sequence",title:"128. Longest Consecutive Sequence",description:"https://leetcode.com/problems/longest-consecutive-sequence/",source:"@site/docs/leetcode/1-500/128_longest_consecutive_sequence.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/longest_consecutive_sequence",permalink:"/docs/leetcode/1-500/longest_consecutive_sequence",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/128_longest_consecutive_sequence.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:128,frontMatter:{title:"128. Longest Consecutive Sequence",sidebar_label:"128. Longest Consecutive Sequence",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"127. Word Ladder",permalink:"/docs/leetcode/1-500/word_ladder"},next:{title:"130. Surrounded Regions",permalink:"/docs/leetcode/1-500/surrounded_regions"}},u={},l=[{value:"Python",id:"python",level:2}],a={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-consecutive-sequence/"},"https://leetcode.com/problems/longest-consecutive-sequence/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Solution:\n    def longestConsecutive(self, nums: List[int]) -> int:\n        ans = 0\n        mapper = set(nums)\n        \n        for num in nums:\n            if num-1 in mapper:\n                continue\n            \n            current = num\n            length = 1\n            while current+1 in mapper:\n                current += 1\n                length += 1\n            ans = max(ans, length)\n\n        return ans\n")))}d.isMDXComponent=!0}}]);