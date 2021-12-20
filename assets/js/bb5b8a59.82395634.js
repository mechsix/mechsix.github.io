"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[4730],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=a(r),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},49054:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],l={title:"21. Merge Two Sorted Lists",sidebar_label:"21. Merge Two Sorted Lists",tags:["Linked List","Leetcode Easy"]},s=void 0,a={unversionedId:"leetcode/merge_sorted_list",id:"leetcode/merge_sorted_list",title:"21. Merge Two Sorted Lists",description:"Python",source:"@site/docs/leetcode/21_merge_sorted_list.md",sourceDirName:"leetcode",slug:"/leetcode/merge_sorted_list",permalink:"/docs/leetcode/merge_sorted_list",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/21_merge_sorted_list.md",tags:[{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:21,frontMatter:{title:"21. Merge Two Sorted Lists",sidebar_label:"21. Merge Two Sorted Lists",tags:["Linked List","Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"19. Remove Nth Node From End of List",permalink:"/docs/leetcode/remove_nth_from_eof_linked_list"},next:{title:"27. Remove Element",permalink:"/docs/leetcode/remove_element"}},u=[{value:"Python",id:"python",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        cur1, cur2 = l1, l2\n        head = ListNode(val=-1)\n        current = head\n\n        while(cur1 and cur2):\n            if cur1.val > cur2.val:\n                current.next = cur2\n                cur2 = cur2.next\n            else:\n                current.next = cur1\n                cur1 = cur1.next\n            current = current.next\n\n        if cur1 is not None:\n            current.next = cur1\n\n        if cur2 is not None:\n            current.next = cur2\n\n        return head.next\n")))}p.isMDXComponent=!0}}]);