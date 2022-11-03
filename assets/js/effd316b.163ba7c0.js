"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28389],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),a=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=a(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=a(n),p=o,d=f["".concat(c,".").concat(p)]||f[p]||m[p]||i;return n?r.createElement(d,u(u({ref:t},l),{},{components:n})):r.createElement(d,u({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,u[1]=s;for(var a=2;a<i;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},42391:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],s={title:"985. Sum of Even Numbers After Queries",sidebar_label:"985. Sum of Even Numbers After Queries",tags:["Leetcode Medium"]},c=void 0,a={unversionedId:"leetcode/501-1000/sum_of_even_nums_after_queries",id:"leetcode/501-1000/sum_of_even_nums_after_queries",title:"985. Sum of Even Numbers After Queries",description:"https://leetcode.com/problems/sum-of-even-numbers-after-queries/",source:"@site/docs/leetcode/501-1000/985_sum_of_even_nums_after_queries.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/sum_of_even_nums_after_queries",permalink:"/docs/leetcode/501-1000/sum_of_even_nums_after_queries",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/985_sum_of_even_nums_after_queries.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:985,frontMatter:{title:"985. Sum of Even Numbers After Queries",sidebar_label:"985. Sum of Even Numbers After Queries",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"983. Minimum Cost For Tickets",permalink:"/docs/leetcode/501-1000/min_cost_for_tickets"},next:{title:"986. Interval List Intersections",permalink:"/docs/leetcode/501-1000/interval_list_intersections"}},l=[{value:"Python",id:"python",children:[],level:2}],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sum-of-even-numbers-after-queries/"},"https://leetcode.com/problems/sum-of-even-numbers-after-queries/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:\n        total = sum([num for num in nums if num % 2 == 0])\n\n        ans = []\n        for value, index in queries:\n            if nums[index] % 2 == 0:\n                total -= nums[index]\n\n            nums[index] = nums[index] + value\n\n            if nums[index] % 2 == 0:\n                total += nums[index]\n\n            ans.append(total)\n        return ans\n")))}f.isMDXComponent=!0}}]);