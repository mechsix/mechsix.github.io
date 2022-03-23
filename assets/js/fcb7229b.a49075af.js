"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3559],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},31416:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"173. Binary Search Tree Iterator",sidebar_label:"173. Binary Search Tree Iterator",tags:["Leetcode Medium","BST"]},l=void 0,u={unversionedId:"leetcode/1-500/bst_iterator",id:"leetcode/1-500/bst_iterator",title:"173. Binary Search Tree Iterator",description:"Python",source:"@site/docs/leetcode/1-500/173_bst_iterator.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/bst_iterator",permalink:"/docs/leetcode/1-500/bst_iterator",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/173_bst_iterator.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:173,frontMatter:{title:"173. Binary Search Tree Iterator",sidebar_label:"173. Binary Search Tree Iterator",tags:["Leetcode Medium","BST"]},sidebar:"docSidebar",previous:{title:"171. Excel Sheet Column Number",permalink:"/docs/leetcode/1-500/excel_sheet_column"},next:{title:"187. Repeated DNA Sequences",permalink:"/docs/leetcode/1-500/repeated_dna_sequences"}},s=[{value:"Python",id:"python",children:[],level:2}],d={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class BSTIterator:\n    def __init__(self, root: Optional[TreeNode]):\n        tree = []\n\n        def inorder(node):\n            if not node:\n                return\n            inorder(node.left)\n            tree.append(node.val)\n            inorder(node.right)\n\n        inorder(root)\n        \n        self.root = root\n        self.tree = tree\n        self.cur = 0\n\n    def next(self) -> int:\n        result = self.tree[self.cur]\n        self.cur += 1\n        return result\n\n    def hasNext(self) -> bool:\n        return self.cur < len(self.tree)\n")))}p.isMDXComponent=!0}}]);