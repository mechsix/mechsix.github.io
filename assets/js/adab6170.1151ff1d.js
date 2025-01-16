"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[95671],{96303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"leetcode/1-500/excel_sheet_column","title":"171. Excel Sheet Column Number","description":"https://leetcode.com/problems/excel-sheet-column-number/","source":"@site/docs/leetcode/1-500/171_excel_sheet_column.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/excel_sheet_column","permalink":"/docs/leetcode/1-500/excel_sheet_column","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Go","permalink":"/docs/tags/go"}],"version":"current","sidebarPosition":171,"frontMatter":{"title":"171. Excel Sheet Column Number","sidebar_label":"171. Excel Sheet Column Number","tags":["Leetcode Easy","Go"]},"sidebar":"docSidebar","previous":{"title":"169. Majority Element","permalink":"/docs/leetcode/1-500/majority_elements"},"next":{"title":"173. Binary Search Tree Iterator","permalink":"/docs/leetcode/1-500/bst_iterator"}}');var l=n(74848),r=n(28453);const c={title:"171. Excel Sheet Column Number",sidebar_label:"171. Excel Sheet Column Number",tags:["Leetcode Easy","Go"]},s=void 0,i={},a=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://leetcode.com/problems/excel-sheet-column-number/",children:"https://leetcode.com/problems/excel-sheet-column-number/"})}),"\n",(0,l.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def titleToNumber(self, columnTitle: str) -> int:\n        result = 0\n        power = 0\n        for char in columnTitle[::-1]:\n            result += (ord(char)-64) * (26 ** power)\n            power += 1\n        return result\n"})}),"\n",(0,l.jsx)(t.h2,{id:"go",children:"Go"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-go",children:"func titleToNumber(columnTitle string) int {\n    length := len(columnTitle)\n    var result float64 = 0\n    var power int = 0\n\n    for i := range(columnTitle) {\n        result += float64(columnTitle[length-i-1] - 64) * math.Pow(float64(26), float64(power))\n        power += 1\n    }\n    return int(result)\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var o=n(96540);const l={},r=o.createContext(l);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);