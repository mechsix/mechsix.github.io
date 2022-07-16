"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1631],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62690:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"576. Out of Boundary Paths",sidebar_label:"576. Out of Boundary Paths",tags:["Leetcode Medium","DP"]},u=void 0,l={unversionedId:"leetcode/501-1000/out_of_boundary_paths",id:"leetcode/501-1000/out_of_boundary_paths",title:"576. Out of Boundary Paths",description:"https://leetcode.com/problems/out-of-boundary-paths/",source:"@site/docs/leetcode/501-1000/576_out_of_boundary_paths.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/out_of_boundary_paths",permalink:"/docs/leetcode/501-1000/out_of_boundary_paths",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/576_out_of_boundary_paths.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:576,frontMatter:{title:"576. Out of Boundary Paths",sidebar_label:"576. Out of Boundary Paths",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"567. Permutation in String",permalink:"/docs/leetcode/501-1000/permutation_in_string"},next:{title:"557. Reverse Words in a String III",permalink:"/docs/leetcode/501-1000/reverse_words_in_string_iii"}},s=[{value:"Python",id:"python",children:[{value:"Top Down DP",id:"top-down-dp",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/out-of-boundary-paths/"},"https://leetcode.com/problems/out-of-boundary-paths/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\nclass Solution:\n    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:\n        @cache\n        def dp(row: int, col: int, remains: int) -> int:\n            if row >= m or row < 0 or col >= n or col < 0:\n                return 1\n\n            if remains == 0:\n                return 0\n\n            result = dp(row+1, col, remains-1) + \\\n                     dp(row-1, col, remains-1) + \\\n                     dp(row, col+1, remains-1) + \\\n                     dp(row, col-1, remains-1)\n\n            return result % (10**9 + 7)\n\n        return dp(startRow, startColumn, maxMove)\n")))}d.isMDXComponent=!0}}]);