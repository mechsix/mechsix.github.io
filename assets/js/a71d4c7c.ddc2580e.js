"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[26846],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},12239:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var r=t(83117),o=(t(67294),t(3905));const a={title:"740. Delete and Earn",sidebar_label:"740. Delete and Earn",tags:["Leetcode Medium","DP"]},l=void 0,i={unversionedId:"leetcode/501-1000/delete_and_earn",id:"leetcode/501-1000/delete_and_earn",title:"740. Delete and Earn",description:"https://leetcode.com/problems/delete-and-earn/",source:"@site/docs/leetcode/501-1000/740_delete_and_earn.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/delete_and_earn",permalink:"/docs/leetcode/501-1000/delete_and_earn",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/740_delete_and_earn.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:740,frontMatter:{title:"740. Delete and Earn",sidebar_label:"740. Delete and Earn",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"739. Daily Temperatures",permalink:"/docs/leetcode/501-1000/daily_temperatures"},next:{title:"743. Network Delay Time",permalink:"/docs/leetcode/501-1000/network_delay_time"}},u={},c=[{value:"Python",id:"python",level:2},{value:"DP with decreasing tuple (Time Limit Exceed)",id:"dp-with-decreasing-tuple-time-limit-exceed",level:3},{value:"Top-Down DP",id:"top-down-dp",level:3}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/delete-and-earn/"},"https://leetcode.com/problems/delete-and-earn/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"dp-with-decreasing-tuple-time-limit-exceed"},"DP with decreasing tuple (Time Limit Exceed)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def deleteAndEarn(self, nums: List[int]) -> int:\n        result = self.travel(tuple(nums))\n        return result\n\n    @cache\n    def travel(self, nums):\n        if not nums:\n            return 0\n\n        result = 0\n        for i in range(len(nums)):\n            pick_num = nums[i]\n            rest = [num for num in nums[:i]+nums[i+1:] if num != pick_num+1 and num != pick_num-1]\n            result = max(result, self.travel(tuple(rest))+pick_num)\n\n        return result\n")),(0,o.kt)("h3",{id:"top-down-dp"},"Top-Down DP"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Official Solution")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\nfrom functools import cache\n\n\nclass Solution:\n    def deleteAndEarn(self, nums: List[int]) -> int:\n        counts = Counter(nums)\n        max_num = max(counts.keys())\n\n        @cache\n        def travel(num):\n            if num == 0:\n                return 0\n            if num == 1:\n                return counts[1]\n\n            return max(\n                travel(num-1),\n                travel(num-2)+num*counts[num]\n            )\n        return travel(max_num)\n")))}d.isMDXComponent=!0}}]);