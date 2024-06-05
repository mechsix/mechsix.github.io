"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[21124],{65138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var i=t(74848),o=t(28453);const d={title:"61. Rotate List",sidebar_label:"61. Rotate List",tags:["Leetcode Medium","Linked List"]},s=void 0,a={id:"leetcode/1-500/rotate_list",title:"61. Rotate List",description:"https://leetcode.com/problems/rotate-list/",source:"@site/docs/leetcode/1-500/61_rotate_list.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/rotate_list",permalink:"/docs/leetcode/1-500/rotate_list",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:61,frontMatter:{title:"61. Rotate List",sidebar_label:"61. Rotate List",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"59. Spiral Matrix II",permalink:"/docs/leetcode/1-500/spiral_matrix_ii"},next:{title:"62. Unique Paths",permalink:"/docs/leetcode/1-500/unique_paths"}},r={},l=[{value:"Python",id:"python",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/rotate-list/",children:"https://leetcode.com/problems/rotate-list/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Time: O(N+k)"}),"\n",(0,i.jsx)(n.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        if not head or not head.next:\n            return head\n\n        # Find the length\n        length = 0\n        end = head\n        while end:\n            length += 1\n            end = end.next\n\n        # Fine new_head and new_end\n        new_head = head\n        new_end = ListNode(next=head)\n        for i in range(length - k % length):\n            if new_head.next:\n                new_head = new_head.next\n            else:\n                new_head = head\n\n            if new_end:\n                new_end = new_end.next\n            else:\n                new_end = head\n\n        # Find break point\n        cur = new_head\n        while cur.next:\n            cur = cur.next\n\n        # Link break point to origin head\n        # If new_end's next is None, means nothing moved\n        if new_end.next:\n            new_end.next = None\n            cur.next = head\n\n        return new_head\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},d=i.createContext(o);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);