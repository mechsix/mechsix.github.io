"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2712],{67523:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1501-2000/swap_nodes_in_linked_list","title":"1721. Swapping Nodes in a Linked List","description":"https://mech.run/docs/leetcode/1-500/swapnodesin_pairs","source":"@site/docs/leetcode/1501-2000/1721_swap_nodes_in_linked_list.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/swap_nodes_in_linked_list","permalink":"/docs/leetcode/1501-2000/swap_nodes_in_linked_list","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Linked List","permalink":"/docs/tags/linked-list"}],"version":"current","sidebarPosition":1721,"frontMatter":{"title":"1721. Swapping Nodes in a Linked List","sidebar_label":"1721. Swapping Nodes in a Linked List","tags":["Leetcode Medium","Linked List"]},"sidebar":"docSidebar","previous":{"title":"1706. Where Will the Ball Fall","permalink":"/docs/leetcode/1501-2000/where_will_the_ball_fall"},"next":{"title":"1732. Find the Highest Altitude","permalink":"/docs/leetcode/1501-2000/find_highest_altitude"}}');var s=t(74848),r=t(28453);const o={title:"1721. Swapping Nodes in a Linked List",sidebar_label:"1721. Swapping Nodes in a Linked List",tags:["Leetcode Medium","Linked List"]},l=void 0,d={},c=[{value:"Python",id:"python",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://mech.run/docs/leetcode/1-500/swap_nodes_in_pairs",children:"https://mech.run/docs/leetcode/1-500/swap_nodes_in_pairs"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Time: O(N+K)"}),"\n",(0,s.jsx)(n.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        dummy = ListNode(next=head)\n\n        # Find left position\n        lpre, lcur = dummy, head\n        for i in range(k-1):\n            lpre = lpre.next\n            lcur = lcur.next\n\n        # Build the stack get ready to reverse travel\n        stack = []\n        cur = dummy\n        while cur:\n            stack.append(cur)\n            cur = cur.next\n\n        # Find right position from stack\n        rcur = stack[-1]\n        for i in range(k):\n            rcur = stack.pop()\n        rpre = stack.pop()\n\n        # Swap the left and right position\n        lpre.next, rpre.next = rcur, lcur\n        lcur.next, rcur.next = rcur.next, lcur.next\n\n        return dummy.next\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);