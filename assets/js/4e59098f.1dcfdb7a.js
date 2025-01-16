"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75835],{68498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"leetcode/1501-2000/concatenation_of_consecutive_bin_nums","title":"1680. Concatenation of Consecutive Binary Numbers","description":"https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/","source":"@site/docs/leetcode/1501-2000/1680_concatenation_of_consecutive_bin_nums.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/concatenation_of_consecutive_bin_nums","permalink":"/docs/leetcode/1501-2000/concatenation_of_consecutive_bin_nums","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Bit Manipulation","permalink":"/docs/tags/bit-manipulation"}],"version":"current","sidebarPosition":1680,"frontMatter":{"title":"1680. Concatenation of Consecutive Binary Numbers","sidebar_label":"1680. Concatenation of Consecutive Binary Numbers","tags":["Leetcode Medium","Bit Manipulation"]},"sidebar":"docSidebar","previous":{"title":"1679. Max Number of K-Sum Pairs","permalink":"/docs/leetcode/1501-2000/max_num_of_k_sum_pairs"},"next":{"title":"1683. Invalid Tweets","permalink":"/docs/leetcode/1501-2000/invalid_tweets"}}');var i=t(74848),s=t(28453);const c={title:"1680. Concatenation of Consecutive Binary Numbers",sidebar_label:"1680. Concatenation of Consecutive Binary Numbers",tags:["Leetcode Medium","Bit Manipulation"]},a=void 0,r={},l=[{value:"Python",id:"python",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/",children:"https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u76f4\u89ba\u7684\u5beb\u6cd5\uff0c\u4f46\u5c31run\u7684\u904e\u4e86..."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Time: O(N) # \u8ff4\u5708\u8981\u5f9e1\u8dd1\u5230N"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Space: O(1)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def concatenatedBinary(self, n: int) -> int:\n        mod = 10**9+7\n        ans = 1\n        for i in range(2, n+1):\n            bins = str(bin(i))[2:]\n            ans <<= len(bins)\n            ans += i\n            ans %= mod\n\n        return ans\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);