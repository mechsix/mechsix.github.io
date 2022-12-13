"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[23576],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const i={title:"763. Partition Labels",sidebar_label:"763. Partition Labels",tags:["Leetcode Medium","Greedy"]},o=void 0,l={unversionedId:"leetcode/501-1000/partition_labels",id:"leetcode/501-1000/partition_labels",title:"763. Partition Labels",description:"https://leetcode.com/problems/partition-labels/",source:"@site/docs/leetcode/501-1000/763_partition_labels.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/partition_labels",permalink:"/docs/leetcode/501-1000/partition_labels",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/763_partition_labels.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:763,frontMatter:{title:"763. Partition Labels",sidebar_label:"763. Partition Labels",tags:["Leetcode Medium","Greedy"]},sidebar:"docSidebar",previous:{title:"746. Min Cost Climbing Stairs",permalink:"/docs/leetcode/501-1000/min_cost_climbing_stairs"},next:{title:"766. Toeplitz Matrix",permalink:"/docs/leetcode/501-1000/toeplitz_matrix"}},s={},c=[{value:"Python",id:"python",level:2},{value:"Greedy",id:"greedy",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/partition-labels/"},"https://leetcode.com/problems/partition-labels/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"greedy"},"Greedy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        last_seem = {char: index for index, char in enumerate(s)}\n\n        start, end = 0, 0\n\n        ans = []\n        for index, char in enumerate(s):\n            end = max(end, last_seem[char])\n            if index == end:\n                ans.append(end+1 - start)\n                start = index + 1\n\n        return ans\n")),(0,a.kt)("p",null,"Or, you'd like to see what those partitions are"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        last_seem = {char: index for index, char in enumerate(s)}\n\n        start, end = 0, 0\n        partitions = []\n        for index, char in enumerate(s):\n            end = max(end, last_seem[char])\n            if index == end:\n                partitions.append(s[start:end+1])\n                start = index + 1\n\n        return [len(part) for part in partitions]\n")))}u.isMDXComponent=!0}}]);