"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[67869],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),a=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=a(e.components);return r.createElement(d.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=a(t),p=i,m=u["".concat(d,".").concat(p)]||u[p]||f[p]||l;return t?r.createElement(m,s(s({ref:n},c),{},{components:t})):r.createElement(m,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var a=2;a<l;a++)s[a]=t[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},88054:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return a}});var r=t(83117),i=(t(67294),t(3905));const l={title:"707. Design Linked List",sidebar_label:"707. Design Linked List",tags:["Leetcode Medium","Linked List"]},s=void 0,o={unversionedId:"leetcode/501-1000/design_linked_list",id:"leetcode/501-1000/design_linked_list",title:"707. Design Linked List",description:"https://leetcode.com/problems/design-linked-list/",source:"@site/docs/leetcode/501-1000/707_design_linked_list.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/design_linked_list",permalink:"/docs/leetcode/501-1000/design_linked_list",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/707_design_linked_list.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:707,frontMatter:{title:"707. Design Linked List",sidebar_label:"707. Design Linked List",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"706. Design HashMap",permalink:"/docs/leetcode/501-1000/design_hashmap"},next:{title:"712. Minimum ASCII Delete Sum for Two Strings",permalink:"/docs/leetcode/501-1000/minimum-ascii-delete-sum-for-two-strings"}},d={},a=[{value:"Python",id:"python",level:2}],c={toc:a};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/design-linked-list/"},"https://leetcode.com/problems/design-linked-list/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class ListNode:\n    def __init__(self, val, nxt=None, pre=None):\n        self.val = val\n        self.next = nxt\n        self.pre = pre\n\nclass MyLinkedList:\n    def __init__(self):\n        self.size = 0\n        self.head = ListNode(val=None)\n        self.tail = ListNode(val=None)\n        self.head.next = self.tail\n        self.tail.pre = self.head\n\n    def get(self, index: int) -> int:\n        if index < 0 or index >= self.size:\n            return -1\n\n        c = self.head\n        while c:\n            print(c.val, end=", ")\n            c = c.next\n        cur = self.head\n        for i in range(index+1):\n            cur = cur.next\n        return cur.val\n\n    def addAtHead(self, val: int) -> None:\n        pre, succ = self.head, self.head.next\n        new_node = ListNode(\n            val=val,\n            nxt=self.head.next,\n            pre=self.head\n        )\n\n        self.head.next.pre = new_node\n        self.head.next = new_node\n        self.size += 1\n\n    def addAtTail(self, val: int) -> None:\n        new_node = ListNode(\n            val=val,\n            nxt=self.tail,\n            pre=self.tail.pre\n        )\n        self.tail.pre.next = new_node\n        self.tail.pre = new_node\n        self.size += 1\n\n    def addAtIndex(self, index: int, val: int) -> None:\n        if index > self.size:\n            return\n\n        # To sure index not be native number\n        index = max(0, index)\n\n        cur = self.head\n        for _ in range(index):\n            cur = cur.next\n\n        new_node = ListNode(\n            val = val,\n            nxt=cur.next,\n            pre=cur\n        )\n        cur.next.pre = new_node\n        cur.next = new_node\n        self.size += 1\n\n    def deleteAtIndex(self, index: int) -> None:\n        if index < 0 or index >= self.size:\n            return\n\n        cur = self.head\n        for _ in range(index):\n            cur = cur.next\n        succ = cur.next.next\n\n        cur.next = succ\n        succ.pre = cur\n        self.size -= 1\n')))}u.isMDXComponent=!0}}]);