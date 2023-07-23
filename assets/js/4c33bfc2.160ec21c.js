"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(l,".").concat(b)]||u[b]||p[b]||i;return r?o.createElement(m,c(c({ref:t},d),{},{components:r})):o.createElement(m,c({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:n,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}b.displayName="MDXCreateElement"},17655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={title:"337. House Robber III",sidebar_label:"337. House Robber III",tags:["Leetcode Medium","DP","Tree"]},c=void 0,a={unversionedId:"leetcode/1-500/house_robber_iii",id:"leetcode/1-500/house_robber_iii",title:"337. House Robber III",description:"https://leetcode.com/problems/house-robber-iii/",source:"@site/docs/leetcode/1-500/337_house_robber_iii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/house_robber_iii",permalink:"/docs/leetcode/1-500/house_robber_iii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/337_house_robber_iii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"},{label:"Tree",permalink:"/docs/tags/tree"}],version:"current",sidebarPosition:337,frontMatter:{title:"337. House Robber III",sidebar_label:"337. House Robber III",tags:["Leetcode Medium","DP","Tree"]},sidebar:"docSidebar",previous:{title:"336. Palindrome Pairs",permalink:"/docs/leetcode/1-500/palindrome_pairs"},next:{title:"338. Counting Bits",permalink:"/docs/leetcode/1-500/counting_bits"}},l={},s=[{value:"Python",id:"python",level:2},{value:"DFS (Time Limit Exceed)",id:"dfs-time-limit-exceed",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/house-robber-iii/"},"https://leetcode.com/problems/house-robber-iii/")),(0,n.kt)("h2",{id:"python"},"Python"),(0,n.kt)("h3",{id:"dfs-time-limit-exceed"},"DFS (Time Limit Exceed)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def rob(self, root: Optional[TreeNode]) -> int:\n\n        def dfs(node, can_pick: bool):\n            if not node:\n                return 0\n\n            skip = dfs(node.left, True) + dfs(node.right, True)\n            if not can_pick:\n                return skip\n\n            pick = node.val + dfs(node.left, False) + dfs(node.right, False)\n\n            return max(pick, skip)\n\n        return max(dfs(root, False), dfs(root, True))\n")))}p.isMDXComponent=!0}}]);