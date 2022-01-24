"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9341],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||c;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87399:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),a=["components"],i={title:"520. Detect Capital",sidebar_label:"520. Detect Capital",tags:["Leetcode Easy"]},l=void 0,p={unversionedId:"leetcode/501-1000/detect_capital",id:"leetcode/501-1000/detect_capital",title:"520. Detect Capital",description:"Python",source:"@site/docs/leetcode/501-1000/520_detect_capital.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/detect_capital",permalink:"/docs/leetcode/501-1000/detect_capital",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/520_detect_capital.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:520,frontMatter:{title:"520. Detect Capital",sidebar_label:"520. Detect Capital",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"605. Can Place Flowers",permalink:"/docs/leetcode/1-500/place_flowers"},next:{title:"540. Single Element in a Sorted Array",permalink:"/docs/leetcode/501-1000/single_elm_in_sotrted_array"}},s=[{value:"Python",id:"python",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"from string import ascii_lowercase, ascii_uppercase\n\n\nclass Solution:\n    def detectCapitalUse(self, word: str) -> bool:\n        if word[0] in ascii_uppercase:\n            uppers = [char for char in word[1:] if char in ascii_lowercase]\n            if len(uppers) == 0:\n                return True\n            return len(uppers) == len(word) - 1\n\n        for char in word[1:]:\n            if char in ascii_uppercase:\n                return False\n        return True\n")))}d.isMDXComponent=!0}}]);