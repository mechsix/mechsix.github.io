"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[9394],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?t.createElement(m,a(a({ref:r},u),{},{components:n})):t.createElement(m,a({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55057:function(e,r,n){n.r(r),n.d(r,{SpanBlue:function(){return p},SpanGreen:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"336. Palindrome Pairs",sidebar_label:"336. Palindrome Pairs",tags:["Leetcode Hard","Trie"]},s=void 0,c={unversionedId:"leetcode/1-500/palindrome_pairs",id:"leetcode/1-500/palindrome_pairs",title:"336. Palindrome Pairs",description:"https://leetcode.com/problems/palindrome-pairs/",source:"@site/docs/leetcode/1-500/336_palindrome_pairs.mdx",sourceDirName:"leetcode/1-500",slug:"/leetcode/1-500/palindrome_pairs",permalink:"/docs/leetcode/1-500/palindrome_pairs",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1-500/336_palindrome_pairs.mdx",tags:[{label:"Leetcode Hard",permalink:"/docs/tags/leetcode-hard"},{label:"Trie",permalink:"/docs/tags/trie"}],version:"current",sidebarPosition:336,frontMatter:{title:"336. Palindrome Pairs",sidebar_label:"336. Palindrome Pairs",tags:["Leetcode Hard","Trie"]},sidebar:"docSidebar",previous:{title:"334. Increasing Triplet Subsequence",permalink:"/docs/leetcode/1-500/increasing_triplet_subsequence"},next:{title:"338. Counting Bits",permalink:"/docs/leetcode/1-500/counting_bits"}},u=[{value:"Python",id:"python",children:[{value:"Remember Suffix in Trie Tree",id:"remember-suffix-in-trie-tree",children:[],level:3}],level:2}],p=function(e){var r=e.children;e.color;return(0,i.kt)("span",{style:{color:"blue"}},r)},d=function(e){var r=e.children;e.color;return(0,i.kt)("span",{style:{color:"green"}},r)},f={toc:u,SpanBlue:p,SpanGreen:d};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/palindrome-pairs/"},"https://leetcode.com/problems/palindrome-pairs/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("h3",{id:"remember-suffix-in-trie-tree"},"Remember Suffix in Trie Tree"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"K")," is the length of logest word; ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is length of words"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(K^2+N)"),(0,i.kt)("li",{parentName:"ul"},"Space: O((K+N)^2)")),(0,i.kt)("p",null,"Consider ",(0,i.kt)("strong",{parentName:"p"},"3")," cases in ",(0,i.kt)(p,{mdxType:"SpanBlue"},"Word1")," and ",(0,i.kt)(d,{mdxType:"SpanGreen"},"Word2"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Word1 is reversed Word2: ",(0,i.kt)(p,{mdxType:"SpanBlue"},"CAT"),(0,i.kt)(d,{mdxType:"SpanGreen"},"TAC")),(0,i.kt)("li",{parentName:"ol"},"Word2 suffix is reversed Word1: ",(0,i.kt)(p,{mdxType:"SpanBlue"},"CAT"),(0,i.kt)(d,{mdxType:"SpanGreen"},"SOLOSTAC")),(0,i.kt)("li",{parentName:"ol"},"Word1 prefix is reversed Word2: ",(0,i.kt)(p,{mdxType:"SpanBlue"},"CATSOLOS"),(0,i.kt)(d,{mdxType:"SpanGreen"},"TAC"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def palindromePairs(self, words: List[str]) -> List[List[int]]:\n        # Build the trie tree\n        trie = {}\n        for i, word in enumerate(words):\n            cur = trie\n            word = word[::-1] # Build the trie tree with inverse order of the word\n            for j, letter in enumerate(word):\n                if word[j:] == word[j:][::-1]:\n                    if 'suffix' not in cur:\n                        cur['suffix'] = []\n                    cur['suffix'].append(i)   # Remember any suffix id (index) on the level if exist\n                cur = cur.setdefault(letter, {})\n            cur['eow'] = i\n\n        # Consider cases and find solutions\n        solutions = []\n        for i, word in enumerate(words):\n            cur = trie\n            for j, letter in enumerate(word):\n                # Case 3\n                if cur.get('eow') is not None:\n                    if word[j:] == word[j:][::-1]:\n                        solutions.append([i, cur.get('eow')])\n                if letter not in cur:\n                    break\n                cur = cur[letter]\n            else:\n                # Case 1\n                if cur.get('eow') is not None and cur['eow'] != i:\n                    solutions.append([i, cur['eow']])\n\n                # Case 2\n                for j in cur.get('suffix', []):\n                    solutions.append([i, j])\n\n        return solutions\n")))}m.isMDXComponent=!0}}]);