"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[34603],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61997:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={title:"704. Binary Search",sidebar_label:"704. Binary Search",tags:["Leetcode Easy","Binary Search"]},l=void 0,s={unversionedId:"leetcode/501-1000/binary_search",id:"leetcode/501-1000/binary_search",title:"704. Binary Search",description:"Python",source:"@site/docs/leetcode/501-1000/704_binary_search.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/binary_search",permalink:"/docs/leetcode/501-1000/binary_search",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/704_binary_search.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:704,frontMatter:{title:"704. Binary Search",sidebar_label:"704. Binary Search",tags:["Leetcode Easy","Binary Search"]},sidebar:"docSidebar",previous:{title:"703. Kth Largest Element in a Stream",permalink:"/docs/leetcode/501-1000/kth_largest_elm_in_stream"},next:{title:"706. Design HashMap",permalink:"/docs/leetcode/501-1000/design_hashset"}},u=[{value:"Python",id:"python",children:[],level:2},{value:"Go",id:"go",children:[],level:2},{value:"Rust",id:"rust",children:[],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        l, r = 0, len(nums)-1\n\n        while l <= r:\n            cur = (l+r) // 2\n            if nums[cur] == target:\n                return cur\n            if nums[cur] < target:\n                l = cur + 1\n            else:\n                r = cur - 1\n\n        return -1\n")),(0,a.kt)("h2",{id:"go"},"Go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func search(nums []int, target int) int {\n    left, right := 0, len(nums)-1\n\n    for left <= right {\n        pivot := (left+right) / 2\n        if (nums[pivot] == target) {\n            return pivot\n        } else if (nums[pivot] < target) {\n            left = pivot + 1\n        } else {\n            right = pivot - 1\n        }\n    }\n    return -1\n}\n")),(0,a.kt)("h2",{id:"rust"},"Rust"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'impl Solution {\n    pub fn search(nums: Vec<i32>, target: i32) -> i32 {\n        let mut left:usize = 0;\n        let mut right:usize = nums.len() - 1;\n\n        while left < right {\n            let pivot:usize = (left+right) / 2;\n            // println!("pivot: {0}", pivot);\n\n            if nums[pivot] == target {\n                return pivot as i32;\n            } else if nums[pivot] < target {\n                left = pivot + 1;\n            } else {\n                right = pivot;\n            }\n        }\n\n        if nums[left] == target { left as i32 } else { -1 }\n    }\n}\n')))}f.isMDXComponent=!0}}]);