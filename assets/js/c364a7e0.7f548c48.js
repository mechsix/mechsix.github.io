"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[28181],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,v=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return t?n.createElement(v,a(a({ref:r},u),{},{components:t})):n.createElement(v,a({ref:r},u))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30890:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const l={title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},a=void 0,i={unversionedId:"leetcode/501-1000/average_of_levels_in_binary_tree",id:"leetcode/501-1000/average_of_levels_in_binary_tree",title:"637. Average of Levels in Binary Tree",description:"https://leetcode.com/problems/average-of-levels-in-binary-tree/",source:"@site/docs/leetcode/501-1000/637_average_of_levels_in_binary_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/average_of_levels_in_binary_tree",permalink:"/docs/leetcode/501-1000/average_of_levels_in_binary_tree",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/637_average_of_levels_in_binary_tree.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"},{label:"DFS",permalink:"/docs/tags/dfs"}],version:"current",sidebarPosition:637,frontMatter:{title:"637. Average of Levels in Binary Tree",sidebar_label:"637. Average of Levels in Binary Tree",tags:["Leetcode Easy","Binary Tree","DFS"]},sidebar:"docSidebar",previous:{title:"630. Course Schedule III",permalink:"/docs/leetcode/501-1000/course_schedule_iii"},next:{title:"645. Set Mismatch",permalink:"/docs/leetcode/501-1000/set_mismatch"}},s={},c=[{value:"Python",id:"python",level:2}],u={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/average-of-levels-in-binary-tree/"},"https://leetcode.com/problems/average-of-levels-in-binary-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:\n        def travel(node, level: int, result: list):\n            if not node:\n                return\n\n            if level == len(result):\n                result.append([1, node.val])\n            else:\n                result[level][0] += 1\n                result[level][1] += node.val\n\n            travel(node.left, level+1, result)\n            travel(node.right, level+1, result)\n\n        result = [[1, float(root.val)]]\n        travel(root, 0, result)\n        return [n[1]/n[0] for n in result]\n")))}d.isMDXComponent=!0}}]);