"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[51061],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=a(n),m=i,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||o;return n?r.createElement(p,c(c({ref:t},l),{},{components:n})):r.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:i,c[1]=u;for(var a=2;a<o;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return a}});var r=n(83117),i=(n(67294),n(3905));const o={title:"1295. Find Numbers with Even Number of Digits",sidebar_label:"1295. Find Numbers with Even Number of Digits",tags:["Leetcode Easy"]},c=void 0,u={unversionedId:"leetcode/1001-1500/find_nums_with_even_digits",id:"leetcode/1001-1500/find_nums_with_even_digits",title:"1295. Find Numbers with Even Number of Digits",description:"Python",source:"@site/docs/leetcode/1001-1500/1295_find_nums_with_even_digits.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/find_nums_with_even_digits",permalink:"/docs/leetcode/1001-1500/find_nums_with_even_digits",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1295_find_nums_with_even_digits.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1295,frontMatter:{title:"1295. Find Numbers with Even Number of Digits",sidebar_label:"1295. Find Numbers with Even Number of Digits",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1291. Sequential Digits",permalink:"/docs/leetcode/1001-1500/sequential_digits"},next:{title:"1299. Replace Elements with Greatest Element on Right Side",permalink:"/docs/leetcode/1001-1500/replace_elm_with_greatest_right"}},s={},a=[{value:"Python",id:"python",level:2}],l={toc:a};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findNumbers(self, nums: List[int]) -> int:\n        return reduce(lambda counter, num: counter+1 if len(str(num))%2==0 else counter, nums, 0)\n")))}d.isMDXComponent=!0}}]);