"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1256],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39223:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),c=["components"],a={title:"387. First Unique Character in a String",sidebar_label:"387. First Unique Character in a String",tags:["Leetcode Easy"]},u=void 0,s={unversionedId:"leetcode/1-500/first_unique_char_in_string",id:"leetcode/1-500/first_unique_char_in_string",title:"387. First Unique Character in a String",description:"https://leetcode.com/problems/first-unique-character-in-a-string/",source:"@site/docs/leetcode/1-500/387_first_unique_char_in_string.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/first_unique_char_in_string",permalink:"/docs/leetcode/1-500/first_unique_char_in_string",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/387_first_unique_char_in_string.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:387,frontMatter:{title:"387. First Unique Character in a String",sidebar_label:"387. First Unique Character in a String",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"383. Ransom Note",permalink:"/docs/leetcode/1-500/ransom_note"},next:{title:"389. Find the Difference",permalink:"/docs/leetcode/1-500/find_the_difference"}},l=[{value:"Python",id:"python",children:[{value:"First Solution",id:"first-solution",children:[],level:3},{value:"Second Solution",id:"second-solution",children:[],level:3}],level:2}],p={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/first-unique-character-in-a-string/"},"https://leetcode.com/problems/first-unique-character-in-a-string/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"first-solution"},"First Solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(M)  # M for duplicated chars count")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def firstUniqChar(self, s: str) -> int:\n        cur = 0\n        seem = set()\n\n        while cur < len(s):\n            char = s[cur]\n            if char in seem:\n                cur += 1\n                continue\n\n            if char not in s[cur+1:]:\n                return cur\n\n            seem.add(char)\n            cur += 1\n        return -1\n")),(0,o.kt)("h3",{id:"second-solution"},"Second Solution"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(M)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def firstUniqChar(self, s: str) -> int:\n        counts = Counter(s)\n\n        uniq_chars = [c for c, v in counts.items() if v == 1]\n\n        if not uniq_chars:\n            return -1\n\n        return min([s.index(c) for c in uniq_chars])\n")))}f.isMDXComponent=!0}}]);