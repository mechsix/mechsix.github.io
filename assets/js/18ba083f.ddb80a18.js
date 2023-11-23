"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[58194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32320:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={title:"1630. Arithmetic Subarrays",sidebar_label:"1630. Arithmetic Subarrays",tags:["Leetcode Medium","Array"]},o=void 0,s={unversionedId:"leetcode/1501-2000/arithmetic_subarray",id:"leetcode/1501-2000/arithmetic_subarray",title:"1630. Arithmetic Subarrays",description:"https://leetcode.com/problems/arithmetic-subarrays/",source:"@site/docs/leetcode/1501-2000/1630_arithmetic_subarray.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/arithmetic_subarray",permalink:"/docs/leetcode/1501-2000/arithmetic_subarray",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1630_arithmetic_subarray.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Array",permalink:"/docs/tags/array"}],version:"current",sidebarPosition:1630,frontMatter:{title:"1630. Arithmetic Subarrays",sidebar_label:"1630. Arithmetic Subarrays",tags:["Leetcode Medium","Array"]},sidebar:"docSidebar",previous:{title:"1612. Check If Two Expression Trees are Equivalent",permalink:"/docs/leetcode/1501-2000/check_experssion_trees_equal"},next:{title:"1631. Path With Minimum Effort",permalink:"/docs/leetcode/1501-2000/path_with_min_effort"}},c={},l=[{value:"Python",id:"python",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/arithmetic-subarrays/"},"https://leetcode.com/problems/arithmetic-subarrays/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isArithmetic(self, nums):\n        if len(nums) < 2:\n            return True\n\n        snums = sorted(nums)\n        diff = snums[1] - snums[0]\n        for i in range(2, len(snums)):\n            if snums[i] - snums[i-1] != diff:\n                return False\n        return True\n\n    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:\n        m = len(l)\n\n        result = []\n        for i in range(m):\n            result.append(self.isArithmetic(nums[l[i]:r[i]+1]))\n\n        return result\n")))}p.isMDXComponent=!0}}]);