"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[492],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=o(a),k=l,h=m["".concat(u,".").concat(k)]||m[k]||p[k]||r;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95984:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],c={title:"AutoScaling",sidebar_label:"ASG"},u=void 0,o={unversionedId:"aws/asg",id:"aws/asg",isDocsHomePage:!1,title:"AutoScaling",description:"AWS Auto Scaling",source:"@site/docs/aws/asg.md",sourceDirName:"aws",slug:"/aws/asg",permalink:"/docs/aws/asg",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/aws/asg.md",tags:[],version:"current",frontMatter:{title:"AutoScaling",sidebar_label:"ASG"},sidebar:"tutorialSidebar",previous:{title:"API Gateway",permalink:"/docs/aws/apigw"},next:{title:"EC2",permalink:"/docs/aws/ec2"}},s=[{value:"AWS Auto Scaling",id:"aws-auto-scaling",children:[]},{value:"AWS EC2 Auto Scaling",id:"aws-ec2-auto-scaling",children:[]},{value:"Amazon EC2 Auto Scaling Group (ASG)",id:"amazon-ec2-auto-scaling-group-asg",children:[]},{value:"Lifecycle Hooks",id:"lifecycle-hooks",children:[]},{value:"Health Check",id:"health-check",children:[]}],p={toc:s};function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"aws-auto-scaling"},"AWS Auto Scaling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u8de8\u591a\u500b\u670d\u52d9\u7684scaling\uff0c\u53ef\u4ee5\u5305\u542b\u591a\u500bEC2 Auto Scaling Group"),(0,r.kt)("li",{parentName:"ul"},"Scaling Process * \u662f\u53ef\u4ee5suspend\u6389\u7684",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Launch: \u555f\u52d5EC2"),(0,r.kt)("li",{parentName:"ul"},"Terminate: \u505c\u6b62EC2"),(0,r.kt)("li",{parentName:"ul"},"HealthCheck: \u6aa2\u67e5EC2\u7684\u5065\u5eb7\u72c0\u614b"),(0,r.kt)("li",{parentName:"ul"},"ReplaceUnhealthy: \u53d6\u4ee3\u6389\u4e0d\u5065\u5eb7\u7684EC2"),(0,r.kt)("li",{parentName:"ul"},"AZRebalance: \u5e73\u5747\u4e0d\u540cAZ\u4e2d\u7684AutoScalingGroup\u7684\u6a5f\u5668\u6578\u91cf\uff0c\u4ee5\u63d0\u9ad8Availability\u3002\u4f46\u53ef\u80fd\u6703all healthy\u6642\u5019\u505a\u51faTerminate\u7684\u52d5\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"AlarmNotification: \u5f9eCloudWatch\u62ff\u5230Alarm\u4e8b\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"ScheduledActions: By Schedule\u7684scaling rule"),(0,r.kt)("li",{parentName:"ul"},"AddToLoadBalancer: \u6a5f\u5668\u8d77\u4f86\u5f8c\uff0c\u78ba\u5b9ahealthy\u5f8c\uff0c\u5c07\u5176\u52a0\u5165LoadBalancer\u5f8c\u958b\u59cb\u9032\u884c\u670d\u52d9"))),(0,r.kt)("li",{parentName:"ul"},"Health Check\u7684\u7a2e\u985e",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EC2 Status Checks"),(0,r.kt)("li",{parentName:"ul"},"ELB Health Checks (HTTP)")))),(0,r.kt)("h2",{id:"aws-ec2-auto-scaling"},"AWS EC2 Auto Scaling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8de8AZ\uff0c\u4f46\u4e0d\u80fd\u8de8Region\n\u4f7f\u7528\u60c5\u5883",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9810\u5148\u5b9a\u7fa9\u7684scale strategy"),(0,r.kt)("li",{parentName:"ul"},"\u9810\u6e2cscaling (\u9700\u8981\u8207AWS Auto Scaling\u4e00\u8d77\u5b9a\u7fa9)"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u9ad8Availability",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EC2 \u53e2\u96c6\u9054\u5230\u9ad8\u5e73\u5747\u4f7f\u7528\u7387\u6642\uff0c\u4ee5\u905e\u589e\u65b9\u5f0f\u5c07\u65b0\u7684 Amazon EC2 \u57f7\u884c\u500b\u9ad4\u65b0\u589e\u5230 ASG"),(0,r.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a\u4e00\u500b\u689d\u4ef6\uff0c\u5728 CPU \u4f7f\u7528\u7387\u4f4e\u6642\uff0c\u4ee5\u76f8\u540c\u7684\u91cf\u905e\u6e1b\u79fb\u9664\u57f7\u884c\u500b\u9ad4"),(0,r.kt)("li",{parentName:"ul"},"\u7528 Amazon CloudWatch \u50b3\u9001\u8b66\u793a\u4ee5\u89f8\u767c\u64f4\u5c55\u6d3b\u52d5\uff0c\u4e26\u4f7f\u7528 Elastic Load Balancing (ELB) \u5c07\u6d41\u91cf\u5206\u914d\u7d66 ASG \u5167\u7684\u57f7\u884c\u500b\u9ad4"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8ca0\u8f09\u8b8a\u5316\u662f\u53ef\u9810\u6e2c\u7684\uff0c\u5247\u53ef\u900f\u904e Amazon EC2 Auto Scaling \u8a2d\u5b9a\u6392\u7a0b\uff0c\u4ee5\u898f\u5283\u60a8\u7684\u64f4\u5c55\u6d3b\u52d5"))))),(0,r.kt)("li",{parentName:"ul"},"Launch Configuration (\u555f\u52d5\u7d44\u614b)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ASG\u555f\u52d5EC2 Instance\u6642\u7684template"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AMI ID"),(0,r.kt)("li",{parentName:"ul"},"Key Pair"),(0,r.kt)("li",{parentName:"ul"},"Security Group"),(0,r.kt)("li",{parentName:"ul"},"Block Device Mapping"))))),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u6703\u555f\u52d5\u8d85\u904equota\u5141\u8a31\u6578\u91cf\u7684EC2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ASG\u8a2d\u5b9a\u8d85\u904equota\u6642\uff0c\u6703\u4ee5quota\u4e0a\u9650\u70ba\u6e96"))),(0,r.kt)("li",{parentName:"ul"},"Auto Scaling balance: Best Practice\u662f\u5c07Auto Scaling balance\u8de8AZ"),(0,r.kt)("li",{parentName:"ul"},"\u7e2e\u6e1b\u898f\u6a21\u6642",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u5b9a\u7fa9Terminate Policy\u4ee5\u6c7a\u5b9a\u8981\u81ea\u52d5\u505c\u6389\u7684\u662f\u54ea\u4e9bInstance"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c0d\u7279\u5b9aInstance\u555f\u52d5terminate protect\uff0c\u53ef\u4ee5\u907f\u514dAuto Scaling\u505c\u6389\u8a72Instance"),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8981\u88abTerminate\u7684instance\u6709\u8cc7\u6599\u8981\u4fdd\u5b58",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u52d9\u5fc5\u5b58\u5728\u5916\u90e8\u670d\u52d9\u5982S3, RDS, DynamoDB"),(0,r.kt)("li",{parentName:"ul"},"Terminate\u6389\u7684\u8cc7\u6599\u662f\u6551\u4e0d\u56de\u4f86\u7684"))),(0,r.kt)("li",{parentName:"ul"},"\u82e5\u8981\u88abTerminate\u7684instance\u4e0a\u6709\u6b63\u5728\u670d\u52d9\u7684user",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EC2 Auto Scaling Group\u4e26\u4e0d\u652f\u63f4terminate wait"),(0,r.kt)("li",{parentName:"ul"},"\u8981\u5be6\u73fe\u9700\u8981\u900f\u904eRoute53\uff0cReserve Proxy\u6216Microservice\u89e3\u6c7a")))))),(0,r.kt)("h2",{id:"amazon-ec2-auto-scaling-group-asg"},"Amazon EC2 Auto Scaling Group (ASG)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u4e00\u7d44\u7279\u6027\u76f8\u4f3c\u7684EC2 instance\u7684\u908f\u8f2f\u7fa4\u7d44"),(0,r.kt)("li",{parentName:"ul"},"\u522a\u9664ASG\u6703\u540c\u6642\u505c\u6389\u8a72ASG\u4e2d\u5c1a\u5728\u57f7\u884c\u7684EC2 instance"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u500bASG\u53ea\u80fd\u6709\u4e00\u500bLaunch Configuration\uff0c\u800c\u4e14\u5efa\u7acb\u5f8c\u4e0d\u80fd\u4fee\u6539"),(0,r.kt)("li",{parentName:"ul"},"ASG\u5167\u53ef\u4ee5\u52a0\u5165quota\u5141\u8a31\u6578\u91cf\u7684EC2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html"},"On-Demand Instance Limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-limits.html"},"Spot Instance Limit")))),(0,r.kt)("li",{parentName:"ul"},"\u5728ASG\u5efa\u7acb\u5f8c\u88ab\u555f\u52d5\u7684Instance\uff0c\u4e0d\u6703\u81ea\u52d5\u5c07\u4e4b\u524dinstance\u7684\u8cc7\u6599\u8907\u88fd\u5230\u65b0\u7684instance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u82e5\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html"},"lifecycle hooks"),"\u53bb\u8907\u88fd\u8cc7\u6599"))),(0,r.kt)("li",{parentName:"ul"},"\u5728\u65e2\u6709\u7684EC2\u4e0acreate ASG\u6642\uff0c\u4e0d\u6703\u81ea\u52d5\u5efa\u7acbAMI"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c07ASG\u5167\u7684Instance\u53ef\u4ee5\u8a2d\u5b9aEC2 Type",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Spot Instance Only: Scale\u4e0d\u4e00\u5b9a\u6703\u6210\u529f\uff0c\u4f46\u80fd\u7701\u6210\u672c"),(0,r.kt)("li",{parentName:"ul"},"Reserved Instance"),(0,r.kt)("li",{parentName:"ul"},"On-Daemon Instance")))),(0,r.kt)("h2",{id:"lifecycle-hooks"},"Lifecycle Hooks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EC2 Auto Scaling\u7684instance\u555f\u52d5\u6216\u505c\u6b62\u6642\u63a1\u53d6\u884c\u52d5"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u5169\u7a2e\uff1aLaunch Hook\u548cTerminate Hook",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Launch Hook\u53ef\u4ee5\u7528\u4f86\u5728base AMI\u4e0a\u5b89\u88dd\u6240\u9700\u7684\u8edf\u9ad4\u74b0\u5883"),(0,r.kt)("li",{parentName:"ul"},"Terminate\u53ef\u4ee5\u5728\u7d50\u675finstance\u524d\u6536\u96c6\u8cc7\u6599")))),(0,r.kt)("h2",{id:"health-check"},"Health Check"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EC2 Auto Scaling\u6709\u81ea\u5df1\u7684",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-system-instance-status-check.html"},"health checks"),"\u6a5f\u5236"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u639bELB\uff0c\u4e5f\u53ef\u4ee5\u652f\u63f4",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html"},"ELB health checks"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46ELB\u5c0dEC2 Auto Scaling\u4e0d\u662f\u5fc5\u8981\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u662f\u6709ELB\u5b58\u5728\u7684\u8a71\uff0c\u4f7f\u7528ELB health check\u8f03\u6b63\u78ba"))),(0,r.kt)("li",{parentName:"ul"},"\u4e5f\u652f\u63f4ALB (Application Load Balancer)\u6216NLB (Network Load Balancer)\u7684health check"),(0,r.kt)("li",{parentName:"ul"},"EC2 Auto Scaling\u81ea\u5e36\u7684Health Check\u662f\u53ef\u4ee5\u624b\u52d5\u89f8\u767c\u7684\u7684",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u900f\u904eAPI call:\xa0SetInstanceHealth\uff0c\u4f8b\u5982change instance state to UNHEALTHY"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u6307ELB, ALB, NLB\u7684Health Check"))),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5suspend\u66ab\u505chealth check",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u900f\u904eAPI call: SuspendProcesses\u548cResumeProcess API")))))}m.isMDXComponent=!0}}]);