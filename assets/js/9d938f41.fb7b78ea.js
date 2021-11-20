"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[457],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),a=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=a(n),f=o,p=m["".concat(u,".").concat(f)]||m[f]||d[f]||i;return n?r.createElement(p,l(l({ref:t},s),{},{components:n})):r.createElement(p,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var a=2;a<i;a++)l[a]=n[a];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return s},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],c={title:"19. Remove Nth Node From End of List",sidebar_label:"19. Remove Nth Node From End of List"},u=void 0,a={unversionedId:"leetcode/link_list/remove_nth_from_eof_linked_list",id:"leetcode/link_list/remove_nth_from_eof_linked_list",isDocsHomePage:!1,title:"19. Remove Nth Node From End of List",description:"Python",source:"@site/docs/leetcode/link_list/19_remove_nth_from_eof_linked_list.md",sourceDirName:"leetcode/link_list",slug:"/leetcode/link_list/remove_nth_from_eof_linked_list",permalink:"/docs/leetcode/link_list/remove_nth_from_eof_linked_list",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/link_list/19_remove_nth_from_eof_linked_list.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"19. Remove Nth Node From End of List",sidebar_label:"19. Remove Nth Node From End of List"},sidebar:"tutorialSidebar",previous:{title:"1413. Mini Value to Possitive Sum",permalink:"/docs/leetcode/min_value_get_positive_sum"},next:{title:"21. Merge Two Sorted Lists",permalink:"/docs/leetcode/link_list/merge_sorted_list"}},s=[{value:"Python",id:"python",children:[]}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:\n        dummy = ListNode(val=-1, next=head)\n        cur_1 = dummy\n        cur_2 = dummy\n\n        for i in range(0, n+1):\n            cur_1 = cur_1.next\n\n        while cur_1 is not None:\n            cur_1 = cur_1.next\n            cur_2 = cur_2.next\n\n        cur_2.next = cur_2.next.next\n        return dummy.next\n")))}m.isMDXComponent=!0}}]);