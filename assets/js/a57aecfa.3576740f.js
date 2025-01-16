"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[44482],{79839:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"aws/asg","title":"AutoScaling","description":"AWS Auto Scaling","source":"@site/docs/aws/asg.md","sourceDirName":"aws","slug":"/aws/asg","permalink":"/docs/aws/asg","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"AutoScaling","sidebar_label":"ASG"},"sidebar":"docSidebar","previous":{"title":"API Gateway","permalink":"/docs/aws/apigw"},"next":{"title":"DMS","permalink":"/docs/aws/dms"}}');var s=l(74848),c=l(28453);const a={title:"AutoScaling",sidebar_label:"ASG"},t=void 0,r={},h=[{value:"AWS Auto Scaling",id:"aws-auto-scaling",level:2},{value:"AWS EC2 Auto Scaling",id:"aws-ec2-auto-scaling",level:2},{value:"Amazon EC2 Auto Scaling Group (ASG)",id:"amazon-ec2-auto-scaling-group-asg",level:2},{value:"Lifecycle Hooks",id:"lifecycle-hooks",level:2},{value:"Health Check",id:"health-check",level:2}];function o(n){const e={a:"a",h2:"h2",li:"li",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"aws-auto-scaling",children:"AWS Auto Scaling"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7ba1\u7406\u8de8\u591a\u500b\u670d\u52d9\u7684scaling\uff0c\u53ef\u4ee5\u5305\u542b\u591a\u500bEC2 Auto Scaling Group"}),"\n",(0,s.jsxs)(e.li,{children:["Scaling Process * \u662f\u53ef\u4ee5suspend\u6389\u7684","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Launch: \u555f\u52d5EC2"}),"\n",(0,s.jsx)(e.li,{children:"Terminate: \u505c\u6b62EC2"}),"\n",(0,s.jsx)(e.li,{children:"HealthCheck: \u6aa2\u67e5EC2\u7684\u5065\u5eb7\u72c0\u614b"}),"\n",(0,s.jsx)(e.li,{children:"ReplaceUnhealthy: \u53d6\u4ee3\u6389\u4e0d\u5065\u5eb7\u7684EC2"}),"\n",(0,s.jsx)(e.li,{children:"AZRebalance: \u5e73\u5747\u4e0d\u540cAZ\u4e2d\u7684AutoScalingGroup\u7684\u6a5f\u5668\u6578\u91cf\uff0c\u4ee5\u63d0\u9ad8Availability\u3002\u4f46\u53ef\u80fd\u6703all healthy\u6642\u5019\u505a\u51faTerminate\u7684\u52d5\u4f5c"}),"\n",(0,s.jsx)(e.li,{children:"AlarmNotification: \u5f9eCloudWatch\u62ff\u5230Alarm\u4e8b\u4ef6"}),"\n",(0,s.jsx)(e.li,{children:"ScheduledActions: By Schedule\u7684scaling rule"}),"\n",(0,s.jsx)(e.li,{children:"AddToLoadBalancer: \u6a5f\u5668\u8d77\u4f86\u5f8c\uff0c\u78ba\u5b9ahealthy\u5f8c\uff0c\u5c07\u5176\u52a0\u5165LoadBalancer\u5f8c\u958b\u59cb\u9032\u884c\u670d\u52d9"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Health Check\u7684\u7a2e\u985e","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"EC2 Status Checks"}),"\n",(0,s.jsx)(e.li,{children:"ELB Health Checks (HTTP)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"aws-ec2-auto-scaling",children:"AWS EC2 Auto Scaling"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u53ef\u4ee5\u8de8AZ\uff0c\u4f46\u4e0d\u80fd\u8de8Region\n\u4f7f\u7528\u60c5\u5883","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9810\u5148\u5b9a\u7fa9\u7684scale strategy"}),"\n",(0,s.jsx)(e.li,{children:"\u9810\u6e2cscaling (\u9700\u8981\u8207AWS Auto Scaling\u4e00\u8d77\u5b9a\u7fa9)"}),"\n",(0,s.jsxs)(e.li,{children:["\u63d0\u9ad8Availability","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"EC2 \u53e2\u96c6\u9054\u5230\u9ad8\u5e73\u5747\u4f7f\u7528\u7387\u6642\uff0c\u4ee5\u905e\u589e\u65b9\u5f0f\u5c07\u65b0\u7684 Amazon EC2 \u57f7\u884c\u500b\u9ad4\u65b0\u589e\u5230 ASG"}),"\n",(0,s.jsx)(e.li,{children:"\u8a2d\u5b9a\u4e00\u500b\u689d\u4ef6\uff0c\u5728 CPU \u4f7f\u7528\u7387\u4f4e\u6642\uff0c\u4ee5\u76f8\u540c\u7684\u91cf\u905e\u6e1b\u79fb\u9664\u57f7\u884c\u500b\u9ad4"}),"\n",(0,s.jsx)(e.li,{children:"\u7528 Amazon CloudWatch \u50b3\u9001\u8b66\u793a\u4ee5\u89f8\u767c\u64f4\u5c55\u6d3b\u52d5\uff0c\u4e26\u4f7f\u7528 Elastic Load Balancing (ELB) \u5c07\u6d41\u91cf\u5206\u914d\u7d66 ASG \u5167\u7684\u57f7\u884c\u500b\u9ad4"}),"\n",(0,s.jsx)(e.li,{children:"\u82e5\u8ca0\u8f09\u8b8a\u5316\u662f\u53ef\u9810\u6e2c\u7684\uff0c\u5247\u53ef\u900f\u904e Amazon EC2 Auto Scaling \u8a2d\u5b9a\u6392\u7a0b\uff0c\u4ee5\u898f\u5283\u60a8\u7684\u64f4\u5c55\u6d3b\u52d5"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Launch Configuration (\u555f\u52d5\u7d44\u614b)","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ASG\u555f\u52d5EC2 Instance\u6642\u7684template"}),"\n",(0,s.jsxs)(e.li,{children:["\u53ef\u4ee5\u5305\u542b","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"AMI ID"}),"\n",(0,s.jsx)(e.li,{children:"Key Pair"}),"\n",(0,s.jsx)(e.li,{children:"Security Group"}),"\n",(0,s.jsx)(e.li,{children:"Block Device Mapping"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4e0d\u6703\u555f\u52d5\u8d85\u904equota\u5141\u8a31\u6578\u91cf\u7684EC2","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ASG\u8a2d\u5b9a\u8d85\u904equota\u6642\uff0c\u6703\u4ee5quota\u4e0a\u9650\u70ba\u6e96"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Auto Scaling balance: Best Practice\u662f\u5c07Auto Scaling balance\u8de8AZ"}),"\n",(0,s.jsxs)(e.li,{children:["\u7e2e\u6e1b\u898f\u6a21\u6642","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u9700\u8981\u5b9a\u7fa9Terminate Policy\u4ee5\u6c7a\u5b9a\u8981\u81ea\u52d5\u505c\u6389\u7684\u662f\u54ea\u4e9bInstance"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u4ee5\u5c0d\u7279\u5b9aInstance\u555f\u52d5terminate protect\uff0c\u53ef\u4ee5\u907f\u514dAuto Scaling\u505c\u6389\u8a72Instance"}),"\n",(0,s.jsxs)(e.li,{children:["\u82e5\u8981\u88abTerminate\u7684instance\u6709\u8cc7\u6599\u8981\u4fdd\u5b58","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u52d9\u5fc5\u5b58\u5728\u5916\u90e8\u670d\u52d9\u5982S3, RDS, DynamoDB"}),"\n",(0,s.jsx)(e.li,{children:"Terminate\u6389\u7684\u8cc7\u6599\u662f\u6551\u4e0d\u56de\u4f86\u7684"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u82e5\u8981\u88abTerminate\u7684instance\u4e0a\u6709\u6b63\u5728\u670d\u52d9\u7684user","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"EC2 Auto Scaling Group\u4e26\u4e0d\u652f\u63f4terminate wait"}),"\n",(0,s.jsx)(e.li,{children:"\u8981\u5be6\u73fe\u9700\u8981\u900f\u904eRoute53\uff0cReserve Proxy\u6216Microservice\u89e3\u6c7a"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"amazon-ec2-auto-scaling-group-asg",children:"Amazon EC2 Auto Scaling Group (ASG)"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5305\u542b\u4e00\u7d44\u7279\u6027\u76f8\u4f3c\u7684EC2 instance\u7684\u908f\u8f2f\u7fa4\u7d44"}),"\n",(0,s.jsx)(e.li,{children:"\u522a\u9664ASG\u6703\u540c\u6642\u505c\u6389\u8a72ASG\u4e2d\u5c1a\u5728\u57f7\u884c\u7684EC2 instance"}),"\n",(0,s.jsx)(e.li,{children:"\u4e00\u500bASG\u53ea\u80fd\u6709\u4e00\u500bLaunch Configuration\uff0c\u800c\u4e14\u5efa\u7acb\u5f8c\u4e0d\u80fd\u4fee\u6539"}),"\n",(0,s.jsxs)(e.li,{children:["ASG\u5167\u53ef\u4ee5\u52a0\u5165quota\u5141\u8a31\u6578\u91cf\u7684EC2","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html",children:"On-Demand Instance Limit"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html",children:"Spot Instance Limit"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5728ASG\u5efa\u7acb\u5f8c\u88ab\u555f\u52d5\u7684Instance\uff0c\u4e0d\u6703\u81ea\u52d5\u5c07\u4e4b\u524dinstance\u7684\u8cc7\u6599\u8907\u88fd\u5230\u65b0\u7684instance","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u82e5\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html",children:"lifecycle hooks"}),"\u53bb\u8907\u88fd\u8cc7\u6599"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u65e2\u6709\u7684EC2\u4e0acreate ASG\u6642\uff0c\u4e0d\u6703\u81ea\u52d5\u5efa\u7acbAMI"}),"\n",(0,s.jsxs)(e.li,{children:["\u53ef\u4ee5\u5c07ASG\u5167\u7684Instance\u53ef\u4ee5\u8a2d\u5b9aEC2 Type","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Spot Instance Only: Scale\u4e0d\u4e00\u5b9a\u6703\u6210\u529f\uff0c\u4f46\u80fd\u7701\u6210\u672c"}),"\n",(0,s.jsx)(e.li,{children:"Reserved Instance"}),"\n",(0,s.jsx)(e.li,{children:"On-Daemon Instance"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"lifecycle-hooks",children:"Lifecycle Hooks"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"EC2 Auto Scaling\u7684instance\u555f\u52d5\u6216\u505c\u6b62\u6642\u63a1\u53d6\u884c\u52d5"}),"\n",(0,s.jsxs)(e.li,{children:["\u6709\u5169\u7a2e\uff1aLaunch Hook\u548cTerminate Hook","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Launch Hook\u53ef\u4ee5\u7528\u4f86\u5728base AMI\u4e0a\u5b89\u88dd\u6240\u9700\u7684\u8edf\u9ad4\u74b0\u5883"}),"\n",(0,s.jsx)(e.li,{children:"Terminate\u53ef\u4ee5\u5728\u7d50\u675finstance\u524d\u6536\u96c6\u8cc7\u6599"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"health-check",children:"Health Check"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["EC2 Auto Scaling\u6709\u81ea\u5df1\u7684",(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html",children:"health checks"}),"\u6a5f\u5236"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5982\u679c\u6709\u639bELB\uff0c\u4e5f\u53ef\u4ee5\u652f\u63f4",(0,s.jsx)(e.a,{href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html",children:"ELB health checks"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f46ELB\u5c0dEC2 Auto Scaling\u4e0d\u662f\u5fc5\u8981\u7684"}),"\n",(0,s.jsx)(e.li,{children:"\u53ea\u662f\u6709ELB\u5b58\u5728\u7684\u8a71\uff0c\u4f7f\u7528ELB health check\u8f03\u6b63\u78ba"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u4e5f\u652f\u63f4ALB (Application Load Balancer)\u6216NLB (Network Load Balancer)\u7684health check"}),"\n",(0,s.jsxs)(e.li,{children:["EC2 Auto Scaling\u81ea\u5e36\u7684Health Check\u662f\u53ef\u4ee5\u624b\u52d5\u89f8\u767c\u7684\u7684","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u900f\u904eAPI call:\xa0SetInstanceHealth\uff0c\u4f8b\u5982change instance state to UNHEALTHY"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u662f\u6307ELB, ALB, NLB\u7684Health Check"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u53ef\u4ee5suspend\u66ab\u505chealth check","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u900f\u904eAPI call: SuspendProcesses\u548cResumeProcess API"}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,l)=>{l.d(e,{R:()=>a,x:()=>t});var i=l(96540);const s={},c=i.createContext(s);function a(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);