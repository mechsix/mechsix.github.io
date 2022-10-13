"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[23340],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},21747:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={title:"167. Two Sum II - Input Array Is Sorted",sidebar_label:"167. Two Sum II - Input Array Is Sorted",tags:["Leetcode Easy","Number Sum","Binary Search"]},l=void 0,s={unversionedId:"leetcode/1-500/two_sum_ii",id:"leetcode/1-500/two_sum_ii",title:"167. Two Sum II - Input Array Is Sorted",description:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",source:"@site/docs/leetcode/1-500/167_two_sum_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/two_sum_ii",permalink:"/docs/leetcode/1-500/two_sum_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/167_two_sum_ii.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Number Sum",permalink:"/docs/tags/number-sum"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:167,frontMatter:{title:"167. Two Sum II - Input Array Is Sorted",sidebar_label:"167. Two Sum II - Input Array Is Sorted",tags:["Leetcode Easy","Number Sum","Binary Search"]},sidebar:"docSidebar",previous:{title:"165. Compare Version Numbers",permalink:"/docs/leetcode/1-500/compare_version_numbers"},next:{title:"169. Majority Element",permalink:"/docs/leetcode/1-500/majority_elements"}},c=[{value:"Python",id:"python",children:[],level:2},{value:"Go",id:"go",children:[],level:2}],m={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted"},"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        l, r = 0, len(numbers)-1\n\n        while l < r:\n            total = numbers[l] + numbers[r]\n            if total == target:\n                return [l+1, r+1]\n            elif total < target:\n                l += 1\n            else:\n                r -= 1\n")),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func twoSum(numbers []int, target int) []int {\n    l := 0\n    r := len(numbers) - 1\n\n    for l < r {\n        sum := numbers[l] + numbers[r]\n\n        if sum == target {\n            return []int{l+1, r+1}\n        } else if sum < target {\n            l += 1\n        } else {\n            r -= 1\n        }\n    }\n    return []int{}\n}\n")))}p.isMDXComponent=!0}}]);