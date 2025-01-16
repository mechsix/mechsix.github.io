"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97363],{67942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/1501-2000/max_score_from_performing_multiplication_operations","title":"1770. Maximum Score from Performing Multiplication Operations","description":"Python","source":"@site/docs/leetcode/1501-2000/1770_max_score_from_performing_multiplication_operations.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/max_score_from_performing_multiplication_operations","permalink":"/docs/leetcode/1501-2000/max_score_from_performing_multiplication_operations","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DP","permalink":"/docs/tags/dp"}],"version":"current","sidebarPosition":1770,"frontMatter":{"title":"1770. Maximum Score from Performing Multiplication Operations","sidebar_label":"1770. Maximum Score from Performing Multiplication Operations","tags":["Leetcode Medium","DP"]},"sidebar":"docSidebar","previous":{"title":"1768. Merge Strings Alternately","permalink":"/docs/leetcode/1501-2000/merge_strings_alternately"},"next":{"title":"1822. Sign of the Product of an Array","permalink":"/docs/leetcode/1501-2000/sign_of_the_product_of_an_array"}}');var r=n(74848),o=n(28453);const l={title:"1770. Maximum Score from Performing Multiplication Operations",sidebar_label:"1770. Maximum Score from Performing Multiplication Operations",tags:["Leetcode Medium","DP"]},s=void 0,c={},a=[{value:"Python",id:"python",level:2},{value:"Top Down DP",id:"top-down-dp",level:3},{value:"Bottom Up DP",id:"bottom-up-dp",level:3}];function m(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.h3,{id:"top-down-dp",children:"Top Down DP"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\u76f4\u63a5",(0,r.jsx)(t.code,{children:"@cache"}),"\u6703memory limit exceed"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"maxsize=2048"}),"\u662ftry & error\u8a66\u51fa\u4f86\u7684\uff0c\u9019\u984c\u505aBottom Up\u6703\u7406\u60f3\u4e00\u9ede"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from functools import lru_cache\n\n\nclass Solution:\n    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:\n        n, m = len(nums), len(multipliers)\n\n        @lru_cache(maxsize=2048)\n        def dp(left: int, right: int):\n            if right == m:\n                return 0\n\n            take_left = nums[left] * multipliers[right] + dp(left+1, right+1)\n            take_right = nums[n-(right-left)-1] * multipliers[right] + dp(left, right+1)\n\n            return max(take_left, take_right)\n\n        return dp(0, 0)\n"})}),"\n",(0,r.jsx)(t.h3,{id:"bottom-up-dp",children:"Bottom Up DP"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:\n        n, m = len(nums), len(multipliers)\n        dp = [[0]*(m+1) for _ in range(m+1)]\n\n        for step in range(m-1, -1, -1):\n            for left in range(step, -1, -1):\n                dp[step][left] = max(\n                    multipliers[step]*nums[left] + dp[step+1][left+1],\n                    multipliers[step]*nums[n-(step-left)-1] + dp[step+1][left]\n                )\n\n        return dp[0][0]\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(96540);const r={},o=i.createContext(r);function l(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);