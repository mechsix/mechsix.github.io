"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[5693],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9534:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),c=["components"],a={title:"70. Climbing Stairs",sidebar_label:"70. Climbing Stairs",tags:["Leetcode Easy","DP"]},l=void 0,s={unversionedId:"leetcode/1-500/climbing_stairs",id:"leetcode/1-500/climbing_stairs",title:"70. Climbing Stairs",description:"Python",source:"@site/docs/leetcode/1-500/70_climbing_stairs.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/climbing_stairs",permalink:"/docs/leetcode/1-500/climbing_stairs",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/70_climbing_stairs.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:70,frontMatter:{title:"70. Climbing Stairs",sidebar_label:"70. Climbing Stairs",tags:["Leetcode Easy","DP"]},sidebar:"docSidebar",previous:{title:"67. Add Binary",permalink:"/docs/leetcode/1-500/add_bin"},next:{title:"88. Merge Sorted Array",permalink:"/docs/leetcode/1-500/merge_sorted_array"}},u=[{value:"Python",id:"python",children:[],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.memory = dict()\n\n    def climbStairs(self, n: int) -> int:\n        if n in self.memory:\n            return self.memory[n]\n        \n        if n <= 3:\n            return n\n\n        self.memory[n] = self.climbStairs(n-1) + self.climbStairs(n-2)\n\n        return self.memory[n]\n")))}p.isMDXComponent=!0}}]);