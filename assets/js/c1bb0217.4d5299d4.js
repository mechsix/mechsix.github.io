"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5465],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=i,d=h["".concat(c,".").concat(m)]||h[m]||s[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95641:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"42. Trapping Rain Water",sidebar_label:"42. Trapping Rain Water",tags:["Leetcode Hard","TODO","Two Pointer"]},c=void 0,p={unversionedId:"leetcode/1-500/trapping_rain_water",id:"leetcode/1-500/trapping_rain_water",title:"42. Trapping Rain Water",description:"https://leetcode.com/problems/trapping-rain-water/",source:"@site/docs/leetcode/1-500/42_trapping_rain_water.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/trapping_rain_water",permalink:"/docs/leetcode/1-500/trapping_rain_water",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/42_trapping_rain_water.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"TODO",permalink:"/docs/tags/todo"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:42,frontMatter:{title:"42. Trapping Rain Water",sidebar_label:"42. Trapping Rain Water",tags:["Leetcode Hard","TODO","Two Pointer"]},sidebar:"docSidebar",previous:{title:"39. Combination Sum",permalink:"/docs/leetcode/1-500/combinations_sum"},next:{title:"43. Multiply Strings",permalink:"/docs/leetcode/1-500/multiply_strings"}},u=[{value:"Python",id:"python",children:[{value:"Calculate on each index (Timelimit Exceed)",id:"calculate-on-each-index-timelimit-exceed",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],s={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/trapping-rain-water/"},"https://leetcode.com/problems/trapping-rain-water/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"calculate-on-each-index-timelimit-exceed"},"Calculate on each index (Timelimit Exceed)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def trap(self, height: List[int]) -> int:\n        total = 0\n\n        for i in range(1, len(height)):\n            left = height[:i]\n            right = height[i+1:]\n\n            if not left or not right:\n                continue\n\n            cap = min(max(left), max(right))\n            if cap - height[i] > 0:\n                total += cap - height[i]\n\n        return total\n")),(0,a.kt)("h2",{id:"javascript"},"Javascript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var trap = function(height) {\n   let left = 0;\n   let right = height.length - 1;\n   let maxLeft = height[left];\n   let maxRight = height[right];\n   let res = 0;\n\n   while (left <= right) {\n     if (maxLeft < maxRight) {\n       if ((maxLeft - height[left]) > 0) res += (maxLeft - height[left]);\n       maxLeft = Math.max(maxLeft, height[left]);\n       left++;\n     } else {\n       if ((maxRight - height[right]) > 0) res += (maxRight - height[right]);\n       maxRight = Math.max(maxRight, height[right]);\n       right--;\n     }\n   }\n   return res;\n};\n")))}h.isMDXComponent=!0}}]);