"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37673],{94212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=n(74848),s=n(28453);const o={title:"1295. Find Numbers with Even Number of Digits",sidebar_label:"1295. Find Numbers with Even Number of Digits",tags:["Leetcode Easy"]},r=void 0,c={id:"leetcode/1001-1500/find_nums_with_even_digits",title:"1295. Find Numbers with Even Number of Digits",description:"Python",source:"@site/docs/leetcode/1001-1500/1295_find_nums_with_even_digits.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/find_nums_with_even_digits",permalink:"/docs/leetcode/1001-1500/find_nums_with_even_digits",draft:!1,unlisted:!1,tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:1295,frontMatter:{title:"1295. Find Numbers with Even Number of Digits",sidebar_label:"1295. Find Numbers with Even Number of Digits",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"1291. Sequential Digits",permalink:"/docs/leetcode/1001-1500/sequential_digits"},next:{title:"1299. Replace Elements with Greatest Element on Right Side",permalink:"/docs/leetcode/1001-1500/replace_elm_with_greatest_right"}},d={},u=[{value:"Python",id:"python",level:2}];function l(e){const t={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def findNumbers(self, nums: List[int]) -> int:\n        return reduce(lambda counter, num: counter+1 if len(str(num))%2==0 else counter, nums, 0)\n"})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);