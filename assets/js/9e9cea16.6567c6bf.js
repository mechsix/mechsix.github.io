"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4940],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=a(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,c[1]=u;for(var a=2;a<o;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21652:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),c=["components"],u={title:"260. Single Number III",sidebar_label:"260. Single Number III"},l=void 0,a={unversionedId:"leetcode/single_number_iii",id:"leetcode/single_number_iii",isDocsHomePage:!1,title:"260. Single Number III",description:"Python",source:"@site/docs/leetcode/260_single_number_iii.md",sourceDirName:"leetcode",slug:"/leetcode/single_number_iii",permalink:"/docs/leetcode/single_number_iii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/260_single_number_iii.md",tags:[],version:"current",sidebarPosition:260,frontMatter:{title:"260. Single Number III",sidebar_label:"260. Single Number III"},sidebar:"tutorialSidebar",previous:{title:"203. Remove Linked List Elements",permalink:"/docs/leetcode/rm_linked_list_elements"},next:{title:"328. Odd Even Linked List",permalink:"/docs/leetcode/odd_even_linklist"}},s=[{value:"Python",id:"python",children:[]}],m={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\nclass Solution:\n\n    def singleNumber(self, nums: List[int]) -> List[int]:\n        counters = defaultdict(lambda: 0)\n\n        for num in nums:\n            counters[num] += 1\n\n        return [num for num, count in counters.items() if count < 2]\n")))}p.isMDXComponent=!0}}]);