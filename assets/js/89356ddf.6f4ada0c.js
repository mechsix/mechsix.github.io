"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6602],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),m=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=m(r),d=n,f=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return r?o.createElement(f,c(c({ref:t},l),{},{components:r})):o.createElement(f,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var m=2;m<i;m++)c[m]=r[m];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},16778:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return l},default:function(){return s}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),c=["components"],a={},p="Pre Commit Check",m={unversionedId:"draft/pre-commit",id:"draft/pre-commit",isDocsHomePage:!1,title:"Pre Commit Check",description:"Pre Commit Hook",source:"@site/docs/draft/pre-commit.md",sourceDirName:"draft",slug:"/draft/pre-commit",permalink:"/docs/draft/pre-commit",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/draft/pre-commit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peer Tube",permalink:"/docs/draft/peer-tube"},next:{title:"Data Operations",permalink:"/docs/javascript/operation"}},l=[{value:"Pre Commit Hook",id:"pre-commit-hook",children:[{value:"Cliet Side Hooks",id:"cliet-side-hooks",children:[]},{value:"Server Side Hooks",id:"server-side-hooks",children:[]}]},{value:"\u70ba\u4ec0\u9ebc\u8981\u5728pre-commit hook\u505a\u6aa2\u67e5\uff1f",id:"\u70ba\u4ec0\u9ebc\u8981\u5728pre-commit-hook\u505a\u6aa2\u67e5",children:[]},{value:"Pre-commit CLI tool (Python)",id:"pre-commit-cli-tool-python",children:[]},{value:"Pre-commit (NPM)",id:"pre-commit-npm",children:[]},{value:"\u8207GUI\u5de5\u5177\u7684\u76f8\u5bb9\u6027",id:"\u8207gui\u5de5\u5177\u7684\u76f8\u5bb9\u6027",children:[]}],u={toc:l};function s(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pre-commit-check"},"Pre Commit Check"),(0,i.kt)("h2",{id:"pre-commit-hook"},"Pre Commit Hook"),(0,i.kt)("p",null,"\u5728\u57f7\u884cgit\u547d\u4ee4\u6642\uff0cgit\u6703\u96a8\u8005\u4f60\u6240\u9032\u884c\u7684\u52d5\u4f5c\u81ea\u52d5\u57f7\u884c\u7684\u4e00\u6bb5shell script"),(0,i.kt)("p",null,"\u5206\u70baclient side hook\u548cserver side hook"),(0,i.kt)("h3",{id:"cliet-side-hooks"},"Cliet Side Hooks"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"pre-commit"),(0,i.kt)("li",{parentName:"ol"},"prepare-commit-msg"),(0,i.kt)("li",{parentName:"ol"},"commit-msg"),(0,i.kt)("li",{parentName:"ol"},"post-commit"),(0,i.kt)("li",{parentName:"ol"},"pre-rebase"),(0,i.kt)("li",{parentName:"ol"},"post-rewrite"),(0,i.kt)("li",{parentName:"ol"},"applypatch-msg"),(0,i.kt)("li",{parentName:"ol"},"pre-applypatch"),(0,i.kt)("li",{parentName:"ol"},"post-applypatch")),(0,i.kt)("h3",{id:"server-side-hooks"},"Server Side Hooks"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"pre-receive"),(0,i.kt)("li",{parentName:"ol"},"update"),(0,i.kt)("li",{parentName:"ol"},"post-receive")),(0,i.kt)("h2",{id:"\u70ba\u4ec0\u9ebc\u8981\u5728pre-commit-hook\u505a\u6aa2\u67e5"},"\u70ba\u4ec0\u9ebc\u8981\u5728pre-commit hook\u505a\u6aa2\u67e5\uff1f"),(0,i.kt)("h2",{id:"pre-commit-cli-tool-python"},"Pre-commit CLI tool (Python)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"pre-commit")),(0,i.kt)("h2",{id:"pre-commit-npm"},"Pre-commit (NPM)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pre-commit"},"pre-commit")),(0,i.kt)("h2",{id:"\u8207gui\u5de5\u5177\u7684\u76f8\u5bb9\u6027"},"\u8207GUI\u5de5\u5177\u7684\u76f8\u5bb9\u6027"),(0,i.kt)("p",null,"Source Tree"))}s.isMDXComponent=!0}}]);