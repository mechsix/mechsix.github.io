"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[54097],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(t),p=i,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||l;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=p;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[m]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const l={title:"680. Valid Palindrome II",sidebar_label:"680. Valid Palindrome II",tags:["Leetcode Easy","Two Pointer"]},o=void 0,a={unversionedId:"leetcode/501-1000/valid_palindrome_ii",id:"leetcode/501-1000/valid_palindrome_ii",title:"680. Valid Palindrome II",description:"https://leetcode.com/problems/valid-palindrome-ii/",source:"@site/docs/leetcode/501-1000/680_valid_palindrome_ii.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/valid_palindrome_ii",permalink:"/docs/leetcode/501-1000/valid_palindrome_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/680_valid_palindrome_ii.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:680,frontMatter:{title:"680. Valid Palindrome II",sidebar_label:"680. Valid Palindrome II",tags:["Leetcode Easy","Two Pointer"]},sidebar:"docSidebar",previous:{title:"673. Number of Longest Increasing Subsequence",permalink:"/docs/leetcode/501-1000/num_of_longest_increasing_subsequence"},next:{title:"682. Baseball Game",permalink:"/docs/leetcode/501-1000/baseball_game"}},s={},c=[{value:"Python",id:"python",level:2},{value:"Brute Force (Timelimit Exceed)",id:"brute-force-timelimit-exceed",level:3},{value:"Scan from begin and end in 2nd level (Timelimit Exceed)",id:"scan-from-begin-and-end-in-2nd-level-timelimit-exceed",level:3},{value:"Two Pointers",id:"two-pointers",level:3}],d={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/valid-palindrome-ii/"},"https://leetcode.com/problems/valid-palindrome-ii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"brute-force-timelimit-exceed"},"Brute Force (Timelimit Exceed)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N^2)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(NlogN)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        for i in range(len(s)):\n            remains = s[:i] + s[i+1:]\n            if remains == remains[::-1]:\n                return True\n        return False\n")),(0,i.kt)("h3",{id:"scan-from-begin-and-end-in-2nd-level-timelimit-exceed"},"Scan from begin and end in 2nd level (Timelimit Exceed)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(NlogN)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(NlogN)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        if self.isPalindrome(s):\n            return True\n\n        for i in range(len(s)):\n            if self.isPalindrome(s[:i] + s[i+1:]):\n                return True\n\n        return False\n\n    # Leetcode 125\n    def isPalindrome(self, s: str) -> bool:\n        if len(s) < 2:\n            return True\n\n        for i in range(len(s)//2):\n            if s[i] != s[len(s)-1-i]:\n                return False\n\n        return True\n")),(0,i.kt)("h3",{id:"two-pointers"},"Two Pointers"),(0,i.kt)("p",null,"\u505a\u7b2c\u4e00\u5c64\u7684palindrome check\u6642\uff0c\u5176\u5be6\u53ea\u8981invalid\u4e86\uff0c\u82e5\u522a\u4e00\u500b\u9084\u80fdvalid\u7684\u8a71\uff0c\u8a72\u522a\u9664\u7684character\u52e2\u5fc5\u662f\u5728\u7576\u4e0b\u7684\u5de6\u754c\u6216\u53f3\u754c\u3002\u5229\u7528\u9019\u500b\u7279\u6027\u9054\u6210O(N)\u7684Time complexity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def validPalindrome(self, s: str) -> bool:\n        left, right = 0, len(s)-1\n\n        while left < right:\n            if s[left] != s[right]:\n                return self.isPalindrome(s, left+1, right) or self.isPalindrome(s, left, right-1)\n            left += 1\n            right -= 1\n\n        return True\n\n    def isPalindrome(self, s: str, left: int, right: int) -> bool:\n        while left < right:\n            if s[left] != s[right]:\n                return False\n            left += 1\n            right -= 1\n\n        return True\n")))}u.isMDXComponent=!0}}]);