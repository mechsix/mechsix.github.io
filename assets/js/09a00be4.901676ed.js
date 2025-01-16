"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[20528],{12083:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"dev_practice/css_naming_convention","title":"CSS Naming Convention","description":"OOCSS","source":"@site/docs/dev_practice/css_naming_convention.md","sourceDirName":"dev_practice","slug":"/dev_practice/css_naming_convention","permalink":"/docs/dev_practice/css_naming_convention","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CSS Naming Convention","sidebar_label":"CSS Naming Convention"},"sidebar":"docSidebar","previous":{"title":"Liquibase","permalink":"/docs/cheatsheet/liquibase"},"next":{"title":"Backtracking","permalink":"/docs/leetcode_note/backtracking"}}');var i=s(74848),t=s(28453);const r={title:"CSS Naming Convention",sidebar_label:"CSS Naming Convention"},c=void 0,o={},a=[{value:"OOCSS",id:"oocss",level:2},{value:"\u4e3b\u8981\u7cbe\u795e",id:"\u4e3b\u8981\u7cbe\u795e",level:3},{value:"SMACSS",id:"smacss",level:2},{value:"Base",id:"base",level:4},{value:"Layout",id:"layout",level:4},{value:"Module",id:"module",level:4},{value:"State",id:"state",level:4},{value:"Theme",id:"theme",level:4},{value:"BEM",id:"bem",level:2},{value:"Block",id:"block",level:4},{value:"Element",id:"element",level:4},{value:"Modifier",id:"modifier",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"oocss",children:"OOCSS"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"O"}),"bject ",(0,i.jsx)(n.strong,{children:"O"}),"rinted ",(0,i.jsx)(n.strong,{children:"C"}),"SS"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4e3b\u8981\u7cbe\u795e",children:"\u4e3b\u8981\u7cbe\u795e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7d50\u69cb\u8207\u5916\u89c0\u5206\u96e2"}),"\n",(0,i.jsx)(n.li,{children:"\u5bb9\u5668\u8207\u5167\u5bb9\u5206\u96e2"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4f46\u5176\u5be6\u6c92\u6709\u5728\u7ba1\u4f60\u547d\u540d\u898f\u5247"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".wrapper {\n\tpadding: 5px 10px;\n}\n.panel {\n\tfilter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))\n}\n.text-bold {\n\tfont-weight: bold;\n}\n.color-red {\n\tcolo: red;\n}\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<div class="container drop-shadow">\n\t<div class="panel">\n\t\t<label class="text-bold color-red">Show Something</label>\n\t</div>\n</div>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"smacss",children:"SMACSS"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"S"}),"calable ",(0,i.jsx)(n.strong,{children:"M"}),"odular ",(0,i.jsx)(n.strong,{children:"A"}),"rchitecture for ",(0,i.jsx)(n.strong,{children:"C"}),"SS"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4f7f\u7528\u60c5\u5883\u5206\u70ba\u4e94\u985e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Base"}),"\n",(0,i.jsx)(n.li,{children:"Layout \u7ba1\u7406\u4f48\u5c40"}),"\n",(0,i.jsx)(n.li,{children:"Module \u6a21\u7d44\u7684\u57fa\u5e95"}),"\n",(0,i.jsx)(n.li,{children:"State \u4f9d\u7167\u72c0\u614b\u6539\u8b8a\u800c\u758a\u52a0\u7684style"}),"\n",(0,i.jsx)(n.li,{children:"Theme \u6574\u500b\u7db2\u7ad9style\u7684\u6539\u8b8a"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"base",children:"Base"}),"\n",(0,i.jsx)(n.p,{children:"\u5168\u7ad9\u7684\u8a2d\u5b9a\uff0c\u4f8b\u5982CSS Reset/Normalize"}),"\n",(0,i.jsxs)(n.p,{children:["Example: ",(0,i.jsx)(n.a,{href:"https://meyerweb.com/eric/tools/css/reset/",children:"MeyerWeb CSS Reset"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n\tmargin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n\tcontent: ''; content: none;\n}\ntable {\n\tborder-collapse: collapse; border-spacing: 0;\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"layout",children:"Layout"}),"\n",(0,i.jsxs)(n.p,{children:["Grid System, \u6574\u9ad4\u4f48\u5c40\u4f7f\u7528\u7684CSS\uff0c\u53ea\u51fa\u73fe\u4e00\u6b21\u7684layout\u5143\u7d20\u8a72\u7528",(0,i.jsx)(n.code,{children:"id"}),"\u800c\u4e0d\u662f",(0,i.jsx)(n.code,{children:"class"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:"#container {}\n\n#header {}\n\n#navbar {}\n.nav-item {}\n\n#footer {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"module",children:"Module"}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u91cd\u8907\u5229\u7528\u7684component style"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".btn {}\n.btn-primary {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"state",children:"State"}),"\n",(0,i.jsx)(n.p,{children:"\u72c0\u614b\u6539\u8b8a\u6642\u7279\u6709\u7684\u6a23\u5f0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".is-enabled {}\n.has-error {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"theme",children:"Theme"}),"\n",(0,i.jsx)(n.p,{children:"\u5168\u7ad9\u7684\u8a2d\u5b9a\uff0c\u73fe\u5728\u6539\u7528CSS Variable\u4f7f\u7528\u6703\u5bb9\u6613\u9ede\n\u597d\u8655\u662fDark Mode\u7684\u5be6\u73fe\u53ef\u4ee5\u76f4\u63a5\u5728\u9019\u5c64\u5b8c\u6210"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".theme-bg-color {}\n.theme-primary-color {}\n.theme-secondary-color {}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"bem",children:(0,i.jsx)(n.a,{href:"http://getbem.com/naming/",children:"BEM"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"B"}),"lock \u5340\u584a ",(0,i.jsx)(n.strong,{children:"E"}),"lement \u5143\u7d20 ",(0,i.jsx)(n.strong,{children:"M"}),"odifier \u4fee\u98fe\u7b26"]}),"\n",(0,i.jsx)(n.p,{children:"\u8207\u5176\u8aaa\u662fpattern\uff0c\u66f4\u50cf\u8aaa\u662fcss class naming\u7684\u898f\u5247"}),"\n",(0,i.jsx)(n.p,{children:"\u8ddfSMACSS\u5c0d\u7167\u8d77\u4f86Element-Modifier\u6703\u5c0d\u61c9\u5230Model-State"}),"\n",(0,i.jsx)(n.h4,{id:"block",children:"Block"}),"\n",(0,i.jsx)(n.p,{children:"\u7121\u5e95\u7ddaprefix\uff0c\u53ef\u5171\u7528\u7684\u5143\u7d20"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".btn {}\n.nav {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"element",children:"Element"}),"\n",(0,i.jsx)(n.p,{children:"\u4f9d\u9644\u5728Block\u4e0b\uff0c\u6709\u5169\u500b\u5e95\u7ddaprefix"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".btn__icon {}\n.nav__item {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"modifier",children:"Modifier"}),"\n",(0,i.jsx)(n.p,{children:"\u6539\u8b8aBlock\u6216Element\u72c0\u614b\u7684style\uff0c\u53ef\u4ee5\u591a\u500b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".btn_enabled {}\n.nav__item_active {}\n.nav__item_active_enabled {}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var l=s(96540);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);