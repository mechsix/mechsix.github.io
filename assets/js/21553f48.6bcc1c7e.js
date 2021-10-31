"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[567],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=a(n),f=l,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var a=2;a<o;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},57252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return s},default:function(){return p}});var r=n(87462),l=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Flatten a Multilevel Doubly Linked List",sidebar_label:"430. Flatten Doubly Linked List"},u=void 0,a={unversionedId:"leetcode/flatten_multilevel_doubly_linked_list",id:"leetcode/flatten_multilevel_doubly_linked_list",isDocsHomePage:!1,title:"Flatten a Multilevel Doubly Linked List",description:"Python",source:"@site/docs/leetcode/430_flatten_multilevel_doubly_linked_list.md",sourceDirName:"leetcode",slug:"/leetcode/flatten_multilevel_doubly_linked_list",permalink:"/docs/leetcode/flatten_multilevel_doubly_linked_list",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/430_flatten_multilevel_doubly_linked_list.md",tags:[],version:"current",sidebarPosition:430,frontMatter:{title:"Flatten a Multilevel Doubly Linked List",sidebar_label:"430. Flatten Doubly Linked List"},sidebar:"tutorialSidebar",previous:{title:"1. Two Sum",permalink:"/docs/leetcode/two_sum"},next:{title:"useState & useMemo",permalink:"/docs/react/use-state"}},s=[{value:"Python",id:"python",children:[]}],d={toc:s};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def flatten(self, head: 'Node') -> 'Node':\n    cur, stack = head, []\n    while cur:\n        if cur.child:\n            if cur.next:\n                stack.append(cur.next)\n            cur.child.prev, cur.next, cur.child = cur, cur.child, None\n        elif not cur.next and stack:\n            cur.next, cur.next.prev = stack.pop(), cur\n        cur = cur.next\n    return head\n")))}p.isMDXComponent=!0}}]);