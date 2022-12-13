"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[16700],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65897:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const c={title:"Useful packages for local developing",sidebar_label:"Developing Environment",sidebar_position:2},a="Packages",i={unversionedId:"typescript/useful-dev-packages",id:"typescript/useful-dev-packages",title:"Useful packages for local developing",description:"nodemon",source:"@site/docs/typescript/useful-dev-packages.md",sourceDirName:"typescript",slug:"/typescript/useful-dev-packages",permalink:"/docs/typescript/useful-dev-packages",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/typescript/useful-dev-packages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Useful packages for local developing",sidebar_label:"Developing Environment",sidebar_position:2},sidebar:"docSidebar",previous:{title:"Env Setup",permalink:"/docs/typescript/env-setup"},next:{title:"Example - Bubble Sorter",permalink:"/docs/typescript/example-bubble-sorter"}},u={},s=[{value:"nodemon",id:"nodemon",level:2},{value:"concurrently",id:"concurrently",level:2}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"packages"},"Packages"),(0,o.kt)("h2",{id:"nodemon"},"nodemon"),(0,o.kt)("p",null,"Watch the changes of directory, and auto execute command you prefer"),(0,o.kt)("h2",{id:"concurrently"},"concurrently"),(0,o.kt)("p",null,"Run NodeJS runtime in multiple processing, can accelerate TSC speed"),(0,o.kt)("h1",{id:"the-npm-start"},"The ",(0,o.kt)("inlineCode",{parentName:"h1"},"npm start")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scripts": {\n        "start:build": "tsc -w",\n        "start:run": "nodemon build/index.js",\n        "start": "currently npm:start:*"\n    }\n}\n')))}p.isMDXComponent=!0}}]);