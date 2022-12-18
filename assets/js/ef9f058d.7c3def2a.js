"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[71740],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const i={title:"24. Swap Nodes in Pairs",sidebar_label:"24. Swap Nodes in Pairs",tags:["Leetcode Medium","Linked List","Go"]},a=void 0,s={unversionedId:"leetcode/1-500/swap_nodes_in_pairs",id:"leetcode/1-500/swap_nodes_in_pairs",title:"24. Swap Nodes in Pairs",description:"https://leetcode.com/problems/swap-nodes-in-pairs",source:"@site/docs/leetcode/1-500/24_swap_nodes_in_pairs.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/swap_nodes_in_pairs",permalink:"/docs/leetcode/1-500/swap_nodes_in_pairs",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/24_swap_nodes_in_pairs.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:24,frontMatter:{title:"24. Swap Nodes in Pairs",sidebar_label:"24. Swap Nodes in Pairs",tags:["Leetcode Medium","Linked List","Go"]},sidebar:"docSidebar",previous:{title:"23. Merge k Sorted Lists",permalink:"/docs/leetcode/1-500/merge_k_sorted_lists"},next:{title:"25. Reverse Nodes in k-Group",permalink:"/docs/leetcode/1-500/reverse_nodes_in_k_group"}},l={},c=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/swap-nodes-in-pairs"},"https://leetcode.com/problems/swap-nodes-in-pairs")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First Try")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head:\n            return\n\n        cur = head\n        dummy_head = ListNode(val=None, next=head)\n        pre = dummy_head\n        while cur and cur.next:\n            next_cur = cur.next.next\n            new_left = self._swap(cur, cur.next)\n            pre.next = new_left\n            pre = new_left.next\n            cur = next_cur\n\n        return dummy_head.next\n\n    def _swap(self, left, right):\n        if not right:\n            return left\n        left.next, right.next = right.next, left\n        return right\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Second Try, more clear")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head or not head.next:\n            return head\n\n        left = head\n        right = head.next\n\n        left.next = self.swapPairs(right.next)\n        right.next = left\n\n        return right\n")),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func swapPairs(head *ListNode) *ListNode {\n    if (head == nil || head.Next == nil) {\n        return head\n    }\n\n    left := head\n    right := head.Next\n\n    left.Next = swapPairs(right.Next)\n    right.Next = left\n\n    return right\n}\n")))}p.isMDXComponent=!0}}]);