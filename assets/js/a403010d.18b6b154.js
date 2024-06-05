"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[46518],{98642:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(74848),s=r(28453);const i={title:"35. Search Insert Position",sidebar_label:"35. Search Insert Position",tags:["Leetcode Easy","Binary Search","Go","Rust"]},a=void 0,o={id:"leetcode/1-500/search_insert_pos",title:"35. Search Insert Position",description:"https://leetcode.com/problems/search-insert-position",source:"@site/docs/leetcode/1-500/35_search_insert_pos.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/search_insert_pos",permalink:"/docs/leetcode/1-500/search_insert_pos",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Search",permalink:"/docs/tags/binary-search"},{label:"Go",permalink:"/docs/tags/go"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:35,frontMatter:{title:"35. Search Insert Position",sidebar_label:"35. Search Insert Position",tags:["Leetcode Easy","Binary Search","Go","Rust"]},sidebar:"docSidebar",previous:{title:"34. Find First and Last Position of Element in Sorted Array",permalink:"/docs/leetcode/1-500/find_first_and_last_pos_of_element_in_sorted_array"},next:{title:"36. Valid Sudoku",permalink:"/docs/leetcode/1-500/valid_sudoku"}},l={},c=[{value:"Python",id:"python",level:2},{value:"Force Busted",id:"force-busted",level:2},{value:"Binary Search",id:"binary-search",level:2},{value:"Go",id:"go",level:2},{value:"Binary Search",id:"binary-search-1",level:3},{value:"Rust",id:"rust",level:2},{value:"Binary Search",id:"binary-search-2",level:3},{value:"Build-in Binary Search",id:"build-in-binary-search",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/search-insert-position",children:"https://leetcode.com/problems/search-insert-position"})}),"\n",(0,t.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,t.jsx)(n.h2,{id:"force-busted",children:"Force Busted"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        insert_pos = 0\n\n        for index, num in enumerate(nums):\n            if target == num:\n                return index\n            if target > num:\n                insert_pos = index+1\n\n        return insert_pos\n"})}),"\n",(0,t.jsx)(n.h2,{id:"binary-search",children:"Binary Search"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def searchInsert(self, nums: List[int], target: int) -> int:\n        l, r = 0, len(nums)-1\n\n        while l <= r:\n            cur = (l+r) // 2\n            if target == nums[cur]:\n                return cur\n            elif target < nums[cur]:\n                r = cur - 1\n            else:\n                l = cur + 1\n        return l\n"})}),"\n",(0,t.jsx)(n.h2,{id:"go",children:"Go"}),"\n",(0,t.jsx)(n.h3,{id:"binary-search-1",children:"Binary Search"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"func searchInsert(nums []int, target int) int {\n    l, r := 0, len(nums)-1\n\n    for l <= r {\n        pivot := (l+r) / 2\n        if (target == nums[pivot]) {\n            return pivot\n        } else if (target > nums[pivot]) {\n            l = pivot + 1\n        } else {\n            r = pivot - 1\n        }\n    }\n    return l\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,t.jsx)(n.h3,{id:"binary-search-2",children:"Binary Search"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {\n        let mut l = 0;\n        let mut r = nums.len();\n\n        while l < r {\n            let pivot = (l+r) / 2;\n            let num = nums[pivot];\n            if target == num {\n                return pivot as i32;\n            } else if target > num {\n                l = pivot + 1;\n            } else {\n                r = pivot;\n            }\n        }\n\n        return l as i32;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"build-in-binary-search",children:"Build-in Binary Search"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {\n        nums.binary_search(&target).unwrap_or_else(|x| x) as i32\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);