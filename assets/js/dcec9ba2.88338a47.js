"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[938],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,m=u["".concat(a,".").concat(p)]||u[p]||f[p]||s;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<s;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),l=["components"],o={title:"341. Flatten Nested List Iterator",sidebar_label:"341. Flatten Nested List Iterator",tags:["Leetcode Medium","Linked List"]},a=void 0,d={unversionedId:"leetcode/1-500/flatten_nested_list_lterator",id:"leetcode/1-500/flatten_nested_list_lterator",title:"341. Flatten Nested List Iterator",description:"https://leetcode.com/problems/flatten-nested-list-iterator",source:"@site/docs/leetcode/1-500/341_flatten_nested_list_lterator.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/flatten_nested_list_lterator",permalink:"/docs/leetcode/1-500/flatten_nested_list_lterator",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/341_flatten_nested_list_lterator.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"Linked List",permalink:"/docs/tags/linked-list"}],version:"current",sidebarPosition:341,frontMatter:{title:"341. Flatten Nested List Iterator",sidebar_label:"341. Flatten Nested List Iterator",tags:["Leetcode Medium","Linked List"]},sidebar:"docSidebar",previous:{title:"328. Odd Even Linked List",permalink:"/docs/leetcode/1-500/odd_even_linklist"},next:{title:"344. Reverse String",permalink:"/docs/leetcode/1-500/reverse_string"}},c=[{value:"Python",id:"python",children:[],level:2}],f={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/flatten-nested-list-iterator"},"https://leetcode.com/problems/flatten-nested-list-iterator")),(0,s.kt)("h2",{id:"python"},"Python"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'class NestedIterator:\n    def __init__(self, nestedList: [NestedInteger]):\n        self.cache = [item for item in self._flatten(nestedList)]\n        self.cur = 0\n        self.length = len(self.cache)\n\n    def _flatten(self, node):\n        if not node:\n            return\n\n        if isinstance(node, list):\n            items = node\n        elif node.isInteger():\n            items = []\n            yield node\n        else:\n            items = node.getList()\n\n        for item in items:\n            if item.isInteger():\n                yield item.getInteger()\n            else:\n                for children in item.getList():\n                    for child in self._flatten(children):\n                        yield child\n\n    def next(self) -> int:\n        i = self.cur\n        self.cur += 1\n        return self.cache[i]\n\n    def hasNext(self) -> bool:\n         return self.cur < self.length\n# """\n# This is the interface that allows for creating nested lists.\n# You should not implement it, or speculate about its implementation\n# """\n#class NestedInteger:\n#    def isInteger(self) -> bool:\n#        """\n#        @return True if this NestedInteger holds a single integer, rather than a nested list.\n#        """\n#\n#    def getInteger(self) -> int:\n#        """\n#        @return the single integer that this NestedInteger holds, if it holds a single integer\n#        Return None if this NestedInteger holds a nested list\n#        """\n#\n#    def getList(self) -> [NestedInteger]:\n#        """\n#        @return the nested list that this NestedInteger holds, if it holds a nested list\n#        Return None if this NestedInteger holds a single integer\n#        """\n\n\n# Your NestedIterator object will be instantiated and called as such:\n# i, v = NestedIterator(nestedList), []\n# while i.hasNext(): v.append(i.next())\n')))}u.isMDXComponent=!0}}]);