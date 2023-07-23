"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[70901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"223. Rectangle Area",sidebar_label:"223. Rectangle Area",tags:["Leetcode Medium","Go"]},l=void 0,i={unversionedId:"leetcode/1-500/rectangle_area",id:"leetcode/1-500/rectangle_area",title:"223. Rectangle Area",description:"https://leetcode.com/problems/rectangle-area/",source:"@site/docs/leetcode/1-500/223_rectangle_area.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/rectangle_area",permalink:"/docs/leetcode/1-500/rectangle_area",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/223_rectangle_area.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:223,frontMatter:{title:"223. Rectangle Area",sidebar_label:"223. Rectangle Area",tags:["Leetcode Medium","Go"]},sidebar:"docSidebar",previous:{title:"222. Count Complete Tree Nodes",permalink:"/docs/leetcode/1-500/count_complete_bin_tree"},next:{title:"225. Implement Stack using Queues",permalink:"/docs/leetcode/1-500/implement_stack_with_queue"}},c={},p=[{value:"Python",id:"python",level:2},{value:"Go",id:"go",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/rectangle-area/"},"https://leetcode.com/problems/rectangle-area/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def computeArea(self, ax1: int, ay1: int, ax2: int, ay2: int, bx1: int, by1: int, bx2: int, by2: int) -> int:\n\n        overlap_x = min(ax2, bx2) - max(ax1, bx1)\n        overlap_y = min(ay2, by2) - max(ay1, by1)\n\n        overlap = 0\n        if overlap_x > 0 and overlap_y > 0:\n            overlap = overlap_x * overlap_y\n\n        return (ax2-ax1)*(ay2-ay1) + (bx2-bx1)*(by2-by1) - overlap\n")),(0,a.kt)("h2",{id:"go"},"Go"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func computeArea(ax1 int, ay1 int, ax2 int, ay2 int, bx1 int, by1 int, bx2 int, by2 int) int {\n    var xLeft, xRight, xTop, xBottom int\n\n    if (ax2 > bx2) { xRight = bx2 } else { xRight = ax2 }\n    if (ax1 > bx1) { xLeft = ax1 } else { xLeft = bx1 }\n    if (ay2 > by2) { xBottom = by2 } else { xBottom = ay2 }\n    if (ay1 > by1) { xTop = ay1 } else { xTop = by1 }\n\n    overlapX, overlapY := xRight-xLeft, xBottom-xTop\n\n    overlap := 0\n    if overlapX > 0 && overlapY > 0 {\n        overlap = overlapX * overlapY\n    }\n\n    areaA := (ax2-ax1) * (ay2-ay1)\n    areaB := (bx2-bx1) * (by2-by1)\n\n    return areaA + areaB - overlap\n}\n")))}m.isMDXComponent=!0}}]);