"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37037],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),a=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=a(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=a(t),d=i,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||s;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var a=2;a<s;a++)l[a]=t[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},49717:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return m}});var r=t(87462),i=t(63366),s=(t(67294),t(3905)),l=["components"],o={title:"15. 3Sum",sidebar_label:"15. 3Sum",tags:["Leetcode Medium","Number Sum","Prefix Sum","Two Pointer"]},u=void 0,a={unversionedId:"leetcode/1-500/three_sum",id:"leetcode/1-500/three_sum",title:"15. 3Sum",description:"https://leetcode.com/problems/3sum",source:"@site/docs/leetcode/1-500/15_three_sum.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/three_sum",permalink:"/docs/leetcode/1-500/three_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/15_three_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Number Sum",permalink:"/docs/tags/number-sum"},{label:"Prefix Sum",permalink:"/docs/tags/prefix-sum"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:15,frontMatter:{title:"15. 3Sum",sidebar_label:"15. 3Sum",tags:["Leetcode Medium","Number Sum","Prefix Sum","Two Pointer"]},sidebar:"docSidebar",previous:{title:"14. Longest Common Prefix",permalink:"/docs/leetcode/1-500/longest_common_prefix"},next:{title:"16. 3Sum Closest",permalink:"/docs/leetcode/1-500/three_sum_closest"}},m=[{value:"Python",id:"python",children:[{value:"Three Pointers",id:"three-pointers",children:[],level:3},{value:"Brute Force (Timelimit Exceed)",id:"brute-force-timelimit-exceed",children:[],level:3},{value:"Prefix Sum",id:"prefix-sum",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],c={toc:m};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/3sum"},"https://leetcode.com/problems/3sum")),(0,s.kt)("h2",{id:"python"},"Python"),(0,s.kt)("h3",{id:"three-pointers"},"Three Pointers"),(0,s.kt)("p",null,"\u5927\u6982\u5c31\u662fTwo Pointer\u7684Two Pointer\uff0c\u5148\u6392\u5e8f\u904e\u518d\u7528\u4e09\u500b\u6307\u6a19\u8d70\u8a2a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"L: \u5de6\u754c"),(0,s.kt)("li",{parentName:"ul"},"M: \u5f9eL+1\u79fb\u52d5\u5230R-1"),(0,s.kt)("li",{parentName:"ul"},"R: \u53f3\u754c\uff0c\u7bc4\u570d\u5167\u7684\u6700\u5927\u503c")),(0,s.kt)("p",null,"\u6392\u5e8f\u904e\uff0c\u6240\u4ee5\u53ef\u4ee5\u5229\u7528\u7576\u4e0b\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"total"),"\u5927\u65bc\u5c0f\u65bc0\u7684\u95dc\u4fc2\uff0c\u6c7a\u5b9a\u8981\u79fb\u52d5\u54ea\u4e00\u500bpointer (m or r)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Origin Version which prevent duplicate via set(tuple)"',title:'"Origin',Version:!0,which:!0,prevent:!0,duplicate:!0,via:!0,'set(tuple)"':!0},"class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        if len(nums) < 3:\n            return []\n\n        nums.sort()\n        result = set()\n\n        for l in range(0, len(nums)-2):\n            m = l + 1\n            r = len(nums)-1\n\n            while m < r:\n                total = sum([nums[l], nums[m], nums[r]])\n\n                if total == 0:\n                    result.add((nums[l], nums[m], nums[r]))\n                    # Move m, r at the same time is ok, because the l has its own loop\n                    m += 1\n                    r -= 1\n                elif total < 0:\n                    # Total too small, increase it from increment the cur (the m)\n                    m += 1\n                else:\n                    # Total too large, reduce it from decreasing the upbound\n                    r -= 1\n\n        return list(result)\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Skip duplicate values with result in array"',title:'"Skip',duplicate:!0,values:!0,with:!0,result:!0,in:!0,'array"':!0},"class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        if len(nums) < 3:\n            return []\n\n        nums.sort()\n        result = []\n\n        for l in range(0, len(nums)-2):\n            if l > 0 and nums[l] == nums[l-1]:\n                continue\n\n            m = l + 1\n            r = len(nums)-1\n\n            while m < r:\n                if m > l+1 and nums[m] == nums[m-1]:\n                    m += 1\n                    continue\n\n                total = sum([nums[l], nums[m], nums[r]])\n\n                if total == 0:\n                    result.append([nums[l], nums[m], nums[r]])\n                    m += 1\n                    r -= 1\n                elif total < 0:\n                    m += 1\n                else:\n                    r -= 1\n\n        return result\n")),(0,s.kt)("h3",{id:"brute-force-timelimit-exceed"},"Brute Force (Timelimit Exceed)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from itertools import combinations\n\n\nclass Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        if len(nums) < 3:\n            return []\n\n        combs = set()\n        for comb in combinations(nums, r=3):\n            combs.add(tuple(sorted(comb)))\n\n\n        return [comb for comb in combs if sum(comb) == 0]\n")),(0,s.kt)("h3",{id:"prefix-sum"},"Prefix Sum"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"No-Sort solution"),(0,s.kt)("li",{parentName:"ul"},"Idea of ",(0,s.kt)("inlineCode",{parentName:"li"},"seen")," hashmap is pre-calcualted memory, which like prefix-sum")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def threeSum(self, nums: List[int]) -> List[List[int]]:\n        if len(nums) < 3:\n            return []\n\n        result = set()\n        duplicates = set() # Prevent edge case, e.g. 3000 zerons\n        seen = dict()  # key: remains to 0; value: index\n\n        for i, first in enumerate(nums):\n            if first in duplicates:\n                continue\n\n            duplicates.add(first)\n            for j, second in enumerate(nums[i+1:]):\n                remains = 0 - (first + second)\n                if seen.get(remains) == i:\n                    result.add(tuple(sorted([first, second, remains])))\n                seen[second] = i\n        return result\n")),(0,s.kt)("h2",{id:"javascript"},"Javascript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"var threeSum = function(nums = []) {\n  const sortedNums = [...nums].sort((a, b) => a - b);\n  let result = []\n\n  for (let i = 0; i < sortedNums.length; i++) {\n    if (sortedNums[i - 1] !== sortedNums[i]) {\n      const target = sortedNums[i];\n      console.log(target, i+ 1, sortedNums.length - 1)\n      const res = calc(-target, i + 1, sortedNums.length - 1, sortedNums);\n      if (res.length) result = result.concat(res);\n    }\n    }\n  return result;\n};\n\nconst calc = (target, left, right, nums) => {\n  const res = [];\n\n    while (left < right) {\n        if (target === nums[left] + nums[right]) {\n            res.push([-target, nums[left++], nums[right--]]);\n      while(left < right && nums[left - 1] === nums[left]) {\n        left++;\n      }\n        } else if (target > nums[left] + nums[right]) {\n            left++;\n        } else {\n            right--;\n        }\n    }\n\n    return res;\n}\n")))}p.isMDXComponent=!0}}]);