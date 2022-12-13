"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3013],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const a={title:"2131. Longest Palindrome by Concatenating Two Letter Words",sidebar_label:"2131. Longest Palindrome by Concatenating Two Letter Words",tags:["Leetcode Medium","Greedy","Hash"]},i=void 0,c={unversionedId:"leetcode/2000/longest_palindrome_by_concatenating_two_letter_words",id:"leetcode/2000/longest_palindrome_by_concatenating_two_letter_words",title:"2131. Longest Palindrome by Concatenating Two Letter Words",description:"https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/",source:"@site/docs/leetcode/2000/2131_longest_palindrome_by_concatenating_two_letter_words.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/longest_palindrome_by_concatenating_two_letter_words",permalink:"/docs/leetcode/2000/longest_palindrome_by_concatenating_two_letter_words",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2131_longest_palindrome_by_concatenating_two_letter_words.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:2131,frontMatter:{title:"2131. Longest Palindrome by Concatenating Two Letter Words",sidebar_label:"2131. Longest Palindrome by Concatenating Two Letter Words",tags:["Leetcode Medium","Greedy","Hash"]},sidebar:"docSidebar",previous:{title:"2095. Delete the Middle Node of a Linked List",permalink:"/docs/leetcode/2000/delete_the_middle_of_linked_list"},next:{title:"2136. Earliest Possible Day of Full Bloom",permalink:"/docs/leetcode/2000/earliest_possible_day_of_full_bloom"}},l={},s=[{value:"Python",id:"python",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/"},"https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import Counter\n\n\nclass Solution:\n    def longestPalindrome(self, words: List[str]) -> int:\n        counts = Counter(words)\n\n        answer = 0\n        counted = set()\n        is_center_exists = False\n\n        for word, count in counts.items():\n            # The word can be used as center\n            if word == word[::-1]:\n                if count % 2 == 0:\n                    answer += count\n                else:\n                    answer += count - 1\n                    is_center_exists = True\n                continue\n\n            # Prevent double calculate word already counted ealier\n            if word in counted:\n                continue\n\n\n            answer += 2 * min(count, counts[word[::-1]])\n\n            # Mark the reverse word is counted\n            counted.add(word[::-1])\n\n        # Every word has length == 2\n        answer *= 2\n\n        # Add 2 for center if its exist\n        return answer + 2 if is_center_exists else answer\n")))}u.isMDXComponent=!0}}]);