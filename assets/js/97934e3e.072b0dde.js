"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[41922],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[d]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25761:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return c}});var r=t(83117),o=(t(67294),t(3905));const s={title:"5. Longest Palindromic Substring",sidebar_label:"5. Longest Palindromic Substring",tags:["Leetcode Medium","DP","TODO"]},i=void 0,a={unversionedId:"leetcode/1-500/longest_palindromic_substring",id:"leetcode/1-500/longest_palindromic_substring",title:"5. Longest Palindromic Substring",description:"https://leetcode.com/problems/longest-palindromic-substring/",source:"@site/docs/leetcode/1-500/5_longest_palindromic_substring.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/longest_palindromic_substring",permalink:"/docs/leetcode/1-500/longest_palindromic_substring",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/5_longest_palindromic_substring.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:5,frontMatter:{title:"5. Longest Palindromic Substring",sidebar_label:"5. Longest Palindromic Substring",tags:["Leetcode Medium","DP","TODO"]},sidebar:"docSidebar",previous:{title:"4. Median of Two Sorted Arrays",permalink:"/docs/leetcode/1-500/median_two_sorted_array"},next:{title:"6. Zigzag Conversion",permalink:"/docs/leetcode/1-500/zigzag_conversion"}},l={},c=[{value:"Python",id:"python",level:2},{value:"Forces Bust (Timeout)",id:"forces-bust-timeout",level:3},{value:"Expand from center",id:"expand-from-center",level:3},{value:"Javascript",id:"javascript",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-palindromic-substring/"},"https://leetcode.com/problems/longest-palindromic-substring/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"forces-bust-timeout"},"Forces Bust (Timeout)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        if len(s) < 2:\n            return s\n\n        longest = ""\n        for left in range(len(s)):\n            for right in range(left, len(s)):\n                candidate = s[left:right+1]\n                if candidate == candidate[::-1]:\n                    longest = candidate if len(candidate) > len(longest) else longest\n        return longest\n')),(0,o.kt)("h3",{id:"expand-from-center"},"Expand from center"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        segment = s[0]\n\n        for cur in range(len(s)):\n            # Consider cur as middle (length are odd)\n            for step in range(1, len(s)//2+1):\n                if cur - step < 0 or cur + step > len(s)-1:\n                    break\n                if s[cur-step] == s[cur+step]:\n                    if step*2+1 > len(segment):\n                        segment = s[cur-step:cur+step+1]\n                else:\n                    break\n\n            # Consider center is between cur & cur+1 (length are even)\n            if cur + 1 >= len(s):\n                continue\n\n            left, right = cur, cur+1\n            if s[left] != s[right]:\n                continue\n\n            while left-1 >= 0 and right+1 < len(s):\n                if s[left-1] == s[right+1]:\n                    left -= 1\n                    right += 1\n                else:\n                    break\n\n            if right - left + 1 > len(segment):\n                segment = s[left:right+1]\n\n        return segment\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestPalindrome = function(s) {\n  const dp = [...new Array(s.length)].map(() => new Array(s.length).fill(false));\n\n  let ans = ''\n  for (let i = 0; i < s.length; i++) {\n    dp[i][i] = true;\n    ans = s[i];\n  }\n\n  let maxLen = 1;\n  for (let start = s.length - 2; start >= 0; start--) {\n    for (let end = start + 1; end < s.length; end++) {\n      if (s[start] === s[end]) {\n        if (start + 1 === end || dp[start + 1][end - 1]) {\n          dp[start][end] = true;\n          const tmpLen = end - start + 1;\n          if (maxLen < tmpLen) {\n            maxLen = end - start + 1;\n            ans = s.slice(start, end + 1)\n          }\n        }\n      }\n    }\n  }\n  \n  return ans;\n};\n")))}d.isMDXComponent=!0}}]);