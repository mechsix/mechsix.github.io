"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2520],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35288:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],l={title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},a=void 0,c={unversionedId:"leetcode/1-500/reverse_string",id:"leetcode/1-500/reverse_string",title:"344. Reverse String",description:"https://leetcode.com/problems/reverse-string",source:"@site/docs/leetcode/1-500/344_reverse_string.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reverse_string",permalink:"/docs/leetcode/1-500/reverse_string",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/344_reverse_string.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"In Place",permalink:"/docs/tags/in-place"}],version:"current",sidebarPosition:344,frontMatter:{title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},sidebar:"docSidebar",previous:{title:"341. Flatten Nested List Iterator",permalink:"/docs/leetcode/1-500/flatten_nested_list_lterator"},next:{title:"349. Intersection of Two Arrays",permalink:"/docs/leetcode/1-500/intersection_of_two_arrays"}},u=[{value:"Python",id:"python",children:[{value:"Loop",id:"loop",children:[],level:4},{value:"Recursion",id:"recursion",children:[],level:4}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-string"},"https://leetcode.com/problems/reverse-string")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h4",{id:"loop"},"Loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        length = len(s)\n        max_index = length - 1\n\n        for i in range(0, length//2):\n            s[i], s[max_index-i] = s[max_index-i], s[i]\n')),(0,i.kt)("h4",{id:"recursion"},"Recursion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        self._travel(s, 0, len(s)-1)\n\n    def _travel(self, s, left, right):\n        if left >= right:\n            return\n\n        s[left], s[right] = s[right], s[left]\n        self._travel(s, left+1, right-1)\n')))}d.isMDXComponent=!0}}]);