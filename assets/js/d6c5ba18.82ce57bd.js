"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3400],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},65606:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={title:"487. Max Consecutive Ones II",sidebar_label:"487. Max Consecutive Ones II",tags:["Leetcode Medium"]},s=void 0,u={unversionedId:"leetcode/1-500/max_consecutive_ones_ii",id:"leetcode/1-500/max_consecutive_ones_ii",title:"487. Max Consecutive Ones II",description:"https://leetcode.com/problems/max-consecutive-ones-ii",source:"@site/docs/leetcode/1-500/487_max_consecutive_ones_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/max_consecutive_ones_ii",permalink:"/docs/leetcode/1-500/max_consecutive_ones_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/487_max_consecutive_ones_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:487,frontMatter:{title:"487. Max Consecutive Ones II",sidebar_label:"487. Max Consecutive Ones II",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"485. Max Consecutive Ones",permalink:"/docs/leetcode/1-500/max_consecutive_ones"},next:{title:"509. Fibonacci Number",permalink:"/docs/leetcode/501-1000/fibonacci_number"}},l=[{value:"Python",id:"python",children:[],level:2}],m={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/max-consecutive-ones-ii"},"https://leetcode.com/problems/max-consecutive-ones-ii")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:\n        length = len(nums)\n        if length < 2:\n            return 1\n\n        if 0 not in nums:\n            return length\n\n        target_index = None\n        max_ones = 0\n\n        for i in range(0, length):\n            if nums[i] == 0:\n                counter = 0\n\n                for j in range(i-1, -1, -1):\n                    if nums[j] == 0:\n                        break\n                    counter += 1\n\n                for j in range(i+1, length):\n                    if nums[j] == 0:\n                        break\n                    counter += 1\n\n                if counter > max_ones:\n                    target_index = i\n                    max_ones = counter\n        return max_ones + 1\n")))}p.isMDXComponent=!0}}]);