"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[46263],{83493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/501-1000/random_pick_with_weight","title":"528. Random Pick with Weight","description":"https://leetcode.com/problems/random-pick-with-weight/","source":"@site/docs/leetcode/501-1000/528_random_pick_with_weight.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/random_pick_with_weight","permalink":"/docs/leetcode/501-1000/random_pick_with_weight","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Random","permalink":"/docs/tags/random"},{"inline":true,"label":"Prefix Sum","permalink":"/docs/tags/prefix-sum"}],"version":"current","sidebarPosition":528,"frontMatter":{"title":"528. Random Pick with Weight","sidebar_label":"528. Random Pick with Weight","tags":["Leetcode Medium","Random","Prefix Sum"]},"sidebar":"docSidebar","previous":{"title":"525. Contiguous Array","permalink":"/docs/leetcode/501-1000/contiguous_array"},"next":{"title":"530. Minimum Absolute Difference in BST","permalink":"/docs/leetcode/501-1000/min_absolute_diff_in_bst"}}');var r=n(74848),o=n(28453);const l={title:"528. Random Pick with Weight",sidebar_label:"528. Random Pick with Weight",tags:["Leetcode Medium","Random","Prefix Sum"]},s=void 0,c={},a=[{value:"Python",id:"python",level:2},{value:"Brute Force (Timelimit Exceed)",id:"brute-force-timelimit-exceed",level:3},{value:"Prefix Sum",id:"prefix-sum",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/random-pick-with-weight/",children:"https://leetcode.com/problems/random-pick-with-weight/"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.h3,{id:"brute-force-timelimit-exceed",children:"Brute Force (Timelimit Exceed)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from random import randrange\n\n\nclass Solution:\n\n    def __init__(self, w: List[int]):\n        self.memory = []\n        for index, weight in enumerate(w):\n            for i in range(weight):\n                self.memory.append(index)\n\n    def pickIndex(self) -> int:\n        pick = randrange(len(self.memory))\n        return self.memory[pick]\n"})}),"\n",(0,r.jsx)(t.h3,{id:"prefix-sum",children:"Prefix Sum"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Reference: ",(0,r.jsx)(t.a,{href:"https://www.twblogs.net/a/5edebd5274efa30adcc735cc",children:"https://www.twblogs.net/a/5edebd5274efa30adcc735cc"})]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from random import randrange\n\n\nclass Solution:\n\n    def __init__(self, w: List[int]):\n        prefix_sum = []\n        total = 0\n        for weight in w:\n            total += weight\n            prefix_sum.append(total)\n\n        self.prefix_sum = prefix_sum\n        self.total = total\n\n    def pickIndex(self) -> int:\n        # target = 0 ~ total\n        target = randrange(self.total)\n\n        left, right = 0, len(self.prefix_sum)\n\n        # Binary search the section of picked target\n        while left < right:\n            pivot = left + (right-left) // 2\n\n            if target >= self.prefix_sum[pivot]:\n                left = pivot + 1\n            else:\n                right = pivot\n\n        return left\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);