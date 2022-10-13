"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[67096],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=a(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34622:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],s={title:"14. Longest Common Prefix",sidebar_label:"14. Longest Common Prefix",tags:["Leetcode Easy"]},l=void 0,a={unversionedId:"leetcode/1-500/longest_common_prefix",id:"leetcode/1-500/longest_common_prefix",title:"14. Longest Common Prefix",description:"https://leetcode.com/problems/longest-common-prefix/",source:"@site/docs/leetcode/1-500/14_longest_common_prefix.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/longest_common_prefix",permalink:"/docs/leetcode/1-500/longest_common_prefix",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/14_longest_common_prefix.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:14,frontMatter:{title:"14. Longest Common Prefix",sidebar_label:"14. Longest Common Prefix",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"13. Roman to Integer",permalink:"/docs/leetcode/1-500/roman_to_integer"},next:{title:"15. 3Sum",permalink:"/docs/leetcode/1-500/three_sum"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-common-prefix/"},"https://leetcode.com/problems/longest-common-prefix/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def longestCommonPrefix(self, strs: List[str]) -> str:\n        if not strs:\n            return \"\"\n\n        limit = min([len(s) for s in strs])\n\n        prefix = []\n        for i in range(limit):\n            cur = strs[0][i]\n            if all([s[i]==cur for s in strs[1:]]):\n                prefix.append(cur)\n                continue\n            break\n\n        return ''.join(prefix)\n")))}m.isMDXComponent=!0}}]);