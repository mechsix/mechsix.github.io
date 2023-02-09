"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[52634],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49133:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const i={title:"1519. Number of Nodes in the Sub-Tree With the Same Label",sidebar_label:"1519. Number of Nodes in the Sub-Tree With the Same Label",tags:["Leetcode Medium","Tree","Hash"]},a=void 0,s={unversionedId:"leetcode/1501-2000/num_of_nodes_in_sub_tree_with_same_label",id:"leetcode/1501-2000/num_of_nodes_in_sub_tree_with_same_label",title:"1519. Number of Nodes in the Sub-Tree With the Same Label",description:"https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/description/",source:"@site/docs/leetcode/1501-2000/1519_num_of_nodes_in_sub_tree_with_same_label.md",sourceDirName:"leetcode/1501-2000",slug:"/leetcode/1501-2000/num_of_nodes_in_sub_tree_with_same_label",permalink:"/docs/leetcode/1501-2000/num_of_nodes_in_sub_tree_with_same_label",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1501-2000/1519_num_of_nodes_in_sub_tree_with_same_label.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Tree",permalink:"/docs/tags/tree"},{label:"Hash",permalink:"/docs/tags/hash"}],version:"current",sidebarPosition:1519,frontMatter:{title:"1519. Number of Nodes in the Sub-Tree With the Same Label",sidebar_label:"1519. Number of Nodes in the Sub-Tree With the Same Label",tags:["Leetcode Medium","Tree","Hash"]},sidebar:"docSidebar",previous:{title:"1423. Maximum Points You Can Obtain from Cards",permalink:"/docs/leetcode/1501-2000/max_points_you_can_obtain_from_cards"},next:{title:"1539. Kth Missing Positive Number",permalink:"/docs/leetcode/1501-2000/kth_missing_possitive_num"}},l={},u=[{value:"Python",id:"python",level:2},{value:"DFS with hashmap",id:"dfs-with-hashmap",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/description/"},"https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/description/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"\u984c\u76ee\u602a\u602a\u7684\uff0c\u8aaa\u662f\u6703\u7d66",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"\u70baroot\u7684tree\uff0c\u4f46test case\u537b\u4e0d\u4e00\u5b9a\u3002\u4e0b\u9762\u9019\u500btest case\u6703\u88ab\u8a8d\u70ba2\u662f1\u7684parent node..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'4\n[[0,2],[0,3],[1,2]]\n"aeed"\n')),(0,o.kt)("h3",{id:"dfs-with-hashmap"},"DFS with hashmap"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict, Counter\n\n\nclass Solution:\n    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:\n        mapper = defaultdict(set)\n\n        for edge in edges:\n            mapper[edge[0]].add(edge[1])\n            mapper[edge[1]].add(edge[0])\n\n        def dfs(node, pre, result):\n            counter = Counter()\n            counter[labels[node]] += 1\n\n            for nei in mapper[node]:\n                if nei == pre:\n                    continue\n                counter += dfs(nei, node, result)\n            result[node] = counter[labels[node]]\n            return counter\n\n        result = [0] * n\n\n        dfs(0, None, result)\n\n        return result\n")))}d.isMDXComponent=!0}}]);