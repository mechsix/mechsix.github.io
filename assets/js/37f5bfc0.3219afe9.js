"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[80055],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const i={title:"66. Plus One",sidebar_label:"66. Plus One",tags:["Leetcode Easy"]},a=void 0,l={unversionedId:"leetcode/1-500/plus_one",id:"leetcode/1-500/plus_one",title:"66. Plus One",description:"Python",source:"@site/docs/leetcode/1-500/66_plus_one.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/plus_one",permalink:"/docs/leetcode/1-500/plus_one",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/66_plus_one.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:66,frontMatter:{title:"66. Plus One",sidebar_label:"66. Plus One",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"63. Unique Paths II",permalink:"/docs/leetcode/1-500/unique_paths_ii"},next:{title:"67. Add Binary",permalink:"/docs/leetcode/1-500/add_bin"}},c={},s=[{value:"Python",id:"python",level:2},{value:"To String and plus it",id:"to-string-and-plus-it",level:3},{value:"Loop and carry",id:"loop-and-carry",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"to-string-and-plus-it"},"To String and plus it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        num = int(''.join([str(n) for n in digits]))\n        return [int(n) for n in str(num+1)]\n")),(0,o.kt)("h3",{id:"loop-and-carry"},"Loop and carry"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def plusOne(self, digits: List[int]) -> List[int]:\n        carry = 1\n\n        for i in range(len(digits)-1, -1, -1):\n            digits[i] += carry\n            if digits[i] // 10 < 1:\n                carry = 0\n                break\n            digits[i] %= 10\n\n        return [1] + digits if carry else digits\n")))}p.isMDXComponent=!0}}]);