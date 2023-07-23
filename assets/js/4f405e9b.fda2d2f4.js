"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[30904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||f[p]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"802. Find Eventual Safe States",sidebar_label:"802. Find Eventual Safe States",tags:["Leetcode Medium","Graph","DFS"]},s=void 0,i={unversionedId:"leetcode/501-1000/find_eventual_safe_states",id:"leetcode/501-1000/find_eventual_safe_states",title:"802. Find Eventual Safe States",description:"https://leetcode.com/problems/find-eventual-safe-states/",source:"@site/docs/leetcode/501-1000/802_find_eventual_safe_states.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/find_eventual_safe_states",permalink:"/docs/leetcode/501-1000/find_eventual_safe_states",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/802_find_eventual_safe_states.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Graph",permalink:"/docs/tags/graph"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:802,frontMatter:{title:"802. Find Eventual Safe States",sidebar_label:"802. Find Eventual Safe States",tags:["Leetcode Medium","Graph","DFS"]},sidebar:"docSidebar",previous:{title:"763. Partition Labels",permalink:"/docs/leetcode/501-1000/all_paths_from_source_to_target"},next:{title:"804. Unique Morse Code Words",permalink:"/docs/leetcode/501-1000/unique_morse_code_words"}},l={},c=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3}],d={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-eventual-safe-states/"},"https://leetcode.com/problems/find-eventual-safe-states/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"dfs"},"DFS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:\n        safe = {}\n        ans = []\n\n        def dfs(i):\n            if i in safe:\n                return safe[i]\n\n            safe[i] = False\n            for nei in graph[i]:\n                if not dfs(nei):\n                    return safe[i]\n            safe[i] = True\n            return True\n\n        for i in range(len(graph)):\n            if dfs(i):\n                ans.append(i)\n        return ans\n")))}f.isMDXComponent=!0}}]);