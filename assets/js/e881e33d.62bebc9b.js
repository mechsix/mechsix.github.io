"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[95206],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),p=o,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u[d]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66906:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return s}});var r=t(83117),o=(t(67294),t(3905));const a={title:"1480. Running Sum of 1d Array",sidebar_label:"1480. Running Sum of 1d Array",tags:["Leetcode Easy"]},i=void 0,u={unversionedId:"leetcode/1001-1500/running_sum_of_1d_array",id:"leetcode/1001-1500/running_sum_of_1d_array",title:"1480. Running Sum of 1d Array",description:"https://leetcode.com/problems/running-sum-of-1d-array/",source:"@site/docs/leetcode/1001-1500/1480_running_sum_of_1d_array.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/running_sum_of_1d_array",permalink:"/docs/leetcode/1001-1500/running_sum_of_1d_array",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1480_running_sum_of_1d_array.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1480,frontMatter:{title:"1480. Running Sum of 1d Array",sidebar_label:"1480. Running Sum of 1d Array",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1473. Paint House III",permalink:"/docs/leetcode/1001-1500/paint_house_iii"},next:{title:"1423. Maximum Points You Can Obtain from Cards",permalink:"/docs/leetcode/1501-2000/max_points_you_can_obtain_from_cards"}},c={},s=[{value:"Python",id:"python",level:2}],l={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/running-sum-of-1d-array/"},"https://leetcode.com/problems/running-sum-of-1d-array/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def runningSum(self, nums: List[int]) -> List[int]:\n        total = 0\n        for i, num in enumerate(nums):\n            nums[i] += total\n            total += num\n\n        return nums\n")))}d.isMDXComponent=!0}}]);