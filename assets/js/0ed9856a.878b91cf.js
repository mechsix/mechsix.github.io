"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[42601],{20191:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"aws/rds","title":"RDS","description":"Overview","source":"@site/docs/aws/rds.md","sourceDirName":"aws","slug":"/aws/rds","permalink":"/docs/aws/rds","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RDS","sidebar_label":"RDS"},"sidebar":"docSidebar","previous":{"title":"SQS/SNS/MSK","permalink":"/docs/aws/queues"},"next":{"title":"Route53","permalink":"/docs/aws/route53"}}');var l=i(74848),s=i(28453);const a={title:"RDS",sidebar_label:"RDS"},t=void 0,o={},c=[{value:"Overview",id:"overview",level:2},{value:"Multi-AZ &amp; Read Replication",id:"multi-az--read-replication",level:2},{value:"Read-Replicas",id:"read-replicas",level:3},{value:"Multi-AZ",id:"multi-az",level:3},{value:"Aurora",id:"aurora",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["RDS\u6709\u4e09\u7a2e\u5132\u5b58","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Provisioned IOPS Storage: \u9ad8\u6548\u80fd\uff0c\u8cb4"}),"\n",(0,l.jsx)(n.li,{children:"General Purpose Storage: \u4e00\u822c\u7528\u9014"}),"\n",(0,l.jsx)(n.li,{children:"Magnetic Storage: \u4f4e\u6548\u80fd\uff0c\u4fbf\u5b9c\uff0c\u7528\u78c1\u5e36\uff0c\u8d85\u6162"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["RDS\u8981\u5f9e\u975e\u52a0\u5bc6\u8b8a\u6210\u52a0\u5bc6\uff1a\u53ea\u80fd\u624b\u52d5\u642c","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5efa\u7acb\u52a0\u5bc6\u7684RDS"}),"\n",(0,l.jsx)(n.li,{children:"\u624b\u52d5\u5f9e\u539f\u672c\u7684RDS\u642c\u904e\u53bb"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Read-Replica\u57282018 Jan\u624dsupport Multi-AZ deployment"}),"\n",(0,l.jsxs)(n.li,{children:["Read-Replica\u73fe\u5728\u652f\u63f4\uff1a MySQL, MariaDB, PostgreSQL, Oracle, Amazon Aurora\uff0c\u53ea\u6709MS SQL Server\u9084\u4e0d\u652f\u63f4","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://aws.amazon.com/rds/features/read-replicas/",children:"https://aws.amazon.com/rds/features/read-replicas/"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"multi-az--read-replication",children:"Multi-AZ & Read Replication"}),"\n",(0,l.jsx)(n.h3,{id:"read-replicas",children:"Read-Replicas"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Can be Multi-AZ"}),"\n",(0,l.jsx)(n.li,{children:"Use to increase performance"}),"\n",(0,l.jsx)(n.li,{children:"Must have backups turned on"}),"\n",(0,l.jsx)(n.li,{children:"Can be in different region"}),"\n",(0,l.jsx)(n.li,{children:"Replication DB can be promoted to master, this will break the Read Replica"}),"\n",(0,l.jsx)(n.li,{children:"Supported by MySQL, PostgreSQL, MariaDB, Oracle, Aurora (No SQL Server)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"multi-az",children:"Multi-AZ"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Use for DR"}),"\n",(0,l.jsx)(n.li,{children:"No maintenance required, AWS do all for you"}),"\n",(0,l.jsx)(n.li,{children:"Can be force a failover from one AZ to another by rebooting the RDS instance"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"aurora",children:"Aurora"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"PostgreSQL / MySQL compatible"}),"\n",(0,l.jsx)(n.li,{children:"Start with 10GB, max to 64GB auto-scaling"}),"\n",(0,l.jsx)(n.li,{children:"Compute up to 32 vCPUs and 244GB memory"}),"\n",(0,l.jsxs)(n.li,{children:["2 copies in each AZ; Minimum to 3 AZ, which is 6 copies by default","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Design to handle loss of 2 copies without effect availability and performance"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["3 types of replications","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Aurora Replicas: up to 15"}),"\n",(0,l.jsx)(n.li,{children:"MySQL Read Replicas: up to 5"}),"\n",(0,l.jsx)(n.li,{children:"PostgreSQL up to 1"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Auto-failover ONLY available on Aurora Replicas\xa0"}),"\n",(0,l.jsx)(n.li,{children:"Aurora Replica CANOT cross region"}),"\n",(0,l.jsx)(n.li,{children:"Auto backup is enabled by default"}),"\n",(0,l.jsxs)(n.li,{children:["Aurora\u662f\u4e00\u7a2eserverless","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u9069\u5408unpredictable workloads"}),"\n",(0,l.jsx)(n.li,{children:"On-daemond"}),"\n",(0,l.jsx)(n.li,{children:"Autoscaling for MySQL-compatible and PostgreSQL-compatible Aurora"}),"\n",(0,l.jsx)(n.li,{children:"Automatically start-up, shuts down on application\u2019s needs"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Aurora Snapshots CAN be shred to other AWS account"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>t});var r=i(96540);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);