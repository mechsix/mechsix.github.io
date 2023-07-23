"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[83434],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(t),v=l,m=p["".concat(s,".").concat(v)]||p[v]||u[v]||a;return t?n.createElement(m,o(o({ref:r},d),{},{components:t})):n.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=v;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<a;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},17366:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=t(87462),l=(t(67294),t(3905));const a={title:"429. N-ary Tree Level Order Traversal",sidebar_label:"429. N-ary Tree Level Order Traversal",tags:["Leetcode Medium","DFS","N-ary Tree"]},o=void 0,c={unversionedId:"leetcode/1-500/nary_tree_level_order_traversal",id:"leetcode/1-500/nary_tree_level_order_traversal",title:"429. N-ary Tree Level Order Traversal",description:"https://leetcode.com/problems/n-ary-tree-level-order-traversal/",source:"@site/docs/leetcode/1-500/429_nary_tree_level_order_traversal.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/nary_tree_level_order_traversal",permalink:"/docs/leetcode/1-500/nary_tree_level_order_traversal",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/429_nary_tree_level_order_traversal.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"N-ary Tree",permalink:"/docs/tags/n-ary-tree"}],version:"current",sidebarPosition:429,frontMatter:{title:"429. N-ary Tree Level Order Traversal",sidebar_label:"429. N-ary Tree Level Order Traversal",tags:["Leetcode Medium","DFS","N-ary Tree"]},sidebar:"docSidebar",previous:{title:"424. Longest Repeating Character Replacement",permalink:"/docs/leetcode/1-500/logtest_repeating_character_replacement"},next:{title:"430. Flatten Doubly Linked List",permalink:"/docs/leetcode/1-500/flatten_multilevel_doubly_linked_list"}},s={},i=[{value:"Python",id:"python",level:2},{value:"DFS",id:"dfs",level:3}],d={toc:i},p="wrapper";function u(e){let{components:r,...t}=e;return(0,l.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/n-ary-tree-level-order-traversal/"},"https://leetcode.com/problems/n-ary-tree-level-order-traversal/")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("h3",{id:"dfs"},"DFS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def levelOrder(self, root: 'Node') -> List[List[int]]:\n        def dfs(node, level, result):\n            if not node:\n                return\n\n            if len(result) <= level:\n                result.append([])\n\n            result[level].append(node.val)\n\n            for child in node.children:\n                dfs(child, level+1, result)\n\n        levels = []\n        dfs(root, 0, levels)\n        return levels\n")))}u.isMDXComponent=!0}}]);