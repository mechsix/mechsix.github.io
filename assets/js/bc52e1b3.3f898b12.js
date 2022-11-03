"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[61205],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},a=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,i(i({ref:t},a),{},{components:n})):r.createElement(m,i({ref:t},a))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68751:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return a}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],u={title:"392. Is Subsequence",sidebar_label:"392. Is Subsequence",tags:["Leetcode Easy"]},s=void 0,l={unversionedId:"leetcode/1-500/is_subsequence",id:"leetcode/1-500/is_subsequence",title:"392. Is Subsequence",description:"https://leetcode.com/problems/is-subsequence/",source:"@site/docs/leetcode/1-500/392_is_subsequence.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/is_subsequence",permalink:"/docs/leetcode/1-500/is_subsequence",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/392_is_subsequence.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:392,frontMatter:{title:"392. Is Subsequence",sidebar_label:"392. Is Subsequence",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"389. Find the Difference",permalink:"/docs/leetcode/1-500/find_the_difference"},next:{title:"399. Evaluate Division",permalink:"/docs/leetcode/1-500/evaluate_division"}},a=[{value:"Python",id:"python",children:[{value:"Queue Pop",id:"queue-pop",children:[],level:3},{value:"Pointer",id:"pointer",children:[],level:3}],level:2}],p={toc:a};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/is-subsequence/"},"https://leetcode.com/problems/is-subsequence/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("h3",{id:"queue-pop"},"Queue Pop"),(0,c.kt)("p",null,"N = len(s), M = len(t)"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Time: O(M)"),(0,c.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n\nclass Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        checks = deque(s)\n        for char in t:\n            if not checks:\n                return True\n\n            if checks[0] == char:\n                checks.popleft()\n\n        return not bool(checks)\n")),(0,c.kt)("h3",{id:"pointer"},"Pointer"),(0,c.kt)("p",null,"N = len(s), M = len(t)"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Time: O(M)"),(0,c.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isSubsequence(self, s: str, t: str) -> bool:\n        if not s:\n            return True\n\n        i = 0\n        for letter in t:\n            if i == len(s):\n                return True\n            if s[i] == letter:\n                i += 1\n\n        return i == len(s)\n")))}d.isMDXComponent=!0}}]);