"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[84298],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=l(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53727:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const i={title:"997. Find the Town Judge",sidebar_label:"997. Find the Town Judge",tags:["Leetcode Easy","Prefix Sum","Graph"]},a=void 0,u={unversionedId:"leetcode/501-1000/find_the_town_judge",id:"leetcode/501-1000/find_the_town_judge",title:"997. Find the Town Judge",description:"https://leetcode.com/problems/find-the-town-judge/",source:"@site/docs/leetcode/501-1000/997_find_the_town_judge.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/find_the_town_judge",permalink:"/docs/leetcode/501-1000/find_the_town_judge",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/997_find_the_town_judge.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Prefix Sum",permalink:"/docs/tags/prefix-sum"},{label:"Graph",permalink:"/docs/tags/graph"}],version:"current",sidebarPosition:997,frontMatter:{title:"997. Find the Town Judge",sidebar_label:"997. Find the Town Judge",tags:["Leetcode Easy","Prefix Sum","Graph"]},sidebar:"docSidebar",previous:{title:"987. Vertical Order Traversal of a Binary Tree",permalink:"/docs/leetcode/501-1000/vertical_order_traversal_of_a_binary_tree"},next:{title:"923. 3Sum With Multiplicity",permalink:"/docs/leetcode/501-1000/923_3sum_with_multiplicity"}},c={},l=[{value:"Python",id:"python",level:2},{value:"Prefix Sum (Two Arrays)",id:"prefix-sum-two-arrays",level:3}],d={toc:l};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-the-town-judge/"},"https://leetcode.com/problems/find-the-town-judge/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"prefix-sum-two-arrays"},"Prefix Sum (Two Arrays)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use two arrays to store indegree and outdegree edges")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findJudge(self, n: int, trust: List[List[int]]) -> int:\n        indegree = [0] * (n+1)\n        outdegree = [0] * (n+1)\n\n        for person, trusted in trust:\n            outdegree[person] += 1\n            indegree[trusted] += 1\n\n        for i in range(1, n+1):\n            if indegree[i] == n-1 and outdegree[i] == 0:\n                return i\n        return -1\n")))}s.isMDXComponent=!0}}]);