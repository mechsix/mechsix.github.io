"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[29139],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=(n(67294),n(3905));const a={title:"938. Range Sum of BST",sidebar_label:"938. Range Sum of BST",tags:["Leetcode Easy","BST","Binary Tree"]},i=void 0,l={unversionedId:"leetcode/501-1000/range_sum_bst",id:"leetcode/501-1000/range_sum_bst",title:"938. Range Sum of BST",description:"Python",source:"@site/docs/leetcode/501-1000/938_range_sum_bst.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/range_sum_bst",permalink:"/docs/leetcode/501-1000/range_sum_bst",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/938_range_sum_bst.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"BST",permalink:"/docs/tags/bst"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:938,frontMatter:{title:"938. Range Sum of BST",sidebar_label:"938. Range Sum of BST",tags:["Leetcode Easy","BST","Binary Tree"]},sidebar:"docSidebar",previous:{title:"936. Stamping The Sequence",permalink:"/docs/leetcode/501-1000/stamping_the_sequence"},next:{title:"941. Valid Mountain Array",permalink:"/docs/leetcode/501-1000/valid_mountain_array"}},c={},s=[{value:"Python",id:"python",level:2}],u={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nclass Solution:\n    def __init__(self):\n        self.result = 0\n    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:\n        self.result = 0\n        self._travel(root, low, high)\n        return self.result\n\n    def _travel(self, node, low, high):\n        if not node:\n            return\n\n        if node.val > low:\n            self._travel(node.left, low, high)\n\n        if low <= node.val and node.val <= high:\n            self.result += node.val\n\n        if node.val < high:\n            self._travel(node.right, low, high)\n")))}f.isMDXComponent=!0}}]);