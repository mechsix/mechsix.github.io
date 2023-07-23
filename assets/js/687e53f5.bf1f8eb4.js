"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[45204],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"69. Sqrt(x)",sidebar_label:"69. Sqrt(x)",tags:["Leetcode Easy","Binary Search"]},i=void 0,l={unversionedId:"leetcode/1-500/sqrt_x",id:"leetcode/1-500/sqrt_x",title:"69. Sqrt(x)",description:"https://leetcode.com/problems/sqrtx/",source:"@site/docs/leetcode/1-500/69_sqrt_x.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/sqrt_x",permalink:"/docs/leetcode/1-500/sqrt_x",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/69_sqrt_x.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:69,frontMatter:{title:"69. Sqrt(x)",sidebar_label:"69. Sqrt(x)",tags:["Leetcode Easy","Binary Search"]},sidebar:"docSidebar",previous:{title:"67. Add Binary",permalink:"/docs/leetcode/1-500/add_bin"},next:{title:"70. Climbing Stairs",permalink:"/docs/leetcode/1-500/climbing_stairs"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Brute Force",id:"brute-force",level:3},{value:"Binary Search",id:"binary-search",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sqrtx/"},"https://leetcode.com/problems/sqrtx/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"brute-force"},"Brute Force"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time rank: faster than 13.06%"),(0,a.kt)("li",{parentName:"ul"},"Space rank: less than 97.76%")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def mySqrt(self, x: int) -> int:\n        base = 1\n\n        while base * base <= x:\n            base += 1\n\n        return base - 1\n")),(0,a.kt)("h3",{id:"binary-search"},"Binary Search"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time rank: faster than 57.22%"),(0,a.kt)("li",{parentName:"ul"},"Space rank: less than 38.71%")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def mySqrt(self, x: int) -> int:\n        if x < 2:\n            return x\n\n        left, right = 2, x//2\n\n        while left <= right:\n            pivot = left + (right-left)//2\n            num = pivot * pivot\n\n            if num == x:\n                return pivot\n            elif num > x:\n                right = pivot - 1\n            else:\n                left = pivot + 1\n\n        return right\n")))}d.isMDXComponent=!0}}]);