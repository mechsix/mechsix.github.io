"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[35510],{60212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),r=t(28453);const s={title:"318. Maximum Product of Word Lengths",sidebar_label:"318. Maximum Product of Word Lengths",tags:["Leetcode Medium","String","Bit Manipulation"]},i=void 0,a={id:"leetcode/1-500/maximum_product_of_word_lengths",title:"318. Maximum Product of Word Lengths",description:"https://leetcode.com/problems/maximum-product-of-word-lengths/",source:"@site/docs/leetcode/1-500/318_maximum_product_of_word_lengths.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/maximum_product_of_word_lengths",permalink:"/docs/leetcode/1-500/maximum_product_of_word_lengths",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"String",permalink:"/docs/tags/string"},{label:"Bit Manipulation",permalink:"/docs/tags/bit-manipulation"}],version:"current",sidebarPosition:318,frontMatter:{title:"318. Maximum Product of Word Lengths",sidebar_label:"318. Maximum Product of Word Lengths",tags:["Leetcode Medium","String","Bit Manipulation"]},sidebar:"docSidebar",previous:{title:"315. Count of Smaller Numbers After Self",permalink:"/docs/leetcode/1-500/count_of_smaller_numbers_after_self"},next:{title:"319. Bulb Switcher",permalink:"/docs/leetcode/1-500/bulb_switcher"}},l={},d=[{value:"Python",id:"python",level:2},{value:"Use Hashmap",id:"use-hashmap",level:3},{value:"Javascript",id:"javascript",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/maximum-product-of-word-lengths/",children:"https://leetcode.com/problems/maximum-product-of-word-lengths/"})}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"use-hashmap",children:"Use Hashmap"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Time: O(N^2)"}),"\n",(0,o.jsx)(n.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def maxProduct(self, words: List[str]) -> int:\n        mapper = [set(word) for word in words]\n\n        ans = 0\n\n        for i in range(len(words)):\n            for j in range(i+1, len(words)):\n                if not mapper[i] & mapper[j]:\n                    ans = max(ans, len(words[i])*len(words[j]))\n        return ans\n"})}),"\n",(0,o.jsx)(n.h2,{id:"javascript",children:"Javascript"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var maxProduct = function(words) {\n  const intArray = words.map(word => toInt(word));\n  let max = 0;\n\n  for (let i = 0; i < intArray.length - 1; i++) {\n    for (let j = i + 1; j < intArray.length; j++) {\n      if ((intArray[i] & intArray[j]) === 0) {\n        max = Math.max(max, words[i].length * words[j].length);\n      }\n    }\n  }\n\n  return max;\n};\n\nconst toInt = (word) => {\n  let num = 0;\n  const base = ('a').charCodeAt(0);\n\n  for (const char of word) {\n    num |= 1 << char.charCodeAt(0) - base;\n  }\n  return num;\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);