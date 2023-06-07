"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[62533],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=c,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69231:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=n(83117),c=(n(67294),n(3905));const o={title:"2648. Generate Fibonacci Sequence",sidebar_label:"2648. Generate Fibonacci Sequence",tags:["Leetcode Easy","JS 30 Days Challenge"]},a=void 0,i={unversionedId:"leetcode/2000/generate_fibonacci_sequence",id:"leetcode/2000/generate_fibonacci_sequence",title:"2648. Generate Fibonacci Sequence",description:"https://leetcode.com/problems/generate-fibonacci-sequence",source:"@site/docs/leetcode/2000/2648_generate_fibonacci_sequence.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/generate_fibonacci_sequence",permalink:"/docs/leetcode/2000/generate_fibonacci_sequence",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2648_generate_fibonacci_sequence.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"JS 30 Days Challenge",permalink:"/docs/tags/js-30-days-challenge"}],version:"current",sidebarPosition:2648,frontMatter:{title:"2648. Generate Fibonacci Sequence",sidebar_label:"2648. Generate Fibonacci Sequence",tags:["Leetcode Easy","JS 30 Days Challenge"]},sidebar:"docSidebar",previous:{title:"2637. Promise Time Limit",permalink:"/docs/leetcode/2000/promise_time_limit"},next:{title:"2649. Nested Array Generator",permalink:"/docs/leetcode/2000/nested_array_generator"}},l={},s=[{value:"Javascript",id:"javascript",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/generate-fibonacci-sequence"},"https://leetcode.com/problems/generate-fibonacci-sequence")),(0,c.kt)("h2",{id:"javascript"},"Javascript"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"var fibGenerator = function*() {\n    let n0 = 0\n    let n1 = 1\n    let origin\n\n    while (true) {\n        yield n0;\n\n        origin = n1\n        n1 = n0+n1\n        n0 = origin\n    }\n};\n")))}p.isMDXComponent=!0}}]);