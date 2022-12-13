"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[58666],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(t),f=o,m=s["".concat(d,".").concat(f)]||s[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},95670:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return a},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=t(83117),o=(t(67294),t(3905));const i={title:"1448. Count Good Nodes in Binary Tree",sidebar_label:"1448. Count Good Nodes in Binary Tree",tags:["Leetcode Medium","Binary Tree","DFS"]},a=void 0,c={unversionedId:"leetcode/1001-1500/count_good_nodes_in_binary_tree",id:"leetcode/1001-1500/count_good_nodes_in_binary_tree",title:"1448. Count Good Nodes in Binary Tree",description:"https://leetcode.com/problems/count-good-nodes-in-binary-tree/",source:"@site/docs/leetcode/1001-1500/1448_count_good_nodes_in_binary_tree.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/count_good_nodes_in_binary_tree",permalink:"/docs/leetcode/1001-1500/count_good_nodes_in_binary_tree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1448_count_good_nodes_in_binary_tree.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:1448,frontMatter:{title:"1448. Count Good Nodes in Binary Tree",sidebar_label:"1448. Count Good Nodes in Binary Tree",tags:["Leetcode Medium","Binary Tree","DFS"]},sidebar:"docSidebar",previous:{title:"1446. Consecutive Characters",permalink:"/docs/leetcode/1001-1500/consecutive_chars"},next:{title:"1457. Pseudo-Palindromic Paths in a Binary Tree",permalink:"/docs/leetcode/1001-1500/pseudo_palindromic_paths_in_a_binary_tree"}},d={},l=[{value:"Python",id:"python",level:2}],u={toc:l};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-good-nodes-in-binary-tree/"},"https://leetcode.com/problems/count-good-nodes-in-binary-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def goodNodes(self, root: TreeNode) -> int:\n\n        def dfs(node: TreeNode, max_val: int):\n            if not node:\n                return 0\n\n            count = 1 if node.val >= max_val else 0\n\n            count += dfs(node.left, max(max_val, node.val))\n            count += dfs(node.right, max(max_val, node.val))\n            return count\n\n        return dfs(root, -inf)\n")))}s.isMDXComponent=!0}}]);