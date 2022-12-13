"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28181],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,v=f["".concat(c,".").concat(d)]||f[d]||p[d]||l;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30890:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s}});var n=r(83117),o=(r(67294),r(3905));const l={title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},a=void 0,i={unversionedId:"leetcode/501-1000/average_of_levels_in_binary_tree",id:"leetcode/501-1000/average_of_levels_in_binary_tree",title:"637. Average of Levels in Binary Tree",description:"https://leetcode.com/problems/average-of-levels-in-binary-tree/",source:"@site/docs/leetcode/501-1000/637_average_of_levels_in_binary_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/average_of_levels_in_binary_tree",permalink:"/docs/leetcode/501-1000/average_of_levels_in_binary_tree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/637_average_of_levels_in_binary_tree.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:637,frontMatter:{title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},sidebar:"docSidebar",previous:{title:"630. Course Schedule III",permalink:"/docs/leetcode/501-1000/course_schedule_iii"},next:{title:"645. Set Mismatch",permalink:"/docs/leetcode/501-1000/set_mismatch"}},c={},s=[{value:"Python",id:"python",level:2}],u={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/average-of-levels-in-binary-tree/"},"https://leetcode.com/problems/average-of-levels-in-binary-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:\n        def travel(node, level: int, result: list):\n            if not node:\n                return\n\n            if level == len(result):\n                result.append([1, node.val])\n            else:\n                result[level][0] += 1\n                result[level][1] += node.val\n\n            travel(node.left, level+1, result)\n            travel(node.right, level+1, result)\n\n        result = [[1, float(root.val)]]\n        travel(root, 0, result)\n        return [n[1]/n[0] for n in result]\n")))}f.isMDXComponent=!0}}]);