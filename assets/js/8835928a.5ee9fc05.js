"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[59096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const s={title:"232. Implement Queue using Stacks",sidebar_label:"232. Implement Queue using Stacks",tags:["Leetcode Easy","Stack"]},a=void 0,l={unversionedId:"leetcode/1-500/implement_queue_using_stacks",id:"leetcode/1-500/implement_queue_using_stacks",title:"232. Implement Queue using Stacks",description:"https://leetcode.com/problems/implement-queue-using-stacks/",source:"@site/docs/leetcode/1-500/232_implement_queue_using_stacks.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/implement_queue_using_stacks",permalink:"/docs/leetcode/1-500/implement_queue_using_stacks",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/232_implement_queue_using_stacks.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Stack",permalink:"/docs/tags/stack"}],version:"current",sidebarPosition:232,frontMatter:{title:"232. Implement Queue using Stacks",sidebar_label:"232. Implement Queue using Stacks",tags:["Leetcode Easy","Stack"]},sidebar:"docSidebar",previous:{title:"231. Power of Two",permalink:"/docs/leetcode/1-500/power_of_two"},next:{title:"234. Palindrome Linked List",permalink:"/docs/leetcode/1-500/palindrome_linked_list"}},c={},i=[{value:"Python",id:"python",level:2}],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-queue-using-stacks/"},"https://leetcode.com/problems/implement-queue-using-stacks/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyQueue:\n    def __init__(self):\n        self.stack = []\n\n    def push(self, x: int) -> None:\n        self.stack.append(x)\n\n    def pop(self) -> int:\n        keep = []\n\n        while self.stack:\n            keep.append(self.stack.pop())\n        \n        result = keep.pop()\n        \n        while keep:\n            self.stack.append(keep.pop())\n\n        return result\n        \n\n    def peek(self) -> int:\n        return self.stack[0]\n        \n\n    def empty(self) -> bool:\n        return not bool(self.stack)\n")))}m.isMDXComponent=!0}}]);