"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[19603],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={title:"6205. Count Number of Distinct Integers After Reverse Operations",sidebar_label:"6205. Count Number of Distinct Integers After Reverse Operations",tags:["Leetcode Medium","Hash","Contest"]},s=void 0,c={unversionedId:"leetcode/2000/count_num_of_distinct_int_after_reverse_operation",id:"leetcode/2000/count_num_of_distinct_int_after_reverse_operation",title:"6205. Count Number of Distinct Integers After Reverse Operations",description:"https://leetcode.com/contest/weekly-contest-315/problems/count-number-of-distinct-integers-after-reverse-operations/",source:"@site/docs/leetcode/2000/6205_count_num_of_distinct_int_after_reverse_operation.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/count_num_of_distinct_int_after_reverse_operation",permalink:"/docs/leetcode/2000/count_num_of_distinct_int_after_reverse_operation",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/6205_count_num_of_distinct_int_after_reverse_operation.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Hash",permalink:"/docs/tags/hash"},{label:"Contest",permalink:"/docs/tags/contest"}],version:"current",sidebarPosition:6205,frontMatter:{title:"6205. Count Number of Distinct Integers After Reverse Operations",sidebar_label:"6205. Count Number of Distinct Integers After Reverse Operations",tags:["Leetcode Medium","Hash","Contest"]},sidebar:"docSidebar",previous:{title:"6204. Largest Positive Integer That Exists With Its Negative",permalink:"/docs/leetcode/2000/largest_positive_int_that_exists_with_its_negative"},next:{title:"6207. Count Subarrays With Fixed Bounds",permalink:"/docs/leetcode/2000/count_subarray_with_fixed_bounds"}},a={},u=[{value:"Python",id:"python",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/contest/weekly-contest-315/problems/count-number-of-distinct-integers-after-reverse-operations/"},"https://leetcode.com/contest/weekly-contest-315/problems/count-number-of-distinct-integers-after-reverse-operations/")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contest 315")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def countDistinctIntegers(self, nums: List[int]) -> int:\n        nums = set(nums)\n        rev_nums = set()\n\n        for num in nums:\n            rev = list(str(num))\n            rev.reverse()\n            rev_nums.add(int(''.join(rev)))\n        return len(nums | rev_nums)\n")))}p.isMDXComponent=!0}}]);