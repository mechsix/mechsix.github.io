"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[19397],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40116:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"13. Roman to Integer",sidebar_label:"13. Roman to Integer",tags:["Leetcode Easy","Two Pointer"]},l=void 0,s={unversionedId:"leetcode/1-500/roman_to_integer",id:"leetcode/1-500/roman_to_integer",title:"13. Roman to Integer",description:"https://leetcode.com/problems/roman-to-integer/",source:"@site/docs/leetcode/1-500/13_roman_to_integer.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/roman_to_integer",permalink:"/docs/leetcode/1-500/roman_to_integer",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/13_roman_to_integer.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:13,frontMatter:{title:"13. Roman to Integer",sidebar_label:"13. Roman to Integer",tags:["Leetcode Easy","Two Pointer"]},sidebar:"docSidebar",previous:{title:"12. Integer to Roman",permalink:"/docs/leetcode/1-500/integer_to_roman"},next:{title:"14. Longest Common Prefix",permalink:"/docs/leetcode/1-500/longest_common_prefix"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/roman-to-integer/"},"https://leetcode.com/problems/roman-to-integer/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def romanToInt(self, s: str) -> int:\n        mapper = {\n            "I": 1, "V": 5, "X": 10,\n            "L": 50, "C": 100, "D": 500,\n            "M": 1000,\n        }\n\n        if len(s) == 1:\n            return mapper[s]\n\n        symbols = list(s)\n        ans, i = 0, len(s)-1\n        while i >= 0:\n            cur = mapper[symbols[i]]\n            j = i-1\n            while mapper[symbols[j]] < mapper[symbols[i]] and j >= 0:\n                cur -= mapper[symbols[j]]\n                j -= 1\n\n            ans += cur\n            i = j\n        return ans\n')))}m.isMDXComponent=!0}}]);