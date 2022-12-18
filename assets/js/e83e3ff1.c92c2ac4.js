"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[21752],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,m=u["".concat(s,".").concat(p)]||u[p]||f[p]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12989:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c}});var r=n(83117),o=(n(67294),n(3905));const i={title:"98. Validate Binary Search Tree",sidebar_label:"98. Validate Binary Search Tree",tags:["Leetcode Medium","BST","Rust"]},l=void 0,a={unversionedId:"leetcode/1-500/bst_validation",id:"leetcode/1-500/bst_validation",title:"98. Validate Binary Search Tree",description:"https://leetcode.com/problems/validate-binary-search-tree",source:"@site/docs/leetcode/1-500/98_bst_validation.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/bst_validation",permalink:"/docs/leetcode/1-500/bst_validation",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/98_bst_validation.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"BST",permalink:"/docs/tags/bst"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:98,frontMatter:{title:"98. Validate Binary Search Tree",sidebar_label:"98. Validate Binary Search Tree",tags:["Leetcode Medium","BST","Rust"]},sidebar:"docSidebar",previous:{title:"97. Interleaving String",permalink:"/docs/leetcode/1-500/interleaving_string"},next:{title:"99. Recover Binary Search Tree",permalink:"/docs/leetcode/1-500/recover_bst"}},s={},c=[{value:"Python",id:"python",level:2},{value:"First Solution",id:"first-solution",level:3},{value:"Second Solution",id:"second-solution",level:3},{value:"Rust",id:"rust",level:2},{value:"DFS",id:"dfs",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/validate-binary-search-tree"},"https://leetcode.com/problems/validate-binary-search-tree")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"first-solution"},"First Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n        return self._is_valid(root, None, None)\n\n    def _is_valid(self, node, min_val, max_val):\n        if not node:\n            return True\n\n        if (min_val is not None and node.val <= min_val) \\\n        or (max_val is not None and node.val >= max_val):\n            return False\n")),(0,o.kt)("h3",{id:"second-solution"},"Second Solution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from math import inf\n\n\nclass Solution:\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\n\n        def dfs(node, left, right):\n            if not node:\n                return True\n\n            if node.val <= left or node.val >= right:\n                return False\n\n            return dfs(node.left, left, node.val) and dfs(node.right, node.val, right)\n\n        return dfs(root, -inf, inf)\n")),(0,o.kt)("h2",{id:"rust"},"Rust"),(0,o.kt)("h3",{id:"dfs"},"DFS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use std::rc::Rc;\nuse std::cell::RefCell;\nimpl Solution {\n    pub fn is_valid_bst(root: Option<Rc<RefCell<TreeNode>>>) -> bool {\n        Self::dfs(&root, i64::MIN, i64::MAX)\n    }\n\n    fn dfs(node: &Option<Rc<RefCell<TreeNode>>>, low:i64, high:i64) -> bool{\n        match node{\n            None => true,\n            Some(n) =>{\n                let v = n.borrow().val as i64;\n                if v <= low || v >= high{\n                    false\n                } else {\n                    Self::dfs(&n.borrow().left, low, v) &&\n                    Self::dfs(&n.borrow().right, v, high)\n                }\n            }\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);