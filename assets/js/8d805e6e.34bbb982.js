"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6554],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],l={title:"409. Longest Palindrome",sidebar_label:"409. Longest Palindrome",tags:["Leetcode Easy"]},a=void 0,s={unversionedId:"leetcode/1-500/longest_palindrome",id:"leetcode/1-500/longest_palindrome",title:"409. Longest Palindrome",description:"https://leetcode.com/problems/longest-palindrome/",source:"@site/docs/leetcode/1-500/409_longest_palindrome.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/longest_palindrome",permalink:"/docs/leetcode/1-500/longest_palindrome",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/409_longest_palindrome.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:409,frontMatter:{title:"409. Longest Palindrome",sidebar_label:"409. Longest Palindrome",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"404. Sum of Left Leaf",permalink:"/docs/leetcode/1-500/left_leaf_sum"},next:{title:"413. Arithmetic Slices",permalink:"/docs/leetcode/1-500/arithmetic_slices"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-palindrome/"},"https://leetcode.com/problems/longest-palindrome/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def longestPalindrome(self, s: str) -> int:\n        counts = Counter(s)\n\n        ans = 0\n        odd_presented = 0\n        for char, count in counts.items():\n            print(char, count)\n            if count % 2 == 0:\n                ans += count\n            else:\n                ans += (count-1)\n                odd_presented += 1\n\n        if odd_presented > 0:\n            ans += 1\n\n        return ans\n")))}d.isMDXComponent=!0}}]);