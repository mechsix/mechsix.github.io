"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6219],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||l;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},19234:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),a=["components"],c={title:"58. Length of Last Word",sidebar_label:"58. Length of Last Word",tags:["Leetcode Easy"]},i=void 0,s={unversionedId:"leetcode/1-500/len_last_word",id:"leetcode/1-500/len_last_word",title:"58. Length of Last Word",description:"https://leetcode.com/problems/length-of-last-word",source:"@site/docs/leetcode/1-500/58_len_last_word.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/len_last_word",permalink:"/docs/leetcode/1-500/len_last_word",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/58_len_last_word.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:58,frontMatter:{title:"58. Length of Last Word",sidebar_label:"58. Length of Last Word",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"56. Merge Intervals",permalink:"/docs/leetcode/1-500/merge_intervals"},next:{title:"67. Add Binary",permalink:"/docs/leetcode/1-500/add_bin"}},d=[{value:"Python",id:"python",children:[],level:2}],u={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/length-of-last-word"},"https://leetcode.com/problems/length-of-last-word")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lengthOfLastWord(self, s: str) -> int:\n        last_word = s.strip().split(' ').pop()\n        return len(last_word) if last_word != '' else 0\n")))}p.isMDXComponent=!0}}]);