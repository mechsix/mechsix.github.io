"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[95436],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const l={title:"16. 3Sum Closest",sidebar_label:"16. 3Sum Closest",tags:["Leetcode Medium","Number Sum","Two Pointer"]},s=void 0,i={unversionedId:"leetcode/1-500/three_sum_closest",id:"leetcode/1-500/three_sum_closest",title:"16. 3Sum Closest",description:"https://leetcode.com/problems/3sum-closest/",source:"@site/docs/leetcode/1-500/16_three_sum_closest.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/three_sum_closest",permalink:"/docs/leetcode/1-500/three_sum_closest",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/16_three_sum_closest.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Number Sum",permalink:"/docs/tags/number-sum"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:16,frontMatter:{title:"16. 3Sum Closest",sidebar_label:"16. 3Sum Closest",tags:["Leetcode Medium","Number Sum","Two Pointer"]},sidebar:"docSidebar",previous:{title:"15. 3Sum",permalink:"/docs/leetcode/1-500/three_sum"},next:{title:"17. Letter Combinations of a Phone Number",permalink:"/docs/leetcode/1-500/letter_combinations_of_phone_number"}},a={},c=[{value:"Python",id:"python",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/3sum-closest/"},"https://leetcode.com/problems/3sum-closest/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,o.kt)("p",null,"\u6bdb\u6bdb\u87f2\u5f0fTwo Pointer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def threeSumClosest(self, nums: List[int], target: int) -> int:\n        nums.sort()\n        diff = inf\n\n        for i in range(len(nums)):\n            low, high = i+1, len(nums)-1\n\n            while low < high:\n                total = nums[i] + nums[low] + nums[high]\n\n                if abs(target-total) < abs(diff):\n                    diff = target-total\n\n                if total < target:\n                    low += 1\n                else:\n                    high -= 1\n\n                if diff == 0:\n                    break\n        return target - diff\n")))}p.isMDXComponent=!0}}]);