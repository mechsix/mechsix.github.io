"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2937],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(m,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14623:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"453. Minimum Moves to Equal Array Elements",sidebar_label:"453. Minimum Moves to Equal Array Elements",tags:["Leetcode Medium"]},m=void 0,u={unversionedId:"leetcode/1-500/minimum_moves_to_equal_array_elements",id:"leetcode/1-500/minimum_moves_to_equal_array_elements",title:"453. Minimum Moves to Equal Array Elements",description:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements/",source:"@site/docs/leetcode/1-500/453_minimum_moves_to_equal_array_elements.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/minimum_moves_to_equal_array_elements",permalink:"/docs/leetcode/1-500/minimum_moves_to_equal_array_elements",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/453_minimum_moves_to_equal_array_elements.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:453,frontMatter:{title:"453. Minimum Moves to Equal Array Elements",sidebar_label:"453. Minimum Moves to Equal Array Elements",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"452. Minimum Number of Arrows to Burst Balloons",permalink:"/docs/leetcode/1-500/min_arrow_bust_balloons"},next:{title:"456. 132 Pattern",permalink:"/docs/leetcode/1-500/p132_pattern"}},s=[{value:"Python",id:"python",children:[],level:2}],c={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-moves-to-equal-array-elements/"},"https://leetcode.com/problems/minimum-moves-to-equal-array-elements/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minMoves(self, nums: List[int]) -> int:\n        nums.sort()\n        \n        ans = 0\n        for i in range(1, len(nums)):\n            ans += nums[i] - nums[0]\n        \n        return ans\n")))}p.isMDXComponent=!0}}]);