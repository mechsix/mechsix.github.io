"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37926],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70010:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"912. Sort an Array",sidebar_label:"912. Sort an Array",tags:["Leetcode Medium"]},s=void 0,u={unversionedId:"leetcode/501-1000/sort_an_array",id:"leetcode/501-1000/sort_an_array",title:"912. Sort an Array",description:"https://leetcode.com/problems/sort-an-array/",source:"@site/docs/leetcode/501-1000/912_sort_an_array.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/sort_an_array",permalink:"/docs/leetcode/501-1000/sort_an_array",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/912_sort_an_array.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:912,frontMatter:{title:"912. Sort an Array",sidebar_label:"912. Sort an Array",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"905. Sort Array By Parity",permalink:"/docs/leetcode/501-1000/sort_array_by_parity"},next:{title:"916. Word Subsets",permalink:"/docs/leetcode/501-1000/word_subsets"}},c=[{value:"Python",id:"python",children:[{value:"Bubble Sort",id:"bubble-sort",children:[],level:3}],level:2},{value:"Rust",id:"rust",children:[{value:"Bubble Sort",id:"bubble-sort-1",children:[],level:3}],level:2}],p={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-an-array/"},"https://leetcode.com/problems/sort-an-array/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"bubble-sort"},"Bubble Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def sortArray(self, nums: List[int]) -> List[int]:\n        n = len(nums)\n        for _ in range(n-1):\n            for i in range(1, n):\n                if nums[i-1] > nums[i]:\n                    nums[i], nums[i-1] = nums[i-1], nums[i]\n        return nums\n")),(0,a.kt)("h2",{id:"rust"},"Rust"),(0,a.kt)("h3",{id:"bubble-sort-1"},"Bubble Sort"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {\n        let mut swapped = true;\n        let mut answer = vec![0; nums.len()];\n        answer[..nums.len()].clone_from_slice(&nums);\n\n        while swapped {\n            swapped = false;\n            for i in 1..answer.len() {\n                if answer[i - 1] > answer[i] {\n                    answer.swap(i - 1, i);\n                    swapped = true\n                }\n            }\n        }\n        answer\n    }\n}\n")))}d.isMDXComponent=!0}}]);