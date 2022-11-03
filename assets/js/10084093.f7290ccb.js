"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[80929],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),m=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=m(t),f=o,d=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var m=2;m<i;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},20108:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return s}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],u={title:"1679. Max Number of K-Sum Pairs",sidebar_label:"1679. Max Number of K-Sum Pairs",tags:["Leetcode Medium","Prefix Sum"]},c=void 0,m={unversionedId:"leetcode/1501-2000/max_num_of_k_sum_pairs",id:"leetcode/1501-2000/max_num_of_k_sum_pairs",title:"1679. Max Number of K-Sum Pairs",description:"https://leetcode.com/problems/max-number-of-k-sum-pairs/",source:"@site/docs/leetcode/1501-2000/1679_max_num_of_k_sum_pairs.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/max_num_of_k_sum_pairs",permalink:"/docs/leetcode/1501-2000/max_num_of_k_sum_pairs",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1679_max_num_of_k_sum_pairs.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Prefix Sum",permalink:"/docs/tags/prefix-sum"}],version:"current",sidebarPosition:1679,frontMatter:{title:"1679. Max Number of K-Sum Pairs",sidebar_label:"1679. Max Number of K-Sum Pairs",tags:["Leetcode Medium","Prefix Sum"]},sidebar:"docSidebar",previous:{title:"1672. Richest Customer Wealth",permalink:"/docs/leetcode/1501-2000/richest_customer_wealth"},next:{title:"1680. Concatenation of Consecutive Binary Numbers",permalink:"/docs/leetcode/1501-2000/concatenation_of_consecutive_bin_nums"}},s=[{value:"Python",id:"python",children:[{value:"Prefix Sum",id:"prefix-sum",children:[],level:3}],level:2}],l={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/max-number-of-k-sum-pairs/"},"https://leetcode.com/problems/max-number-of-k-sum-pairs/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"prefix-sum"},"Prefix Sum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\nclass Solution:\n    def maxOperations(self, nums: List[int], k: int) -> int:\n        if len(nums) < 2:\n            return 0\n\n        mapper = defaultdict(int)\n        for i, num in enumerate(nums):\n            mapper[num] += 1\n\n        used = set()\n        ans = 0\n        for num, count in mapper.items():\n            if num in used:\n                continue\n\n            remains = k - num\n            if remains == num:\n                ans += count // 2\n                used.add(num)\n            elif remains in mapper:\n                ans += min(count, mapper[remains])\n                used.add(remains)\n\n        return ans\n")))}p.isMDXComponent=!0}}]);