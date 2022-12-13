"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8659],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const i={title:"350. Intersection of Two Arrays II",sidebar_label:"350. Intersection of Two Arrays II",tags:["Leetcode Easy","Leetcode Optimable"]},s=void 0,a={unversionedId:"leetcode/1-500/intersection_of_two_arrays_ii",id:"leetcode/1-500/intersection_of_two_arrays_ii",title:"350. Intersection of Two Arrays II",description:"https://leetcode.com/problems/intersection-of-two-arrays-ii",source:"@site/docs/leetcode/1-500/350_intersection_of_two_arrays_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/intersection_of_two_arrays_ii",permalink:"/docs/leetcode/1-500/intersection_of_two_arrays_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/350_intersection_of_two_arrays_ii.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Leetcode Optimable",permalink:"/docs/tags/leetcode-optimable"}],version:"current",sidebarPosition:350,frontMatter:{title:"350. Intersection of Two Arrays II",sidebar_label:"350. Intersection of Two Arrays II",tags:["Leetcode Easy","Leetcode Optimable"]},sidebar:"docSidebar",previous:{title:"349. Intersection of Two Arrays",permalink:"/docs/leetcode/1-500/intersection_of_two_arrays"},next:{title:"354. Russian Doll Envelopes",permalink:"/docs/leetcode/1-500/russian_doll_envelopes"}},c={},l=[{value:"Python",id:"python",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/intersection-of-two-arrays-ii"},"https://leetcode.com/problems/intersection-of-two-arrays-ii")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(n1 x log(n2))"),(0,o.kt)("li",{parentName:"ul"},"Space: O(n1 & n2)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        shorts, longs = (nums1, nums2) if len(nums1) < len(nums2) else (nums2, nums1)\n\n        result = []\n        for num in shorts:\n            if num in longs:\n                result.append(num)\n                longs[longs.index(num)] = None\n\n        return result\n")))}p.isMDXComponent=!0}}]);