"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[46199],{90364:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"leetcode/1-500/find_all_anagrams_in_a_string","title":"438. Find All Anagrams in a String","description":"https://leetcode.com/problems/find-all-anagrams-in-a-string/","source":"@site/docs/leetcode/1-500/438_find_all_anagrams_in_a_string.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/find_all_anagrams_in_a_string","permalink":"/docs/leetcode/1-500/find_all_anagrams_in_a_string","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Sliding Window","permalink":"/docs/tags/sliding-window"}],"version":"current","sidebarPosition":438,"frontMatter":{"title":"438. Find All Anagrams in a String","sidebar_label":"438. Find All Anagrams in a String","tags":["Leetcode Medium","Sliding Window"]},"sidebar":"docSidebar","previous":{"title":"437. Path Sum III","permalink":"/docs/leetcode/1-500/path_sum_iii"},"next":{"title":"441. Arranging Coins","permalink":"/docs/leetcode/1-500/arranging_coins"}}');var s=t(74848),a=t(28453);const o={title:"438. Find All Anagrams in a String",sidebar_label:"438. Find All Anagrams in a String",tags:["Leetcode Medium","Sliding Window"]},r=void 0,l={},c=[{value:"Python",id:"python",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://leetcode.com/problems/find-all-anagrams-in-a-string/",children:"https://leetcode.com/problems/find-all-anagrams-in-a-string/"})}),"\n",(0,s.jsx)(e.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"from collections import Counter\n\n\nclass Solution:\n    def findAnagrams(self, s: str, p: str) -> List[int]:\n        if len(s) < len(p):\n            return []\n\n        count_s, count_p = Counter(), Counter(p)\n\n        ans = []\n        for i in range(len(s)):\n            count_s[s[i]] += 1\n\n            # Reach end, move left (i-len(p)) forward\n            if i >= len(p):\n                if count_s[s[i-len(p)]] == 1:\n                    del count_s[s[i-len(p)]]\n                else:\n                    count_s[s[i-len(p)]] -= 1\n\n            # All counts are the same\n            if count_s == count_p:\n                ans.append(i-len(p)+1)\n\n        return ans\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);