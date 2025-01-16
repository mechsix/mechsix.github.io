"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37855],{35842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1-500/merge_k_sorted_lists","title":"23. Merge k Sorted Lists","description":"https://leetcode.com/problems/merge-k-sorted-lists/","source":"@site/docs/leetcode/1-500/23_merge_k_sorted_lists.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/merge_k_sorted_lists","permalink":"/docs/leetcode/1-500/merge_k_sorted_lists","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Linked List","permalink":"/docs/tags/linked-list"},{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"Heap","permalink":"/docs/tags/heap"}],"version":"current","sidebarPosition":23,"frontMatter":{"title":"23. Merge k Sorted Lists","sidebar_label":"23. Merge k Sorted Lists","tags":["Linked List","Leetcode Hard","Heap"]},"sidebar":"docSidebar","previous":{"title":"22. Generate Parentheses","permalink":"/docs/leetcode/1-500/generate_parenetheses"},"next":{"title":"24. Swap Nodes in Pairs","permalink":"/docs/leetcode/1-500/swap_nodes_in_pairs"}}');var i=n(74848),l=n(28453);const r={title:"23. Merge k Sorted Lists",sidebar_label:"23. Merge k Sorted Lists",tags:["Linked List","Leetcode Hard","Heap"]},o=void 0,a={},d=[{value:"Python",id:"python",level:2},{value:"Heap Sort",id:"heap-sort",level:3},{value:"Forces Bust (Timeout)",id:"forces-bust-timeout",level:3},{value:"Javascript",id:"javascript",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/merge-k-sorted-lists/",children:"https://leetcode.com/problems/merge-k-sorted-lists/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.h3,{id:"heap-sort",children:"Heap Sort"}),"\n",(0,i.jsxs)(t.p,{children:["Use the built-in ",(0,i.jsx)(t.a,{href:"https://docs.python.org/3/library/heapq.html",children:"heapq"})," data structure"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Time: O(n)"}),"\n",(0,i.jsx)(t.li,{children:"Space: O(n)"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from heapq import heappush, heappop\n\n\nclass Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        heap = []\n        for head in lists:\n            node = head\n            while node:\n                heappush(heap, node.val)\n                node = node.next\n\n        head = ListNode()\n        node = head\n        while heap:\n            node.next = ListNode(val=heappop(heap))\n            node = node.next\n\n        return head.next\n"})}),"\n",(0,i.jsx)(t.h3,{id:"forces-bust-timeout",children:"Forces Bust (Timeout)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n        head = ListNode()\n        cur = head\n\n        while any(lists):\n            min_val = 10 ** 4\n            min_index = None\n\n            for index, head_node in enumerate(lists):\n                if head_node is None:\n                    continue\n\n                if head_node.val < min_val:\n                    min_index = index\n                    min_val = head_node.val\n\n            cur.next = ListNode(val=min_val)\n            cur = cur.next\n            lists[min_index] = lists[min_index].next\n\n        return head.next\n"})}),"\n",(0,i.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var mergeKLists = function(lists) {\n    if (lists.length === 0) return new ListNode().next;\n    \n    let result = lists[0];\n    for (let i = 1; i < lists.length; i++) {\n        result = mergeList(result, lists[i]);\n    }\n    return result;\n};\n\nvar mergeList = function(list1, list2) {\n    let head = new ListNode();\n    let start = head;\n    \n    while (list1 !== null && list2 !== null) {\n        if (list1.val < list2.val) {\n            start.next = list1;\n            list1 = list1.next;\n        } else {\n            start.next = list2;\n            list2 = list2.next;\n        }\n        start = start.next;\n    }\n    \n    start.next = list1 === null ? list2 : list1;\n    return head.next;\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);