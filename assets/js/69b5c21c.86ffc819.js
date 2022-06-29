"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[2218],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=a(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<c;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72383:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return s}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],u={title:"406. Queue Reconstruction by Height",sidebar_label:"406. Queue Reconstruction by Height",tags:["Leetcode Medium","Greedy"]},l=void 0,a={unversionedId:"leetcode/1-500/queue_reconstruction_by_height",id:"leetcode/1-500/queue_reconstruction_by_height",title:"406. Queue Reconstruction by Height",description:"https://leetcode.com/problems/queue-reconstruction-by-height/solution/",source:"@site/docs/leetcode/1-500/406_queue_reconstruction_by_height.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/queue_reconstruction_by_height",permalink:"/docs/leetcode/1-500/queue_reconstruction_by_height",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/406_queue_reconstruction_by_height.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Greedy",permalink:"/docs/tags/greedy"}],version:"current",sidebarPosition:406,frontMatter:{title:"406. Queue Reconstruction by Height",sidebar_label:"406. Queue Reconstruction by Height",tags:["Leetcode Medium","Greedy"]},sidebar:"docSidebar",previous:{title:"404. Sum of Left Leaf",permalink:"/docs/leetcode/1-500/left_leaf_sum"},next:{title:"409. Longest Palindrome",permalink:"/docs/leetcode/1-500/longest_palindrome"}},s=[{value:"Python",id:"python",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/queue-reconstruction-by-height/solution/"},"https://leetcode.com/problems/queue-reconstruction-by-height/solution/")),(0,c.kt)("h2",{id:"python"},"Python"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:\n        people.sort(key=lambda p: (-p[0], p[1]))\n\n        queue = []\n        for p in people:\n            queue.insert(p[1], p)\n        return queue\n")))}d.isMDXComponent=!0}}]);