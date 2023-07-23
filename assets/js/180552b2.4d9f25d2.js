"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[80208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,f=p["".concat(a,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var a in t)hasOwnProperty.call(t,a)&&(d[a]=t[a]);d.originalType=e,d[p]="string"==typeof e?e:o,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"2095. Delete the Middle Node of a Linked List",sidebar_label:"2095. Delete the Middle Node of a Linked List",tags:["Leetcode Medium","Linked List"]},l=void 0,d={unversionedId:"leetcode/2000/delete_the_middle_of_linked_list",id:"leetcode/2000/delete_the_middle_of_linked_list",title:"2095. Delete the Middle Node of a Linked List",description:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/",source:"@site/docs/leetcode/2000/2095_delete_the_middle_of_linked_list.md",sourceDirName:"leetcode/2000",slug:"/leetcode/2000/delete_the_middle_of_linked_list",permalink:"/docs/leetcode/2000/delete_the_middle_of_linked_list",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/2000/2095_delete_the_middle_of_linked_list.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:2095,frontMatter:{title:"2095. Delete the Middle Node of a Linked List",sidebar_label:"2095. Delete the Middle Node of a Linked List",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"2007. Find Original Array From Doubled Array",permalink:"/docs/leetcode/1501-2000/find_original_array_from_doubled_array"},next:{title:"2131. Longest Palindrome by Concatenating Two Letter Words",permalink:"/docs/leetcode/2000/longest_palindrome_by_concatenating_two_letter_words"}},a={},s=[{value:"Python",id:"python",level:2}],c={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/"},"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        dummy = ListNode(next=head)\n        length = 1\n\n        slow, fast = dummy, head\n\n        while fast.next:\n            length += 1\n            fast = fast.next\n            if length % 2 == 0:\n                slow = slow.next\n\n        slow.next = slow.next.next\n\n        return dummy.next\n")))}m.isMDXComponent=!0}}]);