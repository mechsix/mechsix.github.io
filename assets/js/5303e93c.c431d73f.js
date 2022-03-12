"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[3124],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85689:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"290. Word Pattern",sidebar_label:"290. Word Pattern",tags:["Leetcode Easy"]},l=void 0,p={unversionedId:"leetcode/1-500/word_pattern",id:"leetcode/1-500/word_pattern",title:"290. Word Pattern",description:"https://leetcode.com/problems/word-pattern/",source:"@site/docs/leetcode/1-500/290_word_pattern.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/word_pattern",permalink:"/docs/leetcode/1-500/word_pattern",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/290_word_pattern.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"}],version:"current",sidebarPosition:290,frontMatter:{title:"290. Word Pattern",sidebar_label:"290. Word Pattern",tags:["Leetcode Easy"]},sidebar:"docSidebar",previous:{title:"283. Move Zeroes",permalink:"/docs/leetcode/1-500/move_zeros"},next:{title:"297. Serialize and Deserialize Binary Tree",permalink:"/docs/leetcode/1-500/serialize_descrialize_bt"}},s=[{value:"Python",id:"python",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/word-pattern/"},"https://leetcode.com/problems/word-pattern/")),(0,a.kt)("h2",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def wordPattern(self, pattern: str, s: str) -> bool:\n        mapper = dict()\n        words = s.split(' ')\n\n        if len(pattern) != len(words):\n            return False\n\n        for p, word in zip(pattern, words):\n            if word not in mapper:\n                mapper[word] = p\n                continue\n\n            if mapper[word] != p:\n                return False\n\n        return len(mapper.values()) == len(set(mapper.values()))\n")))}d.isMDXComponent=!0}}]);