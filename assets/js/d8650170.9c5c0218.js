"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[55852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"1148. Article Views I",sidebar_label:"1148. Article Views I",tags:["Leetcode Easy","Pandas","SQL"]},o=void 0,l={unversionedId:"leetcode/1001-1500/article_views_i",id:"leetcode/1001-1500/article_views_i",title:"1148. Article Views I",description:"https://leetcode.com/problems/article-views-i",source:"@site/docs/leetcode/1001-1500/1148_article_views_i.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/article_views_i",permalink:"/docs/leetcode/1001-1500/article_views_i",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1148_article_views_i.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Pandas",permalink:"/docs/tags/pandas"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",sidebarPosition:1148,frontMatter:{title:"1148. Article Views I",sidebar_label:"1148. Article Views I",tags:["Leetcode Easy","Pandas","SQL"]},sidebar:"docSidebar",previous:{title:"1143. Longest Common Subsequence",permalink:"/docs/leetcode/1001-1500/longest_common_subsequence"},next:{title:"1155. Number of Dice Rolls With Target Sum",permalink:"/docs/leetcode/1001-1500/num_of_rolls_with_target_sum"}},c={},s=[{value:"Pandas",id:"pandas",level:2},{value:"SQL",id:"sql",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/article-views-i"},"https://leetcode.com/problems/article-views-i")),(0,a.kt)("h2",{id:"pandas"},"Pandas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n\ndef article_views(df: pd.DataFrame) -> pd.DataFrame:\n  return df[\n    df['author_id'] == df['viewer_id']\n  ][\n    ['author_id']\n  ] \\\n    .drop_duplicates() \\\n    .rename(columns={\"author_id\": \"id\"}) \\\n    .sort_values(by=\"id\"\n")),(0,a.kt)("h2",{id:"sql"},"SQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT DISTINCT\n  author_id as id\nFROM Views\nWHERE author_id = viewer_id\nORDER BY author_id\n")))}u.isMDXComponent=!0}}]);