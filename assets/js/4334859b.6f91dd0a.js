"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[375],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=o,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39941:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"3. Longest Substring Without Repeating Characters",sidebar_label:"3. Longest Substring Without Repeating Characters",tags:["Leetcode Medium","Two Pointer"]},s=void 0,c={unversionedId:"leetcode/longest_no_repeat_substring",id:"leetcode/longest_no_repeat_substring",title:"3. Longest Substring Without Repeating Characters",description:"Python",source:"@site/docs/leetcode/3_longest_no_repeat_substring.md",sourceDirName:"leetcode",slug:"/leetcode/longest_no_repeat_substring",permalink:"/docs/leetcode/longest_no_repeat_substring",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/3_longest_no_repeat_substring.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:3,frontMatter:{title:"3. Longest Substring Without Repeating Characters",sidebar_label:"3. Longest Substring Without Repeating Characters",tags:["Leetcode Medium","Two Pointer"]},sidebar:"docSidebar",previous:{title:"2. Add Two Numbers",permalink:"/docs/leetcode/add_two_numbers"},next:{title:"8. String to Integer (atoi)",permalink:"/docs/leetcode/atoi"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,"Test Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"abcabcbb"'),(0,i.kt)("li",{parentName:"ul"},'" "'),(0,i.kt)("li",{parentName:"ul"},'"ok"'),(0,i.kt)("li",{parentName:"ul"},'"dvdf"')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        length = len(s)\n        if length < 2:\n            return length\n\n        longest_length = 0\n        left, right = 0, 0\n\n        while right < length:\n            if s[right] in s[left:right]:\n                longest_length = max(longest_length, right-left)\n                left += 1\n                right = left\n                continue\n            right += 1\n\n        return max(longest_length, right-left)\n")))}g.isMDXComponent=!0}}]);