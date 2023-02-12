"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[23913],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22922:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const i={title:"2477. Minimum Fuel Cost to Report to the Capital",sidebar_label:"2477. Minimum Fuel Cost to Report to the Capital",tags:["Leetcode Medium","Tree","DFS"]},a=void 0,l={unversionedId:"leetcode/2000/min_fuel_cost_to_report_to_the_capital",id:"leetcode/2000/min_fuel_cost_to_report_to_the_capital",title:"2477. Minimum Fuel Cost to Report to the Capital",description:"https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital",source:"@site/docs/leetcode/2000/2477_min_fuel_cost_to_report_to_the_capital.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/min_fuel_cost_to_report_to_the_capital",permalink:"/docs/leetcode/2000/min_fuel_cost_to_report_to_the_capital",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2477_min_fuel_cost_to_report_to_the_capital.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Tree",permalink:"/docs/tags/tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:2477,frontMatter:{title:"2477. Minimum Fuel Cost to Report to the Capital",sidebar_label:"2477. Minimum Fuel Cost to Report to the Capital",tags:["Leetcode Medium","Tree","DFS"]},sidebar:"docSidebar",previous:{title:"2306. Naming a Company",permalink:"/docs/leetcode/2000/naming_a_company"},next:{title:"6204. Largest Positive Integer That Exists With Its Negative",permalink:"/docs/leetcode/2000/largest_positive_int_that_exists_with_its_negative"}},c={},s=[{value:"Python",id:"python",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital"},"https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import math\n\n\nclass Solution:\n    def minimumFuelCost(self, roads, seats):\n        self.fuel = 0\n        n = len(roads) + 1\n        mapper = [set() for i in range(n)]\n        for road in roads:\n            mapper[road[0]].add(road[1])\n            mapper[road[1]].add(road[0])\n\n        def dfs(node, parent,seats):\n            representatives = 1\n            for child in mapper[node]:\n                if child == parent:\n                    continue\n                representatives += dfs(child, node, seats)\n\n            if node != 0:\n                self.fuel += math.ceil(representatives / seats)\n\n            return representatives\n\n        dfs(0, -1, seats)\n\n        return self.fuel\n")))}u.isMDXComponent=!0}}]);