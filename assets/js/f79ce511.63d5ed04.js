"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[76368],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l}});var r=n(83117),i=(n(67294),n(3905));const o={title:"216. Combination Sum III",sidebar_label:"216. Combination Sum III",tags:["Leetcode Medium","Combinations","Backtracking"]},a=void 0,c={unversionedId:"leetcode/1-500/combination_sum_iii",id:"leetcode/1-500/combination_sum_iii",title:"216. Combination Sum III",description:"https://leetcode.com/problems/combination-sum-iii/",source:"@site/docs/leetcode/1-500/216_combination_sum_iii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/combination_sum_iii",permalink:"/docs/leetcode/1-500/combination_sum_iii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/216_combination_sum_iii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Combinations",permalink:"/docs/tags/combinations"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:216,frontMatter:{title:"216. Combination Sum III",sidebar_label:"216. Combination Sum III",tags:["Leetcode Medium","Combinations","Backtracking"]},sidebar:"docSidebar",previous:{title:"215. Kth Largest Element in an Array",permalink:"/docs/leetcode/1-500/kth_largest_elm_in_array"},next:{title:"217. Contains Duplicate",permalink:"/docs/leetcode/1-500/containers_duplicate"}},u={},l=[{value:"Python",id:"python",level:2},{value:"Backtracking",id:"backtracking",level:3}],s={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/combination-sum-iii/"},"https://leetcode.com/problems/combination-sum-iii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"backtracking"},"Backtracking"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def combinationSum3(self, k: int, n: int) -> List[List[int]]:\n        options = [num for num in range(1, 10)]\n        result = set()\n\n        def backtrack(track: set):\n            if len(track) == k:\n                if sum(track) == n:\n                    result.add(tuple(sorted(list(track))))\n                return\n\n            current_total = sum(track)\n\n            for option in options:\n                if option in track:\n                    continue\n\n                if current_total + option > n:\n                    continue\n\n                track.add(option)\n                backtrack(track)\n                track.remove(option)\n\n        backtrack(set())\n\n        return list(result)\n")))}m.isMDXComponent=!0}}]);