"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[73123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},27339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"669. Trim a Binary Search Tree",sidebar_label:"669. Trim a Binary Search Tree",tags:["BST","Leetcode Medium"]},a=void 0,l={unversionedId:"leetcode/501-1000/trim_bst",id:"leetcode/501-1000/trim_bst",title:"669. Trim a Binary Search Tree",description:"https://leetcode.com/problems/trim-a-binary-search-tree/",source:"@site/docs/leetcode/501-1000/669_trim_bst.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/trim_bst",permalink:"/docs/leetcode/501-1000/trim_bst",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/669_trim_bst.md",tags:[{label:"BST",permalink:"/docs/tags/bst"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:669,frontMatter:{title:"669. Trim a Binary Search Tree",sidebar_label:"669. Trim a Binary Search Tree",tags:["BST","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"665. Non-decreasing Array",permalink:"/docs/leetcode/501-1000/non_decreasing_array"},next:{title:"673. Number of Longest Increasing Subsequence",permalink:"/docs/leetcode/501-1000/num_of_longest_increasing_subsequence"}},c={},s=[{value:"Python",id:"python",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/trim-a-binary-search-tree/"},"https://leetcode.com/problems/trim-a-binary-search-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def trimBST(self, root: Optional[TreeNode], low: int, high: int) -> Optional[TreeNode]:\n        return self.trim(root, low, high)\n\n    def trim(self, node, low, high):\n        if not node:\n            return\n\n        if node.val > high:\n            return self.trim(node.left, low, high)\n        elif node.val < low:\n            return self.trim(node.right, low, high)\n        else:\n            node.left = self.trim(node.left, low, high)\n            node.right = self.trim(node.right, low, high)\n            return node\n")))}m.isMDXComponent=!0}}]);