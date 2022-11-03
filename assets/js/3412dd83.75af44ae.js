"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[36804],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||c;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,u=new Array(c);u[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var i=2;i<c;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8895:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),u=["components"],a={title:"1342. Number of Steps to Reduce a Number to Zero",sidebar_label:"1342. Number of Steps to Reduce a Number to Zero",tags:["Leetcode Easy"]},s=void 0,i={unversionedId:"leetcode/1001-1500/number_steps_to_reduce_num_to_zero",id:"leetcode/1001-1500/number_steps_to_reduce_num_to_zero",title:"1342. Number of Steps to Reduce a Number to Zero",description:"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/",source:"@site/docs/leetcode/1001-1500/1342_number_steps_to_reduce_num_to_zero.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/number_steps_to_reduce_num_to_zero",permalink:"/docs/leetcode/1001-1500/number_steps_to_reduce_num_to_zero",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1342_number_steps_to_reduce_num_to_zero.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1342,frontMatter:{title:"1342. Number of Steps to Reduce a Number to Zero",sidebar_label:"1342. Number of Steps to Reduce a Number to Zero",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1338. Reduce Array Size to The Half",permalink:"/docs/leetcode/1001-1500/reduce_array_size_to_the_half"},next:{title:"1346. Check If N and Its Double Exist",permalink:"/docs/leetcode/1001-1500/check_n_and_its_double_in_arr"}},l=[{value:"Python",id:"python",children:[],level:2}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/"},"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def numberOfSteps(self, num: int) -> int:\n        steps = 0\n        while num:\n            steps += 1\n            if num % 2 == 0:\n                num >>= 1\n            else:\n                num -= 1\n        return steps\n")))}m.isMDXComponent=!0}}]);