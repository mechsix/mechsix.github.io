"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[46325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={title:"1873. Calculate Special Bonus",sidebar_label:"1873. Calculate Special Bonus",tags:["Leetcode Easy","Pandas","SQL"]},o=void 0,s={unversionedId:"leetcode/1501-2000/calculate_special_bonus",id:"leetcode/1501-2000/calculate_special_bonus",title:"1873. Calculate Special Bonus",description:"Pandas",source:"@site/docs/leetcode/1501-2000/1873_calculate_special_bonus.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/calculate_special_bonus",permalink:"/docs/leetcode/1501-2000/calculate_special_bonus",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1873_calculate_special_bonus.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Pandas",permalink:"/docs/tags/pandas"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",sidebarPosition:1873,frontMatter:{title:"1873. Calculate Special Bonus",sidebar_label:"1873. Calculate Special Bonus",tags:["Leetcode Easy","Pandas","SQL"]},sidebar:"docSidebar",previous:{title:"1870. Minimum Speed to Arrive on Time",permalink:"/docs/leetcode/1501-2000/min_speed_to_arrive_on_time"},next:{title:"1911. Maximum Alternating Subsequence Sum",permalink:"/docs/leetcode/1501-2000/maximum_alternating_subsequence_sum"}},c={},i=[{value:"Pandas",id:"pandas",level:2},{value:"SQL",id:"sql",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pandas"},"Pandas"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n\ndef calculate_special_bonus(employees: pd.DataFrame) -> pd.DataFrame:\n    employees['bonus'] = (\n        (employees['employee_id'] % 2 == 1) & (~employees['name'].str.startswith('M'))\n    ) * employees['salary']\n\n    employees = employees[['employee_id', 'bonus']] \\\n        .sort_values(by='employee_id', ascending=1)\n\n    return employees\n")),(0,r.kt)("h2",{id:"sql"},"SQL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n employee_id,\n case when  employee_id % 2 = 1 AND name NOT LIKE 'M%'\n THEN salary\nELSE 0 END AS bonus\nFROM Employees\nORDER BY employee_id\n")))}d.isMDXComponent=!0}}]);