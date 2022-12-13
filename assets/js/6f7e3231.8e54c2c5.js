"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[59165],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,y=p["".concat(i,".").concat(d)]||p[d]||f[d]||c;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86783:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const c={title:"451. Sort Characters By Frequency",sidebar_label:"451. Sort Characters By Frequency",tags:["Leetcode Medium"]},a=void 0,u={unversionedId:"leetcode/1-500/sort_char_by_frequency",id:"leetcode/1-500/sort_char_by_frequency",title:"451. Sort Characters By Frequency",description:"https://leetcode.com/problems/sort-characters-by-frequency/",source:"@site/docs/leetcode/1-500/451_sort_char_by_frequency.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/sort_char_by_frequency",permalink:"/docs/leetcode/1-500/sort_char_by_frequency",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/451_sort_char_by_frequency.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:451,frontMatter:{title:"451. Sort Characters By Frequency",sidebar_label:"451. Sort Characters By Frequency",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"450. Delete Node in a BST",permalink:"/docs/leetcode/1-500/delete_bst_node"},next:{title:"452. Minimum Number of Arrows to Burst Balloons",permalink:"/docs/leetcode/1-500/min_arrow_bust_balloons"}},i={},s=[{value:"Python",id:"python",level:2}],l={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-characters-by-frequency/"},"https://leetcode.com/problems/sort-characters-by-frequency/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def frequencySort(self, s: str) -> str:\n        counts = [(char, count) for char, count in Counter(s).items()]\n        counts.sort(key=lambda item: item[1], reverse=True)\n\n        return ''.join([char*count for char, count in counts])\n")))}p.isMDXComponent=!0}}]);