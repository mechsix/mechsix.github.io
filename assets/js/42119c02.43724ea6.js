"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75446],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=o,f=s["".concat(l,".").concat(d)]||s[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11414:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var n=r(83117),o=(r(67294),r(3905));const a={title:"48. Rotate Image",sidebar_label:"48. Rotate Image",tags:["Leetcode Medium","Matrix","In Place"]},i=void 0,c={unversionedId:"leetcode/1-500/rotate_image",id:"leetcode/1-500/rotate_image",title:"48. Rotate Image",description:"https://leetcode.com/problems/rotate-image/",source:"@site/docs/leetcode/1-500/48_rotate_image.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/rotate_image",permalink:"/docs/leetcode/1-500/rotate_image",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/48_rotate_image.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Matrix",permalink:"/docs/tags/matrix"},{label:"In Place",permalink:"/docs/tags/in-place"}],version:"current",sidebarPosition:48,frontMatter:{title:"48. Rotate Image",sidebar_label:"48. Rotate Image",tags:["Leetcode Medium","Matrix","In Place"]},sidebar:"docSidebar",previous:{title:"47. Permutations II",permalink:"/docs/leetcode/1-500/permutations_ii"},next:{title:"49. Group Anagrams",permalink:"/docs/leetcode/1-500/group_anagrams"}},l={},u=[{value:"Python",id:"python",level:2}],m={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rotate-image/"},"https://leetcode.com/problems/rotate-image/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def rotate(self, matrix: List[List[int]]) -> None:\n        """\n        Do not return anything, modify matrix in-place instead.\n        """\n        n = len(matrix)\n        \n        for i in range(n//2 + n%2):\n            for j in range(n//2):\n                # top             right             bottom                left\n                matrix[i][j],     matrix[j][n-i-1], matrix[n-i-1][n-j-1], matrix[n-j-1][i] = \\\n                matrix[n-j-1][i], matrix[i][j],     matrix[j][n-i-1],     matrix[n-i-1][n-j-1]\n                # left            top               right                 bottom\n')))}s.isMDXComponent=!0}}]);