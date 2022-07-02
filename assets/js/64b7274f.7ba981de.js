"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3118],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5275:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"743. Network Delay Time",sidebar_label:"743. Network Delay Time",tags:["Leetcode Medium","Graph","DFS","Dijkstra Algorithm","TODO"]},l=void 0,s={unversionedId:"leetcode/501-1000/network_delay_time",id:"leetcode/501-1000/network_delay_time",title:"743. Network Delay Time",description:"https://leetcode.com/problems/network-delay-time/",source:"@site/docs/leetcode/501-1000/743_network_delay_time.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/network_delay_time",permalink:"/docs/leetcode/501-1000/network_delay_time",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/743_network_delay_time.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Graph",permalink:"/docs/tags/graph"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"Dijkstra Algorithm",permalink:"/docs/tags/dijkstra-algorithm"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:743,frontMatter:{title:"743. Network Delay Time",sidebar_label:"743. Network Delay Time",tags:["Leetcode Medium","Graph","DFS","Dijkstra Algorithm","TODO"]},sidebar:"docSidebar",previous:{title:"740. Delete and Earn",permalink:"/docs/leetcode/501-1000/delete_and_earn"},next:{title:"745. Prefix and Suffix Search",permalink:"/docs/leetcode/501-1000/prefix_and_suffix_search"}},u=[{value:"Python",id:"python",children:[{value:"DFS",id:"dfs",children:[],level:3},{value:"Dijkstra Algorithm",id:"dijkstra-algorithm",children:[],level:3}],level:2}],m={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/network-delay-time/"},"https://leetcode.com/problems/network-delay-time/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"dfs"},"DFS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:\n        reach_times = [inf for i in range(n)]\n        reach_times[k-1] = 0\n\n        # Convert the graph from a list into dict, for better matching query later\n        mapper = dict()\n        for source, target, latency in times:\n            if source not in mapper:\n                mapper[source] = dict()\n            mapper[source][target] = min(mapper[source].get(target, inf), latency)\n\n        # DFS, or call it backtracking, go through all possible edges\n        def dfs(source: int, accu: int):\n            if source not in mapper:\n                return\n\n            for target in mapper[source]:\n                new_accu = accu + mapper[source][target]\n\n                # Only go deeper while the known cost of path is higher\n                if reach_times[target-1] > new_accu:\n                    reach_times[target-1] = new_accu\n                    dfs(target, new_accu)\n\n        dfs(k, 0)\n\n        max_latency = max(reach_times)\n        return max_latency if max_latency < inf else -1\n")),(0,a.kt)("h3",{id:"dijkstra-algorithm"},"Dijkstra Algorithm"),(0,a.kt)("p",null,"(TODO)"))}p.isMDXComponent=!0}}]);