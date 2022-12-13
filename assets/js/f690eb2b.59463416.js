"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[42520],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35288:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c}});var n=r(83117),o=(r(67294),r(3905));const i={title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},s=void 0,a={unversionedId:"leetcode/1-500/reverse_string",id:"leetcode/1-500/reverse_string",title:"344. Reverse String",description:"https://leetcode.com/problems/reverse-string",source:"@site/docs/leetcode/1-500/344_reverse_string.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reverse_string",permalink:"/docs/leetcode/1-500/reverse_string",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/344_reverse_string.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"In Place",permalink:"/docs/tags/in-place"}],version:"current",sidebarPosition:344,frontMatter:{title:"344. Reverse String",sidebar_label:"344. Reverse String",tags:["Leetcode Easy","In Place"]},sidebar:"docSidebar",previous:{title:"342. Power of Four",permalink:"/docs/leetcode/1-500/power_of_4"},next:{title:"374. Guess Number Higher or Lower",permalink:"/docs/leetcode/1-500/guess_num_higher_or_lower"}},l={},c=[{value:"Python",id:"python",level:2},{value:"Loop",id:"loop",level:3},{value:"Recursion",id:"recursion",level:3},{value:"Stack",id:"stack",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-string"},"https://leetcode.com/problems/reverse-string")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"loop"},"Loop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        length = len(s)\n        max_index = length - 1\n\n        for i in range(0, length//2):\n            s[i], s[max_index-i] = s[max_index-i], s[i]\n')),(0,o.kt)("h3",{id:"recursion"},"Recursion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        """\n        Do not return anything, modify s in-place instead.\n        """\n        self._travel(s, 0, len(s)-1)\n\n    def _travel(self, s, left, right):\n        if left >= right:\n            return\n\n        s[left], s[right] = s[right], s[left]\n        self._travel(s, left+1, right-1)\n')),(0,o.kt)("h3",{id:"stack"},"Stack"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def reverseString(self, s: List[str]) -> None:\n        stack = []\n        for char in s:\n            stack.append(char)\n\n        i = 0\n        while stack:\n            s[i] = stack.pop()\n            i += 1\n")))}p.isMDXComponent=!0}}]);