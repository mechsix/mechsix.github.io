"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[50144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,b=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?r.createElement(b,a(a({ref:t},m),{},{components:n})):r.createElement(b,a({ref:t},m))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"268. Missing Number",sidebar_label:"268. Missing Number",tags:["Leetcode Easy","Bit Manipulation"]},a=void 0,s={unversionedId:"leetcode/1-500/missing_number",id:"leetcode/1-500/missing_number",title:"268. Missing Number",description:"https://leetcode.com/problems/missing-number/",source:"@site/docs/leetcode/1-500/268_missing_number.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/missing_number",permalink:"/docs/leetcode/1-500/missing_number",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/268_missing_number.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:268,frontMatter:{title:"268. Missing Number",sidebar_label:"268. Missing Number",tags:["Leetcode Easy","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"266. Palindrome Permutation",permalink:"/docs/leetcode/1-500/palindrome_permutation"},next:{title:"278. First Bad Version",permalink:"/docs/leetcode/1-500/first_bad_version"}},l={},u=[{value:"Python",id:"python",level:2},{value:"Hash Map and remove",id:"hash-map-and-remove",level:3},{value:"Linear solution from total",id:"linear-solution-from-total",level:3},{value:"Javascript",id:"javascript",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/missing-number/"},"https://leetcode.com/problems/missing-number/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"hash-map-and-remove"},"Hash Map and remove"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        possibles = set(range(len(nums)+1))\n\n        for num in nums:\n            possibles.remove(num)\n\n        return possibles.pop()\n")),(0,o.kt)("h3",{id:"linear-solution-from-total"},"Linear solution from total"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def missingNumber(self, nums: List[int]) -> int:\n        n = len(nums)\n        total = (n*(n+1))//2\n        \n        for num in nums:\n            total -= num\n        \n        return total\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var missingNumber = function(nums) {\n   let sum = 0;\n    for (let i in nums) {\n        sum += nums[i];\n    }\n    let n = nums.length;\n    let sumN = Math.floor((n * (n + 1)) / 2);\n  \n    return sumN - sum;\n};\n")))}p.isMDXComponent=!0}}]);