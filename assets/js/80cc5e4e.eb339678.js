"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[72182],{619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/501-1000/find_duplicate_file_in_system","title":"609. Find Duplicate File in System","description":"https://leetcode.com/problems/find-duplicate-file-in-system/","source":"@site/docs/leetcode/501-1000/609_find_duplicate_file_in_system.md","sourceDirName":"leetcode/501-1000","slug":"/leetcode/501-1000/find_duplicate_file_in_system","permalink":"/docs/leetcode/501-1000/find_duplicate_file_in_system","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Hash","permalink":"/docs/tags/hash"}],"version":"current","sidebarPosition":609,"frontMatter":{"title":"609. Find Duplicate File in System","sidebar_label":"609. Find Duplicate File in System","tags":["Leetcode Medium","Hash"]},"sidebar":"docSidebar","previous":{"title":"606. Construct String from Binary Tree","permalink":"/docs/leetcode/501-1000/construct_string_from_binary_tree"},"next":{"title":"617. Merge Two Binary Trees","permalink":"/docs/leetcode/501-1000/merge_two_binary_trees"}}');var s=n(74848),l=n(28453);const o={title:"609. Find Duplicate File in System",sidebar_label:"609. Find Duplicate File in System",tags:["Leetcode Medium","Hash"]},r=void 0,c={},a=[{value:"Python",id:"python",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/find-duplicate-file-in-system/",children:"https://leetcode.com/problems/find-duplicate-file-in-system/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Time: O(N) # N is amount of files"}),"\n",(0,s.jsx)(t.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from os.path import join as pathjoin\nfrom collections import defaultdict\n\n\nclass Solution:\n    def findDuplicate(self, paths: List[str]) -> List[List[str]]:\n        mapper = defaultdict(list)\n\n        for path in paths:\n            records = path.split(' ')\n\n            folder = records[0]\n            files = records[1:]\n\n            for file in files:\n                filename, content = file.split('(')\n                content = content[:-1]\n\n                mapper[content].append(pathjoin(folder, filename))\n\n        return [items for items in mapper.values() if len(items) > 1]\n"})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},l=i.createContext(s);function o(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);