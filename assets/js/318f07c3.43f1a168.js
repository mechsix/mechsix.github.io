"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8761],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},40150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Lambda",sidebar_label:"Lambda"},u=void 0,p={unversionedId:"aws/lambda",id:"aws/lambda",isDocsHomePage:!1,title:"Lambda",description:"Invoke Type",source:"@site/docs/aws/lambda.md",sourceDirName:"aws",slug:"/aws/lambda",permalink:"/docs/aws/lambda",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/aws/lambda.md",tags:[],version:"current",frontMatter:{title:"Lambda",sidebar_label:"Lambda"},sidebar:"tutorialSidebar",previous:{title:"Inspector",permalink:"/docs/aws/inspector"},next:{title:"Load Balancer",permalink:"/docs/aws/load-balancer"}},c=[{value:"Invoke Type",id:"invoke-type",children:[]},{value:"Destinations",id:"destinations",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Alias &amp; Version",id:"alias--version",children:[]},{value:"CodeDeploy",id:"codedeploy",children:[]}],m={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"invoke-type"},"Invoke Type"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Synchronous",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CLI, SDK, API Gateway"))),(0,i.kt)("li",{parentName:"ul"},"Async",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"S3 Event, SNS, CloudWatch"))),(0,i.kt)("li",{parentName:"ul"},"Event Source Mapping",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'\u5fc5\u9808\u5f9e\u4f86\u6e90"\u62c9"\u4e0b\u4f86\uff0c\u6240\u4ee5SNS\u4e0d\u6703\u662f\u9019\u7a2e'),(0,i.kt)("li",{parentName:"ul"},"Kinesis Data Stream, SQS, SQS FIFO, DynamoDB Streams",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u9664\u4e86SQS\uff0c\u5176\u4ed6\u7684\u90fd\u662f\u4fdd\u8b49\u9806\u5e8f\u7684")))))),(0,i.kt)("h2",{id:"destinations"},"Destinations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Async invocations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u91dd\u5c0d\u6210\u529f\u8ddf\u5931\u6557\u7684\u8a0a\u606f\u9001\u5230\u4e0b\u5217\u76ee\u6a19",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SQS"),(0,i.kt)("li",{parentName:"ul"},"SNS"),(0,i.kt)("li",{parentName:"ul"},"Lambda"),(0,i.kt)("li",{parentName:"ul"},"EventBridge Bus"))),(0,i.kt)("li",{parentName:"ul"},"\u5efa\u8b70\u4f7f\u7528Destinations\uff0c\u4e0d\u8981\u518d\u7528DLQ\uff0c\u4f46\u9084\u662f\u53ef\u4ee5\u7528 (2019)")))),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RAM 128MB -> 3G"),(0,i.kt)("li",{parentName:"ul"},"CPU is linked to RAM, can't setup manually",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1.5G RAM\u4e4b\u5f8c\u6703\u67092vCPU"))),(0,i.kt)("li",{parentName:"ul"},"Timeout: up to 15min"),(0,i.kt)("li",{parentName:"ul"},"Storage: /tmp, 512MB"),(0,i.kt)("li",{parentName:"ul"},"Deployment package: Limit 250MB"),(0,i.kt)("li",{parentName:"ul"},"Concurrency execution: 1000, but can be increased")),(0,i.kt)("h2",{id:"alias--version"},"Alias & Version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alias",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lambda version\u7684\u5225\u540d\uff0c\u50cfgit tag\uff0c\u662f\u53ef\u4ee5\u6539\u7684"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u4f86\u6574\u5408API Gateway\u5f88\u6709\u7528",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u85cd\u7da0\u90e8\u7248"),(0,i.kt)("li",{parentName:"ul"},"PROD/STG/DEV"))))),(0,i.kt)("li",{parentName:"ul"},"Version",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u6b21publish\uff0c\u90fd\u6703\u7522\u751f\u7684\u4ee5\u6578\u5b57\u905e\u589e\u7684version"),(0,i.kt)("li",{parentName:"ul"},"\u662f\u4e00\u7d44code + Configuration"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u66f4\u52d5\uff0c\u80fd\u88ab\u57f7\u884c\u7684\u662fLatest version")))),(0,i.kt)("h2",{id:"codedeploy"},"CodeDeploy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u4f86deploy Lambda\uff0c\u53ef\u4ee5\u81ea\u52d5\u5e6b\u4f60\u66f4\u65b0Alias"),(0,i.kt)("li",{parentName:"ul"},"Integrate with SAM")))}s.isMDXComponent=!0}}]);