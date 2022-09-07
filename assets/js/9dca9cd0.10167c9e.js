"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3937],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83499:function(e,r,n){n.r(r),n.d(r,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"814. Binary Tree Pruning",sidebar_label:"814. Binary Tree Pruning",tags:["Leetcode Medium","Binary Tree"]},l=void 0,u={unversionedId:"leetcode/501-1000/binary_tree_pruning",id:"leetcode/501-1000/binary_tree_pruning",title:"814. Binary Tree Pruning",description:"https://leetcode.com/problems/binary-tree-pruning/",source:"@site/docs/leetcode/501-1000/814_binary_tree_pruning.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/binary_tree_pruning",permalink:"/docs/leetcode/501-1000/binary_tree_pruning",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/814_binary_tree_pruning.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:814,frontMatter:{title:"814. Binary Tree Pruning",sidebar_label:"814. Binary Tree Pruning",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"804. Unique Morse Code Words",permalink:"/docs/leetcode/501-1000/unique_morse_code_words"},next:{title:"820. Short Encoding of Words",permalink:"/docs/leetcode/501-1000/short_encoding_of_words"}},p=[{value:"Python",id:"python",children:[{value:"Postfix Traversal",id:"postfix-traversal",children:[],level:3}],level:2}],s={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/binary-tree-pruning/"},"https://leetcode.com/problems/binary-tree-pruning/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"postfix-traversal"},"Postfix Traversal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def pruneTree(self, node: Optional[TreeNode]) -> Optional[TreeNode]:\n        if not node:\n            return\n\n        node.left = self.pruneTree(node.left)\n        node.right = self.pruneTree(node.right)\n        \n        if node.val == 0 and not node.left and not node.right:\n            return\n\n        return node\n")))}d.isMDXComponent=!0}}]);