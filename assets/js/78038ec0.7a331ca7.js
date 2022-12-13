"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[69499],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65027:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=n(83117),a=(n(67294),n(3905));const o={title:"242. Valid Anagram",sidebar_label:"242. Valid Anagram",tags:["Leetcode Easy"]},l=void 0,i={unversionedId:"leetcode/1-500/valid_anagram",id:"leetcode/1-500/valid_anagram",title:"242. Valid Anagram",description:"https://leetcode.com/problems/valid-anagram/",source:"@site/docs/leetcode/1-500/242_valid_anagram.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/valid_anagram",permalink:"/docs/leetcode/1-500/valid_anagram",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/242_valid_anagram.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:242,frontMatter:{title:"242. Valid Anagram",sidebar_label:"242. Valid Anagram",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"240. Search a 2D Matrix II",permalink:"/docs/leetcode/1-500/search_2d_matrix_ii"},next:{title:"250. Count Univalue Subtrees",permalink:"/docs/leetcode/1-500/count_univalue_subtree"}},c={},s=[{value:"Python",id:"python",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-anagram/"},"https://leetcode.com/problems/valid-anagram/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("p",null,"Consider ",(0,a.kt)("inlineCode",{parentName:"p"},"s")," has length ",(0,a.kt)("inlineCode",{parentName:"p"},"M"),"; ",(0,a.kt)("inlineCode",{parentName:"p"},"t")," has length ",(0,a.kt)("inlineCode",{parentName:"p"},"N")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(NlogN * MlogM)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(N+M)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n\n        s_chars = list(s)\n        t_chars = list(t)\n        s_chars.sort()\n        t_chars.sort()\n\n        for i in range(len(s_chars)-1, -1, -1):\n            s_char = s_chars[i]\n            if s_char != t_chars[-1]:\n                return False\n            t_chars.pop()\n        return True\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(logM)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(M+N) worst case")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\nclass Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n\n        s_counts = Counter(s)\n        t_counts = Counter(t)\n\n        for char, count in s_counts.items():\n            if char not in t_counts or t_counts[char] != count:\n                return False\n        return True\n")))}p.isMDXComponent=!0}}]);