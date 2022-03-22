"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[7091],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99110:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"113. Path Sum II",slidebar_label:"113. Path Sum II",tags:["Leetcode Medium","Binary Tree","DFS"]},u=void 0,l={unversionedId:"leetcode/1-500/path_sum_ii",id:"leetcode/1-500/path_sum_ii",title:"113. Path Sum II",description:"https://leetcode.com/problems/path-sum-ii/",source:"@site/docs/leetcode/1-500/113_path_sum_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/path_sum_ii",permalink:"/docs/leetcode/1-500/path_sum_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/113_path_sum_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:113,frontMatter:{title:"113. Path Sum II",slidebar_label:"113. Path Sum II",tags:["Leetcode Medium","Binary Tree","DFS"]},sidebar:"docSidebar",previous:{title:"112. Path Sum",permalink:"/docs/leetcode/1-500/path_sum"},next:{title:"114. Flatten Binary Tree to Linked List",permalink:"/docs/leetcode/1-500/flatten_binary_tree_to_ll"}},s=[{value:"Python",id:"python",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/path-sum-ii/"},"https://leetcode.com/problems/path-sum-ii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:\n        result = []\n\n        def dfs(node, path, current_sum):\n            if not node:\n                return\n\n            current_sum += node.val\n\n            if current_sum == targetSum and not node.left and not node.right:\n                result.append(path+[node.val])\n\n            dfs(node.left, path+[node.val], current_sum)\n            dfs(node.right, path+[node.val], current_sum)\n\n        dfs(root, [], 0)\n\n        return result\n")))}d.isMDXComponent=!0}}]);