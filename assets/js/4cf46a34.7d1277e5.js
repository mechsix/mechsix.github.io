"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6406],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(b,l(l({ref:n},c),{},{components:t})):r.createElement(b,l({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[m]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"137. Single Number II",sidebar_label:"137. Single Number II",tags:["Leetcode Medium","Hash","Bit Manipulation"]},l=void 0,a={unversionedId:"leetcode/1-500/single_number_ii",id:"leetcode/1-500/single_number_ii",title:"137. Single Number II",description:"https://leetcode.com/problems/single-number-ii/",source:"@site/docs/leetcode/1-500/137_single_number_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/single_number_ii",permalink:"/docs/leetcode/1-500/single_number_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/137_single_number_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Hash",permalink:"/docs/tags/hash"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:137,frontMatter:{title:"137. Single Number II",sidebar_label:"137. Single Number II",tags:["Leetcode Medium","Hash","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"136. Single Number",permalink:"/docs/leetcode/1-500/single_num"},next:{title:"139. Word Break",permalink:"/docs/leetcode/1-500/word_break"}},s={},u=[{value:"Python",id:"python",level:2},{value:"Hash Set",id:"hash-set",level:3},{value:"Bit Manipulation",id:"bit-manipulation",level:3}],c={toc:u},m="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/single-number-ii/"},"https://leetcode.com/problems/single-number-ii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"hash-set"},"Hash Set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        m1, m2 = set(), set()\n\n        for num in nums:\n            if num not in m1:\n                m1.add(num)\n                continue\n\n            if num not in m2:\n                m2.add(num)\n                continue\n\n            m1.remove(num)\n            m2.remove(num)\n\n        return m1.pop()\n")),(0,i.kt)("h3",{id:"bit-manipulation"},"Bit Manipulation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~")," bitwise NOT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"^")," xor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def singleNumber(self, nums: List[int]) -> int:\n        ones, twos = 0, 0\n\n        for num in nums:\n            ones = (ones ^ num) & ~twos\n            twos = (twos ^ num) & ~ones\n\n        return ones\n")))}p.isMDXComponent=!0}}]);