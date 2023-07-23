"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[83184],{3905:(e,r,t)=>{t.d(r,{Zo:()=>a,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},a=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),f=s(t),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||l;return t?n.createElement(m,u(u({ref:r},a),{},{components:t})):n.createElement(m,u({ref:r},a))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,u=new Array(l);u[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[f]="string"==typeof e?e:o,u[1]=i;for(var s=2;s<l;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},30295:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const l={title:"622. Design Circular Queue",sidebar_label:"622. Design Circular Queue",tags:["Leetcode Medium","Queue"]},u=void 0,i={unversionedId:"leetcode/501-1000/design_circular_queue",id:"leetcode/501-1000/design_circular_queue",title:"622. Design Circular Queue",description:"https://leetcode.com/problems/design-circular-queue/",source:"@site/docs/leetcode/501-1000/622_design_circular_queue.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/design_circular_queue",permalink:"/docs/leetcode/501-1000/design_circular_queue",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/622_design_circular_queue.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Queue",permalink:"/docs/tags/queue"}],version:"current",sidebarPosition:622,frontMatter:{title:"622. Design Circular Queue",sidebar_label:"622. Design Circular Queue",tags:["Leetcode Medium","Queue"]},sidebar:"docSidebar",previous:{title:"617. Merge Two Binary Trees",permalink:"/docs/leetcode/501-1000/merge_two_binary_trees"},next:{title:"623. Add One Row to Tree",permalink:"/docs/leetcode/501-1000/add_one_row_to_tree"}},c={},s=[{value:"Python",id:"python",level:2}],a={toc:s},f="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(f,(0,n.Z)({},a,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/design-circular-queue/"},"https://leetcode.com/problems/design-circular-queue/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyCircularQueue:\n\n    def __init__(self, k: int):\n        self.queue = [-1 for _ in range(k)]\n        self.rear = 0\n        self.front = 0\n        self.count = 0\n        self.cap = k\n\n    def enQueue(self, value: int) -> bool:\n        if self.isFull():\n            return False\n\n        index = (self.front + self.count) % self.cap\n        self.queue[index] = value\n        self.count += 1\n        return True\n\n    def deQueue(self) -> bool:\n        if self.isEmpty():\n            return False\n\n        self.front = (self.front+1) % self.cap\n        self.count -= 1\n\n        return True\n\n    def Front(self) -> int:\n        if self.isEmpty():\n            return -1\n        return self.queue[self.front]\n\n    def Rear(self) -> int:\n        if self.isEmpty():\n            return -1\n        index = (self.front + self.count - 1) % self.cap\n        return self.queue[index]\n\n    def isEmpty(self) -> bool:\n        return self.count == 0\n\n    def isFull(self) -> bool:\n        return self.count == self.cap\n")))}d.isMDXComponent=!0}}]);