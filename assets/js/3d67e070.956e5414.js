"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[40129],{7705:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"leetcode/1-500/logger_rate_limiter","title":"359. Logger Rate Limiter","description":"https://leetcode.com/problems/logger-rate-limiter","source":"@site/docs/leetcode/1-500/359_logger_rate_limiter.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/logger_rate_limiter","permalink":"/docs/leetcode/1-500/logger_rate_limiter","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Leetcode Premium","permalink":"/docs/tags/leetcode-premium"},{"inline":true,"label":"Leetcode Optimable","permalink":"/docs/tags/leetcode-optimable"}],"version":"current","sidebarPosition":359,"frontMatter":{"title":"359. Logger Rate Limiter","sidebar_label":"359. Logger Rate Limiter","tags":["Leetcode Easy","Leetcode Premium","Leetcode Optimable"]},"sidebar":"docSidebar","previous":{"title":"354. Russian Doll Envelopes","permalink":"/docs/leetcode/1-500/russian_doll_envelopes"},"next":{"title":"363. Max Sum of Rectangle No Larger Than K","permalink":"/docs/leetcode/1-500/max_sum_of_rectangle_no_larger_than_k"}}');var r=o(74848),s=o(28453);const i={title:"359. Logger Rate Limiter",sidebar_label:"359. Logger Rate Limiter",tags:["Leetcode Easy","Leetcode Premium","Leetcode Optimable"]},l=void 0,a={},c=[{value:"Python",id:"python",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/logger-rate-limiter",children:"https://leetcode.com/problems/logger-rate-limiter"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from collections import deque\n\nclass Logger:\n    TIMEOUT = 10\n    def __init__(self):\n        # Items in queue: tuple(timestamp, message)\n        self.queue = deque()\n\n    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:\n        # Remove expired items from left of queue\n        while self.queue and self.queue[0][0]+self.TIMEOUT <= timestamp:\n            self.queue.popleft()\n\n        # Check if timestamp + TIMEOUT\n        exclude_msgs = [item[1] for item in self.queue]\n\n        # Append current record into queue\n        if message not in [item[1] for item in self.queue]:\n            self.queue.append((timestamp, message))\n\n        return message not in exclude_msgs\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var n=o(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);