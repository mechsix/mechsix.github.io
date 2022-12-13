"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[54585],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),u=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(a.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20193:function(e,r,t){t.r(r),t.d(r,{assets:function(){return a},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=t(83117),o=(t(67294),t(3905));const i={title:"165. Compare Version Numbers",sidebar_label:"165. Compare Version Numbers",tags:["Leetcode Medium"]},s=void 0,c={unversionedId:"leetcode/1-500/compare_version_numbers",id:"leetcode/1-500/compare_version_numbers",title:"165. Compare Version Numbers",description:"Python",source:"@site/docs/leetcode/1-500/165_compare_version_numbers.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/compare_version_numbers",permalink:"/docs/leetcode/1-500/compare_version_numbers",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/165_compare_version_numbers.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:165,frontMatter:{title:"165. Compare Version Numbers",sidebar_label:"165. Compare Version Numbers",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"160. Intersection of Two Linked Lists",permalink:"/docs/leetcode/1-500/intersection_two_linked_lists"},next:{title:"167. Two Sum II - Input Array Is Sorted",permalink:"/docs/leetcode/1-500/two_sum_ii"}},a={},u=[{value:"Python",id:"python",level:2}],l={toc:u};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/compare-version-numbers/"},"https://leetcode.com/problems/compare-version-numbers/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from itertools import zip_longest\n\n\nclass Solution:\n    def compareVersion(self, version1: str, version2: str) -> int:\n        for pair in zip_longest(version1.split('.'), version2.split('.')):\n            raw1, raw2 = pair\n            v1 = 0 if raw1 is None else int(raw1)\n            v2 = 0 if raw2 is None else int(raw2)\n\n            if v1 < v2:\n                return -1\n            if v1 > v2:\n                return 1\n\n        return 0\n")))}p.isMDXComponent=!0}}]);