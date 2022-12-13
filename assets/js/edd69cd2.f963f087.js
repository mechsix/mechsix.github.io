"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[65693],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(83117),i=(n(67294),n(3905));const o={title:"70. Climbing Stairs",sidebar_label:"70. Climbing Stairs",tags:["Leetcode Easy","DP"]},c=void 0,l={unversionedId:"leetcode/1-500/climbing_stairs",id:"leetcode/1-500/climbing_stairs",title:"70. Climbing Stairs",description:"https://leetcode.com/problems/climbing-stairs",source:"@site/docs/leetcode/1-500/70_climbing_stairs.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/climbing_stairs",permalink:"/docs/leetcode/1-500/climbing_stairs",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/70_climbing_stairs.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:70,frontMatter:{title:"70. Climbing Stairs",sidebar_label:"70. Climbing Stairs",tags:["Leetcode Easy","DP"]},sidebar:"docSidebar",previous:{title:"69. Sqrt(x)",permalink:"/docs/leetcode/1-500/sqrt_x"},next:{title:"72. Edit Distance",permalink:"/docs/leetcode/1-500/edit_distance"}},a={},s=[{value:"Python",id:"python",level:2},{value:"Bottom-Up DP",id:"bottom-up-dp",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/climbing-stairs"},"https://leetcode.com/problems/climbing-stairs")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"bottom-up-dp"},"Bottom-Up DP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def __init__(self):\n        self.memory = dict()\n\n    def climbStairs(self, n: int) -> int:\n        if n in self.memory:\n            return self.memory[n]\n\n        if n <= 3:\n            return n\n\n        self.memory[n] = self.climbStairs(n-1) + self.climbStairs(n-2)\n\n        return self.memory[n]\n")))}p.isMDXComponent=!0}}]);