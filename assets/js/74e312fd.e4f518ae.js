"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3384],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||c;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<c;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(87462),r=n(63366),c=(n(67294),n(3905)),i=["components"],s={title:"1167. Minimum Cost to Connect Sticks",sidebar_label:"1167. Minimum Cost to Connect Sticks",tags:["Leetcode Medium","Heap"]},a=void 0,l={unversionedId:"leetcode/1001-1500/min_cost_to_connect_sticks",id:"leetcode/1001-1500/min_cost_to_connect_sticks",title:"1167. Minimum Cost to Connect Sticks",description:"https://leetcode.com/problems/minimum-cost-to-connect-sticks/",source:"@site/docs/leetcode/1001-1500/1167_min_cost_to_connect_sticks.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/min_cost_to_connect_sticks",permalink:"/docs/leetcode/1001-1500/min_cost_to_connect_sticks",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1167_min_cost_to_connect_sticks.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Heap",permalink:"/docs/tags/heap"}],version:"current",sidebarPosition:1167,frontMatter:{title:"1167. Minimum Cost to Connect Sticks",sidebar_label:"1167. Minimum Cost to Connect Sticks",tags:["Leetcode Medium","Heap"]},sidebar:"docSidebar",previous:{title:"1114. Print in Order",permalink:"/docs/leetcode/1001-1500/print_in_order"},next:{title:"1200. Mini Abs Difference",permalink:"/docs/leetcode/1001-1500/min_abs_difference"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-cost-to-connect-sticks/"},"https://leetcode.com/problems/minimum-cost-to-connect-sticks/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"import heapq\n\n\nclass Solution:\n    def connectSticks(self, sticks: List[int]) -> int:\n        heapq.heapify(sticks)\n\n        total_cost = 0\n        while len(sticks) > 1:\n            cost = heapq.heappop(sticks) + heapq.heappop(sticks)\n            total_cost += cost\n            heapq.heappush(sticks, cost)\n\n        return total_cost\n")))}m.isMDXComponent=!0}}]);