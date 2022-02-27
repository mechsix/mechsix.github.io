"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6515],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),s=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(a.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),p=r,m=f["".concat(a,".").concat(p)]||f[p]||d[p]||l;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<l;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8057:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var o=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],c={title:"733. Flood Fill",sidebar_label:"733. Flood Fill",tags:["Leetcode Easy","DFS","BFS"]},a=void 0,s={unversionedId:"leetcode/501-1000/flood_fill",id:"leetcode/501-1000/flood_fill",title:"733. Flood Fill",description:"https://leetcode.com/problems/flood-fill/",source:"@site/docs/leetcode/501-1000/733_flood_fill.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/flood_fill",permalink:"/docs/leetcode/501-1000/flood_fill",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/733_flood_fill.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"BFS",permalink:"/docs/tags/bfs"}],version:"current",sidebarPosition:733,frontMatter:{title:"733. Flood Fill",sidebar_label:"733. Flood Fill",tags:["Leetcode Easy","DFS","BFS"]},sidebar:"docSidebar",previous:{title:"704. Binary Search",permalink:"/docs/leetcode/501-1000/binary_search"},next:{title:"739. Daily Temperatures",permalink:"/docs/leetcode/501-1000/daily_temperatures"}},u=[{value:"Python",id:"python",children:[{value:"DFS",id:"dfs",children:[],level:3},{value:"BFS",id:"bfs",children:[],level:3}],level:2}],d={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/flood-fill/"},"https://leetcode.com/problems/flood-fill/")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("h3",{id:"dfs"},"DFS"),(0,l.kt)("p",null,"DFS with memory to prevent duplicate visiting"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:\n        origin_color = image[sr][sc]\n        row_limit = len(image) - 1\n        col_limit = len(image[0]) - 1\n\n        seem = set()\n\n        if origin_color == newColor:\n            return image\n\n        def dfs(row, col):\n            if (row, col) in seem:\n                return\n\n            if image[row][col] == origin_color:\n                image[row][col] = newColor\n                seem.add((row, col))\n                if row >= 1:\n                    dfs(row-1, col)\n                if row + 1 <= row_limit:\n                    dfs(row+1, col)\n                if col - 1 >= 0:\n                    dfs(row, col-1)\n                if col + 1 <= col_limit:\n                    dfs(row, col+1)\n\n        dfs(sr, sc)\n        return image\n")),(0,l.kt)("h3",{id:"bfs"},"BFS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\nclass Solution:\n    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:\n        row_limit = len(image) - 1\n        col_limit = len(image[0]) - 1\n        origin_color = image[sr][sc]\n\n        queue = deque([(sr, sc)])\n\n        seem = set()\n\n        while queue:\n            row, col = queue.popleft()\n            if (row, col) in seem:\n                continue\n\n            if image[row][col] == origin_color:\n                image[row][col] = newColor\n                seem.add((row, col))\n                if row >= 1:\n                    queue.append((row-1, col))\n                if row + 1 <= row_limit:\n                    queue.append((row+1, col))\n                if col - 1 >= 0:\n                    queue.append((row, col-1))\n                if col + 1 <= col_limit:\n                    queue.append((row, col+1))\n        return image\n")))}f.isMDXComponent=!0}}]);