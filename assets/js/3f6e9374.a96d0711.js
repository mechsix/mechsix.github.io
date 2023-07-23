"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[41507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"Backtracking"},a=void 0,c={unversionedId:"leetcode_note/backtracking",id:"leetcode_note/backtracking",title:"Backtracking",description:"Definition",source:"@site/docs/leetcode_note/backtracking.md",sourceDirName:"leetcode_note",slug:"/leetcode_note/backtracking",permalink:"/docs/leetcode_note/backtracking",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode_note/backtracking.md",tags:[],version:"current",frontMatter:{title:"Backtracking"},sidebar:"docSidebar",previous:{title:"CSS Naming Convention",permalink:"/docs/dev_practice/css_naming_convention"},next:{title:"Binary Tree",permalink:"/docs/leetcode_note/binary_search"}},l={},p=[{value:"Definition",id:"definition",level:2},{value:"Pattern",id:"pattern",level:2}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"\u4e00\u7a2e\u7528\u4f86\u505aBrute Force\u7684\u7aae\u8209\u6240\u6709\u53ef\u80fd\u6027\u7684\u7b97\u6cd5\uff0c\u672c\u8cea\u662fDFS\uff0c\u5beb\u8d77\u4f86\u50cf\u6c7a\u7b56\u6a39\u7684\u4e2d\u5e8f\u904d\u6b77"),(0,o.kt)("h2",{id:"pattern"},"Pattern"),(0,o.kt)("p",null,"\u4f7f\u7528\u905e\u8ff4\u7684\u8a71\uff0c\u57fa\u672cpattern\u9577\u9019\u6a23"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"result = []\ndef backtrack(path, options):\n    if target_meet:\n        result.append(path)\n        return\n    for option in options:\n        # \u505a\u9078\u64c7\n        backtrack(path, options)\n        # \u64a4\u92b7\u9078\u64c7\n")))}d.isMDXComponent=!0}}]);