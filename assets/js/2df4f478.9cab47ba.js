"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75648],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,y=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16559:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=t(83117),a=(t(67294),t(3905));const o={title:"2635. Apply Transform Over Each Element in Array",sidebar_label:"2635. Apply Transform Over Each Element in Array",tags:["Leetcode Easy","JS 30 Days Challenge"]},i=void 0,c={unversionedId:"leetcode/2000/apply_transform_over_each_element_in_array",id:"leetcode/2000/apply_transform_over_each_element_in_array",title:"2635. Apply Transform Over Each Element in Array",description:"Javascript",source:"@site/docs/leetcode/2000/2635_apply_transform_over_each_element_in_array.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/apply_transform_over_each_element_in_array",permalink:"/docs/leetcode/2000/apply_transform_over_each_element_in_array",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2635_apply_transform_over_each_element_in_array.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2635,frontMatter:{title:"2635. Apply Transform Over Each Element in Array",sidebar_label:"2635. Apply Transform Over Each Element in Array",tags:["Leetcode Easy","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2620. Counter",permalink:"/docs/leetcode/2000/counter"},next:{title:"2665. Counter II",permalink:"/docs/leetcode/2000/counter_ii"}},l={},s=[{value:"Javascript",id:"javascript",level:2},{value:"Typescript",id:"typescript",level:2}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"javascript"},"Javascript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"var map = function(arr, fn) {\n    let result = []\n    for (let i=0; i < arr.length; i++) {\n        result.push(fn(arr[i], i))\n    }\n    return result\n};\n")),(0,a.kt)("h2",{id:"typescript"},"Typescript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function map(arr: number[], fn: (n: number, i: number) => number): number[] {\n    let result: number[] = []\n    for (let i=0; i < arr.length; i++) {\n        result.push(fn(arr[i], i))\n    }\n    return result\n};\n")))}u.isMDXComponent=!0}}]);