"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4940],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=a(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],u={title:"260. Single Number III",sidebar_label:"260. Single Number III",tags:["Leetcode Medium"]},l=void 0,a={unversionedId:"leetcode/single_number_iii",id:"leetcode/single_number_iii",title:"260. Single Number III",description:"Python",source:"@site/docs/leetcode/260_single_number_iii.md",sourceDirName:"leetcode",slug:"/leetcode/single_number_iii",permalink:"/docs/leetcode/single_number_iii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/260_single_number_iii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:260,frontMatter:{title:"260. Single Number III",sidebar_label:"260. Single Number III",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"250. Count Univalue Subtrees",permalink:"/docs/leetcode/count_univalue_subtree"},next:{title:"283. Move Zeroes",permalink:"/docs/leetcode/move_zeros"}},s=[{value:"Python",id:"python",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\nclass Solution:\n\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        counters = defaultdict(lambda: 0)\n\n        for num in nums:\n            counters[num] += 1\n\n        return [num for num, count in counters.items() if count < 2]\n")))}p.isMDXComponent=!0}}]);