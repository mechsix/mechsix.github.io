"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28882],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72367:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var n=r(83117),a=(r(67294),r(3905));const o={title:"215. Kth Largest Element in an Array",sidebar_label:"215. Kth Largest Element in an Array",tags:["Leetcode Medium","Heap"]},l=void 0,i={unversionedId:"leetcode/1-500/kth_largest_elm_in_array",id:"leetcode/1-500/kth_largest_elm_in_array",title:"215. Kth Largest Element in an Array",description:"https://leetcode.com/problems/kth-largest-element-in-an-array/",source:"@site/docs/leetcode/1-500/215_kth_largest_elm_in_array.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/kth_largest_elm_in_array",permalink:"/docs/leetcode/1-500/kth_largest_elm_in_array",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/215_kth_largest_elm_in_array.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Heap",permalink:"/docs/tags/heap"}],version:"current",sidebarPosition:215,frontMatter:{title:"215. Kth Largest Element in an Array",sidebar_label:"215. Kth Largest Element in an Array",tags:["Leetcode Medium","Heap"]},sidebar:"docSidebar",previous:{title:"213. House Robber II",permalink:"/docs/leetcode/1-500/house_robber_ii"},next:{title:"216. Combination Sum III",permalink:"/docs/leetcode/1-500/combination_sum_iii"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Sort and get",id:"sort-and-get",level:3},{value:"Heap",id:"heap",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/kth-largest-element-in-an-array/"},"https://leetcode.com/problems/kth-largest-element-in-an-array/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"sort-and-get"},"Sort and get"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N log N)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        nums.sort(reverse=True)\n        return nums[k-1]\n")),(0,a.kt)("h3",{id:"heap"},"Heap"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N log k)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(k)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findKthLargest(self, nums: List[int], k: int) -> int:\n        return heapq.nlargest(k, nums)[-1]\n")))}p.isMDXComponent=!0}}]);