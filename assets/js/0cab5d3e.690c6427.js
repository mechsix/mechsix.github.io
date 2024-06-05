"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[11514],{72872:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>m});var n=a(74848),l=a(28453);const t={title:"22. Generate Parentheses",sidebar_label:"22. Generate Parentheses",tags:["Leetcode Medium","Backtracking"]},c=void 0,i={id:"leetcode/1-500/generate_parenetheses",title:"22. Generate Parentheses",description:"https://leetcode.com/problems/generate-parentheses/",source:"@site/docs/leetcode/1-500/22_generate_parenetheses.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/generate_parenetheses",permalink:"/docs/leetcode/1-500/generate_parenetheses",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:22,frontMatter:{title:"22. Generate Parentheses",sidebar_label:"22. Generate Parentheses",tags:["Leetcode Medium","Backtracking"]},sidebar:"docSidebar",previous:{title:"21. Merge Two Sorted Lists",permalink:"/docs/leetcode/1-500/merge_sorted_list"},next:{title:"23. Merge k Sorted Lists",permalink:"/docs/leetcode/1-500/merge_k_sorted_lists"}},r={},m=[{value:"Python",id:"python",level:2},{value:"Backtracking",id:"backtracking",level:3},{value:"Javascript",id:"javascript",level:2}];function h(s){const e={a:"a",annotation:"annotation",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",msup:"msup",p:"p",path:"path",pre:"pre",semantics:"semantics",span:"span",svg:"svg",ul:"ul",...(0,l.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/generate-parentheses/",children:"https://leetcode.com/problems/generate-parentheses/"})}),"\n",(0,n.jsx)(e.h2,{id:"python",children:"Python"}),"\n",(0,n.jsx)(e.h3,{id:"backtracking",children:"Backtracking"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Time:"}),"\n"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"n"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{linethickness:"0px",children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsx)(e.mi,{children:"k"})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"4"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.msqrt,{children:(0,n.jsx)(e.mi,{children:"n"})})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O\\left(\\frac {1} {1+n} {2n \\choose k}\\right) = O\\left(\\frac {4^n} {n\\sqrt{n}}\\right)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7693em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"("})}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:")"})})]})}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:")"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3414em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.3097em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord sqrt",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8003em"},children:[(0,n.jsxs)(e.span,{className:"svg-align",style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",style:{paddingLeft:"0.833em"},children:(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})})]}),(0,n.jsxs)(e.span,{style:{top:"-2.7603em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:(0,n.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,n.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2397em"},children:(0,n.jsx)(e.span,{})})})]})})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"4"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.93em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:")"})})]})]})]})]})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Space:"}),"\n"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"O"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mn,{children:"4"}),(0,n.jsx)(e.mi,{children:"n"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.msqrt,{children:(0,n.jsx)(e.mi,{children:"n"})})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"O\\left(\\frac {4^n} {n\\sqrt{n}}\\right)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:"("})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3414em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.3097em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord sqrt",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8003em"},children:[(0,n.jsxs)(e.span,{className:"svg-align",style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",style:{paddingLeft:"0.833em"},children:(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})})]}),(0,n.jsxs)(e.span,{style:{top:"-2.7603em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:(0,n.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,n.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2397em"},children:(0,n.jsx)(e.span,{})})})]})})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"4"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.93em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size3",children:")"})})]})]})})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'from typing import List\n\nclass Solution:\n    def generateParenthesis(self, n: int) -> List[str]:\n        result = []\n        def backtrack(track: List[str], left: int, right: int):\n            if left == right and left == n:\n                result.append(\'\'.join(track))\n                return\n\n            if left < n:\n                track.append("(")\n                backtrack(track, left+1, right)\n                track.pop()\n\n            if right < left:\n                track.append(")")\n                backtrack(track, left, right+1)\n                track.pop()\n\n        backtrack([], 0, 0)\n        return result\n'})}),"\n",(0,n.jsx)(e.h2,{id:"javascript",children:"Javascript"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-javascript",children:"var generateParenthesis = function(n) {\n  const result = [];\n\n  var backtrack = function(open, close, track = []) {\n    if (open === close && open === n) {\n      result.push(track.join(''));\n      return;\n    }\n\n    if (open < n) {\n      track.push('(');\n      backtrack(open + 1, close, track);\n      track.pop();\n    }\n\n    if (close < open) {\n      track.push(')');\n      backtrack(open, close +1, track);\n      track.pop();\n    }\n  }\n\n  backtrack(0,0);\n\n  return result;\n};\n"})})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>c,x:()=>i});var n=a(96540);const l={},t=n.createContext(l);function c(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:c(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);