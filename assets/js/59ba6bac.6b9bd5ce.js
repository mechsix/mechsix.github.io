"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4809],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},73380:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"8. String to Integer (atoi)",sidebar_label:"8. String to Integer (atoi)",tags:["Leetcode Medium","Leetcode Fail Review"]},c=void 0,u={unversionedId:"leetcode/1-500/atoi",id:"leetcode/1-500/atoi",title:"8. String to Integer (atoi)",description:"https://leetcode.com/problems/string-to-integer-atoi",source:"@site/docs/leetcode/1-500/8_atoi.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/atoi",permalink:"/docs/leetcode/1-500/atoi",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/8_atoi.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Leetcode Fail Review",permalink:"/docs/tags/leetcode-fail-review"}],version:"current",sidebarPosition:8,frontMatter:{title:"8. String to Integer (atoi)",sidebar_label:"8. String to Integer (atoi)",tags:["Leetcode Medium","Leetcode Fail Review"]},sidebar:"docSidebar",previous:{title:"3. Longest Substring Without Repeating Characters",permalink:"/docs/leetcode/1-500/longest_no_repeat_substring"},next:{title:"15. 3Sum",permalink:"/docs/leetcode/1-500/three_sum"}},s=[{value:"Python",id:"python",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/string-to-integer-atoi"},"https://leetcode.com/problems/string-to-integer-atoi")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Test cases are really special"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"42"'),(0,o.kt)("li",{parentName:"ul"},'"-41"'),(0,o.kt)("li",{parentName:"ul"},'"00000-42a1234"'),(0,o.kt)("li",{parentName:"ul"},'"   +0 123"'),(0,o.kt)("li",{parentName:"ul"},'"words and 987"'),(0,o.kt)("li",{parentName:"ul"},'"-"'),(0,o.kt)("li",{parentName:"ul"},'"-5-"'),(0,o.kt)("li",{parentName:"ul"},'"-+12"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def myAtoi(self, s: str) -> int:\n        chars = s.strip()\n        num_chars = []\n\n        if not chars:\n            return 0\n\n        seem_num = False\n        seem_sign = False\n\n        for i in range(len(chars)):\n            char = chars[i]\n\n            if not char.isnumeric():\n                if seem_num:\n                    break\n                elif char == '+':\n                    if seem_sign:\n                        return 0\n                    seem_sign = True\n                elif char == '-':\n                    if seem_sign:\n                        return 0\n                    seem_sign = True\n                    num_chars.append('-')\n                else:\n                    break\n            else:\n                num_chars.append(char)\n                seem_num = True\n\n        if not num_chars or (len(num_chars) == 1 and num_chars[0] == '-'):\n            return 0\n\n        number = int(''.join(num_chars))\n        limit = 2**31\n\n        if number > limit-1:\n            return limit-1\n        if number < -limit:\n            return -limit\n        return number\n")))}p.isMDXComponent=!0}}]);