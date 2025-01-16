"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[61388],{92545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"leetcode/501-1000/binary_search","title":"704. Binary Search","description":"https://leetcode.com/problems/binary-search/","source":"@site/docs/leetcode/501-1000/704_binary_search.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/binary_search","permalink":"/docs/leetcode/501-1000/binary_search","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Binary Search","permalink":"/docs/tags/binary-search"},{"inline":true,"label":"Rust","permalink":"/docs/tags/rust"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":704,"frontMatter":{"title":"704. Binary Search","sidebar_label":"704. Binary Search","tags":["Leetcode Easy","Binary Search","Rust","Go"]},"sidebar":"docSidebar","previous":{"title":"703. Kth Largest Element in a Stream","permalink":"/docs/leetcode/501-1000/kth_largest_elm_in_stream"},"next":{"title":"706. Design HashMap","permalink":"/docs/leetcode/501-1000/design_hashset"}}');var s=t(74848),i=t(28453);const a={title:"704. Binary Search",sidebar_label:"704. Binary Search",tags:["Leetcode Easy","Binary Search","Rust","Go"]},l=void 0,o={},c=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2},{value:"Rust",id:"rust",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/binary-search/",children:"https://leetcode.com/problems/binary-search/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def search(self, nums: List[int], target: int) -> int:\n        l, r = 0, len(nums)-1\n\n        while l <= r:\n            cur = (l+r) // 2\n            if nums[cur] == target:\n                return cur\n            if nums[cur] < target:\n                l = cur + 1\n            else:\n                r = cur - 1\n\n        return -1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"go",children:"Go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"func search(nums []int, target int) int {\n    left, right := 0, len(nums)-1\n\n    for left <= right {\n        pivot := (left+right) / 2\n        if (nums[pivot] == target) {\n            return pivot\n        } else if (nums[pivot] < target) {\n            left = pivot + 1\n        } else {\n            right = pivot - 1\n        }\n    }\n    return -1\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'impl Solution {\n    pub fn search(nums: Vec<i32>, target: i32) -> i32 {\n        let mut left:usize = 0;\n        let mut right:usize = nums.len() - 1;\n\n        while left < right {\n            let pivot:usize = (left+right) / 2;\n            // println!("pivot: {0}", pivot);\n\n            if nums[pivot] == target {\n                return pivot as i32;\n            } else if nums[pivot] < target {\n                left = pivot + 1;\n            } else {\n                right = pivot;\n            }\n        }\n\n        if nums[left] == target { left as i32 } else { -1 }\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);