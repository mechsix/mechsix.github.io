"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4610],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?r.createElement(f,u(u({ref:t},m),{},{components:n})):r.createElement(f,u({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const i={title:"1. Two Sum",sidebar_label:"1. Two Sum",tags:["Leetcode Easy","Number Sum","Go","Rust"]},u=void 0,a={unversionedId:"leetcode/1-500/two_sum",id:"leetcode/1-500/two_sum",title:"1. Two Sum",description:"https://leetcode.com/problems/two-sum",source:"@site/docs/leetcode/1-500/1_two_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/two_sum",permalink:"/docs/leetcode/1-500/two_sum",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/1_two_sum.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Number Sum",permalink:"/docs/tags/number-sum"},{label:"Go",permalink:"/docs/tags/go"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:1,frontMatter:{title:"1. Two Sum",sidebar_label:"1. Two Sum",tags:["Leetcode Easy","Number Sum","Go","Rust"]},sidebar:"docSidebar",previous:{title:"Linked List",permalink:"/docs/leetcode_note/linked_list"},next:{title:"2. Add Two Numbers",permalink:"/docs/leetcode/1-500/add_two_numbers"}},l={},s=[{value:"Python",id:"python",level:2},{value:"Brute Force",id:"brute-force",level:3},{value:"Prefix Mapper with dict",id:"prefix-mapper-with-dict",level:3},{value:"Go",id:"go",level:2},{value:"Rust",id:"rust",level:2},{value:"Prefix Mapper",id:"prefix-mapper",level:3}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-sum"},"https://leetcode.com/problems/two-sum")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"brute-force"},"Brute Force"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def two_sum(self, nums: List[int], target: int) -> List[int]:\n    for i in range(0, len(nums)):\n        for j in range(i+1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n\n    return False\n")),(0,o.kt)("h3",{id:"prefix-mapper-with-dict"},"Prefix Mapper with dict"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\n        memory = {num: index for index, num in enumerate(nums)}\n\n        for index, num in enumerate(nums):\n            other = target - num\n            if other in memory and memory[other] != index:\n                return [memory[other], index] if memory[other] < index else [index, memory[other]]\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func twoSum(nums []int, target int) []int {\n    for i:=0; i<len(nums)-1; i++ {\n        for j:=i+1; j<len(nums); j++ {\n            if (nums[i] + nums[j] == target) {\n                return []int{i, j}\n            }\n        }\n    }\n    return []int{}\n}\n")),(0,o.kt)("h2",{id:"rust"},"Rust"),(0,o.kt)("h3",{id:"prefix-mapper"},"Prefix Mapper"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use std::collections::HashMap;\n\n\nimpl Solution {\n    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {\n        let mut mapper: HashMap<i32, usize> = HashMap::new();\n        for (i, num) in nums.iter().enumerate() {\n            mapper.insert(*num, i);\n        }\n\n        for (i, num) in nums.iter().enumerate() {\n            let other = target - num;\n            if mapper.contains_key(&other) && mapper.get(&other).unwrap() != &i {\n                return vec![i as i32, *mapper.get(&other).unwrap() as i32];\n            }\n        }\n\n        panic!("not possible")\n    }\n}\n')))}c.isMDXComponent=!0}}]);