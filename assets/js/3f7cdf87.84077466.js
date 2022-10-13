"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[22794],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return d}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=r.createContext({}),a=function(e){var t=r.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=a(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=a(o),d=n,f=s["".concat(m,".").concat(d)]||s[d]||p[d]||i;return o?r.createElement(f,l(l({ref:t},u),{},{components:o})):r.createElement(f,l({ref:t},u))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=s;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var a=2;a<i;a++)l[a]=o[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},19175:function(e,t,o){o.r(t),o.d(t,{contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),l=["components"],c={title:"1578. Minimum Time to Make Rope Colorful",sidebar_label:"1578. Minimum Time to Make Rope Colorful",tags:["Leetcode Medium","Two Pointer"]},m=void 0,a={unversionedId:"leetcode/1501-2000/min_time_to_make_rope_colorful",id:"leetcode/1501-2000/min_time_to_make_rope_colorful",title:"1578. Minimum Time to Make Rope Colorful",description:"https://leetcode.com/problems/minimum-time-to-make-rope-colorful/",source:"@site/docs/leetcode/1501-2000/1578_min_time_to_make_rope_colorful.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/min_time_to_make_rope_colorful",permalink:"/docs/leetcode/1501-2000/min_time_to_make_rope_colorful",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1578_min_time_to_make_rope_colorful.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:1578,frontMatter:{title:"1578. Minimum Time to Make Rope Colorful",sidebar_label:"1578. Minimum Time to Make Rope Colorful",tags:["Leetcode Medium","Two Pointer"]},sidebar:"docSidebar",previous:{title:"1557. Minimum Number of Vertices to Reach All Nodes",permalink:"/docs/leetcode/1501-2000/min_number_vertice_reach_all_nodes"},next:{title:"1557. Minimum Number of Vertices to Reach All Nodes",permalink:"/docs/leetcode/1501-2000/min_cost_connect_all_points"}},u=[{value:"Python",id:"python",children:[{value:"Two Pointer",id:"two-pointer",children:[],level:3}],level:2}],p={toc:u};function s(e){var t=e.components,o=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-time-to-make-rope-colorful/"},"https://leetcode.com/problems/minimum-time-to-make-rope-colorful/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minCost(self, colors: str, neededTime: List[int]) -> int:\n        cost = 0\n        left, right = 0, 0\n        while left < len(colors) and right < len(colors):\n            total, maximum = 0, 0\n            while right < len(colors) and colors[left] == colors[right]:\n                total += neededTime[right]\n                maximum = max(maximum, neededTime[right])\n                right += 1\n            cost += total - maximum\n            left = right\n        return cost\n")))}s.isMDXComponent=!0}}]);