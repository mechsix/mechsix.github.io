"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[644],{49783:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var a=n(74848),i=n(28453);const l={title:"96. Unique Binary Trees",sidebar_label:"96. Unique Binary Trees",tags:["Leetcode Medium","TODO"]},r=void 0,m={id:"leetcode/1-500/unique_binary_trees",title:"96. Unique Binary Trees",description:"https://leetcode.com/problems/unique-binary-search-trees",source:"@site/docs/leetcode/1-500/96_unique_binary_trees.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/unique_binary_trees",permalink:"/docs/leetcode/1-500/unique_binary_trees",draft:!1,unlisted:!1,tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"TODO",permalink:"/docs/tags/todo"}],version:"current",sidebarPosition:96,frontMatter:{title:"96. Unique Binary Trees",sidebar_label:"96. Unique Binary Trees",tags:["Leetcode Medium","TODO"]},sidebar:"docSidebar",previous:{title:"95. Unique Binary Search Trees II",permalink:"/docs/leetcode/1-500/uniq_bin_trees_ii"},next:{title:"97. Interleaving String",permalink:"/docs/leetcode/1-500/interleaving_string"}},t={},c=[{value:"Considering",id:"considering",level:2},{value:"Python",id:"python",level:2}];function h(e){const s={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",munderover:"munderover",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://leetcode.com/problems/unique-binary-search-trees",children:"https://leetcode.com/problems/unique-binary-search-trees"})}),"\n",(0,a.jsx)(s.h2,{id:"considering",children:"Considering"}),"\n",(0,a.jsxs)(s.p,{children:["Pickup ",(0,a.jsx)(s.code,{children:"i"})," as the root node, then:"]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Left sub-tree: numTrees(i-1)\nRight sub-tree: numTrees(n-i)"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"And the possible permutations will be the product of left * right, which is"}),"\n",(0,a.jsx)(s.span,{className:"katex-display",children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"T"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsxs)(s.munderover,{children:[(0,a.jsx)(s.mo,{children:"\u2211"}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.mi,{children:"n"})]}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"T"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"}),(0,a.jsx)(s.mo,{children:"\u2217"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"T"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"numTrees(n) = \\sum_{i=1}^n numTrees(i-1) * numTrees(n-i)"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"rees"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"2.9291em",verticalAlign:"-1.2777em"}}),(0,a.jsx)(s.span,{className:"mop op-limits",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsxs)(s.span,{className:"vlist",style:{height:"1.6514em"},children:[(0,a.jsxs)(s.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(s.span,{className:"mord mtight",children:[(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"}),(0,a.jsx)(s.span,{className:"mrel mtight",children:"="}),(0,a.jsx)(s.span,{className:"mord mtight",children:"1"})]})})]}),(0,a.jsxs)(s.span,{style:{top:"-3.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(s.span,{children:(0,a.jsx)(s.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,a.jsxs)(s.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3.05em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"n"})})]})]}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"1.2777em"},children:(0,a.jsx)(s.span,{})})})]})}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"rees"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mclose",children:")"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2217"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"rees"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,a.jsx)(s.h2,{id:"python",children:"Python"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-python",children:"class Solution:\n    def __init__(self):\n        self.memory = {}\n\n    def numTrees(self, n):\n        if n in self.memory:\n            return self.memory[n]\n        if n in (0, 1):\n            return 1\n\n        ans = 0\n        for i in range(1, n + 1):\n            left = self.numTrees(i - 1)\n            right = self.numTrees(n - i)\n            ans += left * right\n\n        self.memory[n] = ans\n        return ans\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>m});var a=n(96540);const i={},l=a.createContext(i);function r(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function m(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);