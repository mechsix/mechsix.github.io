"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[57418],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},21060:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var n=t(83117),o=(t(67294),t(3905));const i={title:"617. Merge Two Binary Trees",sidebar_label:"617. Merge Two Binary Trees",tags:["Leetcode Easy","Binary Tree"]},a=void 0,l={unversionedId:"leetcode/501-1000/merge_two_binary_trees",id:"leetcode/501-1000/merge_two_binary_trees",title:"617. Merge Two Binary Trees",description:"https://leetcode.com/problems/merge-two-binary-trees/",source:"@site/docs/leetcode/501-1000/617_merge_two_binary_trees.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/merge_two_binary_trees",permalink:"/docs/leetcode/501-1000/merge_two_binary_trees",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/617_merge_two_binary_trees.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:617,frontMatter:{title:"617. Merge Two Binary Trees",sidebar_label:"617. Merge Two Binary Trees",tags:["Leetcode Easy","Binary Tree"]},sidebar:"docSidebar",previous:{title:"609. Find Duplicate File in System",permalink:"/docs/leetcode/501-1000/find_duplicate_file_in_system"},next:{title:"622. Design Circular Queue",permalink:"/docs/leetcode/501-1000/design_circular_queue"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],u={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/merge-two-binary-trees/"},"https://leetcode.com/problems/merge-two-binary-trees/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root1 or not root2:\n            return root1 if root1 else root2\n\n        node = TreeNode(val=root1.val+root2.val)\n        node.left = self.mergeTrees(root1.left, root2.left)\n        node.right = self.mergeTrees(root1.right, root2.right)\n\n        return node\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {\n    if root1 == nil || root2 == nil {\n        if root1 != nil {\n            return root1\n        } else {\n            return root2\n        }\n    }\n\n    node := new(TreeNode)\n    node.Val = root1.Val + root2.Val\n    node.Left = mergeTrees(root1.Left, root2.Left)\n    node.Right = mergeTrees(root1.Right, root2.Right)\n\n    return node\n}\n")))}d.isMDXComponent=!0}}]);