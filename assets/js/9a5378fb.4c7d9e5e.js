"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9509],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76408:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"653. Two Sum IV - Input is a BST",sidebar_label:"653. Two Sum IV - Input is a BST",tags:["Leetcode Easy","Number Sum","DFS","BFS","BST"]},u=void 0,l={unversionedId:"leetcode/501-1000/two_sum_4_bst_input",id:"leetcode/501-1000/two_sum_4_bst_input",title:"653. Two Sum IV - Input is a BST",description:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",source:"@site/docs/leetcode/501-1000/653_two_sum_4_bst_input.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/two_sum_4_bst_input",permalink:"/docs/leetcode/501-1000/two_sum_4_bst_input",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/653_two_sum_4_bst_input.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Number Sum",permalink:"/docs/tags/number-sum"},{label:"DFS",permalink:"/docs/tags/dfs"},{label:"BFS",permalink:"/docs/tags/bfs"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:653,frontMatter:{title:"653. Two Sum IV - Input is a BST",sidebar_label:"653. Two Sum IV - Input is a BST",tags:["Leetcode Easy","Number Sum","DFS","BFS","BST"]},sidebar:"docSidebar",previous:{title:"652. Find Duplicate Subtrees",permalink:"/docs/leetcode/501-1000/find_duplicate_subtrees"},next:{title:"654. Maximum Binary Tree",permalink:"/docs/leetcode/501-1000/max_binary_tree"}},c=[{value:"Python",id:"python",children:[{value:"DFS",id:"dfs",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"},"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"dfs"},"DFS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remember the path and do postorder traversal"),(0,a.kt)("li",{parentName:"ul"},"Did NOT use the advantage from BST...")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:\n        def dfs(node, targets: set):\n            if not node:\n                return False\n            if node.val in targets:\n                return True\n\n            targets.add(k-node.val)\n\n            return dfs(node.left, targets) or dfs(node.right, targets)\n\n        return dfs(root, set())\n")))}d.isMDXComponent=!0}}]);