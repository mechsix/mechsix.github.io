"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[95519],{30824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"leetcode/1-500/flatten_nested_list_iterator","title":"341. Flatten Nested List Iterator","description":"https://leetcode.com/problems/flatten-nested-list-iterator/","source":"@site/docs/leetcode/1-500/341_flatten_nested_list_iterator.md","sourceDirName":"leetcode/1-500","slug":"/leetcode/1-500/flatten_nested_list_iterator","permalink":"/docs/leetcode/1-500/flatten_nested_list_iterator","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"Leetcode Medium","permalink":"/docs/tags/leetcode-medium"}],"version":"current","sidebarPosition":341,"frontMatter":{"title":"341. Flatten Nested List Iterator","sidebar_label":"341. Flatten Nested List Iterator","tags":["Leetcode Medium"]},"sidebar":"docSidebar","previous":{"title":"338. Counting Bits","permalink":"/docs/leetcode/1-500/counting_bits"},"next":{"title":"341. Flatten Nested List Iterator","permalink":"/docs/leetcode/1-500/flatten_nested_list_lterator"}}');var s=n(74848),o=n(28453);const i={title:"341. Flatten Nested List Iterator",sidebar_label:"341. Flatten Nested List Iterator",tags:["Leetcode Medium"]},l=void 0,a={},d=[{value:"Python",id:"python",level:2},{value:"Recursive Generator",id:"recursive-generator",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/flatten-nested-list-iterator/",children:"https://leetcode.com/problems/flatten-nested-list-iterator/"})}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.h3,{id:"recursive-generator",children:"Recursive Generator"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class NestedIterator:\n    def __init__(self, nestedList: [NestedInteger]):\n        self.iteral = self._generator(nestedList)\n        self.temp = None\n    \n    def _generator(self, obj):\n        if isinstance(obj, list):\n            for item in obj:\n                yield from self._generator(item)\n        else:\n            if obj.isInteger():\n                yield obj.getInteger()\n            else:\n                for item in obj.getList():\n                    yield from self._generator(item)\n\n    def next(self) -> int:\n        if self.temp is not None:\n            result, self.temp = self.temp, None\n            return result\n        return next(self.iteral)\n    \n    def hasNext(self) -> bool:\n        if self.temp is not None:\n            return True\n        \n        try:\n            self.temp = next(self.iteral)\n            return True\n        except StopIteration:\n            return False\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);