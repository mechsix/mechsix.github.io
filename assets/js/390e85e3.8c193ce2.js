"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[61335],{55304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/501-1000/design_hashset","title":"706. Design HashMap","description":"Python","source":"@site/docs/leetcode/501-1000/705_design_hashset.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/design_hashset","permalink":"/docs/leetcode/501-1000/design_hashset","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":705,"frontMatter":{"title":"706. Design HashMap","sidebar_label":"706. Design HashMap","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"704. Binary Search","permalink":"/docs/leetcode/501-1000/binary_search"},"next":{"title":"706. Design HashMap","permalink":"/docs/leetcode/501-1000/design_hashmap"}}');var a=n(74848),d=n(28453);const r={title:"706. Design HashMap",sidebar_label:"706. Design HashMap",tags:["Leetcode Easy"]},i=void 0,c={},l=[{value:"Python",id:"python",level:2},{value:"Array as HashMap",id:"array-as-hashmap",level:3}];function o(e){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Method"}),(0,a.jsx)(t.th,{children:"Time"}),(0,a.jsx)(t.th,{children:"Space"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"construct"}),(0,a.jsx)(t.td,{children:"O(1)"}),(0,a.jsx)(t.td,{children:"O(1)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"add"}),(0,a.jsx)(t.td,{children:"O(logN)"}),(0,a.jsx)(t.td,{children:"O(1)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"remove"}),(0,a.jsx)(t.td,{children:"O(3logN)"}),(0,a.jsx)(t.td,{children:"O(1)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"contains"}),(0,a.jsx)(t.td,{children:"O(logN)"}),(0,a.jsx)(t.td,{children:"O(1)"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"array-as-hashmap",children:"Array as HashMap"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"class MyHashSet:\n    def __init__(self):\n        self.data = []\n\n    def add(self, key: int) -> None:\n        if key in self.data:\n            return\n        self.data.append(key)\n\n    def remove(self, key: int) -> None:\n        if key not in self.data:\n            return\n        self.data.pop(self.data.index(key))\n\n    def contains(self, key: int) -> bool:\n        return key in self.data\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const a={},d=s.createContext(a);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);