"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[47],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},26143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"39. Combination Sum",sidebar_label:"39. Combination Sum",tags:["Leetcode Medium","Combinations"]},s=void 0,l={unversionedId:"leetcode/1-500/combinations_sum",id:"leetcode/1-500/combinations_sum",title:"39. Combination Sum",description:"https://leetcode.com/problems/combination-sum/",source:"@site/docs/leetcode/1-500/39_combinations_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/combinations_sum",permalink:"/docs/leetcode/1-500/combinations_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/39_combinations_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Combinations",permalink:"/docs/tags/combinations"}],version:"current",sidebarPosition:39,frontMatter:{title:"39. Combination Sum",sidebar_label:"39. Combination Sum",tags:["Leetcode Medium","Combinations"]},sidebar:"docSidebar",previous:{title:"36. Valid Sudoku",permalink:"/docs/leetcode/1-500/valid_sudoku"},next:{title:"43. Multiply Strings",permalink:"/docs/leetcode/1-500/multiply_strings"}},u=[{value:"Python",id:"python",children:[{value:"Recursive",id:"recursive",children:[],level:3}],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/combination-sum/"},"https://leetcode.com/problems/combination-sum/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"recursive"},"Recursive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remember seem combs with a tuple set")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.seem = set()\n\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        return self._travel(candidates, target, [], [])\n\n    def _travel(self, cands, target, wip, combs):\n        total = sum(wip)\n        if total == target:\n            key = tuple(sorted(wip))\n            if key not in self.seem:\n                self.seem.add(key)\n                combs.append(wip)\n            return\n\n        if total > target:\n            return\n\n        for cand in cands:\n            self._travel(cands, target, wip+[cand], combs)\n        return combs\n")))}p.isMDXComponent=!0}}]);