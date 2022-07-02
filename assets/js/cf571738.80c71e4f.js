"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5315],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,_=m["".concat(l,".").concat(d)]||m[d]||f[d]||o;return r?n.createElement(_,i(i({ref:t},s),{},{components:r})):n.createElement(_,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73996:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",sidebar_label:"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",tags:["Leetcode Medium","Greedy"]},l=void 0,u={unversionedId:"leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts",id:"leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts",title:"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",description:"https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/",source:"@site/docs/leetcode/1001-1500/1465_max_area_of_piece_of_cake_after_h_w_cuts.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts",permalink:"/docs/leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1465_max_area_of_piece_of_cake_after_h_w_cuts.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:1465,frontMatter:{title:"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",sidebar_label:"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts",tags:["Leetcode Medium","Greedy"]},sidebar:"docSidebar",previous:{title:"1461. Check If a String Contains All Binary Codes of Size K",permalink:"/docs/leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k"},next:{title:"1480. Running Sum of 1d Array",permalink:"/docs/leetcode/1001-1500/running_sum_of_1d_array"}},s=[{value:"Python",id:"python",children:[{value:"Greedy",id:"greedy",children:[],level:3}],level:2}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/"},"https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"greedy"},"Greedy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxArea(self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]) -> int:\n        horizontalCuts.sort()\n        verticalCuts.sort()\n\n        max_h = max(horizontalCuts[0], h-horizontalCuts[-1])\n        max_w = max(verticalCuts[0], w-verticalCuts[-1])\n\n        for i in range(1, len(horizontalCuts)):\n            interval_h = horizontalCuts[i] - horizontalCuts[i-1]\n            max_h = max(max_h, interval_h)\n\n        for j in range(1, len(verticalCuts)):\n            interval_w = verticalCuts[j] - verticalCuts[j-1]\n            max_w = max(max_w, interval_w)\n\n        return (max_h * max_w) % (10**9 + 7)\n\n")))}m.isMDXComponent=!0}}]);