"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[58225],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return b}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2102:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=t(83117),o=(t(67294),t(3905));const i={title:"278. First Bad Version",sidebar_label:"278. First Bad Version",tags:["Leetcode Easy","Binary Search","Go"]},a=void 0,c={unversionedId:"leetcode/1-500/first_bad_version",id:"leetcode/1-500/first_bad_version",title:"278. First Bad Version",description:"https://leetcode.com/problems/first-bad-version/",source:"@site/docs/leetcode/1-500/278_first_bad_version.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/first_bad_version",permalink:"/docs/leetcode/1-500/first_bad_version",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/278_first_bad_version.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:278,frontMatter:{title:"278. First Bad Version",sidebar_label:"278. First Bad Version",tags:["Leetcode Easy","Binary Search","Go"]},sidebar:"docSidebar",previous:{title:"268. Missing Number",permalink:"/docs/leetcode/1-500/missing_number"},next:{title:"283. Move Zeroes",permalink:"/docs/leetcode/1-500/move_zeros"}},s={},l=[{value:"Python",id:"python",level:2},{value:"Binary Search",id:"binary-search",level:3},{value:"Go",id:"go",level:2},{value:"Binary Search",id:"binary-search-1",level:3}],u={toc:l};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/first-bad-version/"},"https://leetcode.com/problems/first-bad-version/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"binary-search"},"Binary Search"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def firstBadVersion(self, n: int) -> int:\n        l, r = 1, n\n        while l <= r:\n            cur = (l+r) // 2\n            if isBadVersion(cur):\n                r = cur - 1\n            else:\n                l = cur + 1\n\n        return l\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("h3",{id:"binary-search-1"},"Binary Search"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func firstBadVersion(n int) int {\n    left, right := 1, n\n\n    for left <= right {\n        pivot := (left+right) / 2\n\n        if isBadVersion(pivot) {\n            right = pivot - 1\n        } else {\n            left = pivot + 1\n        }\n    }\n    return left\n}\n")))}d.isMDXComponent=!0}}]);