"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[99281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||c;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const c={title:"394. Decode String",sidebar_label:"394. Decode String",tags:["Leetcode Medium","Stack","String"]},i=void 0,a={unversionedId:"leetcode/1-500/decode_string",id:"leetcode/1-500/decode_string",title:"394. Decode String",description:"https://leetcode.com/problems/decode-string/",source:"@site/docs/leetcode/1-500/394_decode_string.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/decode_string",permalink:"/docs/leetcode/1-500/decode_string",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/394_decode_string.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Stack",permalink:"/docs/tags/stack"},{label:"String",permalink:"/docs/tags/string"}],version:"current",sidebarPosition:394,frontMatter:{title:"394. Decode String",sidebar_label:"394. Decode String",tags:["Leetcode Medium","Stack","String"]},sidebar:"docSidebar",previous:{title:"392. Is Subsequence",permalink:"/docs/leetcode/1-500/is_subsequence"},next:{title:"399. Evaluate Division",permalink:"/docs/leetcode/1-500/evaluate_division"}},s={},l=[{value:"Python",id:"python",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/decode-string/"},"https://leetcode.com/problems/decode-string/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n\nclass Solution:\n    def decodeString(self, s: str) -> str:\n        stack = []\n        for c in range(len(s)):\n            if s[c] != ']':\n                stack.append(s[c])\n                continue\n\n            num, letters = deque(), deque()\n\n            while stack[-1] != '[':\n                letters.appendleft(stack.pop())\n\n            stack.pop()\n\n            while stack and stack[-1].isdigit():\n                num.appendleft(stack.pop())\n\n            stack.append(int(''.join(num)) * ''.join(letters))\n\n        return \"\".join(stack)\n\n")))}u.isMDXComponent=!0}}]);