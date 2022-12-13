"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52618],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),i=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(a.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=i(n),d=o,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[m]="string"==typeof e?e:o,c[1]=u;for(var i=2;i<l;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return i}});var r=n(83117),o=(n(67294),n(3905));const l={title:"171. Excel Sheet Column Number",sidebar_label:"171. Excel Sheet Column Number",tags:["Leetcode Easy"]},c=void 0,u={unversionedId:"leetcode/1-500/excel_sheet_column",id:"leetcode/1-500/excel_sheet_column",title:"171. Excel Sheet Column Number",description:"https://leetcode.com/problems/excel-sheet-column-number/",source:"@site/docs/leetcode/1-500/171_excel_sheet_column.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/excel_sheet_column",permalink:"/docs/leetcode/1-500/excel_sheet_column",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/171_excel_sheet_column.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:171,frontMatter:{title:"171. Excel Sheet Column Number",sidebar_label:"171. Excel Sheet Column Number",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"169. Majority Element",permalink:"/docs/leetcode/1-500/majority_elements"},next:{title:"173. Binary Search Tree Iterator",permalink:"/docs/leetcode/1-500/bst_iterator"}},a={},i=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],s={toc:i};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/excel-sheet-column-number/"},"https://leetcode.com/problems/excel-sheet-column-number/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def titleToNumber(self, columnTitle: str) -> int:\n        result = 0\n        power = 0\n        for char in columnTitle[::-1]:\n            result += (ord(char)-64) * (26 ** power)\n            power += 1\n        return result\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func titleToNumber(columnTitle string) int {\n    length := len(columnTitle)\n    var result float64 = 0\n    var power int = 0\n\n    for i := range(columnTitle) {\n        result += float64(columnTitle[length-i-1] - 64) * math.Pow(float64(26), float64(power))\n        power += 1\n    }\n    return int(result)\n}\n")))}m.isMDXComponent=!0}}]);