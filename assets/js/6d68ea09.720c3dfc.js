"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[98588],{60025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(74848),i=n(28453);const a={title:"566. Reshape the Matrix",sidebar_label:"566. Reshape the Matrix",tags:["Leetcode Easy","Matrix"]},o=void 0,s={id:"leetcode/501-1000/reshape_matrix",title:"566. Reshape the Matrix",description:"Python",source:"@site/docs/leetcode/501-1000/566_reshape_matrix.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/reshape_matrix",permalink:"/docs/leetcode/501-1000/reshape_matrix",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Matrix",permalink:"/docs/tags/matrix"}],version:"current",sidebarPosition:566,frontMatter:{title:"566. Reshape the Matrix",sidebar_label:"566. Reshape the Matrix",tags:["Leetcode Easy","Matrix"]},sidebar:"docSidebar",previous:{title:"563. Binary Tree Tilt",permalink:"/docs/leetcode/501-1000/binary_tree_tilt"},next:{title:"567. Permutation in String",permalink:"/docs/leetcode/501-1000/permutation_in_string"}},c={},l=[{value:"Python",id:"python",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Time: O(m*n)"}),"\n",(0,r.jsx)(t.li,{children:"Space: O(1)"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:\n        new_mat = []\n        new_row = []\n\n        for row in mat:\n            for val in row:\n                new_row.append(val)\n                if len(new_row) >= c:\n                    new_mat.append(new_row)\n                    new_row = []\n\n        return new_mat if len(new_mat) == r and len(new_mat[-1]) == c else mat\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);