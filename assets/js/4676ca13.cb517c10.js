"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[48516],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,f=d["".concat(u,".").concat(p)]||d[p]||s[p]||a;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72878:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"304. Range Sum Query 2D - Immutable",sidebar_label:"304. Range Sum Query 2D - Immutable",tags:["Leetcode Medium","Matrix"]},u=void 0,l={unversionedId:"leetcode/1-500/range_sum_query_2d_immutable",id:"leetcode/1-500/range_sum_query_2d_immutable",title:"304. Range Sum Query 2D - Immutable",description:"https://leetcode.com/problems/range-sum-query-2d-immutable/",source:"@site/docs/leetcode/1-500/304_range_sum_query_2d_immutable.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/range_sum_query_2d_immutable",permalink:"/docs/leetcode/1-500/range_sum_query_2d_immutable",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/304_range_sum_query_2d_immutable.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Matrix",permalink:"/docs/tags/matrix"}],version:"current",sidebarPosition:304,frontMatter:{title:"304. Range Sum Query 2D - Immutable",sidebar_label:"304. Range Sum Query 2D - Immutable",tags:["Leetcode Medium","Matrix"]},sidebar:"docSidebar",previous:{title:"303. Range Sum Query - Immutable",permalink:"/docs/leetcode/1-500/range_sum_query_immutable"},next:{title:"307. Range Sum Query - Mutable",permalink:"/docs/leetcode/1-500/range_sum_query"}},m=[{value:"Python",id:"python",children:[{value:"Query in runtime",id:"query-in-runtime",children:[],level:3},{value:"Cache on built",id:"cache-on-built",children:[],level:3}],level:2}],s={toc:m};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/range-sum-query-2d-immutable/"},"https://leetcode.com/problems/range-sum-query-2d-immutable/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"query-in-runtime"},"Query in runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\nclass NumMatrix:\n\n    def __init__(self, matrix: List[List[int]]):\n        self.matrix = matrix\n\n    @cache\n    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:\n        total = 0\n        for row in range(row1, row2+1):\n            total += sum(self.matrix[row][col1:col2+1])\n        return total\n")),(0,a.kt)("h3",{id:"cache-on-built"},"Cache on built"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class NumMatrix:\n\n    def __init__(self, matrix: List[List[int]]):\n        m, n = len(matrix), len(matrix[0])\n\n        cache = [[0]*(n+1) for i in range(m+1)]\n        for row in range(m):\n            for col in range(n):\n                cache[row+1][col+1] = \\\n                cache[row+1][col] + cache[row][col+1] + matrix[row][col] - cache[row][col]\n        self.cache = cache\n\n\n    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:\n        cache = self.cache\n        return cache[row2+1][col2+1] - cache[row1][col2+1] - cache[row2+1][col1] + cache[row1][col1]\n")))}d.isMDXComponent=!0}}]);