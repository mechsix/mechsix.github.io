"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9257],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13690:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"1721. Swapping Nodes in a Linked List",sidebar_label:"1721. Swapping Nodes in a Linked List",tags:["Leetcode Medium","Linked List"]},c=void 0,s={unversionedId:"leetcode/1501-2000/swap_nodes_in_linked_list",id:"leetcode/1501-2000/swap_nodes_in_linked_list",title:"1721. Swapping Nodes in a Linked List",description:"https://mech.run/docs/leetcode/1-500/swapnodesin_pairs",source:"@site/docs/leetcode/1501-2000/1721_swap_nodes_in_linked_list.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/swap_nodes_in_linked_list",permalink:"/docs/leetcode/1501-2000/swap_nodes_in_linked_list",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1721_swap_nodes_in_linked_list.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:1721,frontMatter:{title:"1721. Swapping Nodes in a Linked List",sidebar_label:"1721. Swapping Nodes in a Linked List",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"1706. Where Will the Ball Fall",permalink:"/docs/leetcode/1501-2000/where_will_the_ball_fall"},next:{title:"1770. Maximum Score from Performing Multiplication Operations",permalink:"/docs/leetcode/1501-2000/max_score_from_performing_multiplication_operations"}},p=[{value:"Python",id:"python",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mech.run/docs/leetcode/1-500/swap_nodes_in_pairs"},"https://mech.run/docs/leetcode/1-500/swap_nodes_in_pairs")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N+K)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:\n        dummy = ListNode(next=head)\n\n        # Find left position\n        lpre, lcur = dummy, head\n        for i in range(k-1):\n            lpre = lpre.next\n            lcur = lcur.next\n\n        # Build the stack get ready to reverse travel\n        stack = []\n        cur = dummy\n        while cur:\n            stack.append(cur)\n            cur = cur.next\n\n        # Find right position from stack\n        rcur = stack[-1]\n        for i in range(k):\n            rcur = stack.pop()\n        rpre = stack.pop()\n\n        # Swap the left and right position\n        lpre.next, rpre.next = rcur, lcur\n        lcur.next, rcur.next = rcur.next, lcur.next\n\n        return dummy.next\n")))}d.isMDXComponent=!0}}]);