"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[65465],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,g=s["".concat(c,".").concat(m)]||s[m]||h[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95641:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(83117),i=(n(67294),n(3905));const a={title:"42. Trapping Rain Water",sidebar_label:"42. Trapping Rain Water",tags:["Leetcode Hard","TODO","Two Pointer"]},o=void 0,l={unversionedId:"leetcode/1-500/trapping_rain_water",id:"leetcode/1-500/trapping_rain_water",title:"42. Trapping Rain Water",description:"https://leetcode.com/problems/trapping-rain-water/",source:"@site/docs/leetcode/1-500/42_trapping_rain_water.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/trapping_rain_water",permalink:"/docs/leetcode/1-500/trapping_rain_water",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/42_trapping_rain_water.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"TODO",permalink:"/docs/tags/todo"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:42,frontMatter:{title:"42. Trapping Rain Water",sidebar_label:"42. Trapping Rain Water",tags:["Leetcode Hard","TODO","Two Pointer"]},sidebar:"docSidebar",previous:{title:"39. Combination Sum",permalink:"/docs/leetcode/1-500/combinations_sum"},next:{title:"43. Multiply Strings",permalink:"/docs/leetcode/1-500/multiply_strings"}},c={},p=[{value:"Python",id:"python",level:2},{value:"Calculate on each index (Timelimit Exceed)",id:"calculate-on-each-index-timelimit-exceed",level:3},{value:"Javascript",id:"javascript",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/trapping-rain-water/"},"https://leetcode.com/problems/trapping-rain-water/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"calculate-on-each-index-timelimit-exceed"},"Calculate on each index (Timelimit Exceed)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def trap(self, height: List[int]) -> int:\n        total = 0\n\n        for i in range(1, len(height)):\n            left = height[:i]\n            right = height[i+1:]\n\n            if not left or not right:\n                continue\n\n            cap = min(max(left), max(right))\n            if cap - height[i] > 0:\n                total += cap - height[i]\n\n        return total\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var trap = function(height) {\n   let left = 0;\n   let right = height.length - 1;\n   let maxLeft = height[left];\n   let maxRight = height[right];\n   let res = 0;\n\n   while (left <= right) {\n     if (maxLeft < maxRight) {\n       if ((maxLeft - height[left]) > 0) res += (maxLeft - height[left]);\n       maxLeft = Math.max(maxLeft, height[left]);\n       left++;\n     } else {\n       if ((maxRight - height[right]) > 0) res += (maxRight - height[right]);\n       maxRight = Math.max(maxRight, height[right]);\n       right--;\n     }\n   }\n   return res;\n};\n")))}s.isMDXComponent=!0}}]);