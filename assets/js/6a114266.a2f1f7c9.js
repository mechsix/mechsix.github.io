"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[92974],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},974:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"99. Recover Binary Search Tree",sidebar_label:"99. Recover Binary Search Tree",tags:["Leetcode Medium","BST"]},i=void 0,l={unversionedId:"leetcode/1-500/recover_bst",id:"leetcode/1-500/recover_bst",title:"99. Recover Binary Search Tree",description:"https://leetcode.com/problems/recover-binary-search-tree/",source:"@site/docs/leetcode/1-500/99_recover_bst.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/recover_bst",permalink:"/docs/leetcode/1-500/recover_bst",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/99_recover_bst.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:99,frontMatter:{title:"99. Recover Binary Search Tree",sidebar_label:"99. Recover Binary Search Tree",tags:["Leetcode Medium","BST"]},sidebar:"docSidebar",previous:{title:"98. Validate Binary Search Tree",permalink:"/docs/leetcode/1-500/bst_validation"},next:{title:"100. Same Tree",permalink:"/docs/leetcode/1-500/same_tree"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Divide and Conquer",id:"divide-and-conquer",level:3}],d={toc:s},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/recover-binary-search-tree/"},"https://leetcode.com/problems/recover-binary-search-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"divide-and-conquer"},"Divide and Conquer"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Transfer to array by inorder travelsal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Find the swapped elements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Travel the tree again, and recover the swapped elements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Time: O(NlogN)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Space: O(N)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def recoverTree(self, root: Optional[TreeNode]) -> None:\n        """\n        Do not return anything, modify root in-place instead.\n        """\n        nums = self.inorder(root)\n        \n        x, y = None, None\n        for i in range(1, len(nums)):\n            if nums[i-1] > nums[i]:\n                y = nums[i]\n                if x is None:\n                    x = nums[i-1]\n                else:\n                    break\n        \n        self.recover(root, x, y, 2)\n    \n    def inorder(self, node):\n        if not node:\n            return []\n        \n        return self.inorder(node.left) + [node.val] + self.inorder(node.right)\n    \n    def recover(self, node, x, y, count):\n        if not node or count == 0:\n            return\n        \n        if node.val == x:\n            node.val = y\n            count -= 1\n        elif node.val == y:\n            node.val = x\n            count -= 1\n        \n        self.recover(node.left, x, y, count)\n        self.recover(node.right, x, y, count)\n')))}u.isMDXComponent=!0}}]);