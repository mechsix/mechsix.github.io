"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1456],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,y=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return t?n.createElement(y,a(a({ref:r},s),{},{components:t})):n.createElement(y,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,a[1]=d;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89390:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],d={title:"106. Construct Binary Tree from Inorder and Postorder Traversal",sidebar_label:"106. Construct Binary Tree from Inorder and Postorder Traversal"},l=void 0,c={unversionedId:"leetcode/binary_tree/construct_bin_tree_from_inorder_postorder_traversal",id:"leetcode/binary_tree/construct_bin_tree_from_inorder_postorder_traversal",isDocsHomePage:!1,title:"106. Construct Binary Tree from Inorder and Postorder Traversal",description:"Python",source:"@site/docs/leetcode/binary_tree/106_construct_bin_tree_from_inorder_postorder_traversal.md",sourceDirName:"leetcode/binary_tree",slug:"/leetcode/binary_tree/construct_bin_tree_from_inorder_postorder_traversal",permalink:"/docs/leetcode/binary_tree/construct_bin_tree_from_inorder_postorder_traversal",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/binary_tree/106_construct_bin_tree_from_inorder_postorder_traversal.md",tags:[],version:"current",sidebarPosition:106,frontMatter:{title:"106. Construct Binary Tree from Inorder and Postorder Traversal",sidebar_label:"106. Construct Binary Tree from Inorder and Postorder Traversal"},sidebar:"tutorialSidebar",previous:{title:"105. Construct Binary Tree from Preorder and Inorder Traversal",permalink:"/docs/leetcode/binary_tree/binary_tree_preorder_inorder"},next:{title:"114. Flatten Binary Tree to Linked List",permalink:"/docs/leetcode/binary_tree/flatten_binary_tree_to_ll"}},s=[{value:"Python",id:"python",children:[{value:"Study only try",id:"study-only-try",children:[]},{value:"Second try",id:"second-try",children:[]}]}],u={toc:s};function p(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"study-only-try"},"Study only try"),(0,i.kt)("p",null,"Not self solution, the answer from ",(0,i.kt)("a",{parentName:"p",href:"https://www.itread01.com/content/1544514664.html"},"here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def buildTree(self, inorder, postorder):\n        """\n        :type inorder: List[int]\n        :type postorder: List[int]\n        :rtype: TreeNode\n        """\n        if not inorder or not postorder:\n            return None\n        root = postorder[-1]\n        index = inorder.index(root)\n        ret = TreeNode(postorder.pop())\n        ret.right = self.buildTree(inorder[index+1:], postorder)\n        ret.left = self.buildTree(inorder[:index], postorder)\n        return ret\n')),(0,i.kt)("h3",{id:"second-try"},"Second try"),(0,i.kt)("p",null,"Solution which more Pythonic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:\n        if not inorder or not postorder:\n            return None\n\n        root_val = postorder[-1]\n        root_index = inorder.index(root_val)\n\n        return TreeNode(\n            val=root_val,\n            left=self.buildTree(\n                inorder[:root_index],\n                postorder[:root_index]\n            ),\n            right=self.buildTree(\n                inorder[root_index+1:],\n                postorder[root_index:-1]\n            )\n        )\n")))}p.isMDXComponent=!0}}]);