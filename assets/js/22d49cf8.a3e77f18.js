"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[68873],{8669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1501-2000/find_highest_altitude","title":"1732. Find the Highest Altitude","description":"https://leetcode.com/problems/find-the-highest-altitude","source":"@site/docs/leetcode/1501-2000/1732_find_highest_altitude.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/find_highest_altitude","permalink":"/docs/leetcode/1501-2000/find_highest_altitude","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":1732,"frontMatter":{"title":"1732. Find the Highest Altitude","sidebar_label":"1732. Find the Highest Altitude","tags":["Leetcode Easy","Go"]},"sidebar":"docSidebar","previous":{"title":"1721. Swapping Nodes in a Linked List","permalink":"/docs/leetcode/1501-2000/swap_nodes_in_linked_list"},"next":{"title":"1751. Maximum Number of Events That Can Be Attended II","permalink":"/docs/leetcode/1501-2000/max_number_of_events_that_can_be_attended_ii"}}');var s=n(74848),o=n(28453);const r={title:"1732. Find the Highest Altitude",sidebar_label:"1732. Find the Highest Altitude",tags:["Leetcode Easy","Go"]},d=void 0,l={},c=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/find-the-highest-altitude",children:"https://leetcode.com/problems/find-the-highest-altitude"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def largestAltitude(self, gain: List[int]) -> int:\n        current, highest = 0, 0\n        for g in gain:\n            current = current + g\n            highest = max(highest, current)\n        return highest\n"})}),"\n",(0,s.jsx)(t.h2,{id:"go",children:"Go"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"func largestAltitude(gain []int) int {\n    highest := 0\n    current := 0\n\n    for _, elm := range gain {\n        current += elm\n        if current > highest {\n            highest = current\n        }\n    }\n    return highest\n}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);