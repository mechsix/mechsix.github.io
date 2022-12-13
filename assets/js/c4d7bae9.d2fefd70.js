"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[23951],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(n),h=l,d=s["".concat(i,".").concat(h)]||s[h]||c[h]||r;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:l,p[1]=o;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85675:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return m}});var a=n(83117),l=(n(67294),n(3905));const r={title:"Heap"},p=void 0,o={unversionedId:"leetcode_note/heap",id:"leetcode_note/heap",title:"Heap",description:"Definition",source:"@site/docs/leetcode_note/heap.md",sourceDirName:"leetcode_note",slug:"/leetcode_note/heap",permalink:"/docs/leetcode_note/heap",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode_note/heap.md",tags:[],version:"current",frontMatter:{title:"Heap"},sidebar:"docSidebar",previous:{title:"Binary Tree",permalink:"/docs/leetcode_note/binary_search"},next:{title:"Linked List",permalink:"/docs/leetcode_note/linked_list"}},i={},m=[{value:"Definition",id:"definition",level:2},{value:"Max Heap",id:"max-heap",level:3},{value:"Min Heap",id:"min-heap",level:3},{value:"Complexity of Operations",id:"complexity-of-operations",level:2},{value:"Question Pattern",id:"question-pattern",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Python",id:"python",level:3},{value:"Construct Heap",id:"construct-heap",level:4},{value:"nlargest &amp; nsmallest",id:"nlargest--nsmallest",level:4}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"definition"},"Definition"),(0,l.kt)("p",null,"\u4e2d\u6587\u7a31\u70ba",(0,l.kt)("inlineCode",{parentName:"p"},"\u5806\u7a4d"),"\uff0c\u5206\u70ba\u6700\u5927\u5806\u7a4d(Max Heap)\u8ddf\u6700\u5c0f\u5806\u7a4d(Min Heap)"),(0,l.kt)("h3",{id:"max-heap"},"Max Heap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Is a complete binary tree"),(0,l.kt)("li",{parentName:"ul"},"All children are equal smaller then current node")),(0,l.kt)("p",null,"Root Node\u6703\u662f\u6700\u5927\u503c"),(0,l.kt)("h3",{id:"min-heap"},"Min Heap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Is a complete binary tree"),(0,l.kt)("li",{parentName:"ul"},"All children are equal or larger then current node")),(0,l.kt)("p",null,"Root Node\u6703\u662f\u6700\u5c0f\u503c"),(0,l.kt)("h2",{id:"complexity-of-operations"},"Complexity of Operations"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operation"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Space"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Construct"),(0,l.kt)("td",{parentName:"tr",align:null},"O(N)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(N)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Insert a Node"),(0,l.kt)("td",{parentName:"tr",align:null},"O(logN)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Delete a Node"),(0,l.kt)("td",{parentName:"tr",align:null},"O(logN)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get the Max/Min"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Get size"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")))),(0,l.kt)("h2",{id:"question-pattern"},"Question Pattern"),(0,l.kt)("p",null,"\u5c0b\u6c42\u6700\u5927(\u5c0f)\uff0c\u6216Nth\u5927(\u5c0f)\u7684\u5143\u7d20\u5e7e\u4e4e\u90fd\u53ef\u4ee5\u9760Heap\u8655\u7406"),(0,l.kt)("p",null,"Steps"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f9d\u984c\u76ee\u6c7a\u5b9a\u8a72\u7528Max Heap\u6216Min Heap"),(0,l.kt)("li",{parentName:"ol"},"Construct Heap"),(0,l.kt)("li",{parentName:"ol"},"Add all elements into Heap"),(0,l.kt)("li",{parentName:"ol"},"Pop N elements from Heap Root to reach the target")),(0,l.kt)("h2",{id:"implementation"},"Implementation"),(0,l.kt)("h3",{id:"python"},"Python"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/heapq.html"},"heapq"))),(0,l.kt)("h4",{id:"construct-heap"},"Construct Heap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Push One by One, not effect to origin list\nelements = [2,3,1,7,6,9]\nheap = []\nfor elm in elements:\n    heapq.heappush(heap, elm)\n\n# Or, transfer a list into heap in liner time\nelements = [2,3,1,7,6,9]\nheapq.heapify(elements)  # elements now a heap\n")),(0,l.kt)("p",null,"\u8981\u5c0f\u5fc3\u7684\u662f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"heappop"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"heappush")," \u9019\u4e9bmethod\u53ea\u5c0dheap\u6709\u6548\u679c"),(0,l.kt)("p",null,"\u76f4\u63a5\u62fflist\u7d66\u4ed6\u7528\u4e0d\u6703exception\uff0c\u4f46pop\u7684\u7d50\u679c\u6703\u932f\u8aa4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"elements = [2,3,1,7,6,9]  # elements is NOT a heap\n\nprint(elements) # [2,3,1,7,6,9]\n\nheapq.heappop(elements) # 2\nheapq.heappop(elements) # 3\nheapq.heappop(elements) # 1\nheapq.heappop(elements) # 7\n")),(0,l.kt)("p",null,"\u521d\u59cb\u5316\u6210heap\u5f8c\u518d\u9032\u884cheappop\u7d50\u679c\u624d\u6703\u6b63\u78ba"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"elements = [2,3,1,7,6,9]\nheapq.heapify(elements)\n\nprint(elements) # [2,3,1,7,6,9] \u770b\u8d77\u4f86\u4e0d\u6703\u6709\u5dee\u7570\uff0c\u4f46\u8cc7\u6599\u7d50\u69cb\u5df2\u7d93\u6539\u8b8a\n\nheapq.heappop(elements)\nheapq.heappop(elements) # 1\nheapq.heappop(elements) # 2\nheapq.heappop(elements) # 3\nheapq.heappop(elements) # 6\n")),(0,l.kt)("h4",{id:"nlargest--nsmallest"},"nlargest & nsmallest"),(0,l.kt)("p",null,"\u62ffPython\u5237\u984c\u9047\u5230heap\u6700\u4f5c\u5f0a\u7684\u5169\u500bfunction\uff0c\u76f4\u63a5\u62ff\u53efiter\u7684\u7269\u4ef6\u505a\u51faheap\u4e26\u62ffNth largest/smallest"),(0,l.kt)("p",null,"\u6ce8\u610f\u9019\u5169\u500bfunction\u7684\u53c3\u6578\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"iterable"),"\u7269\u4ef6\uff0c\u4e5f\u5c31\u662f\u8aaaconstruct\u548c\u4f7f\u7528\u4e00\u6b21\u5b8c\u6210"),(0,l.kt)("p",null,"\u62ff\u51fa\u524dn\u500b\u6700\u5927\u7684elements\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"heapq.nlargest(n, iterable, key=None)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"elements = [2,3,1,7,6,9]\n\n# Example: \u62ff\u524d3\u5927\u7684element\nheapq.nlargest(3, elements) # [9,7,6]\n\n# Example: \u62ff\u7b2c3\u5927\u7684element\nheapq.nlargest(3, elements)[-1] # 6\n\n# \u8981\u6ce8\u610felements\u4ecd\u7136\u662f\u666e\u901alist\uff0c\u5c0d\u4ed6heappop\u6703\u62ff\u5230\u932f\u8aa4\u7d50\u679c\nheapq.heappop(elements)  # 2 (\u61c9\u8a72\u8981\u662f1)\n")),(0,l.kt)("p",null,"\u62ff\u51fa\u524dn\u500b\u6700\u5c0f\u7684elements\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"heapq.nsmallest(n, iterable, key=None)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"elements = [2,3,1,7,6,9]\n\n# Example: \u62ff\u524d2\u5c0f\u7684element\nheapq.nsmallest(3, elements)  # [1,2]\n\n# Example: \u62ff\u7b2c3\u5c0f\u7684element\nheapq.nsmallest(3, elements)[-1] # 3\n")))}s.isMDXComponent=!0}}]);