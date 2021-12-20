"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3437],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,_=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?t.createElement(_,d(d({ref:r},c),{},{components:n})):t.createElement(_,d({ref:r},c))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,d=new Array(i);d[0]=u;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,d[1]=a;for(var s=2;s<i;s++)d[s]=n[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76153:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),d=["components"],a={title:"105. Construct Binary Tree from Preorder and Inorder Traversal",sidebar_label:"105. Construct Binary Tree from Preorder and Inorder Traversal",tags:["Binary Tree","Leetcode Medium"]},l=void 0,s={unversionedId:"leetcode/binary_tree_preorder_inorder",id:"leetcode/binary_tree_preorder_inorder",title:"105. Construct Binary Tree from Preorder and Inorder Traversal",description:"Python",source:"@site/docs/leetcode/105_binary_tree_preorder_inorder.md",sourceDirName:"leetcode",slug:"/leetcode/binary_tree_preorder_inorder",permalink:"/docs/leetcode/binary_tree_preorder_inorder",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/105_binary_tree_preorder_inorder.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:105,frontMatter:{title:"105. Construct Binary Tree from Preorder and Inorder Traversal",sidebar_label:"105. Construct Binary Tree from Preorder and Inorder Traversal",tags:["Binary Tree","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"102. Binary Tree Level Order Traversal",permalink:"/docs/leetcode/binary_tree_levelorder"},next:{title:"106. Construct Binary Tree from Inorder and Postorder Traversal",permalink:"/docs/leetcode/construct_bin_tree_from_inorder_postorder_traversal"}},c=[{value:"Python",id:"python",children:[{value:"First try",id:"first-try",children:[],level:3},{value:"Second try",id:"second-try",children:[],level:3}],level:2}],p={toc:c};function u(e){var r=e.components,n=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"first-try"},"First try"),(0,i.kt)("p",null,"A correct solutions but did not get benfit from Python List slide"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from typing import List, Optional\n\n\nclass Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        return self._build(\n            preorder=preorder,\n            pre_start=0,\n            pre_end=len(preorder)-1,\n            inorder=inorder,\n            in_start=0,\n            in_end=len(inorder)-1\n        )\n\n    def _build(self, preorder: List[int], pre_start: int, pre_end: int,\n               inorder: List[int], in_start: int, in_end: int):\n        if pre_start > pre_end:\n            return None\n\n        root_val = preorder[pre_start]\n        root_index = inorder.index(root_val)\n\n        left_size = root_index - in_start\n\n        return TreeNode(\n            val=root_val,\n            left=self._build(\n                preorder=preorder,\n                pre_start=pre_start+1,\n                pre_end=pre_start+left_size,\n                inorder=inorder,\n                in_start=in_start,\n                in_end=root_index-1\n            ),\n            right=self._build(\n                preorder=preorder,\n                pre_start=pre_start+left_size+1,\n                pre_end=pre_end,\n                inorder=inorder,\n                in_start=root_index+1,\n                in_end=in_end\n            )\n        )\n\n")),(0,i.kt)("h3",{id:"second-try"},"Second try"),(0,i.kt)("p",null,"Solution which more Pythonic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from typing import List\n\n\nclass Solution:\n    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n        if not preorder or not inorder:\n            return\n\n        root_val = preorder[0]\n        root_index = inorder.index(root_val)\n\n        return TreeNode(\n            val=root_val,\n            left=self.buildTree(\n                preorder[1:],\n                inorder[0:root_index]\n            ),\n            right=self.buildTree(\n                preorder[root_index+1:],\n                inorder[root_index+1:]\n            )\n        )\n")))}u.isMDXComponent=!0}}]);