"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3347],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(l,".").concat(m)]||p[m]||f[m]||c;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9520:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],a={title:"509. Fibonacci Number",sidebar_label:"509. Fibonacci Number",tags:["Leetcode Easy","DP"]},l=void 0,u={unversionedId:"leetcode/501-1000/fibonacci_number",id:"leetcode/501-1000/fibonacci_number",title:"509. Fibonacci Number",description:"Python",source:"@site/docs/leetcode/501-1000/509_fibonacci_number.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/fibonacci_number",permalink:"/docs/leetcode/501-1000/fibonacci_number",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/509_fibonacci_number.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:509,frontMatter:{title:"509. Fibonacci Number",sidebar_label:"509. Fibonacci Number",tags:["Leetcode Easy","DP"]},sidebar:"docSidebar",previous:{title:"495. Teemo Attacking",permalink:"/docs/leetcode/1-500/teemo_attack"},next:{title:"520. Detect Capital",permalink:"/docs/leetcode/501-1000/detect_capital"}},s=[{value:"Python",id:"python",children:[],level:2}],f={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.memory = dict()\n\n    def fib(self, n: int) -> int:\n        if n < 2:\n            return n\n\n        if n in self.memory:\n            return self.memory[n]\n        \n        self.memory[n] = self.fib(n-1) + self.fib(n-2)\n\n        return self.memory[n]\n")))}p.isMDXComponent=!0}}]);