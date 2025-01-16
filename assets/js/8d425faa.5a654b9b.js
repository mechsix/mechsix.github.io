"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[83978],{41010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"leetcode/1001-1500/all_elms_in_two_bst","title":"1305. All Elements in Two Binary Search Trees","description":"Python","source":"@site/docs/leetcode/1001-1500/1305_all_elms_in_two_bst.md","sourceDirName":"leetcode/1001-1500","slug":"/leetcode/1001-1500/all_elms_in_two_bst","permalink":"/docs/leetcode/1001-1500/all_elms_in_two_bst","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"DFS","permalink":"/docs/tags/dfs"},{"inline":true,"label":"BST","permalink":"/docs/tags/bst"}],"version":"current","sidebarPosition":1305,"frontMatter":{"title":"1305. All Elements in Two Binary Search Trees","sidebar_label":"1305. All Elements in Two Binary Search Trees","tags":["Leetcode Medium","DFS","BST"]},"sidebar":"docSidebar","previous":{"title":"1302. Deepest Leaves Sum","permalink":"/docs/leetcode/1001-1500/deepest_leaves_sum"},"next":{"title":"1306. Jump Game III","permalink":"/docs/leetcode/1001-1500/jump_game_iii"}}');var s=n(74848),r=n(28453);const o={title:"1305. All Elements in Two Binary Search Trees",sidebar_label:"1305. All Elements in Two Binary Search Trees",tags:["Leetcode Medium","DFS","BST"]},i=void 0,a={},c=[{value:"Python",id:"python",level:2}];function d(e){const t={code:"code",h2:"h2",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:\n\n        tree1 = self._travel(root1, [])\n        tree2 = self._travel(root2, [])\n\n        return sorted(tree1 + tree2)\n\n\n    def _travel(self, node, result):\n        if not node:\n            return result\n\n        self._travel(node.left, result)\n        result.append(node.val)\n        self._travel(node.right, result)\n\n        return result\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var l=n(96540);const s={},r=l.createContext(s);function o(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);