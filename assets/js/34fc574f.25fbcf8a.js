"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[22950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"1683. Invalid Tweets",sidebar_label:"1683. Invalid Tweets",tags:["Leetcode Easy","Pandas","SQL"]},i=void 0,l={unversionedId:"leetcode/1501-2000/invalid_tweets",id:"leetcode/1501-2000/invalid_tweets",title:"1683. Invalid Tweets",description:"https://leetcode.com/problems/invalid-tweets/",source:"@site/docs/leetcode/1501-2000/1683_invalid_tweets.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/invalid_tweets",permalink:"/docs/leetcode/1501-2000/invalid_tweets",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1683_invalid_tweets.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Pandas",permalink:"/docs/tags/pandas"},{label:"SQL",permalink:"/docs/tags/sql"}],version:"current",sidebarPosition:1683,frontMatter:{title:"1683. Invalid Tweets",sidebar_label:"1683. Invalid Tweets",tags:["Leetcode Easy","Pandas","SQL"]},sidebar:"docSidebar",previous:{title:"1680. Concatenation of Consecutive Binary Numbers",permalink:"/docs/leetcode/1501-2000/concatenation_of_consecutive_bin_nums"},next:{title:"1689. Partitioning Into Minimum Number Of Deci-Binary Numbers",permalink:"/docs/leetcode/1501-2000/partitioning_into_min_num_of_deci_binary_nums"}},s={},c=[{value:"Pandas",id:"pandas",level:2},{value:"SQL",id:"sql",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/invalid-tweets/"},"https://leetcode.com/problems/invalid-tweets/")),(0,a.kt)("h2",{id:"pandas"},"Pandas"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n\ndef invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:\n    return tweets[\n        tweets['content'].str.len() > 15\n    ][['tweet_id']]\n")),(0,a.kt)("h2",{id:"sql"},"SQL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    tweet_id\nFROM Tweets\nWHERE LENGTH(content) > 15\n")))}u.isMDXComponent=!0}}]);