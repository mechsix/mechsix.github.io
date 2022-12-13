"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94184],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const c={title:"1446. Consecutive Characters",sidebar_label:"1446. Consecutive Characters",tags:["Leetcode Easy"]},i=void 0,a={unversionedId:"leetcode/1001-1500/consecutive_chars",id:"leetcode/1001-1500/consecutive_chars",title:"1446. Consecutive Characters",description:"Python",source:"@site/docs/leetcode/1001-1500/1446_consecutive_chars.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/consecutive_chars",permalink:"/docs/leetcode/1001-1500/consecutive_chars",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1446_consecutive_chars.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1446,frontMatter:{title:"1446. Consecutive Characters",sidebar_label:"1446. Consecutive Characters",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1413. Mini Value to Possitive Sum",permalink:"/docs/leetcode/1001-1500/min_value_get_positive_sum"},next:{title:"1448. Count Good Nodes in Binary Tree",permalink:"/docs/leetcode/1001-1500/count_good_nodes_in_binary_tree"}},s={},u=[{value:"Python",id:"python",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxPower(self, s: str) -> int:\n        length = len(s)\n\n        if length <= 1:\n            return 1\n\n        result = 1\n        max_result = 1\n\n        for index in range(1, length):\n            if s[index] == s[index-1]:\n                result += 1\n            else:\n                result = 1\n            max_result = max(result, max_result)\n\n        return max_result\n")))}p.isMDXComponent=!0}}]);