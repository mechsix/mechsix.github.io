"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[23499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,b=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(b,s(s({ref:t},m),{},{components:r})):n.createElement(b,s({ref:t},m))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"1601. Maximum Number of Achievable Transfer Requests",sidebar_label:"1601. Maximum Number of Achievable Transfer Requests",tags:["Leetcode Hard","DP","Graph","Combinations"]},s=void 0,i={unversionedId:"leetcode/1501-2000/max_num_of_achievable_trans_request",id:"leetcode/1501-2000/max_num_of_achievable_trans_request",title:"1601. Maximum Number of Achievable Transfer Requests",description:"https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/",source:"@site/docs/leetcode/1501-2000/1601_max_num_of_achievable_trans_request.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/max_num_of_achievable_trans_request",permalink:"/docs/leetcode/1501-2000/max_num_of_achievable_trans_request",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1601_max_num_of_achievable_trans_request.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"DP",permalink:"/docs/tags/dp"},{label:"Graph",permalink:"/docs/tags/graph"},{label:"Combinations",permalink:"/docs/tags/combinations"}],version:"current",sidebarPosition:1601,frontMatter:{title:"1601. Maximum Number of Achievable Transfer Requests",sidebar_label:"1601. Maximum Number of Achievable Transfer Requests",tags:["Leetcode Hard","DP","Graph","Combinations"]},sidebar:"docSidebar",previous:{title:"1557. Minimum Number of Vertices to Reach All Nodes",permalink:"/docs/leetcode/1501-2000/min_cost_connect_all_points"},next:{title:"1612. Check If Two Expression Trees are Equivalent",permalink:"/docs/leetcode/1501-2000/check_experssion_trees_equal"}},c={},l=[{value:"Python",id:"python",level:2}],m={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/"},"https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from itertools import combinations\n\n\nclass Solution:\n    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:\n        unchanged = sum([1 for req in requests if req[0] == req[1]])\n        reqs = [req for req in requests if req[0] != req[1]]\n\n        ans = 0\n        for i in range(len(reqs)+1):\n            for combs in list(combinations(reqs, i)):\n                if not combs:\n                    continue\n\n                movement = [0] * n\n                for egress, ingress in combs:\n                    movement[egress] += 1\n                    movement[ingress] -= 1\n\n                if set(movement) == {0}:\n                    ans = max(ans, len(combs))\n\n        return ans + unchanged\n")))}p.isMDXComponent=!0}}]);