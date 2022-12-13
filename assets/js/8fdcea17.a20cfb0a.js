"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[98183],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:o,i[1]=d;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36062:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return l}});var n=r(83117),o=(r(67294),r(3905));const a={title:"126. Word Ladder II",sidebar_label:"126. Word Ladder II",tags:["Leetcode Hard","Backtracking"]},i=void 0,d={unversionedId:"leetcode/1-500/word_ladder_ii",id:"leetcode/1-500/word_ladder_ii",title:"126. Word Ladder II",description:"https://leetcode.com/problems/word-ladder-ii/",source:"@site/docs/leetcode/1-500/126_word_ladder_ii.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/word_ladder_ii",permalink:"/docs/leetcode/1-500/word_ladder_ii",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/126_word_ladder_ii.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Backtracking",permalink:"/docs/tags/backtracking"}],version:"current",sidebarPosition:126,frontMatter:{title:"126. Word Ladder II",sidebar_label:"126. Word Ladder II",tags:["Leetcode Hard","Backtracking"]},sidebar:"docSidebar",previous:{title:"125. Valid Palindrome",permalink:"/docs/leetcode/1-500/valid_palindrome"},next:{title:"127. Word Ladder",permalink:"/docs/leetcode/1-500/word_ladder"}},c={},l=[{value:"Python",id:"python",level:2},{value:"Backtracking (Timelimit Exceed)",id:"backtracking-timelimit-exceed",level:3}],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/word-ladder-ii/"},"https://leetcode.com/problems/word-ladder-ii/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("h3",{id:"backtracking-timelimit-exceed"},"Backtracking (Timelimit Exceed)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u984c\u76ee\u53ea\u60f3\u8981\u6c42shortest transformation sequences\uff0c\u4f46\u9019\u500bbacktrack\u6703\u627e\u51fa\u6240\u6709\u53ef\u80fd\u7684\u8def\u5f91"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5df1\u5beb\u7684\u7559\u500b\u7d00\u9304")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import defaultdict\nfrom string import ascii_lowercase\n\n\nclass Solution:\n    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:\n        if endWord not in wordList:\n            return []\n\n        word_set = set(wordList)\n\n        mapper = defaultdict(set)\n        for word in word_set | set([beginWord]):\n            for i in range(len(word)):\n                for char in ascii_lowercase:\n                    new_word = word[:i] + char + word[i+1:]\n                    if char != word[i] and new_word in word_set:\n                        mapper[word].add(new_word)\n\n        def backtrack(path, result):\n            last = path[-1]\n\n            if last == endWord:\n                result.append(path[:])\n                return\n\n            for word in mapper[last]:\n                if word in path:\n                    continue\n                path.append(word)\n                backtrack(path, result)\n                path.pop()\n\n        candidates = []\n        backtrack([beginWord], candidates)\n\n        if not candidates:\n            return []\n\n        result = dict()\n        for cand in candidates:\n            if len(cand) not in result:\n                result[len(cand)] = []\n            result[len(cand)].append(cand)\n\n        return result[min(result.keys())]\n")))}u.isMDXComponent=!0}}]);