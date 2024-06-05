"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94526],{46319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(74848),r=n(28453);const i={title:"21. Merge Two Sorted Lists",sidebar_label:"21. Merge Two Sorted Lists",tags:["Linked List","Leetcode Easy"]},o=void 0,l={id:"leetcode/1-500/merge_sorted_list",title:"21. Merge Two Sorted Lists",description:"https://leetcode.com/problems/merge-two-sorted-lists",source:"@site/docs/leetcode/1-500/21_merge_sorted_list.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/merge_sorted_list",permalink:"/docs/leetcode/1-500/merge_sorted_list",draft:!1,unlisted:!1,tags:[{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:21,frontMatter:{title:"21. Merge Two Sorted Lists",sidebar_label:"21. Merge Two Sorted Lists",tags:["Linked List","Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"20. Valid Parentheses",permalink:"/docs/leetcode/1-500/valid_parentheses"},next:{title:"22. Generate Parentheses",permalink:"/docs/leetcode/1-500/generate_parenetheses"}},c={},a=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/merge-two-sorted-lists",children:"https://leetcode.com/problems/merge-two-sorted-lists"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(t.p,{children:["(This is be used in ",(0,s.jsx)(t.a,{href:"/docs/leetcode/1-500/reorder_list",children:"143. Reorder List"}),")"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        cur1, cur2 = l1, l2\n        head = ListNode(val=-1)\n        current = head\n\n        while(cur1 and cur2):\n            if cur1.val > cur2.val:\n                current.next = cur2\n                cur2 = cur2.next\n            else:\n                current.next = cur1\n                cur1 = cur1.next\n            current = current.next\n\n        if cur1 is not None:\n            current.next = cur1\n\n        if cur2 is not None:\n            current.next = cur2\n\n        return head.next\n"})}),"\n",(0,s.jsx)(t.h2,{id:"javascript",children:"Javascript"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:" var mergeTwoLists = function(list1, list2) {\n  let head = new ListNode();\n  let start = head;\n  while (list1 !== null && list2 !== null) {\n    if (list1.val < list2.val) {\n      start.next = list1;\n      list1 = list1.next;\n    } else {\n      start.next = list2;\n      list2 = list2.next;\n    }\n    start = start.next;\n  }\n  start.next = list1 === null ? list2 : list1;\n  return head.next;\n};\n\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);