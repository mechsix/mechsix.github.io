"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[84660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),a=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=a(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=a(r),d=n,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?o.createElement(g,s(s({ref:t},p),{},{components:r})):o.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,s[1]=c;for(var a=2;a<i;a++)s[a]=r[a];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var o=r(87462),n=(r(67294),r(3905));const i={title:"443. String Compression",sidebar_label:"443. String Compression",tags:["Leetcode Medium","Two Pointer"]},s=void 0,c={unversionedId:"leetcode/1-500/string_compression",id:"leetcode/1-500/string_compression",title:"443. String Compression",description:"https://leetcode.com/problems/string-compression/",source:"@site/docs/leetcode/1-500/443_string_compression.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/string_compression",permalink:"/docs/leetcode/1-500/string_compression",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/443_string_compression.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:443,frontMatter:{title:"443. String Compression",sidebar_label:"443. String Compression",tags:["Leetcode Medium","Two Pointer"]},sidebar:"docSidebar",previous:{title:"441. Arranging Coins",permalink:"/docs/leetcode/1-500/arranging_coins"},next:{title:"448. Find All Numbers Disappeared in an Array",permalink:"/docs/leetcode/1-500/find_all_nums_disappeared_in_array"}},l={},a=[{value:"Python",id:"python",level:2},{value:"Python Itertools Groupby",id:"python-itertools-groupby",level:3},{value:"Two Pointer",id:"two-pointer",level:3}],p={toc:a},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/string-compression/"},"https://leetcode.com/problems/string-compression/")),(0,n.kt)("h2",{id:"python"},"Python"),(0,n.kt)("h3",{id:"python-itertools-groupby"},"Python Itertools Groupby"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ref: ",(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/string-compression/solutions/896587/python-solution-using-group-by/"},"https://leetcode.com/problems/string-compression/solutions/896587/python-solution-using-group-by/"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from itertools import groupby\n\n\nclass Solution:\n    def compress(self, chars: List[str]) -> int:\n        stack = []\n        for key, group in groupby(chars):\n            count = len(list(group))\n            stack.append(key)\n            if count > 1: stack.extend(list(str(count)))\n        chars[:] = stack\n")),(0,n.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"")))}m.isMDXComponent=!0}}]);