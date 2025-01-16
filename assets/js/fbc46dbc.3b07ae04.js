"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[57825],{79502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"leetcode/1501-2000/furtuest_building_can_reach","title":"1642. Furthest Building You Can Reach","description":"https://leetcode.com/problems/furthest-building-you-can-reach/","source":"@site/docs/leetcode/1501-2000/1642_furtuest_building_can_reach.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/furtuest_building_can_reach","permalink":"/docs/leetcode/1501-2000/furtuest_building_can_reach","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Hard","permalink":"/docs/tags/leetcode-hard"},{"inline":true,"label":"Heap","permalink":"/docs/tags/heap"}],"version":"current","sidebarPosition":1642,"frontMatter":{"title":"1642. Furthest Building You Can Reach","sidebar_label":"1642. Furthest Building You Can Reach","tags":["Leetcode Hard","Heap"]},"sidebar":"docSidebar","previous":{"title":"1641. Count Sorted Vowel Strings","permalink":"/docs/leetcode/1501-2000/count_sorted_vowel_strings"},"next":{"title":"1644. Lowest Common Ancestor of a Binary Tree II","permalink":"/docs/leetcode/1501-2000/lowest_common_ancestor_of_bt_ii"}}');var o=t(74848),r=t(28453);const s={title:"1642. Furthest Building You Can Reach",sidebar_label:"1642. Furthest Building You Can Reach",tags:["Leetcode Hard","Heap"]},a=void 0,c={},u=[{value:"Python",id:"python",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/furthest-building-you-can-reach/",children:"https://leetcode.com/problems/furthest-building-you-can-reach/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import heapq\n\n\nclass Solution:\n    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:\n        heap = []\n        heapq.heapify(heap)\n\n        for i in range(1, len(heights)):\n            diff = heights[i] - heights[i-1]\n\n            # Jump down, won't need bricks or ladders\n            if diff <= 0:\n                continue\n\n            heapq.heappush(heap, diff)\n            if len(heap) <= ladders:\n                # Ladders still enough\n                continue\n\n            # Use the bricks on the miniumn cost of diff\n            bricks -= heapq.heappop(heap)\n\n            # Running out of bricks, reach the farest building\n            if bricks < 0:\n                return i-1\n\n        # Resource is enough to reaching the end\n        return len(heights)-1\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);