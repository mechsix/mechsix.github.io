"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28289],{7888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"leetcode/1501-2000/patients_with_a_condition","title":"1527. Patients With a Condition","description":"Pandas","source":"@site/docs/leetcode/1501-2000/1527_patients_with_a_condition.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/patients_with_a_condition","permalink":"/docs/leetcode/1501-2000/patients_with_a_condition","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Pandas","permalink":"/docs/tags/pandas"},{"inline":true,"label":"SQL","permalink":"/docs/tags/sql"}],"version":"current","sidebarPosition":1527,"frontMatter":{"title":"1527. Patients With a Condition","sidebar_label":"1527. Patients With a Condition","tags":["Leetcode Easy","Pandas","SQL"]},"sidebar":"docSidebar","previous":{"title":"1519. Number of Nodes in the Sub-Tree With the Same Label","permalink":"/docs/leetcode/1501-2000/num_of_nodes_in_sub_tree_with_same_label"},"next":{"title":"1539. Kth Missing Positive Number","permalink":"/docs/leetcode/1501-2000/kth_missing_possitive_num"}}');var s=n(74848),a=n(28453);const o={title:"1527. Patients With a Condition",sidebar_label:"1527. Patients With a Condition",tags:["Leetcode Easy","Pandas","SQL"]},d=void 0,c={},r=[{value:"Pandas",id:"pandas",level:2},{value:"SQL",id:"sql",level:2}];function l(e){const t={code:"code",h2:"h2",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"pandas",children:"Pandas"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import pandas as pd\n\n\ndef find_patients(patients: pd.DataFrame) -> pd.DataFrame:\n    return patients[patients['conditions'].str.match(r'(\\bDIAB1|.+ DIAB1)')]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"sql",children:"SQL"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT\n    patient_id,\n    patient_name,\n    conditions\nFROM Patients\nWHERE conditions REGEXP '\\\\bDIAB1'\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);