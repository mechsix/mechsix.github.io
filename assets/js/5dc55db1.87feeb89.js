"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[63721],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,b=d["".concat(u,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49994:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const c={title:"1346. Check If N and Its Double Exist",sidebar_label:"1346. Check If N and Its Double Exist",tags:["Leetcode Easy"]},i=void 0,a={unversionedId:"leetcode/1001-1500/check_n_and_its_double_in_arr",id:"leetcode/1001-1500/check_n_and_its_double_in_arr",title:"1346. Check If N and Its Double Exist",description:"Python",source:"@site/docs/leetcode/1001-1500/1346_check_n_and_its_double_in_arr.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/check_n_and_its_double_in_arr",permalink:"/docs/leetcode/1001-1500/check_n_and_its_double_in_arr",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1346_check_n_and_its_double_in_arr.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1346,frontMatter:{title:"1346. Check If N and Its Double Exist",sidebar_label:"1346. Check If N and Its Double Exist",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1342. Number of Steps to Reduce a Number to Zero",permalink:"/docs/leetcode/1001-1500/number_steps_to_reduce_num_to_zero"},next:{title:"1373. Maximum Sum BST in Binary Tree",permalink:"/docs/leetcode/1001-1500/max_sum_bst_of_bt"}},u={},l=[{value:"Python",id:"python",level:2}],s={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def checkIfExist(self, arr: List[int]) -> bool:\n        for i in range(len(arr)):\n            if arr[i] * 2 in arr[i+1:] + arr[:i]:\n                return True\n        return False\n")))}d.isMDXComponent=!0}}]);