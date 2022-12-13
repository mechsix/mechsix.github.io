"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[69859],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(t),m=i,d=l["".concat(s,".").concat(m)]||l[m]||f[m]||a;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20263:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var n=t(83117),i=(t(67294),t(3905));const a={sidebar_label:"Fbcid Trim"},o=void 0,c={unversionedId:"scripts/fbcid-trim",id:"scripts/fbcid-trim",title:"fbcid-trim",description:"Overivew",source:"@site/docs/scripts/fbcid-trim.md",sourceDirName:"scripts",slug:"/scripts/fbcid-trim",permalink:"/docs/scripts/fbcid-trim",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/scripts/fbcid-trim.md",tags:[],version:"current",frontMatter:{sidebar_label:"Fbcid Trim"},sidebar:"docSidebar",previous:{title:"Overview",permalink:"/docs/rust/intro"},next:{title:"Env Setup",permalink:"/docs/typescript/env-setup"}},s={},u=[{value:"Overivew",id:"overivew",level:2},{value:"Usage",id:"usage",level:2}],p={toc:u};function l(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overivew"},"Overivew"),(0,i.kt)("p",null,"Python script to trim fbcid from FB copied URL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nimport fileinput\nfrom urllib.parse import urlparse, urlunparse, parse_qs, urlencode\n\n\nif __name__ == '__main__':\n    for line in fileinput.input():\n\n        target_raw = parse_qs(urlparse(line).query).get('u', [])\n        if not target_raw:\n            sys.exit()\n\n        target = urlparse(target_raw.pop())\n        parts = list(target)\n\n        query = parse_qs(target.query)\n\n        if query:\n            for fb_key in ('utm_campaign', 'utm_source', 'fbclid', 'hsa_src', 'hsa_cam', 'utm_medium', 'hsa_acc', 'hsa_net', 'hsa_grp', 'hsa_ad', 'hsa_ver'):\n                query.pop(fb_key, None)\n\n        parts[4] = urlencode(query)\n        print(urlunparse(parts))\n\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pbpaste | trim_fbcid | pbcopy\n")))}l.isMDXComponent=!0}}]);