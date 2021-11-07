"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1102],{3905:function(e,t,r){r.d(t,{Zo:function(){return a},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},a=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,l(l({ref:t},a),{},{components:r})):n.createElement(f,l({ref:t},a))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12645:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return a},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],u={title:"43. Multiply Strings",sidebar_label:"43. Multiply Strings"},c=void 0,s={unversionedId:"leetcode/multiply_strings",id:"leetcode/multiply_strings",isDocsHomePage:!1,title:"43. Multiply Strings",description:"Python",source:"@site/docs/leetcode/43_multiply_strings.md",sourceDirName:"leetcode",slug:"/leetcode/multiply_strings",permalink:"/docs/leetcode/multiply_strings",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/43_multiply_strings.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{title:"43. Multiply Strings",sidebar_label:"43. Multiply Strings"},sidebar:"tutorialSidebar",previous:{title:"2. Add Two Numbers",permalink:"/docs/leetcode/add_two_numbers"},next:{title:"130. Surrounded Regions",permalink:"/docs/leetcode/surrounded_regions"}},a=[{value:"Python",id:"python",children:[]}],p={toc:a};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def multiply(self, num1: str, num2: str) -> str:\n        result = 0\n        for pos1, char1 in enumerate(num1[::-1]):\n            for pos2, char2 in enumerate(num2[::-1]):\n                result += int(char1) * int(char2) * (10**(pos1+pos2))\n        return str(result)\n")))}d.isMDXComponent=!0}}]);