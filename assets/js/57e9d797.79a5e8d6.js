"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[94670],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36711:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={title:"160. Intersection of Two Linked Lists",sidebar_label:"160. Intersection of Two Linked Lists",tags:["Leetcode Easy","Linked List","Two Pointer","Floyd's Algorithm"]},s=void 0,c={unversionedId:"leetcode/1-500/intersection_two_linked_lists",id:"leetcode/1-500/intersection_two_linked_lists",title:"160. Intersection of Two Linked Lists",description:"https://leetcode.com/problems/intersection-of-two-linked-lists",source:"@site/docs/leetcode/1-500/160_intersection_two_linked_lists.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/intersection_two_linked_lists",permalink:"/docs/leetcode/1-500/intersection_two_linked_lists",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/160_intersection_two_linked_lists.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"},{label:"Floyd's Algorithm",permalink:"/docs/tags/floyds-algorithm"}],version:"current",sidebarPosition:160,frontMatter:{title:"160. Intersection of Two Linked Lists",sidebar_label:"160. Intersection of Two Linked Lists",tags:["Leetcode Easy","Linked List","Two Pointer","Floyd's Algorithm"]},sidebar:"docSidebar",previous:{title:"155. Min Stack",permalink:"/docs/leetcode/1-500/min_stack"},next:{title:"165. Compare Version Numbers",permalink:"/docs/leetcode/1-500/compare_version_numbers"}},u=[{value:"Python",id:"python",children:[{value:"Remember A nodes in hash table",id:"remember-a-nodes-in-hash-table",children:[],level:3},{value:"Two Pointer",id:"two-pointer",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/intersection-of-two-linked-lists"},"https://leetcode.com/problems/intersection-of-two-linked-lists")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"remember-a-nodes-in-hash-table"},"Remember A nodes in hash table"),(0,i.kt)("p",null,"Time: O(a+b)"),(0,i.kt)("p",null,"Space: O(a)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:\n        cur_a = headA\n        a_nodes = set()\n        while cur_a:\n            a_nodes.add(cur_a)\n            cur_a = cur_a.next\n\n        cur_b = headB\n        while cur_b:\n            if cur_b in a_nodes:\n                return cur_b\n            cur_b = cur_b.next\n\n        return None\n")),(0,i.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,i.kt)("p",null,"Floyd's Tortoise and Hare Algorithm\u7684\u8b8a\u5f62"),(0,i.kt)("p",null,"\u5236\u5728\u5169\u500bLinked List\u4e2d\u7522\u751floop\uff0c\u5c07A\u5c3e\u63a5\u5230B\u982d\uff1bB\u5c3e\u63a5\u5230A\u982d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u82e5A\u8ddfB\u4e0d\u4e00\u6a23\u9577\uff0c\u7528\u9f9c\u5154\u8cfd\u8dd1\u7b97\u6cd5\u627e\u5230\u9023\u7d50\u9ede"),(0,i.kt)("li",{parentName:"ul"},"\u82e5A\u8ddfB\u4e00\u6a23\u9577\uff0c\u6703return\u5728\u7b2c\u4e00\u6b21\u91cd\u758a\u9ede"),(0,i.kt)("li",{parentName:"ul"},"\u82e5A\u8ddfB\u6c92\u6709\u9023\u7d50\uff0c\u6703\u91cd\u758a\u5728None\uff0c\u4e5f\u7b26\u5408\u984c\u610f")),(0,i.kt)("p",null,"Time: O(a+b)"),(0,i.kt)("p",null,"Space: O(1)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:\n        cur_a, cur_b = headA, headB\n        while cur_a != cur_b:\n            cur_a = cur_a.next if cur_a else headB\n            cur_b = cur_b.next if cur_b else headA\n        return cur_a\n")))}p.isMDXComponent=!0}}]);