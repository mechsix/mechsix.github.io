"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[36991],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(a,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47154:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const i={title:"143. Reorder List",slidebar_label:"143. Reorder List",tags:["Leetcode Medium","Linked List"]},l=void 0,c={unversionedId:"leetcode/1-500/reorder_list",id:"leetcode/1-500/reorder_list",title:"143. Reorder List",description:"https://leetcode.com/problems/reorder-list/",source:"@site/docs/leetcode/1-500/143_reorder_list.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reorder_list",permalink:"/docs/leetcode/1-500/reorder_list",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/143_reorder_list.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:143,frontMatter:{title:"143. Reorder List",slidebar_label:"143. Reorder List",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"142. Linked List Cycle II",permalink:"/docs/leetcode/1-500/linked_list_cycle_ii"},next:{title:"144. Binary Tree Preorder Traversal",permalink:"/docs/leetcode/1-500/binary_tree_preorder"}},a={},s=[{value:"Python",id:"python",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reorder-list/"},"https://leetcode.com/problems/reorder-list/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def reorderList(self, head: Optional[ListNode]) -> None:\n        if not head:\n            return\n\n        # Leetcode 876: Middle of Linked List\n        left, right = head, head\n        while right and right.next:\n            left = left.next\n            right = right.next.next\n\n        # Leetcode 206: Reverse Linked List\n        pre, cur = None, left\n        while cur:\n            cur.next, pre, cur = pre, cur, cur.next\n\n        # Leetcode 21: Merge Two Sorted Linked Lists\n        left, right = head, pre\n        while right.next:\n            left.next, left = right, left.next\n            right.next, right = left, right.next\n")))}u.isMDXComponent=!0}}]);