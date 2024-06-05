"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[19088],{55614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var o=n(74848),r=n(28453);const s={title:"2131. Longest Palindrome by Concatenating Two Letter Words",sidebar_label:"2131. Longest Palindrome by Concatenating Two Letter Words",tags:["Leetcode Medium","Greedy","Hash"]},d=void 0,i={id:"leetcode/2000/longest_palindrome_by_concatenating_two_letter_words",title:"2131. Longest Palindrome by Concatenating Two Letter Words",description:"https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/",source:"@site/docs/leetcode/2000/2131_longest_palindrome_by_concatenating_two_letter_words.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/longest_palindrome_by_concatenating_two_letter_words",permalink:"/docs/leetcode/2000/longest_palindrome_by_concatenating_two_letter_words",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:2131,frontMatter:{title:"2131. Longest Palindrome by Concatenating Two Letter Words",sidebar_label:"2131. Longest Palindrome by Concatenating Two Letter Words",tags:["Leetcode Medium","Greedy","Hash"]},sidebar:"docSidebar",previous:{title:"2095. Delete the Middle Node of a Linked List",permalink:"/docs/leetcode/2000/delete_the_middle_of_linked_list"},next:{title:"2136. Earliest Possible Day of Full Bloom",permalink:"/docs/leetcode/2000/earliest_possible_day_of_full_bloom"}},l={},a=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/",children:"https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from collections import Counter\n\n\nclass Solution:\n    def longestPalindrome(self, words: List[str]) -> int:\n        counts = Counter(words)\n\n        answer = 0\n        counted = set()\n        is_center_exists = False\n\n        for word, count in counts.items():\n            # The word can be used as center\n            if word == word[::-1]:\n                if count % 2 == 0:\n                    answer += count\n                else:\n                    answer += count - 1\n                    is_center_exists = True\n                continue\n\n            # Prevent double calculate word already counted ealier\n            if word in counted:\n                continue\n\n\n            answer += 2 * min(count, counts[word[::-1]])\n\n            # Mark the reverse word is counted\n            counted.add(word[::-1])\n\n        # Every word has length == 2\n        answer *= 2\n\n        # Add 2 for center if its exist\n        return answer + 2 if is_center_exists else answer\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var o=n(96540);const r={},s=o.createContext(r);function d(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);