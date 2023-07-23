"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[98734],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)t=d[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,d=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||d;return t?n.createElement(f,a(a({ref:r},s),{},{components:t})):n.createElement(f,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var d=t.length,a=new Array(d);a[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<d;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74013:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const d={title:"127. Word Ladder",sidebar_label:"127. Word Ladder",tags:["Leetcode Hard","BFS"]},a=void 0,i={unversionedId:"leetcode/1-500/word_ladder",id:"leetcode/1-500/word_ladder",title:"127. Word Ladder",description:"https://leetcode.com/problems/word-ladder/",source:"@site/docs/leetcode/1-500/127_word_ladder.md",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/word_ladder",permalink:"/docs/leetcode/1-500/word_ladder",draft:!1,editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/127_word_ladder.md",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"BFS",permalink:"/docs/tags/bfs"}],version:"current",sidebarPosition:127,frontMatter:{title:"127. Word Ladder",sidebar_label:"127. Word Ladder",tags:["Leetcode Hard","BFS"]},sidebar:"docSidebar",previous:{title:"126. Word Ladder II",permalink:"/docs/leetcode/1-500/word_ladder_ii"},next:{title:"128. Longest Consecutive Sequence",permalink:"/docs/leetcode/1-500/longest_consecutive_sequence"}},l={},c=[{value:"Python",id:"python",level:2}],s={toc:c},u="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/word-ladder/"},"https://leetcode.com/problems/word-ladder/")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"BFS with deuplicate remove")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from collections import deque\n\n\nclass Solution:\n    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:\n        if beginWord == endWord:\n            return 1\n\n        queue = deque()\n        queue.append(beginWord)\n\n        candidates = set(wordList)\n        candidates.add(beginWord)\n\n        result = 1\n        while queue:\n            for i in range(len(queue)):\n                word = queue.popleft()\n\n                if word not in candidates:\n                    continue\n\n                candidates.remove(word)\n\n                if word == endWord:\n                    return result\n\n                for i in range(len(word)):\n                    for char in string.ascii_letters[:26]:\n                        temp_word = word[:i] + char + word[i+1:]\n                        if temp_word in candidates:\n                            queue.append(temp_word)\n            result += 1\n        return 0\n")))}p.isMDXComponent=!0}}]);