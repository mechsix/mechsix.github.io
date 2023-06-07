"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[68930],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87778:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={title:"1822. Sign of the Product of an Array",sidebar_label:"1822. Sign of the Product of an Array",tags:["Leetcode Easy","Go","Rust"]},i=void 0,u={unversionedId:"leetcode/1501-2000/sign_of_the_product_of_an_array",id:"leetcode/1501-2000/sign_of_the_product_of_an_array",title:"1822. Sign of the Product of an Array",description:"https://leetcode.com/problems/sign-of-the-product-of-an-array/",source:"@site/docs/leetcode/1501-2000/1822_sign_of_the_product_of_an_array.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/sign_of_the_product_of_an_array",permalink:"/docs/leetcode/1501-2000/sign_of_the_product_of_an_array",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1822_sign_of_the_product_of_an_array.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Go",permalink:"/docs/tags/go"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:1822,frontMatter:{title:"1822. Sign of the Product of an Array",sidebar_label:"1822. Sign of the Product of an Array",tags:["Leetcode Easy","Go","Rust"]},sidebar:"docSidebar",previous:{title:"1770. Maximum Score from Performing Multiplication Operations",permalink:"/docs/leetcode/1501-2000/max_score_from_performing_multiplication_operations"},next:{title:"1823. Find the Winner of the Circular Game",permalink:"/docs/leetcode/1501-2000/find_winner_of_circular_game"}},c={},l=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2},{value:"Rust",id:"rust",level:2}],s={toc:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sign-of-the-product-of-an-array/"},"https://leetcode.com/problems/sign-of-the-product-of-an-array/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def arraySign(self, nums: List[int]) -> int:\n        result = 1\n        for num in nums:\n            if num == 0:\n                return 0\n            if num < 0:\n                result = -result\n        return result\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func arraySign(nums []int) int {\n    result := 1\n    for _, num := range nums {\n        if (num == 0) {\n            return 0\n        }\n        if (num < 0) {\n            result = -result\n        }\n    }\n    return result\n}\n")),(0,o.kt)("h2",{id:"rust"},"Rust"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn array_sign(nums: Vec<i32>) -> i32 {\n        let mut result = 1;\n        for num in &nums {\n            if *num == 0 {\n                return 0;\n            }\n            if *num < 0 {\n                result = -result;\n            }\n        }\n        result\n    }\n")))}f.isMDXComponent=!0}}]);