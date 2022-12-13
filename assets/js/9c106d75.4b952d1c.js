"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[60946],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81776:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const i={title:"1644. Lowest Common Ancestor of a Binary Tree II",sidebar_label:"1644. Lowest Common Ancestor of a Binary Tree II",tags:["Leetcode Medium","Binary Tree"]},a=void 0,s={unversionedId:"leetcode/1501-2000/lowest_common_ancestor_of_bt_ii",id:"leetcode/1501-2000/lowest_common_ancestor_of_bt_ii",title:"1644. Lowest Common Ancestor of a Binary Tree II",description:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/",source:"@site/docs/leetcode/1501-2000/1644_lowest_common_ancestor_of_bt_ii.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/lowest_common_ancestor_of_bt_ii",permalink:"/docs/leetcode/1501-2000/lowest_common_ancestor_of_bt_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1644_lowest_common_ancestor_of_bt_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:1644,frontMatter:{title:"1644. Lowest Common Ancestor of a Binary Tree II",sidebar_label:"1644. Lowest Common Ancestor of a Binary Tree II",tags:["Leetcode Medium","Binary Tree"]},sidebar:"docSidebar",previous:{title:"1642. Furthest Building You Can Reach",permalink:"/docs/leetcode/1501-2000/furtuest_building_can_reach"},next:{title:"1647. Minimum Deletions to Make Character Frequencies Unique",permalink:"/docs/leetcode/1501-2000/mini_deletions_make_character_frequencies_unique"}},c={},l=[{value:"Python",id:"python",level:2},{value:"Postorder Traversal",id:"postorder-traversal",level:3},{value:"Javascript",id:"javascript",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/"},"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"postorder-traversal"},"Postorder Traversal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n\n        def post_order(node):\n            if not node:\n                return None, 0\n\n            r_node, r_hits = post_order(node.right)\n            l_node, l_hits = post_order(node.left)\n\n            if node.val == p.val or node.val == q.val:\n                return node, 1 + r_hits + l_hits\n\n            if l_node and r_node:\n                return node, r_hits + l_hits\n\n            return (l_node, l_hits) if l_node else (r_node, r_hits)\n\n        target_node, hits = post_order(root)\n\n        return target_node if hits == 2 else None\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var lowestCommonAncestor = function(root, p, q) {\n    if (!p || !q) return null;\n    let res = null;\n    const recursive = (node) => {\n        if (!node) return null;\n        let isLeft = recursive(node.left);\n        let isRight = recursive(node.right);\n        let isMid = node.val === p.val || node.val === q.val;\n        if ((isMid && isRight) || (isMid && isLeft) || (isLeft && isRight)) {\n            res = node;\n        }\n        return isLeft || isRight || isMid;\n    }\n    recursive(root);\n    return res;\n};\n")))}d.isMDXComponent=!0}}]);