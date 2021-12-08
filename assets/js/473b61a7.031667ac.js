"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[7473],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=i,d=p["".concat(c,".").concat(y)]||p[y]||f[y]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},71645:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={title:"563. Binary Tree Tilt",sidebar_label:"563. Binary Tree Tilt"},c=void 0,u={unversionedId:"leetcode/binary_tree/binary_tree_tilt",id:"leetcode/binary_tree/binary_tree_tilt",isDocsHomePage:!1,title:"563. Binary Tree Tilt",description:"Python",source:"@site/docs/leetcode/binary_tree/593_binary_tree_tilt.md",sourceDirName:"leetcode/binary_tree",slug:"/leetcode/binary_tree/binary_tree_tilt",permalink:"/docs/leetcode/binary_tree/binary_tree_tilt",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/binary_tree/593_binary_tree_tilt.md",tags:[],version:"current",sidebarPosition:593,frontMatter:{title:"563. Binary Tree Tilt",sidebar_label:"563. Binary Tree Tilt"},sidebar:"tutorialSidebar",previous:{title:"226. Invert Binary Tree",permalink:"/docs/leetcode/binary_tree/invert_binary_tree"},next:{title:"654. Maximum Binary Tree",permalink:"/docs/leetcode/binary_tree/max_binary_tree"}},s=[{value:"Python",id:"python",children:[]}],f={toc:s};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.total_tilt = 0\n\n    def findTilt(self, root: Optional[TreeNode]) -> int:\n        self._travel(0, root)\n        return self.total_tilt\n\n    def _travel(self, total: int, node) -> tuple:\n        if not node:\n            return 0\n\n        left_total = self._travel(0, node.left)\n        right_total = self._travel(0, node.right)\n\n        self.total_tilt += abs(left_total - right_total)\n\n        return node.val + left_total + right_total\n")))}p.isMDXComponent=!0}}]);