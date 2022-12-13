"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[74417],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||u;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<u;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const u={title:"250. Count Univalue Subtrees",sidebar_label:"250. Count Univalue Subtrees",tags:["Leetcode Medium","Binary Tree"]},a=void 0,i={unversionedId:"leetcode/1-500/count_univalue_subtree",id:"leetcode/1-500/count_univalue_subtree",title:"250. Count Univalue Subtrees",description:"https://leetcode.com/problems/count-univalue-subtrees",source:"@site/docs/leetcode/1-500/250_count_univalue_subtree.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/count_univalue_subtree",permalink:"/docs/leetcode/1-500/count_univalue_subtree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/250_count_univalue_subtree.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:250,frontMatter:{title:"250. Count Univalue Subtrees",sidebar_label:"250. Count Univalue Subtrees",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"242. Valid Anagram",permalink:"/docs/leetcode/1-500/valid_anagram"},next:{title:"252. Meeting Rooms",permalink:"/docs/leetcode/1-500/meeting_rooms"}},c={},l=[{value:"Python",id:"python",level:2}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/count-univalue-subtrees"},"https://leetcode.com/problems/count-univalue-subtrees")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.ans = 0\n\n    def countUnivalSubtrees(self, root: Optional[TreeNode]) -> int:\n        if not root:\n            return 0\n\n        if self.check_tree(root, root.val):\n            self.ans += 1\n\n        self.countUnivalSubtrees(root.left)\n        self.countUnivalSubtrees(root.right)\n\n        return self.ans\n\n    def check_tree(self, node: Optional[TreeNode], parent_var: int) -> int:\n        if not node:\n            return True\n\n        if  node.val == parent_var \\\n        and self.check_tree(node.left, parent_var) \\\n        and self.check_tree(node.right, parent_var):\n            return True\n\n        return False\n")))}p.isMDXComponent=!0}}]);