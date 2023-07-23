"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[18841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},i),{},{components:n})):r.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"225. Implement Stack using Queues",sidebar_label:"225. Implement Stack using Queues",tags:["Leetcode Easy","Stack","Queue"]},l=void 0,c={unversionedId:"leetcode/1-500/implement_stack_with_queue",id:"leetcode/1-500/implement_stack_with_queue",title:"225. Implement Stack using Queues",description:"https://leetcode.com/problems/implement-stack-using-queues/",source:"@site/docs/leetcode/1-500/225_implement_stack_with_queue.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/implement_stack_with_queue",permalink:"/docs/leetcode/1-500/implement_stack_with_queue",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/225_implement_stack_with_queue.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Stack",permalink:"/docs/tags/stack"},{label:"Queue",permalink:"/docs/tags/queue"}],version:"current",sidebarPosition:225,frontMatter:{title:"225. Implement Stack using Queues",sidebar_label:"225. Implement Stack using Queues",tags:["Leetcode Easy","Stack","Queue"]},sidebar:"docSidebar",previous:{title:"223. Rectangle Area",permalink:"/docs/leetcode/1-500/rectangle_area"},next:{title:"226. Invert Binary Tree",permalink:"/docs/leetcode/1-500/invert_binary_tree"}},s={},u=[{value:"Python",id:"python",level:2}],i={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-stack-using-queues/"},"https://leetcode.com/problems/implement-stack-using-queues/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n\nclass MyStack:\n\n    def __init__(self):\n        self.queue = deque()\n        self.head = None\n\n    def push(self, x: int) -> None:\n        self.queue.append(x)\n        self.head = x\n\n    def pop(self) -> int:\n        temp = deque()\n        while len(self.queue) > 1:\n            x = self.queue.popleft()\n            temp.append(x)\n            self.head = x\n\n        ans = self.queue.popleft()\n\n        self.queue = temp\n\n        return ans\n\n    def top(self) -> int:\n        return self.head\n\n    def empty(self) -> bool:\n        return not bool(self.queue)\n")))}m.isMDXComponent=!0}}]);