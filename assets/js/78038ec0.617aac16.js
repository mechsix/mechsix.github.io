"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9499],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"242. Valid Anagram",sidebar_label:"242. Valid Anagram",tags:["Leetcode Easy"]},c=void 0,s={unversionedId:"leetcode/1-500/valid_anagram",id:"leetcode/1-500/valid_anagram",title:"242. Valid Anagram",description:"https://leetcode.com/problems/valid-anagram/",source:"@site/docs/leetcode/1-500/242_valid_anagram.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/valid_anagram",permalink:"/docs/leetcode/1-500/valid_anagram",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/242_valid_anagram.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:242,frontMatter:{title:"242. Valid Anagram",sidebar_label:"242. Valid Anagram",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"236. Lowest Common Ancestor of a Binary Tree",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bt"},next:{title:"250. Count Univalue Subtrees",permalink:"/docs/leetcode/1-500/count_univalue_subtree"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-anagram/"},"https://leetcode.com/problems/valid-anagram/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Consider ",(0,o.kt)("inlineCode",{parentName:"p"},"s")," has length ",(0,o.kt)("inlineCode",{parentName:"p"},"M"),"; ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," has length ",(0,o.kt)("inlineCode",{parentName:"p"},"N")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(NlogN * MlogM)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(N+M)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n\n        s_chars = list(s)\n        t_chars = list(t)\n        s_chars.sort()\n        t_chars.sort()\n\n        for i in range(len(s_chars)-1, -1, -1):\n            s_char = s_chars[i]\n            if s_char != t_chars[-1]:\n                return False\n            t_chars.pop()\n        return True\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(logM)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(M+N) worst case")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\nclass Solution:\n    def isAnagram(self, s: str, t: str) -> bool:\n        if len(s) != len(t):\n            return False\n\n        s_counts = Counter(s)\n        t_counts = Counter(t)\n\n        for char, count in s_counts.items():\n            if char not in t_counts or t_counts[char] != count:\n                return False\n        return True\n")))}m.isMDXComponent=!0}}]);