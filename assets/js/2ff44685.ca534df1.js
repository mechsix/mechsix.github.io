"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[41614],{90203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"leetcode/1-500/min_stack","title":"155. Min Stack","description":"https://leetcode.com/problems/min-stack/","source":"@site/docs/leetcode/1-500/155_min_stack.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/min_stack","permalink":"/docs/leetcode/1-500/min_stack","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Stack","permalink":"/docs/tags/stack"}],"version":"current","sidebarPosition":155,"frontMatter":{"title":"155. Min Stack","sidebar_label":"155. Min Stack","tags":["Leetcode Easy","Stack"]},"sidebar":"docSidebar","previous":{"title":"153. Find Minimum in Rotated Sorted Array","permalink":"/docs/leetcode/1-500/find_min_in_rotated_sorted_array"},"next":{"title":"160. Intersection of Two Linked Lists","permalink":"/docs/leetcode/1-500/intersection_two_linked_lists"}}');var o=n(74848),c=n(28453);const i={title:"155. Min Stack",sidebar_label:"155. Min Stack",tags:["Leetcode Easy","Stack"]},a=void 0,r={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/min-stack/",children:"https://leetcode.com/problems/min-stack/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class MinStack:\n    def __init__(self):\n        self.stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n\n    def pop(self) -> None:\n        if not self.stack:\n            return\n        self.stack.pop()\n\n    def top(self) -> int:\n        if not self.stack:\n            return\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return min(self.stack)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},c=s.createContext(o);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);