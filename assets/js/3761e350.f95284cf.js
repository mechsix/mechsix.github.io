"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97702],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,d=s["".concat(a,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=s;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},98552:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],l={title:"858. Mirror Reflection",sidebar_label:"858. Mirror Reflection",tags:["Leetcode Medium","Math"]},a=void 0,p={unversionedId:"leetcode/501-1000/mirror_reflection",id:"leetcode/501-1000/mirror_reflection",title:"858. Mirror Reflection",description:"https://leetcode.com/problems/mirror-reflection/",source:"@site/docs/leetcode/501-1000/858_mirror_reflection.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/mirror_reflection",permalink:"/docs/leetcode/501-1000/mirror_reflection",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/858_mirror_reflection.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Math",permalink:"/docs/tags/math"}],version:"current",sidebarPosition:858,frontMatter:{title:"858. Mirror Reflection",sidebar_label:"858. Mirror Reflection",tags:["Leetcode Medium","Math"]},sidebar:"docSidebar",previous:{title:"844. Backspace String Compare",permalink:"/docs/leetcode/501-1000/backspacce_string_compare"},next:{title:"867. Transpose Matrix",permalink:"/docs/leetcode/501-1000/transpose_matrix"}},u=[{value:"Python",id:"python",children:[],level:2}],m={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/mirror-reflection/"},"https://leetcode.com/problems/mirror-reflection/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"q"),"\u7684\u6700\u5c0f\u516c\u500d\u6578\u6703\u6253\u5230\u9802\u9ede"),(0,i.kt)("li",{parentName:"ul"},"\u547d\u4e2d(2)\u6216(1,0)\u4ee5\u6700\u5c0f\u516c\u500d\u6578\u9664\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"q"),"\u662f\u5076\u6578\u6216\u5947\u6578\u6c7a\u5b9a"),(0,i.kt)("li",{parentName:"ul"},"\u547d\u4e2d1\u62160\u4ee5\u6700\u5c0f\u516c\u500d\u6578\u9664\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"p"),"\u6c7a\u5b9a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import math\n\n\nclass Solution:\n    def mirrorReflection(self, p: int, q: int) -> int:\n        lcm = math.lcm(p, q)\n        m, n = lcm/p, lcm/q\n\n        if m % 2 == 0 and n % 2 == 1: return 0\n        if m % 2 == 1 and n % 2 == 1: return 1\n        if m % 2 == 1 and n % 2 == 0: return 2\n        return -1\n")))}s.isMDXComponent=!0}}]);