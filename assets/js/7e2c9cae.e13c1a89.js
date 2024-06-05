"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5380],{74028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(74848),o=n(28453);const s={title:"46. Permutations",sidebar_label:"46. Permutations",tags:["Leetcode Medium","Backtracking"]},r=void 0,a={id:"leetcode/1-500/permutations",title:"46. Permutations",description:"https://leetcode.com/problems/permutations/",source:"@site/docs/leetcode/1-500/46_permutations.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/permutations",permalink:"/docs/leetcode/1-500/permutations",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:46,frontMatter:{title:"46. Permutations",sidebar_label:"46. Permutations",tags:["Leetcode Medium","Backtracking"]},sidebar:"docSidebar",previous:{title:"45. Jump Game II",permalink:"/docs/leetcode/1-500/jump_game_ii"},next:{title:"47. Permutations II",permalink:"/docs/leetcode/1-500/permutations_ii"}},c={},l=[{value:"Python",id:"python",level:2},{value:"Built-in itertools.permutations",id:"built-in-itertoolspermutations",level:3},{value:"Backtracking",id:"backtracking",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/permutations/",children:"https://leetcode.com/problems/permutations/"})}),"\n",(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.h3,{id:"built-in-itertoolspermutations",children:"Built-in itertools.permutations"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u7528Python\u4f5c\u5f0a..."}),"\n",(0,i.jsxs)(t.li,{children:["itertools.permutations\u53ef\u4ee5\u5e36\u7b2c\u4e8c\u500b\u53c3\u6578",(0,i.jsx)(t.code,{children:"r"}),"\uff0c\u6c7a\u5b9a\u8981\u53d6\u7684\u6392\u5217\u9577\u5ea6"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from itertools import permutations\n\n\nclass Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        return [perm for perm in permutations(nums)]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"backtracking",children:"Backtracking"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u56de\u6714\u6cd5\u7aae\u8209"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def permute(self, nums: List[int]) -> List[List[int]]:\n        result = []\n        used = [False] * len(nums)\n\n        def backtrack(path):\n            # Reach leaf, accept the path into result and end the recursive\n            if len(path) == len(nums):\n                result.append(path[:])  # Copy the List to prevent Copy-by-reference\n                return\n\n            # For each options\n            for i in range(len(nums)):\n                # Ignore the invalid option (used in path)\n                if used[i]:\n                    continue\n\n                # Make the choice\n                path.append(nums[i])\n                used[i] = True\n\n                # Go to next level\n                backtrack(path)\n\n                # Rollback the choicen\n                path.pop()\n                used[i] = False\n\n        backtrack([])\n\n        return result\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);