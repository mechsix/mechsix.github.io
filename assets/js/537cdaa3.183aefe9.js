"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[78638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"977. Squares of a Sorted Array",sidebar_label:"977. Squares of a Sorted Array",tags:["Leetcode Easy","Two Pointer"]},s=void 0,i={unversionedId:"leetcode/501-1000/squares_of_sorted_array",id:"leetcode/501-1000/squares_of_sorted_array",title:"977. Squares of a Sorted Array",description:"Python",source:"@site/docs/leetcode/501-1000/977_squares_of_sorted_array.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/squares_of_sorted_array",permalink:"/docs/leetcode/501-1000/squares_of_sorted_array",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/977_squares_of_sorted_array.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:977,frontMatter:{title:"977. Squares of a Sorted Array",sidebar_label:"977. Squares of a Sorted Array",tags:["Leetcode Easy","Two Pointer"]},sidebar:"docSidebar",previous:{title:"976. Largest Perimeter Triangle",permalink:"/docs/leetcode/501-1000/largest_perimeter_triangle"},next:{title:"981. Time Based Key-Value Store",permalink:"/docs/leetcode/501-1000/time_based_key_value_store"}},l={},c=[{value:"Python",id:"python",level:2},{value:"Cacluate and Sort",id:"cacluate-and-sort",level:3},{value:"Two Pointer",id:"two-pointer",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"cacluate-and-sort"},"Cacluate and Sort"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def sortedSquares(self, nums: List[int]) -> List[int]:\n        return sorted([i**2 for i in nums])\n")),(0,o.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the adventage from the ",(0,o.kt)("inlineCode",{parentName:"li"},"sorted")," natural")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def sortedSquares(self, nums: List[int]) -> List[int]:\n        length = len(nums)\n\n        result = [0] * length\n        left, right = 0, length-1\n\n        for i in range(length-1, -1, -1):\n            if abs(nums[left]) < abs(nums[right]):\n                result[i] = nums[right] ** 2\n                right -= 1\n            else:\n                result[i] = nums[left] ** 2\n                left += 1\n        return result\n")))}p.isMDXComponent=!0}}]);