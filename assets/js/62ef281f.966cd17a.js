"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[23576],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17930:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"763. Partition Labels",sidebar_label:"763. Partition Labels",tags:["Leetcode Medium","Greedy"]},s=void 0,c={unversionedId:"leetcode/501-1000/partition_labels",id:"leetcode/501-1000/partition_labels",title:"763. Partition Labels",description:"https://leetcode.com/problems/partition-labels/",source:"@site/docs/leetcode/501-1000/763_partition_labels.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/partition_labels",permalink:"/docs/leetcode/501-1000/partition_labels",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/763_partition_labels.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:763,frontMatter:{title:"763. Partition Labels",sidebar_label:"763. Partition Labels",tags:["Leetcode Medium","Greedy"]},sidebar:"docSidebar",previous:{title:"746. Min Cost Climbing Stairs",permalink:"/docs/leetcode/501-1000/min_cost_climbing_stairs"},next:{title:"766. Toeplitz Matrix",permalink:"/docs/leetcode/501-1000/toeplitz_matrix"}},p=[{value:"Python",id:"python",children:[{value:"Greedy",id:"greedy",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/partition-labels/"},"https://leetcode.com/problems/partition-labels/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"greedy"},"Greedy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        last_seem = {char: index for index, char in enumerate(s)}\n\n        start, end = 0, 0\n\n        ans = []\n        for index, char in enumerate(s):\n            end = max(end, last_seem[char])\n            if index == end:\n                ans.append(end+1 - start)\n                start = index + 1\n\n        return ans\n")),(0,a.kt)("p",null,"Or, you'd like to see what those partitions are"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def partitionLabels(self, s: str) -> List[int]:\n        last_seem = {char: index for index, char in enumerate(s)}\n\n        start, end = 0, 0\n        partitions = []\n        for index, char in enumerate(s):\n            end = max(end, last_seem[char])\n            if index == end:\n                partitions.append(s[start:end+1])\n                start = index + 1\n\n        return [len(part) for part in partitions]\n")))}u.isMDXComponent=!0}}]);