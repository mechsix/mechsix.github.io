"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[7649],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),c=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,f=s["".concat(m,".").concat(d)]||s[d]||p[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var m in t)hasOwnProperty.call(t,m)&&(a[m]=t[m]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44329:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return m},default:function(){return s},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],a={title:"931. Minimum Falling Path Sum",sidebar_label:"931. Minimum Falling Path Sum",tags:["Leetcode Medium","DP"]},m=void 0,c={unversionedId:"leetcode/501-1000/minimum_falling_path_sum",id:"leetcode/501-1000/minimum_falling_path_sum",title:"931. Minimum Falling Path Sum",description:"https://leetcode.com/problems/minimum-falling-path-sum/",source:"@site/docs/leetcode/501-1000/931_minimum_falling_path_sum.md",sourceDirName:"leetcode/501-1000",slug:"/leetcode/501-1000/minimum_falling_path_sum",permalink:"/docs/leetcode/501-1000/minimum_falling_path_sum",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/501-1000/931_minimum_falling_path_sum.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"DP",permalink:"/docs/tags/dp"}],version:"current",sidebarPosition:931,frontMatter:{title:"931. Minimum Falling Path Sum",sidebar_label:"931. Minimum Falling Path Sum",tags:["Leetcode Medium","DP"]},sidebar:"docSidebar",previous:{title:"916. Word Subsets",permalink:"/docs/leetcode/501-1000/word_subsets"},next:{title:"938. Range Sum of BST",permalink:"/docs/leetcode/501-1000/range_sum_bst"}},u=[{value:"Python",id:"python",children:[{value:"Buttom-Up DP (DP Table)",id:"buttom-up-dp-dp-table",children:[],level:3}],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],p={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/minimum-falling-path-sum/"},"https://leetcode.com/problems/minimum-falling-path-sum/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"buttom-up-dp-dp-table"},"Buttom-Up DP (DP Table)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time: O(M*N)"),(0,o.kt)("li",{parentName:"ul"},"Space: O(M*N)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def minFallingPathSum(self, matrix: List[List[int]]) -> int:\n        m, n = len(matrix), len(matrix[0])\n\n        dp = [[0]*n for i in range(m)]\n        dp[0] = matrix[0]\n\n        for row in range(1, m):\n            for col in range(n):\n                parent_min = dp[row-1][col]\n                if col-1 >= 0:\n                    parent_min = min(parent_min, dp[row-1][col-1])\n                if col+1 < n:\n                    parent_min = min(parent_min, dp[row-1][col+1])\n\n                dp[row][col] = parent_min + matrix[row][col]\n\n        return min(dp[-1])\n")),(0,o.kt)("h2",{id:"javascript"},"Javascript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var minFallingPathSum = function(matrix) {\n    let dp = [];\n    for (let row = 0; row < matrix.length; row++) {\n      let tmp = [];\n\n      for (let col = 0; col < matrix[0].length; col++) {\n        if (row === 0) {\n          tmp[col] = matrix[row][col];\n        } else {\n          const left = dp[col - 1] !== undefined ? dp[col - 1] + matrix[row][col] : Infinity;\n          const mid = dp[col] + matrix[row][col];\n          const right = dp[col + 1] !== undefined ? dp[col + 1] + matrix[row][col] : Infinity;\n\n          tmp[col] = Math.min(left, mid, right);\n        }\n      }\n      dp = tmp;\n    }\n\n    return Math.min.apply(null, dp)\n};\n")))}s.isMDXComponent=!0}}]);