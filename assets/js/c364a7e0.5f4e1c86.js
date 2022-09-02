"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[8181],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,v=f["".concat(c,".").concat(d)]||f[d]||p[d]||l;return t?n.createElement(v,a(a({ref:r},u),{},{components:t})):n.createElement(v,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30890:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=t(87462),o=t(63366),l=(t(67294),t(3905)),a=["components"],i={title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},c=void 0,s={unversionedId:"leetcode/501-1000/average_of_levels_in_binary_tree",id:"leetcode/501-1000/average_of_levels_in_binary_tree",title:"637. Average of Levels in Binary Tree",description:"https://leetcode.com/problems/average-of-levels-in-binary-tree/",source:"@site/docs/leetcode/501-1000/637_average_of_levels_in_binary_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/average_of_levels_in_binary_tree",permalink:"/docs/leetcode/501-1000/average_of_levels_in_binary_tree",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/637_average_of_levels_in_binary_tree.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:637,frontMatter:{title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},sidebar:"docSidebar",previous:{title:"630. Course Schedule III",permalink:"/docs/leetcode/501-1000/course_schedule_iii"},next:{title:"647. Palindromic Substrings",permalink:"/docs/leetcode/501-1000/palindromic_substrings"}},u=[{value:"Python",id:"python",children:[],level:2}],p={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/average-of-levels-in-binary-tree/"},"https://leetcode.com/problems/average-of-levels-in-binary-tree/")),(0,l.kt)("h2",{id:"python"},"Python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:\n        def travel(node, level: int, result: list):\n            if not node:\n                return\n\n            if level == len(result):\n                result.append([1, node.val])\n            else:\n                result[level][0] += 1\n                result[level][1] += node.val\n\n            travel(node.left, level+1, result)\n            travel(node.right, level+1, result)\n\n        result = [[1, float(root.val)]]\n        travel(root, 0, result)\n        return [n[1]/n[0] for n in result]\n")))}f.isMDXComponent=!0}}]);