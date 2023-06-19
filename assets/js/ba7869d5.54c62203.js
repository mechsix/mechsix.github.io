"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[56740],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[f]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72364:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={title:"530. Minimum Absolute Difference in BST",sidebar_label:"530. Minimum Absolute Difference in BST",tags:["Leetcode Easy","BST"]},c=void 0,a={unversionedId:"leetcode/501-1000/min_absolute_diff_in_bst",id:"leetcode/501-1000/min_absolute_diff_in_bst",title:"530. Minimum Absolute Difference in BST",description:"Python",source:"@site/docs/leetcode/501-1000/530_min_absolute_diff_in_bst.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/min_absolute_diff_in_bst",permalink:"/docs/leetcode/501-1000/min_absolute_diff_in_bst",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/530_min_absolute_diff_in_bst.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"BST",permalink:"/docs/tags/bst"}],version:"current",sidebarPosition:530,frontMatter:{title:"530. Minimum Absolute Difference in BST",sidebar_label:"530. Minimum Absolute Difference in BST",tags:["Leetcode Easy","BST"]},sidebar:"docSidebar",previous:{title:"528. Random Pick with Weight",permalink:"/docs/leetcode/501-1000/random_pick_with_weight"},next:{title:"535. Encode and Decode TinyURL",permalink:"/docs/leetcode/501-1000/encode_decode_tinyurl"}},l={},u=[{value:"Python",id:"python",level:2}],s={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:\n\n        def dfs(node, upper, lower):\n            if not node:\n                return upper - lower\n        \n            return min(\n                dfs(node.left, node.val, lower),\n                dfs(node.right, upper, node.val)\n            )\n            \n        return dfs(root, inf, -inf)\n")))}f.isMDXComponent=!0}}]);