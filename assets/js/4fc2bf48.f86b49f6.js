"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3665],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return p}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(o),p=n,d=f["".concat(l,".").concat(p)]||f[p]||m[p]||c;return o?r.createElement(d,a(a({ref:t},u),{},{components:o})):r.createElement(d,a({ref:t},u))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},47582:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=o(87462),n=o(63366),c=(o(67294),o(3905)),a=["components"],i={title:"236. Lowest Common Ancestor of a Binary Tree",sidebar_label:"236. Lowest Common Ancestor of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},l=void 0,s={unversionedId:"leetcode/1-500/lowest_common_ancestor_of_bt",id:"leetcode/1-500/lowest_common_ancestor_of_bt",title:"236. Lowest Common Ancestor of a Binary Tree",description:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",source:"@site/docs/leetcode/1-500/236_lowest_common_ancestor_of_bt.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/lowest_common_ancestor_of_bt",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bt",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/236_lowest_common_ancestor_of_bt.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:236,frontMatter:{title:"236. Lowest Common Ancestor of a Binary Tree",sidebar_label:"236. Lowest Common Ancestor of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"231. Power of Two",permalink:"/docs/leetcode/1-500/power_of_two"},next:{title:"250. Count Univalue Subtrees",permalink:"/docs/leetcode/1-500/count_univalue_subtree"}},u=[{value:"Python",id:"python",children:[],level:2}],m={toc:u};function f(e){var t=e.components,o=(0,n.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree"},"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if not root:\n            # Leaf, but target not found\n            return None\n\n        if root.val == p.val or root.val == q.val:\n            # Hit the target, current root is p or q\n            return root\n\n        left = self.lowestCommonAncestor(root.left, p, q)\n        right = self.lowestCommonAncestor(root.right, p, q)\n\n        if not left or not right:\n            # One or more target are not yet reach\n            return left if left else right\n\n        # Both left and right are reaching the targets, current node is the answer\n        return root\n")))}f.isMDXComponent=!0}}]);