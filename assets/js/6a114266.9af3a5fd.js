"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2974],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?t.createElement(m,i(i({ref:r},u),{},{components:n})):t.createElement(m,i({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},974:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"99. Recover Binary Search Tree",sidebar_label:"99. Recover Binary Search Tree",tags:["Leetcode Medium","BST"]},c=void 0,s={unversionedId:"leetcode/1-500/recover_bst",id:"leetcode/1-500/recover_bst",title:"99. Recover Binary Search Tree",description:"https://leetcode.com/problems/recover-binary-search-tree/",source:"@site/docs/leetcode/1-500/99_recover_bst.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/recover_bst",permalink:"/docs/leetcode/1-500/recover_bst",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/99_recover_bst.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:99,frontMatter:{title:"99. Recover Binary Search Tree",sidebar_label:"99. Recover Binary Search Tree",tags:["Leetcode Medium","BST"]},sidebar:"docSidebar",previous:{title:"98. Validate Binary Search Tree",permalink:"/docs/leetcode/1-500/bst_validation"},next:{title:"100. Same Tree",permalink:"/docs/leetcode/1-500/same_tree"}},u=[{value:"Python",id:"python",children:[{value:"Divide and Conquer",id:"divide-and-conquer",children:[],level:3}],level:2}],d={toc:u};function p(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/recover-binary-search-tree/"},"https://leetcode.com/problems/recover-binary-search-tree/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"divide-and-conquer"},"Divide and Conquer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transfer to array by inorder travelsal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Find the swapped elements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Travel the tree again, and recover the swapped elements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Time: O(NlogN)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Space: O(N)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, val=0, left=None, right=None):\n#         self.val = val\n#         self.left = left\n#         self.right = right\nclass Solution:\n    def recoverTree(self, root: Optional[TreeNode]) -> None:\n        """\n        Do not return anything, modify root in-place instead.\n        """\n        nums = self.inorder(root)\n        \n        x, y = None, None\n        for i in range(1, len(nums)):\n            if nums[i-1] > nums[i]:\n                y = nums[i]\n                if x is None:\n                    x = nums[i-1]\n                else:\n                    break\n        \n        self.recover(root, x, y, 2)\n    \n    def inorder(self, node):\n        if not node:\n            return []\n        \n        return self.inorder(node.left) + [node.val] + self.inorder(node.right)\n    \n    def recover(self, node, x, y, count):\n        if not node or count == 0:\n            return\n        \n        if node.val == x:\n            node.val = y\n            count -= 1\n        elif node.val == y:\n            node.val = x\n            count -= 1\n        \n        self.recover(node.left, x, y, count)\n        self.recover(node.right, x, y, count)\n')))}p.isMDXComponent=!0}}]);