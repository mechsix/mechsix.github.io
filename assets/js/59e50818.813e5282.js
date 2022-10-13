"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[10589],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,y=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},76041:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={title:"739. Daily Temperatures",sidebar_label:"739. Daily Temperatures",tags:["Leetcode Medium"]},l=void 0,d={unversionedId:"leetcode/501-1000/daily_temperatures",id:"leetcode/501-1000/daily_temperatures",title:"739. Daily Temperatures",description:"Python",source:"@site/docs/leetcode/501-1000/739_daily_temperatures.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/daily_temperatures",permalink:"/docs/leetcode/501-1000/daily_temperatures",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/739_daily_temperatures.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:739,frontMatter:{title:"739. Daily Temperatures",sidebar_label:"739. Daily Temperatures",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"733. Flood Fill",permalink:"/docs/leetcode/501-1000/flood_fill"},next:{title:"740. Delete and Earn",permalink:"/docs/leetcode/501-1000/delete_and_earn"}},c=[{value:"Python",id:"python",children:[{value:"First Try: Liter days (Time Limit Exceeded)",id:"first-try-liter-days-time-limit-exceeded",children:[],level:4},{value:"Second Try: Liter possible tempatures (Time Limit Exceeded)",id:"second-try-liter-possible-tempatures-time-limit-exceeded",children:[],level:4},{value:"Third time: Use stack to store only the days which matters (Pass)",id:"third-time-use-stack-to-store-only-the-days-which-matters-pass",children:[],level:4}],level:2}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h4",{id:"first-try-liter-days-time-limit-exceeded"},"First Try: Liter days (Time Limit Exceeded)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def dailyTemperatures(self, T: List[int]) -> List[int]:\n        answer = [0] * len(T)\n        len_t = len(T)\n\n        for index, t in enumerate(T):\n            futures = T[index+1:]\n\n            for future_t in futures:\n                answer[index] += 1\n                if future_t > t:\n                    break\n            else:\n                answer[index] = 0\n\n        return answer\n\n")),(0,i.kt)("h4",{id:"second-try-liter-possible-tempatures-time-limit-exceeded"},"Second Try: Liter possible tempatures (Time Limit Exceeded)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def dailyTemperatures(self, T: List[int]) -> List[int]:\n        temps_map = defaultdict(list)\n        answer = []\n\n        for day, temp in enumerate(T):\n            temps_map[temp].append(day)\n\n        for day, temp in enumerate(T):\n            larger_future_temp_days = []\n            for temp_key in [key for key in temps_map.keys() if key > temp]:\n                larger_future_temp_days += [future_day for future_day in temps_map[temp_key] if future_day > day]\n\n            answer.append(min(larger_future_temp_days)-day if larger_future_temp_days else 0)\n\n        return answer\n")),(0,i.kt)("h4",{id:"third-time-use-stack-to-store-only-the-days-which-matters-pass"},"Third time: Use stack to store only the days which matters (Pass)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def dailyTemperatures(self, T: List[int]) -> List[int]:\n        stack = []\n        N = len(T)\n        answer = [0] * N\n        for day in range(N):\n            while stack and stack[-1][1] < T[day]:\n                key, val = stack.pop()\n                answer[key] = day - key\n            stack.append((day, T[day]))\n        return answer\n\n")))}p.isMDXComponent=!0}}]);