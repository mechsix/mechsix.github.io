"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[92531],{38095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1-500/merge_intervals","title":"56. Merge Intervals","description":"https://leetcode.com/problems/merge-intervals/","source":"@site/docs/leetcode/1-500/56_merge_intervals.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/merge_intervals","permalink":"/docs/leetcode/1-500/merge_intervals","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Rust","permalink":"/docs/tags/rust"},{"inline":true,"label":"Interval","permalink":"/docs/tags/interval"}],"version":"current","sidebarPosition":56,"frontMatter":{"title":"56. Merge Intervals","sidebar_label":"56. Merge Intervals","tags":["Leetcode Medium","Rust","Interval"]},"sidebar":"docSidebar","previous":{"title":"55. Jump Game","permalink":"/docs/leetcode/1-500/jump_gamp"},"next":{"title":"57. Insert Interval","permalink":"/docs/leetcode/1-500/insert_interval"}}');var s=t(74848),i=t(28453);const l={title:"56. Merge Intervals",sidebar_label:"56. Merge Intervals",tags:["Leetcode Medium","Rust","Interval"]},a=void 0,o={},d=[{value:"Python",id:"python",level:2},{value:"Rust",id:"rust",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/merge-intervals/",children:"https://leetcode.com/problems/merge-intervals/"})}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def merge(self, intervals: List[List[int]]) -> List[List[int]]:\n        if len(intervals) < 2:\n            return intervals\n\n        intervals.sort(key=lambda pair: pair[0])\n\n        result = []\n        start, end = intervals[0]\n\n        for i in range(len(intervals)):\n            if intervals[i][0] <= end:\n                end = max(end, intervals[i][1])\n                continue\n            result.append([start, end])\n            start, end = intervals[i]\n\n        result.append([start, end])\n        return result\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::cmp::max;\n\nimpl Solution {\n    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {\n        if intervals.len() < 2 {\n            return intervals;\n        }\n\n        let mut sorted_intervals = intervals.clone();\n        sorted_intervals.sort_by_key(|pair| pair[0]);\n\n        let mut result = vec![];\n        let mut start = sorted_intervals[0][0];\n        let mut end = sorted_intervals[0][1];\n\n        for i in 0..sorted_intervals.len() {\n            if sorted_intervals[i as usize][0] <= end {\n                end = max(end, sorted_intervals[i as usize][1]);\n                continue\n            }\n            result.push(vec![start, end]);\n            start = sorted_intervals[i as usize][0];\n            end = sorted_intervals[i as usize][1];\n        }\n\n        result.push(vec![start, end]);\n\n        result\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);