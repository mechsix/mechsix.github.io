"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[97217],{37184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"leetcode/1-500/simplify_path","title":"71. Simplify Path","description":"https://leetcode.com/problems/simplify-path/","source":"@site/docs/leetcode/1-500/71_simplify_path.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/simplify_path","permalink":"/docs/leetcode/1-500/simplify_path","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"Stack","permalink":"/docs/tags/stack"}],"version":"current","sidebarPosition":71,"frontMatter":{"title":"71. Simplify Path","sidebar_label":"71. Simplify Path","tags":["Leetcode Medium","Stack"]},"sidebar":"docSidebar","previous":{"title":"70. Climbing Stairs","permalink":"/docs/leetcode/1-500/climbing_stairs"},"next":{"title":"72. Edit Distance","permalink":"/docs/leetcode/1-500/edit_distance"}}');var s=n(74848),c=n(28453);const l={title:"71. Simplify Path",sidebar_label:"71. Simplify Path",tags:["Leetcode Medium","Stack"]},o=void 0,r={},a=[{value:"Python",id:"python",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/simplify-path/",children:"https://leetcode.com/problems/simplify-path/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4e4d\u770b\u6709\u9ede\u8907\u96dc\uff0c\u4f46\u5176\u5be6\u6c92\u4ec0\u9ebc\u96e3\u5ea6\u76f4\u76f4\u5beb\u904e\u53bb..."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Solution:\n    def simplifyPath(self, path: str) -> str:\n        stack = []\n\n        cur = ''\n        for letter in path:\n            if letter == '/':\n                if cur == '..':\n                    if stack:\n                        stack.pop()\n                    cur = ''\n                elif cur == '.':\n                    cur = ''\n                elif cur:\n                    stack.append(cur)\n                cur = ''\n            else:\n                cur += letter\n\n        if cur == '..':\n            if stack:\n                stack.pop()\n        elif cur != '.':\n            stack.append(cur)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const s={},c=i.createContext(s);function l(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);