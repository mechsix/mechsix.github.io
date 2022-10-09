"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5015],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<c;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5372:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),l=["components"],i={title:"222. Count Complete Tree Nodes",sidebar_label:"222. Count Complete Tree Nodes",tags:["Binary Tree","Leetcode Medium"]},a=void 0,u={unversionedId:"leetcode/1-500/count_complete_bin_tree",id:"leetcode/1-500/count_complete_bin_tree",title:"222. Count Complete Tree Nodes",description:"https://leetcode.com/problems/count-complete-tree-nodes",source:"@site/docs/leetcode/1-500/222_count_complete_bin_tree.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/count_complete_bin_tree",permalink:"/docs/leetcode/1-500/count_complete_bin_tree",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/222_count_complete_bin_tree.md",tags:[{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:222,frontMatter:{title:"222. Count Complete Tree Nodes",sidebar_label:"222. Count Complete Tree Nodes",tags:["Binary Tree","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"221. Maximal Square",permalink:"/docs/leetcode/1-500/max_square"},next:{title:"225. Implement Stack using Queues",permalink:"/docs/leetcode/1-500/implement_stack_with_queue"}},s=[{value:"Python",id:"python",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-complete-tree-nodes"},"https://leetcode.com/problems/count-complete-tree-nodes")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def countNodes(self, root: Optional[TreeNode]) -> int:\n        result = self._travel(root, 0)\n        return result\n\n    def _travel(self, node, counter) -> int:\n        if not node:\n            return 0\n\n        return 1 + self._travel(node.left, 0) + self._travel(node.right, 0)\n")))}d.isMDXComponent=!0}}]);