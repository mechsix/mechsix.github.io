"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[43020],{3905:function(e,r,t){t.d(r,{Zo:function(){return a},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},a=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return t?n.createElement(d,s(s({ref:r},a),{},{components:t})):n.createElement(d,s({ref:r},a))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31281:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=t(83117),o=(t(67294),t(3905));const i={title:"374. Guess Number Higher or Lower",sidebar_label:"374. Guess Number Higher or Lower",tags:["Leetcode Easy","Binary Search"]},s=void 0,u={unversionedId:"leetcode/1-500/guess_num_higher_or_lower",id:"leetcode/1-500/guess_num_higher_or_lower",title:"374. Guess Number Higher or Lower",description:"https://leetcode.com/problems/guess-number-higher-or-lower/",source:"@site/docs/leetcode/1-500/347_guess_num_higher_or_lower.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/guess_num_higher_or_lower",permalink:"/docs/leetcode/1-500/guess_num_higher_or_lower",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/347_guess_num_higher_or_lower.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:347,frontMatter:{title:"374. Guess Number Higher or Lower",sidebar_label:"374. Guess Number Higher or Lower",tags:["Leetcode Easy","Binary Search"]},sidebar:"docSidebar",previous:{title:"344. Reverse String",permalink:"/docs/leetcode/1-500/reverse_string"},next:{title:"347. Top K Frequent Elements",permalink:"/docs/leetcode/1-500/top_k_frequent_elms"}},c={},l=[{value:"Python",id:"python",level:2}],a={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},a,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/guess-number-higher-or-lower/"},"https://leetcode.com/problems/guess-number-higher-or-lower/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def guessNumber(self, n: int) -> int:\n        left, right = 0, n\n\n        while left <= right:\n            pivot = (left+right) >> 1\n            result = guess(pivot)\n\n            if result == 0:\n                return pivot\n\n            if result == 1:\n                left = pivot+1\n            else:\n                right = pivot-1\n        return -1\n")))}p.isMDXComponent=!0}}]);