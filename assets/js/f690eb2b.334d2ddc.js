"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2520],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},l=void 0,c={unversionedId:"leetcode/1-500/reverse_string",id:"leetcode/1-500/reverse_string",title:"344. Reverse String",description:"https://leetcode.com/problems/reverse-string",source:"@site/docs/leetcode/1-500/344_reverse_string.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reverse_string",permalink:"/docs/leetcode/1-500/reverse_string",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/344_reverse_string.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"In Place",permalink:"/docs/tags/in-place"}],version:"current",sidebarPosition:344,frontMatter:{title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},sidebar:"docSidebar",previous:{title:"341. Flatten Nested List Iterator",permalink:"/docs/leetcode/1-500/flatten_nested_list_lterator"},next:{title:"349. Intersection of Two Arrays",permalink:"/docs/leetcode/1-500/intersection_of_two_arrays"}},u=[{value:"Python",id:"python",children:[{value:"Loop",id:"loop",children:[],level:3},{value:"Recursion",id:"recursion",children:[],level:3},{value:"Stack",id:"stack",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-string"},"https://leetcode.com/problems/reverse-string")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"loop"},"Loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        length = len(s)\n        max_index = length - 1\n\n        for i in range(0, length//2):\n            s[i], s[max_index-i] = s[max_index-i], s[i]\n')),(0,i.kt)("h3",{id:"recursion"},"Recursion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        self._travel(s, 0, len(s)-1)\n\n    def _travel(self, s, left, right):\n        if left >= right:\n            return\n\n        s[left], s[right] = s[right], s[left]\n        self._travel(s, left+1, right-1)\n')),(0,i.kt)("h3",{id:"stack"},"Stack"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        stack = []\n        for char in s:\n            stack.append(char)\n\n        i = 0\n        while stack:\n            s[i] = stack.pop()\n            i += 1\n")))}d.isMDXComponent=!0}}]);