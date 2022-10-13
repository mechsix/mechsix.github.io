"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52565],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,y=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94198:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"API Gateway",sidebar_label:"API Gateway"},u="API Gateway",c={unversionedId:"aws/apigw",id:"aws/apigw",title:"API Gateway",description:"Expose Lambda, HTTP, AWS Services as an API",source:"@site/docs/aws/apigw.md",sourceDirName:"aws",slug:"/aws/apigw",permalink:"/docs/aws/apigw",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/aws/apigw.md",tags:[],version:"current",frontMatter:{title:"API Gateway",sidebar_label:"API Gateway"},sidebar:"docSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"ASG",permalink:"/docs/aws/asg"}},p=[],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-gateway"},"API Gateway"),(0,i.kt)("p",null,"Expose Lambda, HTTP, AWS Services as an API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Limits",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"29 seconds timeout"),(0,i.kt)("li",{parentName:"ul"},"10 MB max payload size"))),(0,i.kt)("li",{parentName:"ul"},"Integrations",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lambda",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Invoke Lambda functions"),(0,i.kt)("li",{parentName:"ul"},"Expose as RESTful API"))),(0,i.kt)("li",{parentName:"ul"},"HTTP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"As reverse proxy",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For caching, rate\xa0 limiting, custom authentication, API keys auth"))))),(0,i.kt)("li",{parentName:"ul"},"AWS Services",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Expose any AWS API through API Gateway",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Example, start step function, post message to SQS"),(0,i.kt)("li",{parentName:"ul"},"To add auth, deploy policy, rate control")))))))))}m.isMDXComponent=!0}}]);