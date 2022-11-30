"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[43020],{3905:function(e,r,t){t.d(r,{Zo:function(){return a},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},a=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,h=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return t?n.createElement(h,s(s({ref:r},a),{},{components:t})):n.createElement(h,s({ref:r},a))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31281:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return a}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],c={title:"374. Guess Number Higher or Lower",sidebar_label:"374. Guess Number Higher or Lower",tags:["Leetcode Easy","Binary Search"]},u=void 0,l={unversionedId:"leetcode/1-500/guess_num_higher_or_lower",id:"leetcode/1-500/guess_num_higher_or_lower",title:"374. Guess Number Higher or Lower",description:"https://leetcode.com/problems/guess-number-higher-or-lower/",source:"@site/docs/leetcode/1-500/347_guess_num_higher_or_lower.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/guess_num_higher_or_lower",permalink:"/docs/leetcode/1-500/guess_num_higher_or_lower",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/347_guess_num_higher_or_lower.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:347,frontMatter:{title:"374. Guess Number Higher or Lower",sidebar_label:"374. Guess Number Higher or Lower",tags:["Leetcode Easy","Binary Search"]},sidebar:"docSidebar",previous:{title:"344. Reverse String",permalink:"/docs/leetcode/1-500/reverse_string"},next:{title:"347. Top K Frequent Elements",permalink:"/docs/leetcode/1-500/top_k_frequent_elms"}},a=[{value:"Python",id:"python",children:[],level:2}],p={toc:a};function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/guess-number-higher-or-lower/"},"https://leetcode.com/problems/guess-number-higher-or-lower/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def guessNumber(self, n: int) -> int:\n        left, right = 0, n\n\n        while left <= right:\n            pivot = (left+right) >> 1\n            result = guess(pivot)\n\n            if result == 0:\n                return pivot\n\n            if result == 1:\n                left = pivot+1\n            else:\n                right = pivot-1\n        return -1\n")))}m.isMDXComponent=!0}}]);