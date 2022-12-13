"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[80216],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41683:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(83117),o=(t(67294),t(3905));const i={title:"1680. Concatenation of Consecutive Binary Numbers",sidebar_label:"1680. Concatenation of Consecutive Binary Numbers",tags:["Leetcode Medium","Bit Manipulation"]},a=void 0,c={unversionedId:"leetcode/1501-2000/concatenation_of_consecutive_bin_nums",id:"leetcode/1501-2000/concatenation_of_consecutive_bin_nums",title:"1680. Concatenation of Consecutive Binary Numbers",description:"https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/",source:"@site/docs/leetcode/1501-2000/1680_concatenation_of_consecutive_bin_nums.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/concatenation_of_consecutive_bin_nums",permalink:"/docs/leetcode/1501-2000/concatenation_of_consecutive_bin_nums",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1680_concatenation_of_consecutive_bin_nums.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:1680,frontMatter:{title:"1680. Concatenation of Consecutive Binary Numbers",sidebar_label:"1680. Concatenation of Consecutive Binary Numbers",tags:["Leetcode Medium","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"1679. Max Number of K-Sum Pairs",permalink:"/docs/leetcode/1501-2000/max_num_of_k_sum_pairs"},next:{title:"1689. Partitioning Into Minimum Number Of Deci-Binary Numbers",permalink:"/docs/leetcode/1501-2000/partitioning_into_min_num_of_deci_binary_nums"}},u={},s=[{value:"Python",id:"python",level:2}],l={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/"},"https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u76f4\u89ba\u7684\u5beb\u6cd5\uff0c\u4f46\u5c31run\u7684\u904e\u4e86...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Time: O(N) # \u8ff4\u5708\u8981\u5f9e1\u8dd1\u5230N")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Space: O(1)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def concatenatedBinary(self, n: int) -> int:\n        mod = 10**9+7\n        ans = 1\n        for i in range(2, n+1):\n            bins = str(bin(i))[2:]\n            ans <<= len(bins)\n            ans += i\n            ans %= mod\n\n        return ans\n")))}m.isMDXComponent=!0}}]);