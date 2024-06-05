"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[55426],{23930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(74848),r=n(28453);const i={title:"12. Integer to Roman",sidebar_label:"12. Integer to Roman",tags:["Leetcode Medium"]},c=void 0,s={id:"leetcode/1-500/integer_to_roman",title:"12. Integer to Roman",description:"https://leetcode.com/problems/integer-to-roman/",source:"@site/docs/leetcode/1-500/12_integer_to_roman.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/integer_to_roman",permalink:"/docs/leetcode/1-500/integer_to_roman",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:12,frontMatter:{title:"12. Integer to Roman",sidebar_label:"12. Integer to Roman",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"11. Container With Most Water",permalink:"/docs/leetcode/1-500/container_with_most_water"},next:{title:"13. Roman to Integer",permalink:"/docs/leetcode/1-500/roman_to_integer"}},a={},d=[{value:"Python",id:"python",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/integer-to-roman/",children:"https://leetcode.com/problems/integer-to-roman/"})}),"\n",(0,o.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"from collections import OrderedDict\n\nclass Solution:\n    def intToRoman(self, num: int) -> str:\n        mapper = OrderedDict({\n            1000: 'M',\n            900: 'CM',\n            500: 'D',\n            400: 'CD',\n            100: 'C',\n            90: 'XC',\n            50: 'L',\n            40: 'XL',\n            10: 'X',\n            9: 'IX',\n            5: 'V',\n            4: 'IV',\n            1: 'I',\n        })\n\n        digits = []\n        for n, digit in mapper.items():\n            if not num:\n                break\n            count, num = divmod(num, n)\n            digits.append(digit * count)\n        return ''.join(digits)\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);