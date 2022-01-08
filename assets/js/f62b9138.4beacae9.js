"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6972],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80816:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=["components"],a={title:"1446. Consecutive Characters",sidebar_label:"1446. Consecutive Characters",tags:["Leetcode Easy"]},s=void 0,u={unversionedId:"leetcode/consecutive_chars",id:"leetcode/consecutive_chars",title:"1446. Consecutive Characters",description:"Python",source:"@site/docs/leetcode/1446_consecutive_chars.md",sourceDirName:"leetcode",slug:"/leetcode/consecutive_chars",permalink:"/docs/leetcode/consecutive_chars",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1446_consecutive_chars.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1446,frontMatter:{title:"1446. Consecutive Characters",sidebar_label:"1446. Consecutive Characters",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1413. Mini Value to Possitive Sum",permalink:"/docs/leetcode/min_value_get_positive_sum"},next:{title:"538. Convert BST to Greater Tree",permalink:"/docs/leetcode/538_1038_convert_bst_greater_tree"}},l=[{value:"Python",id:"python",children:[],level:2}],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxPower(self, s: str) -> int:\n        length = len(s)\n\n        if length <= 1:\n            return 1\n\n        result = 1\n        max_result = 1\n\n        for index in range(1, length):\n            if s[index] == s[index-1]:\n                result += 1\n            else:\n                result = 1\n            max_result = max(result, max_result)\n\n        return max_result\n")))}d.isMDXComponent=!0}}]);