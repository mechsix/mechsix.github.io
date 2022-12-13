"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37672],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),a=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=a(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var a=2;a<i;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},37185:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return a}});var n=r(83117),o=(r(67294),r(3905));const i={title:"90. Subsets II",sidebar_label:"90. Subsets II",tags:["Leetcode Medium"]},c=void 0,s={unversionedId:"leetcode/1-500/subsets_ii",id:"leetcode/1-500/subsets_ii",title:"90. Subsets II",description:"Python",source:"@site/docs/leetcode/1-500/90_subsets_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/subsets_ii",permalink:"/docs/leetcode/1-500/subsets_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/90_subsets_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:90,frontMatter:{title:"90. Subsets II",sidebar_label:"90. Subsets II",tags:["Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"88. Merge Sorted Array",permalink:"/docs/leetcode/1-500/merge_sorted_array"},next:{title:"91. Decode Ways",permalink:"/docs/leetcode/1-500/decode_ways"}},u={},a=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],l={toc:a};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var subsetsWithDup = function(nums) {\n   const result = [[]];\n   nums.sort();\n\n   const backtrack = function(counter, max, record = []) {\n     if (max === record.length) {\n       result.push(record.slice());\n       return;\n     }\n\n     for (let i = counter; i < nums.length; i++) {\n       const num = nums[i];\n       if (counter < i && nums[i] === nums[i - 1]) continue;\n\n       record.push(num);\n       backtrack(i + 1, max, record);\n       record.pop();\n     }\n   }\n\n   for (let i = 1; i <= nums.length; i++) {\n     backtrack(0, i)\n   }\n   return result;\n};\n")))}p.isMDXComponent=!0}}]);