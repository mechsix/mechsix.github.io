"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[71107],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=p;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16704:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={title:"876. Middle of the Linked List",sidebar_label:"876. Middle of the Linked List",tags:["Leetcode Easy","Linked List"]},d=void 0,c={unversionedId:"leetcode/501-1000/middle_of_linked_list",id:"leetcode/501-1000/middle_of_linked_list",title:"876. Middle of the Linked List",description:"Python",source:"@site/docs/leetcode/501-1000/876_middle_of_linked_list.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/middle_of_linked_list",permalink:"/docs/leetcode/501-1000/middle_of_linked_list",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/876_middle_of_linked_list.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:876,frontMatter:{title:"876. Middle of the Linked List",sidebar_label:"876. Middle of the Linked List",tags:["Leetcode Easy","Linked List"]},sidebar:"docSidebar",previous:{title:"875. Koko Eating Bananas",permalink:"/docs/leetcode/501-1000/koko_eating_bananas"},next:{title:"878. Nth Magical Number",permalink:"/docs/leetcode/501-1000/nth_magical_num"}},s=[{value:"Python",id:"python",children:[{value:"Get length and travel to middle",id:"get-length-and-travel-to-middle",children:[],level:3},{value:"One Pass Through",id:"one-pass-through",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"get-length-and-travel-to-middle"},"Get length and travel to middle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import math\n\n\nclass Solution:\n    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        length = 0\n        cur = head\n        while cur:\n            length += 1\n            cur = cur.next\n\n        target = head\n        for i in range(math.ceil(length/2) if length % 2 == 0 else math.floor(length/2)):\n            target = target.next\n\n        return target\n")),(0,o.kt)("h3",{id:"one-pass-through"},"One Pass Through"),(0,o.kt)("p",null,"(This is be used in ",(0,o.kt)("a",{parentName:"p",href:"/docs/leetcode/1-500/reorder_list"},"143. Reorder List"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        left, right = head, head\n        while right and right.next:\n            left = left.next\n            right = right.next.next\n        return left\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var middleNode = function(head) {\n  let slow = head;\n  let fast = head;\n  while (fast !== null && fast.next !==null) {\n    slow = slow.next;\n    fast = fast.next.next;\n  }\n  return slow;\n};\n")))}p.isMDXComponent=!0}}]);