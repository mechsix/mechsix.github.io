"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[82969],{97196:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"leetcode/1-500/zigzag_conversion","title":"6. Zigzag Conversion","description":"https://leetcode.com/problems/zigzag-conversion/","source":"@site/docs/leetcode/1-500/6_zigzag_conversion.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/zigzag_conversion","permalink":"/docs/leetcode/1-500/zigzag_conversion","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":6,"frontMatter":{"title":"6. Zigzag Conversion","sidebar_label":"6. Zigzag Conversion","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"5. Longest Palindromic Substring","permalink":"/docs/leetcode/1-500/longest_palindromic_substring"},"next":{"title":"7. Reverse Integer","permalink":"/docs/leetcode/1-500/reverse_int"}}');var i=a(74848),m=a(28453);const l={title:"6. Zigzag Conversion",sidebar_label:"6. Zigzag Conversion",tags:["Leetcode Medium"]},c=void 0,t={},r=[{value:"Python",id:"python",level:2}];function o(s){const e={a:"a",annotation:"annotation",code:"code",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,m.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://leetcode.com/problems/zigzag-conversion/",children:"https://leetcode.com/problems/zigzag-conversion/"})}),"\n",(0,i.jsx)(e.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(e.p,{children:"\u516c\u5f0f\u62ffExcel\u89c0\u5bdf\u6b78\u7d0d\u51fa\u4f86\u7684\uff0c\u6709k\u6b04(\u5373\u984c\u76ee\u7684numRows)\uff0c\u8a72\u5b57\u5143\u7684index\u70bai\uff0c\u5247\uff1a"}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"b"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mo,{children:"\u2223"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mtext,{children:"\u200a"}),(0,i.jsx)(e.mo,{lspace:"0.22em",rspace:"0.22em",children:(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{mathvariant:"normal",children:"m"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"o"}),(0,i.jsx)(e.mi,{mathvariant:"normal",children:"d"})]})}),(0,i.jsx)(e.mtext,{children:"\u200a"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"\u22c5"}),(0,i.jsx)(e.mn,{children:"2"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"2"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mi,{children:"i"}),(0,i.jsx)(e.mo,{children:"+"}),(0,i.jsx)(e.mn,{children:"1"}),(0,i.jsx)(e.mo,{children:"\u2223"}),(0,i.jsx)(e.mo,{children:"\u2212"}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"b = k - \\mid i \\bmod (k \\cdot 2-2) - i + 1 \\mid - 1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"b"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"\u2223"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.0556em"}}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:(0,i.jsx)(e.span,{className:"mord",children:(0,i.jsx)(e.span,{className:"mord mathrm",children:"mod"})})}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.0556em"}}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"2"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.jsx)(e.span,{className:"mbin",children:"+"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"\u2223"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Time: O(N)"}),"\n",(0,i.jsx)(e.li,{children:"Space: O(N)"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"class Solution:\n    def convert(self, s: str, numRows: int) -> str:\n        if numRows < 2:\n            return s\n\n        mapper = [[] for i in range(numRows)]\n\n        for i, char in enumerate(s):\n            bucket = numRows - abs(i%(numRows*2-2)-numRows+1) - 1\n            mapper[bucket].append(char)\n\n        return ''.join([char for bucket in mapper for char in bucket])\n"})})]})}function h(s={}){const{wrapper:e}={...(0,m.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(o,{...s})}):o(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>l,x:()=>c});var n=a(96540);const i={},m=n.createContext(i);function l(s){const e=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),n.createElement(m.Provider,{value:e},s.children)}}}]);