"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[55589],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return l}});var r=n(83117),i=(n(67294),n(3905));const a={title:"Env Setup",sidebar_label:"Env Setup",sidebar_position:1},o=void 0,p={unversionedId:"typescript/env-setup",id:"typescript/env-setup",title:"Env Setup",description:"TSC Compiler installation",source:"@site/docs/typescript/env-setup.md",sourceDirName:"typescript",slug:"/typescript/env-setup",permalink:"/docs/typescript/env-setup",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/typescript/env-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Env Setup",sidebar_label:"Env Setup",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Fbcid Trim",permalink:"/docs/scripts/fbcid-trim"},next:{title:"Developing Environment",permalink:"/docs/typescript/useful-dev-packages"}},c={},l=[{value:"TSC Compiler installation",id:"tsc-compiler-installation",level:2},{value:"Initiala a TS Project",id:"initiala-a-ts-project",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tsc-compiler-installation"},"TSC Compiler installation"),(0,i.kt)("p",null,"The typescript compiler namded ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," which built in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/typescript"},"typescript")," NPM package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install typescript\n\n# or use yarn\nyarn add -D typescript\n")),(0,i.kt)("p",null,"Then run it manually"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./node_modules/typescript/bin/tsc example.ts\n\n# or use yarn, to prevent running code which haven't installed\nyarn tsc example.ts\n")),(0,i.kt)("p",null,"Or make tsc watch the changes from folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn tsc -w\n")),(0,i.kt)("h2",{id:"initiala-a-ts-project"},"Initiala a TS Project"),(0,i.kt)("p",null,"Simplely run ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc --init")," to generate the base structure of ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," for your project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tsc --init\n")),(0,i.kt)("p",null,"And the settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," you would like to change after project initialed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "rootDir": "./src",   /* Specify the root folder within your source files. */\n    "outDir": "./build",  /* Specify an output folder for all emitted files. */\n}\n')))}u.isMDXComponent=!0}}]);