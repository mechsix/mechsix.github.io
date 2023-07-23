"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[65281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"118. Pascal's Triangle",sidebar_label:"118. Pascal's Triangle",tags:["Leetcode Easy"]},o=void 0,i={unversionedId:"leetcode/1-500/pascal_triangle",id:"leetcode/1-500/pascal_triangle",title:"118. Pascal's Triangle",description:"https://leetcode.com/problems/pascals-triangle",source:"@site/docs/leetcode/1-500/118_pascal_triangle.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/pascal_triangle",permalink:"/docs/leetcode/1-500/pascal_triangle",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/118_pascal_triangle.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:118,frontMatter:{title:"118. Pascal's Triangle",sidebar_label:"118. Pascal's Triangle",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"117. Populating Next Right Pointers in Each Node II",permalink:"/docs/leetcode/1-500/link_next_right_in_binary_tree_nodes_ii"},next:{title:"119. Pascal's Triangle II",permalink:"/docs/leetcode/1-500/pascal_triangle_II"}},c={},s=[{value:"Python",id:"python",level:2},{value:"Recursive",id:"recursive",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/pascals-triangle"},"https://leetcode.com/problems/pascals-triangle")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("h3",{id:"recursive"},"Recursive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def generate(self, numRows: int) -> List[List[int]]:\n        if numRows == 1:\n            return [[1]]\n        if numRows == 2:\n            return [[1], [1, 1]]\n\n        return self._generate(3, numRows, [[1], [1, 1]])\n\n    def _generate(self, level, targetLevel, result):\n        if level > targetLevel:\n            return result\n\n        pre_level = result[-1]\n        current = [1]\n        for i in range(1, len(pre_level)):\n            pre = pre_level[i-1]\n            cur = pre_level[i]\n            current.append(pre+cur)\n        current.append(1)\n        result.append(current)\n\n        return self._generate(level+1, targetLevel, result)\n")))}d.isMDXComponent=!0}}]);