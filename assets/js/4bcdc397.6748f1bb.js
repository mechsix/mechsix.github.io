"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[54862],{70820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1-500/peeking_iterator","title":"284. Peeking Iterator","description":"https://leetcode.com/problems/peeking-iterator/","source":"@site/docs/leetcode/1-500/284_peeking_iterator.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/peeking_iterator","permalink":"/docs/leetcode/1-500/peeking_iterator","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"},{"inline":true,"label":"System Design","permalink":"/docs/tags/system-design"}],"version":"current","sidebarPosition":284,"frontMatter":{"title":"284. Peeking Iterator","sidebar_label":"284. Peeking Iterator","tags":["Leetcode Medium","System Design"]},"sidebar":"docSidebar","previous":{"title":"283. Move Zeroes","permalink":"/docs/leetcode/1-500/move_zeros"},"next":{"title":"289. Game of Life","permalink":"/docs/leetcode/1-500/game_of_life"}}');var o=n(74848),s=n(28453);const i={title:"284. Peeking Iterator",sidebar_label:"284. Peeking Iterator",tags:["Leetcode Medium","System Design"]},a="Python",l={},d=[];function c(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://leetcode.com/problems/peeking-iterator/",children:"https://leetcode.com/problems/peeking-iterator/"})}),"\n",(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"python",children:"Python"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'class PeekingIterator:\n    def __init__(self, iterator):\n        """\n        Initialize your data structure here.\n        :type iterator: Iterator\n        """\n        self.data = iterator\n        self.peeked = None\n\n    def peek(self):\n        """\n        Returns the next element in the iteration without advancing the iterator.\n        :rtype: int\n        """\n        if self.peeked is not None:\n            return self.peeked\n\n        if self.data.hasNext():\n            self.peeked = self.data.next()\n            return self.peeked\n\n    def next(self):\n        """\n        :rtype: int\n        """\n        if self.peeked is not None:\n            result = self.peeked\n            self.peeked = None\n            return result\n        \n        if self.data.hasNext():\n            return self.data.next()\n\n    def hasNext(self):\n        """\n        :rtype: bool\n        """\n        return self.data.hasNext() if self.peeked is None else True\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);