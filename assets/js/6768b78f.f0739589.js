"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4204],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12839:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={title:"1332. Remove Palindromic Subsequences",sidebar_label:"1332. Remove Palindromic Subsequences",tags:["Leetcode Easy","String"]},s=void 0,l={unversionedId:"leetcode/1001-1500/remove_palindromic_subsequences",id:"leetcode/1001-1500/remove_palindromic_subsequences",title:"1332. Remove Palindromic Subsequences",description:"https://leetcode.com/problems/remove-palindromic-subsequences/",source:"@site/docs/leetcode/1001-1500/1332_remove_palindromic_subsequences.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/remove_palindromic_subsequences",permalink:"/docs/leetcode/1001-1500/remove_palindromic_subsequences",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1332_remove_palindromic_subsequences.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"String",permalink:"/docs/tags/string"}],version:"current",sidebarPosition:1332,frontMatter:{title:"1332. Remove Palindromic Subsequences",sidebar_label:"1332. Remove Palindromic Subsequences",tags:["Leetcode Easy","String"]},sidebar:"docSidebar",previous:{title:"1306. Jump Game III",permalink:"/docs/leetcode/1001-1500/jump_game_iii"},next:{title:"1337. The K Weakest Rows in a Matrix",permalink:"/docs/leetcode/1001-1500/k_weakest_rows_in_matrix"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-palindromic-subsequences/"},"https://leetcode.com/problems/remove-palindromic-subsequences/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56e0\u70baSubsequence\u4e0d\u4e00\u5b9a\u8981\u5728\u539f\u59cb",(0,i.kt)("inlineCode",{parentName:"li"},"s"),"\u5167\u9023\u7e8c\uff0c\u6240\u4ee5\u5176\u5be6\u53ea\u53ef\u80fd\u6709\u4e09\u7a2e\u7b54\u6848\uff1a0, 1, 2"),(0,i.kt)("li",{parentName:"ul"},"\u984c\u76ee\u9650\u5236len(s)\u6700\u5c0f\u70ba1\uff0c\u6240\u4ee5\u53ea\u53ef\u80fd\u70ba1\u62162")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removePalindromeSub(self, s: str) -> int:\n        if s == s[::-1]:\n            return 1\n        return 2\n")))}m.isMDXComponent=!0}}]);