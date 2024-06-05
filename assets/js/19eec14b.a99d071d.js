"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[697],{43849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(74848),r=t(28453);const o={title:"1351. Count Negative Numbers in a Sorted Matrix",sidebar_label:"1351. Count Negative Numbers in a Sorted Matrix",tags:["Leetcode Easy","Matrix","Go","Rust"]},a=void 0,s={id:"leetcode/1001-1500/count_negative_num_in_a_sorted_matrix",title:"1351. Count Negative Numbers in a Sorted Matrix",description:"https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",source:"@site/docs/leetcode/1001-1500/1351_count_negative_num_in_a_sorted_matrix.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/count_negative_num_in_a_sorted_matrix",permalink:"/docs/leetcode/1001-1500/count_negative_num_in_a_sorted_matrix",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Matrix",permalink:"/docs/tags/matrix"},{label:"Go",permalink:"/docs/tags/go"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:1351,frontMatter:{title:"1351. Count Negative Numbers in a Sorted Matrix",sidebar_label:"1351. Count Negative Numbers in a Sorted Matrix",tags:["Leetcode Easy","Matrix","Go","Rust"]},sidebar:"docSidebar",previous:{title:"1346. Check If N and Its Double Exist",permalink:"/docs/leetcode/1001-1500/check_n_and_its_double_in_arr"},next:{title:"1372. Longest ZigZag Path in a Binary Tree",permalink:"/docs/leetcode/1001-1500/longest_zigzag_path_in_binary_tree"}},c={},d=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2},{value:"Rust",id:"rust",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",children:"https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/"})}),"\n",(0,i.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class Solution(object):\n    def countNegatives(self, grid):\n        m, n = len(grid), len(grid[0])\n\n        count = 0\n        for i in range(m):\n            if grid[i][0] < 0:\n                count += (m-i)*n\n                break\n\n            for j in range(n):\n                if grid[i][j] < 0:\n                    count += n-j\n                    break\n\n        return count\n"})}),"\n",(0,i.jsx)(n.h2,{id:"go",children:"Go"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"class Solution(object):\n    def countNegatives(self, grid):\n        m, n = len(grid), len(grid[0])\n\n        count = 0\n        for i in range(m):\n            if grid[i][0] < 0:\n                count += (m-i)*n\n                break\n\n            for j in range(n):\n                if grid[i][j] < 0:\n                    count += n-j\n                    break\n\n        return count\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn count_negatives(grid: Vec<Vec<i32>>) -> i32 {\n        let m = grid.len();\n        let n = grid[0].len();\n\n        let mut count = 0;\n        for i in 0..m {\n            if grid[i][0] < 0 {\n                count += ((m-i) * n) as i32;\n                break;\n            }\n            for j in 0..n {\n                if grid[i][j] < 0 {\n                    count += (n-j) as i32;\n                    break;\n                }\n            }\n        }\n        count\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var i=t(96540);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);