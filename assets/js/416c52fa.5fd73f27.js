"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[36389],{19892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(74848),o=n(28453);const s={title:"167. Two Sum II - Input Array Is Sorted",sidebar_label:"167. Two Sum II - Input Array Is Sorted",tags:["Leetcode Easy","Number Sum","Binary Search","Go"]},i=void 0,a={id:"leetcode/1-500/two_sum_ii",title:"167. Two Sum II - Input Array Is Sorted",description:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",source:"@site/docs/leetcode/1-500/167_two_sum_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/two_sum_ii",permalink:"/docs/leetcode/1-500/two_sum_ii",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Number Sum",permalink:"/docs/tags/number-sum"},{label:"Binary Search",permalink:"/docs/tags/binary-search"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:167,frontMatter:{title:"167. Two Sum II - Input Array Is Sorted",sidebar_label:"167. Two Sum II - Input Array Is Sorted",tags:["Leetcode Easy","Number Sum","Binary Search","Go"]},sidebar:"docSidebar",previous:{title:"165. Compare Version Numbers",permalink:"/docs/leetcode/1-500/compare_version_numbers"},next:{title:"169. Majority Element",permalink:"/docs/leetcode/1-500/majority_elements"}},l={},c=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",children:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted"})}),"\n",(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def twoSum(self, numbers: List[int], target: int) -> List[int]:\n        l, r = 0, len(numbers)-1\n\n        while l < r:\n            total = numbers[l] + numbers[r]\n            if total == target:\n                return [l+1, r+1]\n            elif total < target:\n                l += 1\n            else:\n                r -= 1\n"})}),"\n",(0,r.jsx)(t.h2,{id:"go",children:"Go"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:"func twoSum(numbers []int, target int) []int {\n    l := 0\n    r := len(numbers) - 1\n\n    for l < r {\n        sum := numbers[l] + numbers[r]\n\n        if sum == target {\n            return []int{l+1, r+1}\n        } else if sum < target {\n            l += 1\n        } else {\n            r -= 1\n        }\n    }\n    return []int{}\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);