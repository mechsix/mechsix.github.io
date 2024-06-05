"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[90647],{20623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const r={title:"Env Setup",sidebar_label:"Env Setup",sidebar_position:1},c=void 0,o={id:"typescript/env-setup",title:"Env Setup",description:"TSC Compiler installation",source:"@site/docs/typescript/env-setup.md",sourceDirName:"typescript",slug:"/typescript/env-setup",permalink:"/docs/typescript/env-setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Env Setup",sidebar_label:"Env Setup",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Fbcid Trim",permalink:"/docs/scripts/fbcid-trim"},next:{title:"Developing Environment",permalink:"/docs/typescript/useful-dev-packages"}},a={},l=[{value:"TSC Compiler installation",id:"tsc-compiler-installation",level:2},{value:"Initiala a TS Project",id:"initiala-a-ts-project",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"tsc-compiler-installation",children:"TSC Compiler installation"}),"\n",(0,i.jsxs)(t.p,{children:["The typescript compiler namded ",(0,i.jsx)(t.code,{children:"tsc"})," which built in the ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"typescript"})," NPM package"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install typescript\n\n# or use yarn\nyarn add -D typescript\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then run it manually"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"./node_modules/typescript/bin/tsc example.ts\n\n# or use yarn, to prevent running code which haven't installed\nyarn tsc example.ts\n"})}),"\n",(0,i.jsx)(t.p,{children:"Or make tsc watch the changes from folder"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn tsc -w\n"})}),"\n",(0,i.jsx)(t.h2,{id:"initiala-a-ts-project",children:"Initiala a TS Project"}),"\n",(0,i.jsxs)(t.p,{children:["Simplely run ",(0,i.jsx)(t.code,{children:"tsc --init"})," to generate the base structure of ",(0,i.jsx)(t.code,{children:"tsconfig.json"})," for your project"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"tsc --init\n"})}),"\n",(0,i.jsxs)(t.p,{children:["And the settings in ",(0,i.jsx)(t.code,{children:"tsconfig.json"})," you would like to change after project initialed"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "rootDir": "./src",   /* Specify the root folder within your source files. */\n    "outDir": "./build",  /* Specify an output folder for all emitted files. */\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);