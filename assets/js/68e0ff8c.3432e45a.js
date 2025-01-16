"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[59477],{51820:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"leetcode/1001-1500/shuffle_the_array","title":"1470. Shuffle the Array","description":"https://leetcode.com/problems/shuffle-the-array/","source":"@site/docs/leetcode/1001-1500/1470_shuffle_the_array.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/shuffle_the_array","permalink":"/docs/leetcode/1001-1500/shuffle_the_array","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Array","permalink":"/docs/tags/array"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"},{"inline":true,"label":"Rust","permalink":"/docs/tags/rust"}],"version":"current","sidebarPosition":1470,"frontMatter":{"title":"1470. Shuffle the Array","sidebar_label":"1470. Shuffle the Array","tags":["Leetcode Easy","Array","Go","Rust"]},"sidebar":"docSidebar","previous":{"title":"1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts","permalink":"/docs/leetcode/1001-1500/max_area_of_piece_of_cake_after_h_w_cuts"},"next":{"title":"1473. Paint House III","permalink":"/docs/leetcode/1001-1500/paint_house_iii"}}');var r=t(74848),l=t(28453);const a={title:"1470. Shuffle the Array",sidebar_label:"1470. Shuffle the Array",tags:["Leetcode Easy","Array","Go","Rust"]},i=void 0,o={},u=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2},{value:"Rust",id:"rust",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/shuffle-the-array/",children:"https://leetcode.com/problems/shuffle-the-array/"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def shuffle(self, nums: List[int], n: int) -> List[int]:\n        result = []\n        for i in range(n):\n            result.append(nums[i])\n            result.append(nums[i+n])\n        return result\n"})}),"\n",(0,r.jsx)(n.h2,{id:"go",children:"Go"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"func shuffle(nums []int, n int) []int {\n    var result []int\n    for i:= 0; i < n; i++ {\n        result = append(result, nums[i])\n        result = append(result, nums[i+n])\n    }\n\n    return result\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn shuffle(nums: Vec<i32>, n: i32) -> Vec<i32> {\n        let mut result: Vec<i32> = Vec::new();\n\n        for i in 0..n {\n            result.push(nums[i as usize]);\n            result.push(nums[(i+n) as usize]);\n        }\n\n        result\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},l=s.createContext(r);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);