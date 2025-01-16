"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[14904],{51610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"leetcode/1-500/insert_delete_get_random_o1","title":"380. Insert Delete GetRandom O(1)","description":"https://leetcode.com/problems/insert-delete-getrandom-o1","source":"@site/docs/leetcode/1-500/380_insert_delete_get_random_o1.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/insert_delete_get_random_o1","permalink":"/docs/leetcode/1-500/insert_delete_get_random_o1","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Hash","permalink":"/docs/tags/hash"}],"version":"current","sidebarPosition":380,"frontMatter":{"title":"380. Insert Delete GetRandom O(1)","sidebar_label":"380. Insert Delete GetRandom O(1)","tags":["Leetcode Medium","Hash"]},"sidebar":"docSidebar","previous":{"title":"378. Kth Smallest Element in a Sorted Matrix","permalink":"/docs/leetcode/1-500/kth_smallest_elm_in_sorted_martrix"},"next":{"title":"382. Linked List Random Node","permalink":"/docs/leetcode/1-500/linked_list_rand_node"}}');var r=n(74848),s=n(28453);const l={title:"380. Insert Delete GetRandom O(1)",sidebar_label:"380. Insert Delete GetRandom O(1)",tags:["Leetcode Medium","Hash"]},d=void 0,i={},a=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/insert-delete-getrandom-o1",children:"https://leetcode.com/problems/insert-delete-getrandom-o1"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import random\n\n\nclass RandomizedSet:\n\n    def __init__(self):\n        self.memory = set()\n\n    def insert(self, val: int) -> bool:\n        if val in self.memory:\n            return False\n        self.memory.add(val)\n        return True\n\n    def remove(self, val: int) -> bool:\n        if val in self.memory:\n            self.memory.remove(val)\n            return True\n        return False\n\n    def getRandom(self) -> int:\n        picked = random.randrange(0, len(self.memory))\n        return list(self.memory)[picked]\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var o=n(96540);const r={},s=o.createContext(r);function l(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);