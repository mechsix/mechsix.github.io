"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52692],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},97101:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],l={title:"82. Remove Duplicates from Sorted List II",sidebar_label:"82. Remove Duplicates from Sorted List II",tags:["Leetcode Medium","Linked List"]},a=void 0,u={unversionedId:"leetcode/1-500/remove_duplicates_from_sorted_list_ii",id:"leetcode/1-500/remove_duplicates_from_sorted_list_ii",title:"82. Remove Duplicates from Sorted List II",description:"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",source:"@site/docs/leetcode/1-500/82_remove_duplicates_from_sorted_list_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/remove_duplicates_from_sorted_list_ii",permalink:"/docs/leetcode/1-500/remove_duplicates_from_sorted_list_ii",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/82_remove_duplicates_from_sorted_list_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:82,frontMatter:{title:"82. Remove Duplicates from Sorted List II",sidebar_label:"82. Remove Duplicates from Sorted List II",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"80. Remove Duplicates from Sorted Array II",permalink:"/docs/leetcode/1-500/remove_duplicates_from_sorted_array_ii"},next:{title:"83. Remove Duplicates from Sorted List",permalink:"/docs/leetcode/1-500/remove_duplicates_from_sorted_linked_list"}},s=[{value:"Python",id:"python",children:[],level:2},{value:"Go",id:"go",children:[],level:2}],d={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/"},"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode(val=None, next=head)\n        pre, cur = dummy, head\n\n        while cur:\n            if cur.next and cur.val == cur.next.val:\n                # Move over all duplicates\n                while cur.next and cur.val == cur.next.val:\n                    cur = cur.next\n                pre.next = cur.next\n            else:\n                pre = pre.next\n\n            cur = cur.next\n\n        return dummy.next\n")),(0,i.kt)("h2",{id:"go"},"Go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func deleteDuplicates(head *ListNode) *ListNode {\n    dummy := new(ListNode)\n    dummy.Next = head\n\n    pre, cur := dummy, head\n\n    for cur != nil {\n        if cur.Next != nil && cur.Val == cur.Next.Val {\n            for cur.Next != nil && cur.Val == cur.Next.Val {\n                cur = cur.Next\n            }\n            pre.Next = cur.Next\n        } else {\n            pre = pre.Next\n        }\n        cur = cur.Next\n    }\n\n    return dummy.Next\n}\n")))}p.isMDXComponent=!0}}]);