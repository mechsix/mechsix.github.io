"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[41586],{65150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(74848),i=t(28453);const r={title:"161. One Edit Distance",sidebar_label:"161. One Edit Distance",tags:["Leetcode Medium","CTCI"]},l=void 0,o={id:"leetcode/1-500/one_edit_distance",title:"161. One Edit Distance",description:"https://leetcode.com/problems/one-edit-distance",source:"@site/docs/leetcode/1-500/161_one_edit_distance.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/one_edit_distance",permalink:"/docs/leetcode/1-500/one_edit_distance",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"CTCI",permalink:"/docs/tags/ctci"}],version:"current",sidebarPosition:161,frontMatter:{title:"161. One Edit Distance",sidebar_label:"161. One Edit Distance",tags:["Leetcode Medium","CTCI"]},sidebar:"docSidebar",previous:{title:"160. Intersection of Two Linked Lists",permalink:"/docs/leetcode/1-500/intersection_two_linked_lists"},next:{title:"165. Compare Version Numbers",permalink:"/docs/leetcode/1-500/compare_version_numbers"}},c={},d=[{value:"Python",id:"python",level:2},{value:"Rust",id:"rust",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/one-edit-distance",children:"https://leetcode.com/problems/one-edit-distance"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CTCI 1.5 One Away"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def isOneEditDistance(self, s: str, t: str) -> bool:\n        if s == t:\n            return False\n        elif len(s) == len(t):\n            return self.one_edit_replace(s, t)\n        elif len(s)+1 == len(t):\n            return self.one_edit_insert(s, t)\n        elif len(s)-1 == len(t):\n            return self.one_edit_insert(t, s)\n\n        return False\n\n    def one_edit_insert(self, s1, s2) -> bool:\n        cur1, cur2 = 0, 0\n        while cur1 < len(s1) and cur2 < len(s2):\n            if s1[cur1] != s2[cur2]:\n                if cur1 != cur2:\n                    return False\n                cur2 += 1\n            else:\n                cur1 += 1\n                cur2 += 1\n        return True\n\n    def one_edit_replace(self, s1, s2) -> bool:\n        see_diff = False\n        for i in range(len(s1)):\n            if s1[i] != s2[i]:\n                if see_diff:\n                    return False\n                see_diff = True\n        return True\n"})}),"\n",(0,s.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Solution {\n    pub fn is_one_edit_distance(s: String, t: String) -> bool {\n        if s == t {\n            return false;\n        } else if s.len() == t.len() {\n            return Solution::one_edit_replace(s, t);\n        } else if s.len()+1 == t.len() {\n            return Solution::one_edit_insert(s, t);\n        } else if s.len()-1 == t.len() {\n            return Solution::one_edit_insert(t, s);\n        }\n\n        false\n    }\n\n    pub fn one_edit_insert(s1: String, s2: String) -> bool {\n        let mut cur1: usize = 0;\n        let mut cur2: usize = 0;\n\n        while cur1 < s1.len() && cur2 < s2.len() {\n            if s1.chars().nth(cur1) != s2.chars().nth(cur2) {\n                if cur1 != cur2 {\n                    return false;\n                }\n                cur2 += 1;\n            } else {\n                cur1 += 1;\n                cur2 += 1;\n            }\n        }\n        true\n    }\n\n    pub fn one_edit_replace(s1: String, s2: String) -> bool {\n        let mut see_diff = false;\n        for i in 0..s1.len() {\n            if s1.chars().nth(i) != s2.chars().nth(i) {\n                if see_diff {\n                    return false;\n                }\n                see_diff = true;\n            }\n        }\n        true\n    }\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);