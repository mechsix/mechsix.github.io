"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[36804],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),i=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=i(r),d=o,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||u;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,c=new Array(u);c[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<u;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8895:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return i}});var n=r(83117),o=(r(67294),r(3905));const u={title:"1342. Number of Steps to Reduce a Number to Zero",sidebar_label:"1342. Number of Steps to Reduce a Number to Zero",tags:["Leetcode Easy"]},c=void 0,s={unversionedId:"leetcode/1001-1500/number_steps_to_reduce_num_to_zero",id:"leetcode/1001-1500/number_steps_to_reduce_num_to_zero",title:"1342. Number of Steps to Reduce a Number to Zero",description:"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/",source:"@site/docs/leetcode/1001-1500/1342_number_steps_to_reduce_num_to_zero.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/number_steps_to_reduce_num_to_zero",permalink:"/docs/leetcode/1001-1500/number_steps_to_reduce_num_to_zero",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1342_number_steps_to_reduce_num_to_zero.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1342,frontMatter:{title:"1342. Number of Steps to Reduce a Number to Zero",sidebar_label:"1342. Number of Steps to Reduce a Number to Zero",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1339. Maximum Product of Splitted Binary Tree",permalink:"/docs/leetcode/1001-1500/max_product_of_splited_binary_tree"},next:{title:"1346. Check If N and Its Double Exist",permalink:"/docs/leetcode/1001-1500/check_n_and_its_double_in_arr"}},a={},i=[{value:"Python",id:"python",level:2}],l={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/"},"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def numberOfSteps(self, num: int) -> int:\n        steps = 0\n        while num:\n            steps += 1\n            if num % 2 == 0:\n                num >>= 1\n            else:\n                num -= 1\n        return steps\n")))}p.isMDXComponent=!0}}]);