"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[26938],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||c;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33891:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=["components"],s={title:"283. Move Zeroes",sidebar_label:"283. Move Zeroes",tags:["Leetcode Easy","Two Pointer"]},a=void 0,u={unversionedId:"leetcode/1-500/move_zeros",id:"leetcode/1-500/move_zeros",title:"283. Move Zeroes",description:"https://leetcode.com/problems/move-zeroes",source:"@site/docs/leetcode/1-500/283_move_zeros.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/move_zeros",permalink:"/docs/leetcode/1-500/move_zeros",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/283_move_zeros.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:283,frontMatter:{title:"283. Move Zeroes",sidebar_label:"283. Move Zeroes",tags:["Leetcode Easy","Two Pointer"]},sidebar:"docSidebar",previous:{title:"278. First Bad Version",permalink:"/docs/leetcode/1-500/first_bad_version"},next:{title:"284. Peeking Iterator",permalink:"/docs/leetcode/1-500/peeking_iterator"}},l=[{value:"Python",id:"python",children:[],level:2}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/move-zeroes"},"https://leetcode.com/problems/move-zeroes")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        """\n        Input: nums = [0,1,0,3,12]\n        Output: [1,3,12,0,0]\n\n        """\n        if len(nums) < 2:\n            return\n\n        cur, r = 0, 0\n\n        while r < len(nums):\n            if nums[cur] != 0:\n                cur += 1\n                r = cur\n                continue\n\n            if nums[r] == 0:\n                r += 1\n                continue\n\n            nums[cur], nums[r] = nums[r], nums[cur]\n            cur += 1\n')))}m.isMDXComponent=!0}}]);