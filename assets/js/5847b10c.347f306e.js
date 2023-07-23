"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59482:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"100. Same Tree",sidebar_label:"100. Same Tree",tags:["Leetcode Easy","BFS","Go"]},l=void 0,i={unversionedId:"leetcode/1-500/same_tree",id:"leetcode/1-500/same_tree",title:"100. Same Tree",description:"https://leetcode.com/problems/same-tree",source:"@site/docs/leetcode/1-500/100_same_tree.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/same_tree",permalink:"/docs/leetcode/1-500/same_tree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/100_same_tree.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"BFS",permalink:"/docs/tags/bfs"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:100,frontMatter:{title:"100. Same Tree",sidebar_label:"100. Same Tree",tags:["Leetcode Easy","BFS","Go"]},sidebar:"docSidebar",previous:{title:"99. Recover Binary Search Tree",permalink:"/docs/leetcode/1-500/recover_bst"},next:{title:"101. Symmetric Tree",permalink:"/docs/leetcode/1-500/symmetric_tree"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/same-tree"},"https://leetcode.com/problems/same-tree")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\n        if not p or not q:\n            if not p and not q:\n                return True\n            else:\n                return False\n\n        if p.val != q.val:\n            return False\n\n        return self.isSameTree(p.left, q.left) \\\n           and self.isSameTree(p.right, q.right)\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func isSameTree(p *TreeNode, q *TreeNode) bool {\n    if p == nil || q == nil {\n        if p == nil && q == nil {\n            return true\n        } else {\n            return false\n        }\n    }\n\n    if p.Val != q.Val {\n        return false\n    }\n\n    return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)\n}\n")))}m.isMDXComponent=!0}}]);