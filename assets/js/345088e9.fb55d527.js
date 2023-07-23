"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[21171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=r,u=c["".concat(p,".").concat(f)]||c[f]||m[f]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"295. Find Median from Data Stream",sidebar_label:"295. Find Median from Data Stream",tags:["Leetcode Hard","Heap"]},o=void 0,l={unversionedId:"leetcode/1-500/find_median_from_data_stream",id:"leetcode/1-500/find_median_from_data_stream",title:"295. Find Median from Data Stream",description:"Python",source:"@site/docs/leetcode/1-500/295_find_median_from_data_stream.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/find_median_from_data_stream",permalink:"/docs/leetcode/1-500/find_median_from_data_stream",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/295_find_median_from_data_stream.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Heap",permalink:"/docs/tags/heap"}],version:"current",sidebarPosition:295,frontMatter:{title:"295. Find Median from Data Stream",sidebar_label:"295. Find Median from Data Stream",tags:["Leetcode Hard","Heap"]},sidebar:"docSidebar",previous:{title:"290. Word Pattern",permalink:"/docs/leetcode/1-500/word_pattern"},next:{title:"297. Serialize and Deserialize Binary Tree",permalink:"/docs/leetcode/1-500/serialize_descrialize_bt"}},p={},d=[{value:"Python",id:"python",level:2},{value:"Two Heap",id:"two-heap",level:3}],s={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"python"},"Python"),(0,r.kt)("h3",{id:"two-heap"},"Two Heap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u5169\u500bheap\u5b58\u5927\u7684\u90a3\u4e00\u534a\u8ddf\u5c0f\u7684\u90a3\u4e00\u534a"),(0,r.kt)("li",{parentName:"ul"},"\u5927\u7684\u90a3\u534a\u7528Min Heap\u505a\uff0c\u65b9\u4fbf\u627e\u6700\u5c0f\u503c\uff1b\u5c0f\u7684\u90a3\u534a\u7528Max Heap\u505a\uff0c\u65b9\u4fbf\u627e\u6700\u5927\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u63d2\u5165num\u6642\uff0c\u4e00\u7387\u5148\u63d2\u5165\u5927\u7684\u90a3\u534a\uff0c\u518d\u5f9e\u5927\u7684\u90a3\u534a\u627e\u6700\u5c0f\u503c\u585e\u56de\u5c0f\u7684\u90a3\u534a"),(0,r.kt)("li",{parentName:"ul"},"\u5224\u65b7\u7e3d\u6578\u662f\u5076\u6578\u6216\u5947\u6578\uff0c\u6c7a\u5b9a\u4e2d\u4f4d\u6578\u662f\u55ae\u4e00\u6578\u5b57\u6216\u4e2d\u9593\u5169\u500b\u5e73\u5747")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\n\nclass MedianFinder:\n    def __init__(self):\n        min_heap = []\n        max_heap = []\n\n        heapq.heapify(min_heap)\n        heapq.heapify(max_heap)\n\n        self.min_heap = min_heap\n        self.max_heap = max_heap\n\n\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.min_heap, num)\n        heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))\n\n        if len(self.min_heap) < len(self.max_heap):\n            heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))\n\n    def findMedian(self) -> float:\n        if len(self.min_heap) > len(self.max_heap):\n            return self.min_heap[0]\n        else:\n            return (self.min_heap[0] + (-self.max_heap[0]) ) / 2\n")))}m.isMDXComponent=!0}}]);