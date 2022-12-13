"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[38438],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,p=m["".concat(i,".").concat(f)]||m[f]||d[f]||s;return n?r.createElement(p,u(u({ref:t},l),{},{components:n})):r.createElement(p,u({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,u=new Array(s);u[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[m]="string"==typeof e?e:o,u[1]=a;for(var c=2;c<s;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74632:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const s={title:"6219. Sum of Number and Its Reverse",sidebar_label:"6219. Sum of Number and Its Reverse",tags:["Leetcode Medium","Hash","Contest"]},u=void 0,a={unversionedId:"leetcode/2000/sum_of_num_an_its_reverse",id:"leetcode/2000/sum_of_num_an_its_reverse",title:"6219. Sum of Number and Its Reverse",description:"https://leetcode.com/contest/weekly-contest-315/problems/sum-of-number-and-its-reverse/",source:"@site/docs/leetcode/2000/6219_sum_of_num_an_its_reverse.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/sum_of_num_an_its_reverse",permalink:"/docs/leetcode/2000/sum_of_num_an_its_reverse",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/6219_sum_of_num_an_its_reverse.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Hash",permalink:"/docs/tags/hash"},{label:"Contest",permalink:"/docs/tags/contest"}],version:"current",sidebarPosition:6219,frontMatter:{title:"6219. Sum of Number and Its Reverse",sidebar_label:"6219. Sum of Number and Its Reverse",tags:["Leetcode Medium","Hash","Contest"]},sidebar:"docSidebar",previous:{title:"6207. Count Subarrays With Fixed Bounds",permalink:"/docs/leetcode/2000/count_subarray_with_fixed_bounds"},next:{title:"React with NX",permalink:"/docs/react/nx-react"}},i={},c=[{value:"Python",id:"python",level:2}],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/contest/weekly-contest-315/problems/sum-of-number-and-its-reverse/"},"https://leetcode.com/contest/weekly-contest-315/problems/sum-of-number-and-its-reverse/")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contest 315")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def sumOfNumberAndReverse(self, num: int) -> bool:\n        if not num:\n            return True\n        for n in range(num):\n            rev = self.rev(n)\n            if n + rev == num:\n                print(num, n, rev)\n                return True\n        return False\n\n    def rev(self, num):\n        rev = list(str(num))\n        rev.reverse()\n        return int(''.join(rev))\n\n")))}m.isMDXComponent=!0}}]);