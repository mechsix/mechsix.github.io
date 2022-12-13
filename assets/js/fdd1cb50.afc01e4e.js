"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[25765],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,h=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(h,a(a({ref:t},m),{},{components:n})):r.createElement(h,a({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={title:"11. Container With Most Water",sidebar_label:"11. Container With Most Water",tags:["Leetcode Medium","Two Pointer"]},a=void 0,l={unversionedId:"leetcode/1-500/container_with_most_water",id:"leetcode/1-500/container_with_most_water",title:"11. Container With Most Water",description:"https://leetcode.com/problems/container-with-most-water/",source:"@site/docs/leetcode/1-500/11_container_with_most_water.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/container_with_most_water",permalink:"/docs/leetcode/1-500/container_with_most_water",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/11_container_with_most_water.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:11,frontMatter:{title:"11. Container With Most Water",sidebar_label:"11. Container With Most Water",tags:["Leetcode Medium","Two Pointer"]},sidebar:"docSidebar",previous:{title:"9. Palindrome Number",permalink:"/docs/leetcode/1-500/palindrome_num"},next:{title:"12. Integer to Roman",permalink:"/docs/leetcode/1-500/integer_to_roman"}},c={},u=[{value:"Python",id:"python",level:2},{value:"Brute Force (Timelimit Exceed)",id:"brute-force-timelimit-exceed",level:3},{value:"Two Pointer",id:"two-pointer",level:3}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/container-with-most-water/"},"https://leetcode.com/problems/container-with-most-water/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"brute-force-timelimit-exceed"},"Brute Force (Timelimit Exceed)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(NlogN)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        max_amount = 0\n        for i in range(len(height)):\n            amount = 0\n            for j in range(i, len(height)):\n                amount = (j-i) * min(height[i], height[j])\n                max_amount = max(max_amount, amount)\n        return max_amount\n")),(0,o.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxArea(self, height: List[int]) -> int:\n        max_amount = 0\n        l, r = 0, len(height)-1\n\n        while l < r:\n            amount = min(height[l], height[r]) * (r-l)\n            max_amount = max(max_amount, amount)\n\n            if height[l] < height[r]:\n                l += 1\n            else:\n                r -= 1\n        return max_amount\n")))}s.isMDXComponent=!0}}]);