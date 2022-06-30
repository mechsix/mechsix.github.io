"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3261],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:o,a[1]=m;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44990:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],m={title:"462. Minimum Moves to Equal Array Elements II",sidebar_label:"462. Minimum Moves to Equal Array Elements II",tags:["Leetcode Medium"]},l=void 0,u={unversionedId:"leetcode/1-500/minimum_moves_to_equal_array_elements_ii",id:"leetcode/1-500/minimum_moves_to_equal_array_elements_ii",title:"462. Minimum Moves to Equal Array Elements II",description:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/",source:"@site/docs/leetcode/1-500/462_minimum_moves_to_equal_array_elements_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/minimum_moves_to_equal_array_elements_ii",permalink:"/docs/leetcode/1-500/minimum_moves_to_equal_array_elements_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/462_minimum_moves_to_equal_array_elements_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:462,frontMatter:{title:"462. Minimum Moves to Equal Array Elements II",sidebar_label:"462. Minimum Moves to Equal Array Elements II",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"461. Hamming Distance",permalink:"/docs/leetcode/1-500/hamming_distance"},next:{title:"485. Max Consecutive Ones",permalink:"/docs/leetcode/1-500/max_consecutive_ones"}},c=[{value:"Python",id:"python",children:[],level:2}],s={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/"},"https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e00\u958b\u59cb\u89ba\u5f97\u662f\u7528\u5e73\u5747\u6578\uff0c\u4f46\u5e73\u5747\u6578\u6703\u53d7\u96e2\u7fa4\u503c\u5f71\u97ff\u5c0e\u81f4\u504f\u96e2\u8207\u6240\u6709\u6578\u5b57\u6700\u77ed\u8ddd\u96e2\u7684\u984c\u610f\u3002\u56e0\u6b64\u4f7f\u7528\u4e2d\u4f4d\u6578\u8655\u7406")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minMoves2(self, nums: List[int]) -> int:\n        nums.sort()\n        mid = nums[len(nums)>>1]\n        \n        ans = 0\n        for num in nums:\n            ans += abs(num-mid)\n\n        return ans\n")))}p.isMDXComponent=!0}}]);