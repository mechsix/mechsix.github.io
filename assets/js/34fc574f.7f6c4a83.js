"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[76613],{22676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"leetcode/1501-2000/invalid_tweets","title":"1683. Invalid Tweets","description":"https://leetcode.com/problems/invalid-tweets/","source":"@site/docs/leetcode/1501-2000/1683_invalid_tweets.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/invalid_tweets","permalink":"/docs/leetcode/1501-2000/invalid_tweets","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Easy","permalink":"/docs/tags/leetcode-easy"},{"inline":true,"label":"Pandas","permalink":"/docs/tags/pandas"},{"inline":true,"label":"SQL","permalink":"/docs/tags/sql"}],"version":"current","sidebarPosition":1683,"frontMatter":{"title":"1683. Invalid Tweets","sidebar_label":"1683. Invalid Tweets","tags":["Leetcode Easy","Pandas","SQL"]},"sidebar":"docSidebar","previous":{"title":"1680. Concatenation of Consecutive Binary Numbers","permalink":"/docs/leetcode/1501-2000/concatenation_of_consecutive_bin_nums"},"next":{"title":"1689. Partitioning Into Minimum Number Of Deci-Binary Numbers","permalink":"/docs/leetcode/1501-2000/partitioning_into_min_num_of_deci_binary_nums"}}');var a=n(74848),i=n(28453);const o={title:"1683. Invalid Tweets",sidebar_label:"1683. Invalid Tweets",tags:["Leetcode Easy","Pandas","SQL"]},l=void 0,d={},c=[{value:"Pandas",id:"pandas",level:2},{value:"SQL",id:"sql",level:2}];function r(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/invalid-tweets/",children:"https://leetcode.com/problems/invalid-tweets/"})}),"\n",(0,a.jsx)(t.h2,{id:"pandas",children:"Pandas"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import pandas as pd\n\n\ndef invalid_tweets(tweets: pd.DataFrame) -> pd.DataFrame:\n    return tweets[\n        tweets['content'].str.len() > 15\n    ][['tweet_id']]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"sql",children:"SQL"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT\n    tweet_id\nFROM Tweets\nWHERE LENGTH(content) > 15\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);