"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[61454],{54123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(74848),r=n(28453);const l={title:"125. Valid Palindrome",slidebar_label:"125. Valid Palindrome",tags:["Leetcode Easy"]},i=void 0,s={id:"leetcode/1-500/valid_palindrome",title:"125. Valid Palindrome",description:"https://leetcode.com/problems/valid-palindrome/",source:"@site/docs/leetcode/1-500/125_valid_palindrome.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/valid_palindrome",permalink:"/docs/leetcode/1-500/valid_palindrome",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:125,frontMatter:{title:"125. Valid Palindrome",slidebar_label:"125. Valid Palindrome",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"122. Best Time to Buy and Sell Stock II",permalink:"/docs/leetcode/1-500/best_time_buy_sell_stock_ii"},next:{title:"126. Word Ladder II",permalink:"/docs/leetcode/1-500/word_ladder_ii"}},a={},d=[{value:"Python",id:"python",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/valid-palindrome/",children:"https://leetcode.com/problems/valid-palindrome/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        letters = [char.lower() for char in s if char.isalpha() or char.isdigit()]\n\n        if len(letters) < 2:\n            return True\n\n        for i in range(len(letters)//2):\n            if letters[i] != letters[len(letters)-1-i]:\n                return False\n\n        return True\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var o=n(96540);const r={},l=o.createContext(r);function i(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);