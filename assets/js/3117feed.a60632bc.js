"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9128],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},74915:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],u={title:"1911. Maximum Alternating Subsequence Sum",sidebar_label:"1911. Maximum Alternating Subsequence Sum",tags:["Leetcode Medium","DP"]},s=void 0,c={unversionedId:"leetcode/1501-2000/maximum_alternating_subsequence_sum",id:"leetcode/1501-2000/maximum_alternating_subsequence_sum",title:"1911. Maximum Alternating Subsequence Sum",description:"https://leetcode.com/problems/maximum-alternating-subsequence-sum/",source:"@site/docs/leetcode/1501-2000/1911_maximum_alternating_subsequence_sum.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/maximum_alternating_subsequence_sum",permalink:"/docs/leetcode/1501-2000/maximum_alternating_subsequence_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1911_maximum_alternating_subsequence_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:1911,frontMatter:{title:"1911. Maximum Alternating Subsequence Sum",sidebar_label:"1911. Maximum Alternating Subsequence Sum",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"1823. Find the Winner of the Circular Game",permalink:"/docs/leetcode/1501-2000/find_winner_of_circular_game"},next:{title:"React with NX",permalink:"/docs/react/nx-react"}},l=[{value:"Python",id:"python",children:[{value:"Bottom Up DP",id:"bottom-up-dp",children:[],level:3},{value:"Top Down DP",id:"top-down-dp",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],m={toc:l};function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-alternating-subsequence-sum/"},"https://leetcode.com/problems/maximum-alternating-subsequence-sum/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"bottom-up-dp"},"Bottom Up DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def maxAlternatingSum(self, nums: List[int]) -> int:\n        dp_odd = [0]\n        dp_even = [0]\n\n        for num in nums:\n            dp_odd.append( max(dp_odd[-1],  dp_even[-1]+num))\n            dp_even.append(max(dp_even[-1], dp_odd[-1]-num ))\n\n        return max(dp_even[-1], dp_odd[-1])\n")),(0,o.kt)("h3",{id:"top-down-dp"},"Top Down DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\n\nclass Solution:\n    def maxAlternatingSum(self, nums: List[int]) -> int:\n        @cache\n        def dp(i: int, is_choosed: bool):\n            if i == len(nums):\n                return 0\n\n            num = nums[i] if is_choosed else -nums[i]\n\n            total_choosed = num + dp(i+1, not is_choosed)\n            total_skipped = dp(i+1, is_choosed)\n\n            return max(total_choosed, total_skipped)\n\n        return dp(0, True)\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var maxAlternatingSum = function(nums) {\n    let isUp = false;\n    let ans = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (isUp && nums[i] < nums[i + 1]) {\n            ans -= nums[i]\n            isUp = false\n        } else if (!isUp && nums[i] > nums[i + 1]) {\n            ans += nums[i]\n            isUp = true;\n        }\n        // console.log(ans)\n    }\n    if (!isUp) ans += nums[nums.length - 1];\n    return ans;\n};\n")))}p.isMDXComponent=!0}}]);