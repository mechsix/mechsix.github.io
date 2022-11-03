"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[77606],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=l,y=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94806:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),i=["components"],a={title:"141. Linked List Cycle",slidebar_label:"141. Linked List Cycle",tags:["Leetcode Easy","Linked List","Floyd's Algorithm","Two Pointer"]},c=void 0,s={unversionedId:"leetcode/1-500/linked_list_cycle",id:"leetcode/1-500/linked_list_cycle",title:"141. Linked List Cycle",description:"https://leetcode.com/problems/linked-list-cycle",source:"@site/docs/leetcode/1-500/141_linked_list_cycle.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/linked_list_cycle",permalink:"/docs/leetcode/1-500/linked_list_cycle",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/141_linked_list_cycle.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Floyd's Algorithm",permalink:"/docs/tags/floyds-algorithm"},{label:"Two Pointer",permalink:"/docs/tags/two-pointer"}],version:"current",sidebarPosition:141,frontMatter:{title:"141. Linked List Cycle",slidebar_label:"141. Linked List Cycle",tags:["Leetcode Easy","Linked List","Floyd's Algorithm","Two Pointer"]},sidebar:"docSidebar",previous:{title:"140. Word Break II",permalink:"/docs/leetcode/1-500/word_break_ii"},next:{title:"142. Linked List Cycle II",permalink:"/docs/leetcode/1-500/linked_list_cycle_ii"}},d=[{value:"Python",id:"python",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/linked-list-cycle"},"https://leetcode.com/problems/linked-list-cycle")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Floyd's Tortoise and Hare Algorithm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def hasCycle(self, head: Optional[ListNode]) -> bool:\n        slow, fast = head, head\n        is_first = True\n\n        while is_first or slow != fast:\n            is_first = False\n\n            if not fast or not fast.next:\n                return False\n            slow = slow.next\n            fast = fast.next.next\n\n        return True\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var hasCycle = function(head) {  \n    var slow = head;\n    var fast = head;\n  \n    while (fast !== null && fast.next !== null) {      \n        slow = slow.next;\n        fast = fast.next.next;\n      \n        if (slow === fast) return true;              \n    }\n    return false;\n};\n")))}p.isMDXComponent=!0}}]);