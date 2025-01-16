"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[31804],{96001:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"leetcode/1-500/matchsticks_to_square","title":"473. Matchsticks to Square","description":"https://leetcode.com/problems/matchsticks-to-square/","source":"@site/docs/leetcode/1-500/473_matchsticks_to_square.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/matchsticks_to_square","permalink":"/docs/leetcode/1-500/matchsticks_to_square","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":473,"frontMatter":{"title":"473. Matchsticks to Square","sidebar_label":"473. Matchsticks to Square","tags":["Leetcode Medium","DP"]},"sidebar":"docSidebar","previous":{"title":"462. Minimum Moves to Equal Array Elements II","permalink":"/docs/leetcode/1-500/minimum_moves_to_equal_array_elements_ii"},"next":{"title":"485. Max Consecutive Ones","permalink":"/docs/leetcode/1-500/max_consecutive_ones"}}');var o=s(74848),c=s(28453);const i={title:"473. Matchsticks to Square",sidebar_label:"473. Matchsticks to Square",tags:["Leetcode Medium","DP"]},r=void 0,a={},l=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/matchsticks-to-square/",children:"https://leetcode.com/problems/matchsticks-to-square/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["sort\u662f\u56e0\u70ba\u8003\u616e\u5230",(0,o.jsx)(t.code,{children:"edges"}),"\u5143\u7d20\u76f8\u540c\u4f46\u9806\u5e8f\u4e0d\u540c\u53ef\u4ee5\u8996\u70ba\u540c\u4e00\u500bcase"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from functools import cache\n\n\nclass Solution:\n    def makesquare(self, matchsticks: List[int]) -> bool:\n        perimeter = sum(matchsticks)\n\n        if perimeter % 4 != 0:\n            return False\n\n        target = perimeter / 4\n\n        @cache\n        def dp(i: int, edges: tuple):\n            if i >= len(matchsticks):\n                if edges[0]==target and edges[1]==target and edges[2]==target and edges[3]==target:\n                    return True\n                else:\n                    return False\n\n            is_makable = False\n            stick = matchsticks[i]\n            for j in range(4):\n                if edges[j] == target:\n                    continue\n\n                if edges[j]+stick <= target:\n                    new_edges = sorted(list(edges[:j] + tuple([edges[j]+stick]) + edges[j+1:]))\n                    is_makable = is_makable or dp(i+1, tuple(new_edges))\n\n            return is_makable\n\n        return dp(0, (0, 0, 0, 0))\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(96540);const o={},c=n.createContext(o);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);