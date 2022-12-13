"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[80828],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,f=d["".concat(a,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const i={title:"658. Find K Closest Elements",sidebar_label:"658. Find K Closest Elements",tags:["Leetcode Medium","Sort","Binary Search"]},l=void 0,s={unversionedId:"leetcode/501-1000/find_k_closest_elements",id:"leetcode/501-1000/find_k_closest_elements",title:"658. Find K Closest Elements",description:"https://leetcode.com/problems/find-k-closest-elements/",source:"@site/docs/leetcode/501-1000/658_find_k_closest_elements.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/find_k_closest_elements",permalink:"/docs/leetcode/501-1000/find_k_closest_elements",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/658_find_k_closest_elements.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Sort",permalink:"/docs/tags/sort"},{label:"Binary Search",permalink:"/docs/tags/binary-search"}],version:"current",sidebarPosition:658,frontMatter:{title:"658. Find K Closest Elements",sidebar_label:"658. Find K Closest Elements",tags:["Leetcode Medium","Sort","Binary Search"]},sidebar:"docSidebar",previous:{title:"654. Maximum Binary Tree",permalink:"/docs/leetcode/501-1000/max_binary_tree"},next:{title:"659. Split Array into Consecutive Subsequences",permalink:"/docs/leetcode/501-1000/split_array_into_consecutive_subsequences"}},a={},c=[{value:"Python",id:"python",level:2},{value:"Custom Sort",id:"custom-sort",level:3},{value:"Binary Search",id:"binary-search",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/find-k-closest-elements/"},"https://leetcode.com/problems/find-k-closest-elements/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"custom-sort"},"Custom Sort"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5229\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"abs(x-num)"),"\u6703\u627e\u51fa\u8207x\u7684\u8ddd\u96e2\u7684\u7279\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:\n        nums = sorted(arr, key=lambda num: abs(x-num))\n        return sorted(nums[:k]) # Sort it back to ascending order\n")),(0,o.kt)("h3",{id:"binary-search"},"Binary Search"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b98\u65b9solution\uff0c\u5f88\u6709\u8da3\u7684\u505a\u6cd5"),(0,o.kt)("li",{parentName:"ul"},"\u6539\u8b8aBinary search\u7684\u53f3\u754c\uff0c\u85c9\u4ee5\u9650\u5236\u5176\u627e\u51fa\u4f86\u7684\u5de6\u754c\u4e0d\u6703\u9020\u6210\u53f3\u754c\u51f8\u51fa\u53bb")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:\n        left, right = 0, len(arr)-k\n\n        while left < right:\n            pivot = (left+right) >> 1\n            if x-arr[pivot] > arr[pivot+k]-x:\n                left = pivot + 1\n            else:\n                right = pivot\n\n        return arr[left:left+k]\n")))}d.isMDXComponent=!0}}]);