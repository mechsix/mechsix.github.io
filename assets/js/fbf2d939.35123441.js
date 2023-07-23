"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[49734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=o,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||i;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=g;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},68168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"1048. Longest String Chain",sidebar_label:"1048. Longest String Chain",tags:["Leetcode Medium","DP"]},a=void 0,l={unversionedId:"leetcode/1001-1500/longest_string_chain",id:"leetcode/1001-1500/longest_string_chain",title:"1048. Longest String Chain",description:"Python",source:"@site/docs/leetcode/1001-1500/1048_longest_string_chain.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/longest_string_chain",permalink:"/docs/leetcode/1001-1500/longest_string_chain",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1048_longest_string_chain.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1048,frontMatter:{title:"1048. Longest String Chain",sidebar_label:"1048. Longest String Chain",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"1047. Remove All Adjacent Duplicates In String",permalink:"/docs/leetcode/1001-1500/remove_all_adjacent_duplicates_in_string"},next:{title:"1051. Height Checker",permalink:"/docs/leetcode/1001-1500/height_checker"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Top-Down DP",id:"top-down-dp",level:3},{value:"Bottom-Up DP",id:"bottom-up-dp",level:3}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"top-down-dp"},"Top-Down DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def longestStrChain(self, words: List[str]) -> int:\n\n        @cache\n        def dp(word: str):\n            max_length = 1\n            for i in range(len(word)):\n                new_word = word[:i] + word[i+1:]\n\n                if new_word in words:\n                    max_length = max(max_length, 1+dp(new_word))\n\n            return max_length\n\n\n        answer = 0\n        for word in words:\n            answer = max(answer, dp(word))\n\n        return answer\n")),(0,o.kt)("h3",{id:"bottom-up-dp"},"Bottom-Up DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\nclass Solution:\n    def longestStrChain(self, words: List[str]) -> int:\n        dp = defaultdict(int)\n\n        words.sort(key=lambda word: len(word))\n\n        answer = 0\n\n        for word in words:\n            current_length = 1\n            for i in range(len(word)):\n                new_word = word[:i] + word[i+1:]\n                pre_length = dp.get(new_word, 0)\n                current_length = max(current_length, pre_length+1)\n\n            dp[word] = current_length\n            answer = max(answer, current_length)\n\n        return answer\n")))}u.isMDXComponent=!0}}]);