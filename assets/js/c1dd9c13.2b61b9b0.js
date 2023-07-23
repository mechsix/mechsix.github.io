"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[69298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>N});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=l,N=m["".concat(u,".").concat(k)]||m[k]||s[k]||n;return r?a.createElement(N,i(i({ref:t},c),{},{components:r})):a.createElement(N,i({ref:t},c))}));function N(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},13091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=r(87462),l=(r(67294),r(3905));const n={title:"Route53",sidebar_label:"Route53"},i=void 0,o={unversionedId:"aws/route53",id:"aws/route53",title:"Route53",description:"DNS Types",source:"@site/docs/aws/route53.md",sourceDirName:"aws",slug:"/aws/route53",permalink:"/docs/aws/route53",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/aws/route53.md",tags:[],version:"current",frontMatter:{title:"Route53",sidebar_label:"Route53"},sidebar:"docSidebar",previous:{title:"RDS",permalink:"/docs/aws/rds"},next:{title:"STS",permalink:"/docs/aws/sts"}},u={},p=[{value:"DNS Types",id:"dns-types",level:2},{value:"Routing Policies",id:"routing-policies",level:2},{value:"Limits",id:"limits",level:2},{value:"Health Check",id:"health-check",level:2}],c={toc:p},m="wrapper";function s(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"dns-types"},"DNS Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SOA: \u4e00\u500bDNS\u53ea\u80fd\u6709\u4e00\u500bSOA\uff0c\u7d00\u9304\u7ba1\u7406\u8005\u8cc7\u8a0a"),(0,l.kt)("li",{parentName:"ul"},"NS: \u6307\u5411\u4e0a\u6e38"),(0,l.kt)("li",{parentName:"ul"},"A: \u6307\u5411IPv4"),(0,l.kt)("li",{parentName:"ul"},"AAAA: \u6307\u5411IPv6"),(0,l.kt)("li",{parentName:"ul"},"CNAME: \u6307\u5411\u5176\u4ed6DNS Name"),(0,l.kt)("li",{parentName:"ul"},"MX: Email\u8f49\u767c\u7528"),(0,l.kt)("li",{parentName:"ul"},"PTR: \u53cd\u89e3\uff0c\u5c07IP\u8f49\u6210\u4e3b\u6a5fFQDN")),(0,l.kt)("h2",{id:"routing-policies"},"Routing Policies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Simple Routing Policy (SRP)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"1 record to multiple IP address"),(0,l.kt)("li",{parentName:"ul"},"Answer in random order"),(0,l.kt)("li",{parentName:"ul"},"\u6c92\u8fa6\u6cd5\u505ahealth check"))),(0,l.kt)("li",{parentName:"ul"},"Weighted Routing Policy (WRP)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8a2d\u5b9a\u4e0d\u540c\u7684health check\u7d66\u5404\u81ea\u7684record set"),(0,l.kt)("li",{parentName:"ul"},"\u7d66\u6bcf\u500bhost\u54040-255\u7684\u4e00\u500b\u6b0a\u91cd\u6578\u5b57\uff0c\u6703\u4f9d\u6b0a\u91cd\u5206\u6d3e\u6d41\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u9069\u5408\u50cfA/B Test\u7684\u4f7f\u7528\u60c5\u5883"),(0,l.kt)("li",{parentName:"ul"},"\u6578\u5b57\u8d8a\u5c0f\uff0c\u6b0a\u91cd\u8d8a\u4f4e"))),(0,l.kt)("li",{parentName:"ul"},"Latency Based Routing (LBT)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c07user\u5c0e\u5230\u6700\u4f4eLatency\u7684\u76ee\u6a19"),(0,l.kt)("li",{parentName:"ul"},"\u80fd\u505aFailover"))),(0,l.kt)("li",{parentName:"ul"},"Failover Routing Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"DR\u4f7f\u7528\uff0c\u58de\u6389\u6642\u624d\u5c0e\u5411secondary resource"))),(0,l.kt)("li",{parentName:"ul"},"Geolocation Routing Policy (GRP)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u7167\u4f7f\u7528\u8005\u76ee\u524d\u6240\u5728IP\u7684\u5730\u7406\u4f4d\u7f6e\u5c0e\u5411"),(0,l.kt)("li",{parentName:"ul"},"\u5efa\u8b70\u81f3\u5c11\u8981\u6709\u4e00\u500bGlobal record\uff0c\u7d66\u90a3\u4e9b\u7121\u6cd5\u8fa8\u5225\u5730\u7406\u4f4d\u7f6e\u7684user\u5c0e\u5411"),(0,l.kt)("li",{parentName:"ul"},"\u6c92\u8fa6\u6cd5\u505ahealth check"))),(0,l.kt)("li",{parentName:"ul"},"Geoproximity Routing (for Traffic Flow only)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f9d\u7167\u4f7f\u7528\u8005\u4f4d\u7f6e\u8207\u8cc7\u6e90\u4f4d\u7f6e\u5c0e\u5411"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u555f\u7528Traffic Flow\u624d\u80fd\u505a"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u505a\u51fa\u5f88\u8907\u96dc\u7684DNS\u8def\u7531"),(0,l.kt)("li",{parentName:"ul"},"\u6c92\u8fa6\u6cd5\u505ahealth check"))),(0,l.kt)("li",{parentName:"ul"},"Multivalue Answer Policy",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f88\u50cfSimple Routing\uff0c\u4f46\u53ef\u4ee5\u505ahealth check\uff0c\u81ea\u52d5\u79fb\u6389fail resource"),(0,l.kt)("li",{parentName:"ul"},"Answer in random order"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u63f4ELB")))),(0,l.kt)("h2",{id:"limits"},"Limits"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DNSSEC (\u52a0\u5bc6\u7684DNS Query)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u63f4Domain name registration"),(0,l.kt)("li",{parentName:"ul"},"Route53\u4e0d\u652f\u63f4DNSSEC query",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u4f7f\u7528\u7b2c\u4e09\u65b9\u670d\u52d9 (Bind, DnsMasq, KnotDNS, PowerDNS)"))))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u63d0\u4f9bPrivate DNS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f46VPC\u9700\u8981enable\u4ee5\u4e0b\u8a2d\u5b9a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"enableDnsHostName"),(0,l.kt)("li",{parentName:"ul"},"enableDnsSupport")))))),(0,l.kt)("h2",{id:"health-check"},"Health Check"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only 2xx & 3xx pass the check"),(0,l.kt)("li",{parentName:"ul"},"Only based on the first 5120 bytes of response"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u8a08\u7b97\u5340\u9593\u5167\u8d85\u904e\u591a\u5c11\u5931\u6557\u624d\u7b97\u5931\u6557"),(0,l.kt)("li",{parentName:"ul"},"Integrate with CloudWatch alarms"),(0,l.kt)("li",{parentName:"ul"},"\u7121\u6cd5check private endpoints",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Route53\u4e16\u904b\u5750\u5728Edge Node\u4e0a\u7684\uff0c\u6c92\u8fa6\u6cd5\u76f4\u63a5\u6aa2\u67e5Private VPC\u5167\u7684\u670d\u52d9"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u505a\u7684\u8a71\uff0c\u9700\u8981expose\u51fapublic\u7684health check endpoint"))),(0,l.kt)("li",{parentName:"ul"},"Multi Region failover arch example")))}s.isMDXComponent=!0}}]);