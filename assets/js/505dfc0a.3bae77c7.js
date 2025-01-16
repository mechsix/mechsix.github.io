"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[63647],{18795:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"leetcode/1-500/flatten_multilevel_doubly_linked_list","title":"430. Flatten a Multilevel Doubly Linked List","description":"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list","source":"@site/docs/leetcode/1-500/430_flatten_multilevel_doubly_linked_list.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/flatten_multilevel_doubly_linked_list","permalink":"/docs/leetcode/1-500/flatten_multilevel_doubly_linked_list","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":430,"frontMatter":{"title":"430. Flatten a Multilevel Doubly Linked List","sidebar_label":"430. Flatten Doubly Linked List","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"429. N-ary Tree Level Order Traversal","permalink":"/docs/leetcode/1-500/nary_tree_level_order_traversal"},"next":{"title":"435. Non-overlapping Intervals","permalink":"/docs/leetcode/1-500/non_overlapping_intervals"}}');var o=l(74848),i=l(28453);const r={title:"430. Flatten a Multilevel Doubly Linked List",sidebar_label:"430. Flatten Doubly Linked List",tags:["Leetcode Medium"]},c=void 0,s={},d=[{value:"Python",id:"python",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list",children:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"def flatten(self, head: 'Node') -> 'Node':\n    cur, stack = head, []\n    while cur:\n        if cur.child:\n            if cur.next:\n                stack.append(cur.next)\n            cur.child.prev, cur.next, cur.child = cur, cur.child, None\n        elif not cur.next and stack:\n            cur.next, cur.next.prev = stack.pop(), cur\n        cur = cur.next\n    return head\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>c});var n=l(96540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);