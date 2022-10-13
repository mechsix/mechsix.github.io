"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[16010],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3711:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"647. Palindromic Substrings",sidebar_label:"647. Palindromic Substrings",tags:["Leetcode Medium","DP","TODO"]},c=void 0,l={unversionedId:"leetcode/501-1000/palindromic_substrings",id:"leetcode/501-1000/palindromic_substrings",title:"647. Palindromic Substrings",description:"https://leetcode.com/problems/palindromic-substrings/",source:"@site/docs/leetcode/501-1000/647_palindromic_substrings.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/palindromic_substrings",permalink:"/docs/leetcode/501-1000/palindromic_substrings",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/647_palindromic_substrings.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:647,frontMatter:{title:"647. Palindromic Substrings",sidebar_label:"647. Palindromic Substrings",tags:["Leetcode Medium","DP","TODO"]},sidebar:"docSidebar",previous:{title:"637. Average of Levels in Binary Tree",permalink:"/docs/leetcode/501-1000/average_of_levels_in_binary_tree"},next:{title:"652. Find Duplicate Subtrees",permalink:"/docs/leetcode/501-1000/find_duplicate_subtrees"}},u=[{value:"Python",id:"python",children:[{value:"Bottom-Up DP",id:"bottom-up-dp",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/palindromic-substrings/"},"https://leetcode.com/problems/palindromic-substrings/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"bottom-up-dp"},"Bottom-Up DP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def countSubstrings(self, s: str) -> int:\n        n = len(s)\n\n\n        dp = [[0]*n for _ in range(n)]\n        result = 0\n\n        # Initial of DP matrix, with diagonal has value 1\n        # Since every single character is a palindromic substring\n        #  a a a\n        #a 1 0 0\n        #a 0 1 0\n        #a 0 0 1\n        for i in range(n):\n            dp[i][i] = 1\n            result += 1\n\n        # If the neighbor char is the same to self,\n        # the pair of neighbor is a palindromic substring\n        for i in range(n-1):\n            if s[i] == s[i+1]:\n                dp[i][i+1] = 1\n                result += 1\n\n        for length in range(3, n+1):\n            for i in range(n-length+1):\n                j = i+length-1\n                if dp[i+1][j-1] and s[i] == s[j]:\n                    dp[i][j] = 1\n                    result += 1\n\n        return result\n")))}d.isMDXComponent=!0}}]);