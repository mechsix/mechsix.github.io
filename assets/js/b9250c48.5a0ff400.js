"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[88898],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=a(r),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var a=2;a<o;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},70859:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),c=["components"],l={title:"92. Reverse Linked List II",slidebar_label:"92. Reverse Linked List II",tags:["Leetcode Medium","Linked List"]},s=void 0,a={unversionedId:"leetcode/1-500/reverse_linked_list_ii",id:"leetcode/1-500/reverse_linked_list_ii",title:"92. Reverse Linked List II",description:"https://leetcode.com/problems/reverse-linked-list-ii/",source:"@site/docs/leetcode/1-500/92_reverse_linked_list_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reverse_linked_list_ii",permalink:"/docs/leetcode/1-500/reverse_linked_list_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/92_reverse_linked_list_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:92,frontMatter:{title:"92. Reverse Linked List II",slidebar_label:"92. Reverse Linked List II",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"91. Decode Ways",permalink:"/docs/leetcode/1-500/decode_ways"},next:{title:"94. Binary Tree Inorder Traversal",permalink:"/docs/leetcode/1-500/binary_tree_inorder"}},u=[{value:"Python",id:"python",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-linked-list-ii/"},"https://leetcode.com/problems/reverse-linked-list-ii/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:\n        stack = []\n\n        dummy = ListNode(next=head)\n        cur = dummy\n\n        pre, tail = None, None\n        for i in range(right+1):\n            if i == left-1:\n                pre = cur\n            if i == right:\n                tail = cur.next\n            if i >= left and i <= right:\n                stack.append(cur)\n            cur = cur.next\n\n        cur = None\n        while stack:\n            cur = stack.pop()\n            pre.next = cur\n            pre = cur\n        cur.next = tail\n\n        return dummy.next\n")))}p.isMDXComponent=!0}}]);