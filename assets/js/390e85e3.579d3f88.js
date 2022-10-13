"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[56315],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8449:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"706. Design HashMap",sidebar_label:"706. Design HashMap",tags:["Leetcode Easy"]},s=void 0,c={unversionedId:"leetcode/501-1000/design_hashset",id:"leetcode/501-1000/design_hashset",title:"706. Design HashMap",description:"Python",source:"@site/docs/leetcode/501-1000/705_design_hashset.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/design_hashset",permalink:"/docs/leetcode/501-1000/design_hashset",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/705_design_hashset.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:705,frontMatter:{title:"706. Design HashMap",sidebar_label:"706. Design HashMap",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"704. Binary Search",permalink:"/docs/leetcode/501-1000/binary_search"},next:{title:"706. Design HashMap",permalink:"/docs/leetcode/501-1000/design_hashmap"}},p=[{value:"Python",id:"python",children:[{value:"Array as HashMap",id:"array-as-hashmap",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Space"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"construct"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"add"),(0,l.kt)("td",{parentName:"tr",align:null},"O(logN)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove"),(0,l.kt)("td",{parentName:"tr",align:null},"O(3logN)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contains"),(0,l.kt)("td",{parentName:"tr",align:null},"O(logN)"),(0,l.kt)("td",{parentName:"tr",align:null},"O(1)")))),(0,l.kt)("h3",{id:"array-as-hashmap"},"Array as HashMap"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class MyHashSet:\n    def __init__(self):\n        self.data = []\n\n    def add(self, key: int) -> None:\n        if key in self.data:\n            return\n        self.data.append(key)\n\n    def remove(self, key: int) -> None:\n        if key not in self.data:\n            return\n        self.data.pop(self.data.index(key))\n\n    def contains(self, key: int) -> bool:\n        return key in self.data\n")))}u.isMDXComponent=!0}}]);