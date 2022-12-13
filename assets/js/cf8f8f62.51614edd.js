"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[11474],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={title:"371. Sum of Two Integers",sidebar_label:"371. Sum of Two Integers",tags:["Leetcode Medium","Bit Manipulation"]},i=void 0,c={unversionedId:"leetcode/1-500/sum_of_two_integer",id:"leetcode/1-500/sum_of_two_integer",title:"371. Sum of Two Integers",description:"https://leetcode.com/problems/sum-of-two-integers/",source:"@site/docs/leetcode/1-500/371_sum_of_two_integer.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/sum_of_two_integer",permalink:"/docs/leetcode/1-500/sum_of_two_integer",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/371_sum_of_two_integer.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:371,frontMatter:{title:"371. Sum of Two Integers",sidebar_label:"371. Sum of Two Integers",tags:["Leetcode Medium","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"363. Max Sum of Rectangle No Larger Than K",permalink:"/docs/leetcode/1-500/max_sum_of_rectangle_no_larger_than_k"},next:{title:"376. Wiggle Subsequence",permalink:"/docs/leetcode/1-500/wiggle_subsequence"}},u={},l=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sum-of-two-integers/"},"https://leetcode.com/problems/sum-of-two-integers/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use operator module for better understand")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from operator import xor, invert, and_\n\n\nclass Solution:\n    def getSum(self, a: int, b: int) -> int:\n        x, y = abs(a), abs(b)\n\n        # Ensure x >= y\n        if x < y:\n            return self.getSum(b, a)\n\n        sign = 1 if a > 0 else -1\n\n        if a * b >= 0:\n            # a and b are possitive integers\n            while y:\n                x, y = xor(x, y), and_(x, y) << 1\n        else:\n            while y:\n                x, y = xor(x, y), and_(invert(x), y) << 1\n\n        return sign * x\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var getSum = function(a, b) {\n    while (b != 0){\n        const c = a & b;\n        a = a^b;\n        b = c << 1;\n    }\n    return a;\n};\n")))}p.isMDXComponent=!0}}]);