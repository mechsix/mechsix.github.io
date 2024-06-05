"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[61156],{5520:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=a(74848),s=a(28453);const i={title:"Liquibase",sidebar_label:"Liquibase",tags:[]},t=void 0,r={id:"cheatsheet/liquibase",title:"Liquibase",description:"PostgreSQL",source:"@site/docs/cheatsheet/liquibase.md",sourceDirName:"cheatsheet",slug:"/cheatsheet/liquibase",permalink:"/docs/cheatsheet/liquibase",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Liquibase",sidebar_label:"Liquibase",tags:[]},sidebar:"docSidebar",previous:{title:"JS Data Operations",permalink:"/docs/cheatsheet/js-operation"},next:{title:"CSS Naming Convention",permalink:"/docs/dev_practice/css_naming_convention"}},o={},c=[{value:"PostgreSQL",id:"postgresql",level:2},{value:"Dev to Stg Scenario",id:"dev-to-stg-scenario",level:3},{value:"Create properties",id:"create-properties",level:4},{value:"Init ChangeLog from DEV",id:"init-changelog-from-dev",level:4},{value:"Install changelog table into source DB",id:"install-changelog-table-into-source-db",level:4},{value:"Preview difference btw DEV and STG",id:"preview-difference-btw-dev-and-stg",level:4},{value:"Generate changelog from snapshot to STG DB",id:"generate-changelog-from-snapshot-to-stg-db",level:4},{value:"DEV DB Schema changed...",id:"dev-db-schema-changed",level:4},{value:"Generate change log again",id:"generate-change-log-again",level:4},{value:"Update STG DB",id:"update-stg-db",level:4},{value:"DEV DB Schema changed again...",id:"dev-db-schema-changed-again",level:4},{value:"Rollback previous tag",id:"rollback-previous-tag",level:4},{value:"Use Snapshot",id:"use-snapshot",level:3},{value:"Snapshot DEV DB into snapshot.yaml",id:"snapshot-dev-db-into-snapshotyaml",level:4},{value:"Use snapshot to compare, generate change log for STG",id:"use-snapshot-to-compare-generate-change-log-for-stg",level:4}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,l.jsx)(n.h3,{id:"dev-to-stg-scenario",children:"Dev to Stg Scenario"}),"\n",(0,l.jsx)(n.h4,{id:"create-properties",children:"Create properties"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"export DB_DEV=jdbc:postgresql://127.0.0.1:5432/project_demo_dev\nexport DB_STG=jdbc:postgresql://127.0.0.1:5432/project_demo_stg\n"})}),"\n",(0,l.jsx)(n.h4,{id:"init-changelog-from-dev",children:"Init ChangeLog from DEV"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase generateChangeLog \\\n--url=$DB_DEV\n"})}),"\n",(0,l.jsx)(n.h4,{id:"install-changelog-table-into-source-db",children:"Install changelog table into source DB"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase update-sql \\\n--url=$DB_DEV\n\nliquibase update \\\n--url=$DB_DEV\n"})}),"\n",(0,l.jsx)(n.h4,{id:"preview-difference-btw-dev-and-stg",children:"Preview difference btw DEV and STG"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase diff \\\n--url=$DB_STG \\\n--referenceUrl=$DB_DEV\n"})}),"\n",(0,l.jsx)(n.h4,{id:"generate-changelog-from-snapshot-to-stg-db",children:"Generate changelog from snapshot to STG DB"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase diffchangelog \\\n--url=$DB_STG \\\n--reference-url=$DB_DEV\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase update-sql \\\n--url=$DB_STG\n\nliquibase update \\\n--url=$DB_STG\n\nliquibase tag init \\\n--url=$DB_STG\n"})}),"\n",(0,l.jsx)(n.h4,{id:"dev-db-schema-changed",children:"DEV DB Schema changed..."}),"\n",(0,l.jsx)(n.h4,{id:"generate-change-log-again",children:"Generate change log again"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase diffchangelog \\\n--url=$DB_STG \\\n--reference-url=$DB_DEV\n"})}),"\n",(0,l.jsx)(n.h4,{id:"update-stg-db",children:"Update STG DB"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase update \\\n--url=$DB_STG\n\nliquibase tag release1 \\\n--url=$DB_STG\n"})}),"\n",(0,l.jsx)(n.h4,{id:"dev-db-schema-changed-again",children:"DEV DB Schema changed again..."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase diffchangelog \\\n--url=$DB_STG \\\n--reference-url=$DB_DEV\n\nliquibase update \\\n--url=$DB_STG\n\nliquibase tag release2 \\\n--url=$DB_STG\n"})}),"\n",(0,l.jsx)(n.h4,{id:"rollback-previous-tag",children:"Rollback previous tag"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase rollback-sql \\\n--url=$DB_STG \\\n--tag=release1\n\nliquibase rollback \\\n--url=$DB_STG \\\n--tag=release1\n"})}),"\n",(0,l.jsx)(n.h3,{id:"use-snapshot",children:"Use Snapshot"}),"\n",(0,l.jsx)(n.h4,{id:"snapshot-dev-db-into-snapshotyaml",children:"Snapshot DEV DB into snapshot.yaml"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase snapshot \\\n--url=$DB_DEV \\\n--snapshotFormat=yaml \\\n--outputFile=snapshot.yaml\n"})}),"\n",(0,l.jsx)(n.h4,{id:"use-snapshot-to-compare-generate-change-log-for-stg",children:"Use snapshot to compare, generate change log for STG"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"liquibase diffchangelog \\\n--url=$DB_STG \\\n--reference-url=offline:postgresql=snapshot.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var l=a(96540);const s={},i=l.createContext(s);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);