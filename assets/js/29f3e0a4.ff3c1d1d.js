"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[46685],{52560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"leetcode/1-500/reorder_list","title":"143. Reorder List","description":"https://leetcode.com/problems/reorder-list/","source":"@site/docs/leetcode/1-500/143_reorder_list.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/reorder_list","permalink":"/docs/leetcode/1-500/reorder_list","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Linked List","permalink":"/docs/tags/linked-list"}],"version":"current","sidebarPosition":143,"frontMatter":{"title":"143. Reorder List","slidebar_label":"143. Reorder List","tags":["Leetcode Medium","Linked List"]},"sidebar":"docSidebar","previous":{"title":"142. Linked List Cycle II","permalink":"/docs/leetcode/1-500/linked_list_cycle_ii"},"next":{"title":"144. Binary Tree Preorder Traversal","permalink":"/docs/leetcode/1-500/binary_tree_preorder"}}');var i=r(74848),o=r(28453);const s={title:"143. Reorder List",slidebar_label:"143. Reorder List",tags:["Leetcode Medium","Linked List"]},d=void 0,l={},c=[{value:"Python",id:"python",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/reorder-list/",children:"https://leetcode.com/problems/reorder-list/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        if not head:\n            return\n\n        # Leetcode 876: Middle of Linked List\n        left, right = head, head\n        while right and right.next:\n            left = left.next\n            right = right.next.next\n\n        # Leetcode 206: Reverse Linked List\n        pre, cur = None, left\n        while cur:\n            cur.next, pre, cur = pre, cur, cur.next\n\n        # Leetcode 21: Merge Two Sorted Linked Lists\n        left, right = head, pre\n        while right.next:\n            left.next, left = right, left.next\n            right.next, right = left, right.next\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var n=r(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);