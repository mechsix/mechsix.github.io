"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[99463],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36719:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={title:"77. Combinations",sidebar_label:"77. Combinations",tags:["Leetcode Medium","Backtracking"]},l=void 0,s={unversionedId:"leetcode/1-500/combinations",id:"leetcode/1-500/combinations",title:"77. Combinations",description:"https://leetcode.com/problems/combinations/",source:"@site/docs/leetcode/1-500/77_combinations.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/combinations",permalink:"/docs/leetcode/1-500/combinations",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/77_combinations.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:77,frontMatter:{title:"77. Combinations",sidebar_label:"77. Combinations",tags:["Leetcode Medium","Backtracking"]},sidebar:"docSidebar",previous:{title:"75. Sort Colors",permalink:"/docs/leetcode/1-500/sort_colors"},next:{title:"78. Subsets",permalink:"/docs/leetcode/1-500/subsets"}},u=[{value:"Python",id:"python",children:[{value:"Backtracking",id:"backtracking",children:[],level:3},{value:"Python Itertools built-in package",id:"python-itertools-built-in-package",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/combinations/"},"https://leetcode.com/problems/combinations/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"backtracking"},"Backtracking"),(0,i.kt)("p",null,"A general algorithm for finding solutions to some computational problems."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Backtracking"},"Wikipedia - Backtracking")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        return self._backtrack(k, n, 1, [], [])\n\n    def _backtrack(self, k: int, n: int, start: int, current: List[int], result: List[List[int]]):\n\n        if len(current) == k:\n            result.append(current[:])\n\n        for i in range(start, n+1):\n            current.append(i)\n            self._backtrack(k, n, i+1, current, result)\n            current.pop()\n\n        return result\n")),(0,i.kt)("h3",{id:"python-itertools-built-in-package"},"Python Itertools built-in package"),(0,i.kt)("p",null,"Cheet with Python...lol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from itertools import combinations\n\nclass Solution:\n    def combine(self, n: int, k: int) -> List[List[int]]:\n        return [comb for comb in combinations([num for num in range(1, n+1)], k)]\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var combine = function (n, k) {\n    const record = [];\n    const result = [];\n\n    backtracking(record, 1, n, k, result);\n\n    return result;\n};\n\nvar backtracking = function (record, start, n, k, result) {\n    if (record.length === k) {\n        result.push(record.slice(0));\n        return;\n    }\n\n    for (let i = start; i <= n; i++) {\n        record.push(i);\n        backtracking(record, i + 1, n, k, result);\n        record.pop();\n    }\n};\n")))}d.isMDXComponent=!0}}]);