"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[12822],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,d=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12349:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"421. Maximum XOR of Two Numbers in an Array",sidebar_label:"421. Maximum XOR of Two Numbers in an Array",tags:["Leetcode Medium"]},u=void 0,c={unversionedId:"leetcode/1-500/max_xor_of_2_nums_in_array",id:"leetcode/1-500/max_xor_of_2_nums_in_array",title:"421. Maximum XOR of Two Numbers in an Array",description:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",source:"@site/docs/leetcode/1-500/421_max_xor_of_2_nums_in_array.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_xor_of_2_nums_in_array",permalink:"/docs/leetcode/1-500/max_xor_of_2_nums_in_array",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/421_max_xor_of_2_nums_in_array.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:421,frontMatter:{title:"421. Maximum XOR of Two Numbers in an Array",sidebar_label:"421. Maximum XOR of Two Numbers in an Array",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"417. Pacific Atlantic Water Flow",permalink:"/docs/leetcode/1-500/pacific_atlantic_water_flow"},next:{title:"424. Longest Repeating Character Replacement",permalink:"/docs/leetcode/1-500/logtest_repeating_character_replacement"}},m=[{value:"Python",id:"python",children:[],level:2}],s={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array"},"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"XOR\u7684\u7279\u6027\uff1a If ",(0,o.kt)("strong",{parentName:"li"},"a ^ b = c"),", then ",(0,o.kt)("strong",{parentName:"li"},"a ^ c = b"),", ",(0,o.kt)("strong",{parentName:"li"},"b ^ c = a")," are also True"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<<"),"\u5728Python\u4e2d\u662f\u5f80\u5de6\u79fb\u52d5\u4e00\u500bbit\uff1b",(0,o.kt)("inlineCode",{parentName:"li"},">>"),"\u5f80\u53f3\u79fb\u52d5\u4e00\u500bbit",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 << 2"),"\u6703\u5c07",(0,o.kt)("inlineCode",{parentName:"li"},"001"),"\u79fb\u52d5\u6210",(0,o.kt)("inlineCode",{parentName:"li"},"100"),"\uff0c\u56e0\u6b64\u5f97\u5230\u5341\u9032\u4f4d\u76844"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"16 >> 2"),"\u6703\u5c07",(0,o.kt)("inlineCode",{parentName:"li"},"10000"),"\u5f80\u53f3\u79fb\u52d5\u57ce",(0,o.kt)("inlineCode",{parentName:"li"},"100"),"\uff0c\u5f97\u5230\u5341\u9032\u4f4d\u76844"))),(0,o.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u984c\u76ee\u7684nums\u7bc4\u570d\u592a\u5927\u76f4\u63a5liter\u6703timeout\uff0c\u5c0d32 bit\u505aliter\u53ef\u4ee5\u5f97\u5230O(1)\u7684\u6642\u9593\u8907\u96dc\u5ea6")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findMaximumXOR(self, nums: List[int]) -> int:\n        result = 0\n        for bit in range(31, -1, -1):\n            result <<= 1\n            shifts = {num >> bit for num in nums}\n            if any(result ^ 1 ^ num in shifts for num in shifts):\n                result += 1\n        return result\n")))}p.isMDXComponent=!0}}]);