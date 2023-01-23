"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[85774],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69402:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(83117),i=(n(67294),n(3905));const o={title:"131. Palindrome Partitioning",sidebar_label:"131. Palindrome Partitioning",tags:["Leetcode Medium","Backtracking"]},a=void 0,c={unversionedId:"leetcode/1-500/palindrome_partitioning",id:"leetcode/1-500/palindrome_partitioning",title:"131. Palindrome Partitioning",description:"https://leetcode.com/problems/palindrome-partitioning",source:"@site/docs/leetcode/1-500/131_palindrome_partitioning.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/palindrome_partitioning",permalink:"/docs/leetcode/1-500/palindrome_partitioning",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/131_palindrome_partitioning.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:131,frontMatter:{title:"131. Palindrome Partitioning",sidebar_label:"131. Palindrome Partitioning",tags:["Leetcode Medium","Backtracking"]},sidebar:"docSidebar",previous:{title:"130. Surrounded Regions",permalink:"/docs/leetcode/1-500/surrounded_regions"},next:{title:"136. Single Number",permalink:"/docs/leetcode/1-500/single_num"}},l={},s=[{value:"Python",id:"python",level:2},{value:"Backtracking",id:"backtracking",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/palindrome-partitioning"},"https://leetcode.com/problems/palindrome-partitioning")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"backtracking"},"Backtracking"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def partition(self, s: str) -> List[List[str]]:\n        ans = []\n\n        def backtracking(start: int, stack: list):\n            if start == len(s):\n                nonlocal ans\n                ans.append(stack[:])\n                return\n\n            for end in range(start+1, len(s)+1):\n                cand = s[start:end]\n                if cand != cand[::-1]:\n                    continue\n                stack.append(cand)\n                backtracking(end, stack)\n                stack.pop()\n\n        backtracking(0, [])\n\n        return list(ans)\n")))}u.isMDXComponent=!0}}]);