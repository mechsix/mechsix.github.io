"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[80047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26143:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={title:"39. Combination Sum",sidebar_label:"39. Combination Sum",tags:["Leetcode Medium","Combinations"]},s=void 0,l={unversionedId:"leetcode/1-500/combinations_sum",id:"leetcode/1-500/combinations_sum",title:"39. Combination Sum",description:"https://leetcode.com/problems/combination-sum/",source:"@site/docs/leetcode/1-500/39_combinations_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/combinations_sum",permalink:"/docs/leetcode/1-500/combinations_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/39_combinations_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Combinations",permalink:"/docs/tags/combinations"}],version:"current",sidebarPosition:39,frontMatter:{title:"39. Combination Sum",sidebar_label:"39. Combination Sum",tags:["Leetcode Medium","Combinations"]},sidebar:"docSidebar",previous:{title:"36. Valid Sudoku",permalink:"/docs/leetcode/1-500/valid_sudoku"},next:{title:"42. Trapping Rain Water",permalink:"/docs/leetcode/1-500/trapping_rain_water"}},u=[{value:"Python",id:"python",children:[{value:"Recursive",id:"recursive",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/combination-sum/"},"https://leetcode.com/problems/combination-sum/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"recursive"},"Recursive"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remember seem combs with a tuple set")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.seem = set()\n\n    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:\n        return self._travel(candidates, target, [], [])\n\n    def _travel(self, cands, target, wip, combs):\n        total = sum(wip)\n        if total == target:\n            key = tuple(sorted(wip))\n            if key not in self.seem:\n                self.seem.add(key)\n                combs.append(wip)\n            return\n\n        if total > target:\n            return\n\n        for cand in cands:\n            self._travel(cands, target, wip+[cand], combs)\n        return combs\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var combinationSum = function(candidates, target) {\n  var result = [];\n  var backtrack = function(start, target, record = []) {\n    if (target === 0) {\n      result.push(record.slice(0))\n      return;\n    }\n    if (target < 0) return;\n\n    for (let i = start; i < candidates.length; i++) {\n      const reminder = target - candidates[i];\n      if (reminder >= 0) {\n        record.push(candidates[i]);\n        backtrack(i, reminder, record);\n        record.pop();\n      }\n    }\n  }\n\n  backtrack(0, target);\n  return result;\n};\n")))}d.isMDXComponent=!0}}]);