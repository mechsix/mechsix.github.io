"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6846],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,f=m["".concat(c,".").concat(p)]||m[p]||s[p]||l;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12239:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=t(87462),o=t(63366),l=(t(67294),t(3905)),a=["components"],i={title:"740. Delete and Earn",sidebar_label:"740. Delete and Earn",tags:["Leetcode Medium","DP"]},c=void 0,u={unversionedId:"leetcode/501-1000/delete_and_earn",id:"leetcode/501-1000/delete_and_earn",title:"740. Delete and Earn",description:"https://leetcode.com/problems/delete-and-earn/",source:"@site/docs/leetcode/501-1000/740_delete_and_earn.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/delete_and_earn",permalink:"/docs/leetcode/501-1000/delete_and_earn",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/740_delete_and_earn.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:740,frontMatter:{title:"740. Delete and Earn",sidebar_label:"740. Delete and Earn",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"739. Daily Temperatures",permalink:"/docs/leetcode/501-1000/daily_temperatures"},next:{title:"743. Network Delay Time",permalink:"/docs/leetcode/501-1000/network_delay_time"}},d=[{value:"Python",id:"python",children:[{value:"DP with decreasing tuple (Time Limit Exceed)",id:"dp-with-decreasing-tuple-time-limit-exceed",children:[],level:3},{value:"Top-Down DP",id:"top-down-dp",children:[],level:3}],level:2}],s={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/delete-and-earn/"},"https://leetcode.com/problems/delete-and-earn/")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("h3",{id:"dp-with-decreasing-tuple-time-limit-exceed"},"DP with decreasing tuple (Time Limit Exceed)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def deleteAndEarn(self, nums: List[int]) -> int:\n        result = self.travel(tuple(nums))\n        return result\n\n    @cache\n    def travel(self, nums):\n        if not nums:\n            return 0\n\n        result = 0\n        for i in range(len(nums)):\n            pick_num = nums[i]\n            rest = [num for num in nums[:i]+nums[i+1:] if num != pick_num+1 and num != pick_num-1]\n            result = max(result, self.travel(tuple(rest))+pick_num)\n\n        return result\n")),(0,l.kt)("h3",{id:"top-down-dp"},"Top-Down DP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Official Solution")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\nfrom functools import cache\n\n\nclass Solution:\n    def deleteAndEarn(self, nums: List[int]) -> int:\n        counts = Counter(nums)\n        max_num = max(counts.keys())\n\n        @cache\n        def travel(num):\n            if num == 0:\n                return 0\n            if num == 1:\n                return counts[1]\n\n            return max(\n                travel(num-1),\n                travel(num-2)+num*counts[num]\n            )\n        return travel(max_num)\n")))}m.isMDXComponent=!0}}]);