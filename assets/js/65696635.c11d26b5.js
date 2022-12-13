"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[734],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=a(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var a=2;a<l;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21223:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return a}});var r=n(83117),o=(n(67294),n(3905));const l={title:"263. Ugly Number",sidebar_label:"263. Ugly Number",tags:["Leetcode Easy"]},i=void 0,c={unversionedId:"leetcode/1-500/ugly_number",id:"leetcode/1-500/ugly_number",title:"263. Ugly Number",description:"https://leetcode.com/problems/ugly-number/",source:"@site/docs/leetcode/1-500/263_ugly_number.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/ugly_number",permalink:"/docs/leetcode/1-500/ugly_number",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/263_ugly_number.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:263,frontMatter:{title:"263. Ugly Number",sidebar_label:"263. Ugly Number",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"260. Single Number III",permalink:"/docs/leetcode/1-500/single_number_iii"},next:{title:"268. Missing Number",permalink:"/docs/leetcode/1-500/missing_number"}},u={},a=[{value:"Python",id:"python",level:2}],s={toc:a};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/ugly-number/"},"https://leetcode.com/problems/ugly-number/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isUgly(self, n: int) -> bool:\n        if n == 0:\n            return False\n\n        while n % 3 == 0:\n            n //= 3\n        while n % 2 == 0:\n            n //= 2\n        while n % 5 == 0:\n            n //= 5\n\n        return True if n == 1 else False\n")))}p.isMDXComponent=!0}}]);