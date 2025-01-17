"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[88218],{50724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"leetcode/1501-2000/count_all_possible_routes","title":"1575. Count All Possible Routes","description":"https://leetcode.com/problems/count-all-possible-routes/","source":"@site/docs/leetcode/1501-2000/1575_count_all_possible_routes.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/count_all_possible_routes","permalink":"/docs/leetcode/1501-2000/count_all_possible_routes","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"}],"version":"current","sidebarPosition":1575,"frontMatter":{"title":"1575. Count All Possible Routes","sidebar_label":"1575. Count All Possible Routes","tags":["Leetcode Hard","DP","DFS"]},"sidebar":"docSidebar","previous":{"title":"1557. Minimum Number of Vertices to Reach All Nodes","permalink":"/docs/leetcode/1501-2000/min_number_vertice_reach_all_nodes"},"next":{"title":"1578. Minimum Time to Make Rope Colorful","permalink":"/docs/leetcode/1501-2000/min_time_to_make_rope_colorful"}}');var s=n(74848),l=n(28453);const i={title:"1575. Count All Possible Routes",sidebar_label:"1575. Count All Possible Routes",tags:["Leetcode Hard","DP","DFS"]},r=void 0,c={},a=[{value:"Python",id:"python",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/count-all-possible-routes/",children:"https://leetcode.com/problems/count-all-possible-routes/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u7279\u6b8a\u7d50\u675f\u689d\u4ef6\u7684DP"}),"\n",(0,s.jsxs)(t.li,{children:["\u689d\u4ef6\uff1a","\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Fuel > 0"}),"\n",(0,s.jsx)(t.li,{children:"\u7d2f\u52a0cost\u4f5c\u70bareturn"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def countRoutes(self, locations: List[int], start: int, finish: int, fuel: int) -> int:\n        @cache\n        def dfs(curr, remain):\n            if remain < 0:\n                return 0\n\n            result = 1 if curr == finish else 0\n\n            for next_location in range(len(locations)):\n                if curr == next_location:\n                    continue\n\n                cost = abs(locations[curr] - locations[next_location])\n                result += dfs(next_location, remain-cost)\n\n            return result % (10**9+7)\n\n        return dfs(start, fuel)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const s={},l=o.createContext(s);function i(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);