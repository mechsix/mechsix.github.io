"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"382. Linked List Random Node",sidebar_label:"382. Linked List Random Node",tags:["Leetcode Medium","Linked List"]},a=void 0,l={unversionedId:"leetcode/1-500/linked_list_rand_node",id:"leetcode/1-500/linked_list_rand_node",title:"382. Linked List Random Node",description:"https://leetcode.com/problems/linked-list-random-node",source:"@site/docs/leetcode/1-500/382_linked_list_rand_node.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/linked_list_rand_node",permalink:"/docs/leetcode/1-500/linked_list_rand_node",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/382_linked_list_rand_node.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:382,frontMatter:{title:"382. Linked List Random Node",sidebar_label:"382. Linked List Random Node",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"378. Kth Smallest Element in a Sorted Matrix",permalink:"/docs/leetcode/1-500/kth_smallest_elm_in_sorted_martrix"},next:{title:"383. Ransom Note",permalink:"/docs/leetcode/1-500/ransom_note"}},d={},c=[{value:"Python",id:"python",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/linked-list-random-node"},"https://leetcode.com/problems/linked-list-random-node")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from random import randint\n\n\nclass Solution:\n\n    def __init__(self, head: Optional[ListNode]):\n        n = 0\n        cur = head\n        while cur:\n            n += 1\n            cur = cur.next\n        self.n = n\n        self.head = head\n\n    def getRandom(self) -> int:\n        step = randint(0, self.n-1)\n        cur = self.head\n        for i in range(0, step):\n            cur = cur.next\n\n        return cur.val\n")))}u.isMDXComponent=!0}}]);