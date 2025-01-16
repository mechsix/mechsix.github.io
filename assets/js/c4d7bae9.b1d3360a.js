"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[77484],{77252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});const l=JSON.parse('{"id":"leetcode_note/heap","title":"Heap","description":"Definition","source":"@site/docs/leetcode_note/heap.md","sourceDirName":"leetcode_note","slug":"/leetcode_note/heap","permalink":"/docs/leetcode_note/heap","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Heap"},"sidebar":"docSidebar","previous":{"title":"Binary Tree","permalink":"/docs/leetcode_note/binary_search"},"next":{"title":"Linked List","permalink":"/docs/leetcode_note/linked_list"}}');var s=t(74848),i=t(28453);const a={title:"Heap"},r=void 0,h={},p=[{value:"Definition",id:"definition",level:2},{value:"Max Heap",id:"max-heap",level:3},{value:"Min Heap",id:"min-heap",level:3},{value:"Complexity of Operations",id:"complexity-of-operations",level:2},{value:"Question Pattern",id:"question-pattern",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Python",id:"python",level:3},{value:"Construct Heap",id:"construct-heap",level:4},{value:"nlargest &amp; nsmallest",id:"nlargest--nsmallest",level:4}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e2d\u6587\u7a31\u70ba",(0,s.jsx)(n.code,{children:"\u5806\u7a4d"}),"\uff0c\u5206\u70ba\u6700\u5927\u5806\u7a4d(Max Heap)\u8ddf\u6700\u5c0f\u5806\u7a4d(Min Heap)"]}),"\n",(0,s.jsx)(n.h3,{id:"max-heap",children:"Max Heap"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Is a complete binary tree"}),"\n",(0,s.jsx)(n.li,{children:"All children are equal smaller then current node"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Root Node\u6703\u662f\u6700\u5927\u503c"}),"\n",(0,s.jsx)(n.h3,{id:"min-heap",children:"Min Heap"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Is a complete binary tree"}),"\n",(0,s.jsx)(n.li,{children:"All children are equal or larger then current node"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Root Node\u6703\u662f\u6700\u5c0f\u503c"}),"\n",(0,s.jsx)(n.h2,{id:"complexity-of-operations",children:"Complexity of Operations"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Time"}),(0,s.jsx)(n.th,{children:"Space"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Construct"}),(0,s.jsx)(n.td,{children:"O(N)"}),(0,s.jsx)(n.td,{children:"O(N)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Insert a Node"}),(0,s.jsx)(n.td,{children:"O(logN)"}),(0,s.jsx)(n.td,{children:"O(1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Delete a Node"}),(0,s.jsx)(n.td,{children:"O(logN)"}),(0,s.jsx)(n.td,{children:"O(1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Get the Max/Min"}),(0,s.jsx)(n.td,{children:"O(1)"}),(0,s.jsx)(n.td,{children:"O(1)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Get size"}),(0,s.jsx)(n.td,{children:"O(1)"}),(0,s.jsx)(n.td,{children:"O(1)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"question-pattern",children:"Question Pattern"}),"\n",(0,s.jsx)(n.p,{children:"\u5c0b\u6c42\u6700\u5927(\u5c0f)\uff0c\u6216Nth\u5927(\u5c0f)\u7684\u5143\u7d20\u5e7e\u4e4e\u90fd\u53ef\u4ee5\u9760Heap\u8655\u7406"}),"\n",(0,s.jsx)(n.p,{children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f9d\u984c\u76ee\u6c7a\u5b9a\u8a72\u7528Max Heap\u6216Min Heap"}),"\n",(0,s.jsx)(n.li,{children:"Construct Heap"}),"\n",(0,s.jsx)(n.li,{children:"Add all elements into Heap"}),"\n",(0,s.jsx)(n.li,{children:"Pop N elements from Heap Root to reach the target"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.h3,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.python.org/3/library/heapq.html",children:"heapq"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"construct-heap",children:"Construct Heap"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Push One by One, not effect to origin list\nelements = [2,3,1,7,6,9]\nheap = []\nfor elm in elements:\n    heapq.heappush(heap, elm)\n\n# Or, transfer a list into heap in liner time\nelements = [2,3,1,7,6,9]\nheapq.heapify(elements)  # elements now a heap\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u5c0f\u5fc3\u7684\u662f\uff0c",(0,s.jsx)(n.code,{children:"heappop"}),", ",(0,s.jsx)(n.code,{children:"heappush"})," \u9019\u4e9bmethod\u53ea\u5c0dheap\u6709\u6548\u679c"]}),"\n",(0,s.jsx)(n.p,{children:"\u76f4\u63a5\u62fflist\u7d66\u4ed6\u7528\u4e0d\u6703exception\uff0c\u4f46pop\u7684\u7d50\u679c\u6703\u932f\u8aa4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"elements = [2,3,1,7,6,9]  # elements is NOT a heap\n\nprint(elements) # [2,3,1,7,6,9]\n\nheapq.heappop(elements) # 2\nheapq.heappop(elements) # 3\nheapq.heappop(elements) # 1\nheapq.heappop(elements) # 7\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u521d\u59cb\u5316\u6210heap\u5f8c\u518d\u9032\u884cheappop\u7d50\u679c\u624d\u6703\u6b63\u78ba"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"elements = [2,3,1,7,6,9]\nheapq.heapify(elements)\n\nprint(elements) # [2,3,1,7,6,9] \u770b\u8d77\u4f86\u4e0d\u6703\u6709\u5dee\u7570\uff0c\u4f46\u8cc7\u6599\u7d50\u69cb\u5df2\u7d93\u6539\u8b8a\n\nheapq.heappop(elements)\nheapq.heappop(elements) # 1\nheapq.heappop(elements) # 2\nheapq.heappop(elements) # 3\nheapq.heappop(elements) # 6\n"})}),"\n",(0,s.jsx)(n.h4,{id:"nlargest--nsmallest",children:"nlargest & nsmallest"}),"\n",(0,s.jsx)(n.p,{children:"\u62ffPython\u5237\u984c\u9047\u5230heap\u6700\u4f5c\u5f0a\u7684\u5169\u500bfunction\uff0c\u76f4\u63a5\u62ff\u53efiter\u7684\u7269\u4ef6\u505a\u51faheap\u4e26\u62ffNth largest/smallest"}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\u9019\u5169\u500bfunction\u7684\u53c3\u6578\u662f",(0,s.jsx)(n.code,{children:"iterable"}),"\u7269\u4ef6\uff0c\u4e5f\u5c31\u662f\u8aaaconstruct\u548c\u4f7f\u7528\u4e00\u6b21\u5b8c\u6210"]}),"\n",(0,s.jsxs)(n.p,{children:["\u62ff\u51fa\u524dn\u500b\u6700\u5927\u7684elements\uff1a",(0,s.jsx)(n.code,{children:"heapq.nlargest(n, iterable, key=None)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"elements = [2,3,1,7,6,9]\n\n# Example: \u62ff\u524d3\u5927\u7684element\nheapq.nlargest(3, elements) # [9,7,6]\n\n# Example: \u62ff\u7b2c3\u5927\u7684element\nheapq.nlargest(3, elements)[-1] # 6\n\n# \u8981\u6ce8\u610felements\u4ecd\u7136\u662f\u666e\u901alist\uff0c\u5c0d\u4ed6heappop\u6703\u62ff\u5230\u932f\u8aa4\u7d50\u679c\nheapq.heappop(elements)  # 2 (\u61c9\u8a72\u8981\u662f1)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u62ff\u51fa\u524dn\u500b\u6700\u5c0f\u7684elements\uff1a",(0,s.jsx)(n.code,{children:"heapq.nsmallest(n, iterable, key=None)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"elements = [2,3,1,7,6,9]\n\n# Example: \u62ff\u524d2\u5c0f\u7684element\nheapq.nsmallest(3, elements)  # [1,2]\n\n# Example: \u62ff\u7b2c3\u5c0f\u7684element\nheapq.nsmallest(3, elements)[-1] # 3\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var l=t(96540);const s={},i=l.createContext(s);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);