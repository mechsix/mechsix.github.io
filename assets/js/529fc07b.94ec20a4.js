"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[76602],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,p=d["".concat(s,".").concat(m)]||d[m]||f[m]||a;return n?r.createElement(p,c(c({ref:t},u),{},{components:n})):r.createElement(p,c({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37928:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const a={title:"236. Lowest Common Ancestor of a Binary Tree",sidebar_label:"236. Lowest Common Ancestor of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},c=void 0,i={unversionedId:"leetcode/1-500/lowest_common_ancestor_of_bt",id:"leetcode/1-500/lowest_common_ancestor_of_bt",title:"236. Lowest Common Ancestor of a Binary Tree",description:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",source:"@site/docs/leetcode/1-500/326_lowest_common_ancestor_of_bt.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/lowest_common_ancestor_of_bt",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bt",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/326_lowest_common_ancestor_of_bt.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:326,frontMatter:{title:"236. Lowest Common Ancestor of a Binary Tree",sidebar_label:"236. Lowest Common Ancestor of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"322. Coin Change",permalink:"/docs/leetcode/1-500/coin_change"},next:{title:"328. Odd Even Linked List",permalink:"/docs/leetcode/1-500/odd_even_linklist"}},s={},l=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree"},"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n        if not root:\n            # Leaf, but target not found\n            return None\n\n        if root.val == p.val or root.val == q.val:\n            # Hit the target, current root is p or q\n            return root\n\n        left = self.lowestCommonAncestor(root.left, p, q)\n        right = self.lowestCommonAncestor(root.right, p, q)\n\n        if not left or not right:\n            # One or more target are not yet reach\n            return left if left else right\n\n        # Both left and right are reaching the targets, current node is the answer\n        return root\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var lowestCommonAncestor = function(root, p, q) {\n    let res;\n  \n    const recursive = (node) => {\n      if (node === null) return false;\n      \n      const isLeftMatched = recursive(node.left);\n      const isRightMatched = recursive(node.right);\n      \n      const isMidMatched = node.val === p.val || node.val === q.val;\n      \n      if ((isLeftMatched && isRightMatched) || (isLeftMatched && isMidMatched) || (isRightMatched && isMidMatched)) res = node;\n      \n      return isLeftMatched || isRightMatched || isMidMatched;            \n    }\n    \n    recursive(root);\n    return res;\n};\n")))}d.isMDXComponent=!0}}]);