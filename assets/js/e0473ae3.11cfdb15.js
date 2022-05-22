"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1931],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),a=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=a(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=a(t),d=i,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,c[1]=u;for(var a=2;a<o;a++)c[a]=t[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18579:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],u={title:"334. Increasing Triplet Subsequence",sidebar_label:"334. Increasing Triplet Subsequence",tags:["Leetcode Medium","Greedy"]},s=void 0,a={unversionedId:"leetcode/1-500/increasing_triplet_subsequence",id:"leetcode/1-500/increasing_triplet_subsequence",title:"334. Increasing Triplet Subsequence",description:"https://leetcode.com/problems/increasing-triplet-subsequence/",source:"@site/docs/leetcode/1-500/334_increasing_triplet_subsequence.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/increasing_triplet_subsequence",permalink:"/docs/leetcode/1-500/increasing_triplet_subsequence",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/334_increasing_triplet_subsequence.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:334,frontMatter:{title:"334. Increasing Triplet Subsequence",sidebar_label:"334. Increasing Triplet Subsequence",tags:["Leetcode Medium","Greedy"]},sidebar:"docSidebar",previous:{title:"329. Longest Increasing Path in a Matrix",permalink:"/docs/leetcode/1-500/longest_increasing_path_in_matrix"},next:{title:"338. Counting Bits",permalink:"/docs/leetcode/1-500/counting_bits"}},l=[{value:"Python",id:"python",children:[],level:2}],p={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/increasing-triplet-subsequence/"},"https://leetcode.com/problems/increasing-triplet-subsequence/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def increasingTriplet(self, nums: List[int]) -> bool:\n        if len(nums) < 3:\n            return False\n        \n        maximum = max(nums)\n        left, mid = maximum, maximum\n\n        for num in nums:\n            if num <= left:\n                left = num\n            elif num <= mid:\n                mid = num\n            else:\n                return True\n        \n        return False\n")))}m.isMDXComponent=!0}}]);