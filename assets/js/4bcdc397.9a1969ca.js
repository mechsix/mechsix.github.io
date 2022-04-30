"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[1117],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66166:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"284. Peeking Iterator",sidebar_label:"284. Peeking Iterator",tags:["Leetcode Medium","System Design"]},c=void 0,s={unversionedId:"leetcode/1-500/peeking_iterator",id:"leetcode/1-500/peeking_iterator",title:"284. Peeking Iterator",description:"https://leetcode.com/problems/peeking-iterator/",source:"@site/docs/leetcode/1-500/284_peeking_iterator.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/peeking_iterator",permalink:"/docs/leetcode/1-500/peeking_iterator",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/284_peeking_iterator.md",tags:[{label:"Leetcode Medium",permalink:"/docs/tags/leetcode-medium"},{label:"System Design",permalink:"/docs/tags/system-design"}],version:"current",sidebarPosition:284,frontMatter:{title:"284. Peeking Iterator",sidebar_label:"284. Peeking Iterator",tags:["Leetcode Medium","System Design"]},sidebar:"docSidebar",previous:{title:"283. Move Zeroes",permalink:"/docs/leetcode/1-500/move_zeros"},next:{title:"289. Game of Life",permalink:"/docs/leetcode/1-500/game_of_life"}},p=[],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/peeking-iterator/"},"https://leetcode.com/problems/peeking-iterator/")),(0,i.kt)("h1",{id:"python"},"Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class PeekingIterator:\n    def __init__(self, iterator):\n        """\n        Initialize your data structure here.\n        :type iterator: Iterator\n        """\n        self.data = iterator\n        self.peeked = None\n\n    def peek(self):\n        """\n        Returns the next element in the iteration without advancing the iterator.\n        :rtype: int\n        """\n        if self.peeked is not None:\n            return self.peeked\n\n        if self.data.hasNext():\n            self.peeked = self.data.next()\n            return self.peeked\n\n    def next(self):\n        """\n        :rtype: int\n        """\n        if self.peeked is not None:\n            result = self.peeked\n            self.peeked = None\n            return result\n        \n        if self.data.hasNext():\n            return self.data.next()\n\n    def hasNext(self):\n        """\n        :rtype: bool\n        """\n        return self.data.hasNext() if self.peeked is None else True\n')))}f.isMDXComponent=!0}}]);