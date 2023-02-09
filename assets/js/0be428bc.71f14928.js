"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[22685],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99767:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(83117),o=(r(67294),r(3905));const i={title:"785. Is Graph Bipartite?",sidebar_label:"785. Is Graph Bipartite?",tags:["Leetcode Medium","Graph","Bipartite"]},a=void 0,c={unversionedId:"leetcode/501-1000/is_graph_bipartite",id:"leetcode/501-1000/is_graph_bipartite",title:"785. Is Graph Bipartite?",description:"https://leetcode.com/problems/is-graph-bipartite/",source:"@site/docs/leetcode/501-1000/785_is_graph_bipartite.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/is_graph_bipartite",permalink:"/docs/leetcode/501-1000/is_graph_bipartite",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/785_is_graph_bipartite.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Graph",permalink:"/docs/tags/graph"},{label:"Bipartite",permalink:"/docs/tags/bipartite"}],version:"current",sidebarPosition:785,frontMatter:{title:"785. Is Graph Bipartite?",sidebar_label:"785. Is Graph Bipartite?",tags:["Leetcode Medium","Graph","Bipartite"]},sidebar:"docSidebar",previous:{title:"779. K-th Symbol in Grammar",permalink:"/docs/leetcode/501-1000/kth_symbol_in_grammar"},next:{title:"787. Cheapest Flights Within K Stops",permalink:"/docs/leetcode/501-1000/cheapest_flights_within_k_stops"}},l={},p=[{value:"Python",id:"python",level:2},{value:"Color by DFS",id:"color-by-dfs",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/is-graph-bipartite/"},"https://leetcode.com/problems/is-graph-bipartite/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"color-by-dfs"},"Color by DFS"),(0,o.kt)("p",null,"\u4e8c\u5206\u5716(Bipartite)\u7d93\u5178\u984c\u76ee"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N+E)  # N: nodes count; E: edges count"),(0,o.kt)("li",{parentName:"ul"},"Space: O(N) # color mapper")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isBipartite(self, graph):\n        color = {}\n        for node in range(len(graph)):\n            if node in color:\n                continue\n\n            stack = [node]\n            color[node] = 0\n\n            while stack:\n                start = stack.pop()\n                for target in graph[start]:\n                    if target not in color:\n                        stack.append(target)\n                        color[target] = 0 if color[start] == 1 else 1\n                    elif color[target] == color[start]:\n                        return False\n        return True\n")))}u.isMDXComponent=!0}}]);