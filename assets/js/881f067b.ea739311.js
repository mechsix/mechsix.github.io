"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[31499],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,u(u({ref:t},s),{},{components:r})):n.createElement(f,u({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32477:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const o={title:"560. Subarray Sum Equals K",sidebar_label:"560. Subarray Sum Equals K",tags:["Leetcode Medium"]},u=void 0,i={unversionedId:"leetcode/501-1000/subarray_sum_equals_k",id:"leetcode/501-1000/subarray_sum_equals_k",title:"560. Subarray Sum Equals K",description:"https://leetcode.com/problems/subarray-sum-equals-k/",source:"@site/docs/leetcode/501-1000/560_subarray_sum_equals_k.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/subarray_sum_equals_k",permalink:"/docs/leetcode/501-1000/subarray_sum_equals_k",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/560_subarray_sum_equals_k.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:560,frontMatter:{title:"560. Subarray Sum Equals K",sidebar_label:"560. Subarray Sum Equals K",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"543. Diameter of Binary Tree",permalink:"/docs/leetcode/501-1000/diameter_of_binary_tree"},next:{title:"563. Binary Tree Tilt",permalink:"/docs/leetcode/501-1000/binary_tree_tilt"}},c={},l=[{value:"Python",id:"python",level:2}],s={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/subarray-sum-equals-k/"},"https://leetcode.com/problems/subarray-sum-equals-k/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\nclass Solution:\n    def subarraySum(self, nums: List[int], k: int) -> int:\n        # Key as the total, value is the count of this total\n        sum_map = defaultdict(lambda: 0)\n\n        # counter to accumulate the answer\n        count = 0\n\n        # The current sum\n        total = 0\n\n        # Edge case, total == 0 initial with one possible combination: []\n        sum_map[0] = 1\n\n        for num in nums:\n            total += num\n            count += sum_map[total-k]\n            sum_map[total] += 1\n\n        return count\n")))}m.isMDXComponent=!0}}]);