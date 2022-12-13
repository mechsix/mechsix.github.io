"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[57821],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,p=c["".concat(u,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(p,l(l({ref:t},s),{},{components:n})):r.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var r=n(83117),a=(n(67294),n(3905));const o={title:"307. Range Sum Query - Mutable",sidebar_label:"307. Range Sum Query - Mutable",tags:["Leetcode Medium","Segment Tree"]},l=void 0,i={unversionedId:"leetcode/1-500/range_sum_query",id:"leetcode/1-500/range_sum_query",title:"307. Range Sum Query - Mutable",description:"https://leetcode.com/problems/range-sum-query-mutable/",source:"@site/docs/leetcode/1-500/307_range_sum_query.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/range_sum_query",permalink:"/docs/leetcode/1-500/range_sum_query",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/307_range_sum_query.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Segment Tree",permalink:"/docs/tags/segment-tree"}],version:"current",sidebarPosition:307,frontMatter:{title:"307. Range Sum Query - Mutable",sidebar_label:"307. Range Sum Query - Mutable",tags:["Leetcode Medium","Segment Tree"]},sidebar:"docSidebar",previous:{title:"304. Range Sum Query 2D - Immutable",permalink:"/docs/leetcode/1-500/range_sum_query_2d_immutable"},next:{title:"314. Binary Tree Vertical Order Traversal",permalink:"/docs/leetcode/1-500/binary_tree_vertical_order_traversal"}},u={},d=[{value:"Python",id:"python",level:2},{value:"Segment Tree",id:"segment-tree",level:3}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/range-sum-query-mutable/"},"https://leetcode.com/problems/range-sum-query-mutable/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"segment-tree"},"Segment Tree"),(0,a.kt)("p",null,"Space: O(N) # On the tree build time\nTime:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* Build: O(N)\n* Update: O(logN)\n* Query: O(logN)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from dataclasses import dataclass\n\n\n@dataclass\nclass TreeNode:\n    start: int\n    end: int\n    val: int = 0\n    left: TreeNode = None\n    right: TreeNode = None\n\nclass NumArray:\n    def __init__(self, nums: List[int]):\n        def build(start, end):\n            if start == end:\n                node = TreeNode(start, end, nums[start])\n                return node\n            middle = (start+end) >> 1\n            left = build(start, middle)\n            right = build(middle+1, end)\n            node = TreeNode(\n                start=start,\n                end=end,\n                val=left.val + right.val,\n                left=left,\n                right=right\n            )\n            return node\n        self.tree = build(0, len(nums)-1)\n\n    def update(self, index: int, val: int) -> None:\n        def update_tree(node):\n            if node.start == node.end == index:\n                node.val = val\n                return\n            middle = (node.start+node.end) >> 1\n            if index <= middle:\n                update_tree(node.left)\n            else:\n                update_tree(node.right)\n            node.val = node.left.val + node.right.val\n\n        update_tree(self.tree)\n\n    def sumRange(self, left: int, right: int) -> int:\n        def query_tree(node, left, right):\n            if node.start == left and node.end == right:\n                return node.val\n\n            middle = (node.start+node.end) >> 1\n\n            if right <= middle:\n                return query_tree(node.left, left, right)\n            elif left > middle:\n                return query_tree(node.right, left, right)\n            else:\n                return query_tree(node.left, left, middle) + query_tree(node.right, middle+1, right)\n\n        return query_tree(self.tree, left, right)\n")))}c.isMDXComponent=!0}}]);