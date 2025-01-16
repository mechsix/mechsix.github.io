"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[77929],{80148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"leetcode/1-500/pascal_triangle_II","title":"119. Pascal\'s Triangle II","description":"https://leetcode.com/problems/pascals-triangle-ii","source":"@site/docs/leetcode/1-500/119_pascal_triangle_II.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/pascal_triangle_II","permalink":"/docs/leetcode/1-500/pascal_triangle_II","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"}],"version":"current","sidebarPosition":119,"frontMatter":{"title":"119. Pascal\'s Triangle II","sidebar_label":"119. Pascal\'s Triangle II","tags":["Leetcode Easy"]},"sidebar":"docSidebar","previous":{"title":"118. Pascal\'s Triangle","permalink":"/docs/leetcode/1-500/pascal_triangle"},"next":{"title":"120. Triangle","permalink":"/docs/leetcode/1-500/triangle"}}');var l=t(74848),s=t(28453);const a={title:"119. Pascal's Triangle II",sidebar_label:"119. Pascal's Triangle II",tags:["Leetcode Easy"]},c=void 0,i={},o=[{value:"Python",id:"python",level:2},{value:"Recursive",id:"recursive",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://leetcode.com/problems/pascals-triangle-ii",children:"https://leetcode.com/problems/pascals-triangle-ii"})}),"\n",(0,l.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,l.jsx)(n.h3,{id:"recursive",children:"Recursive"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def getRow(self, rowIndex: int) -> List[int]:\n        if rowIndex == 0:\n            return [1]\n        if rowIndex == 1:\n            return [1, 1]\n\n        return self._generate(2, rowIndex, [1, 1])\n\n    def _generate(self, level, target_level, pre_level):\n        if level > target_level:\n            return pre_level\n\n        current = [1]\n        for i in range(1, len(pre_level)):\n            pre = pre_level[i-1]\n            cur = pre_level[i]\n            current.append(pre+cur)\n        current.append(1)\n\n        return self._generate(level+1, target_level, current)\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);