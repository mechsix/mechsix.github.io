"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[67565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const i={title:"516. Longest Palindromic Subsequence",sidebar_label:"516. Longest Palindromic Subsequence",tags:["Leetcode Medium","DP"]},c=void 0,a={unversionedId:"leetcode/501-1000/longest_palindromic\u2013subsequence",id:"leetcode/501-1000/longest_palindromic\u2013subsequence",title:"516. Longest Palindromic Subsequence",description:"https://leetcode.com/problems/longest-palindromic-subsequence/",source:"@site/docs/leetcode/501-1000/516_longest_palindromic\u2013subsequence.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/longest_palindromic\u2013subsequence",permalink:"/docs/leetcode/501-1000/longest_palindromic\u2013subsequence",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/516_longest_palindromic\u2013subsequence.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:516,frontMatter:{title:"516. Longest Palindromic Subsequence",sidebar_label:"516. Longest Palindromic Subsequence",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"509. Fibonacci Number",permalink:"/docs/leetcode/501-1000/fibonacci_number"},next:{title:"518. Coin Change 2",permalink:"/docs/leetcode/501-1000/coin_change2"}},s={},l=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-palindromic-subsequence/"},"https://leetcode.com/problems/longest-palindromic-subsequence/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestPalindromeSubseq = function(s) {\n    const memo = {};\n    const dp = (i, j) => {\n        if (!memo[i]) memo[i] = {};\n        if (i > j) return 0;\n        if (i === j) return 1\n        if (memo[i][j]) return memo[i][j];\n        \n        if (s[i] === s[j]) {\n            memo[i][j] = dp(i + 1, j - 1) + 2;\n        } else {\n            memo[i][j] = Math.max(dp(i + 1, j), dp(i, j - 1));            \n        }\n        \n        return memo[i][j];\n    }\n    return dp(0, s.length - 1)\n}\n")))}p.isMDXComponent=!0}}]);