"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[79570],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81749:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const l={title:"196. Delete Duplicate Emails",sidebar_label:"196. Delete Duplicate Emails",tags:["Leetcode Easy","SQL"]},i=void 0,a={unversionedId:"leetcode/1-500/delete_duplicate_emails",id:"leetcode/1-500/delete_duplicate_emails",title:"196. Delete Duplicate Emails",description:"https://leetcode.com/problems/delete-duplicate-emails",source:"@site/docs/leetcode/1-500/196_delete_duplicate_emails.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/delete_duplicate_emails",permalink:"/docs/leetcode/1-500/delete_duplicate_emails",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/196_delete_duplicate_emails.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",sidebarPosition:196,frontMatter:{title:"196. Delete Duplicate Emails",sidebar_label:"196. Delete Duplicate Emails",tags:["Leetcode Easy","SQL"]},sidebar:"docSidebar",previous:{title:"191. Number of 1 Bits",permalink:"/docs/leetcode/1-500/number_of_1_bits"},next:{title:"198. House Robber",permalink:"/docs/leetcode/1-500/house_robber"}},c={},s=[{value:"MySQL",id:"mysql",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/delete-duplicate-emails"},"https://leetcode.com/problems/delete-duplicate-emails")),(0,o.kt)("h2",{id:"mysql"},"MySQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM Person\nWHERE id NOT IN\n( SELECT min_id FROM (\n        SELECT MIN(id) AS min_id, email\n        FROM Person\n        GROUP BY email\n    ) sub\n)\n")))}p.isMDXComponent=!0}}]);