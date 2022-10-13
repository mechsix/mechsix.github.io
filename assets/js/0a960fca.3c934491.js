"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[18841],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),a=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=a(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||u;return n?r.createElement(d,c(c({ref:t},s),{},{components:n})):r.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,c=new Array(u);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<u;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69393:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s}});var r=n(87462),o=n(63366),u=(n(67294),n(3905)),c=["components"],l={title:"225. Implement Stack using Queues",sidebar_label:"225. Implement Stack using Queues",tags:["Leetcode Easy","Stack","Queue"]},i=void 0,a={unversionedId:"leetcode/1-500/implement_stack_with_queue",id:"leetcode/1-500/implement_stack_with_queue",title:"225. Implement Stack using Queues",description:"https://leetcode.com/problems/implement-stack-using-queues/",source:"@site/docs/leetcode/1-500/225_implement_stack_with_queue.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/implement_stack_with_queue",permalink:"/docs/leetcode/1-500/implement_stack_with_queue",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/225_implement_stack_with_queue.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Stack",permalink:"/docs/tags/stack"},{label:"Queue",permalink:"/docs/tags/queue"}],version:"current",sidebarPosition:225,frontMatter:{title:"225. Implement Stack using Queues",sidebar_label:"225. Implement Stack using Queues",tags:["Leetcode Easy","Stack","Queue"]},sidebar:"docSidebar",previous:{title:"222. Count Complete Tree Nodes",permalink:"/docs/leetcode/1-500/count_complete_bin_tree"},next:{title:"226. Invert Binary Tree",permalink:"/docs/leetcode/1-500/invert_binary_tree"}},s=[{value:"Python",id:"python",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,u.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/implement-stack-using-queues/"},"https://leetcode.com/problems/implement-stack-using-queues/")),(0,u.kt)("h2",{id:"python"},"Python"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n\nclass MyStack:\n\n    def __init__(self):\n        self.queue = deque()\n        self.head = None\n\n    def push(self, x: int) -> None:\n        self.queue.append(x)\n        self.head = x\n\n    def pop(self) -> int:\n        temp = deque()\n        while len(self.queue) > 1:\n            x = self.queue.popleft()\n            temp.append(x)\n            self.head = x\n\n        ans = self.queue.popleft()\n\n        self.queue = temp\n\n        return ans\n\n    def top(self) -> int:\n        return self.head\n\n    def empty(self) -> bool:\n        return not bool(self.queue)\n")))}m.isMDXComponent=!0}}]);