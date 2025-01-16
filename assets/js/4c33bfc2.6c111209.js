"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[30885],{45368:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"leetcode/1-500/house_robber_iii","title":"337. House Robber III","description":"https://leetcode.com/problems/house-robber-iii/","source":"@site/docs/leetcode/1-500/337_house_robber_iii.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/house_robber_iii","permalink":"/docs/leetcode/1-500/house_robber_iii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"},{"inline":true,"label":"Tree","permalink":"/docs/tags/tree"}],"version":"current","sidebarPosition":337,"frontMatter":{"title":"337. House Robber III","sidebar_label":"337. House Robber III","tags":["Leetcode Medium","DP","Tree"]},"sidebar":"docSidebar","previous":{"title":"336. Palindrome Pairs","permalink":"/docs/leetcode/1-500/palindrome_pairs"},"next":{"title":"338. Counting Bits","permalink":"/docs/leetcode/1-500/counting_bits"}}');var i=t(74848),r=t(28453);const s={title:"337. House Robber III",sidebar_label:"337. House Robber III",tags:["Leetcode Medium","DP","Tree"]},d=void 0,c={},l=[{value:"Python",id:"python",level:2},{value:"DFS (Time Limit Exceed)",id:"dfs-time-limit-exceed",level:3}];function a(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:(0,i.jsx)(o.a,{href:"https://leetcode.com/problems/house-robber-iii/",children:"https://leetcode.com/problems/house-robber-iii/"})}),"\n",(0,i.jsx)(o.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(o.h3,{id:"dfs-time-limit-exceed",children:"DFS (Time Limit Exceed)"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-python",children:"class Solution:\n    def rob(self, root: Optional[TreeNode]) -> int:\n\n        def dfs(node, can_pick: bool):\n            if not node:\n                return 0\n\n            skip = dfs(node.left, True) + dfs(node.right, True)\n            if not can_pick:\n                return skip\n\n            pick = node.val + dfs(node.left, False) + dfs(node.right, False)\n\n            return max(pick, skip)\n\n        return max(dfs(root, False), dfs(root, True))\n"})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>d});var n=t(96540);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);