"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[12572],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(r),p=a,y=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},57498:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=(r(67294),r(3905));const o={title:"1491. Average Salary Excluding the Minimum and Maximum Salary",sidebar_label:"1491. Average Salary Excluding the Minimum and Maximum Salary",tags:["Leetcode Easy","Sort"]},i=void 0,l={unversionedId:"leetcode/1001-1500/avg_salary_excluding_min_and_max",id:"leetcode/1001-1500/avg_salary_excluding_min_and_max",title:"1491. Average Salary Excluding the Minimum and Maximum Salary",description:"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/",source:"@site/docs/leetcode/1001-1500/1491_avg_salary_excluding_min_and_max.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/avg_salary_excluding_min_and_max",permalink:"/docs/leetcode/1001-1500/avg_salary_excluding_min_and_max",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1491_avg_salary_excluding_min_and_max.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Sort",permalink:"/docs/tags/sort"}],version:"current",sidebarPosition:1491,frontMatter:{title:"1491. Average Salary Excluding the Minimum and Maximum Salary",sidebar_label:"1491. Average Salary Excluding the Minimum and Maximum Salary",tags:["Leetcode Easy","Sort"]},sidebar:"docSidebar",previous:{title:"1480. Running Sum of 1d Array",permalink:"/docs/leetcode/1001-1500/running_sum_of_1d_array"},next:{title:"1493. Longest Subarray of 1's After Deleting One Element",permalink:"/docs/leetcode/1001-1500/longest_subarray_of_1s_after_deleting_one_element"}},c={},u=[{value:"Python",id:"python",level:2}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/"},"https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def average(self, salary: List[int]) -> float:\n        salary.sort()\n        return sum(salary[1:-1]) / (len(salary)-2)\n")))}m.isMDXComponent=!0}}]);