"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[63223],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(f,c(c({ref:t},m),{},{components:n})):r.createElement(f,c({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22051:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={title:"12. Integer to Roman",sidebar_label:"12. Integer to Roman",tags:["Leetcode Medium"]},l=void 0,u={unversionedId:"leetcode/1-500/integer_to_roman",id:"leetcode/1-500/integer_to_roman",title:"12. Integer to Roman",description:"https://leetcode.com/problems/integer-to-roman/",source:"@site/docs/leetcode/1-500/12_integer_to_roman.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/integer_to_roman",permalink:"/docs/leetcode/1-500/integer_to_roman",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/12_integer_to_roman.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:12,frontMatter:{title:"12. Integer to Roman",sidebar_label:"12. Integer to Roman",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"11. Container With Most Water",permalink:"/docs/leetcode/1-500/container_with_most_water"},next:{title:"13. Roman to Integer",permalink:"/docs/leetcode/1-500/roman_to_integer"}},m=[{value:"Python",id:"python",children:[],level:2}],p={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/integer-to-roman/"},"https://leetcode.com/problems/integer-to-roman/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from collections import OrderedDict\n\nclass Solution:\n    def intToRoman(self, num: int) -> str:\n        mapper = OrderedDict({\n            1000: 'M',\n            900: 'CM',\n            500: 'D',\n            400: 'CD',\n            100: 'C',\n            90: 'XC',\n            50: 'L',\n            40: 'XL',\n            10: 'X',\n            9: 'IX',\n            5: 'V',\n            4: 'IV',\n            1: 'I',\n        })\n\n        digits = []\n        for n, digit in mapper.items():\n            if not num:\n                break\n            count, num = divmod(num, n)\n            digits.append(digit * count)\n        return ''.join(digits)\n")))}s.isMDXComponent=!0}}]);