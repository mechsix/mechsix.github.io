"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9635],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87789:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={title:"CSS Naming Convention",sidebar_label:"CSS Naming Convention"},c=void 0,s={unversionedId:"dev_practice/css_naming_convention",id:"dev_practice/css_naming_convention",title:"CSS Naming Convention",description:"OOCSS",source:"@site/docs/dev_practice/css_naming_convention.md",sourceDirName:"dev_practice",slug:"/dev_practice/css_naming_convention",permalink:"/docs/dev_practice/css_naming_convention",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/dev_practice/css_naming_convention.md",tags:[],version:"current",frontMatter:{title:"CSS Naming Convention",sidebar_label:"CSS Naming Convention"},sidebar:"docSidebar",previous:{title:"Liquibase",permalink:"/docs/cheatsheet/liquibase"},next:{title:"Backtracking",permalink:"/docs/leetcode_note/backtracking"}},p=[{value:"OOCSS",id:"oocss",children:[{value:"\u4e3b\u8981\u7cbe\u795e",id:"\u4e3b\u8981\u7cbe\u795e",children:[],level:3}],level:2},{value:"SMACSS",id:"smacss",children:[{value:"Base",id:"base",children:[],level:4},{value:"Layout",id:"layout",children:[],level:4},{value:"Module",id:"module",children:[],level:4},{value:"State",id:"state",children:[],level:4},{value:"Theme",id:"theme",children:[],level:4}],level:2},{value:"BEM",id:"bem",children:[{value:"Block",id:"block",children:[],level:4},{value:"Element",id:"element",children:[],level:4},{value:"Modifier",id:"modifier",children:[],level:4}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"oocss"},"OOCSS"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"O"),"bject ",(0,l.kt)("strong",{parentName:"p"},"O"),"rinted ",(0,l.kt)("strong",{parentName:"p"},"C"),"SS")),(0,l.kt)("h3",{id:"\u4e3b\u8981\u7cbe\u795e"},"\u4e3b\u8981\u7cbe\u795e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7d50\u69cb\u8207\u5916\u89c0\u5206\u96e2"),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u5668\u8207\u5167\u5bb9\u5206\u96e2")),(0,l.kt)("p",null,"\u4f46\u5176\u5be6\u6c92\u6709\u5728\u7ba1\u4f60\u547d\u540d\u898f\u5247"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".wrapper {\n    padding: 5px 10px;\n}\n.panel {\n    filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))\n}\n.text-bold {\n    font-weight: bold;\n}\n.color-red {\n    colo: red;\n}\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div class="container drop-shadow">\n    <div class="panel">\n        <label class="text-bold color-red">Show Something</label>\n    </div>\n</div>\n')),(0,l.kt)("h2",{id:"smacss"},"SMACSS"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"S"),"calable ",(0,l.kt)("strong",{parentName:"p"},"M"),"odular ",(0,l.kt)("strong",{parentName:"p"},"A"),"rchitecture for ",(0,l.kt)("strong",{parentName:"p"},"C"),"SS")),(0,l.kt)("p",null,"\u4ee5\u4f7f\u7528\u60c5\u5883\u5206\u70ba\u4e94\u985e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Base "),(0,l.kt)("li",{parentName:"ul"},"Layout \u7ba1\u7406\u4f48\u5c40"),(0,l.kt)("li",{parentName:"ul"},"Module \u6a21\u7d44\u7684\u57fa\u5e95"),(0,l.kt)("li",{parentName:"ul"},"State \u4f9d\u7167\u72c0\u614b\u6539\u8b8a\u800c\u758a\u52a0\u7684style"),(0,l.kt)("li",{parentName:"ul"},"Theme \u6574\u500b\u7db2\u7ad9style\u7684\u6539\u8b8a")),(0,l.kt)("h4",{id:"base"},"Base"),(0,l.kt)("p",null,"\u5168\u7ad9\u7684\u8a2d\u5b9a\uff0c\u4f8b\u5982CSS Reset/Normalize"),(0,l.kt)("p",null,"Example: ",(0,l.kt)("a",{parentName:"p",href:"https://meyerweb.com/eric/tools/css/reset/"},"MeyerWeb CSS Reset")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n    margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol, ul {\n    list-style: none;\n}\nblockquote, q {\n    quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n    content: ''; content: none;\n}\ntable {\n    border-collapse: collapse; border-spacing: 0;\n}\n")),(0,l.kt)("h4",{id:"layout"},"Layout"),(0,l.kt)("p",null,"Grid System, \u6574\u9ad4\u4f48\u5c40\u4f7f\u7528\u7684CSS\uff0c\u53ea\u51fa\u73fe\u4e00\u6b21\u7684layout\u5143\u7d20\u8a72\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u800c\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"class")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"#container {}\n\n#header {}\n\n#navbar {}\n.nav-item {}\n\n#footer {}\n")),(0,l.kt)("h4",{id:"module"},"Module"),(0,l.kt)("p",null,"\u53ef\u91cd\u8907\u5229\u7528\u7684component style"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".btn {}\n.btn-primary {}\n")),(0,l.kt)("h4",{id:"state"},"State"),(0,l.kt)("p",null,"\u72c0\u614b\u6539\u8b8a\u6642\u7279\u6709\u7684\u6a23\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".is-enabled {}\n.has-error {}\n")),(0,l.kt)("h4",{id:"theme"},"Theme"),(0,l.kt)("p",null,"\u5168\u7ad9\u7684\u8a2d\u5b9a\uff0c\u73fe\u5728\u6539\u7528CSS Variable\u4f7f\u7528\u6703\u5bb9\u6613\u9ede\n\u597d\u8655\u662fDark Mode\u7684\u5be6\u73fe\u53ef\u4ee5\u76f4\u63a5\u5728\u9019\u5c64\u5b8c\u6210"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".theme-bg-color {}\n.theme-primary-color {}\n.theme-secondary-color {}\n")),(0,l.kt)("h2",{id:"bem"},(0,l.kt)("a",{parentName:"h2",href:"http://getbem.com/naming/"},"BEM")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"B"),"lock \u5340\u584a ",(0,l.kt)("strong",{parentName:"p"},"E"),"lement \u5143\u7d20 ",(0,l.kt)("strong",{parentName:"p"},"M"),"odifier \u4fee\u98fe\u7b26"),(0,l.kt)("p",null,"\u8207\u5176\u8aaa\u662fpattern\uff0c\u66f4\u50cf\u8aaa\u662fcss class naming\u7684\u898f\u5247"),(0,l.kt)("p",null,"\u8ddfSMACSS\u5c0d\u7167\u8d77\u4f86Element-Modifier\u6703\u5c0d\u61c9\u5230Model-State"),(0,l.kt)("h4",{id:"block"},"Block"),(0,l.kt)("p",null,"\u7121\u5e95\u7ddaprefix\uff0c\u53ef\u5171\u7528\u7684\u5143\u7d20"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".btn {}\n.nav {}\n")),(0,l.kt)("h4",{id:"element"},"Element"),(0,l.kt)("p",null,"\u4f9d\u9644\u5728Block\u4e0b\uff0c\u6709\u5169\u500b\u5e95\u7ddaprefix"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".btn__icon {}\n.nav__item {}\n")),(0,l.kt)("h4",{id:"modifier"},"Modifier"),(0,l.kt)("p",null,"\u6539\u8b8aBlock\u6216Element\u72c0\u614b\u7684style\uff0c\u53ef\u4ee5\u591a\u500b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},".btn_enabled {}\n.nav__item_active {}\n.nav__item_active_enabled {}\n")))}d.isMDXComponent=!0}}]);