"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4749],{61599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var o=t(74848),i=t(28453);const s={title:"1290. Convert Binary Number in a Linked List to Integer",sidebar_label:"1290. Binary Num Linked List to Integer",tags:["Leetcode Easy"]},d=void 0,l={id:"leetcode/1001-1500/bin_linked_list_to_decimal",title:"1290. Convert Binary Number in a Linked List to Integer",description:"Python",source:"@site/docs/leetcode/1001-1500/1290_bin_linked_list_to_decimal.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/bin_linked_list_to_decimal",permalink:"/docs/leetcode/1001-1500/bin_linked_list_to_decimal",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1290,frontMatter:{title:"1290. Convert Binary Number in a Linked List to Integer",sidebar_label:"1290. Binary Num Linked List to Integer",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1288. Remove Covered Intervals",permalink:"/docs/leetcode/1001-1500/remove_covered_intervals"},next:{title:"1291. Sequential Digits",permalink:"/docs/leetcode/1001-1500/sequential_digits"}},r={},a=[{value:"Python",id:"python",level:2}];function c(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.p,{children:"First try, O(2N)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def getDecimalValue(self, head: ListNode) -> int:\n        length = 0\n        node = head\n        while node:\n            length += 1\n            node = node.next\n\n        result = 0\n        exp = length - 1\n\n        node = head\n        while node:\n            result += node.val * (2 ** exp)\n            exp = exp - 1\n            node = node.next\n        return result\n"})}),"\n",(0,o.jsx)(n.p,{children:"Second try, optimize version, O(N + logN)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def getDecimalValue(self, head: ListNode) -> int:\n        length = 0\n        node = head\n        while node:\n            length += 1\n            node = node.next\n\n        result = 0\n        exp = 2 ** (length - 1)\n\n        node = head\n        while node:\n            if node.val:\n                result += node.val * exp\n            exp = exp // 2\n            node = node.next\n        return result\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var o=t(96540);const i={},s=o.createContext(i);function d(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);