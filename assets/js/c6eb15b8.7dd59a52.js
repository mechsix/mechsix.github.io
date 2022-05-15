"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2540],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=r.createContext({}),l=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(f.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,f=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(f,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54894:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"1631. Path With Minimum Effort",sidebar_label:"1631. Path With Minimum Effort",tags:["Leetcode Medium","Graph","Backtracking","Binary Search"]},f=void 0,l={unversionedId:"leetcode/1501-2000/path_with_min_effort",id:"leetcode/1501-2000/path_with_min_effort",title:"1631. Path With Minimum Effort",description:"Python",source:"@site/docs/leetcode/1501-2000/1631_path_with_min_effort.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/path_with_min_effort",permalink:"/docs/leetcode/1501-2000/path_with_min_effort",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1631_path_with_min_effort.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Graph",permalink:"/docs/tags/graph"},{label:"Backtracking",permalink:"/docs/tags/backtracking"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:1631,frontMatter:{title:"1631. Path With Minimum Effort",sidebar_label:"1631. Path With Minimum Effort",tags:["Leetcode Medium","Graph","Backtracking","Binary Search"]},sidebar:"docSidebar",previous:{title:"1612. Check If Two Expression Trees are Equivalent",permalink:"/docs/leetcode/1501-2000/check_experssion_trees_equal"},next:{title:"1641. Count Sorted Vowel Strings",permalink:"/docs/leetcode/1501-2000/count_sorted_vowel_strings"}},s=[{value:"Python",id:"python",children:[{value:"Backtracking (Timelimit Exceed)",id:"backtracking-timelimit-exceed",children:[],level:3},{value:"Binary Search on all possible efforts",id:"binary-search-on-all-possible-efforts",children:[],level:3}],level:2}],u={toc:s};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"backtracking-timelimit-exceed"},"Backtracking (Timelimit Exceed)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(3^(m*n))"),(0,o.kt)("li",{parentName:"ul"},"Space: O(3^(m*n))")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import math\n\n\nclass Solution:\n    def minimumEffortPath(self, heights: List[List[int]]) -> int:\n        m, n = len(heights), len(heights[0])\n        min_effort = math.inf\n\n        def backtrack(row: int, col: int, effort: int):\n            nonlocal min_effort\n            nonlocal heights\n\n            if row == m-1 and col == n-1:\n                min_effort = min(min_effort, effort)\n                return\n\n            current_height = heights[row][col]\n            heights[row][col] = 0\n\n            # up\n            if row-1 >= 0 and heights[row-1][col] != 0:\n                current_effort = abs(current_height - heights[row-1][col])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row-1, col, current_diff)\n            # down\n            if row+1 < m and heights[row+1][col] != 0:\n                current_effort = abs(current_height - heights[row+1][col])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row+1, col, current_diff)\n            # left\n            if col-1 >= 0 and heights[row][col-1] != 0:\n                current_effort = abs(current_height - heights[row][col-1])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row, col-1, current_diff)\n            # right\n            if col+1 < n and heights[row][col+1] != 0:\n                current_effort = abs(current_height - heights[row][col+1])\n                current_diff = max(current_effort, effort)\n                if current_diff < min_effort:\n                    backtrack(row, col+1, current_diff)\n\n            heights[row][col] = current_height\n\n        backtrack(0, 0, 0)\n\n        return min_effort\n")),(0,o.kt)("h3",{id:"binary-search-on-all-possible-efforts"},"Binary Search on all possible efforts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(m*n)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(m*n)  # the visited hashset")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n\nclass Solution:\n    def minimumEffortPath(self, heights: List[List[int]]) -> int:\n        left, right = 0, 10000000\n        while left < right:\n            pivot = (left+right) >> 1\n            if self.is_dest_reachable(heights, pivot):\n                right = pivot\n            else:\n                left = pivot + 1\n        return left\n\n    @staticmethod\n    def is_dest_reachable(heights, effort: int):\n        ty, tx = len(heights)-1, len(heights[0])-1  # Stand as: Target Y, Target X\n        visited = set()\n        queue = deque([(0, 0)])\n\n        while queue:\n            x, y = queue.popleft()\n            if x == tx and y == ty:\n                return True\n\n            visited.add((x, y))\n\n            # up\n            if y-1 >= 0 and (x, y-1) not in visited:\n                current_diff = abs(heights[y][x]-heights[y-1][x])\n                if current_diff <= effort:\n                    visited.add((x, y-1))\n                    queue.append((x, y-1))\n            # down\n            if y+1 <= ty and (x, y+1) not in visited:\n                current_diff = abs(heights[y][x]-heights[y+1][x])\n                if current_diff <= effort:\n                    visited.add((x, y+1))\n                    queue.append((x, y+1))\n            # left\n            if x-1 >= 0 and (x-1, y) not in visited:\n                current_diff = abs(heights[y][x]-heights[y][x-1])\n                if current_diff <= effort:\n                    visited.add((x-1, y))\n                    queue.append((x-1, y))\n            # right\n            if x+1 <= tx and (x+1, y) not in visited:\n                current_diff = abs(heights[y][x]-heights[y][x+1])\n                if current_diff <= effort:\n                    visited.add((x+1, y))\n                    queue.append((x+1, y))\n")))}h.isMDXComponent=!0}}]);