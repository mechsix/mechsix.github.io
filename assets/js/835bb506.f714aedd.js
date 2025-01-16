"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[74872],{1272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>f,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/501-1000/design_linked_list","title":"707. Design Linked List","description":"https://leetcode.com/problems/design-linked-list/","source":"@site/docs/leetcode/501-1000/707_design_linked_list.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/design_linked_list","permalink":"/docs/leetcode/501-1000/design_linked_list","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Linked List","permalink":"/docs/tags/linked-list"}],"version":"current","sidebarPosition":707,"frontMatter":{"title":"707. Design Linked List","sidebar_label":"707. Design Linked List","tags":["Leetcode Medium","Linked List"]},"sidebar":"docSidebar","previous":{"title":"706. Design HashMap","permalink":"/docs/leetcode/501-1000/design_hashmap"},"next":{"title":"712. Minimum ASCII Delete Sum for Two Strings","permalink":"/docs/leetcode/501-1000/minimum-ascii-delete-sum-for-two-strings"}}');var s=t(74848),l=t(28453);const d={title:"707. Design Linked List",sidebar_label:"707. Design Linked List",tags:["Leetcode Medium","Linked List"]},r=void 0,o={},a=[{value:"Python",id:"python",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/design-linked-list/",children:"https://leetcode.com/problems/design-linked-list/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class ListNode:\n    def __init__(self, val, nxt=None, pre=None):\n        self.val = val\n        self.next = nxt\n        self.pre = pre\n\nclass MyLinkedList:\n    def __init__(self):\n        self.size = 0\n        self.head = ListNode(val=None)\n        self.tail = ListNode(val=None)\n        self.head.next = self.tail\n        self.tail.pre = self.head\n\n    def get(self, index: int) -> int:\n        if index < 0 or index >= self.size:\n            return -1\n\n        c = self.head\n        while c:\n            print(c.val, end=", ")\n            c = c.next\n        cur = self.head\n        for i in range(index+1):\n            cur = cur.next\n        return cur.val\n\n    def addAtHead(self, val: int) -> None:\n        pre, succ = self.head, self.head.next\n        new_node = ListNode(\n            val=val,\n            nxt=self.head.next,\n            pre=self.head\n        )\n\n        self.head.next.pre = new_node\n        self.head.next = new_node\n        self.size += 1\n\n    def addAtTail(self, val: int) -> None:\n        new_node = ListNode(\n            val=val,\n            nxt=self.tail,\n            pre=self.tail.pre\n        )\n        self.tail.pre.next = new_node\n        self.tail.pre = new_node\n        self.size += 1\n\n    def addAtIndex(self, index: int, val: int) -> None:\n        if index > self.size:\n            return\n\n        # To sure index not be native number\n        index = max(0, index)\n\n        cur = self.head\n        for _ in range(index):\n            cur = cur.next\n\n        new_node = ListNode(\n            val = val,\n            nxt=cur.next,\n            pre=cur\n        )\n        cur.next.pre = new_node\n        cur.next = new_node\n        self.size += 1\n\n    def deleteAtIndex(self, index: int) -> None:\n        if index < 0 or index >= self.size:\n            return\n\n        cur = self.head\n        for _ in range(index):\n            cur = cur.next\n        succ = cur.next.next\n\n        cur.next = succ\n        succ.pre = cur\n        self.size -= 1\n'})})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);