"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1605],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(m,c(c({ref:t},f),{},{components:n})):r.createElement(m,c({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5175:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={title:"417. Pacific Atlantic Water Flow",sidebar_label:"417. Pacific Atlantic Water Flow",tags:["Leetcode Medium","Matrix","DFS"]},l=void 0,s={unversionedId:"leetcode/1-500/pacific_atlantic_water_flow",id:"leetcode/1-500/pacific_atlantic_water_flow",title:"417. Pacific Atlantic Water Flow",description:"https://leetcode.com/problems/pacific-atlantic-water-flow/",source:"@site/docs/leetcode/1-500/417_pacific_atlantic_water_flow.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/pacific_atlantic_water_flow",permalink:"/docs/leetcode/1-500/pacific_atlantic_water_flow",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/417_pacific_atlantic_water_flow.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Matrix",permalink:"/docs/tags/matrix"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:417,frontMatter:{title:"417. Pacific Atlantic Water Flow",sidebar_label:"417. Pacific Atlantic Water Flow",tags:["Leetcode Medium","Matrix","DFS"]},sidebar:"docSidebar",previous:{title:"416. Partition Equal Subset Sum",permalink:"/docs/leetcode/1-500/partition_equal_subset_sum"},next:{title:"421. Maximum XOR of Two Numbers in an Array",permalink:"/docs/leetcode/1-500/max_xor_of_2_nums_in_array"}},f=[{value:"Python",id:"python",children:[{value:"DFS and Hash intersection",id:"dfs-and-hash-intersection",children:[],level:3}],level:2}],u={toc:f};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/pacific-atlantic-water-flow/"},"https://leetcode.com/problems/pacific-atlantic-water-flow/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"dfs-and-hash-intersection"},"DFS and Hash intersection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:\n        if not heights or not heights[0]:\n            return []\n\n        m, n = len(heights), len(heights[0])\n        offsets = [(1, 0), (0, 1), (-1, 0), (0, -1)]\n\n        def dfs(row: int, col: int, reachable: set):\n            reachable.add((row, col))\n\n            for rx, cx in offsets:\n                new_row, new_col = row+rx, col+cx\n\n                if new_row < 0 or new_row >= m or new_col < 0 or new_col >= n:\n                    continue\n\n                if (new_row, new_col) in reachable:\n                    continue\n\n                if heights[new_row][new_col] < heights[row][col]:\n                    continue\n                dfs(new_row, new_col, reachable)\n\n        pac_reachable, alt_reachable = set(), set()\n\n        for row in range(m):\n            dfs(row, 0, pac_reachable)\n            dfs(row, n-1, alt_reachable)\n        for col in range(n):\n            dfs(0, col, pac_reachable)\n            dfs(m-1, col, alt_reachable)\n\n        return list(pac_reachable & alt_reachable)\n")))}p.isMDXComponent=!0}}]);