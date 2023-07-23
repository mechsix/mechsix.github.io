"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[54955],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"438. Find All Anagrams in a String",sidebar_label:"438. Find All Anagrams in a String",tags:["Leetcode Medium","Sliding Window"]},o=void 0,l={unversionedId:"leetcode/1-500/find_all_anagrams_in_a_string",id:"leetcode/1-500/find_all_anagrams_in_a_string",title:"438. Find All Anagrams in a String",description:"https://leetcode.com/problems/find-all-anagrams-in-a-string/",source:"@site/docs/leetcode/1-500/438_find_all_anagrams_in_a_string.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/find_all_anagrams_in_a_string",permalink:"/docs/leetcode/1-500/find_all_anagrams_in_a_string",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/438_find_all_anagrams_in_a_string.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Sliding Window",permalink:"/docs/tags/sliding-window"}],version:"current",sidebarPosition:438,frontMatter:{title:"438. Find All Anagrams in a String",sidebar_label:"438. Find All Anagrams in a String",tags:["Leetcode Medium","Sliding Window"]},sidebar:"docSidebar",previous:{title:"437. Path Sum III",permalink:"/docs/leetcode/1-500/path_sum_iii"},next:{title:"441. Arranging Coins",permalink:"/docs/leetcode/1-500/arranging_coins"}},s={},c=[{value:"Python",id:"python",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-all-anagrams-in-a-string/"},"https://leetcode.com/problems/find-all-anagrams-in-a-string/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def findAnagrams(self, s: str, p: str) -> List[int]:\n        if len(s) < len(p):\n            return []\n\n        count_s, count_p = Counter(), Counter(p)\n\n        ans = []\n        for i in range(len(s)):\n            count_s[s[i]] += 1\n\n            # Reach end, move left (i-len(p)) forward\n            if i >= len(p):\n                if count_s[s[i-len(p)]] == 1:\n                    del count_s[s[i-len(p)]]\n                else:\n                    count_s[s[i-len(p)]] -= 1\n\n            # All counts are the same\n            if count_s == count_p:\n                ans.append(i-len(p)+1)\n\n        return ans\n")))}u.isMDXComponent=!0}}]);