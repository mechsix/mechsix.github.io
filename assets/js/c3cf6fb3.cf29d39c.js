"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[83157],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[d]="string"==typeof e?e:i,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79068:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(83117),i=(n(67294),n(3905));const o={title:"115. Distinct Subsequences",sidebar_label:"115. Distinct Subsequences",tags:["DP","Leetcode Hard"]},c=void 0,s={unversionedId:"leetcode/1-500/distinct_subsequences",id:"leetcode/1-500/distinct_subsequences",title:"115. Distinct Subsequences",description:"https://leetcode.com/problems/distinct-subsequences/",source:"@site/docs/leetcode/1-500/115_distinct_subsequences.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/distinct_subsequences",permalink:"/docs/leetcode/1-500/distinct_subsequences",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/115_distinct_subsequences.md",tags:[{label:"DP",permalink:"/docs/tags/dp"},{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"}],version:"current",sidebarPosition:115,frontMatter:{title:"115. Distinct Subsequences",sidebar_label:"115. Distinct Subsequences",tags:["DP","Leetcode Hard"]},sidebar:"docSidebar",previous:{title:"114. Flatten Binary Tree to Linked List",permalink:"/docs/leetcode/1-500/flatten_binary_tree_to_ll"},next:{title:"116. Populating Next Right Pointers in Each Node",permalink:"/docs/leetcode/1-500/link_next_right_in_binary_tree_nodes"}},a={},u=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/distinct-subsequences/"},"https://leetcode.com/problems/distinct-subsequences/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var numDistinct = function(s, t) {\n    const memo = {};\n    \n    const dfs = (i, j) => {\n        if (!memo.hasOwnProperty(i)) memo[i] = {};\n        \n        if (j === t.length) return 1;\n        if (i === s.length) return 0;\n        if (memo[i][j] !== undefined) return memo[i][j];\n        \n        if (s[i] === t[j]) {\n            memo[i][j] = dfs(i + 1, j + 1) + dfs(i + 1, j);\n        } else {\n            memo[i][j] = dfs(i + 1, j)\n        }\n        \n        return memo[i][j]\n    }\n    return dfs(0, 0);\n};\n")))}d.isMDXComponent=!0}}]);