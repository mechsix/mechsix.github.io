"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[41922],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,g=p["".concat(a,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},25761:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],l={title:"5. Longest Palindromic Substring",sidebar_label:"5. Longest Palindromic Substring",tags:["Leetcode Medium","DP","TODO"]},a=void 0,c={unversionedId:"leetcode/1-500/longest_palindromic_substring",id:"leetcode/1-500/longest_palindromic_substring",title:"5. Longest Palindromic Substring",description:"https://leetcode.com/problems/longest-palindromic-substring/",source:"@site/docs/leetcode/1-500/5_longest_palindromic_substring.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/longest_palindromic_substring",permalink:"/docs/leetcode/1-500/longest_palindromic_substring",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/5_longest_palindromic_substring.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:5,frontMatter:{title:"5. Longest Palindromic Substring",sidebar_label:"5. Longest Palindromic Substring",tags:["Leetcode Medium","DP","TODO"]},sidebar:"docSidebar",previous:{title:"4. Median of Two Sorted Arrays",permalink:"/docs/leetcode/1-500/median_two_sorted_array"},next:{title:"6. Zigzag Conversion",permalink:"/docs/leetcode/1-500/zigzag_conversion"}},d=[{value:"Python",id:"python",children:[{value:"Forces Bust (Timeout)",id:"forces-bust-timeout",children:[],level:3},{value:"Expand from center",id:"expand-from-center",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-palindromic-substring/"},"https://leetcode.com/problems/longest-palindromic-substring/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"forces-bust-timeout"},"Forces Bust (Timeout)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        if len(s) < 2:\n            return s\n\n        longest = ""\n        for left in range(len(s)):\n            for right in range(left, len(s)):\n                candidate = s[left:right+1]\n                if candidate == candidate[::-1]:\n                    longest = candidate if len(candidate) > len(longest) else longest\n        return longest\n')),(0,i.kt)("h3",{id:"expand-from-center"},"Expand from center"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        segment = s[0]\n\n        for cur in range(len(s)):\n            # Consider cur as middle (length are odd)\n            for step in range(1, len(s)//2+1):\n                if cur - step < 0 or cur + step > len(s)-1:\n                    break\n                if s[cur-step] == s[cur+step]:\n                    if step*2+1 > len(segment):\n                        segment = s[cur-step:cur+step+1]\n                else:\n                    break\n\n            # Consider center is between cur & cur+1 (length are even)\n            if cur + 1 >= len(s):\n                continue\n\n            left, right = cur, cur+1\n            if s[left] != s[right]:\n                continue\n\n            while left-1 >= 0 and right+1 < len(s):\n                if s[left-1] == s[right+1]:\n                    left -= 1\n                    right += 1\n                else:\n                    break\n\n            if right - left + 1 > len(segment):\n                segment = s[left:right+1]\n\n        return segment\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var longestPalindrome = function(s) {\n  const dp = [...new Array(s.length)].map(() => new Array(s.length).fill(false));\n\n  let ans = ''\n  for (let i = 0; i < s.length; i++) {\n    dp[i][i] = true;\n    ans = s[i];\n  }\n\n  let maxLen = 1;\n  for (let start = s.length - 2; start >= 0; start--) {\n    for (let end = start + 1; end < s.length; end++) {\n      if (s[start] === s[end]) {\n        if (start + 1 === end || dp[start + 1][end - 1]) {\n          dp[start][end] = true;\n          const tmpLen = end - start + 1;\n          if (maxLen < tmpLen) {\n            maxLen = end - start + 1;\n            ans = s.slice(start, end + 1)\n          }\n        }\n      }\n    }\n  }\n  \n  return ans;\n};\n")))}p.isMDXComponent=!0}}]);