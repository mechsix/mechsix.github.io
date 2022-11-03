"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[38651],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17374:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"318. Maximum Product of Word Lengths",sidebar_label:"318. Maximum Product of Word Lengths",tags:["Leetcode Medium","String","Bit Manipulation"]},l=void 0,u={unversionedId:"leetcode/1-500/maximum_product_of_word_lengths",id:"leetcode/1-500/maximum_product_of_word_lengths",title:"318. Maximum Product of Word Lengths",description:"https://leetcode.com/problems/maximum-product-of-word-lengths/",source:"@site/docs/leetcode/1-500/318_maximum_product_of_word_lengths.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/maximum_product_of_word_lengths",permalink:"/docs/leetcode/1-500/maximum_product_of_word_lengths",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/318_maximum_product_of_word_lengths.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"String",permalink:"/docs/tags/string"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:318,frontMatter:{title:"318. Maximum Product of Word Lengths",sidebar_label:"318. Maximum Product of Word Lengths",tags:["Leetcode Medium","String","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"315. Count of Smaller Numbers After Self",permalink:"/docs/leetcode/1-500/count_of_smaller_numbers_after_self"},next:{title:"322. Coin Change",permalink:"/docs/leetcode/1-500/coin_change"}},s=[{value:"Python",id:"python",children:[{value:"Use Hashmap",id:"use-hashmap",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-product-of-word-lengths/"},"https://leetcode.com/problems/maximum-product-of-word-lengths/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"use-hashmap"},"Use Hashmap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxProduct(self, words: List[str]) -> int:\n        mapper = [set(word) for word in words]\n\n        ans = 0\n\n        for i in range(len(words)):\n            for j in range(i+1, len(words)):\n                if not mapper[i] & mapper[j]:\n                    ans = max(ans, len(words[i])*len(words[j]))\n        return ans\n")),(0,a.kt)("h2",{id:"javascript"},"Javascript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var maxProduct = function(words) {\n  const intArray = words.map(word => toInt(word));\n  let max = 0;\n\n  for (let i = 0; i < intArray.length - 1; i++) {\n    for (let j = i + 1; j < intArray.length; j++) {\n      if ((intArray[i] & intArray[j]) === 0) {\n        max = Math.max(max, words[i].length * words[j].length);\n      }\n    }\n  }\n\n  return max;\n};\n\nconst toInt = (word) => {\n  let num = 0;\n  const base = ('a').charCodeAt(0);\n\n  for (const char of word) {\n    num |= 1 << char.charCodeAt(0) - base;\n  }\n  return num;\n}\n")))}d.isMDXComponent=!0}}]);