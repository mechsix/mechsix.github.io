"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[22963],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93750:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"190. Reverse Bits",sidebar_label:"190. Reverse Bits",tags:["Leetcode Easy","Bit Manipulation"]},c=void 0,l={unversionedId:"leetcode/1-500/reverse_bits",id:"leetcode/1-500/reverse_bits",title:"190. Reverse Bits",description:"https://leetcode.com/problems/reverse-bits/",source:"@site/docs/leetcode/1-500/190_reverse_bits.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reverse_bits",permalink:"/docs/leetcode/1-500/reverse_bits",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/190_reverse_bits.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:190,frontMatter:{title:"190. Reverse Bits",sidebar_label:"190. Reverse Bits",tags:["Leetcode Easy","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"189. Rotate Array",permalink:"/docs/leetcode/1-500/rotate_array"},next:{title:"191. Number of 1 Bits",permalink:"/docs/leetcode/1-500/number_of_1_bits"}},u=[{value:"Python",id:"python",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-bits/"},"https://leetcode.com/problems/reverse-bits/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def reverseBits(self, n: int) -> int:\n        result = 0\n        for power in range(31, -1, -1):\n            result += (n & 1) << power\n            n = n >> 1\n        return result\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var reverseBits = function(n) {\n  const list = [];\n  for (let i = 0; i < 32; i++) {\n    if (n > 0) {\n      list.push(parseInt(n % 2));\n      n = parseInt(n / 2)\n    } else list.push(0);\n  }\n  return parseInt(list.join(''), 2);\n};\n")))}d.isMDXComponent=!0}}]);