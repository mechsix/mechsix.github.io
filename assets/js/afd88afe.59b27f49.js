"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[92852],{3329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"leetcode/1-500/max_points_on_a_line","title":"149. Max Points on a Line","description":"https://leetcode.com/problems/max-points-on-a-line/description/","source":"@site/docs/leetcode/1-500/149_max_points_on_a_line.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/max_points_on_a_line","permalink":"/docs/leetcode/1-500/max_points_on_a_line","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"Hash","permalink":"/docs/tags/hash"}],"version":"current","sidebarPosition":149,"frontMatter":{"title":"149. Max Points on a Line","sidebar_label":"149. Max Points on a Line","tags":["Leetcode Hard","Hash"]},"sidebar":"docSidebar","previous":{"title":"148. Sort List","permalink":"/docs/leetcode/1-500/sort_list"},"next":{"title":"151. Reverse Words in a String","permalink":"/docs/leetcode/1-500/reverse_words_in_string"}}');var i=t(74848),s=t(28453);const a={title:"149. Max Points on a Line",sidebar_label:"149. Max Points on a Line",tags:["Leetcode Hard","Hash"]},r=void 0,l={},c=[{value:"Python",id:"python",level:2},{value:"Slopes as Hash Key",id:"slopes-as-hash-key",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/max-points-on-a-line/description/",children:"https://leetcode.com/problems/max-points-on-a-line/description/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.h3,{id:"slopes-as-hash-key",children:"Slopes as Hash Key"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Time: O(NlogN)"}),"\n",(0,i.jsx)(n.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from collections import defaultdict\n\n\nclass Solution:\n    def maxPoints(self, points: List[List[int]]) -> int:\n        if len(points) < 2:\n            return 1\n\n        ans = 0\n        for i in range(len(points)-1):\n            mapper = defaultdict(int)\n            for j in range(i+1, len(points)):\n                point1 = points[i]\n                point2 = points[j]\n\n                # Case of vertical line\n                if point1[0] == point2[0]:\n                    mapper["v"] += 1\n                    continue\n\n                # Case of others\n                slope = (point1[1]-point2[1]) / (point1[0]-point2[0])\n                mapper[slope] += 1\n\n            # print("From", points[i], ", the points with same slope", mapper)\n\n            ans = max(ans, max(mapper.values())+1 )\n        return ans\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);