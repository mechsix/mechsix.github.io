"use strict";(self.webpackChunkmechsix_github_io_source=self.webpackChunkmechsix_github_io_source||[]).push([[85472],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94145:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"1065. Index Pairs of a String",sidebar_label:"1065. Index Pairs of a String",tags:["Leetcode Easy","Trie"]},s=void 0,l={unversionedId:"leetcode/1001-1500/index_pairs_of_string",id:"leetcode/1001-1500/index_pairs_of_string",title:"1065. Index Pairs of a String",description:"https://leetcode.com/problems/index-pairs-of-a-string/",source:"@site/docs/leetcode/1001-1500/1065_index_pairs_of_string.md",sourceDirName:"leetcode/1001-1500",slug:"/leetcode/1001-1500/index_pairs_of_string",permalink:"/docs/leetcode/1001-1500/index_pairs_of_string",editUrl:"https://github.dev/mechsix/mechsix.github.io.source/tree/master/docs/leetcode/1001-1500/1065_index_pairs_of_string.md",tags:[{label:"Leetcode Easy",permalink:"/docs/tags/leetcode-easy"},{label:"Trie",permalink:"/docs/tags/trie"}],version:"current",sidebarPosition:1065,frontMatter:{title:"1065. Index Pairs of a String",sidebar_label:"1065. Index Pairs of a String",tags:["Leetcode Easy","Trie"]},sidebar:"docSidebar",previous:{title:"1064. Fixed Point",permalink:"/docs/leetcode/1001-1500/fixed_point"},next:{title:"1089. Duplicate Zeros",permalink:"/docs/leetcode/1001-1500/duplicate_zeros"}},u=[{value:"Python",id:"python",children:[],level:2},{value:"Javascript",id:"javascript",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/index-pairs-of-a-string/"},"https://leetcode.com/problems/index-pairs-of-a-string/")),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time: O(NlogN)  # N = len(text)"),(0,i.kt)("li",{parentName:"ul"},"Space: O(K)  # K = sum(len(words))")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    EOS = '-'\n    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:\n        # Build the Tire search tree for all words\n        root = {}\n        for word in words:\n            cur = root\n            for letter in word:\n                cur = cur.setdefault(letter, {})\n            cur[self.EOS] = True\n\n        result = []\n        for i in range(len(text)):\n            cur = root\n            for j in range(i, len(text)):\n                if text[j] not in cur:\n                    break\n                cur = cur[text[j]]\n                if self.EOS in cur:\n                    result.append([i, j])\n\n        return result\n")),(0,i.kt)("h2",{id:"javascript"},"Javascript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"var indexPairs = function (text, words) {\n    const trie = new Trie();\n    trie.insert(words);\n    return trie.find(text);\n};\n\nclass Trie {\n    constructor() {\n        this.root = {};\n    }\n\n    insert(words) {\n        for (const word of words) {\n            let node = this.root;\n            for (const char of word) {\n                if (!node[char]) node[char] = {};\n                node = node[char];\n            }\n            node.isMatched = true;\n        }\n    }\n\n    find(text) {\n        const result = [];\n\n        outer: \n        for (let i = 0; i < text.length; i++) {\n            let node = this.root;\n            for (let k = i; k < text.length; k++) {\n                const char = text[k];\n\n                if (!node[char]) continue outer;\n                else if (node[char].isMatched) {\n                    result.push([i, k]);\n                }\n                node = node[char];\n            }\n        }\n        return result;\n    }\n}\n")))}p.isMDXComponent=!0}}]);