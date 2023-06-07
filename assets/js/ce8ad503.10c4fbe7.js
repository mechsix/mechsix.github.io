"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28111],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31301:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={title:"1318. Minimum Flips to Make a OR b Equal to c",sidebar_label:"1318. Minimum Flips to Make a OR b Equal to c",tags:["Leetcode Medium","Bit Manipulation"]},a=void 0,c={unversionedId:"leetcode/1001-1500/min_flips_to_make_a_or_b_equal_c",id:"leetcode/1001-1500/min_flips_to_make_a_or_b_equal_c",title:"1318. Minimum Flips to Make a OR b Equal to c",description:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c",source:"@site/docs/leetcode/1001-1500/1318_min_flips_to_make_a_or_b_equal_c.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/min_flips_to_make_a_or_b_equal_c",permalink:"/docs/leetcode/1001-1500/min_flips_to_make_a_or_b_equal_c",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1318_min_flips_to_make_a_or_b_equal_c.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:1318,frontMatter:{title:"1318. Minimum Flips to Make a OR b Equal to c",sidebar_label:"1318. Minimum Flips to Make a OR b Equal to c",tags:["Leetcode Medium","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"1306. Jump Game III",permalink:"/docs/leetcode/1001-1500/jump_game_iii"},next:{title:"1328. Break a Palindrome",permalink:"/docs/leetcode/1001-1500/break_palindrome"}},l={},u=[{value:"Python",id:"python",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c"},"https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution(object):\n    def minFlips(self, a, b, c):\n        count = 0\n        for i in range(31):\n            if not (c >> i) & 1:\n                count += (a >> i) & 1\n                count += (b >> i) & 1\n                continue\n\n            if ((a >> i) & 1) == 0 and ((b >> i) & 1) == 0:\n                count += 1\n\n        return count\n")))}p.isMDXComponent=!0}}]);