"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[6631],{53975:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"leetcode/1501-2000/lowest_common_ancestor_of_a_binary_tree_iii","title":"1650. Lowest Common Ancestor of a Binary Tree III","description":"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/","source":"@site/docs/leetcode/1501-2000/1650_lowest_common_ancestor_of_a_binary_tree_iii.md","sourceDirName":"leetcode/1501-2000","slug":"/leetcode/1501-2000/lowest_common_ancestor_of_a_binary_tree_iii","permalink":"/docs/leetcode/1501-2000/lowest_common_ancestor_of_a_binary_tree_iii","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Binary Tree","permalink":"/docs/tags/binary-tree"},{"inline":true,"label":"Floyd\'s Algorithm","permalink":"/docs/tags/floyds-algorithm"}],"version":"current","sidebarPosition":1650,"frontMatter":{"title":"1650. Lowest Common Ancestor of a Binary Tree III","sidebar_label":"1650. Lowest Common Ancestor of a Binary Tree III","tags":["Leetcode Medium","Binary Tree","Floyd\'s Algorithm"]},"sidebar":"docSidebar","previous":{"title":"1647. Minimum Deletions to Make Character Frequencies Unique","permalink":"/docs/leetcode/1501-2000/mini_deletions_make_character_frequencies_unique"},"next":{"title":"1658. Minimum Operations to Reduce X to Zero","permalink":"/docs/leetcode/1501-2000/min_operations_to_reduce_x_to_zero"}}');var r=o(74848),i=o(28453);const s={title:"1650. Lowest Common Ancestor of a Binary Tree III",sidebar_label:"1650. Lowest Common Ancestor of a Binary Tree III",tags:["Leetcode Medium","Binary Tree","Floyd's Algorithm"]},l=void 0,a={},d=[{value:"Python",id:"python",level:2},{value:"Find root first then DFS",id:"find-root-first-then-dfs",level:3},{value:"Floyd&#39;s Algorithm",id:"floyds-algorithm",level:3},{value:"Javascript",id:"javascript",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/",children:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/"})}),"\n",(0,r.jsx)(n.h2,{id:"python",children:"Python"}),"\n",(0,r.jsx)(n.h3,{id:"find-root-first-then-dfs",children:"Find root first then DFS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':\n        root = p\n        while root.parent:\n            root = root.parent\n\n        # Same as Leetcode 236.\n        def dfs(node):\n            if not node:\n                return node\n\n            if node.val == p.val or node.val == q.val:\n                return node\n\n            left = dfs(node.left)\n            right = dfs(node.right)\n\n            if not left or not right:\n                return left if left else right\n\n            return node\n\n        return dfs(root)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"floyds-algorithm",children:"Floyd's Algorithm"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c07\u5f9e\u5169\u500bnode\u5230root\u9593\u7684\u9019\u689dpath\u505a\u6210looped Linked List"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7528Floyd's Algorithm\u53bb\u627e\u51fa\u91cd\u758a\u7684\u7bc0\u9ede"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Time: # \u4e0d\u597d\u7b97\uff0c\u4f46\u6703\u662f\u5169\u500b\u7bc0\u9ede\u9593\u7d93\u904eroot\u9023\u7d50\u8d77\u4f86\u7684\u9019\u689dLinked List\u8207\u5169\u500b\u7bc0\u9ede\u7684\u5dee"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Space: O(1)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class Solution:\n    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':\n        p1, p2 = p, q\n        while p1 != p2:\n            p1 = p1.parent if p1.parent else q\n            p2 = p2.parent if p2.parent else p\n\n        return p1\n"})}),"\n",(0,r.jsx)(n.h2,{id:"javascript",children:"Javascript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var lowestCommonAncestor = function(p, q) {\n    function findRoot(node) {\n        return node.parent ? findRoot(node.parent) : node;\n    }\n\n    const root = findRoot(p);\n    let res = null;\n    const recursive = (node) => {\n        if (!node) return false;\n        const isLeft = recursive(node.left);\n        const isRight = recursive(node.right);\n\n        const isMid = node.val === p.val || node.val === q.val;\n        if (isLeft && isRight || isLeft && isMid || isRight && isMid) {\n            res = node;\n            return;\n        }\n        return isLeft || isRight || isMid;\n    }\n\n    recursive(root);\n    return res;\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);