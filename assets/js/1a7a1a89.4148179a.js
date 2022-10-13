"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[96080],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),h=i,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return t?r.createElement(m,a(a({ref:n},d),{},{components:t})):r.createElement(m,a({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},74058:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={title:"146. LRU Cache",sidebar_label:"146. LRU Cache",tags:["Leetcode Medium","Linked List"]},s=void 0,l={unversionedId:"leetcode/1-500/lru_cache",id:"leetcode/1-500/lru_cache",title:"146. LRU Cache",description:"https://leetcode.com/problems/lru-cache/",source:"@site/docs/leetcode/1-500/146_lru_cache.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/lru_cache",permalink:"/docs/leetcode/1-500/lru_cache",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/146_lru_cache.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:146,frontMatter:{title:"146. LRU Cache",sidebar_label:"146. LRU Cache",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"145. Binary Tree Postorder",permalink:"/docs/leetcode/1-500/binary_tree_postorder"},next:{title:"147. Insertion Sort List",permalink:"/docs/leetcode/1-500/insertion_sort_list"}},d=[{value:"Python",id:"python",children:[{value:"Built-in OrderedDict",id:"built-in-ordereddict",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lru-cache/"},"https://leetcode.com/problems/lru-cache/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"built-in-ordereddict"},"Built-in OrderedDict"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import OrderedDict\n\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cache = OrderedDict()\n        self.cap = capacity\n\n    def get(self, key: int) -> int:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n            return self.cache[key]\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n\n        if len(self.cache) > self.cap:\n            self.cache.popitem(last=False)\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class ListNode {\n  constructor(key, value) {\n    this.value = value === undefined ? -1 : value;\n    this.key = key === undefined ? -1 : key;\n    this.next = null;\n    this.prev = null;\n  }\n}\n/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n  this.capacity = capacity;\n  this.size = 0;\n  this.map = {};\n  this.list = new LinkedList();\n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n  if (this.map[key]) {\n    const node = this.map[key];\n    this.list.moveToFront(node);\n    return node.value;\n  } else {\n    return -1;\n  }\n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n  if (this.map[key]) {\n    const node = this.map[key];\n    node.value = value;\n    this.list.moveToFront(node);\n  } else {\n    if (this.size === this.capacity) {\n      const last = this.list.removeLast();\n      delete this.map[last.key];\n      this.size -= 1;\n    }\n    \n    const node = new ListNode(key, value);\n    this.list.insertNode(node);\n    this.map[key] = node;\n    this.size += 1;\n  }\n};\n\nclass LinkedList {\n  constructor() {\n    this.head = new ListNode();\n    this.tail = new ListNode();\n    \n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n  \n  insertNode(node) {\n    node.next = this.head.next;\n    this.head.next.prev = node;\n    \n    node.prev = this.head;\n    this.head.next = node;\n    \n  }\n  \n  removeNode(node) {    \n    node.prev.next = node.next;\n    node.next.prev = node.prev;\n  }\n  \n  moveToFront(node) {\n    this.removeNode(node);\n    this.insertNode(node);\n  }\n  \n  removeLast() {\n    const last = this.tail.prev;\n    this.removeNode(last);\n    return last;\n  }\n}\n\n")))}p.isMDXComponent=!0}}]);