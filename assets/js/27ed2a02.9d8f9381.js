"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8444],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59117:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],c={title:"763. Partition Labels",sidebar_label:"763. Partition Labels",tags:["Leetcode Medium","Graph"]},i=void 0,s={unversionedId:"leetcode/501-1000/all_paths_from_source_to_target",id:"leetcode/501-1000/all_paths_from_source_to_target",title:"763. Partition Labels",description:"https://leetcode.com/problems/all-paths-from-source-to-target/",source:"@site/docs/leetcode/501-1000/797_all_paths_from_source_to_target.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/all_paths_from_source_to_target",permalink:"/docs/leetcode/501-1000/all_paths_from_source_to_target",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/797_all_paths_from_source_to_target.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Graph",permalink:"/docs/tags/graph"}],version:"current",sidebarPosition:797,frontMatter:{title:"763. Partition Labels",sidebar_label:"763. Partition Labels",tags:["Leetcode Medium","Graph"]},sidebar:"docSidebar",previous:{title:"792. Number of Matching Subsequences",permalink:"/docs/leetcode/501-1000/number_of_matching_subsequences"},next:{title:"804. Unique Morse Code Words",permalink:"/docs/leetcode/501-1000/unique_morse_code_words"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/all-paths-from-source-to-target/"},"https://leetcode.com/problems/all-paths-from-source-to-target/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:\n        self.result = []\n        self.travel(graph, 0, [])\n        return self.result\n\n    def travel(self, graph, node, path):\n        path.append(node)\n\n        if node == len(graph)-1:\n            # Reach the end\n            self.result.append(path[:])\n            path.pop()\n            return\n\n        for next_node in graph[node]:\n            self.travel(graph, next_node, path)\n\n        path.pop()\n\n        return path\n")))}d.isMDXComponent=!0}}]);