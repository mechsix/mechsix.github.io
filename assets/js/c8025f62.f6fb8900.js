"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3954],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(v,i(i({ref:r},u),{},{components:t})):n.createElement(v,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8214:function(e,r,t){t.r(r),t.d(r,{contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={title:"987. Vertical Order Traversal of a Binary Tree",sidebar_label:"987. Vertical Order Traversal of a Binary Tree",tags:["Leetcode Hard","Binary Tree"]},l=void 0,s={unversionedId:"leetcode/501-1000/vertical_order_traversal_of_a_binary_tree",id:"leetcode/501-1000/vertical_order_traversal_of_a_binary_tree",title:"987. Vertical Order Traversal of a Binary Tree",description:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",source:"@site/docs/leetcode/501-1000/987_vertical_order_traversal_of_a_binary_tree.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/vertical_order_traversal_of_a_binary_tree",permalink:"/docs/leetcode/501-1000/vertical_order_traversal_of_a_binary_tree",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/987_vertical_order_traversal_of_a_binary_tree.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Binary Tree",permalink:"/docs/tags/binary-tree"}],version:"current",sidebarPosition:987,frontMatter:{title:"987. Vertical Order Traversal of a Binary Tree",sidebar_label:"987. Vertical Order Traversal of a Binary Tree",tags:["Leetcode Hard","Binary Tree"]},sidebar:"docSidebar",previous:{title:"986. Interval List Intersections",permalink:"/docs/leetcode/501-1000/interval_list_intersections"},next:{title:"997. Find the Town Judge",permalink:"/docs/leetcode/501-1000/find_the_town_judge"}},u=[{value:"Python",id:"python",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],d={toc:u};function p(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"},"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var verticalTraversal = function(root) {\n    const queue = [];\n    const tmp = [];\n    let start = Infinity;\n    queue.push([0, 0, root]);\n    \n    while (queue.length) {\n        const [row, col, node] = queue.shift();\n \n        tmp.push([row, col, node.val]);\n        start = Math.min(col, start)\n        \n        if (node.left) queue.push([row + 1, col - 1, node.left]);\n        if (node.right) queue.push([row + 1, col + 1, node.right]);\n    }\n    \n    tmp.sort((a, b) => { \n        // compare col\n        if (a[1] === b[1]) {\n            // compare row\n            if (a[0] === b[0]) {\n                // compare val\n                return a[2] - b[2];\n            } else {\n                return a[0] - b[0];\n            }\n        } else {\n            return a[1] - b[1]     \n        }\n    });\n    \n    const res = [];\n    let inc = Math.abs(start);\n    \n    for (const [,col, val] of tmp) {\n        const idx = col + inc;\n        \n        if (res[idx] !== undefined) res[idx].push(val);\n        else res.push([val]);\n    }\n    \n    return res;\n};\n")))}p.isMDXComponent=!0}}]);