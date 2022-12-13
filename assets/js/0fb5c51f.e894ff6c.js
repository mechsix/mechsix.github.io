"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[90629],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),g=i,d=p["".concat(l,".").concat(g)]||p[g]||f[g]||s;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},33735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return c}});var r=n(83117),i=(n(67294),n(3905));const s={title:"6204. Largest Positive Integer That Exists With Its Negative",sidebar_label:"6204. Largest Positive Integer That Exists With Its Negative",tags:["Leetcode Easy","Hash","Contest"]},o=void 0,a={unversionedId:"leetcode/2000/largest_positive_int_that_exists_with_its_negative",id:"leetcode/2000/largest_positive_int_that_exists_with_its_negative",title:"6204. Largest Positive Integer That Exists With Its Negative",description:"https://leetcode.com/contest/weekly-contest-315/problems/largest-positive-integer-that-exists-with-its-negative/",source:"@site/docs/leetcode/2000/6204_largest_positive_int_that_exists_with_its_negative.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/largest_positive_int_that_exists_with_its_negative",permalink:"/docs/leetcode/2000/largest_positive_int_that_exists_with_its_negative",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/6204_largest_positive_int_that_exists_with_its_negative.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Hash",permalink:"/docs/tags/hash"},{label:"Contest",permalink:"/docs/tags/contest"}],version:"current",sidebarPosition:6204,frontMatter:{title:"6204. Largest Positive Integer That Exists With Its Negative",sidebar_label:"6204. Largest Positive Integer That Exists With Its Negative",tags:["Leetcode Easy","Hash","Contest"]},sidebar:"docSidebar",previous:{title:"2136. Earliest Possible Day of Full Bloom",permalink:"/docs/leetcode/2000/earliest_possible_day_of_full_bloom"},next:{title:"6205. Count Number of Distinct Integers After Reverse Operations",permalink:"/docs/leetcode/2000/count_num_of_distinct_int_after_reverse_operation"}},l={},c=[{value:"Python",id:"python",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/contest/weekly-contest-315/problems/largest-positive-integer-that-exists-with-its-negative/"},"https://leetcode.com/contest/weekly-contest-315/problems/largest-positive-integer-that-exists-with-its-negative/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contest 315")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findMaxK(self, nums: List[int]) -> int:\n        nums = set(nums)\n\n        ans = -1\n        for num in nums:\n            if -num in nums:\n                ans = max(ans, num)\n        return ans\n")))}p.isMDXComponent=!0}}]);