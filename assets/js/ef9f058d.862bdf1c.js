"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1740],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82951:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"24. Swap Nodes in Pairs",sidebar_label:"24. Swap Nodes in Pairs",tags:["Linked List","Leetcode Medium"]},s=void 0,l={unversionedId:"leetcode/1-500/swap_nodes_in_pairs",id:"leetcode/1-500/swap_nodes_in_pairs",title:"24. Swap Nodes in Pairs",description:"Python",source:"@site/docs/leetcode/1-500/24_swap_nodes_in_pairs.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/swap_nodes_in_pairs",permalink:"/docs/leetcode/1-500/swap_nodes_in_pairs",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/24_swap_nodes_in_pairs.md",tags:[{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"}],version:"current",sidebarPosition:24,frontMatter:{title:"24. Swap Nodes in Pairs",sidebar_label:"24. Swap Nodes in Pairs",tags:["Linked List","Leetcode Medium"]},sidebar:"docSidebar",previous:{title:"21. Merge Two Sorted Lists",permalink:"/docs/leetcode/1-500/merge_sorted_list"},next:{title:"26. Remove Duplicates from Sorted Array",permalink:"/docs/leetcode/1-500/rm_duplicate_from_sorted_array"}},u=[{value:"Python",id:"python",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head:\n            return\n\n        cur = head\n        dummy_head = ListNode(val=None, next=head)\n        pre = dummy_head\n        while cur and cur.next:\n            next_cur = cur.next.next            \n            new_left = self._swap(cur, cur.next)\n            pre.next = new_left\n            pre = new_left.next\n            cur = next_cur\n            \n        return dummy_head.next\n    \n    def _swap(self, left, right):\n        if not right:\n            return left\n        left.next, right.next = right.next, left\n        return right\n")))}p.isMDXComponent=!0}}]);