"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5830],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(t),p=o,_=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return t?r.createElement(_,c(c({ref:n},u),{},{components:t})):r.createElement(_,c({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31246:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={title:"1461. Check If a String Contains All Binary Codes of Size K",sidebar_label:"1461. Check If a String Contains All Binary Codes of Size K",tags:["Leetcode Medium","Bit Manipulation"]},s=void 0,l={unversionedId:"leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k",id:"leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k",title:"1461. Check If a String Contains All Binary Codes of Size K",description:"https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/",source:"@site/docs/leetcode/1001-1500/1461_check_a_string_contains_all_bin_codes_of_size_k.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k",permalink:"/docs/leetcode/1001-1500/check_a_string_contains_all_bin_codes_of_size_k",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1461_check_a_string_contains_all_bin_codes_of_size_k.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:1461,frontMatter:{title:"1461. Check If a String Contains All Binary Codes of Size K",sidebar_label:"1461. Check If a String Contains All Binary Codes of Size K",tags:["Leetcode Medium","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"1446. Consecutive Characters",permalink:"/docs/leetcode/1001-1500/consecutive_chars"},next:{title:"1480. Running Sum of 1d Array",permalink:"/docs/leetcode/1001-1500/running_sum_of_1d_array"}},u=[{value:"Python",id:"python",children:[],level:2}],d={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/"},"https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def hasAllCodes(self, s: str, k: int) -> bool:\n        num_k = 1 << k\n        codes = set()\n\n        for i in range(k, len(s)+1):\n            code = s[i-k:i]\n            if code not in codes:\n                codes.add(code)\n                num_k -= 1\n\n                if num_k == 0:\n                    return True\n        return False\n")))}f.isMDXComponent=!0}}]);