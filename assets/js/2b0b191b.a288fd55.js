"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[29475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,l(l({ref:t},d),{},{components:n})):o.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={title:"142. Linked List Cycle II",slidebar_label:"142. Linked List Cycle II",tags:["Leetcode Medium","Linked List","Floyd's Algorithm","Two Pointer"]},l=void 0,a={unversionedId:"leetcode/1-500/linked_list_cycle_ii",id:"leetcode/1-500/linked_list_cycle_ii",title:"142. Linked List Cycle II",description:"https://leetcode.com/problems/linked-list-cycle-ii",source:"@site/docs/leetcode/1-500/142_linked_list_cycle_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/linked_list_cycle_ii",permalink:"/docs/leetcode/1-500/linked_list_cycle_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/142_linked_list_cycle_ii.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Floyd's Algorithm",permalink:"/docs/tags/floyds-algorithm"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:142,frontMatter:{title:"142. Linked List Cycle II",slidebar_label:"142. Linked List Cycle II",tags:["Leetcode Medium","Linked List","Floyd's Algorithm","Two Pointer"]},sidebar:"docSidebar",previous:{title:"141. Linked List Cycle",permalink:"/docs/leetcode/1-500/linked_list_cycle"},next:{title:"143. Reorder List",permalink:"/docs/leetcode/1-500/reorder_list"}},c={},s=[{value:"Python",id:"python",level:2},{value:"While Loop",id:"while-loop",level:3},{value:"Two Pointer",id:"two-pointer",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/linked-list-cycle-ii"},"https://leetcode.com/problems/linked-list-cycle-ii")),(0,r.kt)("h2",{id:"python"},"Python"),(0,r.kt)("h3",{id:"while-loop"},"While Loop"),(0,r.kt)("p",null,"Space O(N)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        memory = set()\n\n        node = head\n        n = 0\n\n        while node and id(node) not in memory:\n            memory.add(id(node))\n            node = node.next\n            n += 1\n\n        if not node:\n            return\n\n        return node\n")),(0,r.kt)("h3",{id:"two-pointer"},"Two Pointer"),(0,r.kt)("p",null,"Floyd's Tortoise and Hare Algorithm"),(0,r.kt)("p",null,"Solution from ",(0,r.kt)("a",{parentName:"p",href:"https://englishandcoding.pixnet.net/blog/post/31525831-leetcode-%E7%AD%86%E8%A8%98%EF%BC%8D142.-linked-list-cycle-ii"},"here")),(0,r.kt)("p",null,"Space O(1)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        if not head or not head.next:\n            return\n        first = True\n\n        slow, fast = head, head\n\n        while slow != fast or first:\n            first = False\n            if not fast or not fast.next:\n                return\n            slow = slow.next\n            fast = fast.next.next\n\n\n        slow = head\n        while slow != fast:\n            slow = slow.next\n            fast = fast.next\n        return fast\n")))}u.isMDXComponent=!0}}]);