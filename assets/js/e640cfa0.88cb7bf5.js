"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[34644],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const l={title:"43. Multiply Strings",sidebar_label:"43. Multiply Strings",tags:["Leetcode Medium"]},i=void 0,a={unversionedId:"leetcode/1-500/multiply_strings",id:"leetcode/1-500/multiply_strings",title:"43. Multiply Strings",description:"https://leetcode.com/problems/multiply-strings",source:"@site/docs/leetcode/1-500/43_multiply_strings.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/multiply_strings",permalink:"/docs/leetcode/1-500/multiply_strings",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/43_multiply_strings.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:43,frontMatter:{title:"43. Multiply Strings",sidebar_label:"43. Multiply Strings",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"42. Trapping Rain Water",permalink:"/docs/leetcode/1-500/trapping_rain_water"},next:{title:"45. Jump Game II",permalink:"/docs/leetcode/1-500/jump_game_ii"}},s={},u=[{value:"Python",id:"python",level:2},{value:"Use enumerate index as pos",id:"use-enumerate-index-as-pos",level:3},{value:"Self-calculate power",id:"self-calculate-power",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/multiply-strings"},"https://leetcode.com/problems/multiply-strings")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"use-enumerate-index-as-pos"},"Use enumerate index as pos"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def multiply(self, num1: str, num2: str) -> str:\n        result = 0\n        for pos1, char1 in enumerate(num1[::-1]):\n            for pos2, char2 in enumerate(num2[::-1]):\n                result += int(char1) * int(char2) * (10**(pos1+pos2))\n        return str(result)\n")),(0,o.kt)("h3",{id:"self-calculate-power"},"Self-calculate power"),(0,o.kt)("p",null,"(Second try, not that better solution)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def multiply(self, num1: str, num2: str) -> str:\n        ans = 0\n        power = 0\n\n        for ns1 in num1[::-1]:\n            level_total = 0\n            level_pwr = 0\n            for ns2 in num2[::-1]:\n                n1 = ord(ns1) - ord('0')\n                n2 = ord(ns2) - ord('0')\n                mult = n1 * n2\n\n                level_total += mult * (10**level_pwr)\n                level_pwr += 1\n\n            ans += level_total*(10**power)\n            power += 1\n\n        return str(ans)\n")))}p.isMDXComponent=!0}}]);