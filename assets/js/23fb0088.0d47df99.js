"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[91232],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96357:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],a={title:"1137. N-th Tribonacci Number",sidebar_label:"1137. N-th Tribonacci Number",tags:["Leetcode Easy","DP"]},l=void 0,u={unversionedId:"leetcode/1001-1500/nth_tribonacci",id:"leetcode/1001-1500/nth_tribonacci",title:"1137. N-th Tribonacci Number",description:"https://leetcode.com/problems/n-th-tribonacci-number/",source:"@site/docs/leetcode/1001-1500/1137_nth_tribonacci.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/nth_tribonacci",permalink:"/docs/leetcode/1001-1500/nth_tribonacci",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1137_nth_tribonacci.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1137,frontMatter:{title:"1137. N-th Tribonacci Number",sidebar_label:"1137. N-th Tribonacci Number",tags:["Leetcode Easy","DP"]},sidebar:"docSidebar",previous:{title:"1114. Print in Order",permalink:"/docs/leetcode/1001-1500/print_in_order"},next:{title:"1143. Longest Common Subsequence",permalink:"/docs/leetcode/1001-1500/longest_common_subsequence"}},s=[{value:"Python",id:"python",children:[],level:2}],p={toc:s};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/n-th-tribonacci-number/"},"https://leetcode.com/problems/n-th-tribonacci-number/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def tribonacci(self, n: int) -> int:\n        if n < 3:\n            return [0, 1, 1][n]\n\n        t1, t2, t3 = 0, 1, 1\n        for i in range(3, n+1):\n            trib = t1+t2+t3\n            t1, t2, t3 = t2, t3, trib\n\n        return t3\n")))}b.isMDXComponent=!0}}]);