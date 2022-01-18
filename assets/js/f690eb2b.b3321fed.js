"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2520],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,g=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},35288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],s={title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},a=void 0,c={unversionedId:"leetcode/1-500/reverse_string",id:"leetcode/1-500/reverse_string",title:"344. Reverse String",description:"Python",source:"@site/docs/leetcode/1-500/344_reverse_string.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reverse_string",permalink:"/docs/leetcode/1-500/reverse_string",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/344_reverse_string.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"In Place",permalink:"/docs/tags/in-place"}],version:"current",sidebarPosition:344,frontMatter:{title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},sidebar:"docSidebar",previous:{title:"328. Odd Even Linked List",permalink:"/docs/leetcode/1-500/odd_even_linklist"},next:{title:"359. Logger Rate Limiter",permalink:"/docs/leetcode/1-500/logger_rate_limiter"}},u=[{value:"Python",id:"python",children:[{value:"Loop",id:"loop",children:[],level:4},{value:"Recursion",id:"recursion",children:[],level:4}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h4",{id:"loop"},"Loop"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        length = len(s)\n        max_index = length - 1\n        \n        for i in range(0, length//2):\n            s[i], s[max_index-i] = s[max_index-i], s[i]\n')),(0,i.kt)("h4",{id:"recursion"},"Recursion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        self._travel(s, 0, len(s)-1)\n        \n    def _travel(self, s, left, right):\n        if left >= right:\n            return\n        \n        s[left], s[right] = s[right], s[left]\n        self._travel(s, left+1, right-1)\n')))}p.isMDXComponent=!0}}]);