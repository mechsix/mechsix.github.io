"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[30085],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),i=(n(67294),n(3905));const a={title:"54. Spiral Matrix",sidebar_label:"54. Spiral Matrix",tags:["Leetcode Medium","Matrix"]},o=void 0,l={unversionedId:"leetcode/1-500/spiral_matrix",id:"leetcode/1-500/spiral_matrix",title:"54. Spiral Matrix",description:"https://leetcode.com/problems/spiral-matrix/",source:"@site/docs/leetcode/1-500/54_spiral_matrix.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/spiral_matrix",permalink:"/docs/leetcode/1-500/spiral_matrix",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/54_spiral_matrix.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Matrix",permalink:"/docs/tags/matrix"}],version:"current",sidebarPosition:54,frontMatter:{title:"54. Spiral Matrix",sidebar_label:"54. Spiral Matrix",tags:["Leetcode Medium","Matrix"]},sidebar:"docSidebar",previous:{title:"53. Maximum Subarray",permalink:"/docs/leetcode/1-500/max_subarray"},next:{title:"55. Jump Game",permalink:"/docs/leetcode/1-500/jump_gamp"}},c={},s=[{value:"Python",id:"python",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/spiral-matrix/"},"https://leetcode.com/problems/spiral-matrix/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(m*n)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(m*n)   # the visited hashmap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:\n        m = len(matrix)\n        n = len(matrix[0])\n\n        limit = m*n\n        visited = set()\n        result = []\n\n        direction = 'right'\n        x, y = 0, 0\n        while len(result) < limit:\n            result.append(matrix[y][x])\n            visited.add((x, y))\n\n            if direction == 'right':\n                if x+1 < n and (x+1, y) not in visited:\n                    x += 1\n                else:\n                    direction = 'down'\n                    y += 1\n            elif direction == 'down':\n                if y+1 < m and (x, y+1) not in visited:\n                    y += 1\n                else:\n                    direction = 'left'\n                    x -= 1\n            elif direction == 'left':\n                if x-1 >= 0 and (x-1, y) not in visited:\n                    x -= 1\n                else:\n                    direction = 'up'\n                    y -= 1\n            else:\n                if y-1 >= 0 and (x, y-1) not in visited:\n                    y -= 1\n                else:\n                    direction = 'right'\n                    x += 1\n\n        return result\n")))}p.isMDXComponent=!0}}]);