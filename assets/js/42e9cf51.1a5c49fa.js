"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4743],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},a=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),f=u(n),p=i,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,s(s({ref:t},a),{},{components:n})):r.createElement(m,s({ref:t},a))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16538:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return a},default:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],c={title:"986. Interval List Intersections",sidebar_label:"986. Interval List Intersections",tags:["Leetcode Medium","Leetcode Fail Review"]},l=void 0,u={unversionedId:"leetcode/501-1000/interval_list_intersections",id:"leetcode/501-1000/interval_list_intersections",title:"986. Interval List Intersections",description:"Python",source:"@site/docs/leetcode/501-1000/986_interval_list_intersections.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/interval_list_intersections",permalink:"/docs/leetcode/501-1000/interval_list_intersections",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/986_interval_list_intersections.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Leetcode Fail Review",permalink:"/docs/tags/leetcode-fail-review"}],version:"current",sidebarPosition:986,frontMatter:{title:"986. Interval List Intersections",sidebar_label:"986. Interval List Intersections",tags:["Leetcode Medium","Leetcode Fail Review"]},sidebar:"docSidebar",previous:{title:"977. Squares of a Sorted Array",permalink:"/docs/leetcode/501-1000/squares_of_sorted_array"},next:{title:"997. Find the Town Judge",permalink:"/docs/leetcode/501-1000/find_the_town_judge"}},a=[{value:"Python",id:"python",children:[{value:"Time Exceed Try",id:"time-exceed-try",children:[],level:3}],level:2}],d={toc:a};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"time-exceed-try"},"Time Exceed Try"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def intervalIntersection(self, firstList: List[List[int]], secondList: List[List[int]]) -> List[List[int]]:\n        if not firstList or not secondList:\n            return []\n\n        results = []\n        result = []\n\n        uppbound = max(firstList[-1][1], secondList[-1][1])+1\n        lowerbound = min(firstList[0][0], secondList[0][0])\n        first_current = None\n        second_current = None\n\n        for num in range(lowerbound, uppbound):\n            if not first_current or num > first_current[1]:\n                if firstList:\n                    first_current = firstList.pop(0)\n                if result:\n                    results.append(result)\n                    result = []\n\n            if not second_current or num > second_current[1]:\n                if secondList:\n                    second_current = secondList.pop(0)\n                if result:\n                    results.append(result)\n                    result = []\n\n            first_enabled = (num >= first_current[0] and num <= first_current[1])\n            second_enabled = (num >= second_current[0] and num <= second_current[1])\n\n            if first_enabled and second_enabled:\n                if not result:\n                    result = [num, num]\n                else:\n                    result[1] = num\n\n            if (not first_enabled or not second_enabled) and result:\n                results.append(result)\n                result = []\n\n\n        if result:\n            results.append(result)\n\n        return results\n")))}f.isMDXComponent=!0}}]);