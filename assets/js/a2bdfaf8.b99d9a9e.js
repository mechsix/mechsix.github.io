"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2347],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51270:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"823. Binary Trees With Factors",sidebar_label:"823. Binary Trees With Factors",tags:["Leetcode Medium","DP","TODO"]},l=void 0,s={unversionedId:"leetcode/501-1000/binary_tree_with_factors",id:"leetcode/501-1000/binary_tree_with_factors",title:"823. Binary Trees With Factors",description:"https://leetcode.com/problems/binary-trees-with-factors/",source:"@site/docs/leetcode/501-1000/832_binary_tree_with_factors.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/binary_tree_with_factors",permalink:"/docs/leetcode/501-1000/binary_tree_with_factors",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/832_binary_tree_with_factors.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:832,frontMatter:{title:"823. Binary Trees With Factors",sidebar_label:"823. Binary Trees With Factors",tags:["Leetcode Medium","DP","TODO"]},sidebar:"docSidebar",previous:{title:"820. Short Encoding of Words",permalink:"/docs/leetcode/501-1000/short_encoding_of_words"},next:{title:"841. Keys and Rooms",permalink:"/docs/leetcode/501-1000/keys_and_rooms"}},u=[{value:"Python",id:"python",children:[{value:"Bottom Up DP",id:"bottom-up-dp",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-trees-with-factors/"},"https://leetcode.com/problems/binary-trees-with-factors/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"bottom-up-dp"},"Bottom Up DP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Offical solution")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def numFactoredBinaryTrees(self, arr: List[int]) -> int:\n        arr.sort()\n\n        dp = [1] * len(arr)\n        mapper = {num: index for index, num in enumerate(arr)}\n\n        for i, num in enumerate(arr):\n            for j in range(i):\n                left, right = num % arr[j], num / arr[j]\n                if left == 0 and right in mapper:\n                    dp[i] += dp[j] * dp[mapper[right]]\n                    dp[i] %= (10**9+7)\n\n        return sum(dp) % (10**9+7)\n")))}d.isMDXComponent=!0}}]);