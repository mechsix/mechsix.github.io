"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[93347],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=i,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42358:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(83117),i=(t(67294),t(3905));const o={title:"509. Fibonacci Number",sidebar_label:"509. Fibonacci Number",tags:["Leetcode Easy","DP","Rust"]},a=void 0,c={unversionedId:"leetcode/501-1000/fibonacci_number",id:"leetcode/501-1000/fibonacci_number",title:"509. Fibonacci Number",description:"https://leetcode.com/problems/fibonacci-number/",source:"@site/docs/leetcode/501-1000/509_fibonacci_number.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/fibonacci_number",permalink:"/docs/leetcode/501-1000/fibonacci_number",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/509_fibonacci_number.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"DP",permalink:"/docs/tags/dp"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:509,frontMatter:{title:"509. Fibonacci Number",sidebar_label:"509. Fibonacci Number",tags:["Leetcode Easy","DP","Rust"]},sidebar:"docSidebar",previous:{title:"495. Teemo Attacking",permalink:"/docs/leetcode/1-500/teemo_attack"},next:{title:"516. Longest Palindromic Subsequence",permalink:"/docs/leetcode/501-1000/longest_palindromic\u2013subsequence"}},l={},p=[{value:"Python",id:"python",level:2},{value:"Top-Down DP with dict memory",id:"top-down-dp-with-dict-memory",level:3},{value:"Top-Down DP",id:"top-down-dp",level:3},{value:"Bottom-Up DP",id:"bottom-up-dp",level:3},{value:"Bottom-Up DP with linear cache",id:"bottom-up-dp-with-linear-cache",level:3},{value:"Rust",id:"rust",level:2},{value:"Javascript",id:"javascript",level:2}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/fibonacci-number/"},"https://leetcode.com/problems/fibonacci-number/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"top-down-dp-with-dict-memory"},"Top-Down DP with dict memory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.memory = dict()\n\n    def fib(self, n: int) -> int:\n        if n < 2:\n            return n\n\n        if n in self.memory:\n            return self.memory[n]\n\n        self.memory[n] = self.fib(n-1) + self.fib(n-2)\n\n        return self.memory[n]\n")),(0,i.kt)("h3",{id:"top-down-dp"},"Top-Down DP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from functools import cache\n\nclass Solution:\n    @cache\n    def fib(self, n: int) -> int:\n        if n < 2:\n            return n\n\n        return self.fib(n-1) + self.fib(n-2)\n")),(0,i.kt)("h3",{id:"bottom-up-dp"},"Bottom-Up DP"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def fib(self, n: int) -> int:\n        if n == 0:\n            return 0\n\n        dp = [None] * (n+1)\n        dp[0], dp[1] = 0, 1\n\n        for i in range(2, n+1):\n            dp[i] = dp[i-1] + dp[i-2]\n\n        return dp[n]\n")),(0,i.kt)("h3",{id:"bottom-up-dp-with-linear-cache"},"Bottom-Up DP with linear cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def fib(self, n: int) -> int:\n        if n < 2:\n            return n\n\n        pre_2, pre_1 = 0, 1\n\n        for i in range(2, n+1):\n            current = pre_1 + pre_2\n            pre_2, pre_1  = pre_1, current\n\n        return pre_1\n")),(0,i.kt)("h2",{id:"rust"},"Rust"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn fib(n: i32) -> i32 {\n        if n < 2 {\n            return n;\n        }\n\n        let mut pre1 = 1;\n        let mut pre2 = 1;\n\n        for _ in 2..n {\n            let current = pre1 + pre2;\n            pre2 = pre1;\n            pre1 = current;\n        }\n        return pre1;\n    }\n}\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var fib = function(n) {\n  const dp = [];\n    for (let i = 0; i <= n; i++) {\n      if (i <= 1) dp[i] = i;\n      else dp[i] = dp[i - 2] + dp[i - 1];\n    }\n  return dp[n]\n};\n")))}s.isMDXComponent=!0}}]);