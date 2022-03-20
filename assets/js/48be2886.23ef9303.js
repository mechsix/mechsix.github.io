"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[726],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55408:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"706. Design HashMap",sidebar_label:"706. Design HashMap",tags:["Leetcode Easy"]},l=void 0,c={unversionedId:"leetcode/501-1000/design_hashmap",id:"leetcode/501-1000/design_hashmap",title:"706. Design HashMap",description:"https://leetcode.com/problems/design-hashmap/",source:"@site/docs/leetcode/501-1000/706_design_hashmap.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/design_hashmap",permalink:"/docs/leetcode/501-1000/design_hashmap",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/706_design_hashmap.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:706,frontMatter:{title:"706. Design HashMap",sidebar_label:"706. Design HashMap",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"704. Binary Search",permalink:"/docs/leetcode/501-1000/binary_search"},next:{title:"707. Design Linked List",permalink:"/docs/leetcode/501-1000/design_linked_list"}},p=[{value:"Python",id:"python",children:[{value:"Remainder Mapping into Array",id:"remainder-mapping-into-array",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/design-hashmap/"},"https://leetcode.com/problems/design-hashmap/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"remainder-mapping-into-array"},"Remainder Mapping into Array"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: Put,Get,Remove are all O(1)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(10^6)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyHashMap:\n    def __init__(self):\n        self.memory = [None]*(10**6)\n\n    def put(self, key: int, value: int) -> None:\n        self.memory[key % (10**6)] = value\n\n    def get(self, key: int) -> int:\n        result = self.memory[key % (10**6)]\n        return result if result is not None else -1\n\n    def remove(self, key: int) -> None:\n        self.memory[key % (10**6)] = None\n")))}d.isMDXComponent=!0}}]);