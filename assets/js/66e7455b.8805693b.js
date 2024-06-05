"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97735],{58308:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(74848),t=n(28453);const r={title:"804. Unique Morse Code Words",sidebar_label:"804. Unique Morse Code Words",tags:["Leetcode Easy","Hash"]},i=void 0,d={id:"leetcode/501-1000/unique_morse_code_words",title:"804. Unique Morse Code Words",description:"https://leetcode.com/problems/unique-morse-code-words/",source:"@site/docs/leetcode/501-1000/804_unique_morse_code_words.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/unique_morse_code_words",permalink:"/docs/leetcode/501-1000/unique_morse_code_words",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:804,frontMatter:{title:"804. Unique Morse Code Words",sidebar_label:"804. Unique Morse Code Words",tags:["Leetcode Easy","Hash"]},sidebar:"docSidebar",previous:{title:"802. Find Eventual Safe States",permalink:"/docs/leetcode/501-1000/find_eventual_safe_states"},next:{title:"814. Binary Tree Pruning",permalink:"/docs/leetcode/501-1000/binary_tree_pruning"}},c={},l=[{value:"Python",id:"python",level:2}];function a(e){const o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://leetcode.com/problems/unique-morse-code-words/",children:"https://leetcode.com/problems/unique-morse-code-words/"})}),"\n",(0,s.jsx)(o.h2,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Mapped them and remove duplicate with ",(0,s.jsx)(o.code,{children:"set"})]}),"\n"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:'from string import ascii_lowercase\n\n\nclass Solution:\n    def uniqueMorseRepresentations(self, words: List[str]) -> int:\n        mapper = {\n            letter: morse for letter, morse in zip(\n                ascii_lowercase,\n                [\n                    ".-","-...","-.-.","-..",".",\n                    "..-.","--.","....","..",".---",\n                    "-.-",".-..","--","-.","---",\n                    ".--.","--.-",".-.","...","-",\n                    "..-","...-",".--","-..-","-.--",\n                    "--.."\n                ]\n            )\n        }\n\n        morses = set([\'\'.join([mapper[letter] for letter in word]) for word in words])\n        return len(morses)\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>d});var s=n(96540);const t={},r=s.createContext(t);function i(e){const o=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);