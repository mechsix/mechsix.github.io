"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[30023],{94307:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/1501-2000/min_speed_to_arrive_on_time","title":"1870. Minimum Speed to Arrive on Time","description":"https://leetcode.com/problems/minimum-speed-to-arrive-on-time/","source":"@site/docs/leetcode/1501-2000/1870_min_speed_to_arrive_on_time.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/min_speed_to_arrive_on_time","permalink":"/docs/leetcode/1501-2000/min_speed_to_arrive_on_time","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Binary Search","permalink":"/docs/tags/binary-search"}],"version":"current","sidebarPosition":1870,"frontMatter":{"title":"1870. Minimum Speed to Arrive on Time","sidebar_label":"1870. Minimum Speed to Arrive on Time","tags":["Leetcode Medium","Binary Search"]},"sidebar":"docSidebar","previous":{"title":"1857. Largest Color Value in a Directed Graph","permalink":"/docs/leetcode/1501-2000/largest_color_value_in_a_directed_graph"},"next":{"title":"1873. Calculate Special Bonus","permalink":"/docs/leetcode/1501-2000/calculate_special_bonus"}}');var o=i(74848),r=i(28453);const s={title:"1870. Minimum Speed to Arrive on Time",sidebar_label:"1870. Minimum Speed to Arrive on Time",tags:["Leetcode Medium","Binary Search"]},a=void 0,c={},d=[{value:"Python",id:"python",level:2},{value:"Binary Search",id:"binary-search",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/minimum-speed-to-arrive-on-time/",children:"https://leetcode.com/problems/minimum-speed-to-arrive-on-time/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"binary-search",children:"Binary Search"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:\n        def can_reach(speed):\n            return sum([ceil(dst/speed) for dst in dist[:-1]], 0) + dist[-1] / speed <= hour\n\n        low, high = 1, 10**7\n        min_speed = -1\n        while low <= high:\n            speed = (high - low) // 2 + low\n            if can_reach(speed):\n                min_speed = speed\n                high = speed - 1\n            else:\n                low = speed + 1\n        return min_speed\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);