"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[497],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99350:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"1337. The K Weakest Rows in a Matrix",sidebar_label:"1337. The K Weakest Rows in a Matrix",tags:["Leetcode Easy","Heap"]},s=void 0,l={unversionedId:"leetcode/1001-1500/k_weakest_rows_in_matrix",id:"leetcode/1001-1500/k_weakest_rows_in_matrix",title:"1337. The K Weakest Rows in a Matrix",description:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/",source:"@site/docs/leetcode/1001-1500/1337_k_weakest_rows_in_matrix.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/k_weakest_rows_in_matrix",permalink:"/docs/leetcode/1001-1500/k_weakest_rows_in_matrix",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1337_k_weakest_rows_in_matrix.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Heap",permalink:"/docs/tags/heap"}],version:"current",sidebarPosition:1337,frontMatter:{title:"1337. The K Weakest Rows in a Matrix",sidebar_label:"1337. The K Weakest Rows in a Matrix",tags:["Leetcode Easy","Heap"]},sidebar:"docSidebar",previous:{title:"1335. Minimum Difficulty of a Job Schedule",permalink:"/docs/leetcode/1001-1500/min_difficulty_of_job_schedule"},next:{title:"1338. Reduce Array Size to The Half",permalink:"/docs/leetcode/1001-1500/reduce_array_size_to_the_half"}},p=[{value:"Python",id:"python",children:[{value:"Min Heap",id:"min-heap",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"min-heap"},"Min Heap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\n\nclass Solution:\n    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:\n        heap = []\n        for row in mat:\n            total = 0\n            for num in row:\n                if num == 1:\n                    total += 1\n                else:\n                    break\n            heap.append(total)\n\n        return [\n            index for index, _ in\n            heapq.nsmallest(\n                k, enumerate(heap), key=lambda item: item[1]\n            )\n        ]\n")))}m.isMDXComponent=!0}}]);