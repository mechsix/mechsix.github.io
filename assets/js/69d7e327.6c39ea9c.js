"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[56586],{27682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(74848),s=n(28453);const r={title:"349. Intersection of Two Arrays",sidebar_label:"349. Intersection of Two Arrays",tags:["Leetcode Easy","Go"]},i=void 0,a={id:"leetcode/1-500/intersection_of_two_arrays",title:"349. Intersection of Two Arrays",description:"https://leetcode.com/problems/intersection-of-two-arrays",source:"@site/docs/leetcode/1-500/349_intersection_of_two_arrays.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/intersection_of_two_arrays",permalink:"/docs/leetcode/1-500/intersection_of_two_arrays",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:349,frontMatter:{title:"349. Intersection of Two Arrays",sidebar_label:"349. Intersection of Two Arrays",tags:["Leetcode Easy","Go"]},sidebar:"docSidebar",previous:{title:"347. Top K Frequent Elements",permalink:"/docs/leetcode/1-500/top_k_frequent_elms"},next:{title:"350. Intersection of Two Arrays II",permalink:"/docs/leetcode/1-500/intersection_of_two_arrays_ii"}},c={},l=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/intersection-of-two-arrays",children:"https://leetcode.com/problems/intersection-of-two-arrays"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:\n        return list(set(nums1) & set(nums2))\n"})}),"\n",(0,o.jsx)(t.h2,{id:"go",children:"Go"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",children:"func intersection(nums1 []int, nums2 []int) []int {\n    // Covert nums2 into map, key as num2, value with true (whatever)\n    nums2Map := map[int]bool{}\n    for _, num2 := range nums2 {\n        nums2Map[num2] = true\n    }\n\n    // If num1 in nums2, append to resultMap\n    // Duplicate item will be overwrite\n    resultMap := map[int]bool{}\n    for _, num1 := range nums1 {\n        if _, exist := nums2Map[num1]; exist {\n            resultMap[num1] = true\n        }\n    }\n\n    // Covert resultMap back to []int\n    i := 0\n    result := make([]int, len(resultMap))\n    for num, _ := range resultMap {\n        result[i] = num\n        i++\n    }\n\n    return result\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(96540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);