"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[11794],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return y}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),f=i,y=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return t?r.createElement(y,a(a({ref:n},d),{},{components:t})):r.createElement(y,a({ref:n},d))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},59445:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=t(83117),i=(t(67294),t(3905));const o={title:"953. Verifying an Alien Dictionary",sidebar_label:"953. Verifying an Alien Dictionary",tags:["Leetcode Easy"]},a=void 0,c={unversionedId:"leetcode/501-1000/verifying_an_alien_dictionary",id:"leetcode/501-1000/verifying_an_alien_dictionary",title:"953. Verifying an Alien Dictionary",description:"https://leetcode.com/problems/verifying-an-alien-dictionary",source:"@site/docs/leetcode/501-1000/953_verifying_an_alien_dictionary.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/verifying_an_alien_dictionary",permalink:"/docs/leetcode/501-1000/verifying_an_alien_dictionary",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/953_verifying_an_alien_dictionary.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:953,frontMatter:{title:"953. Verifying an Alien Dictionary",sidebar_label:"953. Verifying an Alien Dictionary",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"941. Valid Mountain Array",permalink:"/docs/leetcode/501-1000/valid_mountain_array"},next:{title:"967. Numbers With Same Consecutive Differences",permalink:"/docs/leetcode/501-1000/numbers_with_same_consecutive_differences"}},l={},s=[{value:"Python",id:"python",level:2},{value:"Hashmap",id:"hashmap",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/verifying-an-alien-dictionary"},"https://leetcode.com/problems/verifying-an-alien-dictionary")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"hashmap"},"Hashmap"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isAlienSorted(self, words: List[str], order: str) -> bool:\n        mapper = {letter: i for i, letter in enumerate(order)}\n\n        decoded = [\n            [mapper[letter] for letter in word]\n            for word in words\n        ]\n\n        for i in range(1, len(decoded)):\n            if decoded[i] < decoded[i-1]:\n                return False\n        return True\n")))}u.isMDXComponent=!0}}]);