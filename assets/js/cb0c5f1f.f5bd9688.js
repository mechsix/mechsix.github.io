"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[75355],{32441:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"leetcode/1-500/delete_duplicate_emails","title":"196. Delete Duplicate Emails","description":"https://leetcode.com/problems/delete-duplicate-emails","source":"@site/docs/leetcode/1-500/196_delete_duplicate_emails.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/delete_duplicate_emails","permalink":"/docs/leetcode/1-500/delete_duplicate_emails","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"SQL","permalink":"/docs/tags/sql"}],"version":"current","sidebarPosition":196,"frontMatter":{"title":"196. Delete Duplicate Emails","sidebar_label":"196. Delete Duplicate Emails","tags":["Leetcode Easy","SQL"]},"sidebar":"docSidebar","previous":{"title":"191. Number of 1 Bits","permalink":"/docs/leetcode/1-500/number_of_1_bits"},"next":{"title":"198. House Robber","permalink":"/docs/leetcode/1-500/house_robber"}}');var i=l(74848),n=l(28453);const o={title:"196. Delete Duplicate Emails",sidebar_label:"196. Delete Duplicate Emails",tags:["Leetcode Easy","SQL"]},c=void 0,a={},r=[{value:"MySQL",id:"mysql",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://leetcode.com/problems/delete-duplicate-emails",children:"https://leetcode.com/problems/delete-duplicate-emails"})}),"\n",(0,i.jsx)(t.h2,{id:"mysql",children:"MySQL"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"DELETE FROM Person\nWHERE id NOT IN\n( SELECT min_id FROM (\n        SELECT MIN(id) AS min_id, email\n        FROM Person\n        GROUP BY email\n    ) sub\n)\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>c});var s=l(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);