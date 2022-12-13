"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[32259],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33026:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const i={title:"25. Reverse Nodes in k-Group",sidebar_label:"25. Reverse Nodes in k-Group",tags:["Leetcode Hard","Linked List","Stack"]},a=void 0,c={unversionedId:"leetcode/1-500/reverse_nodes_in_k_group",id:"leetcode/1-500/reverse_nodes_in_k_group",title:"25. Reverse Nodes in k-Group",description:"https://leetcode.com/problems/reverse-nodes-in-k-group/",source:"@site/docs/leetcode/1-500/25_reverse_nodes_in_k_group.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/reverse_nodes_in_k_group",permalink:"/docs/leetcode/1-500/reverse_nodes_in_k_group",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/25_reverse_nodes_in_k_group.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Stack",permalink:"/docs/tags/stack"}],version:"current",sidebarPosition:25,frontMatter:{title:"25. Reverse Nodes in k-Group",sidebar_label:"25. Reverse Nodes in k-Group",tags:["Leetcode Hard","Linked List","Stack"]},sidebar:"docSidebar",previous:{title:"24. Swap Nodes in Pairs",permalink:"/docs/leetcode/1-500/swap_nodes_in_pairs"},next:{title:"26. Remove Duplicates from Sorted Array",permalink:"/docs/leetcode/1-500/rm_duplicate_from_sorted_array"}},s={},l=[{value:"Python",id:"python",level:2},{value:"Stack and detect length",id:"stack-and-detect-length",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/reverse-nodes-in-k-group/"},"https://leetcode.com/problems/reverse-nodes-in-k-group/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"stack-and-detect-length"},"Stack and detect length"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N+k)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(k)  # Used on the stack")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class Solution:\n    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        if k < 2:\n            # If k == 1, nothing to be changed\n            return head\n\n        stack = []\n        dummy = ListNode(next=head)\n\n        # gpre stands for group pervious pointer\n        gpre, cur = dummy, head\n\n        while cur:\n            stack.append(cur)\n\n            if len(stack) % k == 0:\n                # Nodes in stack is ready to be reversed\n                origin_next = cur.next\n                print("Reversing {} -> {} -> {}:".format(\n                    gpre.val,\n                    [node.val for node in stack],\n                    cur.next.val if cur.next else None\n                ))\n\n                # Dummy head of the reversing part\n                rhead = ListNode()\n                rcur = rhead\n                while stack:\n                    rcur.next = stack.pop()\n                    rcur = rcur.next\n                    rcur.next = None # To prevent loop, add back after while\n\n                # The rcur now point to the new end of the reversed linked list\n                # Maintain the pointers\n                rcur.next = origin_next\n                gpre.next = rhead.next\n                gpre = rcur\n                cur = rcur.next\n            else:\n                cur = cur.next\n\n        return dummy.next\n')))}d.isMDXComponent=!0}}]);