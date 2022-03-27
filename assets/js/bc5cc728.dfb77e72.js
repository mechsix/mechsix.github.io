"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[933],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35212:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(87462),i=t(63366),l=(t(67294),t(3905)),o=["components"],a={title:"234. Palindrome Linked List",sidebar_label:"234. Palindrome Linked List",tags:["Leetcode Easy","Linked List","Stack"]},c=void 0,s={unversionedId:"leetcode/1-500/palindrome_linked_list",id:"leetcode/1-500/palindrome_linked_list",title:"234. Palindrome Linked List",description:"https://leetcode.com/problems/palindrome-linked-list/",source:"@site/docs/leetcode/1-500/234_palindrome_linked_list.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/palindrome_linked_list",permalink:"/docs/leetcode/1-500/palindrome_linked_list",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/234_palindrome_linked_list.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Stack",permalink:"/docs/tags/stack"}],version:"current",sidebarPosition:234,frontMatter:{title:"234. Palindrome Linked List",sidebar_label:"234. Palindrome Linked List",tags:["Leetcode Easy","Linked List","Stack"]},sidebar:"docSidebar",previous:{title:"232. Implement Queue using Stacks",permalink:"/docs/leetcode/1-500/implement_queue_using_stacks"},next:{title:"235. Lowest Common Ancestor of a Binary Search Tree",permalink:"/docs/leetcode/1-500/lowest_common_ancestor_of_bst"}},p=[{value:"Python",id:"python",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/palindrome-linked-list/"},"https://leetcode.com/problems/palindrome-linked-list/")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,l.kt)("li",{parentName:"ul"},"Space: O(1)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isPalindrome(self, head: Optional[ListNode]) -> bool:\n        length = 0\n        cur = head\n        while cur:\n            length += 1\n            cur = cur.next\n\n        stack = []\n        is_even = length % 2 == 0\n        middle = length // 2 if is_even else length//2 + 1\n        pos = 1\n        cur = head\n\n        while cur:\n            if is_even:\n                if pos <= middle:\n                    stack.append(cur.val)\n                else:\n                    if cur.val != stack.pop():\n                        return False\n            else:\n                if pos < middle:\n                    stack.append(cur.val)\n                elif pos > middle:\n                    if cur.val != stack.pop():\n                        return False\n                else:\n                    # Do nothing at the middle\n                    pass\n\n            cur = cur.next\n            pos += 1\n\n        return True\n")),(0,l.kt)("h2",{id:"javascript"},"Javascript"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"var isPalindrome = function(head) {\n    if (!head.next) return true;\n    \n    const array = [];\n    let pointer = head;    \n    while (pointer !== null) {\n        array.push(pointer.val);\n        pointer = pointer.next;        \n    }\n    \n    let l = 0;\n    let r = array.length - 1;\n    while (l < r) {\n        if (array[l] !== array[r]) return false;\n        l++;\n        r--;\n    }\n    return true;\n};\n")))}u.isMDXComponent=!0}}]);