"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[41421],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={title:"1249. Minimum Remove to Make Valid Parentheses",sidebar_label:"1249. Minimum Remove to Make Valid Parentheses",tags:["Leetcode Medium","Stack"]},i=void 0,c={unversionedId:"leetcode/1001-1500/min_remove_to_make_valid_parentheses",id:"leetcode/1001-1500/min_remove_to_make_valid_parentheses",title:"1249. Minimum Remove to Make Valid Parentheses",description:"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/",source:"@site/docs/leetcode/1001-1500/1249_min_remove_to_make_valid_parentheses.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/min_remove_to_make_valid_parentheses",permalink:"/docs/leetcode/1001-1500/min_remove_to_make_valid_parentheses",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1249_min_remove_to_make_valid_parentheses.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Stack",permalink:"/docs/tags/stack"}],version:"current",sidebarPosition:1249,frontMatter:{title:"1249. Minimum Remove to Make Valid Parentheses",sidebar_label:"1249. Minimum Remove to Make Valid Parentheses",tags:["Leetcode Medium","Stack"]},sidebar:"docSidebar",previous:{title:"1239. Maximum Length of a Concatenated String with Unique Characters",permalink:"/docs/leetcode/1001-1500/max_length_of_concatenated_string_with_unique_chars"},next:{title:"1260. Shift 2D Grid",permalink:"/docs/leetcode/1001-1500/shift_2d_grid"}},s={},l=[{value:"Python",id:"python",level:2}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"},"https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(2N)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(k)  # k stands for removal item's number")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minRemoveToMakeValid(self, s: str) -> str:\n        stack = []\n        chars = list(s)\n\n        removal = set()\n\n        for index, char in enumerate(chars):\n            if char == '(':\n                stack.append(index)\n            elif char == ')':\n                if not stack:\n                    removal.add(index)\n                else:\n                    stack.pop()\n\n        removal ^= set(stack)\n        result = []\n        for index, char in enumerate(chars):\n            if index in removal:\n                continue\n            result.append(char)\n\n        return ''.join(result)\n")))}u.isMDXComponent=!0}}]);