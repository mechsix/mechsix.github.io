"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5532],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67941:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"382. Linked List Random Node",sidebar_label:"382. Linked List Random Node",tags:["Leetcode Medium","Linked List"]},d=void 0,c={unversionedId:"leetcode/1-500/linked_list_rand_node",id:"leetcode/1-500/linked_list_rand_node",title:"382. Linked List Random Node",description:"https://leetcode.com/problems/linked-list-random-node",source:"@site/docs/leetcode/1-500/382_linked_list_rand_node.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/linked_list_rand_node",permalink:"/docs/leetcode/1-500/linked_list_rand_node",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/382_linked_list_rand_node.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:382,frontMatter:{title:"382. Linked List Random Node",sidebar_label:"382. Linked List Random Node",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"378. Kth Smallest Element in a Sorted Matrix",permalink:"/docs/leetcode/1-500/kth_smallest_elm_in_sorted_martrix"},next:{title:"383. Ransom Note",permalink:"/docs/leetcode/1-500/ransom_note"}},s=[{value:"Python",id:"python",children:[],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/linked-list-random-node"},"https://leetcode.com/problems/linked-list-random-node")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from random import randint\n\n\nclass Solution:\n\n    def __init__(self, head: Optional[ListNode]):\n        n = 0\n        cur = head\n        while cur:\n            n += 1\n            cur = cur.next\n        self.n = n\n        self.head = head\n\n    def getRandom(self) -> int:\n        step = randint(0, self.n-1)\n        cur = self.head\n        for i in range(0, step):\n            cur = cur.next\n\n        return cur.val\n")))}p.isMDXComponent=!0}}]);