"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[56304],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4873:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const i={title:"415. Add Strings",sidebar_label:"415. Add Strings",tags:["Leetcode Easy"]},a=void 0,s={unversionedId:"leetcode/1-500/add_strings",id:"leetcode/1-500/add_strings",title:"415. Add Strings",description:"https://leetcode.com/problems/add-strings/",source:"@site/docs/leetcode/1-500/415_add_strings.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/add_strings",permalink:"/docs/leetcode/1-500/add_strings",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/415_add_strings.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:415,frontMatter:{title:"415. Add Strings",sidebar_label:"415. Add Strings",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"414. Third Maximum Number",permalink:"/docs/leetcode/1-500/third_max_number"},next:{title:"416. Partition Equal Subset Sum",permalink:"/docs/leetcode/1-500/partition_equal_subset_sum"}},c={},l=[{value:"Python",id:"python",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/add-strings/"},"https://leetcode.com/problems/add-strings/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def addStrings(self, num1: str, num2: str) -> str:\n        result = []\n        carry = 0\n\n        string1 = list(num1)\n        string2 = list(num2)\n\n        while string1 or string2:\n            char1 = string1.pop() if string1 else '0'\n            char2 = string2.pop() if string2 else '0'\n\n            n1 = ord(char1) - ord('0')\n            n2 = ord(char2) - ord('0')\n\n            value = n1 + n2 + carry\n            carry = value // 10\n            result.append(value % 10)\n\n        if carry:\n            result.append(carry)\n\n        return ''.join([str(char) for char in result[::-1]])\n")))}d.isMDXComponent=!0}}]);