"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28237],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||l;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const l={title:"538. Convert BST to Greater Tree",sidebar_label:"538. Convert BST to Greater Tree",tags:["Leetcode Medium","BST"]},a=void 0,c={unversionedId:"leetcode/501-1000/feat1038_convert_bst_greater_tree",id:"leetcode/501-1000/feat1038_convert_bst_greater_tree",title:"538. Convert BST to Greater Tree",description:"https://leetcode.com/problems/convert-bst-to-greater-tree/",source:"@site/docs/leetcode/501-1000/538_feat1038_convert_bst_greater_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/feat1038_convert_bst_greater_tree",permalink:"/docs/leetcode/501-1000/feat1038_convert_bst_greater_tree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/538_feat1038_convert_bst_greater_tree.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:538,frontMatter:{title:"538. Convert BST to Greater Tree",sidebar_label:"538. Convert BST to Greater Tree",tags:["Leetcode Medium","BST"]},sidebar:"docSidebar",previous:{title:"535. Encode and Decode TinyURL",permalink:"/docs/leetcode/501-1000/encode_decode_tinyurl"},next:{title:"540. Single Element in a Sorted Array",permalink:"/docs/leetcode/501-1000/single_elm_in_sotrted_array"}},i={},s=[{value:"Python",id:"python",level:2},{value:"Inorder BST (First run)",id:"inorder-bst-first-run",level:3},{value:"Inorder BST (second run)",id:"inorder-bst-second-run",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/convert-bst-to-greater-tree/"},"https://leetcode.com/problems/convert-bst-to-greater-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"inorder-bst-first-run"},"Inorder BST (First run)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BST inorder is in increasing order")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.total = 0\n\n    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not root:\n            return\n        self.total = 0\n        self._travel(root)\n\n        return root\n\n    def _travel(self, node):\n        if not node:\n            return\n\n        self._travel(node.right)\n\n        self.total += node.val\n        node.val = self.total\n\n        self._travel(node.left)\n")),(0,o.kt)("h3",{id:"inorder-bst-second-run"},"Inorder BST (second run)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use the Python ",(0,o.kt)("inlineCode",{parentName:"li"},"nonlocal")," keyword")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\n        total = 0\n\n        def covert(node):\n            nonlocal total\n\n            if not node:\n                return\n\n            covert(node.right)\n\n            total += node.val\n            node.val = total\n\n            covert(node.left)\n\n        covert(root)\n        return root\n")))}p.isMDXComponent=!0}}]);