"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2149],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,s=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(s,o(o({ref:e},d),{},{components:a})):n.createElement(s,o({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39188:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"LoadBalancer",sidebar_label:"Load Balancer"},u=void 0,p={unversionedId:"aws/load-balancer",id:"aws/load-balancer",isDocsHomePage:!1,title:"LoadBalancer",description:"\u4e0d\u540cLoad Balancer\u6c92\u6709\u5bb9\u6613\u7684\u65b9\u6cd5\u4e92\u76f8\u8f49\u63db",source:"@site/docs/aws/load-balancer.mdx",sourceDirName:"aws",slug:"/aws/load-balancer",permalink:"/docs/aws/load-balancer",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/aws/load-balancer.mdx",tags:[],version:"current",frontMatter:{title:"LoadBalancer",sidebar_label:"Load Balancer"}},d=[],m={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4e0d\u540cLoad Balancer\u6c92\u6709\u5bb9\u6613\u7684\u65b9\u6cd5\u4e92\u76f8\u8f49\u63db"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CLB: Classic Load Balancer (Elastic Load Balancer)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Disabled by default",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Enabled\u4e4b\u5f8c\uff0c\u8de8AZ\u7684data\u4e0d\u6703\u88ab\u6536\u8cbb"))),(0,l.kt)("li",{parentName:"ul"},"\u6700\u4fbf\u5b9c"),(0,l.kt)("li",{parentName:"ul"},"ELB\u770b\u5f85\u81ea\u5df1monitor\u7684service\u70ba\u5169\u7a2e\u72c0\u614b: InService, OutofService"))),(0,l.kt)("li",{parentName:"ul"},"ALB: Application Load Balancers",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8de8AZ\u7684data\u4e0d\u6703\u88ab\u6536\u8cbb"),(0,l.kt)("li",{parentName:"ul"},"Work\u5728Layer 7"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u505a\u5f88\u7d30\u7bc0\u7684routing"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u63f4HTTP, HTTPS, HTTP2, Websocket"),(0,l.kt)("li",{parentName:"ul"},"Route Rule",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Based on path"),(0,l.kt)("li",{parentName:"ul"},"Based on host name"),(0,l.kt)("li",{parentName:"ul"},"Based on Query String, Headers"),(0,l.kt)("li",{parentName:"ul"},"Port Mapping (For ECS)"))))),(0,l.kt)("li",{parentName:"ul"},"NLB: Network Load Balancer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8de8AZ\u8981\u7b97\u9322"),(0,l.kt)("li",{parentName:"ul"},"Work\u5728Layer 4"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u80fd"),(0,l.kt)("li",{parentName:"ul"},"\u53ea\u8981\u63d0\u5230\u8981cost saving on NLB\uff0c\u7b54\u6848\u901a\u5e38\u662fCLB"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u77e5\u9053end-user\u7684IP: \u770bX-Forwarded-For Header")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"CLB"),(0,l.kt)("th",{parentName:"tr",align:null},"ALB"),(0,l.kt)("th",{parentName:"tr",align:null},"NLB"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OSI Layer"),(0,l.kt)("td",{parentName:"tr",align:null},"L7 or L4 (TCP)"),(0,l.kt)("td",{parentName:"tr",align:null},"L7"),(0,l.kt)("td",{parentName:"tr",align:null},"L4 (TCP, UDP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Termination"),(0,l.kt)("td",{parentName:"tr",align:null},"Only 1 SSL Cert: Multi domain need to renew entire cert ",(0,l.kt)("br",null)," TCP -> TCP Passthrough: The only way to use 2-way SSL auth"),(0,l.kt)("td",{parentName:"tr",align:null},"Support multi listener (cert) ",(0,l.kt)("br",null)," Support SNI - Server Name Indication"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Support  Listening protocols"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP, HTTPS, TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP, HTTP2, HTTPS, WebSocket"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP, UDP,TLS, WebSockets")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Support Internal protocols"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP, TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"HTTP, HTTP2, WebSocket"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target Group"),(0,l.kt)("td",{parentName:"tr",align:null},"EC2"),(0,l.kt)("td",{parentName:"tr",align:null},"EC2 Instance - HTTP",(0,l.kt)("br",null)," ECS Task - HTTP",(0,l.kt)("br",null)," Lambda function - HTTP into JSON",(0,l.kt)("br",null)," Private IP Address - Peered VPC, OnPremise"),(0,l.kt)("td",{parentName:"tr",align:null},"EC2 Instance - TCP ",(0,l.kt)("br",null)," ECS Task - TCP",(0,l.kt)("br",null)," IP Address - Private IP only",(0,l.kt)("br",null)," Even outside VPC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Health Check"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"On target group level"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Route Rule"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"URL Path",(0,l.kt)("br",null)," Hostname",(0,l.kt)("br",null)," Query String",(0,l.kt)("br",null)," Headers"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Latency"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"~400ms"),(0,l.kt)("td",{parentName:"tr",align:null},"~100ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cross AZ Load Balancing"),(0,l.kt)("td",{parentName:"tr",align:null},"Cross AZ default disabled",(0,l.kt)("br",null)," No charges for inter AZ if enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Cross AZ always on",(0,l.kt)("br",null)," No charges for inter AZ"),(0,l.kt)("td",{parentName:"tr",align:null},"Cross AZ default disabled",(0,l.kt)("br",null)," Charge for inter AZ if enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Stickiness (L7)"),(0,l.kt)("td",{parentName:"tr",align:null},"Support"),(0,l.kt)("td",{parentName:"tr",align:null},"Support"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Support (Only work  on L4)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"One static IP per AZ",(0,l.kt)("br",null)," Support Elastic IP")))))}c.isMDXComponent=!0}}]);