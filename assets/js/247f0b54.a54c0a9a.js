"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[37440],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,d=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},87804:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(83117),o=(r(67294),r(3905));const a={title:"1161. Maximum Level Sum of a Binary Tree",sidebar_label:"1161. Maximum Level Sum of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},i=void 0,l={unversionedId:"leetcode/1001-1500/max_level_sum_of_binary_tree",id:"leetcode/1001-1500/max_level_sum_of_binary_tree",title:"1161. Maximum Level Sum of a Binary Tree",description:"https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree",source:"@site/docs/leetcode/1001-1500/1161_max_level_sum_of_binary_tree.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/max_level_sum_of_binary_tree",permalink:"/docs/leetcode/1001-1500/max_level_sum_of_binary_tree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1161_max_level_sum_of_binary_tree.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:1161,frontMatter:{title:"1161. Maximum Level Sum of a Binary Tree",sidebar_label:"1161. Maximum Level Sum of a Binary Tree",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"1155. Number of Dice Rolls With Target Sum",permalink:"/docs/leetcode/1001-1500/num_of_rolls_with_target_sum"},next:{title:"1167. Minimum Cost to Connect Sticks",permalink:"/docs/leetcode/1001-1500/min_cost_to_connect_sticks"}},c={},u=[{value:"Python",id:"python",level:2}],m={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree"},"https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\n\n\nclass Solution:\n    def maxLevelSum(self, root: Optional[TreeNode]) -> int:\n        mapper = defaultdict(int)\n\n        def dfs(node, level):\n            if not node:\n                return\n            \n            mapper[level] += node.val\n\n            dfs(node.left, level+1)\n            dfs(node.right, level+1)\n        \n        dfs(root, 1)\n\n        reverse_map = defaultdict(list)\n        for key, value in mapper.items():\n            reverse_map[value].append(key)\n        \n        return min(reverse_map[max(mapper.values())])\n")))}s.isMDXComponent=!0}}]);