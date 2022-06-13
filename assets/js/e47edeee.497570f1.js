"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1116],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||a;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},53333:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={title:"456. 132 Pattern",sidebar_label:"456. 132 Pattern",tags:["Leetcode Medium","Prefix Sum","Stack"]},c=void 0,u={unversionedId:"leetcode/1-500/p132_pattern",id:"leetcode/1-500/p132_pattern",title:"456. 132 Pattern",description:"https://leetcode.com/problems/132-pattern/",source:"@site/docs/leetcode/1-500/456_p132_pattern.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/p132_pattern",permalink:"/docs/leetcode/1-500/p132_pattern",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/456_p132_pattern.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Prefix Sum",permalink:"/docs/tags/prefix-sum"},{label:"Stack",permalink:"/docs/tags/stack"}],version:"current",sidebarPosition:456,frontMatter:{title:"456. 132 Pattern",sidebar_label:"456. 132 Pattern",tags:["Leetcode Medium","Prefix Sum","Stack"]},sidebar:"docSidebar",previous:{title:"452. Minimum Number of Arrows to Burst Balloons",permalink:"/docs/leetcode/1-500/min_arrow_bust_balloons"},next:{title:"461. Hamming Distance",permalink:"/docs/leetcode/1-500/hamming_distance"}},m=[{value:"Python",id:"python",children:[{value:"Brute Force (Timelimit Exceed)",id:"brute-force-timelimit-exceed",children:[],level:3},{value:"Brute Force - Remeber Min i (Timelimit Exceed)",id:"brute-force---remeber-min-i-timelimit-exceed",children:[],level:3},{value:"Prefix Sum (Min) with stack",id:"prefix-sum-min-with-stack",children:[],level:3}],level:2}],s={toc:m};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/132-pattern/"},"https://leetcode.com/problems/132-pattern/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"brute-force-timelimit-exceed"},"Brute Force (Timelimit Exceed)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(n^3)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def find132pattern(self, nums: List[int]) -> bool:\n        n = len(nums)\n\n        if n < 3:\n            return False\n\n        for i in range(n-1):\n            for j in range(i+1, n-1):\n                if nums[i] > nums[j]:\n                    continue\n                for k in range(j+1, n):\n                    if nums[i] < nums[k] and nums[k] < nums[j]:\n                        return True\n\n        return False\n")),(0,a.kt)("h3",{id:"brute-force---remeber-min-i-timelimit-exceed"},"Brute Force - Remeber Min i (Timelimit Exceed)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(n^2)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import math\n\n\nclass Solution:\n    def find132pattern(self, nums: List[int]) -> bool:\n        n = len(nums)\n\n        if n < 3:\n            return False\n\n        min_i = math.inf\n        for j in range(n-1):\n            min_i = min(min_i, nums[j])\n            for k in range(j+1, n):\n                if min_i < nums[k] < nums[j]:\n                    return True\n\n        return False\n")),(0,a.kt)("h3",{id:"prefix-sum-min-with-stack"},"Prefix Sum (Min) with stack"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Time: O(n)"),(0,a.kt)("li",{parentName:"ul"},"Space: O(n)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def find132pattern(self, nums: List[int]) -> bool:\n        n = len(nums)\n\n        if n < 3:\n            return False\n\n        prefix_min = [nums[0]]\n        for i in range(1, n):\n            prefix_min.append(min(prefix_min[-1], nums[i]))\n\n        stack = []\n        for j in range(n-1, -1, -1):\n            if nums[j] <= prefix_min[j]:\n                continue\n\n            while stack and stack[-1] <= prefix_min[j]:\n                stack.pop()\n\n            if stack and stack[-1] < nums[j]:\n                return True\n\n            stack.append(nums[j])\n\n        return False\n")))}p.isMDXComponent=!0}}]);