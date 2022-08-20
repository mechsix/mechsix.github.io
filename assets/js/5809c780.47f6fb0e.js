"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2549],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=a(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=n[a];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19755:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],l={title:"458. Poor Pigs",sidebar_label:"458. Poor Pigs",tags:["Leetcode Hard","DP"]},p=void 0,a={unversionedId:"leetcode/1-500/poor_pigs",id:"leetcode/1-500/poor_pigs",title:"458. Poor Pigs",description:"https://leetcode.com/problems/poor-pigs/",source:"@site/docs/leetcode/1-500/458_poor_pigs.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/poor_pigs",permalink:"/docs/leetcode/1-500/poor_pigs",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/458_poor_pigs.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:458,frontMatter:{title:"458. Poor Pigs",sidebar_label:"458. Poor Pigs",tags:["Leetcode Hard","DP"]},sidebar:"docSidebar",previous:{title:"456. 132 Pattern",permalink:"/docs/leetcode/1-500/p132_pattern"},next:{title:"461. Hamming Distance",permalink:"/docs/leetcode/1-500/hamming_distance"}},s=[{value:"Python",id:"python",children:[{value:"Top Down DP",id:"top-down-dp",children:[],level:3},{value:"Loop",id:"loop",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/poor-pigs/"},"https://leetcode.com/problems/poor-pigs/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u56e0\u70ba\u9935\u98df\u5f8c\u5230Pig GG\u4e4b\u524d\u4e0d\u80fd\u518d\u5582\u5176\u4ed6\u7684\u8c6c\uff0c\u6240\u4ee5\u7e3d\u5171\u53ef\u4ee5\u57f7\u884c\u7684\u6b65\u6578\u70ba",(0,i.kt)("inlineCode",{parentName:"li"},"ToTest/toDie+"),"\uff0c\u52a01\u662f\u56e0\u70ba\u5de6\u53f3\u754c\u90fd\u9700\u8981\u5305\u542b"),(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u9935\u98df\u7684\u8c6c\u96bb\u6578\u91cf\u7684\u6307\u6578\u53ea\u8981\u80fd\u5927\u65bc",(0,i.kt)("inlineCode",{parentName:"li"},"buckets"),"\u4ee3\u8868\u8c6c\u96bb\u6578\u91cf\u8db3\u5920")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:\n        steps = minutesToTest // minutesToDie + 1\n\n        @cache\n        def dp(exp):\n            if steps**exp >= buckets:\n                return 1\n\n            return 1 + dp(exp+1)\n\n        return dp(1) if buckets > 1 else 0\n")),(0,i.kt)("h3",{id:"loop"},"Loop"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u540c\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8dd1\u8ff4\u5708\u627e\u51fa\u7b2c\u4e00\u500b\u5927\u65bcbuckets\u7684\u6307\u6578\u7d50\u679c\u5c31\u597d")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def poorPigs(self, buckets: int, minutesToDie: int, minutesToTest: int) -> int:\n        steps = minutesToTest // minutesToDie + 1\n\n        pig_count = 0\n        while steps ** pig_count < buckets:\n            pig_count += 1\n\n        return pig_count\n")))}d.isMDXComponent=!0}}]);