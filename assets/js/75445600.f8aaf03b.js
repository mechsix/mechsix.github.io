"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2871],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||c;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77552:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],s={title:"485. Max Consecutive Ones",sidebar_label:"485. Max Consecutive Ones",tags:["Leetcode Easy"]},a=void 0,u={unversionedId:"leetcode/1-500/max_consecutive_ones",id:"leetcode/1-500/max_consecutive_ones",title:"485. Max Consecutive Ones",description:"https://leetcode.com/problems/max-consecutive-ones",source:"@site/docs/leetcode/1-500/485_max_consecutive_ones.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_consecutive_ones",permalink:"/docs/leetcode/1-500/max_consecutive_ones",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/485_max_consecutive_ones.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:485,frontMatter:{title:"485. Max Consecutive Ones",sidebar_label:"485. Max Consecutive Ones",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"461. Hamming Distance",permalink:"/docs/leetcode/1-500/hamming_distance"},next:{title:"487. Max Consecutive Ones II",permalink:"/docs/leetcode/1-500/max_consecutive_ones_ii"}},l=[{value:"Python",id:"python",children:[],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/max-consecutive-ones"},"https://leetcode.com/problems/max-consecutive-ones")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:\n        if not nums:\n            return 0\n\n        result = 0\n        max_result = 0\n\n        for num in nums:\n            if num == 1:\n                result += 1\n            else:\n                result = 0\n            max_result = max(result, max_result)\n        return max_result\n")))}m.isMDXComponent=!0}}]);