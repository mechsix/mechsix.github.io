"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[7168],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36303:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={title:"1480. Running Sum of 1d Array",sidebar_label:"1480. Running Sum of 1d Array",tags:["Leetcode Easy"]},c=void 0,s={unversionedId:"leetcode/1501-2000/running_sum_of_1d_array",id:"leetcode/1501-2000/running_sum_of_1d_array",title:"1480. Running Sum of 1d Array",description:"https://leetcode.com/problems/running-sum-of-1d-array/",source:"@site/docs/leetcode/1501-2000/1480_running_sum_of_1d_array.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/running_sum_of_1d_array",permalink:"/docs/leetcode/1501-2000/running_sum_of_1d_array",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1480_running_sum_of_1d_array.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1480,frontMatter:{title:"1480. Running Sum of 1d Array",sidebar_label:"1480. Running Sum of 1d Array",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1461. Check If a String Contains All Binary Codes of Size K",permalink:"/docs/leetcode/1501-2000/check_a_string_contains_all_bin_codes_of_size_k"},next:{title:"1539. Kth Missing Positive Number",permalink:"/docs/leetcode/1501-2000/kth_missing_possitive_num"}},l=[{value:"Python",id:"python",children:[],level:2}],d={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/running-sum-of-1d-array/"},"https://leetcode.com/problems/running-sum-of-1d-array/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def runningSum(self, nums: List[int]) -> List[int]:\n        total = 0\n        for i, num in enumerate(nums):\n            nums[i] += total\n            total += num\n\n        return nums\n")))}p.isMDXComponent=!0}}]);