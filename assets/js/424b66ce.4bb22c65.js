"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3959],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88898:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"1650. Lowest Common Ancestor of a Binary Tree III",sidebar_label:"1650. Lowest Common Ancestor of a Binary Tree III",tags:["Leetcode Medium","Binary Tree","Floyd's Algorithm"]},s=void 0,c={unversionedId:"leetcode/1501-2000/lowest_common_ancestor_of_a_binary_tree_iii",id:"leetcode/1501-2000/lowest_common_ancestor_of_a_binary_tree_iii",title:"1650. Lowest Common Ancestor of a Binary Tree III",description:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/",source:"@site/docs/leetcode/1501-2000/1650_lowest_common_ancestor_of_a_binary_tree_iii.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/lowest_common_ancestor_of_a_binary_tree_iii",permalink:"/docs/leetcode/1501-2000/lowest_common_ancestor_of_a_binary_tree_iii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1650_lowest_common_ancestor_of_a_binary_tree_iii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"Floyd's Algorithm",permalink:"/docs/tags/floyds-algorithm"}],version:"current",sidebarPosition:1650,frontMatter:{title:"1650. Lowest Common Ancestor of a Binary Tree III",sidebar_label:"1650. Lowest Common Ancestor of a Binary Tree III",tags:["Leetcode Medium","Binary Tree","Floyd's Algorithm"]},sidebar:"docSidebar",previous:{title:"1644. Lowest Common Ancestor of a Binary Tree II",permalink:"/docs/leetcode/1501-2000/lowest_common_ancestor_of_bt_ii"},next:{title:"1658. Minimum Operations to Reduce X to Zero",permalink:"/docs/leetcode/1501-2000/min_operations_to_reduce_x_to_zero"}},d=[{value:"Python",id:"python",children:[{value:"Find root first then DFS",id:"find-root-first-then-dfs",children:[],level:3},{value:"Floyd&#39;s Algorithm",id:"floyds-algorithm",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/"},"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"find-root-first-then-dfs"},"Find root first then DFS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':\n        root = p\n        while root.parent:\n            root = root.parent\n\n        # Same as Leetcode 236.\n        def dfs(node):\n            if not node:\n                return node\n\n            if node.val == p.val or node.val == q.val:\n                return node\n\n            left = dfs(node.left)\n            right = dfs(node.right)\n\n            if not left or not right:\n                return left if left else right\n\n            return node\n\n        return dfs(root)\n")),(0,i.kt)("h3",{id:"floyds-algorithm"},"Floyd's Algorithm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5c07\u5f9e\u5169\u500bnode\u5230root\u9593\u7684\u9019\u689dpath\u505a\u6210looped Linked List")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7528Floyd's Algorithm\u53bb\u627e\u51fa\u91cd\u758a\u7684\u7bc0\u9ede")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Time: # \u4e0d\u597d\u7b97\uff0c\u4f46\u6703\u662f\u5169\u500b\u7bc0\u9ede\u9593\u7d93\u904eroot\u9023\u7d50\u8d77\u4f86\u7684\u9019\u689dLinked List\u8207\u5169\u500b\u7bc0\u9ede\u7684\u5dee")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Space: O(1)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':\n        p1, p2 = p, q\n        while p1 != p2:\n            p1 = p1.parent if p1.parent else q\n            p2 = p2.parent if p2.parent else p\n\n        return p1\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var lowestCommonAncestor = function(p, q) {\n    function findRoot(node) {\n        return node.parent ? findRoot(node.parent) : node;\n    }\n\n    const root = findRoot(p);\n    let res = null;\n    const recursive = (node) => {\n        if (!node) return false;\n        const isLeft = recursive(node.left);\n        const isRight = recursive(node.right);\n\n        const isMid = node.val === p.val || node.val === q.val;\n        if (isLeft && isRight || isLeft && isMid || isRight && isMid) {\n            res = node;\n            return;\n        }\n        return isLeft || isRight || isMid;\n    }\n\n    recursive(root);\n    return res;\n};\n")))}m.isMDXComponent=!0}}]);