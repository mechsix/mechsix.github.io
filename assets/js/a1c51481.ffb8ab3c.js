"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[14846],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(83117),i=(n(67294),n(3905));const o={title:"219. Contains Duplicate II",sidebar_label:"219. Contains Duplicate II",tags:["Leetcode Easy"]},a=void 0,c={unversionedId:"leetcode/1-500/contains_duplicate_ii",id:"leetcode/1-500/contains_duplicate_ii",title:"219. Contains Duplicate II",description:"https://leetcode.com/problems/contains-duplicate-ii/",source:"@site/docs/leetcode/1-500/219_contains_duplicate_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/contains_duplicate_ii",permalink:"/docs/leetcode/1-500/contains_duplicate_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/219_contains_duplicate_ii.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:219,frontMatter:{title:"219. Contains Duplicate II",sidebar_label:"219. Contains Duplicate II",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"217. Contains Duplicate",permalink:"/docs/leetcode/1-500/containers_duplicate"},next:{title:"221. Maximal Square",permalink:"/docs/leetcode/1-500/max_square"}},l={},s=[{value:"Python",id:"python",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/contains-duplicate-ii/"},"https://leetcode.com/problems/contains-duplicate-ii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\n        seen = set()\n        for i in range(len(nums)):\n            if nums[i] in seen:\n                return True\n            seen.add(nums[i])\n            if len(seen) > k:\n                seen.remove(nums[i-k])\n        return False\n")))}p.isMDXComponent=!0}}]);