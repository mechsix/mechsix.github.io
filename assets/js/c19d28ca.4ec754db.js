"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[99538],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92841:function(e,t,r){r.r(t),r.d(t,{assets:function(){return a},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var n=r(83117),o=(r(67294),r(3905));const s={title:"21. Merge Two Sorted Lists",sidebar_label:"21. Merge Two Sorted Lists",tags:["Linked List","Leetcode Easy"]},i=void 0,l={unversionedId:"leetcode/1-500/merge_sorted_list",id:"leetcode/1-500/merge_sorted_list",title:"21. Merge Two Sorted Lists",description:"https://leetcode.com/problems/merge-two-sorted-lists",source:"@site/docs/leetcode/1-500/21_merge_sorted_list.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/merge_sorted_list",permalink:"/docs/leetcode/1-500/merge_sorted_list",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/21_merge_sorted_list.md",tags:[{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:21,frontMatter:{title:"21. Merge Two Sorted Lists",sidebar_label:"21. Merge Two Sorted Lists",tags:["Linked List","Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"20. Valid Parentheses",permalink:"/docs/leetcode/1-500/valid_parentheses"},next:{title:"22. Generate Parentheses",permalink:"/docs/leetcode/1-500/generate_parenetheses"}},a={},c=[{value:"Python",id:"python",level:2},{value:"Javascript",id:"javascript",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/merge-two-sorted-lists"},"https://leetcode.com/problems/merge-two-sorted-lists")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"(This is be used in ",(0,o.kt)("a",{parentName:"p",href:"/docs/leetcode/1-500/reorder_list"},"143. Reorder List"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n        cur1, cur2 = l1, l2\n        head = ListNode(val=-1)\n        current = head\n\n        while(cur1 and cur2):\n            if cur1.val > cur2.val:\n                current.next = cur2\n                cur2 = cur2.next\n            else:\n                current.next = cur1\n                cur1 = cur1.next\n            current = current.next\n\n        if cur1 is not None:\n            current.next = cur1\n\n        if cur2 is not None:\n            current.next = cur2\n\n        return head.next\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"}," var mergeTwoLists = function(list1, list2) {\n  let head = new ListNode();\n  let start = head;\n  while (list1 !== null && list2 !== null) {\n    if (list1.val < list2.val) {\n      start.next = list1;\n      list1 = list1.next;\n    } else {\n      start.next = list2;\n      list2 = list2.next;\n    }\n    start = start.next;\n  }\n  start.next = list1 === null ? list2 : list1;\n  return head.next;\n};\n\n")))}d.isMDXComponent=!0}}]);