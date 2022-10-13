"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[42e3],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return u}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),m=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=m(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=m(t),u=o,d=f["".concat(p,".").concat(u)]||f[u]||l[u]||a;return t?n.createElement(d,i(i({ref:r},s),{},{components:t})):n.createElement(d,i({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66344:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return s}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"1383. Maximum Performance of a Team",sidebar_label:"1383. Maximum Performance of a Team",tags:["Leetcode Hard","Heap"]},p=void 0,m={unversionedId:"leetcode/1001-1500/max_performance_of_team",id:"leetcode/1001-1500/max_performance_of_team",title:"1383. Maximum Performance of a Team",description:"https://leetcode.com/problems/maximum-performance-of-a-team/",source:"@site/docs/leetcode/1001-1500/1383_max_performance_of_team.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/max_performance_of_team",permalink:"/docs/leetcode/1001-1500/max_performance_of_team",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1383_max_performance_of_team.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Heap",permalink:"/docs/tags/heap"}],version:"current",sidebarPosition:1383,frontMatter:{title:"1383. Maximum Performance of a Team",sidebar_label:"1383. Maximum Performance of a Team",tags:["Leetcode Hard","Heap"]},sidebar:"docSidebar",previous:{title:"1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree",permalink:"/docs/leetcode/1001-1500/find_corresponding_node_of_binary_tree_in_cloned"},next:{title:"1396. Design Underground System",permalink:"/docs/leetcode/1001-1500/design_underground_system"}},s=[{value:"Python",id:"python",children:[],level:2}],l={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-performance-of-a-team/"},"https://leetcode.com/problems/maximum-performance-of-a-team/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from heapq import heappush, heappop\n\n\nclass Solution:\n    def maxPerformance(self, n: int, speeds: List[int], efficiencies: List[int], k: int) -> int:\n        mapper = [pair for pair in zip(efficiencies, speeds)]\n        mapper.sort(reverse=True)\n\n        result, speed = 0, 0\n        heap = []\n\n        for eff, spd in mapper:\n            if len(heap) == k:\n                speed -= heappop(heap)\n            speed += spd\n            heappush(heap, spd)\n            result = max(result, eff*speed)\n\n        return result % (10**9+7)\n")))}f.isMDXComponent=!0}}]);