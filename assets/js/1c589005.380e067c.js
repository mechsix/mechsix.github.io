"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2043],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58099:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"703. Kth Largest Element in a Stream",sidebar_label:"703. Kth Largest Element in a Stream",tags:["Leetcode Medium","Heap"]},c=void 0,s={unversionedId:"leetcode/501-1000/kth_largest_elm_in_stream",id:"leetcode/501-1000/kth_largest_elm_in_stream",title:"703. Kth Largest Element in a Stream",description:"https://leetcode.com/problems/kth-largest-element-in-a-stream/",source:"@site/docs/leetcode/501-1000/703_kth_largest_elm_in_stream.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/kth_largest_elm_in_stream",permalink:"/docs/leetcode/501-1000/kth_largest_elm_in_stream",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/703_kth_largest_elm_in_stream.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Heap",permalink:"/docs/tags/heap"}],version:"current",sidebarPosition:703,frontMatter:{title:"703. Kth Largest Element in a Stream",sidebar_label:"703. Kth Largest Element in a Stream",tags:["Leetcode Medium","Heap"]},sidebar:"docSidebar",previous:{title:"701. Insert into a Binary Search Tree",permalink:"/docs/leetcode/501-1000/insert_bst_node"},next:{title:"704. Binary Search",permalink:"/docs/leetcode/501-1000/binary_search"}},p=[{value:"Python",id:"python",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/kth-largest-element-in-a-stream/"},"https://leetcode.com/problems/kth-largest-element-in-a-stream/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\n\nclass KthLargest:\n\n    def __init__(self, k: int, nums: List[int]):\n        heap = nums[:]\n        heapq.heapify(heap)\n\n        for i in range(len(heap)-k):\n            heapq.heappop(heap)\n\n        self.heap = heap\n        self.k = k\n\n    def add(self, val: int) -> int:\n        heapq.heappush(self.heap, val)\n        if len(self.heap) > self.k:\n            heapq.heappop(self.heap)\n\n        return self.heap[0]\n")))}u.isMDXComponent=!0}}]);