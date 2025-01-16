"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4905],{81359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"leetcode/1-500/implement_stack_with_queue","title":"225. Implement Stack using Queues","description":"https://leetcode.com/problems/implement-stack-using-queues/","source":"@site/docs/leetcode/1-500/225_implement_stack_with_queue.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/implement_stack_with_queue","permalink":"/docs/leetcode/1-500/implement_stack_with_queue","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Stack","permalink":"/docs/tags/stack"},{"inline":true,"label":"Queue","permalink":"/docs/tags/queue"}],"version":"current","sidebarPosition":225,"frontMatter":{"title":"225. Implement Stack using Queues","sidebar_label":"225. Implement Stack using Queues","tags":["Leetcode Easy","Stack","Queue"]},"sidebar":"docSidebar","previous":{"title":"223. Rectangle Area","permalink":"/docs/leetcode/1-500/rectangle_area"},"next":{"title":"226. Invert Binary Tree","permalink":"/docs/leetcode/1-500/invert_binary_tree"}}');var l=n(74848),o=n(28453);const u={title:"225. Implement Stack using Queues",sidebar_label:"225. Implement Stack using Queues",tags:["Leetcode Easy","Stack","Queue"]},c=void 0,a={},i=[{value:"Python",id:"python",level:2}];function r(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://leetcode.com/problems/implement-stack-using-queues/",children:"https://leetcode.com/problems/implement-stack-using-queues/"})}),"\n",(0,l.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"from collections import deque\n\n\nclass MyStack:\n\n    def __init__(self):\n        self.queue = deque()\n        self.head = None\n\n    def push(self, x: int) -> None:\n        self.queue.append(x)\n        self.head = x\n\n    def pop(self) -> int:\n        temp = deque()\n        while len(self.queue) > 1:\n            x = self.queue.popleft()\n            temp.append(x)\n            self.head = x\n\n        ans = self.queue.popleft()\n\n        self.queue = temp\n\n        return ans\n\n    def top(self) -> int:\n        return self.head\n\n    def empty(self) -> bool:\n        return not bool(self.queue)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>u,x:()=>c});var s=n(96540);const l={},o=s.createContext(l);function u(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:u(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);