"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4610],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=p;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=["components"],c={title:"1. Two Sum",sidebar_label:"1. Two Sum",tags:["Leetcode Easy","Number Sum"]},a=void 0,l={unversionedId:"leetcode/1-500/two_sum",id:"leetcode/1-500/two_sum",title:"1. Two Sum",description:"https://leetcode.com/problems/two-sum",source:"@site/docs/leetcode/1-500/1_two_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/two_sum",permalink:"/docs/leetcode/1-500/two_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/1_two_sum.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Number Sum",permalink:"/docs/tags/number-sum"}],version:"current",sidebarPosition:1,frontMatter:{title:"1. Two Sum",sidebar_label:"1. Two Sum",tags:["Leetcode Easy","Number Sum"]},sidebar:"docSidebar",previous:{title:"Linked List",permalink:"/docs/leetcode_note/linked_list"},next:{title:"2. Add Two Numbers",permalink:"/docs/leetcode/1-500/add_two_numbers"}},s=[{value:"Python",id:"python",children:[],level:2},{value:"Go",id:"go",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-sum"},"https://leetcode.com/problems/two-sum")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def two_sum(self, nums: List[int], target: int) -> List[int]:\n    for i in range(0, len(nums)):\n        for j in range(i+1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n\n    return False\n")),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func twoSum(nums []int, target int) []int {\n    for i:=0; i<len(nums)-1; i++ {\n        for j:=i+1; j<len(nums); j++ {\n            if (nums[i] + nums[j] == target) {\n                return []int{i, j}\n            }\n        }\n    }\n    return []int{}\n}\n")))}p.isMDXComponent=!0}}]);