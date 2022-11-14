"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[13025],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),i=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<c;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95712:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),s=["components"],l={title:"299. Bulls and Cows",sidebar_label:"299. Bulls and Cows",tags:["Leetcode Medium","Hash"]},a=void 0,i={unversionedId:"leetcode/1-500/bulls_and_cows",id:"leetcode/1-500/bulls_and_cows",title:"299. Bulls and Cows",description:"https://leetcode.com/problems/bulls-and-cows/",source:"@site/docs/leetcode/1-500/299_bulls_and_cows.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/bulls_and_cows",permalink:"/docs/leetcode/1-500/bulls_and_cows",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/299_bulls_and_cows.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:299,frontMatter:{title:"299. Bulls and Cows",sidebar_label:"299. Bulls and Cows",tags:["Leetcode Medium","Hash"]},sidebar:"docSidebar",previous:{title:"297. Serialize and Deserialize Binary Tree",permalink:"/docs/leetcode/1-500/serialize_descrialize_bt"},next:{title:"300. Longest Increasing Subsequence",permalink:"/docs/leetcode/1-500/longest_increasing_subsequence"}},u=[{value:"Python",id:"python",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/bulls-and-cows/"},"https://leetcode.com/problems/bulls-and-cows/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},'from collections import Counter\n\n\nclass Solution:\n    def getHint(self, secret: str, guess: str) -> str:\n        counts = Counter(secret)\n\n        bulls, cows = 0, 0\n        for i, num in enumerate(guess):\n            if num == secret[i]:\n                bulls += 1\n                cows -= 1 if counts[num] <= 0 else 0\n            else:\n                cows += 1 if counts[num] > 0 else 0\n            counts[num] -= 1\n        return "{}A{}B".format(bulls, cows)\n')))}p.isMDXComponent=!0}}]);