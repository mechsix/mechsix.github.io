"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[12099],{32029:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=o(74848),r=o(28453);const s={title:"283. Move Zeroes",sidebar_label:"283. Move Zeroes",tags:["Leetcode Easy","Two Pointer"]},c=void 0,i={id:"leetcode/1-500/move_zeros",title:"283. Move Zeroes",description:"https://leetcode.com/problems/move-zeroes",source:"@site/docs/leetcode/1-500/283_move_zeros.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/move_zeros",permalink:"/docs/leetcode/1-500/move_zeros",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:283,frontMatter:{title:"283. Move Zeroes",sidebar_label:"283. Move Zeroes",tags:["Leetcode Easy","Two Pointer"]},sidebar:"docSidebar",previous:{title:"278. First Bad Version",permalink:"/docs/leetcode/1-500/first_bad_version"},next:{title:"284. Peeking Iterator",permalink:"/docs/leetcode/1-500/peeking_iterator"}},l={},a=[{value:"Python",id:"python",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/move-zeroes",children:"https://leetcode.com/problems/move-zeroes"})}),"\n",(0,t.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        """\n        Input: nums = [0,1,0,3,12]\n        Output: [1,3,12,0,0]\n\n        """\n        if len(nums) < 2:\n            return\n\n        cur, r = 0, 0\n\n        while r < len(nums):\n            if nums[cur] != 0:\n                cur += 1\n                r = cur\n                continue\n\n            if nums[r] == 0:\n                r += 1\n                continue\n\n            nums[cur], nums[r] = nums[r], nums[cur]\n            cur += 1\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>i});var t=o(96540);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);