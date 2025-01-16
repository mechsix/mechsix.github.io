"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[15486],{61033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"leetcode/1-500/string_compression","title":"443. String Compression","description":"https://leetcode.com/problems/string-compression/","source":"@site/docs/leetcode/1-500/443_string_compression.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/string_compression","permalink":"/docs/leetcode/1-500/string_compression","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Two Pointer","permalink":"/docs/tags/two-pointer"},{"inline":true,"label":"CTCI","permalink":"/docs/tags/ctci"},{"inline":true,"label":"Rust","permalink":"/docs/tags/rust"}],"version":"current","sidebarPosition":443,"frontMatter":{"title":"443. String Compression","sidebar_label":"443. String Compression","tags":["Leetcode Medium","Two Pointer","CTCI","Rust"]},"sidebar":"docSidebar","previous":{"title":"441. Arranging Coins","permalink":"/docs/leetcode/1-500/arranging_coins"},"next":{"title":"445. Add Two Numbers II","permalink":"/docs/leetcode/1-500/add_two_numbers_ii"}}');var o=t(74848),r=t(28453);const i={title:"443. String Compression",sidebar_label:"443. String Compression",tags:["Leetcode Medium","Two Pointer","CTCI","Rust"]},c=void 0,l={},a=[{value:"Python",id:"python",level:2},{value:"Python Itertools Groupby",id:"python-itertools-groupby",level:3},{value:"Rust",id:"rust",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/string-compression/",children:"https://leetcode.com/problems/string-compression/"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CTCI 1.6 String Compression"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(n.h3,{id:"python-itertools-groupby",children:"Python Itertools Groupby"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ref: ",(0,o.jsx)(n.a,{href:"https://leetcode.com/problems/string-compression/solutions/896587/python-solution-using-group-by/",children:"https://leetcode.com/problems/string-compression/solutions/896587/python-solution-using-group-by/"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from itertools import groupby\n\n\nclass Solution:\n    def compress(self, chars: List[str]) -> int:\n        stack = []\n        for key, group in groupby(chars):\n            count = len(list(group))\n            stack.append(key)\n            if count > 1: stack.extend(list(str(count)))\n        chars[:] = stack\n"})}),"\n",(0,o.jsx)(n.h2,{id:"rust",children:"Rust"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-rust",children:"use std::iter::FromIterator;\n\n\nimpl Solution {\n    pub fn compress(chars: &mut Vec<char>) -> i32 {\n        let mut stack: Vec<char> = Vec::new();\n        let mut i = 0;\n\n        while i < chars.len() {\n            let mut count = 1;\n            while i + 1 < chars.len() && chars[i] == chars[i + 1] {\n                i += 1;\n                count += 1;\n            }\n\n            stack.push(chars[i]);\n\n            if count > 1 {\n                let count_chars: Vec<char> = count.to_string().chars().collect();\n                stack.extend(count_chars);\n            }\n\n            i += 1;\n        }\n\n        *chars = stack;\n        chars.len() as i32\n    }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);