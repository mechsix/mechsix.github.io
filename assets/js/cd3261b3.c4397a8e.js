"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[45731],{9117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"leetcode/1-500/restore_ip_addresses","title":"93. Restore IP Addresses","description":"https://leetcode.com/problems/restore-ip-addresses","source":"@site/docs/leetcode/1-500/93_restore_ip_addresses.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/restore_ip_addresses","permalink":"/docs/leetcode/1-500/restore_ip_addresses","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Backtracking","permalink":"/docs/tags/backtracking"}],"version":"current","sidebarPosition":93,"frontMatter":{"title":"93. Restore IP Addresses","slidebar_label":"93. Restore IP Addresses","tags":["Leetcode Medium","Backtracking"]},"sidebar":"docSidebar","previous":{"title":"92. Reverse Linked List II","permalink":"/docs/leetcode/1-500/reverse_linked_list_ii"},"next":{"title":"94. Binary Tree Inorder Traversal","permalink":"/docs/leetcode/1-500/binary_tree_inorder"}}');var r=n(74848),a=n(28453);const c={title:"93. Restore IP Addresses",slidebar_label:"93. Restore IP Addresses",tags:["Leetcode Medium","Backtracking"]},o=void 0,i={},d=[{value:"Python",id:"python",level:2},{value:"Backtracking",id:"backtracking",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/restore-ip-addresses",children:"https://leetcode.com/problems/restore-ip-addresses"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.h3,{id:"backtracking",children:"Backtracking"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def restoreIpAddresses(self, s: str) -> List[str]:\n        ans = []\n        def backtracking(left, stack):\n            if len(stack) == 4 and left == len(s):\n                nonlocal ans\n                ans.append('.'.join([str(num) for num in stack]))\n\n            if len(stack) > 3:\n                return\n\n            if left < len(s) and s[left] == '0':\n                stack.append('0')\n                backtracking(left+1, stack)\n                stack.pop()\n                return\n\n            for right in range(left+1, len(s)+1):\n                cand = s[left:right]\n\n                if int(cand) > 255:\n                    continue\n                stack.append(''.join(cand))\n                backtracking(right, stack)\n                stack.pop()\n\n        backtracking(0, [])\n\n        return ans\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);