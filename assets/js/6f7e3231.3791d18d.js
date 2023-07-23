"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[59165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=o,m=p["".concat(i,".").concat(y)]||p[y]||d[y]||c;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},86783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={title:"451. Sort Characters By Frequency",sidebar_label:"451. Sort Characters By Frequency",tags:["Leetcode Medium"]},a=void 0,s={unversionedId:"leetcode/1-500/sort_char_by_frequency",id:"leetcode/1-500/sort_char_by_frequency",title:"451. Sort Characters By Frequency",description:"https://leetcode.com/problems/sort-characters-by-frequency/",source:"@site/docs/leetcode/1-500/451_sort_char_by_frequency.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/sort_char_by_frequency",permalink:"/docs/leetcode/1-500/sort_char_by_frequency",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/451_sort_char_by_frequency.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:451,frontMatter:{title:"451. Sort Characters By Frequency",sidebar_label:"451. Sort Characters By Frequency",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"450. Delete Node in a BST",permalink:"/docs/leetcode/1-500/delete_bst_node"},next:{title:"452. Minimum Number of Arrows to Burst Balloons",permalink:"/docs/leetcode/1-500/min_arrow_bust_balloons"}},i={},l=[{value:"Python",id:"python",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-characters-by-frequency/"},"https://leetcode.com/problems/sort-characters-by-frequency/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def frequencySort(self, s: str) -> str:\n        counts = [(char, count) for char, count in Counter(s).items()]\n        counts.sort(key=lambda item: item[1], reverse=True)\n\n        return ''.join([char*count for char, count in counts])\n")))}d.isMDXComponent=!0}}]);