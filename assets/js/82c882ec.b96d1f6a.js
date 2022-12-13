"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[27795],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return y}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,y=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return t?n.createElement(y,l(l({ref:r},u),{},{components:t})):n.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32837:function(e,r,t){t.r(r),t.d(r,{assets:function(){return i},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var n=t(83117),o=(t(67294),t(3905));const a={title:"589. N-ary Tree Preorder Traversal",sidebar_label:"589. N-ary Tree Preorder Traversal",tags:["Leetcode Easy","Tree"]},l=void 0,c={unversionedId:"leetcode/501-1000/nary_tree_preorder_traversal",id:"leetcode/501-1000/nary_tree_preorder_traversal",title:"589. N-ary Tree Preorder Traversal",description:"Python",source:"@site/docs/leetcode/501-1000/589_nary_tree_preorder_traversal.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/nary_tree_preorder_traversal",permalink:"/docs/leetcode/501-1000/nary_tree_preorder_traversal",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/589_nary_tree_preorder_traversal.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Tree",permalink:"/docs/tags/tree"}],version:"current",sidebarPosition:589,frontMatter:{title:"589. N-ary Tree Preorder Traversal",sidebar_label:"589. N-ary Tree Preorder Traversal",tags:["Leetcode Easy","Tree"]},sidebar:"docSidebar",previous:{title:"588. Design In-Memory File System",permalink:"/docs/leetcode/501-1000/design_in_memory_file_system"},next:{title:"605. Can Place Flowers",permalink:"/docs/leetcode/501-1000/place_flowers"}},i={},s=[{value:"Python",id:"python",level:2}],u={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def preorder(self, root: 'Node') -> List[int]:\n\n        def travel(node, result):\n            if not node:\n                return\n\n            result.append(node.val)\n            for child in node.children:\n                travel(child, result)\n\n        result = []\n        travel(root, result)\n        return result\n")))}d.isMDXComponent=!0}}]);