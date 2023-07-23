"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52618],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,c=new Array(l);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[m]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<l;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={title:"171. Excel Sheet Column Number",sidebar_label:"171. Excel Sheet Column Number",tags:["Leetcode Easy","Go"]},c=void 0,a={unversionedId:"leetcode/1-500/excel_sheet_column",id:"leetcode/1-500/excel_sheet_column",title:"171. Excel Sheet Column Number",description:"https://leetcode.com/problems/excel-sheet-column-number/",source:"@site/docs/leetcode/1-500/171_excel_sheet_column.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/excel_sheet_column",permalink:"/docs/leetcode/1-500/excel_sheet_column",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/171_excel_sheet_column.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:171,frontMatter:{title:"171. Excel Sheet Column Number",sidebar_label:"171. Excel Sheet Column Number",tags:["Leetcode Easy","Go"]},sidebar:"docSidebar",previous:{title:"169. Majority Element",permalink:"/docs/leetcode/1-500/majority_elements"},next:{title:"173. Binary Search Tree Iterator",permalink:"/docs/leetcode/1-500/bst_iterator"}},i={},u=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],s={toc:u},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/excel-sheet-column-number/"},"https://leetcode.com/problems/excel-sheet-column-number/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def titleToNumber(self, columnTitle: str) -> int:\n        result = 0\n        power = 0\n        for char in columnTitle[::-1]:\n            result += (ord(char)-64) * (26 ** power)\n            power += 1\n        return result\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func titleToNumber(columnTitle string) int {\n    length := len(columnTitle)\n    var result float64 = 0\n    var power int = 0\n\n    for i := range(columnTitle) {\n        result += float64(columnTitle[length-i-1] - 64) * math.Pow(float64(26), float64(power))\n        power += 1\n    }\n    return int(result)\n}\n")))}p.isMDXComponent=!0}}]);