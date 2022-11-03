"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52378],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96695:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"1338. Reduce Array Size to The Half",sidebar_label:"1338. Reduce Array Size to The Half",tags:["Leetcode Medium","Backtracking"]},u=void 0,l={unversionedId:"leetcode/1001-1500/reduce_array_size_to_the_half",id:"leetcode/1001-1500/reduce_array_size_to_the_half",title:"1338. Reduce Array Size to The Half",description:"https://leetcode.com/problems/reduce-array-size-to-the-half/",source:"@site/docs/leetcode/1001-1500/1338_reduce_array_size_to_the_half.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/reduce_array_size_to_the_half",permalink:"/docs/leetcode/1001-1500/reduce_array_size_to_the_half",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1338_reduce_array_size_to_the_half.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:1338,frontMatter:{title:"1338. Reduce Array Size to The Half",sidebar_label:"1338. Reduce Array Size to The Half",tags:["Leetcode Medium","Backtracking"]},sidebar:"docSidebar",previous:{title:"1337. The K Weakest Rows in a Matrix",permalink:"/docs/leetcode/1001-1500/k_weakest_rows_in_matrix"},next:{title:"1342. Number of Steps to Reduce a Number to Zero",permalink:"/docs/leetcode/1001-1500/number_steps_to_reduce_num_to_zero"}},s=[{value:"Python",id:"python",children:[{value:"Backtracking (Timelimit Exceed)",id:"backtracking-timelimit-exceed",children:[],level:3}],level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reduce-array-size-to-the-half/"},"https://leetcode.com/problems/reduce-array-size-to-the-half/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"backtracking-timelimit-exceed"},"Backtracking (Timelimit Exceed)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N!)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(M)  # M is the count of non-duplicated num in the arr")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\nfrom math import inf\n\n\nclass Solution:\n    def minSetSize(self, arr: List[int]) -> int:\n        counts = Counter(arr)\n        half = len(arr) >> 1\n\n        nums = counts.keys()\n\n        def backtrack(path: set):\n            if sum([counts[num] for num in nums if num not in path]) <= half:\n                return len(path)\n\n            minium = inf\n            for num in nums:\n                if num in path:\n                    continue\n                path.add(num)\n                minium = min(minium, backtrack(path))\n                path.remove(num)\n\n            return minium\n\n        return backtrack(set())\n")))}d.isMDXComponent=!0}}]);