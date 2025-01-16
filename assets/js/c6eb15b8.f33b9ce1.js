"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[87705],{74567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>f,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>s});const i=JSON.parse('{"id":"leetcode/1501-2000/path_with_min_effort","title":"1631. Path With Minimum Effort","description":"Python","source":"@site/docs/leetcode/1501-2000/1631_path_with_min_effort.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/path_with_min_effort","permalink":"/docs/leetcode/1501-2000/path_with_min_effort","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Graph","permalink":"/docs/tags/graph"},{"inline":true,"label":"Backtracking","permalink":"/docs/tags/backtracking"},{"inline":true,"label":"Binary Search","permalink":"/docs/tags/binary-search"}],"version":"current","sidebarPosition":1631,"frontMatter":{"title":"1631. Path With Minimum Effort","sidebar_label":"1631. Path With Minimum Effort","tags":["Leetcode Medium","Graph","Backtracking","Binary Search"]},"sidebar":"docSidebar","previous":{"title":"1630. Arithmetic Subarrays","permalink":"/docs/leetcode/1501-2000/arithmetic_subarray"},"next":{"title":"1641. Count Sorted Vowel Strings","permalink":"/docs/leetcode/1501-2000/count_sorted_vowel_strings"}}');var r=t(74848),o=t(28453);const c={title:"1631. Path With Minimum Effort",sidebar_label:"1631. Path With Minimum Effort",tags:["Leetcode Medium","Graph","Backtracking","Binary Search"]},f=void 0,a={},s=[{value:"Python",id:"python",level:2},{value:"Backtracking (Timelimit Exceed)",id:"backtracking-timelimit-exceed",level:3},{value:"Binary Search on all possible efforts",id:"binary-search-on-all-possible-efforts",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"backtracking-timelimit-exceed",children:"Backtracking (Timelimit Exceed)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Time: O(3^(m*n))"}),"\n",(0,r.jsx)(n.li,{children:"Space: O(3^(m*n))"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import math\n\n\nclass Solution:\n    def minimumEffortPath(self, heights: List[List[int]]) -> int:\n        m, n = len(heights), len(heights[0])\n        min_effort = math.inf\n\n        def backtrack(row: int, col: int, effort: int):\n            nonlocal min_effort\n            nonlocal heights\n\n            if row == m-1 and col == n-1:\n                min_effort = min(min_effort, effort)\n                return\n\n            current_height = heights[row][col]\n            heights[row][col] = 0\n\n            # up\n            if row-1 >= 0 and heights[row-1][col] != 0:\n                current_effort = abs(current_height - heights[row-1][col])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row-1, col, current_diff)\n            # down\n            if row+1 < m and heights[row+1][col] != 0:\n                current_effort = abs(current_height - heights[row+1][col])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row+1, col, current_diff)\n            # left\n            if col-1 >= 0 and heights[row][col-1] != 0:\n                current_effort = abs(current_height - heights[row][col-1])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row, col-1, current_diff)\n            # right\n            if col+1 < n and heights[row][col+1] != 0:\n                current_effort = abs(current_height - heights[row][col+1])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row, col+1, current_diff)\n\n            heights[row][col] = current_height\n\n        backtrack(0, 0, 0)\n\n        return min_effort\n"})}),"\n",(0,r.jsx)(n.h3,{id:"binary-search-on-all-possible-efforts",children:"Binary Search on all possible efforts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Time: O(m*n)"}),"\n",(0,r.jsx)(n.li,{children:"Space: O(m*n)  # the visited hashset"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from collections import deque\n\n\nclass Solution:\n    def minimumEffortPath(self, heights: List[List[int]]) -> int:\n        left, right = 0, 10000000\n        while left < right:\n            pivot = (left+right) >> 1\n            if self.is_dest_reachable(heights, pivot):\n                right = pivot\n            else:\n                left = pivot + 1\n        return left\n\n    @staticmethod\n    def is_dest_reachable(heights, effort: int):\n        ty, tx = len(heights)-1, len(heights[0])-1  # Stand as: Target Y, Target X\n        visited = set()\n        queue = deque([(0, 0)])\n\n        while queue:\n            x, y = queue.popleft()\n            if x == tx and y == ty:\n                return True\n\n            visited.add((x, y))\n\n            # up\n            if y-1 >= 0 and (x, y-1) not in visited:\n                current_diff = abs(heights[y][x]-heights[y-1][x])\n                if current_diff <= effort:\n                    visited.add((x, y-1))\n                    queue.append((x, y-1))\n            # down\n            if y+1 <= ty and (x, y+1) not in visited:\n                current_diff = abs(heights[y][x]-heights[y+1][x])\n                if current_diff <= effort:\n                    visited.add((x, y+1))\n                    queue.append((x, y+1))\n            # left\n            if x-1 >= 0 and (x-1, y) not in visited:\n                current_diff = abs(heights[y][x]-heights[y][x-1])\n                if current_diff <= effort:\n                    visited.add((x-1, y))\n                    queue.append((x-1, y))\n            # right\n            if x+1 <= tx and (x+1, y) not in visited:\n                current_diff = abs(heights[y][x]-heights[y][x+1])\n                if current_diff <= effort:\n                    visited.add((x+1, y))\n                    queue.append((x+1, y))\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>f});var i=t(96540);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function f(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);