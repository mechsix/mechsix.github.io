"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[85194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"228. Summary Ranges",sidebar_label:"228. Summary Ranges",tags:["Leetcode Easy","Two Pointer"]},s=void 0,l={unversionedId:"leetcode/1-500/summary_ranges",id:"leetcode/1-500/summary_ranges",title:"228. Summary Ranges",description:"https://leetcode.com/problems/summary-ranges/",source:"@site/docs/leetcode/1-500/228_summary_ranges.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/summary_ranges",permalink:"/docs/leetcode/1-500/summary_ranges",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/228_summary_ranges.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:228,frontMatter:{title:"228. Summary Ranges",sidebar_label:"228. Summary Ranges",tags:["Leetcode Easy","Two Pointer"]},sidebar:"docSidebar",previous:{title:"226. Invert Binary Tree",permalink:"/docs/leetcode/1-500/invert_binary_tree"},next:{title:"230. Kth Smallest Element in a BST",permalink:"/docs/leetcode/1-500/kth_smallest_elm_in_bst"}},i={},c=[{value:"Python",id:"python",level:2},{value:"Two Pointer",id:"two-pointer",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/summary-ranges/"},"https://leetcode.com/problems/summary-ranges/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def summaryRanges(self, nums: List[int]) -> List[str]:\n        length = len(nums)\n\n        if length < 2:\n            return [str(num) for num in nums]\n\n        cur, fast = 0, 0\n        result = []\n        while fast < length - 1:\n            if nums[fast] + 1 == nums[fast+1]:\n                fast += 1\n                continue\n            result.append(\n                "{}->{}".format(nums[cur], nums[fast]) if cur != fast\n                else str(nums[fast])\n            )\n            fast += 1\n            cur = fast\n\n        result.append(\n            "{}->{}".format(nums[cur], nums[fast]) if cur != fast\n            else str(nums[fast])\n        )\n\n        return result\n')))}p.isMDXComponent=!0}}]);