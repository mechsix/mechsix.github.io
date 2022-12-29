"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[62144],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67354:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=r(83117),o=(r(67294),r(3905));const i={title:"976. Largest Perimeter Triangle",sidebar_label:"976. Largest Perimeter Triangle",tags:["Leetcode Medium","Sort","Go"]},a=void 0,l={unversionedId:"leetcode/501-1000/largest_perimeter_triangle",id:"leetcode/501-1000/largest_perimeter_triangle",title:"976. Largest Perimeter Triangle",description:"https://leetcode.com/problems/largest-perimeter-triangle/",source:"@site/docs/leetcode/501-1000/976_largest_perimeter_triangle.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/largest_perimeter_triangle",permalink:"/docs/leetcode/501-1000/largest_perimeter_triangle",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/976_largest_perimeter_triangle.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Sort",permalink:"/docs/tags/sort"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:976,frontMatter:{title:"976. Largest Perimeter Triangle",sidebar_label:"976. Largest Perimeter Triangle",tags:["Leetcode Medium","Sort","Go"]},sidebar:"docSidebar",previous:{title:"973. K Closest Points to Origin",permalink:"/docs/leetcode/501-1000/k_closest_points_to_origin"},next:{title:"977. Squares of a Sorted Array",permalink:"/docs/leetcode/501-1000/squares_of_sorted_array"}},s={},c=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/largest-perimeter-triangle/"},"https://leetcode.com/problems/largest-perimeter-triangle/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def largestPerimeter(self, nums: List[int]) -> int:\n        nums.sort(reverse=True)\n        for i in range(len(nums)-2):\n            if nums[i+1] + nums[i+2] > nums[i]:\n                return nums[i+1] + nums[i+2] + nums[i]\n        return 0\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "sort"\n\n\nfunc largestPerimeter(nums []int) int {\n    sort.Sort(sort.Reverse(sort.IntSlice(nums)))\n    for i:=0 ; i<len(nums)-2 ; i++ {\n        if nums[i+1] + nums[i+2] > nums[i] {\n            return nums[i] + nums[i+1] + nums[i+2]\n        }\n    }\n    return 0\n}\n')))}m.isMDXComponent=!0}}]);