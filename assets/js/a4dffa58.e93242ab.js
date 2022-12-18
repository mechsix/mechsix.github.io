"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[38711],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const i={title:"148. Sort List",sidebar_label:"148. Sort List",tags:["Leetcode Medium","Linked List","Rust"]},l=void 0,a={unversionedId:"leetcode/1-500/sort_list",id:"leetcode/1-500/sort_list",title:"148. Sort List",description:"https://leetcode.com/problems/sort-list/",source:"@site/docs/leetcode/1-500/148_sort_list.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/sort_list",permalink:"/docs/leetcode/1-500/sort_list",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/148_sort_list.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:148,frontMatter:{title:"148. Sort List",sidebar_label:"148. Sort List",tags:["Leetcode Medium","Linked List","Rust"]},sidebar:"docSidebar",previous:{title:"147. Insertion Sort List",permalink:"/docs/leetcode/1-500/insertion_sort_list"},next:{title:"151. Reverse Words in a String",permalink:"/docs/leetcode/1-500/reverse_words_in_string"}},s={},c=[{value:"Python",id:"python",level:2},{value:"Convert to Array than build Linked List back",id:"convert-to-array-than-build-linked-list-back",level:3},{value:"Rust",id:"rust",level:3},{value:"Convert to Array than build Linked List back",id:"convert-to-array-than-build-linked-list-back-1",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sort-list/"},"https://leetcode.com/problems/sort-list/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"convert-to-array-than-build-linked-list-back"},"Convert to Array than build Linked List back"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(N)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(N)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:\n        elements = []\n\n        cur = head\n        while cur:\n            elements.append(cur.val)\n            cur = cur.next\n        elements.sort(reverse=True)\n\n        new_head = ListNode()\n        cur = new_head\n        while elements:\n            elm = elements.pop()\n            cur.next = ListNode(val=elm)\n            cur = cur.next\n\n        return new_head.next\n")),(0,o.kt)("h3",{id:"rust"},"Rust"),(0,o.kt)("h3",{id:"convert-to-array-than-build-linked-list-back-1"},"Convert to Array than build Linked List back"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl Solution {\n    pub fn sort_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {\n        let mut vec: Vec<i32> = vec![];\n        while let Some(mut node) = head {\n            vec.push(node.val);\n            head = node.next;\n        }\n        vec.sort();\n        let mut next = None;\n        while let Some(val) = vec.pop() {\n            next = Some(Box::new(ListNode{next, val}))\n        }\n        next\n    }\n}\n")))}d.isMDXComponent=!0}}]);