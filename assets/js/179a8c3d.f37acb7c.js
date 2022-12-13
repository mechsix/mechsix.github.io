"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[85194],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24054:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const a={title:"228. Summary Ranges",sidebar_label:"228. Summary Ranges",tags:["Leetcode Easy","Two Pointer"]},s=void 0,i={unversionedId:"leetcode/1-500/summary_ranges",id:"leetcode/1-500/summary_ranges",title:"228. Summary Ranges",description:"https://leetcode.com/problems/summary-ranges/",source:"@site/docs/leetcode/1-500/228_summary_ranges.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/summary_ranges",permalink:"/docs/leetcode/1-500/summary_ranges",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/228_summary_ranges.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:228,frontMatter:{title:"228. Summary Ranges",sidebar_label:"228. Summary Ranges",tags:["Leetcode Easy","Two Pointer"]},sidebar:"docSidebar",previous:{title:"226. Invert Binary Tree",permalink:"/docs/leetcode/1-500/invert_binary_tree"},next:{title:"230. Kth Smallest Element in a BST",permalink:"/docs/leetcode/1-500/kth_smallest_elm_in_bst"}},u={},c=[{value:"Python",id:"python",level:2},{value:"Two Pointer",id:"two-pointer",level:3}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/summary-ranges/"},"https://leetcode.com/problems/summary-ranges/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def summaryRanges(self, nums: List[int]) -> List[str]:\n        length = len(nums)\n\n        if length < 2:\n            return [str(num) for num in nums]\n\n        cur, fast = 0, 0\n        result = []\n        while fast < length - 1:\n            if nums[fast] + 1 == nums[fast+1]:\n                fast += 1\n                continue\n            result.append(\n                "{}->{}".format(nums[cur], nums[fast]) if cur != fast\n                else str(nums[fast])\n            )\n            fast += 1\n            cur = fast\n\n        result.append(\n            "{}->{}".format(nums[cur], nums[fast]) if cur != fast\n            else str(nums[fast])\n        )\n\n        return result\n')))}m.isMDXComponent=!0}}]);