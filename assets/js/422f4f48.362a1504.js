"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6373],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7743:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"AWS STS",sidebar_label:"STS"},u=void 0,c={unversionedId:"aws/sts",id:"aws/sts",title:"AWS STS",description:"\u91cd\u8981\u7684API",source:"@site/docs/aws/sts.md",sourceDirName:"aws",slug:"/aws/sts",permalink:"/docs/aws/sts",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/aws/sts.md",tags:[],version:"current",frontMatter:{title:"AWS STS",sidebar_label:"STS"},sidebar:"docSidebar",previous:{title:"Route53",permalink:"/docs/aws/route53"},next:{title:"K8S 101",permalink:"/docs/k8s/intro"}},s=[{value:"\u91cd\u8981\u7684API",id:"\u91cd\u8981\u7684api",children:[],level:2}],p={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u91cd\u8981\u7684api"},"\u91cd\u8981\u7684API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AssumeRole: \u5728\u55ae\u4e00\u5e33\u865f\u6216\u8de8\u5e33\u865f\u66ab\u6642\u8ce6\u6b0a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AssumeRoleWithSAML: \u7d66\u4f7f\u7528SAML\u767b\u5165\u7684user\u8ce6\u6b0a")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AssumeRoleWithWebIdentity: \u7d66IdP\u767b\u5165\u7684user\u8ce6\u6b0a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IdP\u5305\u542bCognito, Amazon\u7b49\u7b49OpenID\u76f8\u5bb9\u7684\u767b\u5165\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8b70\u4f7f\u7528\u4e86\uff0c\u5efa\u8b70\u6539\u7528Cognito"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GetSessionToken: for MFA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GetFederationToken"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f01\u696d\u7db2\u8def\u5167\u4f7f\u7528\uff0cusually a proxy app")))))}m.isMDXComponent=!0}}]);