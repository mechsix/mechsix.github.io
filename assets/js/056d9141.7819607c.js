"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4922],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13569:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"739. Daily Temperatures",sidebar_label:"739. Daily Temperatures"},u=void 0,l={unversionedId:"leetcode/daily_temperatures",id:"leetcode/daily_temperatures",isDocsHomePage:!1,title:"739. Daily Temperatures",description:"Python",source:"@site/docs/leetcode/739_daily_temperatures.md",sourceDirName:"leetcode",slug:"/leetcode/daily_temperatures",permalink:"/docs/leetcode/daily_temperatures",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/739_daily_temperatures.md",tags:[],version:"current",sidebarPosition:739,frontMatter:{title:"739. Daily Temperatures",sidebar_label:"739. Daily Temperatures"},sidebar:"tutorialSidebar",previous:{title:"441. Arranging Coins",permalink:"/docs/leetcode/arranging_coins"},next:{title:"1413. Mini Value to Possitive Sum",permalink:"/docs/leetcode/min_value_get_positive_sum"}},c=[{value:"Python",id:"python",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h4",{id:"first-try-liter-days-time-limit-exceeded"},"First Try: Liter days (Time Limit Exceeded)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def dailyTemperatures(self, T: List[int]) -> List[int]:\n        answer = [0] * len(T)\n        len_t = len(T)\n\n        for index, t in enumerate(T):\n            futures = T[index+1:]\n\n            for future_t in futures:\n                answer[index] += 1\n                if future_t > t:\n                    break\n            else:\n                answer[index] = 0\n\n        return answer\n\n")),(0,i.kt)("h4",{id:"second-try-liter-possible-tempatures-time-limit-exceeded"},"Second Try: Liter possible tempatures (Time Limit Exceeded)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def dailyTemperatures(self, T: List[int]) -> List[int]:\n        temps_map = defaultdict(list)\n        answer = []\n\n        for day, temp in enumerate(T):\n            temps_map[temp].append(day)\n\n        for day, temp in enumerate(T):\n            larger_future_temp_days = []\n            for temp_key in [key for key in temps_map.keys() if key > temp]:\n                larger_future_temp_days += [future_day for future_day in temps_map[temp_key] if future_day > day]\n\n            answer.append(min(larger_future_temp_days)-day if larger_future_temp_days else 0)\n\n        return answer\n")),(0,i.kt)("h4",{id:"third-time-use-stack-to-store-only-the-days-which-matters-pass"},"Third time: Use stack to store only the days which matters (Pass)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def dailyTemperatures(self, T: List[int]) -> List[int]:\n        stack = []\n        N = len(T)\n        answer = [0] * N\n        for day in range(N):\n            while stack and stack[-1][1] < T[day]:\n                key, val = stack.pop()\n                answer[key] = day - key\n            stack.append((day, T[day]))\n        return answer\n\n")))}d.isMDXComponent=!0}}]);