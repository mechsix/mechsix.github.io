"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37379],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),a=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=a(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=a(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?o.createElement(m,l(l({ref:n},u),{},{components:t})):o.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var a=2;a<i;a++)l[a]=t[a];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80590:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],s={title:"1557. Minimum Number of Vertices to Reach All Nodes",sidebar_label:"1557. Minimum Number of Vertices to Reach All Nodes",tags:["Leetcode Medium","MST","Graph","Kruskal Algorithm"]},c=void 0,a={unversionedId:"leetcode/1501-2000/min_cost_connect_all_points",id:"leetcode/1501-2000/min_cost_connect_all_points",title:"1557. Minimum Number of Vertices to Reach All Nodes",description:"https://leetcode.com/problems/min-cost-to-connect-all-points/",source:"@site/docs/leetcode/1501-2000/1584_min_cost_connect_all_points.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/min_cost_connect_all_points",permalink:"/docs/leetcode/1501-2000/min_cost_connect_all_points",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1584_min_cost_connect_all_points.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"MST",permalink:"/docs/tags/mst"},{label:"Graph",permalink:"/docs/tags/graph"},{label:"Kruskal Algorithm",permalink:"/docs/tags/kruskal-algorithm"}],version:"current",sidebarPosition:1584,frontMatter:{title:"1557. Minimum Number of Vertices to Reach All Nodes",sidebar_label:"1557. Minimum Number of Vertices to Reach All Nodes",tags:["Leetcode Medium","MST","Graph","Kruskal Algorithm"]},sidebar:"docSidebar",previous:{title:"1578. Minimum Time to Make Rope Colorful",permalink:"/docs/leetcode/1501-2000/min_time_to_make_rope_colorful"},next:{title:"1612. Check If Two Expression Trees are Equivalent",permalink:"/docs/leetcode/1501-2000/check_experssion_trees_equal"}},u=[{value:"Python",id:"python",children:[{value:"Kruskal&#39;s Algorithm",id:"kruskals-algorithm",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/min-cost-to-connect-all-points/"},"https://leetcode.com/problems/min-cost-to-connect-all-points/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"kruskals-algorithm"},"Kruskal's Algorithm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N^2 * logN)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(N^2)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class UnionFind:\n    def __init__(self, size: int) -> None:\n        self.group = [0] * size\n        self.rank = [0] * size\n\n        for i in range(size):\n            self.group[i] = i\n\n    def find(self, node: int) -> int:\n        if self.group[node] != node:\n            self.group[node] = self.find(self.group[node])\n        return self.group[node]\n\n    def join(self, node1: int, node2: int) -> bool:\n        group1 = self.find(node1)\n        group2 = self.find(node2)\n\n        # node1 and node2 already belong to same group.\n        if group1 == group2:\n            return False\n\n        if self.rank[group1] > self.rank[group2]:\n            self.group[group2] = group1\n        elif self.rank[group1] < self.rank[group2]:\n            self.group[group1] = group2\n        else:\n            self.group[group1] = group2\n            self.rank[group2] += 1\n\n        return True\n\nclass Solution:\n    def minCostConnectPoints(self, points: List[List[int]]) -> int:\n        n = len(points)\n\n        edges = []\n        for i in range(n):\n            for j in range(i+1, n):\n                weight = abs(points[i][0]-points[j][0]) + abs(points[i][1]-points[j][1])\n                edges.append((weight, i, j))\n\n        edges.sort(key=lambda edge: edge[0])\n\n        uf = UnionFind(n)\n        cost = 0\n        edges_used = 0\n\n        for weight, i, j in edges:\n            if uf.join(i, j):\n                cost += weight\n                edges_used += 1\n\n                if edges_used == n-1:\n                    break\n        return cost\n")))}d.isMDXComponent=!0}}]);