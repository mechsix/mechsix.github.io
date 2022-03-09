"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8225],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,b=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2102:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],c={title:"278. First Bad Version",sidebar_label:"278. First Bad Version",tags:["Leetcode Easy","Binary Search"]},l=void 0,s={unversionedId:"leetcode/1-500/first_bad_version",id:"leetcode/1-500/first_bad_version",title:"278. First Bad Version",description:"https://leetcode.com/problems/first-bad-version/",source:"@site/docs/leetcode/1-500/278_first_bad_version.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/first_bad_version",permalink:"/docs/leetcode/1-500/first_bad_version",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/278_first_bad_version.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:278,frontMatter:{title:"278. First Bad Version",sidebar_label:"278. First Bad Version",tags:["Leetcode Easy","Binary Search"]},sidebar:"docSidebar",previous:{title:"260. Single Number III",permalink:"/docs/leetcode/1-500/single_number_iii"},next:{title:"283. Move Zeroes",permalink:"/docs/leetcode/1-500/move_zeros"}},u=[{value:"Python",id:"python",children:[{value:"Binary Search",id:"binary-search",children:[],level:3}],level:2},{value:"Go",id:"go",children:[{value:"Binary Search",id:"binary-search-1",children:[],level:3}],level:2}],d={toc:u};function p(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/first-bad-version/"},"https://leetcode.com/problems/first-bad-version/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"binary-search"},"Binary Search"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def firstBadVersion(self, n: int) -> int:\n        l, r = 1, n\n        while l <= r:\n            cur = (l+r) // 2\n            if isBadVersion(cur):\n                r = cur - 1\n            else:\n                l = cur + 1\n\n        return l\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("h3",{id:"binary-search-1"},"Binary Search"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func firstBadVersion(n int) int {\n    left, right := 1, n\n\n    for left <= right {\n        pivot := (left+right) / 2\n\n        if isBadVersion(pivot) {\n            right = pivot - 1\n        } else {\n            left = pivot + 1\n        }\n    }\n    return left\n}\n")))}p.isMDXComponent=!0}}]);