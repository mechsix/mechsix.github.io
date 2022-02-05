"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3665],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=s(r),p=n,d=f["".concat(l,".").concat(p)]||f[p]||u[p]||a;return r?o.createElement(d,c(c({ref:t},m),{},{components:r})):o.createElement(d,c({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47582:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"236. Lowest Common Ancestor of a Binary Tree",sidebar_label:"236. Lowest Common Ancestor of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},l=void 0,s={unversionedId:"leetcode/1-500/lowest_common_ancestor_of_bt",id:"leetcode/1-500/lowest_common_ancestor_of_bt",title:"236. Lowest Common Ancestor of a Binary Tree",description:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",source:"@site/docs/leetcode/1-500/236_lowest_common_ancestor_of_bt.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/lowest_common_ancestor_of_bt",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bt",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/236_lowest_common_ancestor_of_bt.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:236,frontMatter:{title:"236. Lowest Common Ancestor of a Binary Tree",sidebar_label:"236. Lowest Common Ancestor of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"231. Power of Two",permalink:"/docs/leetcode/1-500/power_of_two"},next:{title:"242. Valid Anagram",permalink:"/docs/leetcode/1-500/valid_anagram"}},m=[{value:"Python",id:"python",children:[],level:2}],u={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree"},"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if not root:\n            # Leaf, but target not found\n            return None\n\n        if root.val == p.val or root.val == q.val:\n            # Hit the target, current root is p or q\n            return root\n\n        left = self.lowestCommonAncestor(root.left, p, q)\n        right = self.lowestCommonAncestor(root.right, p, q)\n\n        if not left or not right:\n            # One or more target are not yet reach\n            return left if left else right\n\n        # Both left and right are reaching the targets, current node is the answer\n        return root\n")))}f.isMDXComponent=!0}}]);