"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1752],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12989:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"98. Validate Binary Search Tree",sidebar_label:"98. Validate Binary Search Tree",tags:["Leetcode Medium","BST"]},c=void 0,d={unversionedId:"leetcode/1-500/bst_validation",id:"leetcode/1-500/bst_validation",title:"98. Validate Binary Search Tree",description:"https://leetcode.com/problems/validate-binary-search-tree",source:"@site/docs/leetcode/1-500/98_bst_validation.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/bst_validation",permalink:"/docs/leetcode/1-500/bst_validation",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/98_bst_validation.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:98,frontMatter:{title:"98. Validate Binary Search Tree",sidebar_label:"98. Validate Binary Search Tree",tags:["Leetcode Medium","BST"]},sidebar:"docSidebar",previous:{title:"97. Interleaving String",permalink:"/docs/leetcode/1-500/interleaving_string"},next:{title:"99. Recover Binary Search Tree",permalink:"/docs/leetcode/1-500/recover_bst"}},s=[{value:"Python",id:"python",children:[{value:"First Solution",id:"first-solution",children:[],level:3},{value:"Second Solution",id:"second-solution",children:[],level:3}],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/validate-binary-search-tree"},"https://leetcode.com/problems/validate-binary-search-tree")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"first-solution"},"First Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        return self._is_valid(root, None, None)\n\n    def _is_valid(self, node, min_val, max_val):\n        if not node:\n            return True\n\n        if (min_val is not None and node.val <= min_val) \\\n        or (max_val is not None and node.val >= max_val):\n            return False\n")),(0,i.kt)("h3",{id:"second-solution"},"Second Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n\n        def dfs(node, left, right):\n            if not node:\n                return True\n\n            if node.val <= left or node.val >= right:\n                return False\n\n            return dfs(node.left, left, node.val) and dfs(node.right, node.val, right)\n\n        return dfs(root, -inf, inf)\n")))}p.isMDXComponent=!0}}]);