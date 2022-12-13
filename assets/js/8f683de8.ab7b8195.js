"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[51406],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),a=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=a(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=a(r),d=i,f=s["".concat(c,".").concat(d)]||s[d]||p[d]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[s]="string"==typeof e?e:i,l[1]=u;for(var a=2;a<o;a++)l[a]=r[a];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88617:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return a}});var n=r(83117),i=(r(67294),r(3905));const o={title:"923. 3Sum With Multiplicity",sidebar_label:"923. 3Sum With Multiplicity",tags:["Leetcode Medium","Two Pointer","Number Sum"]},l=void 0,u={unversionedId:"leetcode/501-1000/923_3sum_with_multiplicity",id:"leetcode/501-1000/923_3sum_with_multiplicity",title:"923. 3Sum With Multiplicity",description:"https://leetcode.com/problems/3sum-with-multiplicity/",source:"@site/docs/leetcode/501-1000/923_3sum_with_multiplicity.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/923_3sum_with_multiplicity",permalink:"/docs/leetcode/501-1000/923_3sum_with_multiplicity",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/923_3sum_with_multiplicity.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"},{label:"Number Sum",permalink:"/docs/tags/number-sum"}],version:"current",frontMatter:{title:"923. 3Sum With Multiplicity",sidebar_label:"923. 3Sum With Multiplicity",tags:["Leetcode Medium","Two Pointer","Number Sum"]},sidebar:"docSidebar",previous:{title:"997. Find the Town Judge",permalink:"/docs/leetcode/501-1000/find_the_town_judge"},next:{title:"1004. Max Consecutive Ones III",permalink:"/docs/leetcode/1001-1500/max_consecutive_ones_iii"}},c={},a=[{value:"Python",id:"python",level:2},{value:"Three Pointer",id:"three-pointer",level:3}],m={toc:a};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/3sum-with-multiplicity/"},"https://leetcode.com/problems/3sum-with-multiplicity/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"three-pointer"},"Three Pointer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def threeSumMulti(self, arr: List[int], target: int) -> int:\n        MOD = 10**9 + 7\n        arr.sort()\n        counter = 0\n\n        for l in range(len(arr)-2):\n            remains = target - arr[l]\n            m = l + 1\n            r = len(arr) - 1\n\n            while m < r:\n                if arr[m] + arr[r] < remains:\n                    m += 1\n                elif arr[m] + arr[r] > remains:\n                    r -= 1\n                else:\n                    if arr[m] != arr[r]:\n                        # Move over all of the same numbers from m\n                        left_count = 1\n                        while m + 1 < r and arr[m] == arr[m+1]:\n                            left_count += 1\n                            m += 1\n\n                        # Move over all of the same number from r\n                        right_count = 1\n                        while r - 1 > m and arr[r] == arr[r-1]:\n                            right_count += 1\n                            r -= 1\n\n                        # Possible numbers btw m and r are left_count * right_count\n                        counter += left_count * right_count\n                        counter %= MOD\n                        m += 1\n                        r -= 1\n                    else:\n                        # All number btw m and r are the same\n                        counter += (r-m+1) * (r-m) // 2\n                        counter %= MOD\n                        break\n\n        return counter\n")))}s.isMDXComponent=!0}}]);